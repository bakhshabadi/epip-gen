import type { PhysioItemClinic } from '../../../models'

export interface IClinicPatch {
  name?: string
  logoUrl?: string
  address?: string
  licenseId?: string
  phoneNumber?: string
}

export interface getPhysioClinicQueryDtoIn {
  offset?: number
  limit?: number
}

export interface PhysioItem {
  id?: number
  firstname?: string
  lastname?: string
  email?: string
  username?: string
  clinics?: PhysioItemClinic[]
}

export interface getPatientClinicQueryDtoIn {
  offset?: number
  limit?: number
}

export interface PatientItem {
  id?: number
  firstname?: string
  lastname?: string
  email?: string
  username?: string
  clinic?: PhysioItemClinic
}
