import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { GithubFilled, LinkedinFilled, MailFilled, ArrowUpOutlined, ArrowRightOutlined, DownloadOutlined } from '@ant-design/icons'
import { profile } from '../data/profile'
import cvUrl from '../assets/documents/CV_V11.pdf?url'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
]

const socials = [
  { label: 'GitHub', href: profile.links.github, icon: <GithubFilled /> },
  { label: 'LinkedIn', href: profile.links.linkedin, icon: <LinkedinFilled /> },
  { label: 'Email', href: `mailto:${profile.email}`, icon: <MailFilled /> },
]

// Live local time in Sri Lanka so visitors know when I'm likely to reply
function useColomboTime() {
  const format = () =>
    new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Colombo', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date())
  const [time, setTime] = useState(format)
  useEffect(() => {
    const id = window.setInterval(() => setTime(format()), 1000)
    return () => window.clearInterval(id)
  }, [])
  return time
}

// Button that is pulled toward the cursor
function MagneticButton({ href, children }: { href: string; children: ReactNode }) {
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 })
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 })

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.35)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a href={href} className="magnetic-btn" style={{ x, y }} onMouseMove={onMove} onMouseLeave={reset}>
      <span className="magnetic-fill" />
      <span className="magnetic-label">{children}</span>
    </motion.a>
  )
}

export default function Footer() {
  const { pathname } = useLocation()
  const href = (id: string) => (pathname === '/' ? `#${id}` : `/#${id}`)
  const time = useColomboTime()
  const nameRef = useRef<HTMLDivElement>(null)

  // Spotlight that follows the cursor across the giant name
  const onNameMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = nameRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <footer className="footer">
      <div className="footer-glow-line" />

      <div className="footer-inner">
        <motion.div
          className="footer-cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="eyebrow">What's next?</span>
            <h2>
              Got an idea? <br />
              <span className="gradient-text">Let's make it real.</span>
            </h2>
          </div>
          <MagneticButton href={pathname === '/' ? '#contact' : '/#contact'}>
            Start a conversation <ArrowRightOutlined />
          </MagneticButton>
        </motion.div>

        <div className="footer-grid">
          <div className="footer-col about-col">
            <Link to="/" className="brand">
              <span className="brand-mark">SK</span>
              <span className="brand-name">{profile.firstName}<span className="accent">.dev</span></span>
            </Link>
            <p>Backend developer crafting clean, scalable APIs with ASP.NET Core, Spring Boot and NestJS — plus mobile apps people actually use.</p>
            <a href={cvUrl} download="Sachindu_Kavishka_CV.pdf" className="footer-cv">
              <DownloadOutlined /> Download CV
            </a>
          </div>

          <nav className="footer-col" aria-label="Footer">
            <h4>Navigate</h4>
            {sections.map((s) => (
              <a key={s.id} href={href(s.id)} className="footer-link">
                <span>{s.label}</span>
              </a>
            ))}
          </nav>

          <div className="footer-col">
            <h4>Connect</h4>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="footer-link">
                {s.icon} <span>{s.label}</span>
                <ArrowRightOutlined className="link-arrow" />
              </a>
            ))}
          </div>

          <div className="footer-col">
            <h4>Right now</h4>
            <div className="now-card">
              <span className="now-row">
                <span className="pulse-dot" /> Open to opportunities
              </span>
              <span className="now-time">{time}</span>
              <span className="now-place">Local time · Negombo, Sri Lanka (GMT+5:30)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-name" ref={nameRef} onMouseMove={onNameMove} aria-hidden="true">
        <span>SACHINDU</span>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span className="built-with">Crafted with React · Three.js · Framer Motion</span>

        <a href={pathname === '/' ? '#home' : '/'} className="back-to-top" aria-label="Back to top" onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}>
          <svg viewBox="0 0 100 100" className="spin-text">
            <defs>
              <path id="circle-path" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
            </defs>
            <text>
              <textPath href="#circle-path">BACK TO TOP • BACK TO TOP • </textPath>
            </text>
          </svg>
          <ArrowUpOutlined className="back-arrow" />
        </a>
      </div>
    </footer>
  )
}
