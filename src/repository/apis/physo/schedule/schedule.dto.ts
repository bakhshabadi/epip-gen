import type { IPatientSchedule_scheduleType } from '../../../models'

export interface IPatientSchedule {
  patientId?: number
  patientFirstname?: string
  patientLastname?: string
  patientEmail?: string
  patientUsername?: string
  scheduleId?: number
  scheduleStart?: string
  scheduleEnd?: string
  scheduleType?: IPatientSchedule_scheduleType
  scheduleTitle?: string
  clinicId?: number
  clinicName?: string
  classId?: number
  classTitle?: string
}

export interface getAllQueryDtoIn {
  offset?: number
  limit?: number
  start__gte?: string
  end__lte?: string
  type?: string
  clinicPhysoId?: number
}

export enum ScheduleResDtoTypeType {
  OFFLINE = 'offline',
  ONLINE = 'online',
  CLASS = 'class',
  IN_PERSON = 'in_person',
  AI = 'ai',
  SYSTEM = 'system'
}
export interface ScheduleResDto {
  id?: number
  title?: string
  start?: string
  end?: string
  type?: ScheduleResDtoTypeType
}

export interface SchedulePostDto {
  start?: string
  end?: string
  type?: string
  physoId?: number
}

export interface ScheduleEntity {}
