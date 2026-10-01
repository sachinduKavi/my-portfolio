import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const interactive = 'a, button, input, textarea, .tilt-card, .tag, .site-pill'

// Trailing ring + soft spotlight that follow the mouse. Desktop (fine pointer) only.
export default function CursorGlow() {
  const [enabled] = useState(() => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 })
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 })
  const glowX = useSpring(x, { stiffness: 60, damping: 20 })
  const glowY = useSpring(y, { stiffness: 60, damping: 20 })

  useEffect(() => {
    if (!enabled) return
    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      setHovering(!!(e.target as Element)?.closest?.(interactive))
    }
    const leave = () => setVisible(false)
    window.addEventListener('pointermove', move)
    document.documentElement.addEventListener('pointerleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('pointerleave', leave)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div className="cursor-spotlight" style={{ x: glowX, y: glowY, opacity: visible ? 1 : 0 }} aria-hidden="true" />
      <motion.div
        className={`cursor-ring ${hovering ? 'hover' : ''}`}
        style={{ x: ringX, y: ringY, opacity: visible ? 1 : 0 }}
        aria-hidden="true"
      />
    </>
  )
}
