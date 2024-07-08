export interface ClinicEntity {}

export interface clinicsQueryDtoIn {
  offset?: number
  limit?: number
  searchValue?: string
}

export interface IGetClinicsWhichAlreadyRegisteredForThePhysio {
  id?: number
  registeredDate?: string
  name?: string
  licenseId?: string
  phoneNumber?: string
  address?: string
  state?: string
  clinicType?: string
  registeredBefore?: boolean
  physioClinicId?: number
}

export interface getClinicsWhichAlreadyRegisteredForThePhysioQueryDtoIn {
  offset?: number
  limit?: number
}

export interface getAllPrivateClinicsQueryDtoIn {
  offset?: number
  limit?: number
  physioId?: number
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
