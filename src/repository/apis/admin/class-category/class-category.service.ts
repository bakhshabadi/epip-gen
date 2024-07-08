import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { ClassCategoryController_post, ClassCategoryEntity } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type { getAllQueryDtoIn } from './class-category.dto'

export class ClassCategoryServiceApi {
  public static async getAll(
    queries: Partial<getAllQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<ClassCategoryEntity>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/class-category`,
        params: queries,
        ...options
      })
    )
  }
  public static async post(
    data: ClassCategoryController_post | FormData,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClassCategoryEntity>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/admin/class-category`,
        headers: { 'Content-Type': 'multipart/form-data' },
        data: data,
        ...options
      })
    )
  }
  public static async get(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClassCategoryEntity>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/class-category/${id}`,
        ...options
      })
    )
  }
  public static async put(
    id: string,
    data: ClassCategoryEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClassCategoryEntity>]> {
    return await to(
      axiosInstance({
        method: 'PUT',
        url: `/api/admin/class-category/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async patch(
    id: string,
    data: ClassCategoryEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClassCategoryEntity>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/class-category/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async delete(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClassCategoryEntity>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/admin/class-category/${id}`,
        ...options
      })
    )
  }
}
