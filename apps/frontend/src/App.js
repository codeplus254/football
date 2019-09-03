import React from 'react';
import {Header } from './components/header/Header';
import {Footer} from './components/footer/Footer';
import {Row, Col, Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <header className="App-header">
        <Header />
      </header>
      
      
      <div className="content">
        <div className="row row-header">
          <h2>Do you have a bio for your company?</h2>
          <p> Contact us today and get seen online </p>
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
