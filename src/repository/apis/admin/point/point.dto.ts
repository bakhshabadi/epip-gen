export interface getAllQueryDtoIn {
  id?: number
  title?: string
  title__like?: string
  description?: string
  description__like?: string
}

export interface PointDtoOut {
  id?: number
  title?: string
  description?: string
}
