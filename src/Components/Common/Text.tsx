import { style, styleVariants } from '@macaron-css/core'

type Props = {
  children: JSX.Element | string
  variant?: keyof typeof textVariants
  style?: React.CSSProperties
}

const text = style({
  color: '#272727',
  fontFamily: 'Trebuchet MS',
  fontStyle: 'normal',
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
  menu: {
    fontSize: '24px',
    fontWeight: 900,
  },
  menuunselected: {
    fontSize: '24px',
    color: 'rgba(0, 0, 0, 0.35)',
  },
})

const Text = (props: Props) => {
  return (
    <span className={`${text} ${textVariants[props.variant || 'default']}`}>
      {props.children}
    </span>
  )
}

export default Text
