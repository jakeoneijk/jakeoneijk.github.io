export const profile = {
  name: 'Jaekwon Im',
  tagline: 'Generative Audio Researcher',
  image: '/images/profile.png',
}

/**
 * A referenceable entity: a display `label`, with an optional leading logo
 * (`imgSrc`) and/or an optional external `href`. Shared by institutions and the
 * inline links in the Home description so everything uses the same field names.
 */
export type Entity = {
  label: string
  imgSrc?: string
  href?: string
}

/**
 * Single source of truth for institutions, referenced by both `positions` (Bio)
 * and `descriptionEntities` (Home) so a label, logo, or link is defined once.
 */
export const institutions = {
  kaist: {
    label: 'KAIST',
    imgSrc: '/icons/institution/kaist.png',
    href: 'https://kaist.ac.kr/en/',
  },
  nvidia: {
    label: 'NVIDIA',
    imgSrc: '/icons/institution/nvidia.png',
    href: 'https://www.nvidia.com/en-us/research/',
  },
  audai: {
    label: 'AudAi',
    imgSrc: '/icons/institution/audai.png',
    href: 'https://voxfactory.app/',
  },
} satisfies Record<string, Entity>

/**
 * Inline entities referenced in the Home description: every institution (reused
 * as-is), plus a few one-off links.
 */
export const descriptionEntities = {
  ...institutions,
  macLab: {
    label: 'Music and Audio Computing Lab',
    href: 'https://mac.kaist.ac.kr/',
  },
  juhan: {
    label: 'Juhan Nam',
    href: 'https://mac.kaist.ac.kr/~juhan/',
  },
} satisfies Record<string, Entity>

export type Position = {
  role: string
  institution: Entity
}

/** List as many roles/affiliations as needed; each renders as its own block. */
export const positions: Position[] = [
  { role: 'PhD Candidate', institution: institutions.kaist },
  { role: 'Research Intern', institution: institutions.nvidia },
]

/** Toggle `show` to display an announcement banner on the Home page. */
export const notice = {
  show: false,
  text: '🔥 Plan to enter the job market at 2027 March! 🔥',
}

export type InterestIcon = 'audio' | 'speech' | 'music' | 'foley' | 'multimodal'

/** A chip is a list of tokens; a token optionally carries a leading icon. */
export type InterestToken = { icon?: InterestIcon; text: string }

export const researchInterests: InterestToken[][] = [
  [
    { icon: 'audio', text: 'Audio Generation ( ' },
    { icon: 'speech', text: 'Speech' },
    { text: ', ' },
    { icon: 'music', text: 'Music' },
    { text: ', ' },
    { icon: 'foley', text: 'Foley' },
    { text: ' )' },
  ],
  [{ text: 'Multimodal Generation' }],
]
