import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section container notfound">
      <p className="eyebrow">404</p>
      <h1>This page wandered off.</h1>
      <p className="lede">Let's get you back on track.</p>
      <Link className="btn btn--primary" to="/">Back home</Link>
    </section>
  )
}
