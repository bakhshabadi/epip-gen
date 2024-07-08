import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type {
  IDtoUpdateProfileEmployer,
  IDtoUpdateProfilePassword,
  ProfileController_insertLicense,
  ProfileController_updateProfile
} from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type { IDtoCountry, IDtoUpdateProfileOut } from './profile.dto'

export class ProfileServiceApi {
  public static async getProfile(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IDtoUpdateProfileOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/profile`,
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
        url: `/api/physo/profile`,
        headers: { 'Content-Type': 'multipart/form-data' },
        data: data,
        ...options
      })
    )
  }
  public static async insertLicense(
    data: ProfileController_insertLicense | FormData,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/physo/profile/license`,
        headers: { 'Content-Type': 'multipart/form-data' },
        data: data,
        ...options
      })
    )
  }
  public static async removeLicenseFile(
    licenseId: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/physo/profile/${licenseId}`,
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
        url: `/api/physo/profile/countries`,
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
        url: `/api/physo/profile/cities/${countryId}`,
        ...options
      })
    )
  }
  public static async getProfileEmployer(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IDtoUpdateProfileEmployer>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/profile/get-employer`,
        ...options
      })
    )
  }
  public static async updateEmployer(
    data: IDtoUpdateProfileEmployer,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'PUT',
        url: `/api/physo/profile/update-employer`,
        data: data,
        ...options
      })
    )
  }
  public static async updateProfilePassword(
    data: IDtoUpdateProfilePassword,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/physo/profile/update-password`,
        data: data,
        ...options
      })
    )
  }
}
