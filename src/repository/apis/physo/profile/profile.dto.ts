import type { IDtoUpdateProfileOut__gender } from '../../../models'

import type { IDtoLicenseOut } from '../../../models'

export interface IDtoUpdateProfileOut {
  physoId?: number
  firstName?: string
  lastName?: string
  email?: string
  gender?: IDtoUpdateProfileOut__gender
  birthday?: string
  address?: string
  countryId?: number
  state?: string
  cityId?: number
  phoneNumber?: string
  licenses?: IDtoLicenseOut[]
}

export interface IDtoCountry {
  id?: number
  name?: string
}

export interface IDtoUpdateProfileEmployer {
  employerName?: string
  employerIdNumber?: string
  employerPhoneNumber?: string
  employerCountryId?: number
  employerState?: string
  employerCityId?: number
  employerZipCode?: string
}
