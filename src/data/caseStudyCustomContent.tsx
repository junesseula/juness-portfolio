import * as thisPortfolio from './thisPortfolio'
import * as inspectionsApplication from './inspectionsApplication'

export interface CaseStudyCustomContent {
  research?: () => JSX.Element
  design?: () => JSX.Element
  implementation?: () => JSX.Element
  results?: () => JSX.Element
}

// Maps a case study slug to its custom per-section content.
export const caseStudyCustomContent: Record<string, CaseStudyCustomContent> = {
  'vibe-coding-this-portfolio': {
    research: thisPortfolio.Research,
    design: thisPortfolio.Design,
    implementation: thisPortfolio.Implementation,
    results: thisPortfolio.Results,
  },
  'inspections-application': {
    results: inspectionsApplication.Results,
  },
}
