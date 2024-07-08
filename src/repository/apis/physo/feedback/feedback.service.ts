import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { FeedbackController_sendFeedback } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  getMyFeedbacksQueryDtoIn,
  IGetFeedbacksResponseDto,
  ISendFeedbackRequestPhysioDto
} from './feedback.dto'

export class FeedbackServiceApi {
  public static async getMyFeedbacks(
    queries: Partial<getMyFeedbacksQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetFeedbacksResponseDto>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/feedback`,
        params: queries,
        ...options
      })
    )
  }
  public static async sendFeedback(
    data: FeedbackController_sendFeedback | FormData,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ISendFeedbackRequestPhysioDto>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/physo/feedback`,
        headers: { 'Content-Type': 'multipart/form-data' },
        data: data,
        ...options
      })
    )
  }
}
