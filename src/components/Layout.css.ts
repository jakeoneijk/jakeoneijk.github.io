import { globalStyle, keyframes, style } from '@vanilla-extract/css'

import size, { color, font } from '../theme'

const fadeInUp = keyframes({
  from: { opacity: 0, transform: 'translateY(8px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
})

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
  // Center the capped shell; on ultra-wide screens this yields balanced margins
  // (Tailwind-docs style) rather than stretching the layout.
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
  padding: `${size.spacing.l} ${size.spacing.xl}`,
  '@media': {
    [size.media.mobile]: {
      // Narrow: single centered column, normal document flow and full-page scroll.
      height: 'auto',
      overflow: 'visible',
    },
  },
})

export const inner = style({
  display: 'grid',
  // Bio pinned at its fixed width on the left; content fills the space beside it.
  gridTemplateColumns: `${size.section.bioWidth} minmax(0, 1fr)`,
  columnGap: size.spacing.xl,
  // Stretch cells to full height so the content column can host its own scroll.
  alignItems: 'stretch',
  width: '100%',
  maxWidth: size.section.shellWidth,
  minHeight: 0,
  '@media': {
    [size.media.mobile]: {
      gridTemplateColumns: '1fr',
      justifyItems: 'center',
    },
  },
})

export const main = style({
  // Left-align the body in its track (capped at bodyWidth) so the Bio↔content
  // gap stays a consistent columnGap at every width; extra space goes to the
  // right, à la Tailwind docs.
  justifySelf: 'start',
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

// Gentle fade/rise when navigating between pages. Replays on route change via a
// keyed wrapper. Disabled for users who prefer reduced motion.
export const pageTransition = style({
  width: '100%',
  animation: `${fadeInUp} 0.28s ease both`,
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
})
