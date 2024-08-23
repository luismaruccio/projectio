import { NavigateFunction } from 'react-router-dom'
import { ProjectRepository } from '../../infra/repositories/projectRepository'
import { CreateProjectDto } from '../dtos/projects/createProjectDto'
import { ProjectDetailsResponse } from '../dtos/projects/projectDetailsResponse'
import { RoutesEnum } from '../enums/route'

export class ProjectService {
  goBack(navigate: NavigateFunction) {
    navigate(-1)
  }

  async create(data: CreateProjectDto, navigate: NavigateFunction, toast: any) {
    const projectRepository = new ProjectRepository()

    try {
      const response = await toast.promise(
        projectRepository.createProject(data),
        {
          loading: {
            title: 'Criando Projeto',
            description: 'Por favor, aguarde...',
          },
          success: {
            title: 'Projeto Criado',
            description: 'Projeto foi criado com sucesso!',
          },
          error: {
            title: 'Erro',
            description: 'Falha ao criar o projeto. Tente novamente.',
          },
        }
      )

      if (response) {
        navigate(RoutesEnum.HOME)
      }
    } catch (error) {
      console.error('Erro ao criar projeto:', error)
    }
  }

  async getProjects(): Promise<any[]> {
    const projectRepository = new ProjectRepository()

    try {
      const projects = await projectRepository.getProjects()

      return projects || []
    } catch (error) {
      console.error('Erro ao obter projetos:', error)

      return []
    }
  }

  async getProject(
    project_id: number
  ): Promise<ProjectDetailsResponse | undefined> {
    const projectRepository = new ProjectRepository()
    try {
      const project = await projectRepository.getProject(project_id)

      console.log(project)

      return project
    } catch (error) {
      console.error('Erro ao obter o projeto:', error)

      return
    }
  }
}
