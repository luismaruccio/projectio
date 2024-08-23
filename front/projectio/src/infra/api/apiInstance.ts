import axios, { AxiosInstance } from 'axios'

export class Api {
  axiosInstance(): AxiosInstance {
    const axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001',
      responseType: 'json',
    })
    return axiosInstance
  }
}
