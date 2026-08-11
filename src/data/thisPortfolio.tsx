import { Box, Heading, Link, LinkBox, LinkOverlay, List, SimpleGrid, Span, Text } from '@chakra-ui/react'

// Custom section content for the "This Portfolio" case study (slug: vibe-coding-this-portfolio).
// Each function returns extra JSX appended to the end of its section on CaseStudyDetail.
// Build out each Box with your own Chakra components and layout.

export function Research() {
  return <Box mt={6}>
    <Text>
      Beyond the visual staleness, there was a second, more personal problem: the site didn't say anything about how I actually work now. I wanted the portfolio itself to be evidence, not just a container for evidence. Specifically, I wanted to test — and show — whether an AI-enhanced workflow could hold up across the full span of a real project: from early design refinement through to production-ready code, not just as a prototyping shortcut in the middle. If the workflow was going to be a genuine claim in my case studies, the site making that claim needed to be built the same way.
    </Text>
    <LinkBox as="article" my="4">
      <LinkOverlay href="https://archived.junessrulloda.com"><Heading as="h4" my="2">
        Archived Portfolio
      </Heading>
      </LinkOverlay>
      <Text textStyle="sm"  mb="3">
        The previous version of this portfolio website, kept live for reference.
      </Text>
    </LinkBox>
    <Heading as="h3" mt="8" mb="2">Exploration</Heading>
    <Text>
      Before touching layout, I looked at portfolios I already admired — both for surface-level design cues and for how each one structured the story of "who this person is and what they can do." I pulled from four sites in particular:
    </Text>
    
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="4" my="4">
      <LinkBox as="article">
        <LinkOverlay href="https://www.gloriaha.com/"><Heading as="h5" textStyle="lg" my="2">
          Gloria Ha
        </Heading>
        </LinkOverlay>
        <Text textStyle="sm" mb="3">
          A product designer/PM portfolio built around a tight featured-work grid, where each project card pairs a single strong image with a short role/skill tag line and a direct "Read Case Study" link. I liked how little friction there was between landing on the homepage and getting into an actual project.
        </Text>
      </LinkBox>
      <LinkBox as="article">
        <LinkOverlay href="https://naomicreates.co.za/"><Heading as="h5" textStyle="lg" my="2">
          Naomi Creates
        </Heading>
        </LinkOverlay>
        <Text textStyle="sm"  mb="3">
          Leads with outcome-first project summaries rather than process detail up front, framing each piece of work around the problem it solved for real users. It's a good model for writing project blurbs that sell the "why" before the "how."
        </Text>
      </LinkBox>
      <LinkBox as="article">
        <LinkOverlay href="https://www.jastindesign.com/"><Heading as="h5" textStyle="lg" my="2">
          Jastin Design
        </Heading>
        </LinkOverlay>
        <Text textStyle="sm"  mb="3">
          has a much more personal, voice-driven tone (the "Aloha, I'm Jastin" greeting, a personal motto pulled from a designer he admires) alongside a clean, minimal project list. It showed me that personality and restraint aren't in tension — the copy can carry warmth while the layout stays quiet.
        </Text>
      </LinkBox>
      <LinkBox as="article">
        <LinkOverlay href="https://www.nicolearoberts.com/"><Heading as="h5" textStyle="lg" my="2">
          Nicole Roberts
        </Heading>
        </LinkOverlay>
        <Text textStyle="sm"  mb="3">
          the most metrics-driven of the four: every case study surfaces hard numbers (conversion lift, completion rate) as visual callouts, backed by a dedicated testimonials section and a "key strengths" grid. It's a strong reference for making impact legible at a glance, for someone skimming rather than reading every case study in full.
        </Text>
      </LinkBox>
    </SimpleGrid>
    <Text textStyle="md">Across the four, the patterns I wanted to borrow (and the ones I wanted to avoid) became clearer:</Text>
    <Text textStyle="md" mt="2">What I took from them:</Text>
    <List.Root pl="4">
      <List.Item>Lead with the work, not a long bio — get visitors into a case study fast (Gloria Ha)</List.Item>
      <List.Item>Frame projects around outcomes and real user impact, not just deliverables (Naomi Creates)</List.Item>
      <List.Item>Let personal voice come through in copy even when the visual system is minimal (Jastin Design)</List.Item>
      <List.Item>Surface concrete results as scannable, visual proof points rather than burying them in paragraphs (Nicole Roberts)</List.Item>
    </List.Root>
    <Text textStyle="md" mt="2">What I wanted to do differently:</Text>
    <List.Root pl="4">
      <List.Item>None of the four sites used their own build as a demonstration of process — they showcased outcomes for clients, but the portfolio itself was just a container. I wanted mine to double as a live case study.</List.Item>
      <List.Item>I wanted a layout that was mine specifically — not adapted from a theme or template — so the structure could flex around how I actually want to present my background and skills, rather than the other way around.</List.Item>
    </List.Root>
    <Text textStyle="md" mt="2">That research shaped the layout direction I moved into next.</Text>
  </Box>
}

export function Design() {
  return <Box mt={6}></Box>
}

export function Implementation() {
  return <Box mt={6}></Box>
}

export function Results() {
  return <Box mt={6}></Box>
}
