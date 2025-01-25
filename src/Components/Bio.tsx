import styled from 'styled-components'
import {
  RegularTextSpan,
  SemiBoldTextSpan,
} from '../StyledComponents/StyledTextComponents'
import size from '../Property/Size'
import { style, styleVariants } from '@macaron-css/core'

import Text from './Common/Text'

type Props = {
  containerVariant?: keyof typeof containerVariants
}

const container = style({
  display: 'flex',
  flexDirection: 'column',

  paddingTop: size.spacing.large,
  paddingLeft: size.spacing.xl,
})

const containerVariants = styleVariants({
  desktop: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '300px',
  },
  mobile: {
    marginBottom: size.spacing.xl2,
    width: '500px',
  },
})

const name = style({
  marginBottom: size.spacing.xl,
})

const content = style({
  marginLeft: size.spacing.medium,
})

const contentVariants = styleVariants({
  desktop: {},
  mobile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: size.spacing.large,
  },
})

const profileContainer = style({})

const profileContainerVariants = styleVariants({
  desktop: {},
  mobile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
})

const Bio = (props: Props) => {
  return (
    <div
      className={`${container} ${
        containerVariants[props.containerVariant || 'desktop']
      }`}
    >
      <div className={name}>
        <Text variant='h1'>{'Jaekwon Im'}</Text>
      </div>
      <div
        className={`${content} ${
          contentVariants[props.containerVariant || 'desktop']
        }`}
      >
        <div
          className={`${profileContainer} ${
            profileContainerVariants[props.containerVariant || 'desktop']
          }`}
        >
          <ProfileImg src='/Profile.png' alt='profile' />
          <div>
            <BioTextDiv>
              <SemiBoldTextSpan font_size='16px'>
                Researcher & Developer
              </SemiBoldTextSpan>
            </BioTextDiv>
            <BioTextDiv>
              <RegularTextSpan font_size='14px'>
                PhD Student | MAC Lab | GSCT, KAIST
              </RegularTextSpan>
            </BioTextDiv>
          </div>
        </div>
        <PersonalLinkDiv>
          <BioTextDiv>
            <PersonalLinkImg src='/EMail.png' alt='git' />
            <SemiBoldTextSpan font_size='15px'>
              jakeoneijk@kaist.ac.kr
            </SemiBoldTextSpan>
          </BioTextDiv>
          <BioTextDiv>
            <PersonalLinkImg src='/GoogleScholar.png' alt='google scholar' />
            <a
              href='https://scholar.google.com/citations?user=VNDwfVkAAAAJ'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SemiBoldTextSpan font_size='15px'>
                Google Scholar
              </SemiBoldTextSpan>
            </a>
          </BioTextDiv>
          <BioTextDiv>
            <PersonalLinkImg src='/SNSICon/twitter.png' alt='twitter' />
            <a
              href='https://twitter.com/osalooloo'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SemiBoldTextSpan font_size='15px'> Twitter </SemiBoldTextSpan>
            </a>
          </BioTextDiv>
          <BioTextDiv>
            <PersonalLinkImg src='/SNSICon/linkedin.png' alt='linkedin' />
            <a
              href='https://www.linkedin.com/in/jaekwon-im-995b3b170'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SemiBoldTextSpan font_size='15px'> LinkedIn </SemiBoldTextSpan>
            </a>
          </BioTextDiv>
          <BioTextDiv>
            <PersonalLinkImg src='/GitHubIcon.png' alt='git' />
            <a
              href='https://github.com/jakeoneijk'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SemiBoldTextSpan font_size='15px'> GitHub </SemiBoldTextSpan>
            </a>
          </BioTextDiv>
          <BioTextDiv>
            <PersonalLinkImg src='/Youtube.png' alt='youtube' />
            <a
              href='https://www.youtube.com/channel/UCR5ICei5K6hmbzeWNz9JHuA'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SemiBoldTextSpan font_size='15px'>
                YouTube (My music)
              </SemiBoldTextSpan>
            </a>
          </BioTextDiv>
        </PersonalLinkDiv>
      </div>
    </div>
  )
}

const ProfileImg = styled.img`
  border-radius: 10px;
  width: 120px;
  margin-bottom: 10px;
`

const BioTextDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  align-items: center;
`

const PersonalLinkDiv = styled.div`
  margin-top: 10px;
`

const PersonalLinkImg = styled.img`
  height: 17px;
  margin-left: 5px;
  margin-right: 10px;
`

const PageMenuDiv = styled.div`
  cursor: pointer;
`

export default Bio
