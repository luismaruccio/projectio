import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  IconButton,
  Stack,
  Tag,
  TagLabel,
  Text,
} from '@chakra-ui/react'
import { Pencil, Trash } from 'lucide-react'
import { NavigateFunction } from 'react-router-dom'
import { RoutesEnum } from '../../../../application/enums/route'

interface ProjectCardProps {
  project_id: number
  header: string
  startDate: string
  endDate: string
  doneItems: number
  totalItems: number
  progress: number
  isLate: boolean
  navigate: NavigateFunction
}

export function ProjectCard({
  project_id,
  header,
  startDate,
  endDate,
  doneItems,
  totalItems,
  progress,
  isLate,
  navigate,
}: ProjectCardProps): JSX.Element {
  const handleClick = () => {
    navigate(RoutesEnum.PROJECT, {
      state: project_id,
    })
  }

  return (
    <Card minW="sm" id={`project_- ${project_id}`}>
      <CardHeader>
        <Heading size="md">{header}</Heading>
      </CardHeader>
      <CardBody>
        <Flex justifyContent="space-between">
          <Stack direction="column">
            <Heading size="sm">Data de Início</Heading>
            <Text>{startDate}</Text>
            <Heading size="sm">Data de Término</Heading>
            <Text>{endDate}</Text>
            <Tag
              size="md"
              borderRadius="full"
              variant="solid"
              colorScheme={isLate ? 'red' : 'green'}
              justifyContent="space-around"
            >
              <TagLabel>{isLate ? 'Atrasado' : 'No Prazo'}</TagLabel>
            </Tag>
          </Stack>
          <Stack direction="column">
            <Center>
              <CircularProgress size="100px" value={progress}>
                <CircularProgressLabel>{progress}%</CircularProgressLabel>
              </CircularProgress>
            </Center>
            <Text>
              {doneItems} itens concluídos de {totalItems}
            </Text>
          </Stack>
        </Flex>
      </CardBody>
      <CardFooter justifyContent={'space-between'}>
        <Flex gap="2">
          <IconButton aria-label="Editar" icon={<Pencil />} />
          <IconButton aria-label="Remover" icon={<Trash />} />
        </Flex>
        <Button onClick={handleClick}>Detalhes</Button>
      </CardFooter>
    </Card>
  )
}
