export interface IFramework {
  run(): Promise<void>;
  generateApi(paths: any, project: string): Promise<string>;
  generateModels(schema: any): Promise<void>;
  generateEnums(): Promise<void>;
}
