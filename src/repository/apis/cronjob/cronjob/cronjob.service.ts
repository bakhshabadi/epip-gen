import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IResponse } from '../../@base/base.dto'

export class CronJobServiceApi {
  public static async physioClassReminder(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/cronjob/cronjob/physio-class-reminder`,
        ...options
      })
    )
  }
  public static async generateDailyEvaluation(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/cronjob/cronjob/generate-daily-evaluation`,
        ...options
      })
    )
  }
  public static async checkExpirePatientPlan(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/cronjob/cronjob/check-expire-patient-plan`,
        ...options
      })
    )
  }
  public static async checkEndOfThePhysioPattern(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/cronjob/cronjob/check-end-of-the-physio-pattern`,
        ...options
      })
    )
  }
}
