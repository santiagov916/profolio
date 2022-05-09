import render from 'dom-serializer';
import React from 'react';
import "react-bootstrap";
import { Image, ProgressBar } from 'react-bootstrap';
import stairs from '../../assets/me/stairs.jpeg';

function TechnicalSkills() {

    return (
        <>
        <div className="container border-top">
            <div className="row my-4">
                <div className="col-4 my-auto">
                    <Image fluid alt="" src={stairs} className="w-75 offset-3 p-3" />
                </div>


                <div className="col-8 m-auto text-center">
                
                        <header className="h3 pb-2">Technical Skills</header>

                        <ul>
                            <li className="list-inline">GraphQL</li>

                            <li className="list-inline">MongoDB</li>

                            <li className="list-inline">Node.JS</li>

                            <li className="list-inline">Express.JS</li>

                            <li className="list-inline">HTML</li>

                            <li className="list-inline">CSS</li>

                            <li className="list-inline">Back-end database</li>

                            <li className="list-inline">MERN Stack</li>
                        </ul>
                       
               
                        
                         
               </div>
    
            </div>
        </div>

        </>

    )

}

export default TechnicalSkills;