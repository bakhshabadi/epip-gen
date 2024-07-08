import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { ISendReplyForFeedbackReqDTO } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type { getFeedbacksQueryDtoIn, IGetFeedbacksResDTO } from './feedback.dto'

export class FeedbackServiceApi {
  public static async getFeedbacks(
    queries: Partial<getFeedbacksQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetFeedbacksResDTO>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/feedback`,
        params: queries,
        ...options
      })
    )
  }
  public static async sendReplyForFeedback(
    id: string,
    data: ISendReplyForFeedbackReqDTO,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ISendReplyForFeedbackReqDTO>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/feedback/${id}`,
        data: data,
        ...options
      })
    )
  }
}
