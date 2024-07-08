import type { PlanDescription } from '../../../models'

export interface PlanDtoOut {
  id?: number
  name?: string
  productId?: number
  duration?: number
  description?: PlanDescription
  type?: string
  price?: string
}

export interface ICityDtoOut {
  id?: number
  name?: string
  countryName?: string
}

export interface getAllPublicClinicsQueryDtoIn {
  offset?: number
  limit?: number
}

export interface ClinicDtoOut {
  id?: number
  registeredDate?: string
  name?: string
  licenseId?: string
  phoneNumber?: string
  address?: string
  state?: string
  clinicType?: string
  registeredBefore?: boolean
}
