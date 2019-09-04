import React from 'react';
import {Header } from './components/header/Header';
import {Footer} from './components/footer/Footer';

function App() {
  return (
    <>
      <header className="App-header">
        <Header />
      </header>
      
      
      <div className="content center">
        <div >
          <h2>Do you have a bio for your company?</h2>
          <p> Something coming up soon!!! </p>
          <p> Be seen </p>
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
