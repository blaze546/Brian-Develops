import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoImage from 'src/BrianLogo1.png';
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav">
      <Container>
        {/* Replace text with an image */}
        <Navbar.Brand href="#home">
          <img
            src={LogoImage}
            alt="Logo"
            //height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"style={{ color: '#F3D75B' }}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ color: '#F3D75B' }}>
          </Nav>
          <Nav style={{ color: '#F3D75B' }}>
          <Nav.Link href="#services" style={{ color: '#F3D75B' }}>Services</Nav.Link>
            <Nav.Link href="#projects" style={{ color: '#F3D75B' }}>Portfolio</Nav.Link>
            <Nav.Link href="#about" style={{ color: '#F3D75B' }}>About</Nav.Link>
            <Nav.Link eventKey={2} href="#contact" style={{ color: '#F3D75B' }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
