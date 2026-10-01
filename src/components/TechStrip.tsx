import { skillGroups } from '../data/profile'

const all = skillGroups.flatMap((g) => g.items.map((name) => ({ name, color: g.color })))
const half = Math.ceil(all.length / 2)
const rows = [all.slice(0, half), all.slice(half)]

// Two tilted ribbons of tech scrolling in opposite directions
export default function TechStrip() {
  return (
    <div className="tech-strip" aria-label="Technologies I work with">
      {rows.map((row, r) => (
        <div className={`tech-ribbon ${r ? 'reverse' : ''}`} key={r}>
          <div className="tech-track">
            {[...row, ...row].map((t, i) => (
              <span className="tech-item" key={i} aria-hidden={i >= row.length}>
                <span className="tech-star" style={{ color: t.color }}>✦</span>
                {t.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
