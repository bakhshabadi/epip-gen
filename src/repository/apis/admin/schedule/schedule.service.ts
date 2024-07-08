import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { ScheduleEntity } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type { getAllQueryDtoIn } from './schedule.dto'

export class ScheduleServiceApi {
  public static async getAll(
    queries: Partial<getAllQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<ScheduleEntity>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/schedules`,
        params: queries,
        ...options
      })
    )
  }
  public static async post(
    data: ScheduleEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ScheduleEntity>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/admin/schedules`,
        data: data,
        ...options
      })
    )
  }
  public static async get(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ScheduleEntity>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/schedules/${id}`,
        ...options
      })
    )
  }
  public static async put(
    id: string,
    data: ScheduleEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ScheduleEntity>]> {
    return await to(
      axiosInstance({
        method: 'PUT',
        url: `/api/admin/schedules/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async patch(
    id: string,
    data: ScheduleEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ScheduleEntity>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/schedules/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async delete(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ScheduleEntity>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/admin/schedules/${id}`,
        ...options
      })
    )
  }
}
