import axios, { AxiosInstance } from 'axios'

export class Api {
  axiosInstance(): AxiosInstance {
    const axiosInstance = axios.create({
      baseURL: 'http://localhost:3001',
      responseType: 'json',
    })
    return axiosInstance
  }
}
