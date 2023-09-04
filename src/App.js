import React from 'react';
import './App.css';
import { QuestionForm } from './QuestionForm/questionform';
import { About } from './about/About';
import { BuyAccessLower } from './buyaccesslower/buyaccesslower';
import { Header } from './header/header';
import { Reviews } from './reviews/reviews';

function App() {
  return (
    <>    
      <Header />
      <About />
      <div className="gradient-background">
        <BuyAccessLower />
        <QuestionForm />
        <div className="charts-background"></div>
        <Reviews />
      </div>
    </>
  );
}

export default App;
