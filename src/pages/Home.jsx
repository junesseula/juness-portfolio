import { Link } from 'react-router-dom'
import { heroStats, valueProps, testimonial } from '../data/content.js'
import { caseStudies } from '../data/caseStudies.js'

export default function Home() {
  const featured = caseStudies.slice(0, 3)

  return (
    <>
      <section className="hero container">
        <div className="hero__grid">
          <div>
            <p className="eyebrow">Available for select engagements</p>
            <h1>Hi, I'm Juness — a product designer who builds with code.</h1>
            <p className="lede" style={{ marginTop: 20 }}>
              I design purposeful digital experiences — from discovery and research
              to high-fidelity prototypes and production-ready code.
            </p>
            <div className="btn-row">
              <a href="#work" className="btn btn--primary">View Selected Work</a>
              <Link to="/case-studies" className="btn btn--secondary">See Case Studies</Link>
            </div>
          </div>
          <div className="hero__art" aria-hidden="true">
            <div className="blob blob--blue" />
            <div className="blob blob--maroon" />
            <span className="chip">DESIGN &times; CODE</span>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="statbar">
          {heroStats.map((s) => (
            <div className="statbar__item" key={s.label}>
              <div className="value">{s.value}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <p className="eyebrow">Why work with me</p>
        <h2>Design that survives contact with reality.</h2>
        <div className="props-grid">
          {valueProps.map((p) => (
            <div className="prop-card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container" id="work">
        <div className="section-head">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>A few recent case studies.</h2>
          </div>
          <Link to="/case-studies" className="btn btn--secondary">All case studies</Link>
        </div>

        <div className="work-grid">
          {featured.map((cs) => (
            <Link to={`/case-studies/${cs.slug}`} className="work-card" key={cs.slug}>
              <div
                className="work-card__cover"
                style={{ background: `linear-gradient(150deg, ${cs.accent}, ${cs.accentSoft})` }}
              >
                <span className="tag">{cs.category}</span>
              </div>
              <div className="work-card__body">
                <h3>{cs.name}</h3>
                <p>{cs.tagline}</p>
                <div className="work-card__meta">
                  <span>{cs.platform}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="testimonial">
          <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
          <cite>{testimonial.attribution}</cite>
        </div>
      </section>
    </>
  )
}
