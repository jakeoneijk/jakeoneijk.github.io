import React from 'react';
import styled from 'styled-components';
import Bio from './Bio';
import CV from './BodyComponents/CV';
import Home from './BodyComponents/Home';
import {PageState} from "./PageState"

type BodyProps = {
  pageState: PageState;
  onClickCV: () => void;
};

function Body({pageState,onClickCV}:BodyProps) {
  return (
    <BodyDiv className="Body">
      <Bio onClickCV={onClickCV}/>
      <BodyContentDiv>
        {(pageState === PageState.HOME) ? <Home/> : ""}
        {(pageState === PageState.CV) ? <CV/>: ""}
      </BodyContentDiv>
    </BodyDiv>
  );
}

const BodyDiv = styled.div`
display: flex;
flex-direction: row;
height: 700px;
justify-content: flex-start;;
margin: 18px 56px 10px 56px;
`

const BodyContentDiv = styled.div`
margin-left : 20px;
`

export default Body;
