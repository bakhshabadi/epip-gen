import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { CountryEntity } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type { CountryDtoOut, getAllQueryDtoIn } from './country.dto'

export class CountryServiceApi {
  public static async getAll(
    queries: Partial<getAllQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<CountryDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/country`,
        params: queries,
        ...options
      })
    )
  }
  public static async post(
    data: CountryEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<CountryDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/admin/country`,
        data: data,
        ...options
      })
    )
  }
  public static async get(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<CountryDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/country/${id}`,
        ...options
      })
    )
  }
  public static async put(
    id: string,
    data: CountryEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<CountryDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'PUT',
        url: `/api/admin/country/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async patch(
    id: string,
    data: CountryEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<CountryDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/country/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async delete(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<CountryDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/admin/country/${id}`,
        ...options
      })
    )
  }
}
