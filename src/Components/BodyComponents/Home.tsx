import { style } from '@macaron-css/core'
import size from '../../Property/Size'
import Text from '../Common/Text'

const container = style({
  marginTop: `${size.spacing.xl2}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

const image = style({
  width: '520px',
  '@media': {
    [size.media.mobile]: {
      width: '100%',
    },
  },
})

const alertContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: size.spacing.m,
})

const textContainer = style({
  width: '520px',
  marginTop: `calc(${size.spacing.s} + ${size.spacing.l})`,
  '@media': {
    [size.media.mobile]: {
      width: '100%',
    },
  },
})

const MacLab = () => {
  return (
    <>
      <Text variant='description' link='https://mac.kaist.ac.kr/'>
        Music and Audio Computing Lab
      </Text>
    </>
  )
}

const Juhan = () => {
  return (
    <>
      {`Profesor `}
      <Text variant='description' link='https://mac.kaist.ac.kr/~juhan/'>
        Juhan Nam
      </Text>
    </>
  )
}

const AudAI = () => {
  return (
    <>
      <Text
        variant='description'
        link='https://youtu.be/83V6FmmoOoU?si=uHEcz92XOnynRnEb'
      >
        AudAI
      </Text>
    </>
  )
}

const Music = () => {
  return (
    <>
      <Text
        variant='description'
        link='https://www.youtube.com/channel/UCR5ICei5K6hmbzeWNz9JHuA'
      >
        YouTube
      </Text>
    </>
  )
}

function Home() {
  return (
    <div className={`${container} Home`}>
      <img className={image} src='/Home.png' alt='profile' />
      <div className={textContainer}>
        <div className={alertContainer}>
          {/*
          <Text style={{ background: '#F2F0EF' }}>
            <strong>
              🚀 Looking for 2026 Research Internship opportunities! 🚀
            </strong>
          </Text>
          <div style={{ background: '#F2F0EF' }}>
            Available from August 2025.
          </div>
          */}
        </div>
        <Text variant='description'>
          <>
            I am a Ph.D. candidate at KAIST ({MacLab()}) advised by {Juhan()}. 
            My research focuses on improving the quality, efficiency, and controllability of generative models for audio generation and processing. 
            I am passionate about developing audio generative models that achieve high perceptual quality in real-world scenarios, and I have worked on tasks such as video-to-audio generation, audio super-resolution, and acoustic transfer. 
            Previously, I co-founded {AudAI()}, where I contributed to the development of singing voice synthesis, voice conversion, and neural vocoder. 
            Additionally, I am a music producer, and you can find my music through {Music()}.
          </>
        </Text>
      </div>
    </div>
  )
}

export default Home
