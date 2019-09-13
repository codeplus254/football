import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { Header } from './../mini-website/header.js';
import { Navigation } from './../mini-website/navigation.js';
import { About } from './../mini-website/about.js';
import { Home } from './../mini-website/home.js';
import { Portfolio } from './../mini-website/portfolio.js';
import { Contact } from './../mini-website/contact.js';
import { Footer } from './../mini-website/footer.js';
import './jumbotron.css';


export class Jumbo extends Component {
  constructor(props) {
    super(props);
    this.state = {currentPage: 'About'};
    };
  componentDidMount() {
      const pages = ['Home', 'Portfolio', 'About', 'Contact'];
      this.interval = setInterval(() => this.setState({ currentPage: pages[(Math.random() * pages.length) | 0] }), 10000);
  }

  componentDidUpdate() {
    let component = <Home />;
    switch(this.state.currentPage) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      default:
        return <Portfolio />;
    }  
  }

  render() {
    let component;
    switch(this.state.currentPage) {
        case 'Home':
          component = <Home />;
          break;
        case 'About':
          component = <About />;
          break;
        case 'Contact':
          component = <Contact />;
          break;
        default:
          component = <Portfolio />;
          break;
      }
    return (
        <Jumbotron >
          <Container className="miniWebsite" >
            <Header /> 
            <Navigation selected={this.state.currentPage}/>
            {component}
            <Footer /> 
          </Container>
        </Jumbotron>
    );
  }
}