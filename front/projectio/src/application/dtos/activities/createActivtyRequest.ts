export class CreateActivityRequest {
  name: string
  project_id: number
  start_date: string
  end_date: string
  completed: boolean

  constructor({
    name = '',
    project_id = 0,
    start_date = '',
    end_date = '',
    completed = false,
  }) {
    this.name = name
    this.project_id = project_id
    this.start_date = start_date
    this.end_date = end_date
    this.completed = completed
  }
}
