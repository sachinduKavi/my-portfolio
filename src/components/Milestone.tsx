import React from 'react'

import '../styles/timeline.css'

export default function Milestone(props: any) {

  const timeline = props.timeline

  return (
    <div className='timeline-wrapper'>
        <h2 className="title text-gradient">Timeline</h2>

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
                        <div className="upper">
                          <div className="milestone">
                            <div className="description">
                              <h4>{element.title}</h4>  
                              <p>{element.description}</p>
                            </div>

                            <div className="stem"></div>

                            <div className="date"><h5>{element.start} </h5></div>

                          </div>
                        </div>

                        <div className="bottom">

                        </div>
                      </>

                          
                        :

                        <>

                          <div className="upper">

                          </div>

                          <div className="bottom">
                            <div className="milestone">
                              <div className="date"><h5>{element.start} </h5></div>

                              <div className="stem"></div>

                              <div className="description">
                                <h4>{element.title}</h4>  
                                <p>{element.description}</p>
                              </div>
                            </div>
                          </div>

                          
                        
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
