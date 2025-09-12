import React, { useEffect, useState } from "react";
import { Card, Container, Image } from "react-bootstrap";


const CardSpecialty = () => {
  const images = [
    "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/b-1.png",
    "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/spec-1.png",
    "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/spec-5.png",
    "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/spec-2.png",
    "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/spec-6.png",
    "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/spec-3.png",
    "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/spec-7.png",
  ];

  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate dynamic container height based on screen size
  const getContainerHeight = () => {
    if (windowWidth <= 320) return "180px";
    if (windowWidth <= 375) return "160px";
    if (windowWidth <= 425) return "140px";
    if (windowWidth <= 768) return "130px";
    return "120px";
  };

  return (
    <Container className="my-5">
      <Card className="p-4 p-md-5 shadow-lg border-0 specialty-card text-center">
        {/* Section Label */}
        <p className="text-uppercase text-muted small fw-bold mb-3">
          What We Do
        </p>

        
        <h1 style={{fontStyle:"SF Pro"}} className=" text-md-start fw-bold mb-5">
          Hair PRP <br />
          <span style={{fontStyle: "Westbourne Serif Free"}} className=" text-center text-dark"><span style={{color: "#ffffff"}} >000000</span>as a Specialty</span>
        </h1>

        
        <div
          className="d-flex justify-content-center flex-wrap gap-3 gap-md-4 specialty specialty-container"
          style={{ minHeight: getContainerHeight() }}
        >
          {images.map((img, i) => {
            const isOdd = i % 2 === 0;
            // Reduce scroll effect on mobile to prevent excessive overlap
            const scrollFactor = windowWidth < 768 ? 0.05 : 0.1;
            const offset = isOdd ? -(scrollY * scrollFactor) : scrollY * 0.0001;

            return (
              <Image
                key={i}
                src={img}
                rounded
                fluid
                className="specialty-img shadow-sm"
                style={{
                  width: "80px",         
                  height: "80px",
                  maxWidth: "100%",       
                  objectFit: "cover",
                  transform: `translateY(${offset}px)`,
                  transition: "transform 0.3s ease-out",
                }}
              />
            );
          })}
        </div>

        {/* Subtitle */}
        <h4 className="fw-semibold mt-4">
          Choose a hair PRP surgeon <br />
          <span className="fst-italic fw-normal text-muted">
            With The Highest Level
          </span>
          <br />
          of training, experience and skill
        </h4>
      </Card>
    </Container>
  );
};

export default CardSpecialty;