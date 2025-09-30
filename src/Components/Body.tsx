import { style } from '@macaron-css/core'
import { Routes, Route, Navigate } from 'react-router-dom'

import size from '../Property/Size'
import CV from './BodyComponents/CV'
import Home from './BodyComponents/Home'
import Projects from './BodyComponents/Projects'

type BodyProps = {}

const container = style({
  height: '100%',
  paddingTop: size.spacing.xl,
  overflow: 'scroll',
  
  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'transparent',
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },

  // For Firefox
  scrollbarWidth: 'thin',
  scrollbarColor: 'transparent transparent',
})

function Body({}: BodyProps) {
  return (
    <div className={`${container} Body`}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cv' element={<CV />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  )
}

export default Body
