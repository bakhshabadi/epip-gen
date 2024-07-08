import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type {
  IPatientScheduleRangeDtoIn,
  ISetMyPatternSchedule,
  ScheduleEntity
} from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  getAllQueryDtoIn,
  IPatientSchedule,
  SchedulePostDto,
  ScheduleResDto
} from './schedule.dto'

export class ScheduleServiceApi {
  public static async updateMyPatternSchedule(
    data: ISetMyPatternSchedule,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IPatientSchedule>]> {
    return await to(
      axiosInstance({
        method: 'PUT',
        url: `/api/physo/schedule/update-my-pattern-schedule`,
        data: data,
        ...options
      })
    )
  }
  public static async deleteSchedule(
    clinicPhysioId: number,
    data: IPatientScheduleRangeDtoIn,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IPatientSchedule>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/physo/schedule/delete-schedule-range/${clinicPhysioId}`,
        data: data,
        ...options
      })
    )
  }
  public static async getAll(
    queries: Partial<getAllQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<ScheduleResDto>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/schedule`,
        params: queries,
        ...options
      })
    )
  }
  public static async post(
    data: ScheduleEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<SchedulePostDto>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/physo/schedule`,
        data: data,
        ...options
      })
    )
  }
  public static async put(
    id: string,
    data: ScheduleEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ScheduleResDto>]> {
    return await to(
      axiosInstance({
        method: 'PUT',
        url: `/api/physo/schedule/${id}`,
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
        url: `/api/physo/schedule/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async removeTeleChat(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/physo/schedule/remove-telechat/${id}`,
        ...options
      })
    )
  }
}
