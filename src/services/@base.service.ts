import { SchemaModel } from "src/schemas/generate-class.schema";
import { IFramework } from "../interfaces/framework.intterface";
import { FrameworkType } from "src/commanders";


export class BaseService implements IFramework {
    public type: FrameworkType;
    public output: string;
    public swgAddress: string;

    constructor() { }
    run(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    generateApi(paths: any): Promise<string> {
        throw new Error("Method not implemented.");
    }
    generateEnums(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    generateModels(schema: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    protected end() {
        process.exit(0);
    }
    protected percent() {

    }
    // protected async generateClass(schema: any) {

    // }
}