import type { GetEvaluationsWithDetails, IExercisePart } from '../../../models'

import type { IPhysoPart } from '../../../models'

import type { ExercisePart, IGetExercisesResult, UserEvaluationSchedule } from '../../../models'

import type { DoneExercisePart, MyClassCategories } from '../../../models'

export interface getEvaluationsWithDetailsQueryDtoIn {
  offset?: number
  limit?: number
  scheduleType?: string
}

export enum IGetEvaluationsWithDetailsScheduleTypeType {
  OFFLINE = 'offline',
  ONLINE = 'online',
  CLASS = 'class',
  IN_PERSON = 'in_person',
  AI = 'ai',
  SYSTEM = 'system'
}
export interface IGetEvaluationsWithDetails {
  ppsId?: number
  physioId?: number
  scheduleStartDate?: string
  scheduleType?: IGetEvaluationsWithDetailsScheduleTypeType
  physioFirstname?: string
  physioLastname?: string
  physioUsername?: string
  evaluations?: GetEvaluationsWithDetails[]
}

export interface getExercisesQueryDtoIn {
  limit?: number
  offset?: number
  selectedDate?: string
  name?: string
}

export interface IGetExercisesDTO {
  id?: number
  ppsId?: number
  exercise?: IExercisePart
  physo?: IPhysoPart
  result?: IGetExercisesResult[]
}

export interface getEvaluationsQueryDtoIn {
  title?: string
  title__like?: string
  limit?: number
  offset?: number
}

export interface UserEvaluationDtoOut {
  id?: number
  title?: string
  data?: any
  schedules?: UserEvaluationSchedule[]
  insertedAt?: string
  platformResponse?: string
  initialEvaluationVersion?: number
}

export interface getEvaluationsSummaryQueryDtoIn {
  offset?: number
  limit?: number
}

export interface getEvaluationsSummaryOfflineQueryDtoIn {
  offset?: number
  limit?: number
}

export interface UserEvaluationSummeryDtoOut {
  prescription?: string
  physoId?: number
  physoName?: string
  startDate?: string
}

export interface getEvaluationsSummaryOnlineQueryDtoIn {
  offset?: number
  limit?: number
}

export interface IGetExerciseDonePatientDTO {
  id?: number
  exercise?: ExercisePart
  doneExercise?: DoneExercisePart[]
}

export interface getExerciseDonePatientByIdQueryDtoIn {
  from?: string
  to?: string
}

export interface ClassCategoryEntity {}

export interface IResGetMyClassCategories {
  id?: number
  ppsId?: number
  name?: string
  selectedClassId?: number
  subClassCategories?: MyClassCategories[]
}

export interface IGetExerciseMessages {
  message?: string
  exerciseId?: number
  actionTypeId?: any
}

export interface IResGetEvaluationFiles {
  fileName?: string
}
