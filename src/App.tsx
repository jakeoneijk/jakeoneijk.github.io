import React, { useState } from 'react';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { PageState } from './Components/PageState';
import {BrowserView, MobileView} from 'react-device-detect';



function App() {
  const [pageState, setPageState] = useState(PageState.HOME);
  
  return (
    <div className="App">
      <BrowserView>
        <Header onClickTitle={()=>{setPageState(PageState.HOME)}}/>
        <Body pageState={pageState} onClickCV={()=>{setPageState(PageState.CV)}}/>
        <Footer/>
      </BrowserView>
      <MobileView>
        <Header onClickTitle={()=>{setPageState(PageState.HOME)}}/>
        <Body pageState={pageState} onClickCV={()=>{setPageState(PageState.CV)}}/>
        <Footer/>
      </MobileView>
      
    </div>
  );
}

export default App;
