import { style } from '@vanilla-extract/css'

import size, { color, font } from '../theme'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  width: size.section.bioWidth,
  '@media': {
    [size.media.mobile]: { alignItems: 'center' },
  },
})

export const name = style({
  marginBottom: size.spacing.xl,
})

export const content = style({
  marginLeft: size.spacing.m,
})

export const profile = style({
  '@media': {
    [size.media.mobile]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
})

export const profileImage = style({
  width: '120px',
  borderRadius: size.radius.s,
  marginBottom: '10px',
})

export const role = style({
  '@media': {
    [size.media.mobile]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: size.spacing.l,
    },
  },
})

export const roleText = style({
  fontFamily: font.body,
  fontWeight: 600,
  fontSize: '16px',
  color: color.textStrong,
})

export const affiliationText = style({
  fontFamily: font.body,
  fontWeight: 400,
  fontSize: '14px',
  color: color.text,
})

export const socialList = style({
  marginTop: size.spacing.ml,
})

export const socialRow = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: size.spacing.s,
})

export const socialLink = style({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
})

export const socialIcon = style({
  height: '17px',
  marginLeft: size.spacing.s,
  marginRight: size.spacing.m,
})

export const socialLabel = style({
  fontFamily: font.body,
  fontWeight: 500,
  fontSize: '15px',
  color: color.textStrong,
})
