import { globalStyle, style } from '@vanilla-extract/css'

import size, { color, font } from '../theme'

globalStyle('*', {
  boxSizing: 'border-box',
})

// App-shell: lock the page to the viewport height on desktop so only the
// content pane scrolls (Bio + nav stay pinned). On mobile, fall back to normal
// document scroll.
globalStyle('html, body, #root', {
  height: '100%',
  '@media': {
    [size.media.mobile]: {
      height: 'auto',
    },
  },
})

globalStyle('body', {
  overflow: 'hidden',
  '@media': {
    [size.media.mobile]: {
      overflow: 'visible',
    },
  },
})

export const container = style({
  width: '100%',
  height: '100%',
  // Clip the outer box so the inner content pane owns the only scrollbar.
  overflow: 'hidden',
  display: 'grid',
  // Medium widths: sidebar pinned left, content fills the remaining space.
  gridTemplateColumns: `${size.section.bioWidth} minmax(0, 1fr)`,
  columnGap: size.spacing.xl,
  // Stretch cells to full height so the content column can host its own scroll.
  alignItems: 'stretch',
  padding: `${size.spacing.l} ${size.spacing.xl}`,
  '@media': {
    [size.media.mobile]: {
      // Mobile: revert to normal document flow and full-page scroll.
      height: 'auto',
      overflow: 'visible',
      gridTemplateColumns: '1fr',
      justifyItems: 'center',
    },
    // Wide screens: equal flexible side tracks center the body in the viewport,
    // while the sidebar stays at the left edge of its (now wide) left track.
    [size.media.wide]: {
      gridTemplateColumns: `minmax(0, 1fr) minmax(0, ${size.section.bodyWidth}) minmax(0, 1fr)`,
    },
  },
})

export const main = style({
  // Fill the remaining space, cap at the natural body width, and center within
  // that space — so the body never shrinks while room is available, and stays
  // centered (not stretched) on wide screens.
  justifySelf: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: size.section.bodyWidth,
  minWidth: 0,
  // Fill the grid row; minHeight:0 lets the inner pane scroll instead of growing.
  height: '100%',
  minHeight: 0,
  '@media': {
    [size.media.mobile]: {
      height: 'auto',
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
  // Stay pinned at the top of the content column; never shrink on scroll.
  flexShrink: 0,
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
  // Take the remaining height below the nav and scroll internally.
  flex: 1,
  minHeight: 0,
  paddingTop: size.spacing.xl,
  overflowY: 'auto',
  scrollbarWidth: 'thin',
  scrollbarColor: 'transparent transparent',
  '::-webkit-scrollbar-thumb': { backgroundColor: 'transparent' },
  '::-webkit-scrollbar-track': { backgroundColor: 'transparent' },
  '@media': {
    [size.media.mobile]: {
      // Mobile: grow with content and let the document scroll.
      flex: 'none',
      minHeight: 'auto',
      overflowY: 'visible',
    },
  },
})
