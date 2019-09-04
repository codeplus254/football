import React, { Component } from 'react';
import { Jumbotron, Row, Col, Container } from 'react-bootstrap';
import './jumbotron.css';


export class Jumbo extends Component {
  render() {
    return (
<Jumbotron>
          <Container className="miniWebsite">
            <Row className="miniHeader">
              <Col md={2} >
                <div className="typewriter">
                  <div className="typewriter-logo">LOGO</div>
                </div>
                
              </Col>
              <Col md={8}>
                <div className="typewriter">
                      <div className="typewriter-text">Your Business Name</div>
                </div>
                
              </Col>
              <Col md={2}>
                Login/Register
              </Col>
            </Row>
            <Row className="miniTaskbar">
              <Col md= {3} >
                HOME
              </Col>
              <Col md= {3}>
                PORTFOLIO
              </Col>
              <Col md= {3} className="border border-danger">
                ABOUT ME
              </Col>
              <Col md= {3}>
                CONTACT ME
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <div> Your picture goes here </div>
              </Col>
              <Col md={9}>
                <div className="miniWebpage">
                  <p>
                    Hello world, meet your next and last graphic designer.
                  </p>
                  <p>
                    My name is Doreen Designs, like literally. I have more than five years experience in the digital world. Primarily, 
                    I design visually-intuitive posters for events eg. corporate fairs, end-year parties etc. However, I also come up
                    with website mockups, not forgetting company logos.
                  </p>
                  <p>Here's my favourite quote: </p> 
                  <p>"Design adds value faster than it adds costs." <span><b>--Joel Spolsky</b></span></p>
                  </div>
              </Col>
            </Row>
            <Row>
                <Col className="miniFooter">
                  <div >
                    <p> &copy; All Rights Reserved 2019.</p>
                  </div>
                </Col>
              </Row>  
          </Container>
        </Jumbotron>
    );
  }
}