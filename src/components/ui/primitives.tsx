import { Fragment, ReactNode, useEffect, useRef, useState, MouseEvent } from 'react'
import { animate, motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

export function Reveal({ children, delay = 0, y = 40, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, rotateX: 12 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformPerspective: 1000 }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  const words = title.split(' ')
  return (
    <motion.div
      className="section-heading"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ staggerChildren: 0.06 }}
    >
      <motion.span
        className="eyebrow"
        variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
      >
        {eyebrow}
      </motion.span>
      {/* Each word slides up from behind a mask */}
      <h2 aria-label={title}>
        {words.map((w, i) => (
          <Fragment key={i}>
            <span className="word-mask" aria-hidden="true">
              <motion.span
                className="word"
                variants={{
                  hidden: { y: '110%', rotate: 6 },
                  show: { y: '0%', rotate: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                {w}
              </motion.span>
            </span>
            {/* Space lives outside the mask, where inline-block would otherwise swallow it */}
            {i < words.length - 1 && ' '}
          </Fragment>
        ))}
      </h2>
      <motion.span
        className="heading-line"
        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] } } }}
      />
      {subtitle && (
        <motion.p variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.25 } } }}>
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}

// 3D tilt card with a moving glare highlight; tilt is skipped on touch devices
export function TiltCard({ children, className = '', intensity = 10, onClick }: { children: ReactNode; className?: string; intensity?: number; onClick?: () => void }) {
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const rx = useSpring(useTransform(y, [0, 1], [intensity, -intensity]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(x, [0, 1], [-intensity, intensity]), { stiffness: 200, damping: 20 })
  const glareX = useTransform(x, (v) => `${v * 100}%`)
  const glareY = useTransform(y, (v) => `${v * 100}%`)

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }
  const onLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      className={`tilt-card ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
    >
      {children}
      <motion.span
        className="tilt-glare"
        style={{ '--gx': glareX, '--gy': glareY } as never}
      />
    </motion.div>
  )
}

export function Counter({ value, decimals = 0, suffix = '' }: { value: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState((0).toFixed(decimals))

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    })
    return () => controls.stop()
  }, [inView, value, decimals])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
