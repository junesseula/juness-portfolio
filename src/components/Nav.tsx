import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { nav, brand } from '../data/content'

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header className="nav">
      <div className="nav__inner container">
        <Link to="/" className="nav__logo" onClick={() => setOpen(false)}>
          {brand.name}
        </Link>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {nav.map((item) => (
            <a key={item.label} href={item.to} className="nav__link" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="btn btn--small btn--primary nav__cta"
            href="/Juness%20Rulloda%20Resume.pdf"
            download="Juness Rulloda Resume.pdf"
            onClick={() => setOpen(false)}
          >
            Download Resume
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
