export const profile = {
  name: 'Jaekwon Im',
  role: 'Researcher & Developer',
  affiliation: 'PhD Student | MAC Lab | GSCT, KAIST',
  image: '/images/profile.png',
}

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
    { icon: 'audio', text: 'Audio Generation ' },
    { icon: 'speech', text: 'Speech' },
    { text: ', ' },
    { icon: 'music', text: 'Music' },
    { text: ', ' },
    { icon: 'foley', text: 'Foley' },
  ],
  [{ text: 'Multimodal Generation' }],
]
