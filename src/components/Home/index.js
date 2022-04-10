import React from 'react';
import Bootstrap from 'bootstrap';
import intro from '../../assets/me/handshake.jpeg';


function Home() {
    return(
        <div className='home-div col-12 text-center bg-light m-auto d-flex'>
            <img className='p-5 rounded col-4 img-fluid' src={intro} alt=''/>
        <div className='m-auto col-8'>
            <h1>Hello, I'm <span className='text-danger'>Santiago Venegas.</span>
            <br /> I'm a Fullstack Developer.</h1>
            <div class="btn-group" role="group" aria-label="Button Prompts">
            <button type="button" class="btn home-btn" >Portfolio</button>
            <span className='m-auto'>|</span>
            <button type="button" class="btn home-btn">Resume</button>
            </div>
        </div>
        </div>
    )
};

export default Home;