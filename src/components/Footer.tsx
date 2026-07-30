import { Link } from 'react-router-dom'
import { brand } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__wordmark">{brand.name.toUpperCase()}</p>
          <p className="footer__role">{brand.role}</p>
        </div>

        <div className="footer__links">
          <Link to="/">Home</Link>
          <Link to="/case-studies">Case Studies</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="footer__contact">
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
          <p>{brand.location}</p>
          <div className="footer__socials">
            {brand.socials.map((s) => (
              <a key={s.label} href={s.href}>{s.label}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>&copy; {new Date().getFullYear()} {brand.name}. Built with React.</p>
      </div>
    </footer>
  )
}
