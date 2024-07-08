import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  IGetPatientWithExercise,
  InitialEvaluationExercisesDtoOut
} from './initial-evaluation.dto'

export class InitialEvaluationServiceApi {
  public static async getInitialEvaluationExercises(
    evaluationPart: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<InitialEvaluationExercisesDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/initial-evaluation/get-initial-evaluation-exercises/${evaluationPart}`,
        ...options
      })
    )
  }
  public static async getInitialExercise(
    exercisesId: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IGetPatientWithExercise>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/initial-evaluation/get-initial-exercise/${exercisesId}`,
        ...options
      })
    )
  }
}
