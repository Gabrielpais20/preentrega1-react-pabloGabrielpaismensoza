import React from 'react';
import { Navbar, Container , Nav} from 'react-bootstrap';

import CartWidget from './CartWidget';


const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Mi primer E-commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">producto1</Nav.Link>
            <Nav.Link href="#features">producto2</Nav.Link>
            <Nav.Link href="#pricing">contactos</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
  );
};

export default NavBar;
