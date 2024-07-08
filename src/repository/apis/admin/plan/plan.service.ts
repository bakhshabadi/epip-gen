import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { PlanEntity } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type { getAllQueryDtoIn, PlanDtoOut } from './plan.dto'

export class PlanServiceApi {
  public static async getAll(
    queries: Partial<getAllQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<PlanDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/plan`,
        params: queries,
        ...options
      })
    )
  }
  public static async post(
    data: PlanEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PlanEntity>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/admin/plan`,
        data: data,
        ...options
      })
    )
  }
  public static async get(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PlanDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/plan/${id}`,
        ...options
      })
    )
  }
  public static async put(
    id: string,
    data: PlanEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PlanEntity>]> {
    return await to(
      axiosInstance({
        method: 'PUT',
        url: `/api/admin/plan/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async patch(
    id: string,
    data: PlanEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PlanEntity>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/plan/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async delete(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PlanEntity>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/admin/plan/${id}`,
        ...options
      })
    )
  }
}
