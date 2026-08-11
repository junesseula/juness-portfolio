import { Box, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'

// Custom section content for the "Inspections Application" case study (slug: inspections-application).
// Each function returns extra JSX appended to the end of its section on CaseStudyDetail.

export function Results() {
  return <Box mt={6}>
    <LinkBox as="article">
      <LinkOverlay href="https://thentia.com/insight/thentia-announces-mobile-inspectionapp/" target="_blank" rel="noopener noreferrer">
        <Heading as="h4" my="2">
          Thentia Announces Mobile Inspection App
        </Heading>
      </LinkOverlay>
      <Text textStyle="sm">
        Thentia's announcement of the mobile inspection app.
      </Text>
    </LinkBox>
  </Box>
}
