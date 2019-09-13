import React, { Component } from 'react';
import { Row, Col, } from 'react-bootstrap';


export class Footer extends Component {
  render() {
    return (
      <Row>
          <Col className="miniFooter" md={11}>
            <div >
              <p> &copy; All Rights Reserved 2019.</p>
            </div>
          </Col>
          <Col className="miniFooter">
            <div> Powered by Bio.KE </div>
          </Col>
      </Row>   
    );
  }
}