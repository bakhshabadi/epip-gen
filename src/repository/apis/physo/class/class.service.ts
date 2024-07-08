import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  getPhysioSessionClassesQueryDtoIn,
  getPhysoClassesQueryDtoIn,
  IGetSessionClasses,
  PhysioClassesDtoOut,
  PhysoClassDetailsDtoOut
} from './class.dto'

export class ClassServiceApi {
  public static async getPhysoClasses(
    queries: Partial<getPhysoClassesQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<PhysioClassesDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/class/get-physo-classes`,
        params: queries,
        ...options
      })
    )
  }
  public static async getPhysioSessionClasses(
    classId: number,
    queries: Partial<getPhysioSessionClassesQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IGetSessionClasses>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/class/get-physio-session-classes/${classId}`,
        params: queries,
        ...options
      })
    )
  }
  public static async getPhysioClassDetails(
    classId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PhysoClassDetailsDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/class/get-physio-class-details/${classId}`,
        ...options
      })
    )
  }
}
