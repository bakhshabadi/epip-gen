import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IResponse } from '../../@base/base.dto'
import type { IGetPose } from './artificial-intelligence.dto'

export class ArtificialIntelligenceServiceApi {
  public static async getPoseSamplesAndExerciseName(
    exerciseId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IGetPose>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/artificial-intelligence/get-exercise-pose/${exerciseId}`,
        ...options
      })
    )
  }
}
