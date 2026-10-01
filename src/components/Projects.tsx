import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ArrowRightOutlined } from '@ant-design/icons'
import { Project, projects } from '../data/profile'
import { Reveal, SectionHeading, TiltCard } from './ui/primitives'
import ProjectModal from './ProjectModal'

const palettes = [
  ['#22d3ee', '#6d28d9'],
  ['#f472b6', '#7c3aed'],
  ['#34d399', '#0ea5e9'],
  ['#fbbf24', '#ec4899'],
  ['#60a5fa', '#a78bfa'],
]

function Cover({ project, index }: { project: Project; index: number }) {
  if (project.image) {
    return <img className="project-cover" src={project.image} alt={project.name} loading="lazy" />
  }
  const [a, b] = palettes[index % palettes.length]
  return (
    <div className="project-cover generated" style={{ '--a': a, '--b': b } as never}>
      <span className="cover-initials">{project.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}</span>
      <span className="cover-grid" />
    </div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  const card = (p: Project, i: number) => (
    <Reveal key={p.name} delay={(i % 3) * 0.08}>
      <TiltCard className="project-card glass" onClick={() => setSelected(p)}>
        <div className="project-media">
          <Cover project={p} index={i} />
          {p.status && <span className="project-status">{p.status}</span>}
        </div>
        <div className="project-body">
          {p.org && <span className="project-org">{p.org}</span>}
          <h3>{p.name}</h3>
          <span className="project-tagline">{p.tagline}</span>
          <p>{p.summary}</p>
          <div className="tags">
            {p.tech.slice(0, 5).map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
          <span className="project-more">
            View details <ArrowRightOutlined />
          </span>
        </div>
      </TiltCard>
    </Reveal>
  )

  return (
    <section className="section" id="projects">
      <SectionHeading
        eyebrow="04 — Projects"
        title="Selected work"
        subtitle="Key projects from my CV — enterprise systems, fintech and platforms in production."
      />
      <div className="project-grid">{featured.map(card)}</div>

      <Reveal className="sub-heading">
        <h3>More things I've built</h3>
      </Reveal>
      <div className="project-grid compact">{others.map((p, i) => card(p, i + featured.length))}</div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
