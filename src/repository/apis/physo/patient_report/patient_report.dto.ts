import type {
  GetSessionExercisePatientExercise,
  getSessionsPatientExercise,
  ShareAverageBaseDate
} from '../../../models'

import type { GetSessionExercisePatientPatientDoneExercise } from '../../../models'

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

export interface getSessionsPatientWithIdQueryDtoIn {
  date?: string
}

export interface ShareSessionsPatientWithIdDtoOut {
  exerciseTitle?: string
  goldMeasureId?: number
  goldMeasureDescription?: string
  goldMeasureMin?: number
  goldMeasureMax?: number
  result?: any
}
