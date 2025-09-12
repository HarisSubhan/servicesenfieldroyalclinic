import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const HairPrp = () => {
  return (
    <div className="hairprp-bg card-overlay d-flex align-items-center justify-content-end">
      <Container className="py-5 text-white hairprp">
        <h1 className="mb-4 display-5 fw-bold text-center text-md-start">
          What is <br /> Hair PRP?
        </h1>
        <p className="mb-5 lead text-center text-md-start">
          Hair PRP is a platelet-rich therapy. It’s a breakthrough, revolutionary treatment
          in regenerative medicine that works wonders for hair thinning or fallout. Using
          the patient’s blood sample, a high-speed centrifuge machine separates plasma-rich
          growth factors to be directly injected into the scalp for controlling hair loss.
          These nutrient-packed stem cells repair weak & dormant follicles over time,
          extending the regrowth cycle and boosting scalp health for lasting results.
        </p>

        <Row className="g-4">
          <Col md={6}>
            <Card
              style={{ backgroundColor: "#9a9594" }}
              className="p-4 shadow-lg h-100 text-white"
            >
              <h5>Why Should I Consider PRP Hair Treatment?</h5>
              <ul>
                <li>Restores a youthful appearance</li>
                <li>Supports hair density for a fuller look</li>
                <li>Prevents hair loss in the long run</li>
                <li>Stops hair thinning</li>
                <li>Boosts new hair growth</li>
              </ul>
            </Card>
          </Col>
          <Col md={6}>
            <Card
              style={{ backgroundColor: "#9a9594" }}
              className="p-4 shadow-lg h-100 text-white"
            >
              <h5>Find out how PRP Works</h5>
              <ul>
                <li>Deep scalp stimulation by follicular regeneration</li>
                <li>Increased blood flow within the scalp</li>
                <li>Rejuvenates dormant hair follicles</li>
                <li>Supports thicker, healthier hair growth naturally</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HairPrp;
