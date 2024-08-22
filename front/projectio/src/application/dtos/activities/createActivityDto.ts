export class createActivityDto {
  name: string
  project_id: number
  start_date: Date
  end_date: Date
  completed: boolean

  constructor({
    name = '',
    project_id = 0,
    start_date = new Date(),
    end_date = new Date(),
    completed = false,
  }) {
    this.name = name
    this.project_id = project_id
    this.start_date = start_date
    this.end_date = end_date
    this.completed = completed
  }
}
