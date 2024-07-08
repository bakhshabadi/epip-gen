import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { PatientOrPyhsioLoginWithoutPasswordReqDto } from '../../../models'
import type { IResponse } from '../../@base/base.dto'
import type { UserLoginResDto } from './chief.dto'

export class ChiefServiceApi {
  public static async loginViaPatientOrPhysio(
    data: PatientOrPyhsioLoginWithoutPasswordReqDto,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<UserLoginResDto>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/auth/chief/login-via-another-user`,
        data: data,
        ...options
      })
    )
  }
}
