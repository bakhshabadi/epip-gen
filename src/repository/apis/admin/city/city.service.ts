import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { CityEntity } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type { CityDtoOut, getAllQueryDtoIn } from './city.dto'

export class CityServiceApi {
  public static async getAll(
    queries: Partial<getAllQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<CityDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/city`,
        params: queries,
        ...options
      })
    )
  }
  public static async post(
    data: CityEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<CityDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/admin/city`,
        data: data,
        ...options
      })
    )
  }
  public static async get(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<CityDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/city/${id}`,
        ...options
      })
    )
  }
  public static async put(
    id: string,
    data: CityEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<CityEntity>]> {
    return await to(
      axiosInstance({
        method: 'PUT',
        url: `/api/admin/city/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async patch(
    id: string,
    data: CityEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<CityEntity>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/city/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async delete(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<CityEntity>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/admin/city/${id}`,
        ...options
      })
    )
  }
}
