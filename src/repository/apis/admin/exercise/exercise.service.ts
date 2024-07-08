import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { ExerciseEntity } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type { ExerciseDtoIn, ExerciseDtoOut, getAllQueryDtoIn } from './exercise.dto'

export class ExerciseServiceApi {
  public static async getAll(
    queries: Partial<getAllQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<ExerciseDtoIn>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/exercise`,
        params: queries,
        ...options
      })
    )
  }
  public static async post(
    data: ExerciseEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ExerciseDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/admin/exercise`,
        data: data,
        ...options
      })
    )
  }
  public static async get(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ExerciseDtoIn>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/exercise/${id}`,
        ...options
      })
    )
  }
  public static async put(
    id: string,
    data: ExerciseEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ExerciseEntity>]> {
    return await to(
      axiosInstance({
        method: 'PUT',
        url: `/api/admin/exercise/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async patch(
    id: string,
    data: ExerciseEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ExerciseEntity>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/exercise/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async delete(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ExerciseEntity>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/admin/exercise/${id}`,
        ...options
      })
    )
  }
  public static async lock(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ExerciseEntity>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/exercise/${id}/lock`,
        ...options
      })
    )
  }
  public static async unlock(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ExerciseEntity>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/exercise/${id}/unlock`,
        ...options
      })
    )
  }
}
