import { FormEvent, useState } from 'react'
import { GithubFilled, LinkedinFilled, MailOutlined, PhoneOutlined, EnvironmentOutlined, SendOutlined } from '@ant-design/icons'
import { profile } from '../data/profile'
import { Reveal, SectionHeading } from './ui/primitives'

type Status = 'idle' | 'sending' | 'sent' | 'error'

// FormSubmit relays the form to this inbox as an email — no backend or API key needed.
// The very first submission triggers a one-time "Activate form" email to this address.
const ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const [mailto, setMailto] = useState(`mailto:${profile.email}`)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>
    if (data._honey) return // bot filled the hidden field

    const subject = data.subject || `Portfolio message from ${data.name}`
    setMailto(`mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`)}`)
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: subject,
          _replyto: data.email,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || String(json.success) !== 'true') throw new Error(json.message || `Request failed (${res.status})`)
      form.reset()
      setStatus('sent')
    } catch (err) {
      setError(err instanceof Error ? err.message : '')
      setStatus('error')
    }
  }

  const channels = [
    { icon: <MailOutlined />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: <PhoneOutlined />, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: <LinkedinFilled />, label: 'LinkedIn', value: 'sachindukavishka7070', href: profile.links.linkedin },
    { icon: <GithubFilled />, label: 'GitHub', value: 'sachinduKavi', href: profile.links.github },
  ]

  return (
    <section className="section" id="contact">
      <SectionHeading
        eyebrow="07 — Contact"
        title="Let's build something together"
        subtitle="Have a role, a project or an idea? My inbox is always open."
      />

      <div className="contact-grid">
        <Reveal className="contact-info">
          {channels.map((c) => (
            <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-channel glass">
              <span className="channel-icon">{c.icon}</span>
              <span>
                <small>{c.label}</small>
                <strong>{c.value}</strong>
              </span>
            </a>
          ))}
          <div className="contact-channel glass static">
            <span className="channel-icon"><EnvironmentOutlined /></span>
            <span>
              <small>Based in</small>
              <strong>{profile.location}</strong>
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="contact-form glass" onSubmit={onSubmit}>
            <div className="field-row">
              <label className="field">
                <input name="name" required placeholder=" " autoComplete="name" />
                <span>Your name</span>
              </label>
              <label className="field">
                <input name="email" type="email" required placeholder=" " autoComplete="email" />
                <span>Email</span>
              </label>
            </div>
            <label className="field">
              <input name="subject" placeholder=" " />
              <span>Subject</span>
            </label>
            <label className="field">
              <textarea name="message" required rows={5} placeholder=" " />
              <span>Message</span>
            </label>
            <button type="submit" className="btn btn-primary btn-block" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : <>Send message <SendOutlined /></>}
            </button>
            {status === 'sent' && <p className="form-note success">Thanks! Your message has been sent — I'll get back to you soon.</p>}
            {status === 'error' && <p className="form-note error">Something went wrong. Please email me directly at {profile.email}.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
