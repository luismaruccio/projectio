import { ActivityDetailsResponse } from '../../application/dtos/activities/activityDetailsResponse'
import { createActivityDto } from '../../application/dtos/activities/createActivityDto'
import { CreateActivityRequest } from '../../application/dtos/activities/createActivtyRequest'
import { BaseRepository } from './baseRepository'

export class ActivityRepository extends BaseRepository {
  async create(
    data: createActivityDto
  ): Promise<ActivityDetailsResponse | undefined> {
    const request = new CreateActivityRequest({
      name: data.name,
      project_id: data.project_id,
      start_date: data.start_date.toISOString().split('T')[0],
      end_date: data.end_date.toISOString().split('T')[0],
      completed: data.completed,
    })

    return await this.apiService.post('/activities', request)
  }
}
