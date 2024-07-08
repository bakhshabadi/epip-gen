import { ForbiddenException } from '@nestjs/common'
import axios from 'axios'
import * as fs from 'fs'
import * as _ from 'lodash'
import { snakeCase } from 'snake-case'
import { baseDto, baseService } from '../helpers/base.function'
import { BaseService } from './@base.service'
export class NgGenService extends BaseService {
  // private axios: Axios;
  constructor() {
    super()
    // this.axios = new Axios();
  }
  private schemas: Array<any> = []
  private schemasPattern: any = {}
  private paths: Array<any> = []

  override async run(): Promise<void> {
    const response = await axios({
      method: 'GET',
      url: this.swgAddress
    }).catch(() => {
      throw new ForbiddenException('API not available')
    })
    if (response.status != 200) {
      throw new Error('http status is ' + response.status)
    }

    this.schemas = _(response.data.components.schemas)
      .map((f, k) => {
        f.name = k
        return f
      })
      .value()

    this.paths = []
    for (const key in response.data.paths) {
      if (Object.prototype.hasOwnProperty.call(response.data.paths, key)) {
        const element = response.data.paths[key]
        for (const key1 in element) {
          if (Object.prototype.hasOwnProperty.call(element, key1)) {
            const api = element[key1]
            api.name = key
            api.method = key1
            this.paths.push(api)
          }
        }
      }
    }

    let models = []

    for (let i = 0; i < this.schemas.length; i++) {
      const element = this.schemas[i]
      this.schemasPattern[element.name] = element
      models.push(
        this.SchemaModel(
          this.schemasPattern,
          element.name,
          this.splitPath,
          this.getPlugin('class-dto')
        )[0]
      )
    }

    const arr = _(this.paths)
      .groupBy((f) => f.tags[0])
      .value()
    let indexTs = []
    for (const key in arr) {
      if (Object.prototype.hasOwnProperty.call(arr, key)) {
        const element = arr[key]
        let str = await this.generateApi(element).catch((err) => {
          throw new Error('Error: ' + err)
        })
        indexTs.push(str)
      }
    }

    if (!(await fs.existsSync(this.output + '/apis/@base'))) {
      await fs.mkdirSync(this.output + '/apis/@base')
    }
    await fs.writeFileSync(
      this.output + '/apis/@base/base.service.ts',
      baseService(this.environment, this.swgAddress, '', false)
    )
    await fs.writeFileSync(this.output + '/apis/@base/base.dto.ts', baseDto())
    await fs.writeFileSync(
      this.output + '/apis/models.ts',
      `import Ajv from "ajv";\nimport AjvFormat from "ajv-formats";\n\n` + models.join('\n')
    )
    console.log('your operation is succeed.')
  }

  override async generateApi(path: any): Promise<string> {
    if (!(await fs.existsSync(this.output + '/apis/'))) {
      await fs.mkdirSync(this.output + '/apis/')
    }

    let route = this.output + 'apis/'
    let arr = path[0].tags[0].split('/')
    for (let index = 0; index < arr.length; index++) {
      route += arr[index].trim() + '/'
      if (!(await fs.existsSync(route))) {
        await fs.mkdirSync(route)
      }
    }

    await fs.writeFileSync(
      route + arr[arr.length - 1].trim() + '.service.ts',
      await this.SchemaApi(path, this.schemasPattern, [route, arr[arr.length - 1].trim()])
    )
    return route
  }

  override async generateModels(schema: any) {}

  override async generateEnums(): Promise<void> {}

