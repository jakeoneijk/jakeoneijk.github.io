import { style } from '@vanilla-extract/css'

import size from '../theme'

export const container = style({
  marginTop: size.spacing.xl2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const image = style({
  width: '600px',
  maxWidth: '100%',
})

export const textContainer = style({
  width: size.section.bodyWidth,
  maxWidth: '100%',
  marginTop: `calc(${size.spacing.s} + ${size.spacing.l})`,
})
