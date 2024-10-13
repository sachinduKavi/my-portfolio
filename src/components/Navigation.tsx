import { user } from '../data/user'
import { useNavigate } from 'react-router-dom'

import '../styles/navigation.css'

export default function Navigation() {

  const navigate = useNavigate()

  return (
    <div className='navigation-bar'>
        <h2 className="name text-gradient">{user.name}</h2>

        <div className="wrapper">
          <ul>
            <li onClick={() => {
              navigate('/')
            }}>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>My Services</li>
            <li onClick={() => {
              navigate('/resume')
            }}>Resume</li>
            <li>Contacts</li>
          </ul>
        </div>
    </div>
  )
}
