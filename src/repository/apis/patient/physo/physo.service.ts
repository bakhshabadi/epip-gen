import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { AddPrescriptionCommentDtoIn } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  getPatientPlanScheduleCommentQueryDtoIn,
  GetPrescriptionDtoOut,
  IResAddPatientPlanScheduleComment,
  SharePatientPlanScheduleCommentDtoOut
} from './physo.dto'

export class PhysoServiceApi {
  public static async addPatientPlanScheduleComment(
    data: AddPrescriptionCommentDtoIn,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IResAddPatientPlanScheduleComment>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/patient/physo/add-patient-plan-schedule-comment`,
        data: data,
        ...options
      })
    )
  }
  public static async getPatientPlanScheduleComment(
    patientPlanScheduleId: number,
    queries: Partial<getPatientPlanScheduleCommentQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<SharePatientPlanScheduleCommentDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/physo/${patientPlanScheduleId}/get-patient-plan-schedule-comment`,
        params: queries,
        ...options
      })
    )
  }
  public static async getPrescription(
    patientPlanScheduleId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<GetPrescriptionDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/patient/physo/${patientPlanScheduleId}/get-prescription`,
        ...options
      })
    )
  }
}
