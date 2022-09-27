import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand style={{fontSize: '1.5rem'}} href="/">
          <img src="/dino-white.png" alt="" width='40' height='40'/>
          {' '}
          Team MARCT
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="ms-auto">
            <Nav.Link style={{fontSize: '1.5rem'}} href="/">Home</Nav.Link>
            <Nav.Link style={{fontSize: '1.5rem'}} href="/about">About Us</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header