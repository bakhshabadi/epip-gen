import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IAiPlatformWebhookDtoIn } from '../../../models'
import type { IResponse } from '../../@base/base.dto'

export class EvaluationSocketServiceApi {
  public static async aiPlatformInitialWebhook(
    data: IAiPlatformWebhookDtoIn,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/webhook/evaluation/ai-platform-initial-webhook`,
        data: data,
        ...options
      })
    )
  }
  public static async aiPlatformDailyWebhook(
    data: IAiPlatformWebhookDtoIn,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/webhook/evaluation/ai-platform-daily-webhook`,
        data: data,
        ...options
      })
    )
  }
}
