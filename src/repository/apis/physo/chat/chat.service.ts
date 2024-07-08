import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { ISendMessage } from '../../../models'
import type { IResponse } from '../../@base/base.dto'
import type { AnyResponse } from './chat.dto'

export class ChatServiceApi {
  public static async sendMessage(
    data: ISendMessage,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<AnyResponse>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/physo/physo`,
        data: data,
        ...options
      })
    )
  }
}
