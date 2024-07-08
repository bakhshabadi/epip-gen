import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type {
  AddPrescriptionCommentDtoIn,
  BodySetDailyByPhysio,
  BodySetPrescription,
  ChangePrescriptionMessageDtoIn,
  ClassPatientReqDto,
  ExercisePatientReqDto,
  ExercisesPatientReqDto,
  InactiveExerciseForPatientDtoIn,
  SetClassPatientReqDto
} from '../../../models'
import type { IResponse, IResponseAll } from '../../@base/base.dto'
import type {
  ChangePrescriptionMessageDtoOut,
  ClassesForPatientDtoOut,
  getArchivedPatientQueryDtoIn,
  getExerciseForPatientQueryDtoIn,
  getMyPatientsQueryDtoIn,
  GetPatientDtoOut,
  getPatientPlanScheduleCommentQueryDtoIn,
  IExerciseDtoOut,
  IGetClassesInClassCategories,
  IGetDailyNoteDtoOut,
  IGetEvaluationsPatient,
  IGetExerciseDtoOut,
  IGetExerciseForPatient,
  IGetMyPatients,
  IGetPatientPlan,
  IGetPatientPlans,
  IPatientPlanSchedulesIds,
  PatientResDto,
  PrescriptionCommentDtoOut,
  searchExerciseQueryDtoIn,
  SharePatientPlanScheduleCommentDtoOut
} from './patient.dto'

export class PatientServiceApi {
  public static async setPrescriptionForAll(
    data: BodySetPrescription,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/physo/patient/set-prescription-for-all-not-active`,
        data: data,
        ...options
      })
    )
  }
  public static async setDailyNoteByPhysio(
    data: BodySetDailyByPhysio,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/physo/patient/set-daily-note-by-physio`,
        data: data,
        ...options
      })
    )
  }
  public static async getDailyNoteByPhysio(
    ppsid: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetDailyNoteDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/patient/get-daily-note-by-physio/${ppsid}`,
        ...options
      })
    )
  }
  public static async getMyPatients(
    queries: Partial<getMyPatientsQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetMyPatients>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/patient/get-my-patients`,
        params: queries,
        ...options
      })
    )
  }
  public static async getMyPatientsWithId(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<GetPatientDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/patient/get-my-patients/${id}`,
        ...options
      })
    )
  }
  public static async getClassesInClassCategories(
    patientId: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IGetClassesInClassCategories>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/patient/get-classes-in-class-categories/${patientId}`,
        ...options
      })
    )
  }
  public static async getPatientsEvaluation(
    id: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetEvaluationsPatient>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/patient/${id}/evaluations`,
        ...options
      })
    )
  }
  public static async getPatientPlans(
    patientId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetPatientPlans>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/patient/${patientId}/patient-plans`,
        ...options
      })
    )
  }
  public static async getPatientPlan(
    patientId: number,
    patientPlanId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IGetPatientPlan>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/patient/${patientId}/patient-plan/${patientPlanId}`,
        ...options
      })
    )
  }
  public static async getAllExercises(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IGetExerciseDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/patient/get-all-exercises`,
        ...options
      })
    )
  }
  public static async getExerciseForPatient(
    patientId: number,
    queries: Partial<getExerciseForPatientQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetExerciseForPatient>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/patient/get-exercises-for-patient/${patientId}`,
        params: queries,
        ...options
      })
    )
  }
  public static async getClassesForPatient(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<ClassesForPatientDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/patient/get-classes-for-patient/${id}`,
        ...options
      })
    )
  }
  public static async setExerciseForPatient(
    data: ExercisePatientReqDto,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/physo/patient/set-exercise-for-patient`,
        data: data,
        ...options
      })
    )
  }
  public static async setExercisesForPatient(
    data: ExercisesPatientReqDto,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/physo/patient/set-exercises-for-patient`,
        data: data,
        ...options
      })
    )
  }
  public static async inactiveExerciseForPatient(
    data: InactiveExerciseForPatientDtoIn,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/physo/patient/inactive-exercise-for-patient`,
        data: data,
        ...options
      })
    )
  }
  public static async activeExerciseForPatient(
    data: InactiveExerciseForPatientDtoIn,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/physo/patient/active-exercise-for-patient`,
        data: data,
        ...options
      })
    )
  }
  public static async deleteExerciseForPatient(
    data: InactiveExerciseForPatientDtoIn,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/physo/patient/delete-exercise-for-patient`,
        data: data,
        ...options
      })
    )
  }
  public static async setClassForPatient(
    data: SetClassPatientReqDto,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/physo/patient/set-class-category-for-patient`,
        data: data,
        ...options
      })
    )
  }
  public static async inactiveClassForPatient(
    data: ClassPatientReqDto,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/physo/patient/inactive-class-category-for-patient`,
        data: data,
        ...options
      })
    )
  }
  public static async deleteClassForPatient(
    data: ClassPatientReqDto,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/physo/patient/delete-class-category-for-patient`,
        data: data,
        ...options
      })
    )
  }
  public static async changeTextOfPrescription(
    data: ChangePrescriptionMessageDtoIn,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<ChangePrescriptionMessageDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/physo/patient/change-text-of-prescription`,
        data: data,
        ...options
      })
    )
  }
  public static async addPatientPlanScheduleComment(
    data: AddPrescriptionCommentDtoIn,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<SharePatientPlanScheduleCommentDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/physo/patient/add-patient-plan-schedule-comment`,
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
        url: `/api/physo/patient/${patientPlanScheduleId}/get-patient-plan-schedule-comment`,
        params: queries,
        ...options
      })
    )
  }
  public static async getPendingMyPatients(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<PatientResDto>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/patient/get-pending-my-patients`,
        ...options
      })
    )
  }
  public static async getVisitedMyPatients(
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<PatientResDto>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/patient/get-visited-my-patients`,
        ...options
      })
    )
  }
  public static async getPrescriptionPatient(
    patientId: number,
    patientPlanScheduleId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<PrescriptionCommentDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/patient/get-prescription-patient/${patientId}/${patientPlanScheduleId}`,
        ...options
      })
    )
  }
  public static async archivePatient(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'PATCH',
        url: `/api/physo/patient/${id}/archive`,
        ...options
      })
    )
  }
  public static async unarchivePatient(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<void>]> {
    return await to(
      axiosInstance({
        method: 'DELETE',
        url: `/api/physo/patient/${id}/unarchive`,
        ...options
      })
    )
  }
  public static async getArchivedPatient(
    queries: Partial<getArchivedPatientQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IGetMyPatients>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/patient/archived-patient`,
        params: queries,
        ...options
      })
    )
  }
  public static async getPatientPlanSchedulesFromPatientId(
    patientId: number,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IPatientPlanSchedulesIds>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/patient/get-patient-plan-schedules-from-patient-id/${patientId}`,
        ...options
      })
    )
  }
  public static async searchExercise(
    queries: Partial<searchExerciseQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponseAll<IExerciseDtoOut>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/physo/patient/search-exercise`,
        params: queries,
        ...options
      })
    )
  }
}
