import React from 'react';
import styled from 'styled-components';
import { ExtraBoldTextSpan, RegularTextSpan, SemiBoldTextSpan } from "../StyledComponents/StyledTextComponents";

type BioProps = {
  onClickCV: () => void;
};

function Bio({onClickCV}: BioProps){
  return (
    <BioDiv className="Bio">
        <ProfileImg src="/Profile.png" alt="profile"/>
        <div>
          <BioTextDiv>
            <SemiBoldTextSpan font_size="16px"> Researcher & Developer </SemiBoldTextSpan>
          </BioTextDiv>
          <BioTextDiv>
            <RegularTextSpan font_size="14px"> PhD Student | MAC Lab | GSCT, KAIST </RegularTextSpan>
          </BioTextDiv>
        </div>
        <PersonalLinkDiv>
          <BioTextDiv>
            <PersonalLinkImg src="/GitHubIcon.png" alt="git"/> 
            <a href="https://github.com/jakeoneijk" target="_blank" rel="noopener noreferrer">
              <SemiBoldTextSpan font_size="15px"> GitHub </SemiBoldTextSpan>
            </a>
          </BioTextDiv>
          <BioTextDiv>
            <PersonalLinkImg src="/Youtube.png" alt="git"/> 
            <a href="https://www.youtube.com/channel/UCR5ICei5K6hmbzeWNz9JHuA" target="_blank" rel="noopener noreferrer">
              <SemiBoldTextSpan font_size="15px"> YouTube (My music) </SemiBoldTextSpan>
            </a>
          </BioTextDiv>
          <BioTextDiv>
            <PersonalLinkImg src="/EMail.png" alt="git"/> 
              <SemiBoldTextSpan font_size="15px"> jakeoneijk@kaist.ac.kr </SemiBoldTextSpan>
          </BioTextDiv>
          <BioTextDiv>
            -------------------------------
          </BioTextDiv>
          <PageMenuDiv>
            <BioTextDiv>
              <ExtraBoldTextSpan font_size="14px" onClick={onClickCV}> &nbsp; CV </ExtraBoldTextSpan>
            </BioTextDiv>
          </PageMenuDiv>
        </PersonalLinkDiv>
        
    </BioDiv>
  );
}

const BioDiv = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
width: 400px;
`

const ProfileImg = styled.img`
width: 170px;
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

export default Bio;