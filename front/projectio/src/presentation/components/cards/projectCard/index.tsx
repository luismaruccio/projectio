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
} from '@chakra-ui/react'
import { Pencil, Trash } from 'lucide-react'

interface ProjectCardProps {
  header: string
  startDate: string
  endDate: string
  doneItems: number
  totalItems: number
  progress: number
  isLate: boolean
}

export function ProjectCard({
  header,
  startDate,
  endDate,
  doneItems,
  totalItems,
  progress,
  isLate,
}: ProjectCardProps): JSX.Element {
  return (
    <Card minW="sm">
      <CardHeader>
        <Heading size="md">{header}</Heading>
      </CardHeader>
      <CardBody>
        <Flex justifyContent="space-between">
          <Stack direction="column">
            <Heading size="sm">Data de Início</Heading>
            <text>{startDate}</text>
            <Heading size="sm">Data de Término</Heading>
            <text>{endDate}</text>
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
            <text>
              {doneItems} itens concluídos de {totalItems}
            </text>
          </Stack>
        </Flex>
      </CardBody>
      <CardFooter justifyContent={'space-between'}>
        <Flex gap="2">
          <IconButton aria-label="Editar" icon={<Pencil />} />
          <IconButton aria-label="Remover" icon={<Trash />} />
        </Flex>
        <Button>Detalhes</Button>
      </CardFooter>
    </Card>
  )
}
