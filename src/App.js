import React from 'react';
import './App.css';
import { About } from './about/About';
import { BuyAccessLower } from './buyaccesslower/buyaccesslower';
import { Header } from './header/header';

function App() {
  return (
    <>    
      <Header />
      <About />
      <BuyAccessLower />
    </>
  );
}

export default App;
