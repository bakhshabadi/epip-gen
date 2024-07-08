import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  getSessionsPatientWithIdQueryDtoIn,
  IGetSessionsPatient,
  IResGetSessionsExercisePatient,
  ShareIGetOverallReport,
  ShareOverallReportByExerciseIdDtoOut,
  ShareSessionsPatientWithIdDtoOut
} from './patient_report.dto'

export class PatientReportServiceApi {
  public static async getOverallReport(
    patientId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<ShareIGetOverallReport>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/patient_report/get-overall-report/${patientId}`,
        ...options
      })
    )
  }
  public static async getOverallReportByExerciseId(
    patientId: number,
    exerciseId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ShareOverallReportByExerciseIdDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/patient_report/get-overall-report_exercise/${patientId}/${exerciseId}`,
        ...options
      })
    )
  }
  public static async getSessionsPatient(
    patientId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetSessionsPatient>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/patient_report/get-sessions-patient/${patientId}`,
        ...options
      })
    )
  }
  public static async getSessionsExercisePatient(
    date: string,
    patientId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IResGetSessionsExercisePatient>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/patient_report/get-sessions-exercise-patient/${patientId}/${date}`,
        ...options
      })
    )
  }
  public static async getSessionsPatientWithId(
    patientId: number,
    exerciseId: number,
    peId: number,
    queries: Partial<getSessionsPatientWithIdQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ShareSessionsPatientWithIdDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/patient_report/get-sessions-patient/${peId}/${exerciseId}/${patientId}`,
        params: queries,
        ...options
      })
    )
  }
}
