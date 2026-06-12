const size = {
  section: {
    bioWidth: '290px',
    // Shared content width for Home / CV / Projects so pages stay in sync.
    bodyWidth: '950px',
    // Overall cap for the [Bio + content] shell (à la Tailwind docs `max-w-8xl`).
    // On wider screens the whole layout centers with balanced margins instead of
    // stretching, keeping the Bio at the left edge of this centered block.
    shellWidth: '1440px',
  },
  spacing: {
    s: '4px',
    m: '8px',
    ml: '12px',
    l: '16px',
    xl: '32px',
    xl2: '64px',
  },
  radius: {
    s: '10px',
    l: '16px',
  },
  media: {
    // Stack into a single column below this width (mirrors Tailwind docs' `lg`
    // breakpoint, where the sidebar drops away). Above it, the Bio sits beside
    // the content.
    mobile: 'screen and (max-width: 1023px)',
  },
}

const color = {
  text: '#272727',
  textStrong: '#1a1a1a',
  textMuted: 'rgba(0, 0, 0, 0.5)',
  accent: '#b5542b',
  accentHover: '#8c3f1d',
  elevated: '#ffffff',
  surfaceSoft: 'rgba(0, 0, 0, 0.04)',
  hover: 'rgba(0, 0, 0, 0.1)',
  border: 'rgba(0, 0, 0, 0.12)',
  shadow: 'rgba(0, 0, 0, 0.15)',
  shadowSoft: 'rgba(0, 0, 0, 0.1)',
}

const font = {
  body: "'Inter Variable', system-ui, -apple-system, sans-serif",
}

export { color, font }
export default size
