import { slot4BrandConfig } from './brand.config'

export type Slot4VisualPreset = 'studio-market'

export const visualPresets = {
  'studio-market': {
    label: 'Studio Market',
    mood: 'bright image-led editorial marketplace',
    fontDirection: 'classic serif display with clean sans-serif utility text',
    colors: {
      background: '#ffffff',
      foreground: '#1e1b17',
      muted: '#6f6a63',
      primary: '#211e19',
      accent: '#ef4f2b',
      surface: '#f5f2ed',
    },
    shape: 'square editorial media with compact controls',
  },
} as const

export const visualSystem = {
  productKind: slot4BrandConfig.productKind,
  recommendedPreset: 'studio-market',
  radius: { sm: '0', md: '.25rem', lg: '.5rem', xl: '.5rem' },
  motion: {
    pageLoad: 'animate-in fade-in duration-500',
    cardHover: 'transition duration-300 hover:-translate-y-1 hover:shadow-xl',
    softHover: 'transition duration-300 hover:opacity-80',
    reduceMotionSafe: 'motion-reduce:transform-none motion-reduce:transition-none',
  },
  typography: {
    eyebrow: 'text-xs font-bold uppercase tracking-[0.12em]',
    heroTitle: 'font-serif text-5xl font-normal leading-none sm:text-6xl lg:text-7xl',
    sectionTitle: 'font-serif text-3xl font-normal sm:text-4xl',
    body: 'text-base leading-7',
    caption: 'text-xs font-bold uppercase tracking-[0.12em]',
  },
  surfaces: {
    glass: 'border border-black/10 bg-white/90 backdrop-blur-xl',
    paper: 'border border-black/10 bg-white shadow-sm',
    quiet: 'border border-black/10 bg-[#f5f2ed]',
    dark: 'border border-white/10 bg-[#292d31] text-white',
  },
  layout: {
    page: 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
    sectionY: 'py-12 sm:py-16 lg:py-20',
    cardGrid: 'grid gap-5 sm:grid-cols-2 lg:grid-cols-3',
  },
} as const

export function getVisualPreset(_name: Slot4VisualPreset = 'studio-market') {
  return visualPresets['studio-market']
}
