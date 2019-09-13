import React, { Component } from 'react';
import {  Row, Col, } from 'react-bootstrap';


export class Portfolio extends Component {
  render() {
    const style1 = {
      width: '100%',
      minHeight: '250px',
    };

    return (
          <>
            <Row>
              <Col md={1.5}>
                
              </Col>
              <Col md={9} style={style1}>
                <div className="miniWebpage" >
                    <p>
                      Here are the various projects I have worked on: (indulge yourself)
                    </p>
                  </div>
              </Col>
            </Row>
            <Row>
              <Col md={1.5}>
                
              </Col>
              <Col md={9}>
                <div className="miniWebpage" >

                  </div>
              </Col>
            </Row>
        </>
    );
  }
}