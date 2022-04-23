import React, { useState } from 'react';
import Bootstrap from 'bootstrap';
import intro from '../../assets/me/handshake.jpeg';
import resume from '../../assets/resume/first.jpg';
import secondResume from '../../assets/resume/second.jpg';
import download from 'downloadjs';
import { Modal, Button } from 'react-bootstrap';


function Home() {
  
  const downloadResumes = function() {
    download(resume);
    download(secondResume);
    handleClose()
  }
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

return(
    <div className='container-fluid mt-5'>
        <div className='row min-100-vw'>
          <div className='image-side col-lg-5 col-md-12 col-sm-12 col-xs-12 p-5 text-center flex-column mb-auto'>
         
            <img className='img-fluid m-auto img-thumbnail rounded w-50' src={intro} alt='' />
            
          </div>

          <div className='col-lg-7 col-md-12 col-sm-12 text-center m-auto flex-column'>
            <div className='pt-5'>

            
            <p className='display-6'>Hello, I'm <span className='text-danger'>Santiago Venegas.</span><br /> I'm a Fullstack Developer.</p>

            </div>
            <div className="btn-group pb-5" id='resumeBtn' role="group" aria-label="Button Prompts">
                <button type="button" className="btn btn-outline-danger" download>Portfolio</button>
                <Button variant="" className=" btn-outline-danger" onClick={handleShow}>
                Resume
                </Button>
            </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Download</Modal.Title>
        </Modal.Header>
      
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="dark" onClick={downloadResumes}>
            Download Resume
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  </div>   
</div>
  )
};



export default Home;