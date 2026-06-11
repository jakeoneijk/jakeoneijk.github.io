import { style, styleVariants } from '@vanilla-extract/css'

import { color, font } from '../theme'

const text = style({
  fontFamily: font.body,
  fontStyle: 'normal',
  color: color.text,
})

export const textVariants = styleVariants({
  default: { fontSize: '16px', fontWeight: 400, lineHeight: 1.6 },
  h1: {
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: '-0.03em',
  },
  description: { fontSize: '15px', fontWeight: 400, lineHeight: 1.7 },
  subDescription: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.6,
    color: color.textMuted,
  },
})

const linkStyle = style({
  color: color.accent,
  cursor: 'pointer',
  textDecoration: 'none',
  textUnderlineOffset: '2px',
  transition: 'color 0.15s',
  ':hover': {
    color: color.accentHover,
    textDecoration: 'underline',
  },
})

export { text, linkStyle }
