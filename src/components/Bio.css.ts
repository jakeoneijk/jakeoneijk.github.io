import { keyframes, style } from '@vanilla-extract/css'

import size, { color, font } from '../theme'

const toastIn = keyframes({
  from: { opacity: 0, transform: 'translate(-50%, -8px)' },
  to: { opacity: 1, transform: 'translate(-50%, 0)' },
})

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
  '@media': {
    // Stacked Bio: profile on top, then a centered horizontal row of icon-only
    // links beneath it.
    [size.media.mobile]: {
      marginLeft: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
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

// Short self-description headline; styled like the former role text.
export const tagline = style({
  display: 'block',
  fontFamily: font.body,
  fontWeight: 600,
  fontSize: '16px',
  color: color.textStrong,
})

// Aligns every position into shared columns: [logo] role · affiliation.
export const positions = style({
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto',
  alignItems: 'center',
  columnGap: size.spacing.s,
  rowGap: size.spacing.s,
  marginTop: size.spacing.s,
  width: 'fit-content',
  '@media': {
    [size.media.mobile]: {
      justifyContent: 'center',
      marginBottom: size.spacing.l,
    },
  },
})

// Flatten each row's cells into the parent grid so columns align across rows.
export const position = style({
  display: 'contents',
})

export const positionText = style({
  fontFamily: font.body,
  fontWeight: 400,
  fontSize: '14px',
  color: color.text,
})

export const positionRole = style({
  fontWeight: 500,
  color: color.textStrong,
})

export const positionSep = style({
  color: color.textMuted,
})

export const affiliationIcon = style({
  width: '28px',
  height: '28px',
  objectFit: 'contain',
  flexShrink: 0,
})

export const socialList = style({
  // Separate the contact links from the (tightly-stacked) position lines so they
  // read as their own group (≈24px).
  marginTop: `calc(${size.spacing.l} + ${size.spacing.m})`,
  '@media': {
    // Below the profile: a centered horizontal row of icon-only links.
    [size.media.mobile]: {
      marginTop: size.spacing.s,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: size.spacing.m,
    },
  },
})

export const socialRow = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: size.spacing.s,
  '@media': {
    // Spacing is handled by the list's gap when stacked.
    [size.media.mobile]: { marginTop: 0 },
  },
})

export const socialLink = style({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
  // Let a <button> (copy action) render identically to the <a> links.
  margin: 0,
  padding: 0,
  border: 'none',
  background: 'none',
  fontFamily: 'inherit',
  cursor: 'pointer',
  '@media': {
    // Larger hit area for touch.
    [size.media.mobile]: { padding: size.spacing.s },
  },
})

export const socialIcon = style({
  height: '17px',
  marginLeft: size.spacing.s,
  marginRight: size.spacing.m,
  '@media': {
    // Icon-only on mobile: enlarge slightly and drop label-related margins.
    [size.media.mobile]: {
      height: '22px',
      marginLeft: 0,
      marginRight: 0,
    },
  },
})

export const socialLabel = style({
  fontFamily: font.body,
  fontWeight: 500,
  fontSize: '15px',
  color: color.textStrong,
  '@media': {
    // Icon-only links when stacked; the name stays accessible via alt/title.
    [size.media.mobile]: { display: 'none' },
  },
})

// Fixed, viewport-centered confirmation toast — identical on every device.
export const toast = style({
  position: 'fixed',
  top: size.spacing.xl,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  gap: size.spacing.m,
  padding: `${size.spacing.m} ${size.spacing.l}`,
  borderRadius: size.radius.s,
  backgroundColor: color.textStrong,
  color: color.elevated,
  fontFamily: font.body,
  fontSize: '14px',
  fontWeight: 500,
  boxShadow: `0 6px 20px ${color.shadow}`,
  pointerEvents: 'none',
  animation: `${toastIn} 0.2s ease both`,
  '@media': {
    '(prefers-reduced-motion: reduce)': { animation: 'none' },
  },
})

export const toastIcon = style({
  fontSize: '15px',
  fontWeight: 700,
  lineHeight: 1,
})
