import { Fragment } from 'react'
import type { IconType } from 'react-icons'
import { LuAudioLines, LuDog, LuLayers, LuMusic, LuSpeech } from 'react-icons/lu'

import { Text } from '@/components/Text'
import {
  descriptionEntities,
  notice,
  researchInterests,
  type Entity,
  type InterestIcon,
} from '@/data/profile'
import * as styles from './Home.css'

const interestIcons: Record<InterestIcon, IconType> = {
  audio: LuAudioLines,
  speech: LuSpeech,
  music: LuMusic,
  foley: LuDog,
  multimodal: LuLayers,
}

// Renders an inline entity: a leading logo when `imgSrc` is set, wrapped in a
// link when `href` is set.
const InlineEntity = ({ label, imgSrc, href }: Entity) => {
  const body = (
    <>
      {imgSrc && (
        <img className={styles.inlineLogo} src={imgSrc} alt='' aria-hidden />
      )}
      {label}
    </>
  )

  return href ? (
    <Text variant='description' link={href}>
      {body}
    </Text>
  ) : (
    body
  )
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
          I am a final-year Ph.D. candidate at{' '}
          <InlineEntity {...descriptionEntities.kaist} /> (
          <InlineEntity {...descriptionEntities.macLab} />) advised by
          Professor{' '}
          <InlineEntity {...descriptionEntities.juhan} />, and currently a
          Research Intern at{' '}
          <InlineEntity {...descriptionEntities.nvidia} />. My research focuses
          on deep generative models for audio and music, including diffusion,
          flow matching, and autoregressive methods, with an emphasis on high
          perceptual quality in real-world applications. Previously, I
          co-founded{' '}
          <InlineEntity {...descriptionEntities.audai} />, where I contributed
          to VOX Factory, an online singing voice synthesizer.
        </Text>
      </div>
    </div>
  )
}
