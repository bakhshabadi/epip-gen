import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  ClassDetailsDtoOut,
  ClassDtoOut,
  getPatientClassesQueryDtoIn,
  getPatientSessionClassesQueryDtoIn,
  PatienSessionClassesByClassIdDtoOut
} from './class.dto'

export class ClassServiceApi {
  public static async getPatientClasses(
    queries: Partial<getPatientClassesQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<ClassDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/class/get-patient-classes`,
        params: queries,
        ...options
      })
    )
  }
  public static async getPatientSessionClasses(
    classId: number,
    queries: Partial<getPatientSessionClassesQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<PatienSessionClassesByClassIdDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/class/get-patient-session-classes/${classId}`,
        params: queries,
        ...options
      })
    )
  }
  public static async getPatientClassDetails(
    classId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClassDetailsDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/class/get-patient-class-details/${classId}`,
        ...options
      })
    )
  }
}
