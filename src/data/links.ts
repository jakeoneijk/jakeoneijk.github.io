export type SocialLink = {
  icon: string
  alt: string
  label: string
  href?: string
}

export const socialLinks: SocialLink[] = [
  {
    icon: '/EMail.png',
    alt: 'email',
    label: 'jakeoneijk@kaist.ac.kr',
  },
  {
    icon: '/GoogleScholar.png',
    alt: 'google scholar',
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=VNDwfVkAAAAJ',
  },
  {
    icon: '/SNSICon/linkedin.png',
    alt: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jaekwon-im-995b3b170',
  },
  {
    icon: '/SNSICon/twitter.png',
    alt: 'twitter',
    label: 'Twitter',
    href: 'https://twitter.com/osalooloo',
  },
  {
    icon: '/GitHubIcon.png',
    alt: 'github',
    label: 'GitHub',
    href: 'https://github.com/jakeoneijk',
  },
  {
    icon: '/Youtube.png',
    alt: 'youtube',
    label: 'YouTube (My music)',
    href: 'https://www.youtube.com/channel/UCR5ICei5K6hmbzeWNz9JHuA',
  },
]

export const profileLinks = {
  macLab: 'https://mac.kaist.ac.kr/',
  juhan: 'https://mac.kaist.ac.kr/~juhan/',
  audAI: 'https://youtu.be/83V6FmmoOoU?si=uHEcz92XOnynRnEb',
  music: 'https://www.youtube.com/channel/UCR5ICei5K6hmbzeWNz9JHuA',
}
