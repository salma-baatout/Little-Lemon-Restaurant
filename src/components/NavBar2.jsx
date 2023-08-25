import React from 'react'
import {Navbar,Container,Nav,NavDropdown,Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./styles/NavBar2.css";

const NavBar2 = ({cart}) => {
  return (
    <div className='app my-5'>
      
    <Navbar fixed="top"  bg="light" variant="light" expand="lg" >
      <Container>
      <a className="navbar-brand" href="#">
      <Image 
        src="images/favicon-32x32.png" 
        fluid
        rounded
        className='' />
    </a>
        <Navbar.Brand href="#home" className='NavTitle'>Little Lemon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/ReserveTable">Reserve a table</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#appetizer"><a
    
    onClick={() => {
      const dessertsSection = document.getElementById('appetizers');
      dessertsSection.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    Appetizers
  </a></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item href="#appetizers">
              <a
   
    onClick={() => {
      const dessertsSection = document.getElementById('maincourse');
      dessertsSection.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    Main Course
  </a>
              </NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item href="#maincourse">
              <a
    
    onClick={() => {
      const dessertsSection = document.getElementById('dessert');
      dessertsSection.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    Desserts
  </a>
  </NavDropdown.Item>              
            </NavDropdown>
            <Nav.Link href="/CartPage" className="navMenu">
              Cart ({cart ? cart.length : 0})
            </Nav.Link>
            <Nav.Link href="/contact" className="navMenu">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    </div>
  )
}

export default NavBar2