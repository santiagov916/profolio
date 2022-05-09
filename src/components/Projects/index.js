import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';


function Projects() {


  return(
      <>
        <div className="container projects border-top" id="#projects">
          <div className="row">
           
            <div className="col-12">
              <div className="row py-1">
                <div className="col-12">
                  <p className="h3 text-center p-4">Featured Projects</p>
                </div>

              <div className="col-lg-4 col-md-6 col-xs-12 col-sm-12 m-auto p-0">
              <Card className="border-1 project-div-weather">
                <Card.Body className="project-info text-center">
                  <CardHeader className="text-dark bg-light text-center m-1 border-0 ">Weather Dashboard</CardHeader>
                  
                  <ul className="list-group list-group-horizontal text-center justify-content-center">
                    <li className="list-group-item p-0 border-0 mx-2">
                      Bootstrap
                      <span className="badge bg-primary rounded-pill m-2">95%</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      Javascript
                      <span className="badge bg-primary rounded-pill m-2">60%</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      API
                      <span className="badge bg-primary rounded-pill m-2">30%</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      LocalStorage
                      <span className="badge bg-primary rounded-pill m-2">100%</span>
                    </li>
                  </ul>
                   
                  <Card.Text >Check the weather easily with the Weather Dashboard! Easy , intuitive , clean design!</Card.Text>
                
                <div className="row">
                  <div className="col-6">

                  <Card.Link href="https://santiagov916.github.io/WeatherDashboard/" target="_blank" className="bg-primary text-light rounded p-2 text-decoration-none">Deployed</Card.Link>

                  </div>
                  <div className="col-6">

                  <Card.Link href="https://github.com/santiagov916/WeatherDashboard" target="_blank" className="bg-primary text-light rounded p-2 text-decoration-none">Repository</Card.Link>

                  </div>

                </div>
                </Card.Body>
               </Card>
              </div>

              <div className="col-lg-4 col-md-6 col-xs-12 col-sm-12 m-auto p-0">
              <Card className="border-0 project-div-ecom">
                <Card.Body className="project-info text-center">
                  <CardHeader className="text-dark bg-light text-center m-1 border-0 ">E-Commerce Backend</CardHeader>
                  
                  <ul className="list-group list-group-horizontal text-center justify-content-center">
                    <li className="list-group-item p-0 border-0 mx-2">
                      Express
                      <span className="badge bg-primary rounded-pill m-2">100%</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      Mysql2
                      <span className="badge bg-primary rounded-pill m-2">50%</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      Sequelize
                      <span className="badge bg-primary rounded-pill m-2">40%</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      Dotenv
                      <span className="badge bg-primary rounded-pill m-2">10%</span>
                    </li>
                  </ul>
                   
                  <Card.Text >Complete Backend for an online business, See repository for functionality!</Card.Text>
                
                <div className="row">
                  <div className="col-4">

                  <Card.Link href="https://watch.screencastify.com/v/wYtjVHLlWqBIb7ODloDF" className="bg-primary text-light rounded p-2 text-decoration-none" target="_blank">Tutorial</Card.Link>

                  </div>

                  <div className="col-4">

                    <Card.Link href="https://github.com/santiagov916/e-commerce-database" className="bg-primary text-light rounded p-2 text-decoration-none" target="_blank">Repository</Card.Link>

                  </div>

                  <div className="col-4">

                  <Card.Link href="https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository" className="bg-primary text-light rounded p-2 text-decoration-none" target="_blank">Clone Repo</Card.Link>

                  </div>

                </div>
                </Card.Body>
               </Card>
              </div>

              <div className="col-lg-4 col-md-6 col-xs-12 col-sm-12 m-auto p-0">
              <Card className="border-0 project-div-social">
                <Card.Body className="project-info text-center">
                  <CardHeader className="text-dark bg-light text-center m-1 border-0 ">Social-API</CardHeader>
                  
                  <ul className="list-group list-group-horizontal text-center justify-content-center">
                    <li className="list-group-item p-0 border-0 mx-2">
                      Express
                      <span className="badge bg-primary rounded-pill m-2">60%</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      Mongoose
                      <span className="badge bg-primary rounded-pill m-2">40%</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      Moment
                      <span className="badge bg-primary rounded-pill m-2">10%</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      Insomnia
                      <span className="badge bg-primary rounded-pill m-2">100%</span>
                    </li>
                  </ul>
                   
                  <Card.Text >Backend database created for a social media setting! Tested by Insomnia.</Card.Text>
                
                <div className="row">
                  <div className="col-4">

                  <Card.Link href="https://watch.screencastify.com/v/2VL0T3rs0bSvJ2ANAWCd" className="bg-primary text-light rounded p-2 text-decoration-none" target="_blank">Tutorial</Card.Link>

                  </div>
                  <div className="col-4">

                  <Card.Link href="https://github.com/santiagov916/social-api" className="bg-primary text-light rounded p-2 text-decoration-none" target="_blank">Repository</Card.Link>

                  </div>

                  <div className="col-4">

                  <Card.Link href="https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository" className="bg-primary text-light rounded p-2 text-decoration-none" target="_blank">Clone Repo</Card.Link>

                  </div>

                </div>
                </Card.Body>
               </Card>
              </div>

              <div className="col-lg-4 col-md-6 col-xs-12 col-sm-12 m-auto p-0">
              <Card className="border-0 project-div-employee">
                <Card.Body className="project-info text-center">
                  <CardHeader className="text-dark bg-light text-center m-1 border-0 ">Employee Tracker</CardHeader>
                  
                  <ul className="list-group list-group-horizontal text-center justify-content-center">
                    <li className="list-group-item p-0 border-0 mx-2">
                      Inquirer
                      <span className="badge bg-primary rounded-pill m-2">50%</span>
                    </li>
                    <li className="list-group-item p-0 border-0 mx-2">
                      MySQL2
                      <span className="badge bg-primary rounded-pill m-2">50%</span>
                    </li>
                  </ul>
                   
                  <Card.Text >Simple and straight to it database design with CLI inquirer prompting! MySQL2 database; see repository for instructions </Card.Text>
                
                <div className="row">
                  <div className="col-6">

                  <Card.Link href="https://github.com/santiagov916/employee-tracker#installation" className="bg-primary text-light rounded p-2 text-decoration-none" target="_blank">Repository</Card.Link>

                  </div>
                  <div className="col-6">

                  <Card.Link href="https://watch.screencastify.com/v/kw2unOn8R11PL1LOkb74" className="bg-primary text-light rounded p-2 text-decoration-none" target="_blank">Video Demo</Card.Link>

                  </div>

                </div>
                </Card.Body>
               </Card>
              </div>

              <div className="col-lg-4 col-md-6 col-xs-12 col-sm-12 m-auto p-0">
              <Card className="border-0 project-div-notes">
                <Card.Body className="project-info text-center">
                  <CardHeader className="text-dark bg-light text-center m-1 border-0 ">Note Taker</CardHeader>
                  
                  <ul className="list-group list-group-horizontal text-center justify-content-center">

                    <li className="list-group-item p-0 border-0 mx-2">
                      Express
                      <span className="badge bg-primary rounded-pill m-2">100%</span>
                    </li>

                    <li className="list-group-item p-0 border-0 mx-2">
                      Javascript
                      <span className="badge bg-primary rounded-pill m-2">100%</span>
                    </li>

                    <li className="list-group-item p-0 border-0 mx-2">
                      JSON
                      <span className="badge bg-primary rounded-pill m-2">100%</span>
                    </li>
                  </ul>
                   
                  <Card.Text >Simple Express router app utilizing Javascript and JSON to quickly, add, save, and edit your best notes and ideas! Never Forget, and Enjoy!</Card.Text>
                
                <div className="row">
                  <div className="col-6 m-auto">

                  <Card.Link href="https://github.com/santiagov916/book-search" className="bg-primary text-light rounded p-2 text-decoration-none" target="_blank">Repository</Card.Link>

                  </div>

                  <div className="col-6 m-auto">

                  <Card.Link href="https://whispering-lowlands-02986.herokuapp.com/" className="bg-primary text-light rounded p-2 text-decoration-none" target="_blank">Deployed</Card.Link>

                  </div>

                </div>

                
                </Card.Body>
               </Card>
              </div>

              <div className="col-lg-4 col-md-6 col-xs-12 col-sm-12 m-auto p-0">
              <Card className="border-0 project-div-team">
                <Card.Body className="project-info text-center">
                  <CardHeader className="text-dark bg-light text-center m-1 border-0 ">Team Generator</CardHeader>
                  
                  <ul className="list-group list-group-horizontal text-center justify-content-center">

                    <li className="list-group-item p-0 border-0 mx-2">
                      Jest
                      <span className="badge bg-primary rounded-pill m-2">100%</span>
                    </li>

                    <li className="list-group-item p-0 border-0 mx-2">
                      Javascript
                      <span className="badge bg-primary rounded-pill m-2">100%</span>
                    </li>

                    <li className="list-group-item p-0 border-0 mx-2">
                      Inquirer
                      <span className="badge bg-primary rounded-pill m-2">100%</span>
                    </li>
                  </ul>
                   
                  <Card.Text >Use NPM's CLI inquirer package to create a quick team to keep track of! All the basics of each individual are included! Generate your team with your players!</Card.Text>
                
                <div className="row">
                  <div className="col-6 m-auto">

                  <Card.Link href="https://watch.screencastify.com/v/2qYvMm19WJDGIbe92BB2" className="bg-primary text-light rounded p-2 text-decoration-none" target="_blank">Tutorial</Card.Link>

                  </div>

                  <div className="col-6 m-auto">

                    <Card.Link href="https://github.com/santiagov916/team-generator" className="bg-primary text-light rounded p-2 text-decoration-none" target="_blank">Repository</Card.Link>

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