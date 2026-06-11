import { style } from '@vanilla-extract/css'

import size, { color, font } from '../theme'

export const container = style({
  width: size.section.bodyWidth,
  maxWidth: '100%',
  height: '100%',
  overflow: 'hidden',
  '@media': {
    [size.media.mobile]: {
      width: '100%',
    },
  },
})

export const projectContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
})

export const categoryHeader = style({
  marginTop: size.spacing.l,
  marginBottom: size.spacing.l,
  paddingBottom: size.spacing.m,
  borderBottom: `1px solid ${color.border}`,
})

export const projectTitle = style({
  margin: 0,
  fontFamily: font.body,
  fontSize: '22px',
  fontWeight: 600,
  lineHeight: 1.3,
  letterSpacing: '-0.015em',
  color: color.textStrong,
})

export const categoryLabel = style({
  fontFamily: font.body,
  fontSize: '13px',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  color: color.textMuted,
})

export const spacingDiv = style({
  width: '100%',
  height: size.spacing.xl2,
})

export const embedCard = style({
  width: '100%',
  maxWidth: '600px',
  aspectRatio: '16 / 9',
  alignSelf: 'center',
  marginTop: size.spacing.m,
  borderRadius: size.radius.l,
  border: `1px solid ${color.border}`,
  boxShadow: `0 6px 20px ${color.shadowSoft}`,
  backgroundColor: color.elevated,
  overflow: 'hidden',
})

export const embedFrame = style({
  display: 'block',
  width: '100%',
  height: '100%',
  border: 'none',
})
