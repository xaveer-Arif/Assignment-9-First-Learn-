import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>    
  <Navbar bg="dark" variant="dark">
    <h1 className = 'text-white ms-3'>First <span>Learn</span> </h1>
    <Container className = 'ps-5'>
    <Nav className="ms-auto">
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link href="services">Services</Nav.Link>
      <Nav.Link href="review">Review</Nav.Link>
      <Nav.Link href="teachers">Teachers</Nav.Link>
      <Nav.Link href="about">About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;