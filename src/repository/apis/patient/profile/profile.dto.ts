import type {
  IDtoPatientPlanOut_PlanType,
  IDtoUpdatePatientProfileOut__gender
} from '../../../models'

export interface IDtoUpdatePatientProfileOut {
  firstname?: string
  lastname?: string
  birthday?: string
  gender?: IDtoUpdatePatientProfileOut__gender
  userHeight?: number
  userWeight?: number
  occupation?: string
  employerName?: string
  insuranceProvider?: string
  insuranceId?: string
  homeCellPhoneNumber?: string
  email?: string
  countryId?: number
  state?: string
  cityId?: number
  zipCode?: string
}

export interface IDtoCountry {
  id?: number
  name?: string
}

export interface getPatientPlansQueryDtoIn {
  offset?: number
  limit?: number
}

export interface IDtoPatientPlanOut {
  planType?: IDtoPatientPlanOut_PlanType
  startDate?: string
  expireDate?: string
}
