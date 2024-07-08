import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  getLastPendingEvaluationsQueryDtoIn,
  getPendingEvaluationsQueryDtoIn,
  IEmptyPhysoEvaluation
} from './evaluation.dto'

export class EvaluationServiceApi {
  public static async getPendingEvaluations(
    queries: Partial<getPendingEvaluationsQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IEmptyPhysoEvaluation>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/evaluation/pending-evaluation`,
        params: queries,
        ...options
      })
    )
  }
  public static async getLastPendingEvaluations(
    queries: Partial<getLastPendingEvaluationsQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IEmptyPhysoEvaluation>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/evaluation/last_pending-evaluation`,
        params: queries,
        ...options
      })
    )
  }
  public static async getVisitedEvaluations(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IEmptyPhysoEvaluation>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/evaluation/visited-evaluation`,
        ...options
      })
    )
  }
}
