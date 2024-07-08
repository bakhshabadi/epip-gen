import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IResponseAll } from '../../@base/base.dto'
import type {
  ClinicDtoOut,
  getAllPublicClinicsQueryDtoIn,
  ICityDtoOut,
  PlanDtoOut
} from './global.dto'

export class GlobalServiceApi {
  public static async getPlans(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<PlanDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/global/get-plans`,
        ...options
      })
    )
  }
  public static async getPremiumPlans(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<PlanDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/global/get-premium-plans`,
        ...options
      })
    )
  }
  public static async getCities(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<ICityDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/global/get-cities`,
        ...options
      })
    )
  }
  public static async getAllPublicClinics(
    queries: Partial<getAllPublicClinicsQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<ClinicDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/global/get-all-public-clinics`,
        params: queries,
        ...options
      })
    )
  }
}
