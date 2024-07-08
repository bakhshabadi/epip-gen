import { AxiosError, type AxiosRequestConfig } from 'axios'
import axiosInstance from '../../@base/base.service'

import to from 'await-to-js'
import type { SpeechController_speech } from '../../../models'
import type { IResponse } from '../../@base/base.dto'
import type { IResSpeech } from './speech.dto'

export class SpeechServiceApi {
  public static async speech(
    data: SpeechController_speech | FormData,
    options?: AxiosRequestConfig
  ): Promise<[AxiosError | null, undefined | IResponse<IResSpeech>]> {
    return await to(
      axiosInstance({
        method: 'POST',
        url: `/api/patient/speech`,
        headers: { 'Content-Type': 'multipart/form-data' },
        data: data,
        ...options
      })
    )
  }
}
