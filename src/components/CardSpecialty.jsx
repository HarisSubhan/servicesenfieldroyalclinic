import React, { useEffect, useState } from "react";
import { Card, Container, Image } from "react-bootstrap";
import { motion } from 'framer-motion';



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
      <Card className="p-4 p-md-5 shadow-lg border-0 specialty-card">
        {/* Section Label */}
        <p className="text-uppercase text-muted small fw-bold mb-3 text-center">
          What We Do
        </p>

        <motion.h1
        initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 2 }}
          viewport={{ once: true, amount: 0.3 }} 
        >
           <h1 style={{fontFamily: 'var(--sf-pro)', fontSize: windowWidth <= 768 ? (windowWidth <= 425 ? '28px' : '32px') : '60px'}} >
          Hair PRP
          <div className="d-flex gap-1 ">
            <h1 className="fw-bold " style={{marginLeft: "100px", fontSize: windowWidth <= 768 ? (windowWidth <= 425 ? '20px' : '24px') : '50px'}}>
            as a 
          </h1>
          <p className="fst-italic " style={{fontSize: windowWidth <= 768 ? (windowWidth <= 425 ? '20px' : '24px') : '50px'}} >Specialty</p>
          </div>
          
          
        </h1>
        </motion.h1>
       

        
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
                className="specialty-imgs shadow-sm"
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
        <h4 style={{fontSize: "40px"}} className="fw-semibold mt-4 text-center">
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