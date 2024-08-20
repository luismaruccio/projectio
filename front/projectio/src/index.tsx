import { ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import { App } from './presentation/App'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  root.render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
  )
}
