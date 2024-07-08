export interface getAllQueryDtoIn {
  offset?: number
  limit?: number
  title__like?: string
  physoId?: number
  physoId__in?: number
  start__between?: string
  end__between?: string
  scheduleIds__in?: string
  templateIds__in?: string
  classCategoryId__in?: string
}

export interface ClassEntity {}
