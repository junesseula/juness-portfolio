import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  globalCss: {
    'p, li': {
      color: 'var(--color-ink-soft)',
    },
  },
})

export const system = createSystem(defaultConfig, config)
