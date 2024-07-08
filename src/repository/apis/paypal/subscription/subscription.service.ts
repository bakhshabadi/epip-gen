import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IResponse } from '../../@base/base.dto'

export class SubscriptionServiceApi {
  public static async getPaymentSaleCompleted(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/paypal/subscription`,
        ...options
      })
    )
  }
  public static async postPaymentSaleCompleted(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/paypal/subscription`,
        ...options
      })
    )
  }
}
