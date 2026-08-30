import { Fragment } from 'react'
import type { IconType } from 'react-icons'
import {
  LuAudioLines,
  LuDog,
  LuLayers,
  LuMusic,
  LuSpeech,
} from 'react-icons/lu'

import { Text } from '@/components/Text'
import {
  bio,
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

// An entity inline in the prose: logo when `imgSrc`, linked when `href`.
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

// Swaps each known `{key}` for its entity; unknown keys stay as plain text.
const renderParagraph = (text: string) =>
  text.split(/\{(\w+)\}/).map((part, index) => {
    if (index % 2 === 0) return part
    const entity = descriptionEntities[part as keyof typeof descriptionEntities]
    return entity ? <InlineEntity key={index} {...entity} /> : `{${part}}`
  })

// Blank lines split paragraphs; single line breaks are just source wrapping.
const bioParagraphs = bio
  .trim()
  .split(/\n\s*\n/)
  .map((paragraph) => paragraph.replace(/\s*\n\s*/g, ' '))

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
                    {Icon && (
                      <Icon className={styles.interestIcon} aria-hidden />
                    )}
                    {token.text}
                  </Fragment>
                )
              })}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.textContainer}>
        {bioParagraphs.map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            <Text variant='description'>{renderParagraph(paragraph)}</Text>
          </p>
        ))}
      </div>
    </div>
  )
}
