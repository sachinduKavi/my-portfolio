import { profile } from '../data/profile'
import { Counter, Reveal, SectionHeading, TiltCard } from './ui/primitives'

export default function About() {
  return (
    <section className="section" id="about">
      <SectionHeading eyebrow="01 — About" title="Engineering backends that scale" />

      <div className="about-grid">
        <Reveal className="about-photo-wrap">
          <TiltCard className="about-photo" intensity={14}>
            <div className="photo-ring" />
            <img src={profile.photo} alt={profile.name} loading="lazy" />
            <div className="photo-badge">
              <strong>{profile.title}</strong>
              <span>.NET · Java · Mobile</span>
            </div>
          </TiltCard>
        </Reveal>

        <div className="about-text">
          {profile.summary.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p>{p}</p>
            </Reveal>
          ))}

          <div className="stats">
            {profile.stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 * i} className="stat glass">
                <div className="stat-value gradient-text">
                  <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
                </div>
                <div className="stat-label">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
