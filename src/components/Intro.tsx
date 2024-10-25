import React from 'react'
import { user } from '../data/user'

import '../styles/intro.css'

export default function Intro() {
  return (
    <div className='introduction row' id='about-me'>
        <div className="column">
          <p className='intro-para'>I’m Sachindu Kavishka, a 3rd-year Computer Science & Technology undergraduate at Uva Wellassa University. My passion lies in both frontend and backend development, where I enjoy creating web and mobile applications using modern frameworks like React, Node.js, and Flutter. I'm always excited by the challenge of turning ideas into impactful software solutions.
          With a deep interest in Information and Communication Technology, particularly in software engineering, I thrive on learning and exploring new technologies. I take a proactive approach to solving problems and continuously seek ways to enhance my skills, whether it’s through academic projects or hands-on assignments.</p>
        </div>

        <div className="column key-features-column">

          {
            user.keyPoints.map((element, index) => {
              return (
                <div className="features" key={index}>
                  <h1 className='count text-gradient'>{element.count}+</h1>
                  <p>{element.description}</p>
                </div>
              )
            })
          }


        </div>
    </div>
  )
}
