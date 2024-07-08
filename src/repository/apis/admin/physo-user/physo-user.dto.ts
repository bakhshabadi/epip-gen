export interface IGetAllPhysoUsers {
  physioClinicId?: number
  id?: number
  startSchedules?: string
  endSchedules?: string
  firstname?: string
  lastname?: string
  clinicType?: string
}

export interface getAllQueryDtoIn {
  offset?: number
  limit?: number
}

export interface IGetAllPhysioUserDetails {
  id?: number
  startSchedules?: string
  endSchedules?: string
  firstname?: string
  lastname?: string
  userName?: string
  password?: string
  email?: string
  activedAt?: string
}

export interface PhysoUserPostDto {
  firstname?: string
  lastname?: string
  username?: string
  email?: string
}

export interface PhysoUserDtoIn {
  id?: number
  firstname?: string
  firstname__like?: string
  lastname?: string
  lastname__like?: string
  username?: string
  username__like?: string
  email?: string
  email__like?: string
}

export interface PhysoUserEntity {}

export interface IGetFreeSchedules {
  id?: number
  insertedAt?: string
  deletedAt?: string
  title?: string
  start?: string
  end?: string
  type?: string
  physoId?: number
  statusSchedule?: boolean
}
