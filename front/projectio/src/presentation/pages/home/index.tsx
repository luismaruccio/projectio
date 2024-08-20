import { Box, Container, Flex, SimpleGrid } from '@chakra-ui/react'
import NavigationButton from '../../components/buttons/NavigationButton'
import { ProjectCard } from '../../components/cards/projectCard'

export function Home(): JSX.Element {
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
      <Container>
        <SimpleGrid>
          <ProjectCard
            header="Projeto X"
            startDate="01/08/2024"
            endDate="30/08/2024"
            doneItems={4}
            totalItems={10}
            progress={40}
          />
        </SimpleGrid>
      </Container>
    </Box>
  )
}
