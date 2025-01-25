import React, { useEffect, useState } from 'react'

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
  padding: `0px ${size.spacing.large}`,
  background: 'rgba(0, 0, 0, 0.04)',
  borderRadius: '10px',
  marginTop: `-${size.spacing.medium}`,
})

const buttonDivider = style({
  width: '2px',
  height: '30px',
  background: 'rgba(0, 0, 0, 0.7)',
})

function App() {
  const [pageState, setPageState] = useState(PageState.HOME)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const currentwWidth =
        document.documentElement.clientWidth || window.innerWidth
      setIsMobile(currentwWidth <= 1400)
    }

    window.addEventListener('resize', handleResize)

    // Initial check
    handleResize()

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={container}>
      <Bio containerVariant={isMobile ? 'mobile' : 'desktop'} />

      <div className={buttonContainer}>
        <Button
          onClick={() => setPageState(PageState.HOME)}
          textVariant={pageState === PageState.HOME ? 'menu' : 'menuunselected'}
        >
          Home
        </Button>
        <div className={buttonDivider} />
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
