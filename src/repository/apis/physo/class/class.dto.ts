import type { ISchedule, PhysoClassDetailsTemplates } from '../../../models'

import type { PhysoClassUsersDtoOut } from '../../../models'

export interface getPhysoClassesQueryDtoIn {
  selectedDate?: string
  offset?: number
  limit?: number
}

export interface PhysioClassesDtoOut {
  classId?: number
  classTitle?: string
  classStart?: string
  classEnd?: string
  classCategoryName?: string
}

export interface getPhysioSessionClassesQueryDtoIn {
  selectedDate?: string
  offset?: number
  limit?: number
}

export interface IGetSessionClasses {
  classId?: number
  classTitle?: string
  schedule?: ISchedule[]
  classCategoriesName?: string
}

export interface PhysoClassDetailsDtoOut {
  patientWithClassCategoryId?: number
  classTitle?: string
  classDescription?: string
  classStart?: string
  classEnd?: string
  templates?: PhysoClassDetailsTemplates[]
  patients?: PhysoClassUsersDtoOut[]
}
