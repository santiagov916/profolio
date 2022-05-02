import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Col, Row, Image } from 'react-bootstrap';
import first from '../../assets/projects/0.jpg';
import second from '../../assets/projects/1.jpg';
import third from '../../assets/projects/4.jpg'

function Projects() {

  

  return(
      <>
        <div className="container-fluid mt-4 projects" id="#projects">
          <div className="row">
           
            <div className="col-12">
              <div className="row py-1">

              <div className="row">
          <div className="col-12">
            <p className="h3 text-center p-4">Featured Projects</p>
          </div>
          <div className="col-12">
          </div>
         <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
           <div className="carousel-inner w-75 m-auto">
             <div className="carousel-item active">
               <img src={first} className="d-block w-100" alt="" />
             </div>
             <div className="carousel-item">
             <img src={second} className="d-block w-100" alt="" />
             </div>
             <div className="carousel-item">
               <img src={third} className="d-block w-100" alt="" />
             </div>
           </div>

           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Previous</span>
           </button>

           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
             <span className="carousel-control-next-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Next</span>
           </button>
         </div>
          </div>

              <div className="col-4 p-0">
                  <a className="project-link" href="https://github.com/santiagov916">
                    <Image fluid src={first} alt="" className="h-100"/>
                  </a>
                </div>

                <div className="col-4 p-0">
                  <a className="project-link" href="https://github.com/santiagov916">
                    <Image fluid src={second} alt="" className="h-100"/>
                  </a>
                </div>

                <div className="col-4 p-0">
                  <a className="project-link" href="https://github.com/santiagov916">
                    <Image fluid src={third} alt="" className="h-100"/>
                  </a>
                </div>

               <Card className="col-4 p-0 project-div">
                <Card.Body>
                  <Card.Text className="text-dark bg-warning text-center mx-4">Random Project</Card.Text>
                </Card.Body>
               </Card>

                <div className="col-4 p-0">
                  <a className="project-link" href="https://github.com/santiagov916">
                    <Image fluid src={third} alt="" className="h-100"/>
                  </a>
                </div>

                <div className="col-4 p-0">
                  <a className="project-link" href="https://github.com/santiagov916">
                    <Image fluid src={first} alt="" className="h-100"/>
                  </a>
                </div>

              </div>
            </div>
          </div>


        </div>
      </>
//         <Container id='projects' fluid className='projects-container'>
//             <h2 className='text-center p-3' style={{ fontfamily: ' Merriweather, serif'}}>Projects</h2>
//             <Row>
//                 <Col>
//                     <Card className='mb-3' style={{ width: '15rem' }}>
//             <Card.Img variant="top" src={first} />
//             <Card.Body>
//                 <Card.Title>E-com Backend</Card.Title>
//                 <Card.Text>
//                     dotenv , express , mysql , sequelize
//                 </Card.Text>
//                 <Button variant="primary" href='https://github.com/santiagov916/e-commerce-database' target='_blank'>See repository</Button>
//             </Card.Body>
//             </Card>
//             </Col>
//             <Col>
// <Card style={{ width: '15rem' }}>
//   <Card.Img variant="top" src={second} />
//   <Card.Body>
//     <Card.Title>Dev-tech Blog</Card.Title>
//     <Card.Text>
//               mysql, express, express-handlebars
//     </Card.Text>
//     <Button variant="primary" href='https://github.com/santiagov916/dev-tech-blog' target='_blank'>See repository</Button>
//   </Card.Body>
// </Card>
// </Col>
// <Col>
// <Card style={{ width: '15rem' }}>
//   <Card.Img variant="top" className='third' src={third} />
//   <Card.Body>
//     <Card.Title>Social-API</Card.Title>
//     <Card.Text>
//             nodemon, mongoose
//             NoSQL
//     </Card.Text>
//     <Button variant="primary" href='https://github.com/santiagov916/social-api' target='_blank'>See repository</Button>
//   </Card.Body>
// </Card>
// </Col>
//         </Row>
// </Container>
    )
  };

export default Projects;