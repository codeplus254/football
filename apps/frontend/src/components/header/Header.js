import React, { Component } from 'react';
import { Navbar, NavbarBrand} from 'react-bootstrap';
import  {Jumbo} from './../jumbotron/jumbotron';
import './Header.css';


export class Header extends Component {
  render() {
    return (
      <>
        <Navbar className="navbar-dark">
          
          <NavbarBrand href="#"><h1>COMPANY BIO</h1></NavbarBrand>
          
          <Jumbo />
        </Navbar>
        
      </>
    );
  }
}
