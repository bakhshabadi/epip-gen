import type { ITotalEvaluations, PhysioListDetails } from '../../../models'

export interface IGetSummeryRes {
  activeExercise?: number
  totalExercise?: number
  totalClass?: number
  activeClass?: number
  totalOnline?: number
  activeOnline?: number
  totalEvaluations?: ITotalEvaluations[]
  todayClass?: number
  todayExercise?: number
  todayOnline?: number
}

export interface IGetNotificationPatientRes {
  isThereAClassCategoryThatThePatientHasNotAlreadySelected?: boolean
  howManyDaysAreLeftOFPatientPlan?: number
}

export interface getOnlinePhysiosQueryDtoIn {
  offset?: number
  limit?: number
  date?: string
}

export enum PhysioListDtoOutScheduleTypeType {
  OFFLINE = 'offline',
  ONLINE = 'online',
  CLASS = 'class',
  IN_PERSON = 'in_person',
  AI = 'ai',
  SYSTEM = 'system'
}
export interface PhysioListDtoOut {
  ppsId?: number
  physoId?: number
  physoFirstname?: string
  physoLastname?: string
  physoUsername?: string
  scheduleId?: number
  scheduleTime?: string
  sessionDuration?: number
  scheduleType?: PhysioListDtoOutScheduleTypeType
  evaluations?: PhysioListDetails[]
}
