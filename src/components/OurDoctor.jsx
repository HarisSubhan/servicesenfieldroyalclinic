import React, { useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const OurDoctor = () => {
  const doctors = [
    {
      name: "Dr. Sania Awais",
      description:
        "Our doctors are certified hair specialists with years of excellence, offering medical expertise through artistic touch to restore your hair growth successfully. We approach the latest techniques and advanced PRP technology to tailor natural, long-lasting results without compromising your well-being, comfort, or safety. Dr. Sania Awais, a leading dermatologist at the best hair transplant clinic, specializes in advanced skin and hair treatments, delivering natural-looking, long-lasting results through advanced techniques.",
      image:
        "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/Group-1000002247.png",
    },
    {
      name: "Dr. Ali Khan",
      description:
        "Our doctors are certified hair specialists with years of excellence, offering medical expertise through artistic touch to restore your hair growth successfully. We approach the latest techniques and advanced PRP technology to tailor natural, long-lasting results without compromising your well-being, comfort, or safety. With expertise in injectables, laser treatments, PRP & scar management, Dr. Akrama brings a unique blend of clinical precision & patient-centric approach to all procedures.",
      image:
        "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/Group-1000002269.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const changeDoctor = (direction) => {
    setFade(false); // start fade out
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === "prev") {
          return prevIndex === 0 ? doctors.length - 1 : prevIndex - 1;
        } else {
          return prevIndex === doctors.length - 1 ? 0 : prevIndex + 1;
        }
      });
      setFade(true); // fade in new doctor
    }, 300); // match transition duration
  };

  const doctor = doctors[currentIndex];

  return (
    <div style={{ backgroundColor: "#eaeaea" }}>
      <Container className="px-3 px-md-4 px-lg-5">
        <Card style={{ backgroundColor: "#eaeaea", border: "none" }} className="p-3 p-md-4 p-lg-5">
          <Row className="align-items-center">
            {/* Text content - order changes on mobile */}
            <Col md={6} className="order-2 order-md-1">
              <div className={`fade-content ${fade ? "fade-in" : "fade-out"}`}>
                <h1 className="fw-bold mb-2 mb-md-3" style={{ 
                  fontSize: "clamp(2.5rem, 8vw, 5rem)" 
                }}>
                  Meet The
                </h1>
                <h1 className="fw-bold mb-3 mb-md-4" style={{ 
                  marginLeft: "clamp(0px, 2vw, 250px)", 
                  fontSize: "clamp(2rem, 5vw, 3rem)" 
                }}>
                  Hair Experts
                </h1>
                <p className="text-muted lh-lg" style={{ 
                  fontSize: "clamp(0.9rem, 2.5vw, 1rem)" 
                }}>
                  {doctor.description}
                </p>
              </div>
            </Col>
            
            {/* Image content - order changes on mobile */}
            <Col md={6} className="text-center order-1 order-md-2 mb-4 mb-md-0">
              <div className={`fade-content ${fade ? "fade-in" : "fade-out"}`}>
                <Image 
                  src={doctor.image} 
                  fluid 
                  rounded 
                  style={{ 
                    maxHeight: "clamp(300px, 50vh, 500px)",
                    width: "auto",
                    maxWidth: "100%"
                  }} 
                />
                <h4 className="mt-3 fw-semibold">{doctor.name}</h4>
              </div>
              
              <div className="d-flex justify-content-center mt-3 gap-3">
                <FaArrowLeft
                  style={{ cursor: "pointer" }}
                  onClick={() => changeDoctor("prev")}
                  size={window.innerWidth <= 768 ? 20 : 24}
                  className="p-2 bg-light rounded-circle"
                  aria-label="Previous doctor"
                />
                <span className="d-flex align-items-center">
                  {currentIndex + 1} / {doctors.length}
                </span>
                <FaArrowRight
                  style={{ cursor: "pointer" }}
                  onClick={() => changeDoctor("next")}
                  size={window.innerWidth <= 768 ? 20 : 24}
                  className="p-2 bg-light rounded-circle"
                  aria-label="Next doctor"
                />
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
      
      {/* Add CSS for fade animations */}
      <style>{`
        .fade-content {
          transition: opacity 0.3s ease-in-out;
        }
        .fade-in {
          opacity: 1;
        }
        .fade-out {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default OurDoctor;