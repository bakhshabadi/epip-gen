import type { IPlan } from '../../../models'

export interface getAllQueryDtoIn {
  offset?: number
  limit?: number
}

export interface IGetAllPatientUserDetails {
  patientId?: number
  firstname?: string
  lastname?: string
  username?: string
  password?: string
  email?: string
  plans?: IPlan[]
}

export interface PatientUserDtoOut {
  id?: number
  fname?: number
  lname?: number
  user?: number
  email?: string
}

export interface PatientUserEntity {}
