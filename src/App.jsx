import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import VideoPage from './pages/VideoPage'
import MotionPage from './pages/MotionPage'
import VfxPage from './pages/VfxPage'
import PhotographyPage from './pages/PhotographyPage'
import ContactPage from './pages/ContactPage'
import AuroraCanvas from './components/ui/ambient-aurora'

function App() {
  const location = useLocation()

  return (
    <>
      <AuroraCanvas />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/3d-motion" element={<MotionPage />} />
          <Route path="/vfx" element={<VfxPage />} />
          <Route path="/photography" element={<PhotographyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
