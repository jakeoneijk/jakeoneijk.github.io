import { globalStyle, style } from '@vanilla-extract/css'

import size, { color, font } from '../theme'

globalStyle('*', {
  boxSizing: 'border-box',
})

export const container = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'start',
  justifyContent: 'space-between',
  padding: `${size.spacing.l} ${size.spacing.xl}`,
  '@media': {
    [size.media.mobile]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
})

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: size.section.bodyWidth,
  maxWidth: '100%',
  minWidth: 0,
  flexShrink: 1,
  '@media': {
    [size.media.mobile]: {
      width: '100%',
      marginTop: size.spacing.xl,
    },
  },
})

export const navBar = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: 'fit-content',
  gap: size.spacing.s,
  padding: size.spacing.s,
  background: color.surfaceSoft,
  borderRadius: '14px',
})

export const navItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${size.spacing.m} ${size.spacing.l}`,
  borderRadius: '10px',
  fontFamily: font.body,
  fontSize: '16px',
  fontWeight: 500,
  letterSpacing: '0.01em',
  color: color.textMuted,
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
  ':hover': {
    color: color.text,
  },
  ':focus-visible': {
    outline: `2px solid ${color.accent}`,
    outlineOffset: '2px',
  },
})

export const navItemActive = style({
  background: color.elevated,
  color: color.textStrong,
  boxShadow: `0 1px 3px ${color.shadowSoft}`,
})

export const pageArea = style({
  width: '100%',
  height: '100%',
  paddingTop: size.spacing.xl,
  overflowY: 'auto',
  scrollbarWidth: 'thin',
  scrollbarColor: 'transparent transparent',
  '::-webkit-scrollbar-thumb': { backgroundColor: 'transparent' },
  '::-webkit-scrollbar-track': { backgroundColor: 'transparent' },
})

export const placeHolder = style({
  width: size.section.bioWidth,
  flexShrink: 0,
  '@media': {
    [size.media.mobile]: {
      display: 'none',
    },
  },
})
