import React, { Component } from 'react';
import {  Row, Col, } from 'react-bootstrap';


export class Contact extends Component {
  render() {
    return (
          <>
            <Row>
              <Col md={2}>
              </Col>
              <Col md = {8}>
                <div className="miniWebpage">
                  <p>
                    To ensure all work is meticulously done, I work with a specialized toolset that consistently delivers the best
                    award-winning logos and catchy posters.
                  </p>
                  <p><bold>EMAIL:</bold> doreendesigns@bio.ke</p>
                  <p><bold>PHONE:</bold> +254722XXXXXX </p>
                  <p>Working hours are 8am to 8pm</p>
                  </div>
              </Col>
              <Col md={2}>
              </Col>
            </Row>  
        </>
    );
  }
}