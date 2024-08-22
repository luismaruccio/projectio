export class ActivityDetailsResponse {
  id: number
  project_id: number
  name: string
  start_date: string
  end_date: string
  completed: boolean

  constructor({
    id = 0,
    project_id = 0,
    name = '',
    start_date = '',
    end_date = '',
    completed = false,
  }) {
    this.id = id
    this.project_id = project_id
    this.name = name
    this.start_date = start_date
    this.end_date = end_date
    this.completed = completed
  }
}
