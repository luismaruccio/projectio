import { Box, Flex, Wrap } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProjectResponse } from '../../../application/dtos/projects/projectResponse'
import { ProjectService } from '../../../application/services/projectService'
import NavigationButton from '../../components/buttons/navigationButton/NavigationButton'
import { ProjectCard } from '../../components/cards/projectCard'

export function Home(): JSX.Element {
  const [projects, setProjects] = useState<ProjectResponse[]>([])
  const projectService = new ProjectService()
  const navigate = useNavigate()

  async function fetchProjects() {
    try {
      const fetchedProjects = await projectService.getProjects()
      console.log(fetchedProjects)
      if (Array.isArray(fetchedProjects)) {
        setProjects(fetchedProjects)
      } else {
        setProjects([])
        console.error('A resposta da API não é um array:', fetchedProjects)
      }
    } catch (error) {
      console.error('Erro ao buscar projetos:', error)
      setProjects([])
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <Box px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box fontWeight="bold" fontSize="2xl">
          Projetos
        </Box>
        <Flex>
          <NavigationButton path="/newproject" label="Novo Projeto" />
        </Flex>
      </Flex>
      <Flex>
        <Wrap>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project_id={project.id}
              header={project.name}
              startDate={project.start_date}
              endDate={project.end_date}
              doneItems={project.completed_activities_count}
              totalItems={project.activities_count}
              progress={project.completion_percentage}
              isLate={project.overdue_activity}
              navigate={navigate}
            />
          ))}
        </Wrap>
      </Flex>
    </Box>
  )
}
