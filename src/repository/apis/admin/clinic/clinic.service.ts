import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { ClinicEntity } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  getAllQueryDtoIn,
  getPatientClinicQueryDtoIn,
  getPhysioClinicQueryDtoIn
} from './clinic.dto'

export class ClinicServiceApi {
  public static async getAll(
    queries: Partial<getAllQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<ClinicEntity>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/clinic`,
        params: queries,
        ...options
      })
    )
  }
  public static async post(
    data: ClinicEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClinicEntity>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/admin/clinic`,
        data: data,
        ...options
      })
    )
  }
  public static async get(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClinicEntity>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/clinic/${id}`,
        ...options
      })
    )
  }
  public static async put(
    id: string,
    data: ClinicEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClinicEntity>]> {
    return await to(
      axiosInstance({
        method: 'PUT',
        url: `/api/admin/clinic/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async patch(
    id: string,
    data: ClinicEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClinicEntity>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/clinic/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async delete(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClinicEntity>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/admin/clinic/${id}`,
        ...options
      })
    )
  }
  public static async addPhysio(
    clinicId: string,
    physioId: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClinicEntity>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/admin/clinic/${clinicId}/add-physio/${physioId}`,
        ...options
      })
    )
  }
  public static async addPatient(
    clinicId: string,
    patientId: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClinicEntity>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/admin/clinic/${clinicId}/add-patient/${patientId}`,
        ...options
      })
    )
  }
  public static async deletePhysio(
    clinicId: string,
    physioId: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClinicEntity>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/admin/clinic/${clinicId}/delete-physio/${physioId}`,
        ...options
      })
    )
  }
  public static async deletePatient(
    clinicId: string,
    patientId: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClinicEntity>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/admin/clinic/${clinicId}/delete-patient/${patientId}`,
        ...options
      })
    )
  }
  public static async getPhysioClinic(
    clinicId: string,
    queries: Partial<getPhysioClinicQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClinicEntity>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/clinic/${clinicId}/get-physio-clinic`,
        params: queries,
        ...options
      })
    )
  }
  public static async getPatientClinic(
    clinicId: string,
    queries: Partial<getPatientClinicQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClinicEntity>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/clinic/${clinicId}/get-patient-clinic`,
        params: queries,
        ...options
      })
    )
  }
}
