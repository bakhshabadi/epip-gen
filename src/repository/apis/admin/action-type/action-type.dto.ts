export interface getAllQueryDtoIn {
  offset?: number
  limit?: number
  id?: number
  title?: string
  title__like?: string
  type?: string
  pointAId?: number
  pointAId__In?: string
  pointBId?: number
  pointBId__In?: string
  pointCId?: number
  pointCId__In?: string
}

export interface ActionTypeDtoOut {
  id?: number
  title?: string
  description?: string
}
