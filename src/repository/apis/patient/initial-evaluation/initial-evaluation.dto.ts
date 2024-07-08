import type {
  IGetExercise,
  InitialEvaluationExercisesDtoOut_CountingAlgorithmType
} from '../../../models'

export interface InitialEvaluationExercisesDtoOut {
  exerciseId?: number
  exerciseName?: string
  exerciseCountingAlgorithm?: InitialEvaluationExercisesDtoOut_CountingAlgorithmType
}

export interface IGetPatientWithExercise {
  id?: number
  exerciseId?: number
  exerciseRepetition?: number
  exerciseSet?: number
  exercise?: IGetExercise
  userHeight?: number
}
