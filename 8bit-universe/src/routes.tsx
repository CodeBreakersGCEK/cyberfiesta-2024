import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Universe from './pages/Universe'

const RoutesContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/8bit-universe" element={<Universe />} />
    </Routes>
  )
}

export default RoutesContainer
