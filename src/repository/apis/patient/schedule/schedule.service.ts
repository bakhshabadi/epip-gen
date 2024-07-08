import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  getAllQueryDtoIn,
  IGetPlanStatusForPatientDtoOut,
  IRangeSchedules,
  rangeSchedulesQueryDtoIn,
  ScheduleReqDto
} from './schedule.dto'

export class ScheduleServiceApi {
  public static async getAll(
    queries: Partial<getAllQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<ScheduleReqDto>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/schedule/all-schedule`,
        params: queries,
        ...options
      })
    )
  }
  public static async getPlanStatusForPatient(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IGetPlanStatusForPatientDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/schedule/get-plan-status-for-patient`,
        ...options
      })
    )
  }
  public static async selectManualSchedule(
    scheduleId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/patient/schedule/select-manual-schedule/${scheduleId}`,
        ...options
      })
    )
  }
  public static async selectAutomaticSchedule(
    physioId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/patient/schedule/select-automatic-schedule/${physioId}`,
        ...options
      })
    )
  }
  public static async removeTeleChat(
    id: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/patient/schedule/remove-telechat/${id}`,
        ...options
      })
    )
  }
  public static async rangeSchedules(
    queries: Partial<rangeSchedulesQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IRangeSchedules>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/schedule/range-schedule`,
        params: queries,
        ...options
      })
    )
  }
}
