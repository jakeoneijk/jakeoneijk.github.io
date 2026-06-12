import { style } from '@vanilla-extract/css'

import size, { color, font } from '../theme'

export const MAX_WIDTH = parseInt(size.section.bodyWidth, 10)

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
})

export const controlBar = style({
  display: 'flex',
  alignItems: 'center',
  gap: size.spacing.m,
  marginBottom: size.spacing.l,
  flexWrap: 'wrap',
  justifyContent: 'center',
})

export const controlButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: size.spacing.m,
  minWidth: '40px',
  padding: `${size.spacing.m} ${size.spacing.l}`,
  borderRadius: size.radius.s,
  border: `1px solid ${color.border}`,
  backgroundColor: 'transparent',
  color: color.text,
  fontFamily: font.body,
  fontSize: '15px',
  fontWeight: 500,
  textDecoration: 'none',
  cursor: 'pointer',
  transition: '0.2s',
  ':hover': {
    backgroundColor: color.hover,
  },
  ':disabled': {
    opacity: 0.4,
    cursor: 'default',
  },
})

export const zoomLabel = style({
  fontFamily: font.body,
  fontSize: '14px',
  fontWeight: 400,
  color: color.textMuted,
  minWidth: '48px',
  textAlign: 'center',
})

export const scrollArea = style({
  width: `${MAX_WIDTH}px`,
  maxWidth: '100%',
  overflowX: 'auto',
  '@media': {
    [size.media.mobile]: {
      width: '100%',
    },
  },
})

export const documentInner = style({
  margin: '0 auto',
  width: 'fit-content',
})

export const pageWrapper = style({
  marginBottom: size.spacing.l,
  boxShadow: `0 2px 12px ${color.shadow}`,
})
