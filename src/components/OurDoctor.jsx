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
    <div style={{ backgroundColor: "#eaeaea"}}>
      <Container>
        <Card style={{backgroundColor: "#eaeaea",  border: "none" }} className="p-4">
          <Row className="align-items-center">
            <Col md={6}>
              <div className={`fade-content ${fade ? "fade-in" : "fade-out"}`}>
                <h1>Meet The</h1>
                <h1>Hair Experts</h1>
                <p>{doctor.description}</p>
              </div>
            </Col>
            <Col md={6} className="text-center">
              <div className={`fade-content ${fade ? "fade-in" : "fade-out"}`}>
                <Image src={doctor.image} fluid rounded />
              </div>
              <div className="d-flex justify-content-center mt-3 gap-3">
                <FaArrowLeft
                  style={{ cursor: "pointer" }}
                  onClick={() => changeDoctor("prev")}
                  size={24}
                />
                <FaArrowRight
                  style={{ cursor: "pointer" }}
                  onClick={() => changeDoctor("next")}
                  size={24}
                />
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default OurDoctor;
