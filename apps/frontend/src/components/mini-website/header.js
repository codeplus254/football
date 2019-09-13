import React, { Component } from 'react';
import { Row, Col, } from 'react-bootstrap';

export class Header extends Component {
  render() {
    return (
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
      );
    };
  };
