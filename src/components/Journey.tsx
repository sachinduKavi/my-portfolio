import { BookOutlined, SafetyCertificateOutlined, TeamOutlined, TrophyOutlined } from '@ant-design/icons'
import { achievements, certifications, education, leadership } from '../data/profile'
import { Reveal, SectionHeading, TiltCard } from './ui/primitives'

export default function Journey() {
  return (
    <section className="section" id="journey">
      <SectionHeading eyebrow="06 — Journey" title="Education, leadership & wins" />

      <div className="journey-grid">
        <Reveal className="journey-col">
          <h3 className="col-title"><BookOutlined /> Education</h3>
          {education.map((e) => (
            <TiltCard key={e.school} className="journey-card glass" intensity={6}>
              <div className="journey-year">{e.year}</div>
              <h4>{e.school}</h4>
              <p>{e.detail}</p>
              {e.note && <span className="highlight">{e.note}</span>}
              <span className="muted">{e.location}</span>
            </TiltCard>
          ))}
        </Reveal>

        <Reveal className="journey-col" delay={0.1}>
          <h3 className="col-title"><TeamOutlined /> Leadership & Volunteering</h3>
          {leadership.map((l) => (
            <TiltCard key={l.role + l.org} className="journey-card glass" intensity={6}>
              {l.year && <div className="journey-year">{l.year}</div>}
              <h4>{l.role}</h4>
              <p>{l.org}</p>
            </TiltCard>
          ))}
        </Reveal>

        <Reveal className="journey-col" delay={0.2}>
          <h3 className="col-title"><TrophyOutlined /> Achievements</h3>
          {achievements.map((a) => (
            <TiltCard key={a.detail} className="journey-card glass" intensity={6}>
              {a.year && <div className="journey-year">{a.year}</div>}
              <h4>{a.title}</h4>
              <p>{a.detail}</p>
            </TiltCard>
          ))}

          <h3 className="col-title"><SafetyCertificateOutlined /> Certifications</h3>
          <div className="cert-list">
            {certifications.map((c) => (
              <div key={c.name} className="cert glass">
                <strong>{c.name}</strong>
                <span>{c.issuer}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
