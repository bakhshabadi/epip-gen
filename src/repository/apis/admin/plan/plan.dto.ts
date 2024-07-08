import type { PlanDescription } from '../../../models'

export interface getAllQueryDtoIn {
  id?: number
  name?: string
  name__like?: string
}

export interface PlanDtoOut {
  id?: number
  name?: string
  productId?: number
  duration?: number
  description?: PlanDescription
  type?: string
  price?: string
}

export interface PlanEntity {}
