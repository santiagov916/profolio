import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Image } from 'react-bootstrap';
import first from '../../assets/projects/0.jpg';
import second from '../../assets/projects/1.jpg';
import third from '../../assets/projects/4.jpg'
import CardHeader from 'react-bootstrap/esm/CardHeader';

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

               
              <div className="col-lg-4 col-md-6 col-xs-12 col-sm-12 m-auto p-0">
              <Card className="border-0 project-div">
                <Card.Body className="project-info text-center">
                  <CardHeader className="text-dark bg-light text-center m-1 border-0 ">Random Project</CardHeader>
                  
                  <ul className="list-group list-group-horizontal text-center justify-content-center">
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                  </ul>
                   
                  <Card.Text >lorem impsum doodly giggly goo God has been so Good to me and I thank him everyday for all that he has been doing in each and every one of our lives! I heard today that some saints were brutally murdered for the name of Jesus, that is very sobering.</Card.Text>
                
                <div className="row">
                  <div className="col-6">

                  <Card.Link href="https://www.google.com" className="bg-primary text-light rounded p-2">another link</Card.Link>

                  </div>
                  <div className="col-6">

                  <Card.Link href="https://www.google.com" className="bg-primary text-light rounded p-2">another link</Card.Link>

                  </div>

                </div>
                </Card.Body>
               </Card>
              </div>

              <div className="col-lg-4 col-md-6 col-xs-12 col-sm-12 m-auto p-0">
              <Card className="border-0 project-div">
                <Card.Body className="project-info text-center">
                  <CardHeader className="text-dark bg-light text-center m-1 border-0 ">Random Project</CardHeader>
                  
                  <ul className="list-group list-group-horizontal text-center justify-content-center">
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                  </ul>
                   
                  <Card.Text >lorem impsum doodly giggly goo God has been so Good to me and I thank him everyday for all that he has been doing in each and every one of our lives! I heard today that some saints were brutally murdered for the name of Jesus, that is very sobering.</Card.Text>
                
                <div className="row">
                  <div className="col-6">

                  <Card.Link href="https://www.google.com" className="bg-primary text-light rounded p-2">another link</Card.Link>

                  </div>
                  <div className="col-6">

                  <Card.Link href="https://www.google.com" className="bg-primary text-light rounded p-2">another link</Card.Link>

                  </div>

                </div>
                </Card.Body>
               </Card>
              </div>

              <div className="col-lg-4 col-md-6 col-xs-12 col-sm-12 m-auto p-0">
              <Card className="border-0 project-div">
                <Card.Body className="project-info text-center">
                  <CardHeader className="text-dark bg-light text-center m-1 border-0 ">Random Project</CardHeader>
                  
                  <ul className="list-group list-group-horizontal text-center justify-content-center">
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                  </ul>
                   
                  <Card.Text >lorem impsum doodly giggly goo God has been so Good to me and I thank him everyday for all that he has been doing in each and every one of our lives! I heard today that some saints were brutally murdered for the name of Jesus, that is very sobering.</Card.Text>
                
                <div className="row">
                  <div className="col-6">

                  <Card.Link href="https://www.google.com" className="bg-primary text-light rounded p-2">another link</Card.Link>

                  </div>
                  <div className="col-6">

                  <Card.Link href="https://www.google.com" className="bg-primary text-light rounded p-2">another link</Card.Link>

                  </div>

                </div>
                </Card.Body>
               </Card>
              </div>

              <div className="col-lg-4 col-md-6 col-xs-12 col-sm-12 m-auto p-0">
              <Card className="border-0 project-div">
                <Card.Body className="project-info text-center">
                  <CardHeader className="text-dark bg-light text-center m-1 border-0 ">Random Project</CardHeader>
                  
                  <ul className="list-group list-group-horizontal text-center justify-content-center">
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                  </ul>
                   
                  <Card.Text >lorem impsum doodly giggly goo God has been so Good to me and I thank him everyday for all that he has been doing in each and every one of our lives! I heard today that some saints were brutally murdered for the name of Jesus, that is very sobering.</Card.Text>
                
                <div className="row">
                  <div className="col-6">

                  <Card.Link href="https://www.google.com" className="bg-primary text-light rounded p-2">another link</Card.Link>

                  </div>
                  <div className="col-6">

                  <Card.Link href="https://www.google.com" className="bg-primary text-light rounded p-2">another link</Card.Link>

                  </div>

                </div>
                </Card.Body>
               </Card>
              </div>

              <div className="col-lg-4 col-md-6 col-xs-12 col-sm-12 m-auto p-0">
              <Card className="border-0 project-div">
                <Card.Body className="project-info text-center">
                  <CardHeader className="text-dark bg-light text-center m-1 border-0 ">Random Project</CardHeader>
                  
                  <ul className="list-group list-group-horizontal text-center justify-content-center">
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                  </ul>
                   
                  <Card.Text >lorem impsum doodly giggly goo God has been so Good to me and I thank him everyday for all that he has been doing in each and every one of our lives! I heard today that some saints were brutally murdered for the name of Jesus, that is very sobering.</Card.Text>
                
                <div className="row">
                  <div className="col-6">

                  <Card.Link href="https://www.google.com" className="bg-primary text-light rounded p-2">another link</Card.Link>

                  </div>
                  <div className="col-6">

                  <Card.Link href="https://www.google.com" className="bg-primary text-light rounded p-2">another link</Card.Link>

                  </div>

                </div>
                </Card.Body>
               </Card>
              </div>

              <div className="col-lg-4 col-md-6 col-xs-12 col-sm-12 m-auto p-0">
              <Card className="border-0 project-div">
                <Card.Body className="project-info text-center">
                  <CardHeader className="text-dark bg-light text-center m-1 border-0 ">Random Project</CardHeader>
                  
                  <ul className="list-group list-group-horizontal text-center justify-content-center">
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      asdgasgd
                      <span class="badge bg-primary rounded-pill m-2">14</span>
                    </li>
                  </ul>
                   
                  <Card.Text >lorem impsum doodly giggly goo God has been so Good to me and I thank him everyday for all that he has been doing in each and every one of our lives! I heard today that some saints were brutally murdered for the name of Jesus, that is very sobering.</Card.Text>
                
                <div className="row">
                  <div className="col-6">

                  <Card.Link href="https://www.google.com" className="bg-primary text-light rounded p-2">another link</Card.Link>

                  </div>
                  <div className="col-6">

                  <Card.Link href="https://www.google.com" className="bg-primary text-light rounded p-2">another link</Card.Link>

                  </div>

                </div>
                </Card.Body>
               </Card>
              </div>

              </div>
            </div>
          </div>


        </div>
      </>
    )
  };

export default Projects;