import { journey, skills, aboutBio, brand } from '../data/content'

export default function About() {
  return (
    <>
      <section className="about-hero container about-hero--grid">
        <div>
          <p className="eyebrow">About</p>
          <h1>Hi, I'm Juness! I thrive on embracing new challenges.</h1>
          {aboutBio.map((p, i) => (
            <p className="lede" key={i} style={{ marginTop: i === 0 ? 20 : 14 }}>{p}</p>
          ))}
        </div>
        <div className="portrait-frame">
          <div className="portrait-frame__blob portrait-frame__blob--blue" />
          <div className="portrait-frame__blob portrait-frame__blob--maroon" />
          <div className="portrait-frame__image">
            <img src="/portrait1.jpg" alt="Juness Rulloda Portrait" />
          </div>
        </div>
      </section>

      <section className="section container" style={{ paddingTop: 24 }}>
        <p className="eyebrow">My journey</p>
        <div className="journey-grid">
          {journey.map((j) => (
            <div key={j.label}>
              <div className="value">{j.value}</div>
              <div className="label">{j.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section skills-section">
        <div className="container">
          <p className="eyebrow">Skills that drive impact</p>
          <h2 style={{ color: '#fff' }}>Where design meets execution.</h2>
          <div className="skills-grid">
            {skills.map((s) => (
              <div className="skill-card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container contact-cta" id="contact">
        <p className="eyebrow">Open to new opportunities</p>
        <h2>Open to explore new creative opportunities.</h2>
        <p className="lede">
          If you're building something ambitious and need a designer who can also
          ship the code, I'd love to hear about it.
        </p>
        <div className="btn-row">
          <a href={`mailto:${brand.email}`} className="btn btn--primary">{brand.email}</a>
        </div>
      </section>
    </>
  )
}
