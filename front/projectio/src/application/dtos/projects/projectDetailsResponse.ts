import { ActivityDetailsResponse } from '../activities/activityDetailsResponse'
import { ProjectResponse } from './projectResponse'

export class ProjectDetailsResponse extends ProjectResponse {
  activities: ActivityDetailsResponse[]

  constructor({ activities = [], ...baseParams }) {
    super(baseParams)
    this.activities = activities.map(
      (activity) => new ActivityDetailsResponse(activity)
    )
  }
}
