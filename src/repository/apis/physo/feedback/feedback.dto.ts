export interface getMyFeedbacksQueryDtoIn {
  offset?: number
  limit?: number
}

export interface IGetFeedbacksResponseDto {
  insertAt?: string
  feedbackId?: number
  subject?: string
  message?: string
  physioId?: number
  replyAt?: string
  replyMessage?: string
  urls?: string[]
}

export interface ISendFeedbackRequestPhysioDto {
  subject?: string
  msg?: string
  rate?: number
}
