import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type {
  IDtoUpdatePatientProfilePassword,
  ProfileController_updateProfile
} from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  getPatientPlansQueryDtoIn,
  IDtoCountry,
  IDtoPatientPlanOut,
  IDtoUpdatePatientProfileOut
} from './profile.dto'

export class ProfileServiceApi {
  public static async getProfile(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IDtoUpdatePatientProfileOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/profile`,
        ...options
      })
    )
  }
  public static async updateProfile(
    data: ProfileController_updateProfile | FormData,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'PUT',
        url: `/api/patient/profile`,
        headers: { 'Content-Type': 'multipart/form-data' },
        data: data,
        ...options
      })
    )
  }
  public static async getCountries(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IDtoCountry>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/profile/countries`,
        ...options
      })
    )
  }
  public static async getCities(
    countryId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IDtoCountry>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/profile/cities/${countryId}`,
        ...options
      })
    )
  }
  public static async updateProfilePassword(
    data: IDtoUpdatePatientProfilePassword,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/patient/profile/update-password`,
        data: data,
        ...options
      })
    )
  }
  public static async getPatientPlans(
    queries: Partial<getPatientPlansQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IDtoPatientPlanOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/profile/get-plans`,
        params: queries,
        ...options
      })
    )
  }
  public static async getLastPatientPlan(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IDtoPatientPlanOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/profile/get-active-plan`,
        ...options
      })
    )
  }
}
