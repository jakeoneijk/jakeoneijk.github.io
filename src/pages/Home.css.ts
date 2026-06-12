import { style } from '@vanilla-extract/css'

import size, { color, font } from '../theme'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const image = style({
  width: '600px',
  maxWidth: '100%',
  marginTop: size.spacing.l,
})

export const textContainer = style({
  width: size.section.bodyWidth,
  maxWidth: '100%',
  marginTop: `calc(${size.spacing.s} + ${size.spacing.l})`,
})

export const notice = style({
  width: size.section.bodyWidth,
  maxWidth: '100%',
  marginTop: size.spacing.l,
  fontFamily: font.body,
  fontSize: '17px',
  fontWeight: 600,
  letterSpacing: '0.01em',
  color: color.accent,
  textAlign: 'center',
})

export const interests = style({
  width: size.section.bodyWidth,
  maxWidth: '100%',
  marginTop: size.spacing.xl,
})

export const interestsLabel = style({
  display: 'block',
  marginBottom: size.spacing.ml,
  fontFamily: font.body,
  fontSize: '13px',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  color: color.textMuted,
})

export const interestsList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: size.spacing.m,
})

export const interestChip = style({
  padding: `${size.spacing.s} ${size.spacing.l}`,
  borderRadius: '999px',
  border: `1px solid ${color.borderStrong}`,
  backgroundColor: color.surfaceSoft,
  fontFamily: font.body,
  fontSize: '13px',
  fontWeight: 500,
  color: color.text,
})

export const interestIcon = style({
  display: 'inline-block',
  verticalAlign: '-0.15em',
  marginRight: '5px',
  fontSize: '1.05em',
  color: color.textMuted,
})
