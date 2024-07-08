import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IAddExercise, TemplateEntity } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type { getAllQueryDtoIn } from './template.dto'

export class TemplateServiceApi {
  public static async getAll(
    queries: Partial<getAllQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<TemplateEntity>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/template`,
        params: queries,
        ...options
      })
    )
  }
  public static async post(
    data: TemplateEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<TemplateEntity>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/admin/template`,
        data: data,
        ...options
      })
    )
  }
  public static async get(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<TemplateEntity>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/template/${id}`,
        ...options
      })
    )
  }
  public static async put(
    id: string,
    data: TemplateEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<TemplateEntity>]> {
    return await to(
      axiosInstance({
        method: 'PUT',
        url: `/api/admin/template/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async patch(
    id: string,
    data: TemplateEntity,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<TemplateEntity>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/admin/template/${id}`,
        data: data,
        ...options
      })
    )
  }
  public static async delete(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<TemplateEntity>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/admin/template/${id}`,
        ...options
      })
    )
  }
  public static async addExercise(
    tmp_id: string,
    exercise_id: string,
    data: IAddExercise,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<TemplateEntity>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/admin/template/${tmp_id}/add-exercise/${exercise_id}`,
        data: data,
        ...options
      })
    )
  }
  public static async removeExercise(
    tmp_id: string,
    exercise_id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/admin/template/${tmp_id}/remove-exercise/${exercise_id}`,
        ...options
      })
    )
  }
}
