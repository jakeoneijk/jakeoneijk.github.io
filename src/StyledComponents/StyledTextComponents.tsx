import styled from "styled-components";

interface StyledText {
    font_size: string;
 }

const ExtraBoldTextSpan = styled("span")<StyledText>`
font-family: 'Inter';
font-style: normal;
font-weight: 900;
font-size: ${(props) => props.font_size};

color: #000000;
`

const SemiBoldTextSpan = styled("span")<StyledText>`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: ${(props) => props.font_size};

color: #000000;
`

const MediumTextSpan = styled("span")<StyledText>`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: ${(props) => props.font_size};

color: #000000;
`

const RegularTextSpan = styled("span")<StyledText>`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: ${(props) => props.font_size};

color: #272727;
`

const RegularGreyTextSpan = styled("span")<StyledText>`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: ${(props) => props.font_size};

color: #8F8F8F;
`

export {ExtraBoldTextSpan,SemiBoldTextSpan,MediumTextSpan, RegularTextSpan, RegularGreyTextSpan}