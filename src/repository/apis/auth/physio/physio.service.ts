import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { PhysioController_patinetRegister, PhysioController_register } from '../../../models'
import type { IResponse } from '../../@base/base.dto'

export class PhysioServiceApi {
  public static async register(
    data: PhysioController_register | FormData,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/auth/physio/register`,
        headers: { 'Content-Type': 'multipart/form-data' },
        data: data,
        ...options
      })
    )
  }
  public static async patinetRegister(
    data: PhysioController_patinetRegister | FormData,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/auth/physio/patient-register`,
        headers: { 'Content-Type': 'multipart/form-data' },
        data: data,
        ...options
      })
    )
  }
}
