export interface clinicsQueryDtoIn {
  offset?: number
  limit?: number
  searchValue?: string
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
