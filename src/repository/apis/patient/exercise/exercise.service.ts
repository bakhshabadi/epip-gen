import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  ExerciseDtoIn,
  ExerciseDtoOut,
  getAllQueryDtoIn,
  IGetPatientWithExercise,
  IGetSessionsPatient,
  IResGetSessionsExercisePatient,
  ShareIGetOverallReport,
  ShareOverallReportByExerciseIdDtoOut,
  ShareSessionsPatientWithIdDtoOut
} from './exercise.dto'

export class ExerciseServiceApi {
  public static async getSessionsPatient(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetSessionsPatient>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/exercise/get-sessions-patient`,
        ...options
      })
    )
  }
  public static async getSessionsExercisePatient(
    date: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IResGetSessionsExercisePatient>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/exercise/get-sessions-exercise-patient/${date}`,
        ...options
      })
    )
  }
  public static async getSessionsPatientWithId(
    date: string,
    exerciseId: number,
    peId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ShareSessionsPatientWithIdDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/exercise/get-sessions-patient/${peId}/${exerciseId}/${date}`,
        ...options
      })
    )
  }
  public static async getListOfExercisesWhichUsedInOverallReport(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<ShareIGetOverallReport>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/exercise/get-list-of-exercises-which-used-in-overall-report`,
        ...options
      })
    )
  }
  public static async getOverallReportByExerciseId(
    exerciseId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ShareOverallReportByExerciseIdDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/exercise/get-overall-report/${exerciseId}`,
        ...options
      })
    )
  }
  public static async getPatientWithExercise(
    id: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IGetPatientWithExercise>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/exercise/get-patient-with-exercise/${id}`,
        ...options
      })
    )
  }
  public static async getAll(
    queries: Partial<getAllQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<ExerciseDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/exercise`,
        params: queries,
        ...options
      })
    )
  }
  public static async get(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ExerciseDtoIn>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/exercise/${id}`,
        ...options
      })
    )
  }
}
