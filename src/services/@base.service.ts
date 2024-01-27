import * as _ from 'lodash'
import { IFramework } from '../interfaces/framework.intterface'

export class BaseService implements IFramework {
  public environment: string
  public interceptorPath: string
  public output: string
  public swgAddress: string
  public tags: Array<string>
  public timeout: number
  public splitPath: number
  public plugin: string = ''

  constructor() {}
  run(): Promise<void> {
    throw new Error('Method not implemented.')
  }
  generateApi(paths: any, project: string): Promise<string> {
    throw new Error('Method not implemented.')
  }
  generateEnums(): Promise<void> {
    throw new Error('Method not implemented.')
  }
  generateModels(schema: any): Promise<void> {
    throw new Error('Method not implemented.')
  }

  private createConstructor() {
    return `constructor(json: any){
                    for( const key in json ) {
                      if(Object.prototype.hasOwnProperty.call(this, key)){
                        this[key] = json[key];
                      }else{
                        throw new Error(\`pedarsag in key(\${key}) ro nadarim\`)
                      }
                    }
                  }`
  }
  private createDtoSchema(schema: any) {
    return `
      private schema =  ${JSON.stringify(schema)}
    `
  }
  private createDtoValidation() {
    return `
      public dtoValidation(){
        const ajv = new Ajv();
        const valid = ajv.validate(this.schema, this);
        if (!valid) {
          return ajv.errors.map(f=>f.message).join('\\n');
        }
        return true;
      }
    `
  }

  private createValidationProperty() {
    return `
      public validationProperty(key:string){
        const ajv = new Ajv();
        const validate = ajv.compile(this.schema);
        const result = validate(this);
        const error = validate.errors.find(f=>f.params.missingProperty==key)
        if (error){
          return error.message;
        }
        return true;
      }
    `
  }

  protected getPlugin(key: string) {
    return this.plugin.split(',').includes(key)
  }
  protected end() {
    process.exit(0)
  }
  protected percent() {}

  protected createType(
    pattern: any,
    schemaName: string,
    prop: any,
    step: number,
    isArray: boolean = false,
    key: string = ''
  ): [string, string, string] {
    if (!prop) {
      return ['any', '', '']
    }

    if (prop.anyOf) {
      return prop.anyOf.map((f) => this.createType).join(' | ')
    }

    if (prop.$ref) {
      let entityName = prop.$ref.split('/').reverse()[0]
      return [
        entityName + (isArray ? '[]' : ''),
        `import type { ${entityName} } from "${[...new Array(this.splitPath)]
          .map((_) => '../')
          .join('')}../models";`,
        ''
      ]
    }

    switch (prop.type) {
      case 'integer':
        return ['number', '', '']
      case 'number':
      case 'decimal':
        return ['number', '', '']
      case 'boolean':
        return [prop.type + (isArray ? '[]' : ''), '', '']
      case 'string':
        if (prop.enum) {
          const name = schemaName + key.substring(0, 1).toUpperCase() + key.substring(1) + 'Type'
          return [
            name + (isArray ? '[]' : ''),
            '',
            `
export enum ${name} {
${prop.enum.map((f) => `    ${f.toUpperCase()}="${f}"`).join(',\n')}
}
          `
          ]
        }
        return [prop.type + (isArray ? '[]' : ''), '', '']
      case 'object':
        if (prop.items) {
          return this.createType(pattern, schemaName, prop.items, step)
        }
      case 'array':
        return this.createType(pattern, schemaName, prop.items, step, true)

      default:
        throw new Error('error ' + JSON.stringify(prop))
    }
  }

  protected SchemaModel(pattern, schema, step, isValidate) {
    const dicDtoType = {
      true: {
        // is response and is responseAll
        true: {
          //is class
          seperateProperty: ',',
          requirement: '?',
          type: 'interface'
        },
        false: {
          // is interface
          seperateProperty: ',',
          requirement: '?',
          type: 'interface'
        }
      },
      false: {
        // other types
        true: {
          //is class
          seperateProperty: ';',
          requirement: '',
          type: 'class'
        },
        false: {
          // is interface
          seperateProperty: ',',
          requirement: '?',
          type: 'interface'
        }
      }
    }
    schema = pattern[schema]
    // console.log(schema.name)
    let props = []
    let imports = []
    let enums = ''
    if (schema.enum) {
      enums = `
export enum ${schema.name} {
${schema.enum.map((f) => `    ${f.toUpperCase()}="${f}"`).join(',\n')}
}
`
    }
    for (const key in schema.properties) {
      if (Object.prototype.hasOwnProperty.call(schema.properties, key)) {
        const element = schema.properties[key]
        const res = this.createType(
          pattern,
          schema.name + (element?.name || ''),
          element,
          step,
          schema.type == 'array',
          key
        )
        if (res[2]) {
          //is enum
          enums += res[2]
        }
        props.push(
          `${key.replace(/\@/g, '')}${dicDtoType['false'][isValidate].requirement}: ${res[0]}${
            dicDtoType['false'][isValidate].seperateProperty
          }`
        )
        if (res[1]) {
          imports.push(res[1])
        }
      }
    }

    imports = _(imports).uniq().value()

    const isSpecialType = ['IResponse', 'IResponseAll', 'AnyResponse'].includes(schema.name)
    const retVal = [
      (enums ? enums : '') +
        (!schema.enum
          ? `export ${dicDtoType[String(isSpecialType)][isValidate].type} ${schema.name}${
              ['IResponseAll', 'IResponse'].includes(schema.name) ? '<T>' : ''
            } {
              ${
                // constructor for class
                (isValidate && !isSpecialType && this.createConstructor()) || ''
              }

            ${
              // dto schema
              (isValidate && !isSpecialType && this.createDtoSchema(schema)) || ''
            }  
            
            ${props.join('\n\t')}${schema.name == 'IResponseAll' ? '\n\tresults: T[]' : ''}${
              //properties for class
              schema.name == 'IResponse' ? '\n\tresult: T' : ''
            }

            ${
              // dtoValidation for class
              (isValidate && !isSpecialType && this.createDtoValidation()) || ''
            }

            ${
              // validation property for class
              (isValidate && !isSpecialType && this.createValidationProperty()) || ''
            }
}`
          : ''),
      imports
    ]

    return retVal
  }

  protected createBody(name: string, data: any[]) {
    function getType(f) {
      const _getType = (item) => {
        if (item.type == 'string' && item.format == 'binary') {
          return 'File'
        } else {
          return item.type
        }
      }
      if (f.type == 'array') {
        return `Array<${_getType(f.items)}>`
      } else {
        return _getType(f)
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
        if (f.type == 'array') {
          return f.items.type ? f.schema.items.type + '[]' : 'any[]'
        } else if (f.type == 'integer' || f.type == 'number') {
          return 'number'
        } else if (f.type == 'string' ) {
          return 'string'
        } else if (f.type == 'boolean' ) {
          return 'boolean'
        } else {
          return checkArray(f.schema)
        }
      } catch (err) {
        console.error(f)
      }
    }
    return `export interface ${name} {
${_(data)
  .map((f) => `    ${f.name}?: ${checkArray(f)},`)
  .value()
  .join('\n')}
}`
  }
}
