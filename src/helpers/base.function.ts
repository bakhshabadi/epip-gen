export const toKebabCase = string => string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

export const toPascalCase = (str: string) => {
    return ('-' + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
        return chr.toUpperCase()
    });
}

export const baseService = (env: string, route) => {
    if(env){
        return `export const apiRoute = process.env.${env};`;
    }else{
        return `export const apiRoute = "${(route.split("/").filter((f, i) => i < 3).join("/") + "/v1")}";`;
    }
    
}

export const baseDto = () => (
    `export interface IResponse<T>{
    status: number,
    message: string,
    result: T
}

export interface IResponseAll<T>{
    status: number,
    message: string,
    results: T[]
}`
)