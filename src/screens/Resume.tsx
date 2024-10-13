import React from 'react'
import {Document, Page} from 'react-pdf'
import PDF from '../assets/documents/mycv.pdf'
import Navigation from '../components/Navigation'

import '../styles/resume.css'

export default function Resume() {
  return (
    <div className='resume page'>
      <Navigation/>
      <iframe src={PDF} frameBorder="0" width='100%' height='95%' style={{marginTop: '3%'}}/>

    </div>
  )
}
