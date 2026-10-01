import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { LinkOutlined } from '@ant-design/icons'
import { experience, shippedSites } from '../data/profile'
import { Reveal, SectionHeading } from './ui/primitives'

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const fill = useSpring(scrollYProgress, { stiffness: 100, damping: 25 })

  return (
    <section className="section" id="experience">
      <SectionHeading
        eyebrow="02 — Experience"
        title="Where I've built things"
        subtitle="From enterprise ERP microservices to production mobile banking — across four teams since 2023."
      />

      <div className="timeline" ref={ref}>
        <div className="timeline-track">
          <motion.div className="timeline-fill" style={{ scaleY: fill }} />
        </div>

        {experience.map((job, i) => (
          <div className={`timeline-item ${i % 2 ? 'right' : 'left'}`} key={job.company}>
            <span className="timeline-node" />
            <Reveal className="timeline-card glass" y={60}>
              <div className="timeline-date">{job.start} — {job.end}</div>
              <h3>{job.role}</h3>
              <div className="timeline-company">
                {job.company} <span>· {job.location}</span>
              </div>
              <ul>
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="tags">
                {job.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          </div>
        ))}
      </div>

      <Reveal className="shipped">
        <h4>Shipped to production</h4>
        <div className="marquee">
          <div className="marquee-track">
            {[...shippedSites, ...shippedSites].map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noreferrer" className="site-pill" tabIndex={i >= shippedSites.length ? -1 : 0}>
                <LinkOutlined /> {s.name}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
