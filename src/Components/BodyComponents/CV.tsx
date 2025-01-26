import { style } from '@macaron-css/core'
import size from '../../Property/Size'

const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '@media': {
    [size.media.mobile]: {
      width: '100%',
    },
  },
})

const pdf = style({
  width: '850px',
  height: '650px',
  '@media': {
    [size.media.mobile]: {
      width: '100%',
    },
  },
})
function CV() {
  return (
    <div className={`${container} CV`}>
      <iframe className={pdf} src='/JAEKWON_IM_CV.pdf' />
    </div>
  )
}

export default CV
