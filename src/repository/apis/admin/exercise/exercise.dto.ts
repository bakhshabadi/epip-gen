export interface getAllQueryDtoIn {
  id?: number
  title?: string
  title__like?: string
  description?: string
  description__like?: string
  timeout?: number
  limit?: number
  offset?: number
}

export interface ExerciseDtoIn {
  offset?: number
  limit?: number
  id?: number
  title?: string
  title__like?: string
  description?: string
  description__like?: string
  timeout?: number
}

export interface ExerciseDtoOut {
  id?: number
  title?: string
  description?: string
  timeout?: number
}

export interface ExerciseEntity {}
