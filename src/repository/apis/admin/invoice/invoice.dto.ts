import type { invoice } from '../../../models'

export interface getAllInvoicesQueryDtoIn {
  limit?: number
  offset?: number
}

export interface IGetInvoiceDTO {
  username?: string
  patientPlanName?: string
  purchaseDate?: string
  invoices?: invoice[]
}
