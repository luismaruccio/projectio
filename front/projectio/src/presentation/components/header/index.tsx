import { Box, Flex, HStack } from '@chakra-ui/react'

export function Header(): JSX.Element {
  return (
    <Box bg={'gray.100'} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
          <Box fontWeight="bold" fontSize="xl">
            Projectio
          </Box>
        </HStack>
      </Flex>
    </Box>
  )
}
