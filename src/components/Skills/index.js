import render from 'dom-serializer';
import React from 'react';
import "react-bootstrap";
import { Image, ProgressBar } from 'react-bootstrap';
import stairs from '../../assets/me/stairs.jpeg';

function TechnicalSkills() {

    return (
        <>
        <div className="container border-top">
            <div className="row m-auto mt-4">
                <div className="col-4 my-auto">
                    <Image fluid alt="" src={stairs} className="w-75 offset-3 p-3" />
                </div>


                <div className="col-6 m-auto">
                
                        <header className="text-center m-auto h3 pb-2">Technical Skills</header>
                       
               
                            <div className="col-12 my-3">
                            <ProgressBar className="w-75 m-auto" variant="warning text-dark" now={80} label={`GraphQL`}></ProgressBar>
                            </div>
                            <div className="col-12 my-3">
                            <ProgressBar className="w-75 m-auto" variant="warning text-dark" now={40} label={`MongoDB`}></ProgressBar>
                            </div>
                            <div className="col-12 my-3">
                            <ProgressBar className="w-75 m-auto" variant="warning text-dark" now={70} label={`Node.JS`}></ProgressBar>
                            </div>
                            <div className="col-12 my-3">
                            <ProgressBar className="w-75 m-auto" variant="warning text-dark" now={90} label={`Express.JS`}></ProgressBar>
                            </div>
                            <div className="col-12 my-3">
                            <ProgressBar className="w-75 m-auto" variant="warning text-dark" now={95} label={`HTMl`}></ProgressBar>
                            </div>
                            <div className="col-12 my-3">
                            <ProgressBar className="w-75 m-auto" variant="warning text-dark" now={65} label={`CSS`}></ProgressBar>
                            </div>
                            <div className="col-12 my-3">
                            <ProgressBar className="w-75 m-auto" variant="warning text-dark" now={80} label={`back-end database`}></ProgressBar>
                            </div>
                            <div className="col-12 my-3">
                            <ProgressBar className="w-75 m-auto" variant="warning text-dark" now={50} label={`MERN Stack`}></ProgressBar>
                            </div>
                         
               </div>
    
            </div>
        </div>

        </>

    )

}

export default TechnicalSkills;