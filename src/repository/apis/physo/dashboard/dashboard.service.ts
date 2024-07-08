import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  getTodayOnlineEvaluationsOrAllDaysDtoOut,
  getTodayOnlineEvaluationsOrAllDaysQueryDtoIn,
  getTodayOrAllDaysEvaluationsQueryDtoIn,
  IGetEvaluations,
  IGetNotificationPhysoRes,
  IGetSummaryOfPatientsExercises,
  IGetSummery
} from './dashboard.dto'

export class DashboardServiceApi {
  public static async getSummary(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IGetSummery>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/dashboard/get-summary`,
        ...options
      })
    )
  }
  public static async getPatientSummary(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetSummaryOfPatientsExercises>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/dashboard/get-patients-summary`,
        ...options
      })
    )
  }
  public static async getTodayOrAllDaysEvaluations(
    queries: Partial<getTodayOrAllDaysEvaluationsQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetEvaluations>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/dashboard/get-today-evaluations-or-all-days`,
        params: queries,
        ...options
      })
    )
  }
  public static async getTodayOnlineEvaluationsOrAllDays(
    queries: Partial<getTodayOnlineEvaluationsOrAllDaysQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<
    [AxiosError | null, undefined | IResponseAll<getTodayOnlineEvaluationsOrAllDaysDtoOut>]
  > {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/dashboard/get-today-online-evaluations-or-all-days`,
        params: queries,
        ...options
      })
    )
  }
  public static async getNotifications(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IGetNotificationPhysoRes>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/dashboard/get-notifications`,
        ...options
      })
    )
  }
}
