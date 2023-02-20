import * as _ from "lodash";
import { toKebabCase } from "./base.function";

const createType = (pattern: any, schemaName: string, prop: any, isArray: boolean = false) => {
    if (!prop) {
        return ["any"];
    }

    if(prop.anyOf){
        return prop.anyOf.map(f=>createType).join(" | ");
    }

    if (prop.$ref) {
        let entityName = prop.$ref.split("/").reverse()[0];
        return [
            entityName + (isArray ? '[]' : ''),
            //SchemaModel(pattern,entityName)
            `import { ${entityName} } from "../../models";`
        ];
    }

    switch (prop.type) {
        case "integer":
            return "number";
        case "boolean":
        case "number":
        case "string":
            if (prop.enum) {
                return [schemaName]
            }
            return [prop.type + (isArray ? '[]' : '')]
        case "object":
            if (prop.items) {
                return createType(pattern, schemaName, prop.items)
            }
        case "array":
            return createType(pattern, schemaName, prop.items, true)

        default:
            throw new Error("error " + JSON.stringify(prop))
    }
}

export const SchemaModel = (pattern,schema) => {
    schema=pattern[schema];
    // console.log(schema.name)
    let props = [];
    let imports = [];
    for (const key in schema.properties) {
        if (Object.prototype.hasOwnProperty.call(schema.properties, key)) {
            const element = schema.properties[key];
            const res = createType(pattern, schema.name + element.name, element);
            props.push(`public ${key}: ${res[0]};`);
            if (res[1]) {
                imports.push(res[1]);
            }
        }
    }

    imports = _(imports).uniq().value();

    return ([
        `export class ${schema.name}${["IResponseAll", "IResponse"].includes(schema.name) ? "<T>" : ""} {
    ${props.join('\n\t')}${schema.name == "IResponseAll" ? "\n\tpublic results: T[]" : ""}${schema.name == "IResponse" ? "\n\tpublic result: T" : ""}
}`, imports]);
}

