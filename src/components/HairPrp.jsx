import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const HairPrp = () => {
  return (
    <div className="hairprp-bg  card-overlay d-flex align-items-center justify-content-end">
      <Container className="py-4 py-md-5 text-white hairprp">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-md-start"
        >
          <h1 className="fw-bold mb-2 mb-md-3" style={{ 
            fontSize: "clamp(2.5rem, 8vw, 5rem)" 
          }}>
            What is
          </h1>
          <h1 className="fst-italic mb-4 mb-md-5" style={{ 
            fontSize: "clamp(2rem, 6vw, 3.75rem)", 
            marginLeft: "clamp(0px, 15vw, 150px)" 
          }}>
            Hair PRP?
          </h1>
        </motion.div>

        <motion.p
          className="mb-4 mb-md-5 lead text-center text-md-start px-2 px-md-0"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
        >
          Hair PRP is a platelet-rich therapy. It's a breakthrough, revolutionary treatment
          in regenerative medicine that works wonders for hair thinning or fallout...
        </motion.p>

        <Row className="g-3 g-md-4">
          <Col md={6}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card
                style={{ backgroundColor: "#9a9594" }}
                className="p-3 p-md-4 shadow-lg h-100 text-white"
              >
                <h5 className="fw-semibold mb-3">Why Should I Consider PRP Hair Treatment?</h5>
                <ul className="mb-0 ps-3">
                  <li className="mb-2">Restores a youthful appearance</li>
                  <li className="mb-2">Supports hair density for a fuller look</li>
                  <li className="mb-2">Prevents hair loss in the long run</li>
                  <li className="mb-2">Stops hair thinning</li>
                  <li>Boosts new hair growth</li>
                </ul>
              </Card>
            </motion.div>
          </Col>

          <Col md={6}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card
                style={{ backgroundColor: "#9a9594" }}
                className="p-3 p-md-4 shadow-lg h-100 text-white"
              >
                <h5 className="fw-semibold mb-3">Benefits of PRP Hair Treatment</h5>
                <ul className="mb-0 ps-3">
                  <li className="mb-2">Non-surgical and minimally invasive</li>
                  <li className="mb-2">Uses your body's natural healing properties</li>
                  <li className="mb-2">No downtime required</li>
                  <li className="mb-2">Safe with minimal side effects</li>
                  <li>Complements other hair restoration treatments</li>
                </ul>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HairPrp;