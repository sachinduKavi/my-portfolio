import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Resume from './screens/Resume'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Preloader from './components/effects/Preloader'
import CursorGlow from './components/effects/CursorGlow'

// Three.js is split into its own chunk so the page content paints first
const BackgroundScene = lazy(() => import('./components/three/BackgroundScene'))

function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <CursorGlow />
      <div className="bg-layer" aria-hidden="true">
        <Suspense fallback={null}>
          <BackgroundScene />
        </Suspense>
        <div className="bg-grid" />
        <div className="bg-vignette" />
        <div className="bg-grain" />
      </div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
