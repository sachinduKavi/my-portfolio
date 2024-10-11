import { useState } from 'react'

import Navigation from '../components/Navigation'
import HeadLine from '../components/HeadLine'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import Milestone from '../components/Milestone'
import ContactMe from '../components/ContactMe'
import ProjectCard from '../components/ProjectCard'

import User, {user} from '../data/user'


import '../styles/home.css'

export default function Home() {

  const userValue: User = user
  const [projectVisibility, setProjectCardVisibility] = useState(false)

  return (
    <div className='home-page'>
        <Navigation/>

        <HeadLine/>

        <Intro/>

        <Projects setVisible={setProjectCardVisibility}/>

        <Milestone timeline={userValue.timeline}/>

        <ContactMe/>

        {
          projectVisibility && <ProjectCard setVisible={setProjectCardVisibility}/>
        }
        


    </div>
  )
}