  private async SchemaApi(apis, schemasPattern: any, fileNames: string[]) {
    let className = ''
    let arr = []
    let importsData = []
    for (let index = 0; index < apis.length; index++) {
      const api = apis[index]
      if (!className) {
        className = api.operationId.split('Controller_')[0]
      }

      let params = []
      let _queries = []
      if (api.parameters) {
        params = api.parameters.filter((f) => f.in == 'path')
        params = params.map((f) => `${f.name}: ${f.schema.type || 'number'}`)
        _queries = api.parameters.filter((f) => f.in == 'query')
      }

      let _queryName = ''
      let options = [
        `    method: '${api.method.toUpperCase()}'`,
        `            url: apiRoute + \`${api.name.replace(/\{/g, '${')}\``
      ]
      if (_queries.length) {
        _queryName = api.operationId.split('Controller_')[1] + 'QueryDtoIn'
        // queries.push(createQuery(_queryName, _queries));
        importsData.push({
          key: _queryName,
          data: [this.createQuery(_queryName, _queries), []],
          type: 'query'
        })
        // importsData.push({ key: _queryName, data: SchemaModel(schemasPattern, _queries), type: "query" });
        params.push('queries: Partial<' + _queryName + '>')
        options.push(`            params: queries`)
      }

      let _body = api?.requestBody?.content
      if (_body) {
        if (_body['application/json']) {
          _body = _body['application/json']
          options.push(`            headers: {"Content-Type": "multipart/form-data"}`)
        } else if (_body['multipart/form-data']) {
          _body = _body['multipart/form-data']
        } else if (_body['application/x-www-form-urlencoded']) {
          _body = _body['application/x-www-form-urlencoded']
        } else {
          console.error('Not support:' + Object.keys(_body).join(', '))
        }

        _body = _body.schema

        if (_body['$ref']) {
          let model = _body['$ref'].split('/').reverse()[0]
          params.push('data: ' + model)
          options.push('            data: data ')
          // imports.push(`import { ${model} } from "./${fileNames[1]}.dto";`)
          if (schemasPattern[model]) {
            importsData.push({
              key: model,
              data: this.SchemaModel(
                schemasPattern,
                model,
                this.splitPath,
                this.getPlugin('class-dto')
              ),
              type: 'body'
            })
          } else {
            console.log(model + ' is not in swagger')
          }
        }
      }

      let _resp = api?.responses
      let _output = null

      _(_resp)
        .map(async (http, j) => {
          if (http.content) {
            if (http.content['application/json'].schema.allOf) {
              _output = http.content['application/json'].schema.allOf
              let prop1 = _output[0].$ref.split('/').reverse()[0]
              let prop2 = _output[1].properties[
                prop1 == 'IResponseAll' ? 'results' : 'result'
              ].items.$ref
                .split('/')
                .reverse()[0]
              _output = ` :Promise<${prop1}<${prop2}>>`
              if (schemasPattern[prop2]) {
                importsData.push({
                  key: prop2,
                  data: this.SchemaModel(
                    schemasPattern,
                    prop2,
                    this.splitPath,
                    this.getPlugin('class-dto')
                  ),
                  type: 'output'
                })
              } else {
                console.log(prop2 + ' is not in swagger')
              }
            } else if (http.content['application/json'].schema.$ref) {
              _output = http.content['application/json'].schema
              let prop1 = _output.$ref.split('/').reverse()[0]
              _output = ` :Promise<${prop1}>`
              if (schemasPattern[prop1]) {
                importsData.push({
                  key: prop1,
                  data: this.SchemaModel(
                    schemasPattern,
                    prop1,
                    this.splitPath,
                    this.getPlugin('class-dto')
                  ),
                  type: 'output'
                })
              } else {
                console.log(prop1 + ' is not in swagger')
              }
            }
          }
        })
        .value()

      arr.push(
        `    public static async ${api.operationId.split('Controller_')[1]} (${params.join(', ')})${
          _output || ' : Promise<any>'
        } {
        const resp = await axios({
        ${options.join(',\n')}
        }).catch((err:any) => {
            throw new Error('API not available');
        });
        if (resp.status != 200 && resp.status != 201) {
            console.error(resp.data.message);
            throw new Error("http status is " + resp.status);
        }

        if(![200,201].includes(resp.data.status)){
            console.warn(resp.data.message);
            throw new Error(resp.data.message);
        }

        return resp.data;
    }`
      )
    }
    let arrModels = _(importsData)
      .uniqBy((f) => f.key)
      .value()
    let data = ''

    arrModels.map((f) => {
      data += f.data[1].join('\n\n') //imports
    })
    data += '\n\n'
    arrModels.map((f) => {
      data += f.data[0] + '\n\n' //schemas
    })

    let indexTs = []
    indexTs.push(`export * from "./${fileNames[1] + '.service'}";`)
    if (arrModels.length) {
      indexTs.push(`export * from "./${fileNames[1] + '.dto'}";`)
      await fs.writeFileSync(snakeCase(fileNames[0] + fileNames[1]) + '.dto.ts', data)
    }

    await fs.writeFileSync(fileNames[0] + 'index.ts', indexTs.join('\n'))

    return `import axios from "axios";
import { apiRoute } from "../../@base/base.service";
import { IResponse, IResponseAll} from "../../@base/base.dto";
${(() => {
  if (importsData.length > 0) {
    return `import {${arrModels.map((f) => f.key).join(', ')}} from "./${fileNames[1]}.dto";`
  }
  return ``
})()}

export class ${className}ServiceApi {    
${arr.join('\n')}

}`
  }
}
