import React, { Component } from 'react';
import {  Row, Col, } from 'react-bootstrap';


export class About extends Component {
  render() {
    const headShotStyle = {
      width: '100%',
      height: '200px',
    };
    return (
          <>
            <Row>
              <Col md={3} style={ headShotStyle }>
                <div> Your picture goes here </div>
              </Col>
              <Col md={9}>
                <div className="miniWebpage">
                  <p>
                    About page
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
        </>
    );
  }
}