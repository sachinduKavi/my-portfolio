import React, {useRef, useEffect} from 'react'

import '../styles/project-card.css'
import '../styles/structure.css'

export default function ProjectCard(props: any) {

    const cardRef = useRef(null)


    const checkClick = (e: any) => {
        if(!(cardRef.current?.contains(e.target)?? true)) {
            props.setVisible(false)
        }
    }


    // Component did mount ?
    useEffect(() => {
        document.addEventListener('mousedown', checkClick)

        return(() => {
            document.removeEventListener('mousedown', checkClick)
        })
    }, [])

  return (
    <div className='project-card overlay'>
        <div className="card" ref={cardRef}>
               <h2 className="project-name">Ride Buddy  - Carpooling (Mobile app)</h2> 
        </div>
    </div>
  )
}
