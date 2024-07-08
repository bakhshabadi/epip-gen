import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { ClinicChiefUserDtoIn } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type { ClinicChiefUserDtoOut, getAllQueryDtoIn } from './clinic-chief.dto'

export class ClinicChiefUserServiceApi {
  public static async getAll(
    queries: Partial<getAllQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<ClinicChiefUserDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/clinic-chief`,
        params: queries,
        ...options
      })
    )
  }
  public static async post(
    data: ClinicChiefUserDtoIn,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClinicChiefUserDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/admin/clinic-chief`,
        data: data,
        ...options
      })
    )
  }
  public static async get(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClinicChiefUserDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/clinic-chief/${id}`,
        ...options
      })
    )
  }
  public static async delete(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClinicChiefUserDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/admin/clinic-chief/${id}`,
        ...options
      })
    )
  }
}
