import React from 'react';
import './App.css';
import { QuestionForm } from './QuestionForm/questionform';
import { About } from './about/About';
import { BuyAccessLower } from './buyaccesslower/buyaccesslower';
import { Header } from './header/header';

function App() {
  return (
    <>    
      <Header />
      <About />
      <BuyAccessLower />
      <QuestionForm />
    </>
  );
}

export default App;
