import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { ICallDtoIn } from '../../../models'
import type { IResponse } from '../../@base/base.dto'
import type { AnyResponse, ICreateSessionResponse } from './session.dto'

export class SessionServiceApi {
  public static async call(
    data: ICallDtoIn,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ICreateSessionResponse>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/vidu/session/call`,
        data: data,
        ...options
      })
    )
  }
  public static async createSessionClassForPhysio(
    sessionId: number,
    classId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<AnyResponse>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/vidu/session/create-class/${classId}/${sessionId}`,
        ...options
      })
    )
  }
  public static async createSessionTelechat(
    sessionId: number,
    ppsId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<AnyResponse>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/vidu/session/create-telechat/${ppsId}/${sessionId}`,
        ...options
      })
    )
  }
  public static async endOfSessionTelechat(
    sessionId: number,
    ppsId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<AnyResponse>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/vidu/session/end-of-telechat/${ppsId}/${sessionId}`,
        ...options
      })
    )
  }
  public static async endOfSessionClassForPhysio(
    sessionId: number,
    classId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<AnyResponse>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/vidu/session/end-of-class/${classId}/${sessionId}`,
        ...options
      })
    )
  }
  public static async joinSessionClassForPatient(
    link: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<AnyResponse>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/vidu/session/join-to-class/${link}`,
        ...options
      })
    )
  }
  public static async connections(
    sessionId: any,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<String>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/vidu/session/${sessionId}/connections`,
        ...options
      })
    )
  }
}
