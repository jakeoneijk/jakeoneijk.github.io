export type SocialLink = {
  icon: string
  alt: string
  label: string
  href?: string
  // When set, clicking copies this text to the clipboard instead of navigating.
  copyText?: string
}

export const socialLinks: SocialLink[] = [
  {
    icon: '/icons/email.png',
    alt: 'email',
    label: 'jakeoneijk@kaist.ac.kr',
    copyText: 'jakeoneijk@kaist.ac.kr',
  },
  {
    icon: '/icons/google-scholar.png',
    alt: 'google scholar',
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=VNDwfVkAAAAJ',
  },
  {
    icon: '/icons/linkedin.png',
    alt: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jaekwon-im-995b3b170',
  },
  {
    icon: '/icons/twitter.png',
    alt: 'twitter',
    label: 'Twitter',
    href: 'https://twitter.com/osalooloo',
  },
  {
    icon: '/icons/github.png',
    alt: 'github',
    label: 'GitHub',
    href: 'https://github.com/jakeoneijk',
  },
  {
    icon: '/icons/youtube.png',
    alt: 'youtube',
    label: 'YouTube (My music)',
    href: 'https://www.youtube.com/channel/UCR5ICei5K6hmbzeWNz9JHuA',
  },
]
