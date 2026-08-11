import { Link } from 'react-router-dom'
import { Box, Image, chakra } from '@chakra-ui/react'
import { valueProps, valuePropsIntro, testimonial } from '../data/content'
import { caseStudies } from '../data/caseStudies'

const eyebrowText = 'Available for hire'
const eyebrowStartDelayMs = 200
const letterStaggerMs = 100

const valueIcons = [
  'https://storage.googleapis.com/storage.magicpath.ai/user/432624603182026752/figma-assets/e046b829-1e9f-4a78-b767-306a94dab4d8.svg',
  'https://storage.googleapis.com/storage.magicpath.ai/user/432624603182026752/figma-assets/8cb765cf-0859-4787-a50b-23d769f1233c.svg',
  'https://storage.googleapis.com/storage.magicpath.ai/user/432624603182026752/figma-assets/bcaa7c10-e3e6-41f7-a878-9b82343444c5.svg',
]
const valueColors = ['var(--mp-blue)', 'var(--mp-maroon)', 'var(--mp-orange)']

export default function Home() {
  const featured = [
    ...caseStudies.filter((cs) => cs.featured),
    ...caseStudies.filter((cs) => !cs.featured),
  ].slice(0, 5)

  return (
    <div className="mp-page">
      <section className="mp-hero">
        <div className="mp-hero__inner">
          <div className="mp-hero__content">
            <Box as="p" className="mp-eyebrow mp-hero__eyebrow" aria-label={eyebrowText}>
              {eyebrowText.split('').map((char, i) => (
                <Box
                  as="span"
                  key={i}
                  aria-hidden="true"
                  display="inline-block"
                  animationName="fade-in"
                  animationDuration="fast"
                  animationTimingFunction="ease-in-smooth"
                  animationFillMode="both"
                  animationDelay={`${eyebrowStartDelayMs + i * letterStaggerMs}ms`}
                >
                  {char === ' ' ? ' ' : char}
                </Box>
              ))}
              <Box
                as="span"
                aria-hidden="true"
                display="inline-block"
                width="2px"
                height="1em"
                marginLeft="4px"
                marginBottom="2px"
                bg="currentColor"
                verticalAlign="text-bottom"
                animationName="pulse"
                animationDuration="1s"
                animationTimingFunction="ease-in-out"
                animationIterationCount="infinite"
                animationDelay={`${eyebrowStartDelayMs + eyebrowText.length * letterStaggerMs + 150}ms`}
              />
            </Box>
            <h1>Hi, I&rsquo;m Juness, a UX Designer who builds with code.</h1>
            <p className="mp-hero__lede">
              I design purposeful visual experiences across digital and print, bridging the gap
              between high-fidelity craftsmanship and technical execution.
            </p>
            <div className="btn-row">
              <chakra.a
                href="#work"
                className="btn btn--mp-primary"
                animationName="slide-from-bottom-full, fade-in"
                animationDuration="slowest"
                animationTimingFunction="ease-in-smooth"
                animationFillMode="both"
                animationDelay="300ms"
              >
                View Selected Work
              </chakra.a>
            </div>
          </div>
        </div>
        <Image
          src="/portrait-main.png"
          alt="Juness Rulloda"
          className="mp-hero__portrait"
          animationName="slide-from-right-full, fade-in"
          animationDuration="1.2s"
          animationTimingFunction="ease-in-smooth"
          animationFillMode="both"
        />
      </section>

      <section className="mp-values">
        <div className="mp-values__inner">
          <div className="mp-values__head">
            <p className="mp-eyebrow mp-values__eyebrow">The value proposition</p>
            <h2>Why I might be a good fit for your next project</h2>
            <p className="mp-values__intro">{valuePropsIntro}</p>
          </div>
          <div className="mp-values__grid">
            {valueProps.map((p, i) => (
              <div className="mp-value-card" key={p.title}>
                <div className="mp-value-card__icon" style={{ background: valueColors[i] }}>
                  <img src={valueIcons[i]} alt="" />
                </div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mp-deepdive">
        <div className="mp-deepdive__inner">
          <div className="mp-deepdive__media">
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/432624603182026752/figma-assets/b979bd29-96a4-46a1-82cb-4082e857b9c4.jpg"
              alt="Designing this portfolio"
            />
          </div>
          <div className="mp-deepdive__content">
            <p className="mp-eyebrow mp-deepdive__eyebrow">Workflow Deep Dive</p>
            <h2>Featured Case Study: This Portfolio</h2>
            <p>
              What you're looking at is the case study: &ldquo;vibe coding&rdquo; taken seriously — my design-to-code process, accelerated by AI, pushed all the way to a live, production-ready site.
            </p>
            <div className="mp-deepdive__tags">
              {['Research', 'Vibe Coding', 'Development'].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <Link to="case-studies/vibe-coding-this-portfolio" className="mp-deepdive__link">
              Learn More
            </Link>
            <Link to="/case-studies" className="mp-deepdive__link">
              Explore Other Work
            </Link>
          </div>
        </div>
      </section>

      <section className="mp-work" id="work">
        <div className="mp-work__inner">
          <div className="mp-work__head">
            <div className="mp-work__headcopy">
              <p className="mp-eyebrow mp-work__eyebrow">Archive</p>
              <h2>Selected Work</h2>
            </div>
            <Link to="/case-studies" className="mp-work__viewall">
              View All Projects
            </Link>
          </div>

          <div className="mp-work__grid">
            {featured.map((cs) => (
              <Link to={`/case-studies/${cs.slug}`} className="mp-work-card" key={cs.slug}>
                <div
                  className="mp-work-card__cover"
                  style={
                    cs.coverImage
                      ? {
                          backgroundImage: `url(${cs.coverImage})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }
                      : { background: `linear-gradient(150deg, ${cs.accent}, ${cs.accentSoft})` }
                  }
                >
                  <span className="tag">{cs.category}</span>
                </div>
                <p className="mp-work-card__category">{cs.platform}</p>
                <h3 className="cs-title">{cs.name}</h3>
                <p>{cs.tagline}</p>
              </Link>
            ))}

            <div className="mp-work-cta">
              <h3>Let&rsquo;s create something together</h3>
              <p>Currently open to new creative opportunities and design collaborations.</p>
              <Link to="/about#contact">Get in touch</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mp-motto">
        <div className="mp-motto__inner">
          <p className="mp-eyebrow mp-motto__eyebrow">Motto</p>
          <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
          <cite>{testimonial.attribution}</cite>
        </div>
      </section>
    </div>
  )
}
