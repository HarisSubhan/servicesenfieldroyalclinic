import React from 'react'
import { Container } from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa";

const TreanentProcess = () => {
  return (
    <Container fluid className='p-3 '>
        <p className='text-center'>TREATMENT PROCESS</p>
        <h1 className='text-center'>We Listen to your concerns carefully HOVER TO DISCOVER</h1>
      
   <div
  style={{
    backgroundImage: `url("https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/h-1.png")`,
    backgroundSize: "cover",       
    backgroundPosition: "center",  
    backgroundRepeat: "no-repeat", 
  }}
  className="hover-card d-flex justify-content-between text-white align-items-center border rounded p-5 position-relative overflow-hidden mt-3"
>
  <div className="d-flex gap-3">
    <p className="m-0">01</p>
    <p className="m-0">One-on-One Consultation</p>
  </div>
  <div>
    <FaArrowRight />
  </div>

 
  <div className="hover-overlay d-flex justify-content-center align-items-center">
    <p className="text-white text-center">
      A detailed assessment of hair health and scalp analysis to <br />
      check the condition or causes of the problem in the first <br />
      place.
    </p>
  </div>
   </div> 
    <div
  style={{
    backgroundImage: `url("https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/h-2.png")`,
    backgroundSize: "cover",       
    backgroundPosition: "center",  
    backgroundRepeat: "no-repeat", 
  }}
  className="hover-card d-flex justify-content-between align-items-center border text-white rounded p-5 position-relative overflow-hidden mt-3"
>
  <div className="d-flex gap-3">
    <p className="m-0">01</p>
    <p className="m-0">One-on-One Consultation</p>
  </div>
  <div>
    <FaArrowRight />
  </div>

  {/* Transparent overlay */}
  <div className="hover-overlay d-flex justify-content-center align-items-center">
    <p className="text-white text-center">
      A detailed assessment of hair health and scalp analysis to <br />
      check the condition or causes of the problem in the first <br />
      place.
    </p>
  </div>
    </div>
    <div
  style={{
    backgroundImage: `url("https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/h-3.png")`,
    backgroundSize: "cover",      
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
  }}
  className="hover-card d-flex justify-content-between align-items-center border rounded p-5 position-relative overflow-hidden mt-3"
>
  <div className="d-flex gap-3 text-white">
    <p className="m-0">01</p>
    <p className="m-0">One-on-One Consultation</p>
  </div>
  <div>
    <FaArrowRight />
  </div>

 
  <div className="hover-overlay d-flex justify-content-center align-items-center">
    <p className="text-white text-center">
      A detailed assessment of hair health and scalp analysis to <br />
      check the condition or causes of the problem in the first <br />
      place.
    </p>
  </div>
   </div> 
   <div
  style={{
    backgroundImage: `url("https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/h-4.png")`,
    backgroundSize: "cover",       
    backgroundPosition: "center",  
    backgroundRepeat: "no-repeat", 
  }}
  className="hover-card d-flex justify-content-between align-items-center border rounded p-5 position-relative overflow-hidden mt-3"
>
  <div className="d-flex gap-3">
    <p className="m-0">01</p>
    <p className="m-0">One-on-One Consultation</p>
  </div>
  <div>
    <FaArrowRight />
  </div>

 
  <div className="hover-overlay d-flex justify-content-center align-items-center">
    <p className="text-white text-center">
      A detailed assessment of hair health and scalp analysis to <br />
      check the condition or causes of the problem in the first <br />
      place.
    </p>
  </div>
   </div>


    
       
      
    </Container>
  )
}

export default TreanentProcess