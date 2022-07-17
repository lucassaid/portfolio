import { Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/home/HomeScreen'
import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import ProjectScreen from './screens/projects/ProjectScreen'
import Layout from './components/Layout'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomeScreen />} />
          <Route path="/project/:slug" element={<ProjectScreen />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  )
}
