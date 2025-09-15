import React, { useState, useEffect } from "react";
import { Card, Col, Container, Image, Row, Carousel } from "react-bootstrap";


const ReduceExcessive = () => {
  const images = [
    {
      before:
        "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/b-1.png",
      after:
        "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/a-1.png",
    },
    {
      before:
        "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/spec-1.png",
      after:
        "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/a-2.png",
    },
    {
      before:
        "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/spec-5.png",
      after:
        "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/a-3.png",
    },
    {
      before:
        "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/spec-2.png",
      after:
        "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/a-4.png",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: "#eaeaea" }}>
      <Container>
        <Card style={{ backgroundColor: "#eaeaea", border: "none" }}>
          <p className="text-center mt-5">BEFORE AND AFTER</p>
          <h1 className="p-3" style={{ fontSize: "70px" }}>
            Reduce Excessive
          </h1>
          <h1 className="text-center fst-italic" style={{fontSize:"70px"}} >Hairloss</h1>
          <p>
            HOVER OVER PHOTOS <br /> TO SEE THE AFTER
          </p>

          {/* 👉 Desktop / Tablet Grid */}
          {!isMobile && (
            <Row className="justify-content-center mb-5 g-3">
              {images.map((img, i) => (
                <Col
                  key={i}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="d-flex justify-content-center"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Image
                    src={hoveredIndex === i ? img.after : img.before}
                    rounded
                    fluid
                    className="specialty-img shadow-sm"
                  />
                </Col>
              ))}
            </Row>
          )}

          {/* 👉 Mobile Slider */}
          {isMobile && (
            <Carousel interval={3000} indicators={false} className="mb-5">
              {images.map((img, i) => (
                <Carousel.Item key={i}>
                  <div className="d-flex justify-content-center">
                    <Image
                      src={hoveredIndex === i ? img.after : img.before}
                      rounded
                      fluid
                      className="specialty-img shadow-sm"
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Card>
      </Container>
    </div>
  );
};

export default ReduceExcessive;
