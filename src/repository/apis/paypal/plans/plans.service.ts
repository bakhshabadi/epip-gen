import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IResponse } from '../../@base/base.dto'
import type { AnyResponse } from './plans.dto'

export class PlanServiceApi {
  public static async createOrder(
    productId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<AnyResponse>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/paypal/plans/create-order/${productId}`,
        ...options
      })
    )
  }
  public static async createTestServerOrder(
    productId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<AnyResponse>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/paypal/plans/create-test-server-order/${productId}`,
        ...options
      })
    )
  }
  public static async captureOrder(
    orderId: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<AnyResponse>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/paypal/plans/capture-order/${orderId}`,
        ...options
      })
    )
  }
  public static async captureRenewalOrder(
    orderId: number,
    patientPlanId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<AnyResponse>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/paypal/plans/capture-renewal-order/${orderId}/${patientPlanId}`,
        ...options
      })
    )
  }
  public static async createFreeOrder(
    productId: number,
    orderId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<AnyResponse>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/paypal/plans/create-free-order/${orderId}`,
        ...options
      })
    )
  }
}
