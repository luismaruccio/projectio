export class CreateProjectDto {
  name: string
  startDate: Date
  endDate: Date

  constructor({ name = '', startDate = new Date(), endDate = new Date() }) {
    this.name = name
    this.startDate = startDate
    this.endDate = endDate
  }
}
