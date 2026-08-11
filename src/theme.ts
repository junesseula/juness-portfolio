import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  globalCss: {
    'p, li': {
      color: 'var(--color-ink-soft)',
    },
    '.chakra-linkbox': {
      display: 'flex',
      flexDirection: 'column',
      padding: '22px',
      border: '1px solid var(--color-line)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-white)',
      transition: 'border-color 0.2s ease, transform 0.2s ease',
    },
    '.chakra-linkbox:hover': {
      borderColor: 'var(--color-blue)',
      transform: 'translateY(-2px)',
    },
    '.chakra-linkbox__overlay': {
      color: 'var(--color-blue) !important',
    },
    '.chakra-linkbox:hover .chakra-linkbox__overlay': {
      textDecoration: 'underline !important',
    },
  },
})

export const system = createSystem(defaultConfig, config)
