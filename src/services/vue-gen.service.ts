import { BaseService } from "./@base.service";
import axios from 'axios';
import * as _ from "lodash";
import { ForbiddenException } from "@nestjs/common";
import * as fs from "fs";
import { baseDto, baseService } from "../helpers/base.function";
import to from "await-to-js";

import * as prettier from "prettier";
import path = require("path");

export class VueGenService extends BaseService {
    constructor() {
        super();
    }
    private schemas: Array<any> = [];
    private schemasPattern: any = {};
    private paths: Array<any> = [];

    private getPathSplit() {
        const val = [...new Array(this.splitPath)].map(_ => '../').join('');
        return val;
    }

    private async getPrettierConfig() {
        const prettierRcPath = path.join(__dirname, '.prettierrc')

        if (await fs.existsSync(prettierRcPath)) {
            try {
                const prettierRcContent = await fs.readFileSync(prettierRcPath, 'utf8')
                return JSON.parse(prettierRcContent)
            } catch (error) {
                return {}
                // throw new Error(`Error reading Prettier config file: ${prettierRcPath}`)
            }
        }

        return {
            singleQuote: true,
            semi: true,
            tabWidth: 2,
            printWidth: 100,
            trailingComma: "none"
        }
    }

    private async writeFileSync(address, content) {
        const prettierConfig = await this.getPrettierConfig()
        const data = await prettier.format(content, {
            ...prettierConfig,
            parser: 'babel-ts',
        });

        await fs.writeFileSync(address, data);
    }

    override async run(): Promise<void> {
        const arrSwagger = this.swgAddress.split(",");
        for (let i = 0; i < arrSwagger.length; i++) {
            const swagger = arrSwagger[i];

            const [err, response] = await to(axios({
                method: 'GET',
                url: swagger,
            }));
            if (err) {
                throw new ForbiddenException('API not available');
            }
            if (response.status != 200) {
                throw new Error("http status is " + response.status);
            }

            // const project = "/" + swagger.split("://")[1].split("/")[0].split(".").reverse()[1].replace(":", "")+"";
            const project = "/services";
            if (!(await fs.existsSync(this.output + project))) {
                await fs.mkdirSync(this.output + project);
            }


            this.schemas = _(response.data.components.schemas).map((f, k) => {
                f.name = k;
                return f;
            }).value();

            this.paths = [];
            for (const key in response.data.paths) {
                if (Object.prototype.hasOwnProperty.call(response.data.paths, key)) {

                    const element = response.data.paths[key];
                    for (const key1 in element) {
                        if (Object.prototype.hasOwnProperty.call(element, key1)) {
                            const api = element[key1];
                            if (this.tags && api.tags.length && !this.tags.includes(api.tags[0].split("/")[0].trim())) {
                                continue
                            }
                            api.name = key;
                            api.method = key1;
                            this.paths.push(api)
                        }
                    }
                }
            }


            let models = [];


            for (let i = 0; i < this.schemas.length; i++) {
                const element = this.schemas[i];
                this.schemasPattern[element.name] = element;
                models.push(this.SchemaModel(this.schemasPattern, element.name, this.splitPath)[0]);
            }

            const arr = _(this.paths).groupBy(f => f.tags[0]).value()
            let indexTs = [];
            for (const key in arr) {
                if (Object.prototype.hasOwnProperty.call(arr, key)) {
                    const element = arr[key];
                    let str = await this.generateApi(element, project).catch(err => {
                        throw new Error('Error: ' + err)
                    });
                    indexTs.push(str)
                }
            }

            if (!(await fs.existsSync(this.output + project + "/apis/@base"))) {
                await fs.mkdirSync(this.output + project + "/apis/@base");
            }

            await this.writeFileSync(this.output + project + "/models.ts", models.join("\n"));
            await this.writeFileSync(this.output + project + "/apis/@base/base.service.ts", baseService(this.environment, swagger, this.interceptorPath, this.timeout))
            await this.writeFileSync(this.output + project + "/apis/@base/base.dto.ts", baseDto())
        }

        console.log("your operation is succeed.")
    }

