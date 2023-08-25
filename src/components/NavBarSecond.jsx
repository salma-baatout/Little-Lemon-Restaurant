import React from 'react'
import {Navbar,Container,Nav,Image} from 'react-bootstrap';
import "./styles/NavBar2.css";

const NavBarSecond = ({cart}) => {
  return (
    <div className='app mb-2'>
      
    <Navbar  bg="dark" variant="dark" expand="lg" >
      <Container>
      <a className="navbar-brand" href="/">
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
            <Nav.Link href="/reservetable">Reserve a table</Nav.Link>
            
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

export default NavBarSecond