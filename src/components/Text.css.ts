import { style, styleVariants } from '@vanilla-extract/css'

import { color, font } from '../theme'

export const text = style({
  fontFamily: font.family,
  fontStyle: 'normal',
  color: color.text,
})

export const textVariants = styleVariants({
  default: { fontSize: '16px', fontWeight: 400 },
  h1: { fontSize: '40px', fontWeight: 600 },
  h2: { fontSize: '28px', fontWeight: 600 },
  description: { fontSize: '14px', fontWeight: 400 },
  subDescription: { fontSize: '14px', fontWeight: 400, color: color.textMuted },
})

export const linkStyle = style({
  color: color.link,
  cursor: 'pointer',
  textDecoration: 'none',
})
