export interface getAllQueryDtoIn {
  offset?: number
  limit?: number
  id?: number
  name?: string
  logoUrl?: string
  address?: string
  licenseId?: string
  phoneNumber?: string
  listOfPhysio?: undefined
}

export interface ClinicEntity {}

export interface getPhysioClinicQueryDtoIn {
  offset?: number
  limit?: number
}

export interface getPatientClinicQueryDtoIn {
  offset?: number
  limit?: number
}
