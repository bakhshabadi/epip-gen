import type {
  IGetFeedbacksPhysoResponseDto_FeedbackType,
  IGetFeedbacksSystemResponseDto_FeedbackType
} from '../../../models'

export interface IGetPhysicalTherapists {
  ppsId?: number
  physoId?: number
  physoFirstname?: string
  physoLastname?: string
  physoUsername?: string
  scheduleTime?: string
  scheduleType?: string
  countOfUnreadMessages?: number
}

export interface getMyFeedbacksSystemQueryDtoIn {
  offset?: number
  limit?: number
}

export interface IGetFeedbacksSystemResponseDto {
  feedbackId?: number
  senderId?: number
  type?: IGetFeedbacksSystemResponseDto_FeedbackType
  subject?: string
  msg?: string
  rate?: number
  insertDate?: string
  replyAt?: string
  replyUserBaseId?: number
  replyFirstname?: string
  replyLastname?: string
  replyUsername?: string
  replyMessage?: string
  urls?: any
}

export interface getMyFeedbacksPhysioQueryDtoIn {
  offset?: number
  limit?: number
}

export interface IGetFeedbacksPhysoResponseDto {
  feedbackId?: number
  senderId?: number
  type?: IGetFeedbacksPhysoResponseDto_FeedbackType
  subject?: string
  msg?: string
  rate?: number
  insertDate?: string
  physoId?: number
  physoFirstName?: string
  physoLastName?: string
  replyAt?: string
  replyUserBaseId?: number
  replyFirstname?: string
  replyLastname?: string
  replyUsername?: string
  replyMessage?: string
  urls?: any
}

export interface IResSendFeedback {}
