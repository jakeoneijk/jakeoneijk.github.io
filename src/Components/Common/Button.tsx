import { type ReactNode } from "react";
import { styleVariants } from '@macaron-css/core'
import Text, { textVariants } from './Text'

type Props = {
  children: ReactNode
  textVariant?: keyof typeof textVariants
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  style?: React.CSSProperties
}

const variants = styleVariants({
  text: {
    backgroundColor: 'transparent',
    border: 'transparent',
    padding: '0px',
    cursor: 'pointer',
    transition: '0.2s',
    width: 'fit-content',
    height: 'fit-content',
    borderRadius: '10px',
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  },
})

const Button = (props: Props) => {
  return (
    <button
      className={`${variants['text']}`}
      onClick={props.onClick}
      style={props.style}
    >
      <Text variant={props.textVariant}>{props.children}</Text>
    </button>
  )
}

export default Button
