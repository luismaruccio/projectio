export class ProjectDto {
  id: number
  description: string
  startDate: string
  endDate: string

  constructor({ id = 0, description = '', startDate = '', endDate = '' }) {
    this.id = id
    this.description = description
    this.startDate = startDate
    this.endDate = endDate
  }
}
