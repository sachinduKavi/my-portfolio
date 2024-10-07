import React, {useEffect} from 'react'
import { user } from '../data/user'
import VanillaTilt from 'vanilla-tilt'
import {motion} from 'framer-motion'


import '../styles/projects.css'

export default function Projects() {

  const projects = user.projects


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
    
  })

  return (
    <>
      <h2 className="title">Projects</h2>
      <div className='projects-container'>
      
      {
        projects.map((element, index) => {
          return (
            <div className="project-card"
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
    
    </>
    
  )
}
