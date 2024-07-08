import type { GetEvaluationsDetails } from '../../../models'

export interface IGetSummery {
  physioEvaluationsCount?: number
  todayPhysioEvaluationsCount?: number
  physioPatientsCount?: number
  onlineEvaluationCount?: number
  todayOnlineEvaluationCount?: number
  classCount?: number
  todayClassCount?: number
  patientIds?: string[]
}

export interface IGetSummaryOfPatientsExercises {
  patientId?: number
  patientFirstname?: string
  patientLastname?: string
  patientUsername?: string
  exerciseId?: number
  planExpireDate?: number
}

export interface getTodayOrAllDaysEvaluationsQueryDtoIn {
  selectedDate?: string
  offset?: number
  limit?: number
  scheduleType?: string
}

export interface IGetEvaluations {
  ppsId?: number
  prescription?: string
  start?: string
  end?: string
  type?: string
  patientId?: number
  patientFirstname?: string
  patientLastname?: string
  patientUsername?: string
  evaluations?: GetEvaluationsDetails[]
}

export interface getTodayOnlineEvaluationsOrAllDaysQueryDtoIn {
  selectedDate?: string
  offset?: number
  limit?: number
  scheduleType?: string
}

export interface getTodayOnlineEvaluationsOrAllDaysDtoOut {
  ppsId?: number
  prescription?: string
  start?: string
  end?: string
  type?: string
  patientId?: number
  patientFirstname?: string
  patientLastname?: string
  patientUsername?: string
  sessionDuration?: number
  evaluations?: GetEvaluationsDetails[]
}

export interface IGetNotificationPhysoRes {
  isPhysiotherapistHasAlreadySetFreeTime?: boolean
  howManyDaysAreLeftOFPhysiotherapistFreeTime?: number
}
