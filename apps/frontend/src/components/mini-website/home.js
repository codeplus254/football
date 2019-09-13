import React, { Component } from 'react';
import {  Row, Col, } from 'react-bootstrap';


export class Home extends Component {
  render() {
    return (
          <>
            <Row>
              <Col md={2}>
              </Col>
              <Col md={9}>
                <div className="miniWebpage">
                  <p>
                    I'm at home
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
              <Col md={1}>
              </Col>
            </Row> 
          
        </>
    );
  }
}