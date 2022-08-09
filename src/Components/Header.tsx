import { ExtraBoldTextSpan, MediumTextSpan, SemiBoldTextSpan } from "../StyledComponents/StyledTextComponents";
import styled from "styled-components";

type HeaderProps = {
  onClickTitle: () => void;
  onClickCV: () => void;
};

function Header({onClickTitle, onClickCV}: HeaderProps) {
  return (
    <SizeDiv>
      <HeaderDiv className="Header">
        <HeaderItemDiv onClick={onClickTitle}>
          <ExtraBoldTextSpan font_size="24px">Jaekwon Im </ExtraBoldTextSpan>
          <SemiBoldTextSpan font_size="24px">blog</SemiBoldTextSpan>
        </HeaderItemDiv>
        <div>
          <HeaderItemDiv onClick={onClickCV}>
            <MediumTextSpan font_size="16px">CV</MediumTextSpan>
          </HeaderItemDiv>
        </div> 
      </HeaderDiv>
    </SizeDiv>
  );
}
const SizeDiv = styled.div`
width: 100%;
`

const HeaderDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 18px 56px 18px 56px;
`

const HeaderItemDiv = styled.div`
cursor: pointer;
`


export default Header;
