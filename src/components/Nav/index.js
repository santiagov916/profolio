import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from 'react-bootstrap';
import image from '../../assets/resume/resume.jpg'

function Navbar() {
    return(
        <>
        <Nav fixed='top' className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link class='nav-section' href="/home">Mission</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link class='nav-section' href="/#projects">Projects</Nav.Link>
          </Nav.Item>
        
          <Nav.Item>
            <Nav.Link class='nav-section' href="/#contact" >
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link class='nav-section' href={image} target='_blank' download>
              Resume
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    )
};

export default Navbar;