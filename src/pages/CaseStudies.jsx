import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies.js'

export default function CaseStudies() {
  return (
    <>
      <section className="cs-hero container">
        <p className="eyebrow">Case studies</p>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}>Crafting digital experiences that matter.</h1>
        <p className="lede" style={{ marginTop: 20 }}>
          A closer look at how research, design systems, and hands-on implementation
          come together across a few recent projects.
        </p>
      </section>

      <section className="section container" style={{ paddingTop: 24 }}>
        <div className="cs-grid">
          {caseStudies.map((cs, i) => (
            <Link to={`/case-studies/${cs.slug}`} className="cs-card" key={cs.slug}>
              <div
                className="cs-card__cover"
                style={{ background: `linear-gradient(150deg, ${cs.accent}, ${cs.secondaryAccent})` }}
              >
                <span className="num">0{i + 1}</span>
                <span className="name">{cs.name}</span>
              </div>
              <div className="cs-card__body">
                <h3>{cs.tagline}</h3>
                <p>{cs.summary}</p>
                <div className="cs-card__tags">
                  <span>{cs.category}</span>
                  <span>{cs.platform}</span>
                  <span>{cs.timeline}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
