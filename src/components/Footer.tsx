import { GithubFilled, LinkedinFilled, MailFilled, ArrowUpOutlined } from '@ant-design/icons'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} {profile.name} · Designed & built with React + Three.js</span>
        <div className="socials">
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubFilled /></a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinFilled /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><MailFilled /></a>
          <a href="#home" aria-label="Back to top"><ArrowUpOutlined /></a>
        </div>
      </div>
    </footer>
  )
}
