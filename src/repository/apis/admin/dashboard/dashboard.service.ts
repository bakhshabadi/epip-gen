import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IResponse } from '../../@base/base.dto'
import type { DashboardInfoCountsDtoOut } from './dashboard.dto'

export class DashboardServiceApi {
  public static async getInfoCounts(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<DashboardInfoCountsDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/dashboard/getInfoCounts`,
        ...options
      })
    )
  }
}
