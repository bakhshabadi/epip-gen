import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IResponse } from '../../@base/base.dto'

export class LogServiceApi {
  public static async log(
    errorCode: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/log/${errorCode}`,
        ...options
      })
    )
  }
}
