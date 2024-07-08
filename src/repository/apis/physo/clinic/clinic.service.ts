import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { PhysoRequestToJoinClinicsDtoIn } from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  ClinicDtoOut,
  ClinicEntity,
  clinicsQueryDtoIn,
  getAllPrivateClinicsQueryDtoIn,
  getClinicsWhichAlreadyRegisteredForThePhysioQueryDtoIn,
  IGetClinicsWhichAlreadyRegisteredForThePhysio
} from './clinic.dto'

export class ClinicServiceApi {
  public static async selectClinic(
    id: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ClinicEntity>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/physo/clinic/select-clinic/${id}`,
        ...options
      })
    )
  }
  public static async clinics(
    queries: Partial<clinicsQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<
    [AxiosError | null, undefined | IResponseAll<IGetClinicsWhichAlreadyRegisteredForThePhysio>]
  > {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/clinic/clinics`,
        params: queries,
        ...options
      })
    )
  }
  public static async getClinicsWhichAlreadyRegisteredForThePhysio(
    queries: Partial<getClinicsWhichAlreadyRegisteredForThePhysioQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<
    [AxiosError | null, undefined | IResponseAll<IGetClinicsWhichAlreadyRegisteredForThePhysio>]
  > {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/clinic/get-clinics-which-already-registered-for-the-physio`,
        params: queries,
        ...options
      })
    )
  }
  public static async requestToJoinTheClinics(
    data: PhysoRequestToJoinClinicsDtoIn,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/physo/clinic/request-to-join-the-clinics`,
        data: data,
        ...options
      })
    )
  }
  public static async delete(
    physioClinicId: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/physo/clinic/remove-physio-clinic/${physioClinicId}`,
        ...options
      })
    )
  }
  public static async getAllPrivateClinics(
    queries: Partial<getAllPrivateClinicsQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<ClinicDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/clinic/get-all-private-clinics`,
        params: queries,
        ...options
      })
    )
  }
}
