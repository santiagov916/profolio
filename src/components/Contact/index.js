import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import photoCat from "./images/photoCat.png";
import photoPhone from './images/phonePhoto.png';
import linkedIn from './images/linkedIn.png';
import emailMe from './images/emailMe.png';
import side from '../../assets/me/side.jpeg';
import stacked from './images/s.png'

function Contact() {
  return (
    <Container id="#contact" className="my-5 border-top">

      <Row className="mt-5 justify-content-center">
        <Col className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 my-auto">
          <Image fluid src={side} />
        </Col>

        <Col className="py-5  col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
        <h2 className="text-center">Contact Me!</h2>
      <ul className="list-group list-group-horizontal text-center justify-content-center">

        <li className="list-group-item p-1 border-0">

          <a className="h-75" href="https://github.com/santiagov916/" target="_blank">
            <img alt='' className="p-3" src={photoCat} style={{ maxWidth: "4rem" }}></img>
          </a>
        </li>

        <li className="list-group-item p-1 border-0">
          <a className="h-75"  href='tel:9162749681'>
            <img alt='' className="p-3" src={photoPhone} style={{maxWidth: "4rem"}}></img>
          </a>
        </li>

        <li className="list-group-item p-1 border-0 h-75">
          <a className="h-75"  href="https://www.linkedin.com/in/santiago-venegas-88ab4b1bb/" target="_blank">
            <img alt='' className="p-3" src={linkedIn} style={{ maxWidth: "4rem" }}
            ></img>
          </a>
        </li>

        <li className="list-group-item p-1 border-0">
          <a className="h-75"  href="mailto:santiago1venegas@gmail.com">
            <img alt='' className="p-3" src={emailMe} style={{ maxWidth: "4rem" }}
            ></img>
          </a>
        </li>

        <li className="list-group-item p-1 border-0 my-auto">
          <a className="h-75 text-dark h6 text-decoration-none"  href="https://stackoverflow.com/users/18916266/santiagovenegas" target="_blank">
            stacked overflow
          
          </a>
        </li>

      </ul>
    </Col>
    </Row>
      
    </Container>
  );
}

export default Contact;
