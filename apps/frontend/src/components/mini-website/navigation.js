import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';



export class Navigation extends Component {
  
  render() {
    return (
      <Row className="miniTaskbar">
          <Col md= {3} className={this.props.selected === 'Home'? "border border-danger": null}>
            HOME
          </Col>
          <Col md= {3} className={this.props.selected === 'Portfolio'? "border border-danger": null}>
            PORTFOLIO
          </Col>
          <Col md= {3} className={this.props.selected === 'About'? "border border-danger": null} >
            ABOUT ME
          </Col>
          <Col md= {3} className={this.props.selected === 'Contact'? "border border-danger": null}>
            CONTACT ME
          </Col>
      </Row>
    );
  }
}