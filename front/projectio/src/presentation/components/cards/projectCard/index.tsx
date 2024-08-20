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
  Stack,
  Tag,
  TagLabel,
} from '@chakra-ui/react'

interface ProjectCardProps {
  header: string
  startDate: string
  endDate: string
  doneItems: number
  totalItems: number
  progress: number
}

export function ProjectCard({
  header,
  startDate,
  endDate,
  doneItems,
  totalItems,
  progress,
}: ProjectCardProps): JSX.Element {
  return (
    <Card maxW="sm">
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
              colorScheme="green"
              justifyContent="space-around"
            >
              <TagLabel>No Prazo</TagLabel>
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
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
    </Card>
  )
}
