import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";


const BookYourConsultation = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#1f1f21" }}>
      <Container>
        {/* Section Header */}
        <div className="d-flex justify-content-center align-items-center text-center mb-5">
          <Col xl={8}>
            <h1 style={{  fontFamily: 'var(--sf-pro)',fontSize:"40px" }} className="fw-bold text-white">Your Journey to Confidence</h1>
          <h2 style={{  fontFamily: 'var(--sf-pro)',fontSize:"80px" }} className="fst-italic text-end  text-white">Stay Here</h2>
          </Col>
          <Col xl={4}>
            <p className="text-white lead">
            We understand hair loss is personal. Our proven treatments help
            restore not just your hair, but your confidence.
          </p>
          </Col>
          
        </div>

        {/* Main Row */}
        <Row className="align-items-center g-4">
          {/* Left Image */}
          <Col lg={4} md={5} xs={12} className="text-center">
            <Image
              src="https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/Rectangle-4533.png"
              alt="Consultation"
              fluid
              rounded
              className="shadow consultation-img"
            />
          </Col>

          {/* Right Form Section */}
          <Col lg={8} md={7} xs={12}>
            <Card className="border-0 p-4 shadow-sm h-100">
              <h1 style={{  fontFamily: 'var(--sf-pro)',fontSize:"60px" }} >Book Your</h1>
              <h1 style={{  fontFamily: 'var(--sf-pro)',fontSize:"70px" }} className="fst-italic text-end mb-4">Consultation</h1>

              <Row className="gy-4">
                {/* Left Text + Logo */}
                <Col xs={12} md={5} className="text-center text-md-start">
                  <p className="mb-3">
                    Add volume to your hair! <br /> Sign up for the best PRP
                    hair treatment in Dubai.
                  </p>
                  <Image
                    src="https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/enfield-royal-clinic-logo-1.png"
                    alt="Clinic Logo"
                    className="mb-4 rotate-continuous logo-img"
                  />
                </Col>

                {/* Right Form */}
                <Col xs={12} md={7}>
                  <div className="d-flex flex-column gap-3 mb-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="form-control"
                    />
                  </div>
                  <Button
                    variant="dark"
                    size="lg"
                    className="rounded-pill px-4 py-2 shadow w-100"
                  >
                    Make an Appointment
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookYourConsultation;
