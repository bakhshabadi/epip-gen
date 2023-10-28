import { IFramework } from "../interfaces/framework.intterface";
import * as _ from "lodash";

export class BaseService implements IFramework {
  public environment: string;
  public interceptorPath: string;
  public output: string;
  public swgAddress: string;
  public tags: Array<string>;
  public splitPath: number;
  public plugin: string = "";


  constructor() { }
  run(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  generateApi(paths: any, project: string): Promise<string> {
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
  protected percent() { }

  protected createType(
    pattern: any,
    schemaName: string,
    prop: any,
    isArray: boolean = false,
    key: string = ""
  ): [string, string, string] {
    if (!prop) {
      return ["any", "", ""];
    }

    if (prop.anyOf) {
      return prop.anyOf.map((f) => this.createType).join(" | ");
    }

    if (prop.$ref) {
      let entityName = prop.$ref.split("/").reverse()[0];
      return [
        entityName + (isArray ? "[]" : ""),
        `import type { ${entityName} } from "../../models";`,
        ""
      ];
    }

    switch (prop.type) {
      case "integer":
        return ["number", "", ""];
      case "number":
      case "decimal":
        return ["number", "", ""];
      case "boolean":
        return [prop.type + (isArray ? "[]" : ""), "", ""];
      case "string":
        if (prop.enum) {
          const name = schemaName+key.substring(0, 1).toUpperCase() + key.substring(1) + "Type";
          return [name + (isArray ? "[]" : ""), "", `
export enum ${name} {
${prop.enum.map((f) => `    ${f.toUpperCase()}="${f}"`).join(",\n")}
}
          `]
        }
        return [prop.type + (isArray ? "[]" : ""), "", ""];
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
${schema.enum.map((f) => `    ${f.toUpperCase()}="${f}"`).join(",\n")}
}
`;
    }
    for (const key in schema.properties) {
      if (Object.prototype.hasOwnProperty.call(schema.properties, key)) {
        const element = schema.properties[key];
        const res = this.createType(
          pattern,
          schema.name + (element?.name || ""),
          element,
          schema.type == "array",
          key
        );
        if (res[2]) {//is enum
          enums += res[2]
        }
        props.push(`${key.replace(/\@/g, "")}?: ${res[0]},`);
        if (res[1]) {
          imports.push(res[1]);
        }
      }
    }

    imports = _(imports).uniq().value();

    return [
      (enums ? enums : '') + (!schema.enum ? `export interface ${schema.name}${["IResponseAll", "IResponse"].includes(schema.name) ? "<T>" : ""
        } {
${props.join("\n\t")}${schema.name == "IResponseAll" ? "\n\tresults: T[]" : ""
        }${schema.name == "IResponse" ? "\n\tresult: T" : ""}    
}`: ''),
      imports,
    ];
  }

  protected createBody(name: string, data: any[]) {
    function getType(f) {
      const _getType = (item) => {
        if (item.type == "string" && item.format == "binary") {
          return 'File';
        } else {
          return item.type
        }
      }
      if (f.type == 'array') {
        return `Array<${_getType(f.items)}>`
      } else {
        return _getType(f);
      }
    }

    return `export interface ${name} { 
${_(data)
        .map((f, key) => `    ${key}: ${getType(f)},`)
        .value()
        .join('\n')}
}`
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
        .map((f) => `    ${f.name}?: ${checkArray(f)},`)
        .value()
        .join("\n")}
}`;
  }
}
