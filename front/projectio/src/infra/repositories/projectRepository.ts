import { CreateProjectDto } from '../../application/dtos/projects/createProjectDto'
import { CreateProjectRequest } from '../../application/dtos/projects/createProjectRequest'
import { ProjectDto } from '../../application/dtos/projects/projectDto'
import { ProjectResponse } from '../../application/dtos/projects/projectResponse'
import { BaseRepository } from './baseRepository'

export class ProjectRepository extends BaseRepository {
  async createProject(data: CreateProjectDto): Promise<ProjectDto | undefined> {
    const request = new CreateProjectRequest({
      name: data.name,
      start_date: data.startDate.toISOString().split('T')[0],
      end_date: data.endDate.toISOString().split('T')[0],
    })
    return await this.apiService.post<ProjectDto>('/projects', request)
  }

  async getProjects(): Promise<Array<ProjectResponse> | undefined> {
    return await this.apiService.get<Array<ProjectResponse>>('/projects')
  }
}
