import { BaseService } from "./@base.service";
import axios from 'axios';
import * as _ from "lodash";
import { ForbiddenException } from "@nestjs/common";
import * as fs from "fs";
import { baseDto, baseService } from "../helpers/base.function";
import to from "await-to-js";
import { snakeCase } from "snake-case";


export class ReactGenService extends BaseService {
    // private axios: Axios;
    constructor() {
        super();
        // this.axios = new Axios();
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

            const project = "/" + swagger.split("://")[1].split(".")[0];
            if (!(await fs.existsSync(this.output + project))) {
                await fs.mkdirSync(this.output + project);
            }


            this.schemas = _(response.data.definitions).map((f, k) => {
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

            await fs.writeFileSync(this.output + project + "/models.ts", models.join("\n"));
            await fs.writeFileSync(this.output + project + "/apis/@base/base.service.ts", baseService(this.environment, swagger, ""))
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
            route += snakeCase(arr[index].trim()) + "/";
            if (!(await fs.existsSync(route))) {
                await fs.mkdirSync(route);
            }
        }

        await fs.writeFileSync(route + snakeCase(arr[arr.length - 1].trim()) + ".service.ts", await this.SchemaApi(path, this.schemasPattern, [route, arr[arr.length - 1].trim()]));
        return route;
    }

    override async generateModels(schema: any) {

    }

    override async generateEnums(): Promise<void> {

    }

    private async SchemaApi(apis, schemasPattern: any, fileNames: string[]) {
        let className = "";
        let arr = [];
        let importsData = [];
        let importsModelsData = [];
        for (let index = 0; index < apis.length; index++) {
            const api = apis[index];
            if (!className) {
                className = api.operationId.split("_")[0] + fileNames[1];
            }

            let params = [];
            let _queries = [];
            let _bodies = [];
            if (api.parameters) {
                params = api.parameters.filter(f => f.in == "path");
                params = params.map(f => {
                    return `${f.name}: ${f.type || "any"}`
                });
                _queries = api.parameters.filter(f => f.in == "query");
                _bodies = api.parameters.filter(f => f.in == "body");
            }

            let _queryName = "";
            let options = [
                `    method: '${api.method.toUpperCase()}'`,
                `            url: apiRoute + \`${api.name.replace(/\{/g, '${')}\``,
            ];
            if (_queries.length) {
                _queryName = api.operationId.split("_")[1] + "QueryDtoIn";
                // queries.push(createQuery(_queryName, _queries));
                importsData.push({ key: _queryName, data: [this.createQuery(_queryName, _queries), []], type: "query" });
                // importsData.push({ key: _queryName, data: SchemaModel(schemasPattern, _queries), type: "query" });
                params.push('queries: Partial<' + _queryName + ">");
                options.push(`            params: queries`);
            }

            if (_bodies[0]?.schema["$ref"]) {
                let model = _bodies[0]?.schema["$ref"].split("/").reverse()[0];
                params.push('data: ' + model);
                options.push('            data: data ');
                // imports.push(`import { ${model} } from "./${fileNames[1]}.dto";`)
                if (schemasPattern[model]) {
                    importsModelsData.push(model);
                } else {
                    console.log(model + " is not in swagger")
                }
            }

            const _resp = api?.responses;
            const _output = _(_resp).map((http, j) => {
                let _outputName = null;
                if (!http?.schema["$ref"]) {
                    _outputName = api.operationId.split("_")[1] + "DtoOut";
                    const props = http.schema.properties;
                    importsData.push({ key: _outputName, data: [this.createQuery(_outputName, props), []], type: "output" });
                } else {
                    _outputName = http?.schema["$ref"].split("/").reverse()[0];
                    if (schemasPattern[_outputName]) {
                        // importsData.push({ key: _outputName, data: this.SchemaModel(schemasPattern, _outputName), type: "output" })
                        importsModelsData.push(_outputName);
                    } else {
                        console.log(_outputName + " is not in swagger")
                    }
                }
                return _outputName;
            }).value();

            let output = "any";
            let axiosOutput = "any";
            if (_output?.length) {
                output = _output.join(' | ')
                axiosOutput = _output[0]
            }
            arr.push(
                `    public static async ${api.operationId.split("_")[1]} (${params.join(", ")} ${params.length ? ', ' : ''}headers: { [k: string]: string } = {})${` : Promise<${axiosOutput}>`} {
        const [err, resp] = await to(
            axios<${axiosOutput}, any>({
                ${options.join(',\n')}${options.length ? ',' : ''}
                headers

            })
        );
        if (err) {
            if (err?.message) {
              toast.error(err.message);
            }
            return new Promise((_, reject) => {
              reject((err as any)?.response?.data || err?.message || "error...");
            });
        }
        return new Promise((resolve, _) => {
            resolve(resp.data);
        });
        
    }`
            )
        }

        let arrModels = _(importsData).uniqBy(f => f.key).value();
        let data = [];

        arrModels.map(f => {
            f.data[1].map(d => {
                data.push(d) //imports
            })
        })


        data.push("")
        arrModels.map(f => {
            data.push(f.data[0]) //schemas
        })

        let indexTs = [];

        indexTs.push(`export * from "./${snakeCase(fileNames[1]) + ".service"}";`)
        if (arrModels.length) {
            indexTs.push(`export * from "./${fileNames[1] + ".dto"}";`)
            await fs.writeFileSync(fileNames[0] + fileNames[1] + ".dto.ts", _(data).uniq().join("\n"))
        }

        await fs.writeFileSync(fileNames[0] + "index.ts", indexTs.join("\n"))

        return (
            `import axios from "axios";
import { apiRoute } from "../@base/base.service";
${(() => {
                if (importsModelsData.length) {
                    return `import {${_(importsModelsData).uniq().join()}} from "../../models";`
                }
            })()}
${(() => {
                if (importsData.length > 0) {
                    return `import {${arrModels.map(f => f.key).join(', ')}} from "./${fileNames[1]}.dto";`
                }
                return ``
            })()
            }
import to from "await-to-js";
import { toast } from "react-toastify";

export class ${className}ServiceApi {    
${arr.join('\n')}

}`);
    }

}