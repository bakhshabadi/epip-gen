import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { FeedbackController_sendFeedback } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  getMyFeedbacksPhysioQueryDtoIn,
  getMyFeedbacksSystemQueryDtoIn,
  IGetFeedbacksPhysoResponseDto,
  IGetFeedbacksSystemResponseDto,
  IGetPhysicalTherapists,
  IResSendFeedback
} from './feedback.dto'

export class FeedbackServiceApi {
  public static async getPhysicalTherapists(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetPhysicalTherapists>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/feedback/get-physical-therapists`,
        ...options
      })
    )
  }
  public static async getMyFeedbacksSystem(
    queries: Partial<getMyFeedbacksSystemQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetFeedbacksSystemResponseDto>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/feedback/system`,
        params: queries,
        ...options
      })
    )
  }
  public static async getMyFeedbacksPhysio(
    queries: Partial<getMyFeedbacksPhysioQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetFeedbacksPhysoResponseDto>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/feedback/physio`,
        params: queries,
        ...options
      })
    )
  }
  public static async sendFeedback(
    data: FeedbackController_sendFeedback | FormData,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IResSendFeedback>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/patient/feedback`,
        headers: { 'Content-Type': 'multipart/form-data' },
        data: data,
        ...options
      })
    )
  }
}
