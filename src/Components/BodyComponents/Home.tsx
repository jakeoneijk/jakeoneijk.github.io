import React from 'react'
import styled from 'styled-components'
import { RegularTextSpan } from '../../StyledComponents/StyledTextComponents'
import size from '../../Property/Size'
import { style } from '@macaron-css/core'

const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

function Home() {
  return (
    <div className={`${container} Home`}>
      <HomeImg src='/Home.png' alt='profile' />
      <TextDiv>
        <RegularTextSpan font_size='14px'>
          I am a Ph.D. student at Music and Audio Computing Lab, KAIST, under
          the supervision of Profesor Juhan Nam. My research interests include
          audio processing and synthesis through deep learning. I am also an
          amateur music producer. You can listen to my music from the youtube
          link in my bio.
        </RegularTextSpan>
      </TextDiv>
    </div>
  )
}

const HomeImg = styled.img`
  width: 520px;
`

const TextDiv = styled.div`
  margin-top: 20px;
  font-family: 'Trebuchet MS', sans-serif;
  width: 500px;
`

export default Home
