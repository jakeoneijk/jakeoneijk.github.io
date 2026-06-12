import { style } from '@vanilla-extract/css'

import size, { color, font } from '../theme'

export const container = style({
  width: size.section.bodyWidth,
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: size.spacing.xl2,
  '@media': {
    [size.media.mobile]: {
      width: '100%',
    },
  },
})

export const categoryGroup = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const categoryHeader = style({
  marginBottom: size.spacing.l,
  paddingBottom: size.spacing.m,
  borderBottom: `1px solid ${color.border}`,
})

export const categoryLabel = style({
  fontFamily: font.body,
  fontSize: '13px',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  color: color.textMuted,
})

export const projectItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  // Even vertical rhythm between title / authors / note / link / bullets / embed.
  gap: size.spacing.ml,
  // Separate entries with whitespace only — the hairline rule is reserved for
  // category headers so those read as the declarative section dividers.
  paddingTop: size.spacing.m,
  paddingBottom: size.spacing.xl,
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

export const bulletList = style({
  margin: 0,
  paddingLeft: size.spacing.xl,
  display: 'flex',
  flexDirection: 'column',
  gap: size.spacing.s,
})

export const embedCard = style({
  width: '100%',
  maxWidth: '600px',
  aspectRatio: '16 / 9',
  alignSelf: 'center',
  marginTop: size.spacing.s,
  borderRadius: size.radius.l,
  border: `1px solid ${color.border}`,
  boxShadow: `0 6px 20px ${color.shadowSoft}`,
  backgroundColor: color.elevated,
  overflow: 'hidden',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  ':hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 12px 28px ${color.shadow}`,
  },
})

export const embedFrame = style({
  display: 'block',
  width: '100%',
  height: '100%',
  border: 'none',
})
