import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion'; 

const Video = () => {
  return (
    <div className="video-container position-relative">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="video-bg position-absolute w-100 h-100" 
        style={{ objectFit: 'cover', top: 0, left: 0, zIndex: -1 }}
      >
        <source 
          src="https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/0827.mp4" 
          type="video/mp4" 
        />
      </video>

      
      <div 
        className="position-absolute w-100 h-100" 
        style={{ backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 0 }}
      ></div>
      
      <Container 
        fluid 
        className="position-relative min-vh-100 d-flex align-items-center text-center" 
        style={{ zIndex: 1 }}
      >
        <Row className="w-100 justify-content-center">
          <Col md={10} lg={8}>
            
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <p className="lead text-md-start text-white mb-3">
                From thinning to thriving, schedule <br/> your PRP Hair Treatment now!
              </p>
              <h1 className="text-md-start display-4 fw-bold text-white mb-4">
                The brand behind
              </h1>
            </motion.div>

            <Row className="align-items-center mt-3">
              <Col md={6} className="text-md-start mb-3 mb-md-0">
                <motion.p
                  initial={{ x: -150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-white"
                >
                  Visit <strong>Enfield Royal Clinic</strong> to restore your hair density and shine. 
                  We offer <br/> <strong>PRP Hair Treatment Dubai</strong> to boost natural hair growth from roots to tips.
                </motion.p>
              </Col>
              <Col md={6}>
                <motion.h1
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="display-4 fw-bold text-white fst-italic"
                >
                  Beautiful Hair
                </motion.h1>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Video;
