import { BaseService } from "../services/@base.service";
import axios from 'axios';
import * as _ from "lodash";
import { ForbiddenException, HttpException, Injectable } from "@nestjs/common";
import * as fs from "fs";
import { SchemaApi } from "../schemas/generate-api.schema";
import { baseDto, baseService, toPascalCase } from "../schemas/base.function";
import { SchemaModel } from "../schemas/generate-class.schema";
import { FrameworkType } from "./gen.model";

export class GenService extends BaseService {
    // private axios: Axios;
    constructor() {
        super();
        // this.axios = new Axios();
    }
    private schemas: Array<any> = [];
    private schemasPattern: any = {};
    private paths: Array<any> = [];

    override async run(): Promise<void> {
        if(this.type==FrameworkType.ANGULAR){
            console.error('not support angular');
            return
        }
        const response = await axios({
            method: 'GET',
            url: this.swgAddress,
        }).catch(() => {
            throw new ForbiddenException('API not available');
        });
        if (response.status != 200) {
            throw new Error("http status is " + response.status);
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
                        api.name = key;
                        api.method = key1;
                        this.paths.push(api)
                    }
                }
            }
        }

        let models=[];

        for (let i = 0; i < this.schemas.length; i++) {
            const element = this.schemas[i];
            this.schemasPattern[element.name] = element;
            models.push(SchemaModel(this.schemasPattern,element.name)[0]);
        }

        const arr = _(this.paths).groupBy(f => f.tags[0]).value()
        let indexTs = [];
        for (const key in arr) {
            if (Object.prototype.hasOwnProperty.call(arr, key)) {
                const element = arr[key];
                let str = await this.generateApi(element).catch(err => {
                    throw new Error('Error: ' + err)
                });
                indexTs.push(str)
            }
        }

        // let str=indexTs.map(f=>`export * from "${f.replace('./dist/apis/','./')}";`).join("\n");
        // console.log(str)
        // fs.writeFileSync ("./dist/apis/index.ts",str)

        if (!(await fs.existsSync(this.output + "/dist/apis/@base"))) {
            await fs.mkdirSync(this.output + "/dist/apis/@base");
        }
        await fs.writeFileSync(this.output + "/dist/apis/@base/base.service.ts", baseService(this.swgAddress))
        await fs.writeFileSync(this.output + "/dist/apis/@base/base.dto.ts", baseDto())
        await fs.writeFileSync(this.output + "/dist/apis/models.ts", models.join("\n"));
        console.log("your operation is succeed.")
    }

    override async   generateApi(path: any): Promise<string> {
        if (!(await fs.existsSync(this.output + "/dist/apis/"))) {
            await fs.mkdirSync(this.output + "/dist/apis/");
        }

        let route = this.output + "dist/apis/";
        let arr = path[0].tags[0].split("/");
        for (let index = 0; index < arr.length; index++) {
            route += arr[index].trim() + "/";
            if (!(await fs.existsSync(route))) {
                await fs.mkdirSync(route);
            }
        }

        await fs.writeFileSync(route + arr[arr.length - 1].trim() + ".service.ts", await SchemaApi(path, this.schemasPattern, [route, arr[arr.length - 1].trim()]));
        return route;
    }

    override async generateModels(schema: any) {
        // console.log(schema)
        // if (!(await fs.existsSync(this.output + "/dist/models/"))) {
        //     await fs.mkdirSync(this.output + "/dist/models/");
        // }
        // const fileName = toKebabCase(schema.name);
        // return fs.writeFileSync(this.output + "/dist/models/" + fileName + ".dto.ts", SchemaModel(schema));
    }

    override async generateEnums(): Promise<void> {

    }
}