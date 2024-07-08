import type { IGetClass } from '../../../models'

import type { IGetClassesInClassCategoriesClasses } from '../../../models'

import type { IGetExerciseDtoDaily, IGetSelectedClassByPatient } from '../../../models'

import type {
  IExerciseDtoOut_GeneralClassificationType,
  IGetExerciseDtoBodyRegion
} from '../../../models'

import type { IExerciseDtoOut_BodyRegionsType } from '../../../models'

import type { IExerciseDtoOut_DailyType } from '../../../models'

import type { IExerciseDtoOut_BodySelectionType } from '../../../models'

import type { IExerciseDtoOut_DailySelectionType } from '../../../models'

export interface IGetDailyNoteDtoOut {
  id?: number
  insertedAt?: string
  subjective?: any
  evaluationType?: string
  whoInserted?: string
}

export interface getMyPatientsQueryDtoIn {
  offset?: number
  limit?: number
  firstname__like?: string
  lastname__like?: string
  username__like?: string
  email__like?: string
}

export interface IGetMyPatients {
  id?: number
  PlanType?: string
  firstname?: string
  lastname?: string
  username?: string
  email?: string
  exerciseCount?: number
  classCount?: number
  planExpireDate?: string
}

export interface GetPatientDtoOut {
  id?: number
  firstname?: string
  lastname?: string
  email?: string
  username?: string
}

export interface IGetClassesInClassCategories {
  subCategories?: IGetClass[]
  id?: number
  name?: string
  classes?: IGetClassesInClassCategoriesClasses[]
  selectedClassByPatient?: IGetSelectedClassByPatient
  selectedByPhyosio?: boolean
}

export interface IGetEvaluationsPatient {
  ppId?: number
  ppsId?: number
  prescription?: string
  start?: string
  end?: string
  type?: string
  physioId?: number
  physioFirstname?: string
  physioLastname?: string
  physioUsername?: string
}

export interface IGetPatientPlans {
  planId?: number
  planName?: string
  planType?: string
  patientPlanId?: number
  patientPlanName?: string
  patientPlanDate?: string
  data?: any
}

export interface IGetPatientPlan {
  planId?: number
  planName?: string
  planType?: string
  patientPlanId?: number
  patientPlanName?: string
  patientPlanDate?: string
  patientFirstName?: string
  patientLastName?: string
  data?: any
  platformResponse?: string
}

export interface IGetExerciseDtoOut {
  daily_task?: IGetExerciseDtoDaily
  body_regions?: IGetExerciseDtoBodyRegion
}

export interface getExerciseForPatientQueryDtoIn {
  offset?: number
  limit?: number
}

export interface IGetExerciseForPatient {
  active?: boolean
  exerciseId?: number
  ppsId?: number
  scheduleEndDate?: string
  scheduleStartDate?: string
  exerciseStartDate?: string
  exerciseEndDate?: string
  pickDays?: string
  exerciseRepetition?: number
  exerciseSet?: number
  title?: string
  description?: string
  categoryImageIndex?: number
}

export interface ClassesForPatientDtoOut {
  classCategoryId?: number
  ppsId?: number
  active?: boolean
  startDate?: string
  endDate?: string
  classId?: number
  className?: string
  physioId?: number
  exerciseSet?: number
  physioUsername?: string
  exercisesNames?: string[]
  exercisesCount?: number
}

export interface ChangePrescriptionMessageDtoOut {
  ppsId?: number
  prescription?: string
}

export interface SharePatientPlanScheduleCommentDtoOut {
  commentId?: number
  insertAt?: string
  message?: string
  physioUserId?: number
  physioUsername?: string
  patientUserId?: number
  patientUsername?: string
  parentId?: number
}

export interface getPatientPlanScheduleCommentQueryDtoIn {
  offset?: number
  limit?: number
}

export interface PatientResDto {
  id?: number
  fname?: string
  lname?: string
  user?: string
  email?: string
  ppsId?: number
}

export interface PrescriptionCommentDtoOut {
  prescription?: string
}

export interface getArchivedPatientQueryDtoIn {
  offset?: number
  limit?: number
}

export interface IPatientPlanSchedulesIds {
  ppsId?: number
  scheduleDate?: string
}

export interface searchExerciseQueryDtoIn {
  offset?: number
  limit?: number
  keyWord?: string
}

export interface IExerciseDtoOut {
  id?: number
  title?: string
  generalClassification?: IExerciseDtoOut_GeneralClassificationType[]
  bodyRegionsType?: IExerciseDtoOut_BodyRegionsType[]
  dailyType?: IExerciseDtoOut_DailyType[]
  bodySelection?: IExerciseDtoOut_BodySelectionType[]
  dailySelectionType?: IExerciseDtoOut_DailySelectionType[]
}
