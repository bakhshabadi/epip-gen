import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { PatientUserEntity } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  getAllQueryDtoIn,
  IGetAllPatientUserDetails,
  PatientUserDtoOut
} from './patient-user.dto'

export class PatientUserServiceApi {
  public static async getAll(
    queries: Partial<getAllQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetAllPatientUserDetails>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/patient-user`,
        params: queries,
        ...options
      })
    )
  }
  public static async post(
    data: PatientUserEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PatientUserDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/admin/patient-user`,
        data: data,
        ...options
      })
    )
  }
  public static async get(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PatientUserDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/patient-user/${id}`,
        ...options
      })
    )
  }
  public static async put(
    id: string,
    data: PatientUserEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PatientUserDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'PUT',
        url: `/api/admin/patient-user/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async patch(
    id: string,
    data: PatientUserEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PatientUserDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/patient-user/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async delete(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PatientUserDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/admin/patient-user/${id}`,
        ...options
      })
    )
  }
  public static async archive(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PatientUserEntity>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/patient-user/${id}/archive`,
        ...options
      })
    )
  }
}
