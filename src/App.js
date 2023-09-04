import React from 'react';
import './App.css';
import { QuestionForm } from './QuestionForm/questionform';
import { About } from './about/About';
import { BuyAccessLower } from './buyaccesslower/buyaccesslower';
import { Header } from './header/header';
import { Reviews } from './reviews/reviews';
import { Team } from './team/team';

function App() {
  return (
    <>    
      <Header />
      <About />
      <div className="gradient-background">
        <BuyAccessLower />
        <QuestionForm />
        <div className="charts-background"></div>
      </div>
        <Reviews />
        <Team />
    </>
  );
}

export default App;
