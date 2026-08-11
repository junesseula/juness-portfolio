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
  githubUrl?: string
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
    name: 'This Portfolio Website',
    tagline: 'A live test of vibe coding, from research to production code.',
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
    githubUrl: 'https://github.com/junesseula/juness-portfolio',
    summary:
      "The story of how this exact site got made — from Google Stitch's early AI-generated iterations, through a Figma refinement pass, into MagicPath, and finally vibe-coded into production with Claude Code.",
    stats: [
      { value: '4', label: 'Tools chained together (Stitch, Figma, MagicPath, Claude Code)' },
      { value: '>4 hrs', label: 'From ideation to running web app' },
      { value: 'Figma → Code', label: 'Full design-to-dev pipeline' },
      { value: 'This Site', label: 'The actual result you\'re looking at' },
    ],
    problem:
      "My previous portfolio was built on WordPress, using a pre-built theme. That decision made sense early on — it got a site live fast — but it came with a ceiling. Themes dictate structure: I was choosing between a fixed set of layout blocks, not designing my own. Every customization meant fighting the theme's CSS or accepting a compromise. Over time the design started to look and feel dated, and I had no real path to fix that without a rebuild.",
    research: {
      body: "This gave the rebuild two success criteria, not one: a design with full control over layout and visual identity, and a build process fast and rigorous enough to serve as its own proof point.",
      quote: 'Speed gets you a direction. Refinement gets you a product.',
    },
    typography: 'Plus Jakarta Sans',
    implementation: [
      {
        title: 'Google Stitch + Figma',
        body: 'Google Stitch helped come up with early design layouts were explored inspired from the portfolios I admired. Those were then exported into Figma for further refinement and polishing up tight details.',
      },
      {
        title: 'Vibe Coding',
        body: 'The MagicPath skill was installed into Claude Code, letting it reference the MagicPath canvas frames directly and use them to scaffold and build this production React + Vite codebase.',
      },
      {
        title: 'Code Refinement',
        body: "The initial build was missing imagery, animations felt flat, and the design system wasn't holding together across components. The codebase was reformatted to TypeScript and Chakra UI was installed, bringing tighter design consistency, styling, and motion to the finished site.",
      },
    ],
    results: {
      body: 'The result is this site: a fully responsive, four-page portfolio — home, case studies, detail pages, and about — that went from AI-generated first drafts to a production codebase with real client work, without skipping the design or the editorial pass.',
    },
    moreResources: [
      {
        label: 'Archived Portfolio',
        description: 'The previous version of this portfolio, kept live for reference.',
        url: 'https://archived.junessrulloda.com/',
      },
    ],
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
  {
    slug: 'rbc-virtual-assistant',
    name: 'RBC Virtual Assistant',
    tagline: 'User-Centered Design for an Enterprise Virtual Assistant Framework',
    category: 'Conversational UX, Enterprise Design',
    platform: 'Web · Virtual Assistant Framework',
    role: 'UX Designer, Virtual Assistant Experience',
    timeline: 'Jul 2019 – Feb 2020',
    accent: '#005DAA',
    accentSoft: '#E3EEF9',
    accentName: 'Royal Blue',
    secondaryAccent: '#FDB913',
    secondaryName: 'RBC Gold',
    summary:
      'Partnering with Enterprise Architecture to design user-centered experiences for the virtual assistant frameworks used across RBC, integrating Google Dialogflow, OAuth-secured APIs, and React.',
    stats: [
      { value: 'Jul 2019 – Feb 2020', label: 'Engagement timeline' },
      { value: 'Enterprise Architecture', label: 'Cross-org partnership' },
      { value: 'Dialogflow · OAuth · React', label: 'Tools integrated' },
      { value: 'Sketch · InVision', label: 'Design & presentation tools' },
    ],
    problem:
      'RBC needed virtual assistant frameworks that could be adopted consistently across the organization, rather than each team designing conversational experiences on its own. The task was to work directly with Enterprise Architecture to bring user-centered design principles into how those frameworks were built.',
    research: {
      body: "The work centered on embedding UX thinking into a technical framework meant for reuse across many teams — understanding how Enterprise Architecture structured the underlying systems, and where a consistent, user-centered layer needed to sit on top so every team building on the framework could produce a coherent assistant experience. Ideas and design directions were presented and iterated on with stakeholders using Sketch and InVision.",
      quote: 'A virtual assistant is only as good as the trust and consistency behind every interaction it has across the organization.',
      quoteAttribution: 'Design approach, RBC Virtual Assistant case study',
    },
    typography: 'Inter',
    implementation: [
      {
        title: 'Framework Collaboration',
        body: "Worked directly with RBC's Enterprise Architecture team to design user-centered experiences for the virtual assistant frameworks used across the organization, ensuring UX considerations were built into the framework itself rather than bolted on afterward.",
      },
      {
        title: 'Conversational & API Integration',
        body: 'Integrated Google Dialogflow for conversational logic alongside OAuth-secured APIs and React front ends, connecting the design of the assistant experience to how it was actually authenticated and rendered.',
      },
      {
        title: 'Stakeholder Presentation & Iteration',
        body: 'Used Sketch and InVision to present and communicate design ideas across teams, gathering feedback and iterating to keep the experience aligned with real user needs.',
      },
    ],
    results: {
      body: 'The engagement helped establish a user-centered foundation for how virtual assistants got built across RBC — giving teams building on the framework a consistent, tested set of conversational UX patterns backed by secure, authenticated integrations rather than one-off designs.',
    },
  },
  {
    slug: 'bmo-two-step-verification',
    name: 'BMO Two-Step Verification',
    tagline: 'Securing BMO InvestorLine Logins Without Adding Friction',
    category: 'Mobile, UI/UX',
    platform: 'Mobile',
    role: 'UX Designer',
    timeline: '2016',
    accent: '#0075BE',
    accentSoft: '#E5F1FA',
    accentName: 'BMO Blue',
    secondaryAccent: '#EE3124',
    secondaryName: 'BMO Red',
    coverImage: '/bmo-two-step-verification-cover.jpg',
    implementationImage: '/bmo-two-step-verification-flow.png',
    summary:
      'A two-step verification flow for BMO InvestorLine, adding a secondary layer of identity confirmation beyond the password so clients’ money and account access stayed secure.',
    stats: [
      { value: '2016', label: 'Project year' },
      { value: '2 Personas', label: 'Novice & advanced trader research' },
      { value: 'Enroll + Step-Up', label: 'Two full verification flows designed' },
      { value: 'Redline Handoff', label: 'Annotated specs for engineering' },
    ],
    problem:
      "BMO InvestorLine is where BMO clients trade the stock markets, across two platforms: Self-Directed, with full freedom to make their own trades, and AdviceDirect, where trades follow an assigned advisor's guidance. Two-step verification adds a secondary check beyond username and password to confirm a user's identity before granting account access. The task was to design that layer for BMO InvestorLine clients so their money and account access stayed protected, on mobile as much as on desktop.",
    research: {
      body: "Design started from two client personas built out of a BMO InvestorLine client panel: Joyce Best, a 'Confident New Client' with novice investment knowledge who logs in mainly on mobile to check balances and wants guidance, and Sunny Lee, a 'Proactive Soloist' with advanced investment knowledge who trades frequently and wants full control with minimal friction. Their differing comfort levels shaped the enrollment flow — clear, reassuring copy and an easy opt-out for Joyce, a fast path with a trusted-device option for Sunny — before either persona ever reached the step-up verification screen.",
      quote: "I'm pretty new to all this and I want to feel more confident with trading. I am eager to learn things that will help me make solid decisions.",
      quoteAttribution: 'Joyce Best persona, built from BMO InvestorLine client research',
    },
    typography: 'System UI',
    implementation: [
      {
        title: 'Enrollment Flow',
        body: 'A three-screen mobile setup flow — an in-app notification introducing two-step verification, a screen for adding up to ten phone numbers with nicknames, and a terms-and-conditions confirmation with a "trusted device" opt-out — ending in a completion screen.',
      },
      {
        title: 'Managing Contact Numbers',
        body: 'Add and delete interactions for the saved phone number list were mocked up and annotated separately, marking which areas of the screen stayed fixed and which scrolled, for a clean engineering handoff.',
      },
      {
        title: 'Step-Up Verification',
        body: 'A two-screen in-session challenge — select a saved number and delivery method (voice or text), then enter the code — triggered on sign-in from an unrecognized device, with the same trusted-device opt-out carried through.',
      },
    ],
    results: {
      body: "The result was a fully annotated two-step verification system — enrollment, contact management, and step-up challenge — designed around real client research and handed off with redlined specs ready for BMO's engineering team to build against.",
    },
  },
  {
    slug: 'bmo-nesbitt-burns-homepage-refresh',
    name: 'BMO Nesbitt Burns Homepage Refresh',
    tagline: 'Modernizing a Legacy Private Banking Portal, CSS Only',
    category: 'Branding, UI/UX',
    platform: 'Web',
    role: 'UX/UI Designer',
    timeline: '2015',
    accent: '#002D72',
    accentSoft: '#E2E7F1',
    accentName: 'Nesbitt Navy',
    secondaryAccent: '#B08D57',
    secondaryName: 'Private Bank Gold',
    coverImage: '/bmo-nesbitt-burns-homepage-cover.jpg',
    implementationImage: '/bmo-nesbitt-burns-homepage-tablet.png',
    summary:
      'A CSS-only refresh of the BMO Nesbitt Burns private banking client portal, bringing an outdated, third-party-hosted account dashboard in line with modern BMO branding — with no changes permitted to the underlying HTML.',
    stats: [
      { value: '2015', label: 'Project year' },
      { value: 'CSS Only', label: 'HTML structure left untouched' },
      { value: 'Asia → Canada', label: 'Design concepts adapted across regions' },
      { value: 'Desktop, Tablet, Mobile', label: 'Responsive breakpoints delivered' },
    ],
    problem:
      "BMO was in the midst of redefining its brand identity and redesigning its websites to modernize its digital presence. The BMO Nesbitt Burns private banking client portal for Canada was still running on Sungard, a third-party wealth management data provider, and looked visibly outdated next to BMO's new branding. The task was to align that account portal with the new look and feel — under one hard technical constraint: only CSS could be updated, the underlying HTML structure had to stay exactly as it was.",
    research: {
      body: "Because of its market size and high-net-worth client base, BMO's Asia private banking division had already started realigning its client websites to the new branding. Rather than starting from zero, the Canada work leaned on the design concepts Asia's team had already researched and tested, then grabbed screenshots of the live BMO Nesbitt Burns Sungard portal to use as the real baseline to design against.",
      quote: 'I felt account details and the portfolio snapshot needed more visual prominence, so I proposed optimizing the larger screen real estate around natural reading order: top to bottom, left to right.',
      quoteAttribution: 'Design approach, BMO Nesbitt Burns Homepage Refresh case study',
    },
    typography: 'Helvetica Neue',
    implementation: [
      {
        title: 'Screenshotting the Baseline',
        body: 'The live, Sungard-hosted BMO Nesbitt Burns portal was screenshotted as the real starting point, rather than redesigning from an idealized version of the old site.',
      },
      {
        title: 'Adapting the Asia Pattern',
        body: "Asia's private banking dashboard, already realigned to the new BMO branding, was used as a design reference — adapted rather than copied wholesale to fit the Canada portal's own account and portfolio data.",
      },
      {
        title: 'Hand-Coded CSS Delivery',
        body: 'With no ability to touch the underlying HTML, every visual update — layout, type, color, spacing — was implemented and shipped as CSS, personally coded to hit the final design across desktop, tablet, and mobile.',
      },
    ],
    moreResources: [
      {
        label: 'Before: BMO Nesbitt Burns on Sungard',
        description: 'The live, third-party-hosted portal used as the real baseline for the redesign.',
        url: '/bmo-nesbitt-burns-homepage-before.jpg',
      },
      {
        label: 'Reference: BMO Private Bank Asia Dashboard',
        description: "Asia's already-realigned private banking dashboard, used as a design reference for the Canada refresh.",
        url: '/bmo-nesbitt-burns-asia-reference.png',
      },
      {
        label: 'Mobile Mockup',
        description: 'The responsive mobile version of the Asset Allocation view.',
        url: '/bmo-nesbitt-burns-homepage-mobile.png',
      },
    ],
    results: {
      body: "The refreshed portal brought BMO Nesbitt Burns' private banking clients a homepage aligned with BMO's modern branding, with account details and the portfolio snapshot given more visual prominence than the legacy Sungard layout — delivered entirely through hand-coded CSS across desktop, tablet, and mobile breakpoints, with the underlying HTML never touched.",
    },
  },
  {
    slug: 'bil-homepage-redesign',
    name: 'BMO InvestorLine Homepage Redesign',
    tagline: 'One Homepage, Two Very Different Investors',
    category: 'Branding, UI/UX',
    platform: 'Web',
    role: 'UX/UI Designer',
    timeline: '2017',
    accent: '#0072CE',
    accentSoft: '#E3F1FC',
    accentName: 'BMO Blue',
    secondaryAccent: '#EE3831',
    secondaryName: 'BMO Red',
    coverImage: '/bil-homepage-new-design.jpg',
    implementationImage: '/bil-homepage-design-detail.jpg',
    summary:
      "A homepage redesign for BMO InvestorLine, built from real client-panel research to serve both self-directed traders and advice-guided investors from a single dashboard.",
    stats: [
      { value: '2017', label: 'Project year' },
      { value: '2', label: 'Personas built from a real BIL client panel' },
      { value: 'Wireframe → Hi-Fi', label: 'Full IA-to-visual design process' },
      { value: 'Self-Directed & AdviceDirect', label: 'Two investor types, one homepage' },
    ],
    problem:
      "BMO InvestorLine is a national online brokerage serving two very different clients through the same homepage: fully self-directed traders, and clients enrolled in the advisor-guided AdviceDirect program. The existing dashboard treated them identically — accounts buried behind a dropdown, portfolio totals requiring scrolling to find, and a market-news module too small to be useful to either. The task was to redesign the InvestorLine homepage against modern BMO branding while genuinely improving usability for both audiences.",
    research: {
      body: "Research centered on two personas built from a real InvestorLine client panel. Sunny Lee, a 58-year-old \"Proactive Soloist,\" is a self-directed, 5-star gold client trading 5–10 times a month who wants fast, uninterrupted access to market news, research tools, and his five accounts. Joyce Best, a 38-year-old \"Confident New Client,\" is a moderate/novice investor who logs in weekly, wants guidance more than control, and finds the existing research tools scattered and overwhelming. Client verbatims collected from the panel converged on the same complaints from both ends of the spectrum: the page was too cluttered, holdings were hard to scan at a glance, and switching accounts meant fighting a dropdown instead of just clicking.",
      quote:
        'I need current up to date information about the latest market news and companies. I am confident making my own investment decisions, but research is vital to my decision making and I need a central go-to spot to start my research in the right direction.',
      quoteAttribution: '— Sunny Lee, "Proactive Soloist" persona',
    },
    typography: 'Helvetica Neue',
    implementation: [
      {
        title: 'Persona-Driven IA',
        body: "Low-fidelity wireframes were structured around both personas' top tasks — check portfolio value, switch accounts, get to research — rather than replicating the legacy layout. Early versions tested account cards, a diversification breakdown, and a holdings overview table against both a self-directed and an advice-guided reading of the same data.",
      },
      {
        title: 'Clickable Account Cards',
        body: "The single account dropdown was replaced with clickable account cards directly on the homepage — answering the panel's most repeated complaint about switching accounts — each showing cash balance and unrealized gain/loss without a page change.",
      },
      {
        title: 'Modern BMO Visual System',
        body: 'The visual layer was rebuilt against current BMO branding: a cleaner header, a prominent search-to-trade bar, and a larger, better-organized My News module, replacing the dense legacy tables and banner ad from the previous design.',
      },
    ],
    moreResources: [
      {
        label: 'Original Homepage (Before)',
        description: 'The legacy BMO InvestorLine homepage this project replaced.',
        url: '/bil-homepage-old-design.jpg',
      },
      {
        label: 'Persona: Sunny Lee, "Proactive Soloist"',
        description: 'Self-directed, 5-star gold client persona built from the BIL client panel.',
        url: '/bil-persona-sunny.jpg',
      },
      {
        label: 'Persona: Joyce Best, "Confident New Client"',
        description: 'Moderate/novice, advice-seeking client persona built from the BIL client panel.',
        url: '/bil-persona-joyce.jpg',
      },
    ],
    results: {
      body: "The redesigned homepage directly answered the loudest pattern in the client-panel feedback — reduce the clutter, make it easier to find what I want — with a card-based layout that surfaces total portfolio value, individual accounts, holdings movers, and market news without the scrolling and dropdown-hunting the legacy design required, while still serving both the self-directed and advice-guided personas from a single homepage.",
      quote:
        "I'm pretty new to all this and I want to feel more confident with trading. I am eager to learn things that will help me make solid decisions. Research is important and I need some guidance on where to start.",
      quoteAttribution: '— Joyce Best, "Confident New Client" persona',
    },
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
