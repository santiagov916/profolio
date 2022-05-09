import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import side from '../../assets/me/side.jpeg';


function Contact() {
  return (
    <Container id="#contact" className="my-5 border-top">

      <Row className="mt-5 justify-content-center">
        <Col className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 my-auto">
          <Image fluid src={side} />
        </Col>

        <Col className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 m-auto">
          <Row>
            <Col>
              <h4 className="text-center border-bottom p-3 w-50 mx-auto">Contact Me!
              </h4>
            </Col>
          </Row>

          <Row className="m-auto mt-2">

            <Col className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
              <ul className="list-unstyled">
                <li>
                <a className="text-decoration-none text-dark" href="https://github.com/santiagov916" target="_blank" rel="noreferrer">
                  Github
                  </a>
                </li>
              </ul>
         
            </Col>

            <Col className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
              <ul className="list-unstyled">

                <li>
                  <a className="text-decoration-none text-dark" href="https://www.linkedin.com/in/santiago-venegas-b36931235/" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>

              </ul>
            </Col>

            <Col className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
              <ul className="list-unstyled">
                <li>
                  <a className="text-decoration-none text-dark" href="https://stackoverflow.com/users/18916266/santiagovenegas" target="_blank" rel="noreferrer">
                  Stack Overflow
                  </a>
                </li>
              </ul>
            </Col>



          </Row>
        </Col>
    </Row>
      
    </Container>
  );
}

export default Contact;
