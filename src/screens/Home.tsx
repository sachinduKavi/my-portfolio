import Navigation from '../components/Navigation'
import HeadLine from '../components/HeadLine'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import Timeline from '../components/Timeline'


import '../styles/home.css'

export default function Home() {
  return (
    <div className='home-page'>
        <Navigation/>

        <HeadLine/>

        <Intro/>

        <Projects/>

        <Timeline/>



    </div>
  )
}
