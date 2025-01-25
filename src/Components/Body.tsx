import styled from 'styled-components'
import Bio from './Bio'
import CV from './BodyComponents/CV'
import Home from './BodyComponents/Home'
import { PageState } from './PageState'
import { style } from '@macaron-css/core'
import size from '../Property/Size'

type BodyProps = {
  pageState: PageState
}

const container = style({
  width: '1000px',
  height: '100%',
  paddingTop: size.spacing.xl,
  overflow: 'scroll',
})

function Body({ pageState }: BodyProps) {
  return (
    <div className={`${container} Body`}>
      {pageState === PageState.HOME ? <Home /> : ''}
      {pageState === PageState.CV ? <CV /> : ''}
    </div>
  )
}

export default Body
