import type { GetSessionExercisePatientExercise, getSessionsPatientExercise } from '../../../models'

import type {
  GetSessionExercisePatientPatientDoneExercise,
  IGetExercise,
  ShareAverageBaseDate
} from '../../../models'

export interface IGetSessionsPatient {
  insertedAt?: string
  peId?: number
  exercise?: getSessionsPatientExercise
}

export interface IResGetSessionsExercisePatient {
  peId?: number
  exercise?: GetSessionExercisePatientExercise
  patientDoneExercises?: GetSessionExercisePatientPatientDoneExercise[]
}

export interface ShareSessionsPatientWithIdDtoOut {
  exerciseTitle?: string
  goldMeasureId?: number
  goldMeasureDescription?: string
  goldMeasureMin?: number
  goldMeasureMax?: number
  result?: any
}

export interface ShareIGetOverallReport {
  id?: number
  startDate?: string
  endDate?: string
  pickDays?: string
  exerciseRepetition?: number
  exerciseSet?: number
  exerciseId?: number
  exerciseTitle?: string
  patientDoneExercisesId?: number
}

export interface ShareOverallReportByExerciseIdDtoOut {
  exerciseTitle?: string
  goldMeasureId?: number
  goldMeasureDescription?: string
  goldMeasureMin?: number
  goldMeasureMax?: number
  patientDoneExercises?: ShareAverageBaseDate
}

export interface IGetPatientWithExercise {
  id?: number
  exerciseId?: number
  exerciseRepetition?: number
  exerciseSet?: number
  exercise?: IGetExercise
  userHeight?: number
}

export interface getAllQueryDtoIn {
  offset?: number
  limit?: number
  id?: number
  title?: string
  title__like?: string
  description?: string
  description__like?: string
  timeout?: number
}

export interface ExerciseDtoOut {
  id?: number
  title?: string
  description?: string
  timeout?: number
}

export interface ExerciseDtoIn {
  offset?: number
  limit?: number
  id?: number
  title?: string
  title__like?: string
  description?: string
  description__like?: string
  timeout?: number
}
