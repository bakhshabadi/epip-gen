export interface IResponse<T> {
  status: number
  message: string
  result: T
}

export interface IResponseAll<T> {
  count: number
  status: number
  message: string
  results: T[]
}
