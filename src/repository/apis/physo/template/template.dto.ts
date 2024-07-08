import type { IGetExercisesInTemplateDtoOut } from '../../../models'

export interface getAllQueryDtoIn {
  offset?: number
  limit?: number
  name__like?: string
}

export interface IGetTemplateWithExercisesDtoOut {
  id?: number
  name?: string
  exercises?: IGetExercisesInTemplateDtoOut[]
}
