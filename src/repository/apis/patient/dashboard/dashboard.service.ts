import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  getOnlinePhysiosQueryDtoIn,
  IGetNotificationPatientRes,
  IGetSummeryRes,
  PhysioListDtoOut
} from './dashboard.dto'

export class DashboardServiceApi {
  public static async getSummary(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IGetSummeryRes>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/dashboard/get-summary`,
        ...options
      })
    )
  }
  public static async getNotifications(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetNotificationPatientRes>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/dashboard/get-notifications`,
        ...options
      })
    )
  }
  public static async getOnlinePhysios(
    queries: Partial<getOnlinePhysiosQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<PhysioListDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/dashboard/get-online-physios`,
        params: queries,
        ...options
      })
    )
  }
}
