import { useParams, Link, Navigate } from 'react-router-dom'
import { caseStudies, getCaseStudy } from '../data/caseStudies.js'

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const study = getCaseStudy(slug)

  if (!study) {
    return <Navigate to="/case-studies" replace />
  }

  const idx = caseStudies.findIndex((c) => c.slug === slug)
  const prev = caseStudies[(idx - 1 + caseStudies.length) % caseStudies.length]
  const next = caseStudies[(idx + 1) % caseStudies.length]

  return (
    <>
      <header className="csd-header container">
        <p className="eyebrow">Case Study</p>
        <h1>{study.name}</h1>
        <p className="lede" style={{ marginTop: 16 }}>{study.tagline}</p>

        <div className="csd-meta">
          <div>
            <div className="label">Category</div>
            <div className="value">{study.category}</div>
          </div>
          <div>
            <div className="label">Platform</div>
            <div className="value">{study.platform}</div>
          </div>
          <div>
            <div className="label">Role</div>
            <div className="value">{study.role}</div>
          </div>
          <div>
            <div className="label">Timeline</div>
            <div className="value">{study.timeline}</div>
          </div>
        </div>
      </header>

      <div className="container">
        <div
          className="csd-cover"
          style={{ background: `linear-gradient(140deg, ${study.accent}, ${study.secondaryAccent})` }}
        />
      </div>

      <div className="container">
        <div className="csd-stats">
          {study.stats.map((s) => (
            <div key={s.label}>
              <div className="value">{s.value}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="csd-block">
        <div className="container">
          <p className="kicker">01. RESEARCH</p>
          <h2>The problem</h2>
          <div className="body-grid">
            <p className="lead">{study.problem}</p>
            <div>
              <p className="lead" style={{ fontSize: 15, marginBottom: 20 }}>{study.research.body}</p>
              <blockquote className="pull-quote">
                &ldquo;{study.research.quote}&rdquo;
                <cite>{study.research.quoteAttribution}</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="csd-block">
        <div className="container">
          <p className="kicker">02. DESIGN SYSTEM</p>
          <h2>Visual language</h2>
          <div className="body-grid">
            <div>
              <p className="lead" style={{ fontSize: 15 }}>
                Every project gets its own accent within the broader design system —
                here it's built around {study.accentName} and {study.secondaryName}, paired with {study.typography}.
              </p>
              <div className="swatch-row">
                <div className="swatch" style={{ background: study.accent }}>
                  <span className="name">{study.accentName}</span>
                  <span className="hex">{study.accent}</span>
                </div>
                <div className="swatch" style={{ background: study.secondaryAccent }}>
                  <span className="name">{study.secondaryName}</span>
                  <span className="hex">{study.secondaryAccent}</span>
                </div>
              </div>
            </div>
            <div className="type-sample">
              <div className="big">Aa</div>
              <div className="small">{study.typography} &mdash; headings &amp; body</div>
            </div>
          </div>
        </div>
      </section>

      <section className="csd-block">
        <div className="container">
          <p className="kicker">03. IMPLEMENTATION</p>
          <h2>How it got built</h2>
          <div className="steps">
            {study.implementation.map((step, i) => (
              <div className="step" key={step.title}>
                <div className="index">STEP 0{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="csd-block" style={{ borderBottom: 'none' }}>
        <div className="container">
          <p className="kicker">04. RESULTS</p>
          <h2>What changed</h2>
          <p className="lead" style={{ marginBottom: 28 }}>{study.results.body}</p>
          <div className="results-grid">
            {study.stats.map((s) => (
              <div className="cell" key={s.label}>
                <div className="value">{s.value}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
          <blockquote className="pull-quote" style={{ marginTop: 32 }}>
            &ldquo;{study.results.quote}&rdquo;
            <cite>{study.results.quoteAttribution}</cite>
          </blockquote>
        </div>
      </section>

      <section className="csd-cta container">
        <h2>Ready to build something exceptional?</h2>
        <p className="lede" style={{ margin: '0 auto' }}>
          Let's talk about what you're working on and whether it's a fit.
        </p>
        <div className="btn-row">
          <a href="/about#contact" className="btn btn--primary">Get in touch</a>
          <Link to="/case-studies" className="btn btn--secondary">Browse more work</Link>
        </div>
      </section>

      <nav className="csd-pager container">
        <Link to={`/case-studies/${prev.slug}`}>&larr; {prev.name}</Link>
        <Link to={`/case-studies/${next.slug}`}>{next.name} &rarr;</Link>
      </nav>
    </>
  )
}
