import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './components/header'
import { AppRoutes } from './routes'

export function App(): JSX.Element {
  return (
    <>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
    </>
  )
}
