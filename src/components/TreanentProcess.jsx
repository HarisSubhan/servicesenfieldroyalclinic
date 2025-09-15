import React from 'react'
import { Container } from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';

const TreanentProcess = () => {
  return (
    <motion.div
    initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 2 }}
          viewport={{ once: true, amount: 0.3 }} 
    >
      <Container fluid className='p-3 mt-5 '>
        <div className="text-center my-4">
  <p className="fs-5 fw-semibold">TREATMENT PROCESS</p>

  <h1 className="fw-bold display-3 display-md-2 display-sm-4">
    We Listen to
  </h1>

  <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2">
    <h1 className="fw-bold display-4 display-md-3 m-0">
      your concerns carefully
    </h1>
    <h6 className="text-muted mt-5">HOVER TO DISCOVER</h6>
  </div>
</div>

      
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
    </motion.div>
    
  )
}

export default TreanentProcess