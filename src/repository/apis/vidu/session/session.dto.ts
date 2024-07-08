import type { IGetUser } from '../../../models'

export interface ICreateSessionResponse {
  patient?: IGetUser
  physio?: IGetUser
  link?: string
}

export interface AnyResponse {}
