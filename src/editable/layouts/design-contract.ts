import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#ffffff',
  '--slot4-page-text': '#1e1b17',
  '--slot4-panel-bg': '#f4f1ec',
  '--slot4-surface-bg': '#ffffff',
  '--slot4-muted-text': '#5f5a53',
  '--slot4-soft-muted-text': '#77716a',
  '--slot4-accent': '#ef4f2b',
  '--slot4-accent-fill': '#ef4f2b',
  '--slot4-accent-soft': '#dce9ed',
  '--slot4-dark-bg': '#292d31',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#f2f0ec',
  '--slot4-cream': '#f5f2ed',
  '--slot4-warm': '#ffffff',
  '--slot4-lavender': '#dce9ed',
  '--slot4-gray': '#f7f7f5',
  '--slot4-body-gradient': 'none',
  '--editable-page-bg': '#ffffff',
  '--editable-page-text': '#1e1b17',
  '--editable-border': 'rgba(30,27,23,.14)',
  '--editable-container': '1552px',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-white',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[#b8d6df]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-white',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-white',
  lavenderBg: 'bg-[#dce9ed]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-black/10',
  darkBorder: 'border-white/15',
  shadow: 'shadow-[0_4px_18px_rgba(30,27,23,.08)]',
  shadowStrong: 'shadow-[0_20px_60px_rgba(30,27,23,.18)]',
  overlay: 'bg-gradient-to-t from-black/75 via-black/10 to-transparent',
} as const

export const editableDesignContract = {
  shell: {
    page: 'min-h-screen bg-white text-[var(--slot4-page-text)]',
    section: 'mx-auto w-full max-w-[1552px] px-4 sm:px-6 lg:px-8',
    sectionY: 'py-12 sm:py-16 lg:py-20',
  },
  layout: {
    safeGrid: 'grid gap-5 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-8 lg:grid-cols-[.72fr_1.28fr]',
    rail: 'flex snap-x gap-3 overflow-x-auto pb-3 [scrollbar-width:thin]',
    minRailCard: 'w-[240px] shrink-0 snap-start sm:w-[270px]',
  },
  type: {
    eyebrow: 'text-xs font-bold uppercase tracking-[0.12em]',
    heroTitle: 'font-serif text-4xl leading-[1.02] sm:text-5xl lg:text-6xl',
    sectionTitle: 'font-serif text-3xl leading-tight sm:text-4xl',
    body: 'text-base leading-7',
  },
  surface: {
    card: 'border border-black/10 bg-white shadow-sm',
    soft: 'border border-black/10 bg-[#f7f7f5]',
    dark: 'bg-[var(--slot4-dark-bg)] text-white shadow-xl',
  },
  button: {
    primary: 'inline-flex items-center justify-center gap-2 rounded-full bg-[#211e19] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#ef4f2b]',
    secondary: 'inline-flex items-center justify-center gap-2 rounded-full border border-black/20 bg-white px-7 py-3 text-sm font-bold transition hover:border-black hover:bg-[#f5f2ed]',
    accent: 'inline-flex items-center justify-center gap-2 rounded-full bg-[#ef4f2b] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#d94323]',
  },
  media: {
    frame: 'relative overflow-hidden bg-[#f2f0ec]',
    ratio: 'aspect-[4/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1 hover:shadow-xl',
    fade: 'transition duration-300 hover:opacity-80',
  },
} as const

export const aiLayoutRules = [
  'Keep dynamic post fetching intact.',
  'Use postHref() for task-specific routes.',
  'Prefer image-led editorial sections with square corners and restrained spacing.',
] as const
