import React, {useEffect, useRef} from 'react'
import { user } from '../data/user'
import VanillaTilt from 'vanilla-tilt'
import {motion} from 'framer-motion'
import {AppDispatch, RootState} from '../redux/store'
import { setValue } from '../redux/project-slice'
import { useSelector, useDispatch } from 'react-redux'


import '../styles/projects.css'

export default function Projects(props: any) {
  const projectValue = useSelector((state: RootState) => state.project)
  const dispatch: AppDispatch = useDispatch()

  const projects = user.projects
  const sliderRef = useRef(null)
  let mousedown = false, startX = 0, scrollLeft = 0


  const mousedownFunction = (e: Event) => {
    mousedown = true
    startX = e.pageX - sliderRef.current.offsetLeft // Calculate start point
    scrollLeft = sliderRef.current.scrollLeft
  }

  const mouseupFunction = (e: Event) => {
    mousedown = false
  }

  const mouseMoveFunction = (e: Event) => {
    if(mousedown) {
      const x = e.pageX - sliderRef.current.offsetLeft
      const walk = (x - startX) 
      sliderRef.current.scrollLeft = scrollLeft - walk
    }
  }


  // Update the global project state 
  const updateProjectGlobal = (project: any) => {
    dispatch(setValue(project))
    props.setVisible(true)
  }


  useEffect(() => {
    // Set mousedown to false in the beginning 
    mousedown = false
    

    document.addEventListener('mousedown', mousedownFunction)

    document.addEventListener('mousemove', mouseMoveFunction)

    document.addEventListener('mouseup', mouseupFunction)



    return (() => {
      document.removeEventListener('mousedown', mousedownFunction)

      document.removeEventListener('mousemove', mouseMoveFunction)

      document.removeEventListener('mouseup', mouseupFunction)
    })

  }, [])


  useEffect(() =>{
    const element = document.querySelectorAll(".project-card");
    if(element) {
      console.log(element)
      VanillaTilt.init(element);

      return(() => {
        element.vanillaTilt?.destroy();

        // Reset instance
        element.vanillaTilt?.reset();
      })
    }
    
  }, [])


  return (
    <div className='container'>
      <h2 className="title text-gradient">Technical Projects</h2>
      <p className='preview-info'>(Double click for project preview)</p>
      <div className='projects-container' ref={sliderRef}>
      
      {
        projects.map((element, index) => {
          return (
            <div className="project-card"
            onDoubleClick={() => updateProjectGlobal(element)}
            key={index}
            style={{
              background: `url('${element.image}')`,
              backgroundPosition: 'left',
              backgroundSize: 'cover'
              }}>

                <div className="project-name">
                  <h2>{element.name}</h2>
                </div>


                <motion.div className="description">
                  <p>{element.description}</p>
                </motion.div>

            </div>
          )
        })
      }
      

    
    </div>
    
    </div>
    
  )
}
