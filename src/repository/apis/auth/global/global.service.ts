import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IGetForgetPassword, IGetUpdatePassword, UserLoginReqDto } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type { getAllPublicClinicsQueryDtoIn, UserLoginResDto } from './global.dto'

export class GlobalServiceApi {
  public static async login(
    data: UserLoginReqDto,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<UserLoginResDto>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/auth/global/login`,
        data: data,
        ...options
      })
    )
  }
  public static async refreshToken(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<UserLoginResDto>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/auth/global/refresh-token`,
        ...options
      })
    )
  }
  public static async forgetPassword(
    data: IGetForgetPassword,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/auth/global/forget-password`,
        data: data,
        ...options
      })
    )
  }
  public static async updatePassword(
    data: IGetUpdatePassword,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/auth/global/update-password`,
        data: data,
        ...options
      })
    )
  }
  public static async getAllPublicClinics(
    queries: Partial<getAllPublicClinicsQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<ShareClinicDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/auth/global/get-all-public-clinics`,
        params: queries,
        ...options
      })
    )
  }
}
