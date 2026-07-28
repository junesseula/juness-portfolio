import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { nav, brand } from '../data/content.js'

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
          <a className="btn btn--small btn--primary nav__cta" href="/about#contact" onClick={() => setOpen(false)}>
            Resume
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
