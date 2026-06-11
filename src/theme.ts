const size = {
  section: {
    bioWidth: '290px',
    bodyWidth: '850px',
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
    // Stack to a single column on tablets and phones to avoid horizontal overflow.
    mobile: 'screen and (max-width: 900px)',
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
