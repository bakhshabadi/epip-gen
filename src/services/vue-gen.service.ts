import { BaseService } from "./@base.service";
import axios from 'axios';
import * as _ from "lodash";
import { ForbiddenException } from "@nestjs/common";
import * as fs from "fs";
import { baseDto, baseService } from "../helpers/base.function";
import to from "await-to-js";

export class VueGenService extends BaseService {
    constructor() {
        super();
    }
    private schemas: Array<any> = [];
    private schemasPattern: any = {};
    private paths: Array<any> = [];

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
                            if(this.tags && api.tags.length && !this.tags.includes(api.tags[0].split("/")[0].trim())){
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
                models.push(this.SchemaModel(this.schemasPattern, element.name)[0]);
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

            await fs.writeFileSync(this.output + project + "/models.ts", models.join("\n"));
            await fs.writeFileSync(this.output + project + "/apis/@base/base.service.ts", baseService(this.environment, swagger, this.interceptorPath))
            await fs.writeFileSync(this.output + project + "/apis/@base/base.dto.ts", baseDto())
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

        await fs.writeFileSync(route + arr[arr.length - 1].trim() + ".service.ts", await this.SchemaApi(path, this.schemasPattern, [route, arr[arr.length - 1].trim()]));
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
                    options.push(`            headers: {"Content-Type": "multipart/form-data"}`)
                } else if (_body["multipart/form-data"]) {
                    _body = _body['multipart/form-data'];
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
                }
            }

            let _resp = api?.responses;
            let _output = null;

            _(_resp).map(async (http, j) => {
                if (http.content) {
                    if (http.content["application/json"].schema.allOf) {
                        _output = http.content["application/json"].schema.allOf
                        let prop1 = _output[0].$ref.split("/").reverse()[0];
                        let prop2 = '';
                        if (prop1 == "IResponseAll") {
                            prop2 = _output[1].properties.results.items.$ref.split("/").reverse()[0];
                        } else {
                            if (_output[1].properties.result.$ref) {
                                prop2 = _output[1].properties.result.$ref?.split("/")?.reverse()[0];
                            } else {
                                prop2 = _output[1].properties.result.type;
                            }
                        }
                        _output = `${prop1}<${prop2 || 'void'}>`;
                        if (schemasPattern[prop2]) {
                            importsData.push({ key: prop2, data: this.SchemaModel(schemasPattern, prop2), type: "output" })
                        } else if (prop2?.trim().toLowerCase() != "string") {
                            console.log(prop2 + " is not in swagger - " + `${api.name.replace(/\{/g, '${')}`)
                        }
                    } else if (http.content["application/json"].schema.$ref) {
                        _output = http.content["application/json"].schema;
                        let prop1 = _output.$ref.split("/").reverse()[0];
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

            arr.push(
                `    public static ${api.operationId.split("Controller_")[1]} (${params.join(", ")})${(_output ? ': Promise<AxiosResponse<' + _output + '>>' : ': Promise<AxiosResponse<any>>')} {
        return axiosInstance({
        ${options.join(',\n')}
        })
        
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
            await fs.writeFileSync(fileNames[0] + fileNames[1] + ".dto.ts", data)
        }

        await fs.writeFileSync(fileNames[0] + "index.ts", indexTs.join("\n"))

        return (
            `import axiosInstance from "../../@base/base.service";
import { AxiosResponse } from "axios";
${(() => {
                if (importsModelsData.length) {
                    return `import {${_(importsModelsData).uniq().join()}} from "../../../models";\n`
                }
                return "";
            })()}import { IResponse, IResponseAll} from "../../@base/base.dto";
${(() => {
                if (importsData.length > 0) {
                    return `import {${arrModels.filter(f => !importsModelsData.includes(f.key)).map(f => f.key).join(', ')}} from "./${fileNames[1] + ".dto"}";`
                }
                return ``
            })()
            }

export class ${className}ServiceApi {    
${arr.join('\n')}

}`);
    }

}