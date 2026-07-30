import type { ResourceLink } from '../data/caseStudies'

interface MoreResourcesProps {
  items?: ResourceLink[]
}

export default function MoreResources({ items }: MoreResourcesProps) {
  if (!items || items.length === 0) return null

  return (
    <div className="more-resources">
      <h3>More Resources</h3>
      <div className="more-resources__grid">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="more-resources__card"
          >
            <span className="more-resources__label">{item.label}</span>
            {item.description && <p>{item.description}</p>}
            <span className="more-resources__link">View resource &rarr;</span>
          </a>
        ))}
      </div>
    </div>
  )
}
