import { motion } from 'framer-motion'
import { GithubFilled, LinkedinFilled, MailFilled, EnvironmentOutlined, DownloadOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { profile } from '../data/profile'
import { useTypewriter } from './ui/useTypewriter'
import cvUrl from '../assets/documents/CV_V11.pdf?url'
import { INTRO_DELAY } from './effects/intro'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: INTRO_DELAY } } }
const item = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const role = useTypewriter(profile.roles)

  return (
    <section className="hero" id="home">
      <motion.div className="hero-content" variants={container} initial="hidden" animate="show">
        <motion.span variants={item} className="status-pill">
          <span className="pulse-dot" /> Open to opportunities
        </motion.span>

        <motion.h1 variants={item}>
          Hi, I'm <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        <motion.div variants={item} className="typewriter">
          <span className="prompt">&gt;</span> {role}
          <span className="caret" />
        </motion.div>

        <motion.p variants={item} className="hero-lead">
          I design and build scalable APIs with <strong>Clean Architecture</strong> — ASP.NET Core as my primary stack,
          plus Spring Boot, NestJS and cross-platform mobile apps shipped to the Play Store.
        </motion.p>

        <motion.div variants={item} className="hero-meta">
          <EnvironmentOutlined /> {profile.location}
        </motion.div>

        <motion.div variants={item} className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View my work <ArrowRightOutlined />
          </a>
          <a href={cvUrl} download="Sachindu_Kavishka_CV.pdf" className="btn btn-ghost">
            <DownloadOutlined /> Download CV
          </a>
        </motion.div>

        <motion.div variants={item} className="socials">
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubFilled /></a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinFilled /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><MailFilled /></a>
        </motion.div>
      </motion.div>

      <a href="#about" className="scroll-cue" aria-label="Scroll down">
        <span className="mouse"><span className="wheel" /></span>
      </a>
    </section>
  )
}
