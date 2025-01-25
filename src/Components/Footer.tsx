import React from 'react';
import styled from "styled-components";
import { RegularTextSpan } from '../StyledComponents/StyledTextComponents';

function Footer() {
  return (
    <FooterDiv className="Footer">
      <FooterTextDiv>
        <RegularTextSpan font_size="15px"></RegularTextSpan>
      </FooterTextDiv>
    </FooterDiv>
  );
}

const FooterDiv = styled.div`
width: 100%;
height: 34px;
text-align: end;
justify-content: end;
`

const FooterTextDiv = styled.div`
margin: 2px 18px 0px 0px;
`

export default Footer;
