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
        {/* 
        <div className={alertContainer}>
          <Text style={{ background: '#F2F0EF' }}>
            <strong>
              🚀 Looking for research internship opportunities now! 🚀
            </strong>
          </Text>
        </div>
        */}
        <Text variant='description'>
          <>
            I am a Ph.D. student at Music and Audio Computing Lab, KAIST, under
            the supervision of {Juhan()}. My research focuses on advancing the
            quality and efficiency of generative models for audio generation and
            processing, with a particular emphasis on audio restoration and
            acoustic transfer. Previously, I was the co-founder and an AI/SW
            Engineer at {AudAI()}, where I contributed to developing advanced
            voice synthesis technologies, including voice conversion and singing
            voice synthesis modules. Additionally, I am an amateur music
            producer, and you can find my music through {Music()}.
          </>
        </Text>
      </div>
    </div>
  )
}

export default Home
