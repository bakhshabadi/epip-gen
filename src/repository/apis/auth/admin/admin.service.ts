import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { UserLoginWithoutPasswordReqDto } from '../../../models'
import type { IResponse } from '../../@base/base.dto'

export class AdminServiceApi {
  public static async loginViaPatientOrPhysio(
    data: UserLoginWithoutPasswordReqDto,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/auth/admin/login-via-another-user`,
        data: data,
        ...options
      })
    )
  }
}
