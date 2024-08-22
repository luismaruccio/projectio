import { ActivityRepository } from '../../infra/repositories/activityRepository'
import { createActivityDto } from '../dtos/activities/createActivityDto'

export class ActivityService {
  async create(data: createActivityDto) {
    const repository = new ActivityRepository()

    try {
      repository.create(data)
    } catch (error) {
      console.error('Erro ao criar projeto:', error)
    }
  }
}
