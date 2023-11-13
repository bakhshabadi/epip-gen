export const toKebabCase = string => string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

export const toPascalCase = (str: string) => {
    return ('-' + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
        return chr.toUpperCase()
    });
}

function getUrl(route: string, env: string) {
    if (env) {
        return `import.meta.env.${env}`
    } else {
        return '"' + (route.split("/").filter((f, i) => i < 3).join("/")) + '"'
    }
}

export const baseService = (env: string, route: string, interceptorPath: string, timeout: number = 20000) => {
    return `
import axios from "axios";
import { onRequest, onResponse, onResponseError } from "${interceptorPath || 'please set -in for interceptor path'}";
    
const axiosInstance = axios.create({
    baseURL: ${getUrl(route, env)},
    timeout: ${timeout}
});

axiosInstance.interceptors.request.use(onRequest);
axiosInstance.interceptors.response.use(onResponse, onResponseError);

export default axiosInstance;
`;

}

export const baseDto = () => (
    `export interface IResponse<T>{
    status: number,
    message: string,
    result: T
}

export interface IResponseAll<T>{
    count: number,
    status: number,
    message: string,
    results: T[]
}`
)