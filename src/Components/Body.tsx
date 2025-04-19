import { PageState } from './PageState'
import { style } from '@macaron-css/core'
import size from '../Property/Size'
import CV from './BodyComponents/CV'
import Home from './BodyComponents/Home'
import Projects from './BodyComponents/Projects'

type BodyProps = {
  pageState: PageState
}

const container = style({
  height: '100%',
  paddingTop: size.spacing.xl,
  overflow: 'scroll',
})

function Body({ pageState }: BodyProps) {
  return (
    <div className={`${container} Body`}>
      {pageState === PageState.HOME ? <Home /> : ''}
      {pageState === PageState.CV ? <CV /> : ''}
      {pageState === PageState.PROJECTS ? <Projects /> : ''}
    </div>
  )
}

export default Body
