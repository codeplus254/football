import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Row, Col, Container } from 'react-bootstrap';
import './Header.css';


export class Header extends Component {
  render() {
    return (
      <>
        <Navbar className="navbar-dark">
          <div className="container">
            <NavbarBrand href="#"><h1>COMPANY BIO</h1></NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <Container>
            <Row>
              <Col md={2} >
                <div class="typewriter">
                  <div class="typewriter-text">Your Business Logo</div>
                </div>
                
              </Col>
              <Col md={8}>
                <div class="typewriter">
                      <div class="typewriter-text">Your Business Name</div>
                </div>
                
              </Col>
              <Col md={2}>
                Login/Register
              </Col>
            </Row>   
          </Container>
        </Jumbotron>
      </>
    );
  }
}
