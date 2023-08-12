import { IFramework } from "../interfaces/framework.intterface";
import * as _ from "lodash";

export class BaseService implements IFramework {
  public environment: string;
  public output: string;
  public swgAddress: string;

  constructor() {}
  run(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  generateApi(paths: any, project:string): Promise<string> {
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
  protected percent() {}

  protected createType(
    pattern: any,
    schemaName: string,
    prop: any,
    isArray: boolean = false
  ) {
    if (!prop) {
      return ["any"];
    }

    if (prop.anyOf) {
      return prop.anyOf.map((f) => this.createType).join(" | ");
    }

    if (prop.$ref) {
      let entityName = prop.$ref.split("/").reverse()[0];
      return [
        entityName + (isArray ? "[]" : ""),
        `import { ${entityName} } from "../../../models";`,
      ];
    }

    switch (prop.type) {
      case "integer":
        return ["number"];
        case "number":
        return ["number"];
        case "boolean":
        return ["boolean"];
      case "string":
        return [prop.type + (isArray ? "[]" : "")];
      case "object":
        if (prop.items) {
          return this.createType(pattern, schemaName, prop.items);
        }
      case "array":
        return this.createType(pattern, schemaName, prop.items, true);

      default:
        throw new Error("error " + JSON.stringify(prop));
    }
  }

  protected SchemaModel(pattern, schema) {
    schema = pattern[schema];
    // console.log(schema.name)
    let props = [];
    let imports = [];
    let enums = "";
    if (schema.enum) {
      enums = `
export enum ${schema.name} {
${schema.enum.map((f) => `    ${f}="${f}"`).join(",\n")}
}
`;
    }
    for (const key in schema.properties) {
      if (Object.prototype.hasOwnProperty.call(schema.properties, key)) {
        const element = schema.properties[key];
        const res = this.createType(
          pattern,
          schema.name + (element?.name || ""),
          element
        );
        props.push(`public ${key.replace(/\@/g, "")}: ${res[0]},`);
        if (res[1]) {
          imports.push(res[1]);
        }
      }
    }

    imports = _(imports).uniq().value();

    return [
      enums
        ? enums
        : `export class ${schema.name}${
            ["IResponseAll", "IResponse"].includes(schema.name) ? "<T>" : ""
          } {
    constructor(
        ${props.join("\n\t\t")}${
            schema.name == "IResponseAll" ? "\n\tpublic results: T[]" : ""
          }${schema.name == "IResponse" ? "\n\tpublic result: T" : ""}
    ) { }
}`,
      imports,
    ];
  }

  protected createQuery(name: string, data: any[]) {
    function checkArray(f: any) {
      try {
        if (f.type == "array") {
          return f.items.type ? f.schema.items.type + "[]" : "any[]";
        } else if (f.type == "integer") {
          return "number";
        } else {
          return f.schema.type;
        }
      } catch (err) {
        console.error(f);
      }
    }
    return `export interface ${name} {
${_(data)
  .map((f) => `    "${f.name}": ${checkArray(f)},`)
  .value()
  .join("\n")}
}`;
  }
}
