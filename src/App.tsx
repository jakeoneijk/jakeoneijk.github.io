import { useState } from 'react'

import { globalStyle, style } from '@macaron-css/core'

import Body from './Components/Body'
import { PageState } from './Components/PageState'
import Bio from './Components/Bio'
import size from './Property/Size'
import Button from './Components/Common/Button'

globalStyle('*', {
  boxSizing: 'border-box',
})

const BUTTON_WIDTH = '100px'

const container = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'start',
  justifyContent: 'space-between',
  padding: `${size.spacing.l} ${size.spacing.xl}`,
  '@media': {
    [size.media.mobile]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
})

const bodyContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: size.section.bodyWidth,
  flexShrink: 0,
  '@media': {
    [size.media.mobile]: {
      width: '100%',
      marginTop: size.spacing.xl,
    },
  },
})

const buttonContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: 'fit-content',
  height: '40px',
  gap: size.spacing.s,
  padding: `0px ${size.spacing.s}`,
  background: 'rgba(0, 0, 0, 0.04)',
  borderRadius: '10px',
})

const buttonDivider = style({
  width: '2px',
  height: '30px',
  background: 'rgba(0, 0, 0, 0.7)',
})

const placeHolder = style({
  height: '100px',
  width: size.section.bioWidth,
  flexShrink: 0,
  '@media': {
    [size.media.mobile]: {
      display: 'none',
    },
  },
})

function App() {
  const [pageState, setPageState] = useState(PageState.HOME)

  return (
    <div className={`${container} App`}>
      <Bio />
      <div className={bodyContainer}>
        <div className={buttonContainer}>
          <Button
            onClick={() => setPageState(PageState.HOME)}
            textVariant={
              pageState === PageState.HOME ? 'menu' : 'menuunselected'
            }
            style={{
              width: BUTTON_WIDTH,
            }}
          >
            Home
          </Button>
          <div className={buttonDivider} />
          <Button
            onClick={() => setPageState(PageState.CV)}
            textVariant={pageState === PageState.CV ? 'menu' : 'menuunselected'}
            style={{
              width: BUTTON_WIDTH,
            }}
          >
            CV
          </Button>
          <div className={buttonDivider} />
          <Button
            onClick={() => setPageState(PageState.PROJECTS)}
            textVariant={
              pageState === PageState.PROJECTS ? 'menu' : 'menuunselected'
            }
            style={{
              width: BUTTON_WIDTH,
            }}
          >
            Projects
          </Button>
        </div>

        <Body pageState={pageState} />
      </div>
      <div className={placeHolder}></div>
    </div>
  )
}

export default App
