import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { profile } from '../data/profile'

const links = [
  { href: 'about', label: 'About' },
  { href: 'experience', label: 'Experience' },
  { href: 'skills', label: 'Skills' },
  { href: 'projects', label: 'Projects' },
  { href: 'research', label: 'Research' },
  { href: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently in view
  useEffect(() => {
    if (!onHome) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach((l) => {
      const el = document.getElementById(l.href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [onHome])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const href = (id: string) => (onHome ? `#${id}` : `/#${id}`)

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">SK</span>
          <span className="brand-name">{profile.firstName}<span className="accent">.dev</span></span>
        </Link>

        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={href(l.href)} className={active === l.href ? 'active' : ''}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <Link to="/resume" className="btn btn-small btn-outline">Resume</Link>
          <button className={`burger ${open ? 'open' : ''}`} aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu"
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={href(l.href)}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.1 + i * 0.05 } }}
              >
                <span className="menu-index">0{i + 1}</span>
                {l.label}
              </motion.a>
            ))}
            <Link to="/resume" className="btn btn-primary" onClick={() => setOpen(false)}>View Resume</Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
