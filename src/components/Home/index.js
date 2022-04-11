import React from 'react';
import Bootstrap from 'bootstrap';
import intro from '../../assets/me/handshake.jpeg';


function Home() {
return(
    <div className='container-fluid'>
        <div className='row'>
          <div className='image-side col-lg-5 col-md-5 col-sm-5 col-xs-12 p-5 text-center flex-column'>
            <img className='img-fluid m-auto img-thumbnail w-50 rounded' src={intro} alt='' />
          </div>

          <div className='col-lg-7 col-md-7 col-sm-7 text-center m-auto flex-column'>
            <p className='display-6'>Hello, I'm <span className='text-danger'>Santiago Venegas.</span><br /> I'm a Fullstack Developer.</p>


          </div>
        </div>
    </div>
)
};



export default Home;