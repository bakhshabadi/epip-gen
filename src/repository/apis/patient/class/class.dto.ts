import type { ClassDetailsTemplates } from '../../../models'

import type { IPhysio } from '../../../models'

import type { ClassUsersDtoOut } from '../../../models'

export interface getPatientClassesQueryDtoIn {
  limit?: number
  offset?: number
  selectedDate?: string
}

export interface ClassDtoOut {
  title?: string
  id?: number
  start?: string
  end?: string
  physoId?: number
  physoUsername?: string
  physoFirstname?: string
  physoLastname?: string
  endSchedule?: string
}

export interface getPatientSessionClassesQueryDtoIn {
  limit?: number
  offset?: number
  selectedDate?: string
}

export interface PatienSessionClassesByClassIdDtoOut {
  sessionId?: number
  className?: string
  classCategoryName?: string
  sessionStart?: string
  sessionEnd?: string
  sessionDuration?: number
  physoId?: number
  physoFirstname?: string
  physoLastname?: string
  physoUsername?: string
}

export interface ClassDetailsDtoOut {
  patientWithClassCategoryId?: number
  classTitle?: string
  classDescription?: string
  classStart?: string
  classEnd?: string
  templates?: ClassDetailsTemplates[]
  physio?: IPhysio
  patients?: ClassUsersDtoOut[]
}
