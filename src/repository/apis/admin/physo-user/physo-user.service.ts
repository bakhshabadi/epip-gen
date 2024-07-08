import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { PhysoUserEntity } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  getAllQueryDtoIn,
  IGetAllPhysioUserDetails,
  IGetAllPhysoUsers,
  IGetFreeSchedules,
  PhysoUserDtoIn,
  PhysoUserPostDto
} from './physo-user.dto'

export class PhysoUserServiceApi {
  public static async getAllPhysioUsers(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IGetAllPhysoUsers>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/physo-user/get-all-physio-users`,
        ...options
      })
    )
  }
  public static async getAll(
    queries: Partial<getAllQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetAllPhysioUserDetails>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/physo-user`,
        params: queries,
        ...options
      })
    )
  }
  public static async post(
    data: PhysoUserEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PhysoUserPostDto>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/admin/physo-user`,
        data: data,
        ...options
      })
    )
  }
  public static async get(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PhysoUserDtoIn>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/physo-user/${id}`,
        ...options
      })
    )
  }
  public static async put(
    id: string,
    data: PhysoUserEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PhysoUserEntity>]> {
    return await to(
      axiosInstance({
        method: 'PUT',
        url: `/api/admin/physo-user/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async patch(
    id: string,
    data: PhysoUserEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PhysoUserEntity>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/physo-user/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async delete(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PhysoUserEntity>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/admin/physo-user/${id}`,
        ...options
      })
    )
  }
  public static async activate(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PhysoUserEntity>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/physo-user/${id}/activate`,
        ...options
      })
    )
  }
  public static async deActivate(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PhysoUserEntity>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/physo-user/${id}/deActivate`,
        ...options
      })
    )
  }
  public static async archive(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PhysoUserEntity>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/physo-user/${id}/archive`,
        ...options
      })
    )
  }
  public static async getFreeSchedules(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IGetFreeSchedules>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/physo-user/${id}/get-free-schedules`,
        ...options
      })
    )
  }
}
