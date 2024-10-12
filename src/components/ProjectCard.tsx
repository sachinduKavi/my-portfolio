import React, {useRef, useEffect} from 'react'
import {GithubFilled} from '@ant-design/icons'
import {motion} from 'framer-motion'
import { UseDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'



import '../styles/project-card.css'
import '../styles/structure.css'

export default function ProjectCard(props: any) {   
    const globalProject = useSelector((state: RootState) => state.project)
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
            <motion.div className="card" ref={cardRef}
                initial={{scale: 0}}
                animate={{scale: 1}}
            >
                <h2 className="card-name">{globalProject.name}</h2> 


                <div className="row">
                    <div className="column">
                        <div className="primary-image">
                            <img src="" alt="image" />
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
                            <div className="row mobile-row">
                                <GithubFilled/>
                                <h4>Hit Hub: </h4>
                                <a target='_blank' href="https://www.wendoj.codes/">https://www.wendoj.codes/</a>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="row">
                 
                        <p className="detailed-description">
                        I’m Sachindu Kavishka, a 3rd-year Computer Science & Technology undergraduate at Uva Wellassa University. My passion lies in both frontend and backend development, where I enjoy creating web and mobile applications using modern frameworks like React, Node.js, and Flutter. I'm always excited by the challenge of turning ideas into impactful software solutions.
                        With a deep interest in Information and Communication Technology, particularly in software engineering, I thrive on learning and exploring new technologies. I take a proactive approach to solving problems and continuously seek ways to enhance my skills, whether it’s through academic projects or hands-on assignments.
                        </p>
              
                </div>

                <iframe width="350" height="350" src="https://www.youtube.com/embed/c-ptvXgUfdg?si=1ZeX0nfXfYCnm-kD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                
            </motion.div>

            
        </div>
  )
}
