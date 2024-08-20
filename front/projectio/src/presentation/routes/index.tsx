import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home'
import { NewProject } from '../pages/projects'

export function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newproject" element={<NewProject />} />
    </Routes>
  )
}
