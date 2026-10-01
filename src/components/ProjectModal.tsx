import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CloseOutlined, GithubFilled, LinkedinFilled, GlobalOutlined, PlayCircleFilled } from '@ant-design/icons'
import { LinkKind, Project } from '../data/profile'

const icons: Record<LinkKind, JSX.Element> = {
  github: <GithubFilled />,
  linkedin: <LinkedinFilled />,
  live: <GlobalOutlined />,
  video: <PlayCircleFilled />,
}

type Media = { type: 'image' | 'video'; id: string }

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const media: Media[] = [
    ...(project.image ? [{ type: 'image' as const, id: project.image }] : []),
    ...(project.images ?? []).map((id) => ({ type: 'image' as const, id })),
    ...(project.videos ?? []).map((id) => ({ type: 'video' as const, id })),
  ]
  const [current, setCurrent] = useState<Media | undefined>(media[0])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div className="modal-backdrop" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div
        className="modal glass"
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.85, rotateX: 20, y: 40 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, rotateX: -10, y: 30 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformPerspective: 1200 }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <CloseOutlined />
        </button>

        <div className="modal-header">
          {project.org && <span className="project-org">{project.org}</span>}
          <h2>{project.name}</h2>
          <span className="project-tagline">{project.tagline}</span>
        </div>

        {current && (
          <div className="modal-media">
            {current.type === 'image' ? (
              <img src={current.id} alt={project.name} />
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${current.id}`}
                title={`${project.name} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        )}

        {media.length > 1 && (
          <div className="thumbs">
            {media.map((m) => (
              <button
                key={m.id}
                className={`thumb ${current?.id === m.id ? 'active' : ''}`}
                onClick={() => setCurrent(m)}
                aria-label={m.type === 'video' ? 'Play video' : 'Show image'}
              >
                <img src={m.type === 'image' ? m.id : `https://img.youtube.com/vi/${m.id}/mqdefault.jpg`} alt="" loading="lazy" />
                {m.type === 'video' && <PlayCircleFilled className="thumb-play" />}
              </button>
            ))}
          </div>
        )}

        <div className="modal-body">
          <p>{project.summary}</p>
          {project.points && (
            <ul>
              {project.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}
          <div className="tags">
            {project.tech.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
          {project.links && project.links.length > 0 && (
            <div className="modal-links">
              {project.links.map((l) => (
                <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="btn btn-small btn-outline">
                  {icons[l.kind]} {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
