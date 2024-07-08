import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type {
  EvaluationController_uploadEvaluation,
  IPostExerciseDonePatient,
  UserEvaluationDtoPatch
} from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  ClassCategoryEntity,
  getEvaluationsQueryDtoIn,
  getEvaluationsSummaryOfflineQueryDtoIn,
  getEvaluationsSummaryOnlineQueryDtoIn,
  getEvaluationsSummaryQueryDtoIn,
  getEvaluationsWithDetailsQueryDtoIn,
  getExerciseDonePatientByIdQueryDtoIn,
  getExercisesQueryDtoIn,
  IGetEvaluationsWithDetails,
  IGetExerciseDonePatientDTO,
  IGetExerciseMessages,
  IGetExercisesDTO,
  IResGetEvaluationFiles,
  IResGetMyClassCategories,
  UserEvaluationDtoOut,
  UserEvaluationSummeryDtoOut
} from './evaluation.dto'

export class EvaluationServiceApi {
  public static async getEvaluationsWithDetails(
    queries: Partial<getEvaluationsWithDetailsQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetEvaluationsWithDetails>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/evaluation/get-evaluations-with-details`,
        params: queries,
        ...options
      })
    )
  }
  public static async getExercises(
    queries: Partial<getExercisesQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetExercisesDTO>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/evaluation/exercises`,
        params: queries,
        ...options
      })
    )
  }
  public static async getEvaluations(
    queries: Partial<getEvaluationsQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<UserEvaluationDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/evaluation`,
        params: queries,
        ...options
      })
    )
  }
  public static async getEvaluationsSummary(
    queries: Partial<getEvaluationsSummaryQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<UserEvaluationDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/evaluation/evaluations-summary`,
        params: queries,
        ...options
      })
    )
  }
  public static async getEvaluationsSummaryOffline(
    queries: Partial<getEvaluationsSummaryOfflineQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<UserEvaluationSummeryDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/evaluation/evaluations-summary-offline`,
        params: queries,
        ...options
      })
    )
  }
  public static async getEvaluationsSummaryOnline(
    queries: Partial<getEvaluationsSummaryOnlineQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<UserEvaluationSummeryDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/evaluation/evaluations-summary-online`,
        params: queries,
        ...options
      })
    )
  }
  public static async getExerciseDonePatient(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetExerciseDonePatientDTO>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/evaluation/exercises/exercise-done-patient`,
        ...options
      })
    )
  }
  public static async getExerciseDonePatientById(
    id: string,
    queries: Partial<getExerciseDonePatientByIdQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetExerciseDonePatientDTO>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/evaluation/exercises/${id}/exercise-done-patient`,
        params: queries,
        ...options
      })
    )
  }
  public static async postExerciseDonePatient(
    id: string,
    data: IPostExerciseDonePatient,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/patient/evaluation/exercises/${id}/exercise-done-patient`,
        data: data,
        ...options
      })
    )
  }
  public static async getClassCategories(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<ClassCategoryEntity>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/evaluation/get-class-categories`,
        ...options
      })
    )
  }
  public static async getMyClassCategories(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IResGetMyClassCategories>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/evaluation/my-class-categories`,
        ...options
      })
    )
  }
  public static async selectClassInMyCategories(
    classId: any,
    classCategoryId: any,
    ppsId: any,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/patient/evaluation/select-class-in_my_categories/${ppsId}/${classCategoryId}/${classId}`,
        ...options
      })
    )
  }
  public static async getExerciseMessage(
    exerciseId: number,
    actionTypeId: number,
    type: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IGetExerciseMessages>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/evaluation/getExerciseMessage/${exerciseId}/${actionTypeId}/${type}`,
        ...options
      })
    )
  }
  public static async getExerciseMessages(
    exerciseId: number,
    type: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetExerciseMessages>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/evaluation/getExerciseMessages/${exerciseId}/${type}`,
        ...options
      })
    )
  }
  public static async getEvaluation(
    id: any,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<UserEvaluationDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/evaluation/${id}`,
        ...options
      })
    )
  }
  public static async updateEvaluation(
    id: number,
    data: UserEvaluationDtoPatch,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/patient/evaluation/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async uploadEvaluation(
    id: number,
    data: EvaluationController_uploadEvaluation | FormData,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/patient/evaluation/upload-evaluation/${id}`,
        headers: { 'Content-Type': 'multipart/form-data' },
        data: data,
        ...options
      })
    )
  }
  public static async getEvaluationFiles(
    id: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IResGetEvaluationFiles>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/evaluation/get-evaluation-files/${id}`,
        ...options
      })
    )
  }
}
