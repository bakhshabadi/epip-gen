import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { ExerciseDetailsEntity } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  ExerciseDetailsDtoIn,
  ExerciseDetailsDtoOut,
  getAllQueryDtoIn
} from './exercise-details.dto'

export class ExerciseDetailsServiceApi {
  public static async getAll(
    queries: Partial<getAllQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<ExerciseDetailsDtoIn>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/exercise-details`,
        params: queries,
        ...options
      })
    )
  }
  public static async post(
    data: ExerciseDetailsEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ExerciseDetailsDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/admin/exercise-details`,
        data: data,
        ...options
      })
    )
  }
  public static async get(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ExerciseDetailsDtoIn>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/exercise-details/${id}`,
        ...options
      })
    )
  }
  public static async put(
    id: string,
    data: ExerciseDetailsEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ExerciseDetailsEntity>]> {
    return await to(
      axiosInstance({
        method: 'PUT',
        url: `/api/admin/exercise-details/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async patch(
    id: string,
    data: ExerciseDetailsEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ExerciseDetailsEntity>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/exercise-details/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async delete(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ExerciseDetailsEntity>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/admin/exercise-details/${id}`,
        ...options
      })
    )
  }
  public static async lock(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ExerciseDetailsEntity>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/exercise-details/${id}/lock`,
        ...options
      })
    )
  }
  public static async unlock(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ExerciseDetailsEntity>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/exercise-details/${id}/unlock`,
        ...options
      })
    )
  }
}
