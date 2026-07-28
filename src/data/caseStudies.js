export const caseStudies = [
  {
    slug: 'payzen',
    name: 'PayZen',
    tagline: 'Empowering Healthcare Affordability',
    category: 'Fintech / Healthcare',
    platform: 'iOS · Web',
    role: 'Lead Product Designer',
    timeline: '14 weeks',
    accent: '#3355FF',
    accentSoft: '#E8ECFF',
    accentName: 'Electric Blue',
    secondaryAccent: '#2FD9A8',
    secondaryName: 'Mint',
    summary:
      'A payment-plan platform that helps patients understand and afford care costs upfront, redesigned to cut billing confusion and lift plan enrollment.',
    stats: [
      { value: '14', label: 'Weeks, discovery to launch' },
      { value: '40%', label: 'Increase in plan enrollment' },
      { value: '25%', label: 'Fewer billing support tickets' },
      { value: '4.8★', label: 'App Store rating' },
    ],
    problem:
      "Patients were delaying or skipping care because they didn't understand what they'd owe until after treatment. Meanwhile, billing coordinators were fielding a growing volume of confused, frustrated calls that a better interface could prevent entirely.",
    research: {
      body: "We ran 24 patient interviews and shadowed 8 billing coordinators across three health systems, mapping every point where cost information was unclear or missing. A competitive teardown of buy-now-pay-later products outside healthcare showed patterns — like upfront, plain-language cost breakdowns — that the category hadn't adopted yet.",
      quote: 'Nobody tells you the price until the bill shows up. By then it is too late to plan.',
      quoteAttribution: 'Patient interview, session 14',
    },
    typography: 'Plus Jakarta Sans',
    implementation: [
      {
        title: 'Vibe Coding',
        body: 'Rapid, AI-assisted prototyping let us test real cost-estimate flows with patients within the first two weeks instead of the usual six.',
      },
      {
        title: 'Editorial Refinement',
        body: 'A dedicated content pass rewrote every billing term in plain language, cutting the average reading level from grade 14 to grade 8.',
      },
      {
        title: 'Asset Pipeline',
        body: 'Design tokens shipped directly into the production component library, so no visual detail was lost between Figma and the live app.',
      },
    ],
    results: {
      body: 'Within one quarter of launch, plan enrollment rose 40% and billing-related support tickets dropped by a quarter. The redesigned cost estimator became the most-used feature in the app.',
      quote: "PayZen didn't just redesign our app — they redesigned how our patients feel about paying for care.",
      quoteAttribution: 'VP of Product, PayZen',
    },
  },
  {
    slug: 'aware',
    name: 'Aware',
    tagline: 'Focused Meditation, Without the Pressure',
    category: 'Wellness / Mobile App',
    platform: 'iOS · Android',
    role: 'Product Designer',
    timeline: '10 weeks',
    accent: '#8B7CF6',
    accentSoft: '#F1EEFF',
    accentName: 'Soft Lavender',
    secondaryAccent: '#F4EDE4',
    secondaryName: 'Cream',
    summary:
      'A meditation app redesigned around flexible, guilt-free structure — tackling the day-seven drop-off that plagues most wellness apps.',
    stats: [
      { value: '32%', label: 'Lift in day-7 retention' },
      { value: '+18%', label: 'Longer average sessions' },
      { value: '4.9★', label: 'App Store rating' },
      { value: '2wk', label: 'Diary study window' },
    ],
    problem:
      "Most meditation apps lose the majority of users within a week. Streaks and rigid daily plans created pressure instead of calm — the opposite of what the product promised.",
    research: {
      body: 'A two-week diary study with 40 users, paired with a teardown of the category\'s biggest names, showed that rigid streaks were the top reason people quit. Users wanted structure they could bend, not a schedule they could break.',
      quote: 'The day I missed my streak, I just stopped opening the app entirely.',
      quoteAttribution: 'Diary study participant, week 1',
    },
    typography: 'Plus Jakarta Sans',
    implementation: [
      {
        title: 'Adaptive Sessions',
        body: 'Session lengths flex automatically based on time of day and recent usage, instead of forcing a fixed daily commitment.',
      },
      {
        title: 'Streak-Free Progress',
        body: 'A new progress model rewards consistency over time without punishing a missed day, replacing anxiety with momentum.',
      },
      {
        title: 'Ambient Soundscapes',
        body: 'A lightweight audio engine layers ambient soundscapes under every session, tuned collaboratively with the design system\'s calm palette.',
      },
    ],
    results: {
      body: 'Day-7 retention improved by 32% and average session length grew 18%, with the app climbing to a 4.9-star rating within two months of the redesign shipping.',
      quote: 'Aware feels less like software and more like a companion.',
      quoteAttribution: 'Beta user',
    },
  },
  {
    slug: 'planwell',
    name: 'PlanWell',
    tagline: 'A Meal Prep Ecosystem That Bends to Real Life',
    category: 'Consumer / Lifestyle',
    platform: 'Web · Mobile',
    role: 'Product Designer & Front-End',
    timeline: '12 weeks',
    accent: '#F2A93B',
    accentSoft: '#FDF1DE',
    accentName: 'Warm Amber',
    secondaryAccent: '#2B5D4C',
    secondaryName: 'Deep Green',
    summary:
      'A modular meal-planning system built for households who found existing tools either too rigid or too much manual work.',
    stats: [
      { value: '3x', label: 'Weekly active planning sessions' },
      { value: '21%', label: 'Reported drop in food waste' },
      { value: '15', label: 'Households shadowed' },
      { value: '10', label: 'Competitor apps audited' },
    ],
    problem:
      'Meal planning tools forced a false choice: fixed meal plans that ignored real preferences, or blank-slate recipe apps that put all the planning work back on the user.',
    research: {
      body: "We shadowed 15 households' weekly grocery routines and audited 10 competitor apps, finding that the best planning sessions happened when people could mix pre-built plans with their own swaps — a hybrid no existing tool supported well.",
      quote: 'I do not want a plan. I want building blocks I can rearrange in five minutes.',
      quoteAttribution: 'Household shadowing session, week 2',
    },
    typography: 'Plus Jakarta Sans',
    implementation: [
      {
        title: 'Modular Meal Blocks',
        body: 'Meals became drag-and-drop building blocks instead of a fixed weekly grid, so swapping a night takes seconds.',
      },
      {
        title: 'Auto Grocery Lists',
        body: 'Grocery lists generate automatically from the weekly plan and stay pantry-aware, cutting duplicate purchases.',
      },
      {
        title: 'Pantry-Aware Suggestions',
        body: 'A lightweight recommendation layer nudges households toward meals that use what they already have on hand.',
      },
    ],
    results: {
      body: 'Pilot households tripled their weekly active planning sessions and reported a 21% drop in food waste within the first month of use.',
      quote: 'PlanWell turned Sunday meal prep from a chore into a ten-minute ritual.',
      quoteAttribution: 'Pilot household participant',
    },
  },
]

export function getCaseStudy(slug) {
  return caseStudies.find((c) => c.slug === slug)
}
