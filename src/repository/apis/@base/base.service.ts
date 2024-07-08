import { onRequest, onResponse, onResponseError } from '@core/interceptor'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  timeout: 300000
})

axiosInstance.interceptors.request.use(onRequest)
axiosInstance.interceptors.response.use(onResponse, onResponseError)

export default axiosInstance
