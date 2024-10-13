import React, {useRef, useEffect, useState} from 'react'
import {PlayCircleFilled} from '@ant-design/icons'
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

                                : <iframe width="100%" height='100%' src={`https://www.youtube.com/embed/${display.id}?si=8VGRjLHnC1_UyhxH`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            }
                        </div>
                    </div>

                    <div className="column start-column">
                        <div className="row mobile-row" style={{flexWrap: 'wrap'}}>
                            {/* Primary Image */}
                            <div className="mini-images" onClick={() => {
                                            setDisplay({
                                                image: true,
                                                id: project.image ?? ''
                                            })
                                        }}><img src={`${project.image}`} alt="" /></div>

                            {
                                project.more?.images.map((element, index) => {
                                    return (
                                        <div className="mini-images" key={index} onClick={() => {
                                            setDisplay({
                                                image: true,
                                                id: element
                                            })
                                        }}><img src={`${element}`} alt="" /></div>
                                    )
                                })

                                
                            }

                            {

                                project.more?.videos?.map((element, index) => {
                                    return (
                                        <div className="mini-images" key={index} onClick={() => {
                                            setDisplay({
                                                image: false,
                                                id: element
                                            })
                                        }}>
                                            <div className='play-icon'><PlayCircleFilled size={500}/></div>
                                            <img src={`https://img.youtube.com/vi/${element}/default.jpg`} alt="" />
                                            </div>
                                    )
                                })
                            }
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
                            {
                                project.more?.detailedDescription ?? project.description
                            }
                        </p>
              
                </div>

                

                
            </motion.div>

            
        </div>
  )
}
