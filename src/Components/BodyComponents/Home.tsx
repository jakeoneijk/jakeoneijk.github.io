import React from 'react';
import styled from 'styled-components';
import { RegularTextSpan} from "../../StyledComponents/StyledTextComponents";

function Home() {
  return (
    <HomeDiv className="Home">
        <HomeImg src="/Home.png" alt="profile"/>
        <TextDiv>
            <RegularTextSpan font_size="14px">
                I am a Ph.D. student at Music and Audio Computing Lab, KAIST, under the supervision of Profesor Juhan Nam. My research interests include audio processing and synthesis through deep learning. I am also an amateur music producer. You can listen to my music from the youtube link in my bio.
            </RegularTextSpan>
        </TextDiv>
        
    </HomeDiv>
  );
}

const HomeDiv = styled.div`
margin-top : 130px;
`

const HomeImg = styled.img`
width: 500px;
`

const TextDiv = styled.div`
width: 500px;
`


export default Home;