    override async generateApi(path: any, project: string): Promise<string> {
        if (!(await fs.existsSync(this.output + project + "/apis/"))) {
            await fs.mkdirSync(this.output + project + "/apis/");
        }

        let route = this.output + project + "/apis/";
        let arr = path[0].tags[0].split("/");
        for (let index = 0; index < arr.length; index++) {
            route += arr[index].trim() + "/";
            if (!(await fs.existsSync(route))) {
                await fs.mkdirSync(route);
            }
        }

        await this.writeFileSync(
            route + arr[arr.length - 1].trim() + ".service.ts",
            await this.SchemaApi(path, this.schemasPattern, [route, arr[arr.length - 1].trim()])
        );
        return route;
    }

    override async generateModels(schema: any) {

    }

    override async generateEnums(): Promise<void> {

    }

    private async SchemaApi(apis, schemasPattern: any, fileNames: string[]) {
        const nameApi = fileNames.join('');
        let className = "";
        let arr = [];
        let importsData = [];
        let importsModelsData = [];
        for (let index = 0; index < apis.length; index++) {
            const api = apis[index];
            if (!className) {
                className = api.operationId.split("Controller_")[0];
            }

            let params = [];
            let _queries = [];


            if (api.parameters) {
                params = api.parameters.filter(f => f.in == "path");
                params = params.map(f => {
                    return `${f.name}: ${f.schema.type || "any"}`
                });
                _queries = api.parameters.filter(f => f.in == "query");
            }


            let _queryName = "";
            let _bodyName = "";
            let options = [
                `    method: '${api.method.toUpperCase()}'`,
                `            url: \`${api.name.replace(/\{/g, '${')}\``,
            ];
            if (_queries.length) {
                _queryName = api.operationId.split("Controller_")[1] + "QueryDtoIn";
                // queries.push(createQuery(_queryName, _queries));
                importsData.push({ key: _queryName, data: [this.createQuery(_queryName, _queries), []], type: "query" });
                // importsData.push({ key: _queryName, data: SchemaModel(schemasPattern, _queries), type: "query" });
                params.push('queries: Partial<' + _queryName + ">");
                options.push(`            params: queries`);
            }

            let _body = api?.requestBody?.content;
            if (_body) {
                if (_body['application/json']) {
                    _body = _body['application/json'];
                } else if (_body["multipart/form-data"]) {
                    _body = _body['multipart/form-data'];
                    options.push(`            headers: {"Content-Type": "multipart/form-data"}`)
                } else if (_body["application/x-www-form-urlencoded"]) {
                    _body = _body["application/x-www-form-urlencoded"];
                } else {
                    console.error("Not support:" + Object.keys(_body).join(", "));
                }

                _body = _body.schema;

                if (_body["$ref"]) {
                    let model = _body["$ref"].split("/").reverse()[0];
                    params.push('data: ' + model);
                    options.push('            data: data ');
                    // imports.push(`import { ${model} } from "./${fileNames[1]}.dto";`)
                    if (schemasPattern[model]) {
                        importsModelsData.push(model);
                        // importsData.push({ key: model, data: this.SchemaModel(schemasPattern, model), type: "body" });
                    } else if (model.trim() != "String") {
                        console.log(model + " is not in swagger - " + `${api.name.replace(/\{/g, '${')}`)
                    }
                } else if (_body?.properties) {
                    _bodyName = api.operationId.split("Controller_")[1] + "BodyDtoIn";
                    _bodyName = _bodyName.substring(0, 1).toUpperCase()[0] + _bodyName.substring(1);
                    // importsModelsData.push({})
                    // { 
                    //     ${_(_body.properties).map((f,key)=>`${key}: ${getType(f)}`).value().join(',\n\t\t')}
                    // }
                    options.push('            data: data ');
                    importsData.push({ key: _bodyName, data: [this.createBody(_bodyName, _body?.properties), []], type: "query" });

                    params.push(`data: ${_bodyName} | FormData`);
                }
            }

            let _resp = api?.responses;
            let _output = null;

            _(_resp).map(async (http, j) => {
                if (http.content) {
                    if (http.content["application/json"].schema.allOf) {
                        let prop1 = http.content["application/json"].schema.allOf[0].$ref.split("/").reverse()[0];
                        let prop2 = '';
                        if (prop1 == "IResponseAll") {
                            if (http.content["application/json"].schema.allOf[1]) {
                                prop2 = http.content["application/json"].schema.allOf[1].properties.results.items.$ref.split("/").reverse()[0];
                            } else {
                                prop2 = 'void'
                            }
                        } else {
                            if (http.content["application/json"].schema.allOf[1]) {
                                if (http.content["application/json"].schema.allOf[1].properties.result.$ref) {
                                    prop2 = http.content["application/json"].schema.allOf[1].properties.result.$ref?.split("/")?.reverse()[0];
                                } else {
                                    prop2 = http.content["application/json"].schema.allOf[1].properties.result.type;
                                }
                            } else {
                                prop2 = 'void'
                            }
                        }
                        _output = `${prop1}<${prop2}>`;
                        if (schemasPattern[prop2]) {
                            importsData.push({ key: prop2, data: this.SchemaModel(schemasPattern, prop2, this.splitPath), type: "output" })
                        } else if (!prop2) {
                            console.log(prop2 + " is not in swagger - " + `${api.name.replace(/\{/g, '${')}`)
                        }
                    } else if (http.content["application/json"].schema.$ref) {
                        let prop1 = http.content["application/json"].schema.$ref.split("/").reverse()[0];
                        if (prop1 == 'IResponse') {
                            _output = 'IResponse<void>';
                            return
                        }
                        _output = ` ${prop1}`;
                        if (schemasPattern[prop1]) {
                            importsModelsData.push(prop1);
                            // importsData.push({ key: prop1, data: this.SchemaModel(schemasPattern, prop1), type: "output" })
                        } else if (prop1.trim() != "String") {
                            console.log(prop1 + " is not in swagger" + `${api.name.replace(/\{/g, '${')}`)
                        }
                    }
                }
            }).value();

            let __output = "";
            let __to = (str) => `${str}`;
            let __async = "";
            if (this.plugin.split(",").includes("to")) {
                __to = (str) => `await to(${str})`;
                __async = "async"
                if (_output) {
                    __output = ': Promise<[AxiosError | null, undefined | ' + _output + ']>';
                } else {
                    __output = ': Promise<[AxiosError | null, undefined | any]>'
                }
            } else {
                if (_output) {
                    __output = ': Promise<' + _output + '>';
                } else {
                    __output = ': Promise<any>'
                }
            }

            arr.push(
                `    public static ${__async} ${api.operationId.split("Controller_")[1]} (${params.join(", ")})${__output} {
        return ${__to(`axiosInstance({
            ${options.join(',\n')}
            })`)}
        
    }`
            )
        }
        let arrModels = _(importsData).uniqBy(f => f.key).value();
        let data = "";

        arrModels.map(f => {
            data += f.data[1].join("\n\n") //imports
        })
        data += "\n\n";
        arrModels.map(f => {
            data += f.data[0] + "\n\n" //schemas
        })

        let indexTs = [];
        indexTs.push(`export * from "./${fileNames[1] + ".service"}";`)
        if (arrModels.length) {
            indexTs.push(`export * from "./${fileNames[1] + ".dto"}";`)
            await this.writeFileSync(fileNames[0] + fileNames[1] + ".dto.ts", data)
        }

        await this.writeFileSync(fileNames[0] + "index.ts", indexTs.join("\n"))

        var retVal = (
            `import axiosInstance from "${this.getPathSplit()}@base/base.service";
import type { AxiosError,AxiosResponse } from "axios";
${(() => {
                if (this.plugin.split("plugin").includes("to")) {
                    return "import to from 'await-to-js';";
                }
                return "";
            })()}
${(() => {
                if (importsModelsData.length) {
                    return `import type {${_(importsModelsData).uniq().join()}} from "${this.getPathSplit()}../models";\n`
                }
                return "";
            })()}import type { IResponse, IResponseAll} from "${this.getPathSplit()}@base/base.dto";
${(() => {
                if (importsData.length > 0) {
                    return `import type {${arrModels.filter(f => !importsModelsData.includes(f.key)).map(f => f.key).join(', ')}} from "./${fileNames[1] + ".dto"}";`
                }
                return ``
            })()
            }

export class ${className}ServiceApi {    
${arr.join('\n')}

}`);
        return retVal;
    }

}