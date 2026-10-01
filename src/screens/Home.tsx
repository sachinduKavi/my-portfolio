import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import TechStrip from '../components/TechStrip'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Research from '../components/Research'
import Journey from '../components/Journey'
import Contact from '../components/Contact'

export default function Home() {
  const { hash } = useLocation()

  // Support links like /#projects coming from other routes
  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
  }, [hash])

  return (
    <main>
      <Hero />
      <TechStrip />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Research />
      <Journey />
      <Contact />
    </main>
  )
}
