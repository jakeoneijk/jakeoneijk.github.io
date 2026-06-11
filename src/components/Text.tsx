import type { CSSProperties, ReactNode } from 'react'

import { text, textVariants, linkStyle } from './Text.css'

type Props = {
  children: ReactNode
  variant?: keyof typeof textVariants
  style?: CSSProperties
  link?: string
}

export const Text = ({
  children,
  variant = 'default',
  style: inlineStyle,
  link,
}: Props) => {
  const className = `${text} ${textVariants[variant]}`

  if (link) {
    return (
      <a
        className={`${className} ${linkStyle}`}
        style={inlineStyle}
        href={link}
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
      </a>
    )
  }

  return (
    <span className={className} style={inlineStyle}>
      {children}
    </span>
  )
}
