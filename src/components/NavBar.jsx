import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect,useState } from "react";

function BasicExample() {
  useEffect(() => {
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        if (event.target.tagName !== "a") {
          return;
        }
        event.preventDefault();
        const id = event.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);
  
  const [cart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  return (
    <Navbar bg="white" expand="lg" sticky="top" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <div
            className="NavLogo"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img className="navPic" src="/images/logo.png" alt="logo" />
            <h3 className="NavTitle">Little Lemon</h3>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/" className="navMenu">
              Home
            </Nav.Link>

            <NavDropdown
              title="Menu"
              id="basic-nav-dropdown"
              className="navMenu"
            >
              <NavDropdown.Item href="/appetizers">Appetizers</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="/main">Main courses</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="/Dessert">Desserts</NavDropdown.Item>
              

            </NavDropdown>

            
            <Nav.Link href="/reservation" className="navMenu">
              Reservation
            </Nav.Link>

            <Nav.Link href="/CartPage" className="navMenu">
              Cart ({cart.length})
            </Nav.Link>
            <Nav.Link href="/contact" className="navMenu">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
