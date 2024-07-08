import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { ActionTypeEntity } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type { ActionTypeDtoOut, getAllQueryDtoIn } from './action-type.dto'

export class ActionTypeServiceApi {
  public static async getAll(
    queries: Partial<getAllQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<ActionTypeDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/action-type`,
        params: queries,
        ...options
      })
    )
  }
  public static async post(
    data: ActionTypeEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ActionTypeDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/admin/action-type`,
        data: data,
        ...options
      })
    )
  }
  public static async get(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ActionTypeDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/action-type/${id}`,
        ...options
      })
    )
  }
  public static async put(
    id: string,
    data: ActionTypeEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ActionTypeDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'PUT',
        url: `/api/admin/action-type/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async patch(
    id: string,
    data: ActionTypeEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ActionTypeDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/action-type/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async delete(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ActionTypeDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/admin/action-type/${id}`,
        ...options
      })
    )
  }
}
