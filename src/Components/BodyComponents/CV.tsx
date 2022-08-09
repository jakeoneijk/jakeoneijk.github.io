import React from 'react';
import styled from 'styled-components';
import { MediumTextSpan, RegularGreyTextSpan} from "../../StyledComponents/StyledTextComponents";

function CV() {
  return (
    <div className="CV">
        <SectionDiv>
            <SectionTitleDiv> EDUCATION </SectionTitleDiv>
            <SectionItemDiv>
                <MediumTextSpan font_size='15px'>KAIST, Ph.D. in Graduate School of Culture Technology (Advisor: Juhan Nam)</MediumTextSpan>
                <RegularGreyTextSpan font_size='13px'> 2022.03 ~ Now </RegularGreyTextSpan>
            </SectionItemDiv>
            <SectionItemDiv>
                <MediumTextSpan font_size='15px'>KAIST, M.S in Graduate School of Culture Technology (Advisor: Juhan Nam)</MediumTextSpan>
                <RegularGreyTextSpan font_size='13px'> 2020.03 ~ 2022.02 </RegularGreyTextSpan>
            </SectionItemDiv>
            <SectionItemDiv>
                <MediumTextSpan font_size='15px'>Chungnam National University, B.S. in Computer Science & Engineering</MediumTextSpan>
                <RegularGreyTextSpan font_size='13px'> 2013.03 ~ 2020.02</RegularGreyTextSpan>
            </SectionItemDiv>

            <SectionTitleDiv> EXPERIENCE </SectionTitleDiv>
            <SectionItemDiv>
                <MediumTextSpan font_size='15px'>Internship in ETRI (Autonomous Driving Intelligence Research department)</MediumTextSpan>
                <RegularGreyTextSpan font_size='13px'> 2019.07 ~ 2019.08 </RegularGreyTextSpan>
            </SectionItemDiv>
            <SectionItemDiv>
                <MediumTextSpan font_size='15px'>CNU Global SW Track Program at Purdue University</MediumTextSpan>
                <RegularGreyTextSpan font_size='13px'> 2019.01 ~ 2019.03 </RegularGreyTextSpan>
            </SectionItemDiv>

            <SectionTitleDiv> Award </SectionTitleDiv>
            <SectionItemDiv>
                <MediumTextSpan font_size='15px'>KCC 2019 encouragement award</MediumTextSpan>
                <RegularGreyTextSpan font_size='13px'> 2019 </RegularGreyTextSpan>
            </SectionItemDiv>
            <SectionItemDiv>
                <MediumTextSpan font_size='15px'>CNU ‘Thinking Programming Competition’ first prize</MediumTextSpan>
                <RegularGreyTextSpan font_size='13px'> 2019 </RegularGreyTextSpan>
            </SectionItemDiv>
        </SectionDiv>
    </div>
  );
}

const SectionDiv = styled.div`
display: flex;
flex-direction: column;
`

const SectionTitleDiv = styled.div`
margin-top : 30px;
font-family: 'Inter';
font-style: normal;
font-weight: 900;
font-size: 20px;

color: #9A300F;
`

const SectionItemDiv = styled.div`
display: flex;
flex-direction: column;
margin-top : 10px;
margin-left : 5px;
`


export default CV;