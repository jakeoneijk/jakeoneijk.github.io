export const profile = {
  name: 'Jaekwon Im',
  tagline: 'Generative Audio Researcher',
  image: '/images/profile.png',
}

export type Position = {
  role: string
  affiliation: string
  /** Optional small logo shown before the affiliation (e.g. an institution mark). */
  affiliationIcon?: string
}

/** List as many roles/affiliations as needed; each renders as its own block. */
export const positions: Position[] = [
  {
    role: 'PhD Candidate',
    affiliation: 'KAIST',
    affiliationIcon: '/icons/institution/kaist.png',
  },
  {
    role: 'Research Intern',
    affiliation: 'NVIDIA',
    affiliationIcon: '/icons/institution/nvidia.png',
  },
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
