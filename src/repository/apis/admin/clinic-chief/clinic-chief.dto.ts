export interface getAllQueryDtoIn {
  id?: number
  firstname?: string
  lastname?: string
  username?: string
  email?: string
  password?: string
}

export interface ClinicChiefUserDtoOut {
  id?: number
  firstname?: string
  lastname?: string
  username?: string
  email?: string
  clinics?: string[]
}
