import React, { useState } from 'react';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { PageState } from './Components/PageState';



function App() {
  const [pageState, setPageState] = useState(PageState.HOME);
  
  return (
    <div className="App">
      <Header onClickTitle={()=>{setPageState(PageState.HOME)}} onClickCV={()=>{setPageState(PageState.CV)}}/>
      <Body pageState={pageState}/>
      <Footer/>
    </div>
  );
}

export default App;
