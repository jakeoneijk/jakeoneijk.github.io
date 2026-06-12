export const profile = {
  name: 'Jaekwon Im',
  role: 'Researcher & Developer',
  affiliation: 'PhD Student | MAC Lab | GSCT, KAIST',
  image: '/Profile.png',
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
