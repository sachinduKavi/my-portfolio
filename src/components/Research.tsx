import { motion } from 'framer-motion'
import { ExperimentOutlined } from '@ant-design/icons'
import { research } from '../data/profile'
import { Reveal, SectionHeading } from './ui/primitives'

// Animated EEG-style traces: frequencies are whole multiples of the 400-unit viewBox,
// so sliding the 800-wide path by -400 loops seamlessly
const w = (k: number, x: number) => Math.sin((2 * Math.PI * k * x) / 400)
const channels = Array.from({ length: 5 }, (_, c) => {
  let d = 'M0 20'
  for (let x = 0; x <= 800; x += 4) {
    const y = 20 + w(2 + c, x) * 8 + w(9 + c * 2, x + c * 13) * 4 + (w(5 + c, x + c * 40) > 0.985 ? -12 : 0)
    d += ` L${x} ${y.toFixed(1)}`
  }
  return d
})
const colors = ['#22d3ee', '#a78bfa', '#f472b6', '#34d399', '#fbbf24']

export default function Research() {
  return (
    <section className="section" id="research">
      <SectionHeading eyebrow="05 — Research" title="Controlling a cursor with your mind" />

      <Reveal className="research-card glass">
        <div className="eeg" aria-hidden="true">
          {channels.map((d, i) => (
            <svg key={i} viewBox="0 0 400 40" preserveAspectRatio="none">
              <motion.path
                d={d}
                fill="none"
                stroke={colors[i]}
                strokeWidth="1.4"
                animate={{ x: [0, -400] }}
                transition={{ duration: 6 + i, repeat: Infinity, ease: 'linear' }}
              />
            </svg>
          ))}
        </div>

        <div className="research-content">
          <span className="research-icon"><ExperimentOutlined /></span>
          <h3>{research.title}</h3>
          <span className="project-tagline">{research.subtitle}</span>
          <ul>
            {research.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="tags">
            {research.tags.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
