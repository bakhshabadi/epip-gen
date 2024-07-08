import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { IResponse } from '../../@base/base.dto'
import type { getAllInvoicesQueryDtoIn, IGetInvoiceDTO } from './invoice.dto'

export class InvoiceServiceApi {
  public static async getAllInvoices(
    queries: Partial<getAllInvoicesQueryDtoIn>,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IGetInvoiceDTO>]> {
    return await to(
      axiosInstance({
        method: 'GET',
        url: `/api/admin/invoice/get-all-invoices`,
        params: queries,
        ...options
      })
    )
  }
}
