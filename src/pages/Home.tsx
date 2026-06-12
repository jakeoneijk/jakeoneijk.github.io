import { Fragment } from 'react'
import type { IconType } from 'react-icons'
import { LuAudioLines, LuDog, LuLayers, LuMusic, LuSpeech } from 'react-icons/lu'

import { Text } from '@/components/Text'
import { profileLinks } from '@/data/links'
import { notice, researchInterests, type InterestIcon } from '@/data/profile'
import * as styles from './Home.css'

const interestIcons: Record<InterestIcon, IconType> = {
  audio: LuAudioLines,
  speech: LuSpeech,
  music: LuMusic,
  foley: LuDog,
  multimodal: LuLayers,
}

export const Home = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src='/images/home.png' alt='profile' />
      {notice.show && <div className={styles.notice}>{notice.text}</div>}
      <div className={styles.interests}>
        <span className={styles.interestsLabel}>Research Interests</span>
        <div className={styles.interestsList}>
          {researchInterests.map((tokens, index) => (
            <span key={index} className={styles.interestChip}>
              {tokens.map((token, tokenIndex) => {
                const Icon = token.icon ? interestIcons[token.icon] : null
                return (
                  <Fragment key={tokenIndex}>
                    {Icon && <Icon className={styles.interestIcon} aria-hidden />}
                    {token.text}
                  </Fragment>
                )
              })}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.textContainer}>
        <Text variant='description'>
          I am a final-year Ph.D. candidate at KAIST (
          <Text variant='description' link={profileLinks.macLab}>
            Music and Audio Computing Lab
          </Text>
          ) advised by Professor{' '}
          <Text variant='description' link={profileLinks.juhan}>
            Juhan Nam
          </Text>
          . My research focuses on improving the quality, efficiency, and
          controllability of generative models for audio generation and
          processing. I am passionate about developing audio generative models
          that achieve high perceptual quality in real-world scenarios, and I
          have worked on tasks such as video-to-audio generation, audio
          super-resolution, and acoustic transfer. Previously, I co-founded{' '}
          <Text variant='description' link={profileLinks.audAI}>
            AudAI
          </Text>
          , where I contributed to the development of singing voice synthesis,
          voice conversion, and neural vocoder. Additionally, I am a music
          producer, and you can find my music through{' '}
          <Text variant='description' link={profileLinks.music}>
            YouTube
          </Text>
          .
        </Text>
      </div>
    </div>
  )
}
