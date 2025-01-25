import React, { useState } from 'react'

import { globalStyle, style } from '@macaron-css/core'

import Body from './Components/Body'
import Footer from './Components/Footer'
import { PageState } from './Components/PageState'
import Bio from './Components/Bio'
import size from './Property/Size'
import Button from './Components/Common/Button'
import Text from './Components/Common/Text'

globalStyle('*', {
  boxSizing: 'border-box',
})

const container = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: size.spacing.xl,
})

const buttonContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  height: '40px',
  gap: size.spacing.large,
  padding: size.spacing.large,
  background: 'rgba(0, 0, 0, 0.04)',
  borderRadius: '10px',
  marginTop: `-${size.spacing.medium}`,
})

function App() {
  const [pageState, setPageState] = useState(PageState.HOME)

  return (
    <div className={container}>
      <Bio />

      <div className={buttonContainer}>
        <Button
          onClick={() => setPageState(PageState.HOME)}
          textVariant={pageState === PageState.HOME ? 'menu' : 'menuunselected'}
        >
          Home
        </Button>
        <Button
          onClick={() => setPageState(PageState.CV)}
          textVariant={pageState === PageState.CV ? 'menu' : 'menuunselected'}
        >
          CV
        </Button>
      </div>

      <Body pageState={pageState} />
      <Footer />
    </div>
  )
}

export default App
