import { type ReactNode } from "react";
import { style, styleVariants } from '@macaron-css/core'

type Props = {
  children: ReactNode | ReactNode[] | string
  variant?: keyof typeof textVariants
  style?: React.CSSProperties
  link?: string
}

const text = style({
  fontFamily: 'Trebuchet MS',
  fontStyle: 'normal',
  color: '#272727',
})

export const textVariants = styleVariants({
  default: {
    fontSize: '16px',
    fontWeight: 400,
  },
  h1: {
    fontSize: '40px',
    fontWeight: 600,
  },
  h2: {
    fontSize: '28px',
    fontWeight: 600,
  },
  menu: {
    fontSize: '24px',
    fontWeight: 900,
  },
  menuunselected: {
    fontSize: '24px',
    color: 'rgba(0, 0, 0, 0.35)',
  },
  description: {
    fontSize: '14px',
    fontWeight: 400,
  },
  subDescription: {
    fontSize: '14px',
    fontWeight: 400,
    color: 'rgba(0, 0, 0, 0.5)',
  },
})

const colorVariants = styleVariants({
  default: {},
  link: {
    color: '#0070f3',
    cursor: 'pointer',
  },
})

const Text = (props: Props) => {
  const handleClick = (link: string) => {
    //window.location.href = link
    window.open(link, '_blank')
  }
  return (
    <span
      className={`${text} ${textVariants[props.variant || 'default']} ${
        colorVariants[props.link ? 'link' : 'default']
      }`}
      style={props.style}
      onClick={props.link ? () => handleClick(props.link as string) : undefined}
    >
      {props.children}
    </span>
  )
}

export default Text
