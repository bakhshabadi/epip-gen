import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IAddPhysioTemplateExerciseDtoIn } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type { getAllQueryDtoIn, IGetTemplateWithExercisesDtoOut } from './template.dto'

export class TemplateExerciseServiceApi {
  public static async getAll(
    queries: Partial<getAllQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetTemplateWithExercisesDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/exercise-template`,
        params: queries,
        ...options
      })
    )
  }
  public static async post(
    data: IAddPhysioTemplateExerciseDtoIn,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IGetTemplateWithExercisesDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/physo/exercise-template`,
        data: data,
        ...options
      })
    )
  }
  public static async removeTemplate(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/physo/exercise-template/${id}`,
        ...options
      })
    )
  }
  public static async removeExersiceFromTemplate(
    templateId: string,
    exerciseId: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/physo/exercise-template/${templateId}/${exerciseId}`,
        ...options
      })
    )
  }
}
