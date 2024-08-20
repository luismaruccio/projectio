export class ProjectResponse {
  id: number
  name: string
  start_date: string
  end_date: string
  activities_count: number
  completed_activities_count: number
  completion_percentage: number
  overdue_activity: boolean

  constructor({
    id = 0,
    name = '',
    start_date = '',
    end_date = '',
    activities_count = 0,
    completed_activities_count = 0,
    completion_percentage = 0,
    overdue_activity = false,
  }) {
    this.id = id
    this.name = name
    this.start_date = start_date
    this.end_date = end_date
    this.activities_count = activities_count
    this.completed_activities_count = completed_activities_count
    this.completion_percentage = completion_percentage
    this.overdue_activity = overdue_activity
  }
}
