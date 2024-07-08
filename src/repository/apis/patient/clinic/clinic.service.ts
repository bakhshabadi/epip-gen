import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { RequestToRegisterClinicIdsDtoIn } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type { ClinicDtoOut, clinicsQueryDtoIn } from './clinic.dto'

export class ClinicServiceApi {
  public static async clinics(
    queries: Partial<clinicsQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<ClinicDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/clinic/clinics`,
        params: queries,
        ...options
      })
    )
  }
  public static async requestToJoinTheClinics(
    data: RequestToRegisterClinicIdsDtoIn,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClinicDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/patient/clinic/request-to-join-the-clinics`,
        data: data,
        ...options
      })
    )
  }
}
