import React from 'react';
import styled from 'styled-components';

function CV() {
  return (
    <CVDiv className="CV">
        <IframeDiv src='/JAEKWON_IM_CV.pdf' frameBorder={0} />
    </CVDiv>
  );
}

const CVDiv = styled.div`
`

const IframeDiv = styled.iframe`
width : 850px ;
height : 80vh ;
margin-top : 90px;
margin-left : 30px;
`


export default CV;