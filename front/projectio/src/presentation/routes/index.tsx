import { Route, Routes } from 'react-router-dom'
import { RoutesEnum } from '../../application/enums/route'
import { Home } from '../pages/home'
import { ProjectDetails } from '../pages/projectDetails'
import { NewProject } from '../pages/projects'

export function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newproject" element={<NewProject />} />
      <Route path={RoutesEnum.PROJECT} element={<ProjectDetails />} />
    </Routes>
  )
}
