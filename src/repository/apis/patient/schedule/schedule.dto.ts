import type { IGetPlanStatusForPatientStatus } from '../../../models'

export interface getAllQueryDtoIn {
  offset?: number
  limit?: number
  start__gte?: string
  end__lte?: string
  type?: string
}

export interface ScheduleReqDto {
  offset?: number
  limit?: number
  start__gte?: string
  end__lte?: string
  type?: string
}

export interface IGetPlanStatusForPatientDtoOut {
  offlineSchedule?: IGetPlanStatusForPatientStatus
  onlineSchedule?: IGetPlanStatusForPatientStatus
  classSchedule?: IGetPlanStatusForPatientStatus
  inpersonSchedule?: IGetPlanStatusForPatientStatus
}

export interface rangeSchedulesQueryDtoIn {
  start_date?: string
  end_date?: string
  onlineOnly?: boolean
  typeOfReservation?: string
  zipCode?: number
}

export interface IRangeSchedules {
  id?: number
  title?: string
  start?: string
  end?: string
  type?: string
  physioId?: number
  physioUsername?: string
  physioFirstname?: string
  physioLastname?: string
  zipCode?: string
}
