import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { PointEntity } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type { getAllQueryDtoIn, PointDtoOut } from './point.dto'

export class PointServiceApi {
  public static async getAll(
    queries: Partial<getAllQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<PointDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/point`,
        params: queries,
        ...options
      })
    )
  }
  public static async post(
    data: PointEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PointDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/admin/point`,
        data: data,
        ...options
      })
    )
  }
  public static async get(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PointDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/point/${id}`,
        ...options
      })
    )
  }
  public static async put(
    id: string,
    data: PointEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PointDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'PUT',
        url: `/api/admin/point/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async patch(
    id: string,
    data: PointEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PointDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/point/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async delete(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PointDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/admin/point/${id}`,
        ...options
      })
    )
  }
}
