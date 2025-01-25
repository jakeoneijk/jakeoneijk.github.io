import { style } from '@macaron-css/core'
import React from 'react'
import styled from 'styled-components'

const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})
function CV() {
  return (
    <div className={`${container} CV`}>
      <IframeDiv src='/JAEKWON_IM_CV.pdf' />
    </div>
  )
}

const IframeDiv = styled.iframe`
  width: 850px;
  height: 650px;
`

export default CV
