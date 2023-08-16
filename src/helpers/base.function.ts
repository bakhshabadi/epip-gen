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
        return `import.meta.${env}`
    } else {
        return (route.split("/").filter((f, i) => i < 3).join("/"))
    }
}

export const baseService = (env: string, route: string, interceptorPath: string) => {
    if (env) {
        return `export const apiRoute = import.meta.${env};`;
    } else {
        return `
import axios from "axios";
import { onRequest, onResponse } from "${interceptorPath || 'please set -in for interceptor path'}";
    
const axiosInstance = axios.create({
    baseURL: "${getUrl(route, env)}" 
});

axiosInstance.interceptors.request.use(onRequest);
axiosInstance.interceptors.response.use(onResponse);

export default axiosInstance;
`;
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