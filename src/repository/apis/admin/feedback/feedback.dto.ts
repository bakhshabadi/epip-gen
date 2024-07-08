export interface getFeedbacksQueryDtoIn {
  offset?: number
  limit?: number
}

export interface IGetFeedbacksResDTO {
  id?: number
  physoId?: number
  physoFirstname?: string
  physoLastname?: string
  physoUsername?: string
  physoEmail?: string
  senderRole?: string
  senderBaseUserId?: number
  senderBaseUserFirstname?: string
  senderBaseUserLastname?: string
  senderBaseUserUsername?: string
  senderBaseUserEmail?: string
  type?: string
  subject?: string
  message?: string
  rate?: number
  urls?: string[]
  replyMessage?: string
}

export interface ISendReplyForFeedbackReqDTO {
  msg?: string
}
