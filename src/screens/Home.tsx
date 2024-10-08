import Navigation from '../components/Navigation'
import HeadLine from '../components/HeadLine'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import Milestone from '../components/Milestone'
import User, {user} from '../data/user'


import '../styles/home.css'

export default function Home() {

  const userValue: User = user


  return (
    <div className='home-page'>
        <Navigation/>

        <HeadLine/>

        <Intro/>

        <Projects/>

        <Milestone timeline={userValue.timeline}/>



    </div>
  )
}
