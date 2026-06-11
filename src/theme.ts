const size = {
  section: {
    bioWidth: '250px',
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
  textStrong: '#000000',
  textMuted: 'rgba(0, 0, 0, 0.5)',
  link: '#0070f3',
  elevated: '#ffffff',
  surface: '#f2f0ef',
  surfaceSoft: 'rgba(0, 0, 0, 0.04)',
  hover: 'rgba(0, 0, 0, 0.1)',
  border: 'rgba(0, 0, 0, 0.15)',
  shadow: 'rgba(0, 0, 0, 0.15)',
  shadowSoft: 'rgba(0, 0, 0, 0.1)',
}

const font = {
  family: "'Trebuchet MS', sans-serif",
}

export { color, font }
export default size
