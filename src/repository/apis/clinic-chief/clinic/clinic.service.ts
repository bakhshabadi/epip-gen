import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IClinicPatch } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  getPatientClinicQueryDtoIn,
  getPhysioClinicQueryDtoIn,
  PatientItem,
  PhysioItem
} from './clinic.dto'

export class ClinicServiceApi {
  public static async get(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IClinicPatch>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/clinic-chief/clinic`,
        ...options
      })
    )
  }
  public static async patch(
    data: IClinicPatch,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/clinic-chief/clinic`,
        data: data,
        ...options
      })
    )
  }
  public static async activePhysio(
    physioId: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/clinic-chief/clinic/active-physio/${physioId}`,
        ...options
      })
    )
  }
  public static async activePatient(
    patientId: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/clinic-chief/clinic/active-patient/${patientId}`,
        ...options
      })
    )
  }
  public static async inactivePhysio(
    physioId: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/clinic-chief/clinic/inactive-physio/${physioId}`,
        ...options
      })
    )
  }
  public static async inactivePatient(
    patientId: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/clinic-chief/clinic/inactive-patient/${patientId}`,
        ...options
      })
    )
  }
  public static async addPhysio(
    physioId: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/clinic-chief/clinic/add-physio/${physioId}`,
        ...options
      })
    )
  }
  public static async addPatient(
    patientId: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/clinic-chief/clinic/add-patient/${patientId}`,
        ...options
      })
    )
  }
  public static async deletePhysio(
    physioId: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/clinic-chief/clinic/delete-physio/${physioId}`,
        ...options
      })
    )
  }
  public static async getPhysioClinic(
    queries: Partial<getPhysioClinicQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<PhysioItem>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/clinic-chief/clinic/get-physio-clinic`,
        params: queries,
        ...options
      })
    )
  }
  public static async getPatientClinic(
    queries: Partial<getPatientClinicQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<PatientItem>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/clinic-chief/clinic/get-patient-clinic`,
        params: queries,
        ...options
      })
    )
  }
}
