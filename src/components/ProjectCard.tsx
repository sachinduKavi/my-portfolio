import React, {useRef, useEffect, useState} from 'react'
import {GithubFilled} from '@ant-design/icons'
import {motion} from 'framer-motion'
import { resetValues } from '../redux/project-slice'
import { useDispatch, UseDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'



import '../styles/project-card.css'
import '../styles/structure.css'

export default function ProjectCard(props: any) {   
    const project = useSelector((state: RootState) => state.project)
    const dispatch: AppDispatch = useDispatch()
    const cardRef = useRef(null)


    // Set current display to the primary image of the project
    const [display, setDisplay] = useState<{
        image: boolean
        id: string
    }>({
        image: true,
        id: project.image ?? ''
    })


    const checkClick = (e: any) => {
        if(!(cardRef.current?.contains(e.target)?? true)) {
            dispatch(resetValues())
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
            <motion.div className="card" ref={cardRef}
                initial={{scale: 0}}
                animate={{scale: 1}}
            >
                <h2 className="card-name">{project.name}</h2> 


                <div className="row">
                    <div className="column">
                        <div className="primary-image">
                            {
                                display.image 
                                ? <img src={`${display.id}`} alt="image" />

                                : null
                            }
                        </div>
                    </div>

                    <div className="column start-column">
                        <div className="row mobile-row" style={{flexWrap: 'wrap'}}>
                            <div className="mini-images"><img src="" alt="" /></div>
                            <div className="mini-images"><img src="" alt="" /></div>
                            <div className="mini-images"><img src="" alt="" /></div>
                            <div className="mini-images"><img src="" alt="" /></div>
                            <div className="mini-images"><img src="" alt="" /></div>
                        </div>

                        <div className="platform">

                            {
                                project.more?.linksList.map((element, index) => {
                                    return (
                                        <div className="row mobile-row" key={index}>
                                            {element.icon}
                                            <h4>{element.platform}: </h4>
                                            <a target='_blank' href={`${element.link}`}>{element.link.slice(0, 50)}</a>
                                        </div>
                                    )
                                })
                            }

                            
                            
                        </div>
                    </div>
                </div>

                <div className="row">
                 
                        <p className="detailed-description">
                        I’m Sachindu Kavishka, a 3rd-year Computer Science & Technology undergraduate at Uva Wellassa University. My passion lies in both frontend and backend development, where I enjoy creating web and mobile applications using modern frameworks like React, Node.js, and Flutter. I'm always excited by the challenge of turning ideas into impactful software solutions.
                        With a deep interest in Information and Communication Technology, particularly in software engineering, I thrive on learning and exploring new technologies. I take a proactive approach to solving problems and continuously seek ways to enhance my skills, whether it’s through academic projects or hands-on assignments.
                        </p>
              
                </div>

                

                
            </motion.div>

            
        </div>
  )
}
