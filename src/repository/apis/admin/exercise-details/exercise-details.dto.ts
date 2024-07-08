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

export interface ExerciseDetailsDtoIn {
  id?: number
  title?: string
  title__like?: string
  description?: string
  description__like?: string
  timeout?: number
  limit?: number
  offset?: number
}

export interface ExerciseDetailsDtoOut {
  id?: number
  title?: string
  description?: string
  timeout?: number
}

export interface ExerciseDetailsEntity {}
