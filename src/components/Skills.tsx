import { lazy, Suspense } from 'react'
import { skillGroups } from '../data/profile'
import { Reveal, SectionHeading } from './ui/primitives'

const SkillsGlobe = lazy(() => import('./three/SkillsGlobe'))

export default function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeading
        eyebrow="03 — Skills"
        title="My technical universe"
        subtitle="ASP.NET Core and C# are my primary stack — everything else orbits around them."
      />

      <div className="skills-grid">
        <Reveal className="globe-wrap">
          <Suspense fallback={<div className="globe-loading">Loading 3D…</div>}>
            <SkillsGlobe />
          </Suspense>
          <span className="globe-hint">Drag to spin</span>
        </Reveal>

        <div className="skill-groups">
          {skillGroups.map((g, i) => (
            <Reveal key={g.name} delay={i * 0.05} className="skill-group glass">
              <h4 style={{ color: g.color }}>
                <span className="dot" style={{ background: g.color, boxShadow: `0 0 12px ${g.color}` }} />
                {g.name}
              </h4>
              <div className="tags">
                {g.items.map((s) => (
                  <span className="tag" key={s} style={{ '--tag': g.color } as never}>{s}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
