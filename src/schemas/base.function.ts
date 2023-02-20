export const toKebabCase = string => string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

export const toPascalCase = (str: string) => {
    return ('-' + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
        return chr.toUpperCase()
    });
}

export const baseService = (route) => (
    `export const apiRoute: string = "${route.split("/").filter((f, i) => i < 3).join("/") + "/"}";

export class BaseApiService {
    protected url: string; 
    constructor (_url: string) {
        this.url = _url;
    } 
}`
)

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