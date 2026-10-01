import { motion } from 'framer-motion'
import { DownloadOutlined, ExportOutlined } from '@ant-design/icons'
import cvUrl from '../assets/documents/CV_V11.pdf?url'

export default function Resume() {
  return (
    <main className="resume-page">
      <motion.div
        className="resume-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <span className="eyebrow">Curriculum Vitae</span>
          <h1>My <span className="gradient-text">Resume</span></h1>
        </div>
        <div className="resume-actions">
          <a href={cvUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <ExportOutlined /> Open
          </a>
          <a href={cvUrl} download="Sachindu_Kavishka_CV.pdf" className="btn btn-primary">
            <DownloadOutlined /> Download
          </a>
        </div>
      </motion.div>

      <motion.div
        className="resume-frame glass"
        initial={{ opacity: 0, rotateX: 18, y: 60 }}
        animate={{ opacity: 1, rotateX: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformPerspective: 1400 }}
      >
        <iframe src={`${cvUrl}#view=FitH`} title="Sachindu Kavishka CV" />
        {/* Mobile browsers often can't render PDFs inline, so offer a direct link instead */}
        <div className="resume-mobile-fallback">
          <p>PDF preview isn't supported on most mobile browsers.</p>
          <a href={cvUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
            <ExportOutlined /> Open CV
          </a>
        </div>
      </motion.div>
    </main>
  )
}
