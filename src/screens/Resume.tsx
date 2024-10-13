import React from 'react'
import {Document, Page} from 'react-pdf'
import PDF from '../assets/documents/mycv.pdf'

import '../styles/resume.css'

export default function Resume() {
  return (
    <div className='resume page'>
        <div className="row">
            <div className="column">
                <Document file={PDF}>
                    <Page/>
                </Document>
            </div>
        </div>
    </div>
  )
}
