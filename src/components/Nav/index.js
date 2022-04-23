import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Container, Navbar } from 'react-bootstrap';

function NavSection() {  
    return(

    <>
      <Navbar bg='light' expand="md" className='fixed-top'>
        <Container>
          <Navbar.Brand href="#home" className='text-danger'>Santiago Venegas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="offcanvasNavbarDropdown">
            <Nav className="offset-md-6 offset-lg-8 offset-xl-9">
              <Nav.Link href='#home' className='text-dark text-center'>Home</Nav.Link>
              <Nav.Link href="#about" className='text-dark text-center'>About</Nav.Link>
              <Nav.Link href="#portfolio" className='text-dark text-center'>Portfolio</Nav.Link>
              <Nav.Link href='#contact' className='text-dark text-center'>Contact</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>

    )
};

export default NavSection;