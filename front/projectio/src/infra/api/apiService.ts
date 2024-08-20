import { AxiosInstance } from 'axios'
import { Api } from './apiInstance'

export class ApiService {
  private apiInstance: AxiosInstance

  constructor() {
    this.apiInstance = new Api().axiosInstance()
  }

  async get<T>(endpoint: string): Promise<T> {
    return await this.apiInstance.get(endpoint)
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    console.log(data)
    return await this.apiInstance.post(endpoint, data)
  }
}
