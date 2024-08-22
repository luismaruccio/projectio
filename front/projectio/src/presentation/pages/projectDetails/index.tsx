import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  HStack,
  IconButton,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { Pencil, Trash } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ProjectDetailsResponse } from '../../../application/dtos/projects/projectDetailsResponse'
import { ProjectService } from '../../../application/services/projectService'
import { BackButton } from '../../components/buttons/backButton'
import { ActivityModal } from '../../components/modals/activityModal'

export function ProjectDetails(): JSX.Element {
  const [project, setProject] = useState<ProjectDetailsResponse>()
  const projectService = new ProjectService()
  const { state } = useLocation()
  const navigate = useNavigate()
  const project_id = state as number

  const fetchProject = async () => {
    const fetchedProject = await projectService.getProject(project_id)
    if (fetchedProject) {
      setProject(fetchedProject)
    }
  }

  const handleModalClose = async () => {
    await fetchProject()
  }

  useEffect(() => {
    fetchProject()
  }, [])

  return (
    <Box px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack>
          <BackButton onButtonClick={() => projectService.goBack(navigate)} />
          <Heading size="lg">Projeto: {project?.name}</Heading>
        </HStack>
      </Flex>
      <Stack>
        <HStack>
          <Text fontSize="md" as="b">
            Data de Início:
          </Text>
          <Text fontSize="md">{project?.start_date}</Text>
        </HStack>
        <HStack>
          <Text fontSize="md" as="b">
            Data de Término:
          </Text>
          <Text fontSize="md">{project?.end_date}</Text>
        </HStack>
        <HStack>
          <Text fontSize="md" as="b">
            Status:
          </Text>
          <Text fontSize="md">
            {project?.overdue_activity ? 'Atrasada' : 'No prazo'}
          </Text>
        </HStack>
        <HStack>
          <Text fontSize="md" as="b">
            {project?.completed_activities_count}
          </Text>
          <Text fontSize="md">items concluídos de</Text>
          <Text fontSize="md" as="b">
            {project?.activities_count}
          </Text>
          <Text fontSize="md">-</Text>
          <Text fontSize="md" as="b">
            {project?.completion_percentage}
          </Text>
          <Text fontSize="md">%</Text>
        </HStack>
      </Stack>
      <Stack marginTop={4}>
        <Flex justifyContent="space-between">
          <Heading size="lg">Atividades</Heading>
          <ActivityModal
            projectId={project?.id}
            onCloseModal={handleModalClose}
            triggerButton={<Button>Cadastrar Atividade</Button>}
          />
        </Flex>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th isNumeric>#</Th>
                <Th>Nome</Th>
                <Th>Início</Th>
                <Th>Fim</Th>
                <Th>Concluido</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              {project?.activities.map((activity) => (
                <Tr key={activity.id} id={`activity-${activity.id}`}>
                  <Td isNumeric>{activity.id}</Td>
                  <Td>{activity.name}</Td>
                  <Td>{activity.start_date}</Td>
                  <Td>{activity.end_date}</Td>
                  <Td>
                    <Checkbox isChecked={activity.completed} />
                  </Td>
                  <Td>
                    <Flex gap="2">
                      <ActivityModal
                        onCloseModal={handleModalClose}
                        activityDto={activity}
                        triggerButton={
                          <IconButton
                            aria-label="Editar"
                            size="xs"
                            icon={<Pencil size="16px" />}
                          />
                        }
                      />

                      <IconButton
                        aria-label="Remover"
                        size="xs"
                        icon={<Trash size="16px" />}
                      />
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </Box>
  )
}
