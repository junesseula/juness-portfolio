export interface CaseStudyStat {
  value: string
  label: string
}

export interface ImplementationStep {
  title: string
  body: string
}

export interface ResourceLink {
  label: string
  description?: string
  url: string
}

export interface Testimonial {
  quote: string
  name: string
  title?: string
}

export interface CaseStudy {
  slug: string
  name: string
  tagline: string
  category: string
  platform: string
  role: string
  timeline: string
  featured?: boolean
  accent: string
  accentSoft: string
  accentName: string
  secondaryAccent: string
  secondaryName: string
  coverImage?: string
  implementationImage?: string
  liveUrl?: string
  figmaUrl?: string
  summary: string
  stats: CaseStudyStat[]
  problem: string
  research: {
    body: string
    quote?: string
    quoteAttribution?: string
  }
  typography: string
  implementation: ImplementationStep[]
  moreResources?: ResourceLink[]
  testimonials?: Testimonial[]
  results: {
    body: string
    quote?: string
    quoteAttribution?: string
  }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'vibe-coding-this-portfolio',
    name: 'This Portfolio',
    tagline: 'Case Study: This Portfolio',
    category: 'AI-Assisted Design & Development',
    platform: 'Web',
    role: 'Designer & Vibe Coder',
    timeline: '2026',
    featured: true,
    accent: '#3355FF',
    accentSoft: '#E8ECFF',
    accentName: 'Electric Blue',
    secondaryAccent: '#8B2E3F',
    secondaryName: 'Signal Maroon',
    figmaUrl: 'https://www.figma.com/design/dVo9Pw0d8KLDkKxv5KoHc2/Mahjong-Tayo-Library?node-id=395-1711&t=ddBaKcJcPxHAglSV-11',
    summary:
      "The story of how this exact site got made — from Google Stitch's early AI-generated iterations, through a Figma refinement pass, into MagicPath, and finally vibe-coded into production with Claude Code.",
    stats: [
      { value: '4', label: 'Tools chained together (Stitch, Figma, MagicPath, Claude Code)' },
      { value: '>4 hrs', label: 'From ideation to running web app' },
      { value: 'Figma → Code', label: 'Full design-to-dev pipeline' },
      { value: 'This Site', label: 'The actual result you\'re looking at' },
    ],
    problem:
      "Most \"vibe coded\" sites either skip design entirely or skip real content entirely — AI-generated layouts with lorem-ipsum case studies. I wanted to prove the workflow could go all the way: real design refinement, real production code, and real client work, with no step faked.",
    research: {
      body: "The process started with Google Stitch, Google's AI UI-generation tool, used to rapidly generate early visual directions for the portfolio — exploring layout and structure fast instead of starting from a blank canvas. The strongest direction was then exported into Figma and refined by hand: typography, spacing, hierarchy, and content, with full manual design control.",
      quote: 'Speed gets you a direction. Refinement gets you a product.',
    },
    typography: 'Plus Jakarta Sans',
    implementation: [
      {
        title: 'Vibe Coding',
        body: 'The MagicPath skill was installed into Claude Code, letting it reference the MagicPath canvas frames directly and use them to scaffold and build this production React + Vite codebase.',
      },
      {
        title: 'Editorial Refinement',
        body: 'Each real case study — Cirrus, Inspections Application, Surefund — was individually researched from its real source and rewritten into the site\'s voice, with no invented metrics or quotes.',
      },
      {
        title: 'Asset Pipeline',
        body: 'The Electric Blue / Plus Jakarta Sans design system flowed from the original Figma and MagicPath explorations straight into the coded design tokens, keeping the shipped site visually consistent with the earliest design direction.',
      },
    ],
    results: {
      body: 'The result is this site: a fully responsive, four-page portfolio — home, case studies, detail pages, and about — that went from AI-generated first drafts to a production codebase with real client work, without skipping the design or the editorial pass.',
    },
  },
  {
    slug: 'cirrus',
    name: 'Cirrus',
    tagline: 'A Cloud-Inspired Design System for Regulatory SaaS',
    category: 'Design Systems / Branding',
    platform: 'Figma · Storybook · GitHub',
    role: 'Design Systems Lead',
    timeline: '2025',
    accent: '#782B90',
    accentSoft: '#F1E4F5',
    accentName: 'Cirrus Purple',
    secondaryAccent: '#E20083',
    secondaryName: 'Thentia Fuchsia',
    coverImage: '/cirrus-design-system.png',
    summary:
      "A cloud-inspired, atomic design system that cut design-related QA bugs by ~40% and sped up delivery across Thentia's regulatory SaaS platform.",
    stats: [
      { value: '~40%', label: 'Fewer design-related QA bugs' },
      { value: '~10%', label: 'More tickets completed per sprint' },
      { value: 'Figma → GitHub', label: 'Design token sync' },
      { value: 'Storybook', label: 'Component documentation' },
    ],
    problem:
      "Thentia Cloud is a SaaS provider for regulation and government, helping agencies eliminate paper processes for applications, licensing, permitting, complaints, inspections, investigations, and disciplinary action. The task was to create a new design system to streamline cross-functional collaboration and improve efficiency across design, development, and product teams.",
    research: {
      body: "The project began with in-depth research into Thentia's existing design practices, challenges, and the needs of both designers and engineers. The Cirrus design system included reusable UI components, standardized interaction patterns, and a shared visual language. The intention was to reduce redundant coding, improve design consistency, and foster smoother handoffs between design and development teams. Integrating Cirrus into the product development lifecycle enabled faster prototyping, quicker iteration, and a unified design approach that improved both internal workflows and the user experience across Thentia's platform.",
      quote: 'Cirrus clouds are high-altitude clouds made of ice crystals that look like wispy, white strands.',
      quoteAttribution: 'Cirrus cloud, definition',
    },
    typography: 'Inter',
    implementationImage: '/cirrus-design-system.png',
    implementation: [
      {
        title: 'Token Sync Pipeline',
        body: 'Using the Tokens Studio plugin for Figma, design tokens were synced with CSS variables in GitHub — a color or spacing change in Figma pushes to GitHub and is reflected in code automatically, laying the infrastructure for future client theming.',
      },
      {
        title: 'Atomic Component Library',
        body: "Reusable, independent components — buttons, forms, typography, color schemes — built on atomic design principles so updates propagate automatically everywhere they're used, and everyone at Thentia speaks the same design language.",
      },
      {
        title: 'Storybook Documentation',
        body: 'Each UI component in Figma has linked documentation directly in Dev Mode to the UI library in Storybook, so developers can find the exact code they need straight from the design file.',
      },
    ],
    results: {
      body: 'Cirrus cut design-related QA bugs by roughly 40% and helped teams complete about 10% more tickets per sprint, while enabling faster prototyping, quicker iteration, and a unified design approach across Thentia\'s platform.',
      quote: 'A unified design approach that improved both internal workflows and the user experience across Thentia\'s platform.',
      quoteAttribution: 'From the Cirrus case study',
    },
  },
  {
    slug: 'inspections-application',
    name: 'Inspections Application',
    tagline: 'An Offline-First Mobile App for Field Inspectors',
    category: 'Mobile, UI/UX, Web Design',
    platform: 'Mobile (offline-first)',
    role: 'Mobile / Product Designer',
    timeline: '2024',
    accent: '#782B90',
    accentSoft: '#F1E4F5',
    accentName: 'Cirrus Purple',
    secondaryAccent: '#E20083',
    secondaryName: 'Thentia Fuchsia',
    coverImage: '/inspections-application-cover.png',
    summary:
      'An offline-first mobile app that lets Thentia Cloud inspectors complete full inspections — checklists, violations, signatures — with no connectivity required.',
    stats: [
      { value: '2024', label: 'Project year' },
      { value: 'Offline-first', label: 'Core design constraint' },
      { value: 'Mobile · UI/UX · Web', label: 'Scope of work' },
      { value: 'Figma Prototype', label: 'Interactive deliverable' },
    ],
    problem:
      "Thentia Cloud is a SaaS provider for regulation and government, helping agencies eliminate paper processes for applications, licensing, permitting, complaints, inspections, investigations, and disciplinary action. The task was to design a mobile application that aligned with the existing web portal and data infrastructure, allowing inspectors to perform inspections offline and in remote locations.",
    research: {
      body: "The design approach started from two guiding questions: what does the user want or need to do, and what needs to be collected or performed by the user to accomplish that goal. That led to a set of core user stories — an inspector needing to perform inspections in remote areas without reliable wifi or mobile connection, to see and download inspections scheduled for today and this week for offline use, and to perform the inspection itself: collecting meeting details, working through checklist items in chronological or random order, attaching fines or violations, and collecting signatures. An interactive journey map was built to map this flow end to end.",
      quote: 'When starting any project, design and solutions should be outcome based.',
      quoteAttribution: 'Design approach, Inspections Application case study',
    },
    typography: 'Inter',
    implementation: [
      {
        title: 'Offline-First Architecture',
        body: 'Inspections can be downloaded and completed with no wifi or mobile connection, built from the ground up for remote and field conditions.',
      },
      {
        title: 'Inspection Checklist Flow',
        body: 'A structured flow covers meeting details, chronological or random-order checklist items, attaching fines or violations, and collecting signatures.',
      },
      {
        title: 'Annotated Prototype Handoff',
        body: 'A fully annotated Figma design file in dev mode, plus a clickable prototype, documents detailed UX decisions for engineering handoff.',
      },
    ],
    moreResources: [
      {
        label: 'Interactive Journey Map',
        description: 'Maps the inspector user flow, from the guiding questions through to the resulting user stories.',
        url: 'https://www.figma.com/design/yIYTZksStQgG82FOK3qdlk/Interactive-Journey-Map-(Community)?node-id=1440-2031',
      },
      {
        label: 'Annotated Design File',
        description: 'A fully annotated Figma file in dev mode, documenting detailed UX decisions for engineering handoff.',
        url: 'https://www.figma.com/design/qIbZ7RrJRIwV13dseouBd6/Inspections-App-Prototype?node-id=0-1&m=dev&t=wRkfnvEjVxlyURss-1',
      },
      {
        label: 'Clickable Prototype',
        description: 'An interactive Figma prototype for visualizing the flow and interactions.',
        url: 'https://www.figma.com/proto/qIbZ7RrJRIwV13dseouBd6/Inspections-App-Prototype?node-id=0-1&t=cYcwwBpwG4Et4EL0-1',
      },
    ],
    results: {
      body: "The result is a mobile experience that mirrors Thentia's existing web portal and data infrastructure, giving inspectors a reliable way to complete full inspections in the field regardless of connectivity.",
    },
  },
  {
    slug: 'surefund',
    name: 'Surefund',
    tagline: 'The Smartest Way to Transfer Real Estate Funds',
    category: 'Branding, UI/UX',
    platform: 'Web',
    role: 'Product Designer & Brand Lead',
    timeline: '10 months',
    accent: '#00796B',
    accentSoft: '#E0F2F0',
    accentName: 'Trust Green',
    secondaryAccent: '#BF4F30',
    secondaryName: 'Momentum Copper',
    coverImage: '/surefund-cover.jpg',
    liveUrl: 'https://www.surefund.ca/',
    summary:
      'A ground-up Material Design application, built in 10 months for Teranet, that replaced bank runs and mailed cheques with a secure digital disbursement flow — live today at surefund.ca and trusted by real estate lawyers and law clerks across Ontario.',
    stats: [
      { value: '10 months', label: 'Discovery to launch' },
      { value: '2020 → today', label: 'Still live in production' },
      { value: 'Ontario-wide', label: 'Real estate lawyers & law clerks' },
      { value: 'Multiple firms', label: 'On-record client testimonials' },
    ],
    problem:
      'Land transfer fund disbursement was a slow, manual process: lawyers and law clerks were running to different banks, organizing couriers, writing cheques, and mailing out payments — all adding significant administrative overhead to closing day. Teranet needed a net-new, secure digital application to replace that entirely.',
    research: {
      body: "Surefund was a net-new build — ten months, discovery to launch, with no existing product to iterate on. The scope covered the full brand and product from zero: naming the application, the color scheme, logo creation, user flows, mockups, and development handoff.",
      quote: 'Prior to using SureFund we were running around to different banks and mailing out payments which added a lot of administrative work to our workday. These payment tasks would take numerous hours away from our team.',
      quoteAttribution: 'Seth D. Freedman, Real Estate Lawyer, Advent Legal',
    },
    typography: 'Roboto',
    implementation: [
      {
        title: 'Material Design Framework',
        body: 'Google Material Design was chosen as the UI foundation for its simple, professional look and feel, with a full brand system — name, color scheme, logo — built from zero.',
      },
      {
        title: 'Secure Sign-and-Disburse Flow',
        body: 'Two-factor authentication and RSA-token secure electronic signing, with real-time disbursement status tracking from Pending to Disbursed and funds deposited directly into the client\'s account.',
      },
      {
        title: 'Team Collaboration & Notifications',
        body: 'Automated notifications keep firms aligned on when funds are ready and what action is needed, cutting down extra emails and calls.',
      },
    ],
    testimonials: [
      {
        quote: 'It is perfect to use for daily real estate transactions.',
        name: 'Seth D. Freedman',
        title: 'Lawyer, Papazian | Heisey | Myers',
      },
      {
        quote: 'We chose Surefund to help pay the debts on refinances initially, but now we use it on both sales and refinances. It is easy to use and makes closing deals seamless.',
        name: 'Antonietta Cote',
        title: 'Senior Real Estate Law Clerk, Brechin & Huffman',
      },
      {
        quote: 'SureFund is 100% integral to my day-to-day operation, and we trust the system to take care of all disbursements.',
        name: 'Lauren Darby',
        title: 'Law Clerk, Caruso Law',
      },
    ],
    results: {
      body: 'Surefund shipped as a net-new production application in 2020 and remains live today at surefund.ca — still onboarding real estate lawyers and law clerks across Ontario, and now embedded in daily closing-day workflows at multiple firms.',
      quote: "We can't imagine running the firm without SureFund. It's something we've come to completely depend on as a firm and we can't do our jobs without it: it serves a function that's useful for real estate law generally.",
      quoteAttribution: 'Zamir Alakozi, Real Estate Lawyer & Founder, Advent Legal',
    },
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
