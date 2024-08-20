export class CreateProjectRequest {
  name: string
  start_date: string
  end_date: string

  constructor({ name = '', start_date = '', end_date = '' }) {
    this.name = name
    this.start_date = start_date
    this.end_date = end_date
  }
}
