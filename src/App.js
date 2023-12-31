import React from 'react';
import './App.css';
import { QuestionForm } from './QuestionForm/questionform';
import { About } from './about/About';
import { BuyAccessLower } from './buyaccesslower/buyaccesslower';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Ready } from './readysection/ready';
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
      </div>
        <Team />
        <Reviews />
        <Ready />
        <Footer />
    </>
  );
}

export default App;
