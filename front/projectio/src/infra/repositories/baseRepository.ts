import { ApiService } from '../api/apiService'

export abstract class BaseRepository {
  protected apiService: ApiService

  constructor() {
    this.apiService = new ApiService()
  }
}
