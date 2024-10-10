import React, {useRef} from 'react'
import {motion, Variant} from 'framer-motion'

import '../styles/timeline.css'

export default function Milestone(props: any) {

  const timeline = props.timeline
  const milestoneRef = useRef(null)

  return (
    <div className='timeline-wrapper' ref={milestoneRef}>
        <h2 className="title text-gradient">Milestones</h2>

        <div className="timeline-slider">
          <div className="container">

            {
              timeline.map((element: any, index: number) => {
                return (
                  <div className='single-milestone' key={index}>
                    {
                      index % 2 === 0 

                      ? 
                      
                      <>
                        <motion.div className="upper"
                          initial={{y: -500, scale: 0}}
                          animate={{y: 0, scale: 1, transition: {delay: index*0.1 + 0.5, duration: 0.5}}}
                          whileInView={{y: 0, scale: 1, transition: {delay: index*0.1 + 0.5, duration: 0.5}}}
                          viewport={{once: true, root: milestoneRef}}
                          onViewportEnter={() => console.log('hello world vieew')}
                        >
                          <div className="milestone">
                            <div className="description">
                              <h4>{element.title}</h4>  
                              <p>{element.description}</p>
                            </div>

                            <div className="stem"></div>

                            <div className="date"><h5>{element.start} </h5></div>

                          </div>
                        </motion.div>

                        <div className="bottom">

                        </div>
                      </>

                          
                        :

                        <>

                          <div className="upper">

                          </div>

                          <motion.div className="bottom"
                          initial={{y: 500, scale: 0}}
                          animate={{y: 0, scale: 1, transition: {delay: index*0.1 + 0.5, duration: 0.5}}}
                          whileInView={{y: 0, scale: 1, transition: {delay: index*0.1 + 0.5, duration: 0.5}}}
                          viewport={{ once: true, amount: 0.5 }}
                          >
                            <div className="milestone">
                              <div className="date"><h5>{element.start} </h5></div>

                              <div className="stem"></div>

                              <div className="description">
                                <h4>{element.title}</h4>  
                                <p>{element.description}</p>
                              </div>
                            </div>
                          </motion.div>

                          
                        
                        </>
                    }
                    

                    

                    
                  </div>
                )
              })
            }
            

            <div className="middle-line"></div>

          </div>
        </div>
    </div>
  )
}
