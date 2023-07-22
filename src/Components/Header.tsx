import { ExtraBoldTextSpan, SemiBoldTextSpan } from "../StyledComponents/StyledTextComponents";
import styled from "styled-components";

type HeaderProps = {
  onClickTitle: () => void;
};

function Header({onClickTitle}: HeaderProps) {
  return (
    <SizeDiv>
      <HeaderDiv className="Header">
        <HeaderItemDiv onClick={onClickTitle}>
          <ExtraBoldTextSpan font_size="24px">Jaekwon Im </ExtraBoldTextSpan>
          <SemiBoldTextSpan font_size="24px">blog</SemiBoldTextSpan>
        </HeaderItemDiv>
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
margin-top: 1%;
margin-bottom:1%;
margin-left: 3%;
`

const HeaderItemDiv = styled.div`
cursor: pointer;
`


export default Header;
