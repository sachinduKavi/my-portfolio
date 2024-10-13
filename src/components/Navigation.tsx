import { user } from '../data/user'

import '../styles/navigation.css'

export default function Navigation() {
  return (
    <div className='navigation-bar'>
        <h2 className="name text-gradient">{user.name}</h2>

        <div className="wrapper">
          <ul>
            <li>About Me</li>
            <li>Projects</li>
            <li>My Services</li>
            <li>Resume</li>
            <li>Contacts</li>
          </ul>
        </div>
    </div>
  )
}
