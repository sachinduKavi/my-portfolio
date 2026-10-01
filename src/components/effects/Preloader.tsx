import { useEffect, useState } from 'react'
import { AnimatePresence, animate, motion } from 'framer-motion'
import { introWillPlay } from './intro'

// Short branded intro shown once per session while the 3D scene warms up
export default function Preloader() {
  const [visible, setVisible] = useState(introWillPlay)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!visible) return
    document.body.style.overflow = 'hidden'
    const controls = animate(0, 100, {
      duration: 1.4,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => {
        try {
          sessionStorage.setItem('intro-seen', '1')
        } catch {
          /* storage unavailable — intro simply shows again next visit */
        }
        setTimeout(() => setVisible(false), 250)
      },
    })
    return () => {
      controls.stop()
      document.body.style.overflow = ''
    }
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="preloader"
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="preloader-mark"
            initial={{ scale: 0.6, rotate: -20, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            SK
          </motion.div>
          <div className="preloader-bar">
            <span style={{ transform: `scaleX(${count / 100})` }} />
          </div>
          <div className="preloader-count">{count.toString().padStart(3, '0')}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
