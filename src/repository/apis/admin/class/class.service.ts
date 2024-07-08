import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { ClassEntity } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type { getAllQueryDtoIn } from './class.dto'

export class ClassServiceApi {
  public static async getAll(
    queries: Partial<getAllQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<ClassEntity>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/class`,
        params: queries,
        ...options
      })
    )
  }
  public static async post(
    data: ClassEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClassEntity>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/admin/class`,
        data: data,
        ...options
      })
    )
  }
  public static async get(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClassEntity>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/class/${id}`,
        ...options
      })
    )
  }
  public static async patch(
    id: string,
    data: ClassEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClassEntity>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/class/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async delete(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClassEntity>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/admin/class/${id}`,
        ...options
      })
    )
  }
  public static async lock(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClassEntity>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/class/${id}/lock`,
        ...options
      })
    )
  }
  public static async unlock(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClassEntity>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/class/${id}/unlock`,
        ...options
      })
    )
  }
}
