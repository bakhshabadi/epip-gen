import * as _ from "lodash";
import * as fs from "fs";
import { toKebabCase } from "./base.function";
import { SchemaModel } from "./generate-class.schema";

export const createQuery = (name: string, data: any[]) => {
    function checkArray(f: any) {
        try{
            if (f.schema.type == "array") {
                return f.schema.items.type?f.schema.items.type+'[]':'any[]';
            }else{
                return f.schema.type;
            }
        }catch(err){
            console.error(f)
        }
    }
    return (
        `export class ${name} {
${data.map(f => `    ${f.name}: ${checkArray(f)};`).join("\n")}
}`
    )
}

/*
    fileNames = [ api , category ]
*/
export const SchemaApi = async (apis, schemasPattern: any, fileNames: string[]) => {
    let className = "";
    let arr = [];
    let importsData = [];
    for (let index = 0; index < apis.length; index++) {
        const api = apis[index];
        if (!className) {
            className = api.operationId.split("Controller_")[0];
        }

        let params=[];
        let _queries = [];
        if(api.parameters){
            params = api.parameters.filter(f => f.in == "path");
            params = params.map(f => `${f.name}: ${f.schema.type || "number"}`)
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
            importsData.push({ key: _queryName, data: [createQuery(_queryName, _queries), []], type: "query" });
            // importsData.push({ key: _queryName, data: SchemaModel(schemasPattern, _queries), type: "query" });
            params.push('queries: ' + _queryName);
            options.push(`            params: queries`);
        }

        let _body = api?.requestBody?.content;
        if (_body) {
            if (_body['application/json']) {
                _body = _body['application/json'];
                options.push(`            headers: {"Content-Type": "multipart/form-data"}`)
            } else if (_body["multipart/form-data"]) {
                _body = _body['multipart/form-data'];
            } else if(_body["application/x-www-form-urlencoded"]){
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
                    importsData.push({ key: model, data: SchemaModel(schemasPattern, model), type: "body" });
                } else {
                    console.log(model + " is not in swagger")
                }
            }
        }

        let _resp = api?.responses;
        let _output = null;

        _(_resp).map(async (http, j) => {
            if (http.content) {
                if(http.content["application/json"].schema.allOf){
                    _output = http.content["application/json"].schema.allOf
                    let prop1 = _output[0].$ref.split("/").reverse()[0];
                    let prop2 = _output[1].properties[prop1 == "IResponseAll" ? 'results' : 'result'].items.$ref.split("/").reverse()[0]
                    _output = ` :Promise<${prop1}<${prop2}>>`;
                    if (schemasPattern[prop2]) {
                        importsData.push({ key: prop2, data: SchemaModel(schemasPattern, prop2), type: "output" })
                    }else {
                        console.log(prop2 + " is not in swagger")
                    }
                }else if(http.content["application/json"].schema.$ref){
                    _output = http.content["application/json"].schema;
                    let prop1 = _output.$ref.split("/").reverse()[0];
                    _output = ` :Promise<${prop1}>`;
                    if (schemasPattern[prop1]) {
                        importsData.push({ key: prop1, data: SchemaModel(schemasPattern, prop1), type: "output" })
                    } else {
                        console.log(prop1 + " is not in swagger")
                    }
                }
            }
        }).value();


        arr.push(
            `    public async ${api.operationId.split("Controller_")[1]} (${params.join(", ")})${_output || ' : Promise<any>'} {
        const resp = await axios({
        ${options.join(',\n')}
        }).catch(() => {
            throw new ForbiddenException('API not available');
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
        await fs.writeFileSync(fileNames[0] + (fileNames[1]) + ".dto.ts", data)
    }

    await fs.writeFileSync(fileNames[0] + "index.ts", indexTs.join("\n"))

    return (
        `import axios from "axios";
import { ForbiddenException } from "@nestjs/common";
import { apiRoute, BaseApiService } from "../../@base/base.service";
import { IResponse, IResponseAll} from "../../@base/base.dto";
${(() => {
            if (importsData.length > 0) {
                return `import {${arrModels.map(f => f.key).join(', ')}} from "./${fileNames[1]}.dto";`
            }
            return ``
        })()
        }

export class ${className}ServiceApi extends BaseApiService {
    constructor()    {
        super(apiRoute + '${toKebabCase(className)}')
    }

${arr.join('\n')}

}`);
}

