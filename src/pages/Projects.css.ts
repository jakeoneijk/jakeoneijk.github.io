import { style } from '@vanilla-extract/css'

import size, { color } from '../theme'

const IFRAME_HEIGHT = 500
const IFRAME_SCALE = 0.7

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
  alignItems: 'left',
  justifyContent: 'center',
  width: '100%',
})

export const categoryContainer = style({
  padding: size.spacing.m,
  marginBottom: size.spacing.ml,
  background: color.surface,
})

export const iframeContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  height: IFRAME_HEIGHT,
  marginBottom: -1 * (IFRAME_HEIGHT * (1 - IFRAME_SCALE)),
})

export const spacingDiv = style({
  width: '100%',
  height: size.spacing.xl2,
})

export const iframeClass = style({
  width: '130%',
  height: '100%',
  transform: `scale(${IFRAME_SCALE})`,
  transformOrigin: 'top',
  borderRadius: size.radius.l,
  boxShadow: `0 6px 20px ${color.shadowSoft}`,
  border: `1px solid ${color.border}`,
  backgroundColor: '#fafafa',
})
