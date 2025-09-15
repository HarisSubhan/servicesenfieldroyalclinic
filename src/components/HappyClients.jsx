import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { MdOutlineStar } from "react-icons/md";

const HappyClients = () => {
  const clients = [
    {
      name: "Ahmet Khelfaoui",
      review:
        "I had my 4th PRP session today, and the results are amazing! The staff is very professional and cooperative. I’m happy with the results. I don’t see frequent hair fall when I comb my hair. The treatment is a win-win!",
    },
    {
      name: "Shilpa Kumari",
      review:
        "I felt curious at first because needles aren’t my go-to treatment. But thanks to a friend who suggested I have a consultation at Enfield Royal Clinic. I made my decision then and there to get my first PRP hair treatment, and I must say, I’m excited for my follow-up sessions. The experience was great! It’s a pain-free treatment, and doctors are so kind here.",
    },
    {
      name: "Sara Chammatt",
      review:
        "My hair feels so thick and healthy!!! I’m glad I came to Enfield Royal Clinic for my PRP treatment… I can freely wear my hair down or tie it in a bun. Finally, my hair has volume, and I love combing my fingers through my hair lately.",
    },
  ];

  return (
    <div className="py-5" style={{ backgroundColor: "#eaeaea" }}>
      <Container>
        <h1 style={{fontFamily: 'var(--sf-pro)',fontSize:"80px"}} className="">Hear From Our</h1>
        <h1 style={{fontFamily: 'var(--sf-pro)',fontSize:"80px"}} className="text-end mb-4 fst-italic">Happy Clients!</h1>
        <Row className="g-4">
          {clients.map((client, idx) => (
            <Col key={idx} xs={12} md={6} lg={4}>
              <Card style={{ backgroundColor: "#dedede", border: "none", height: "100%" }}>
                <div className="p-3 d-flex flex-column h-100">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <p className="mb-0 fw-bold">{client.name}</p>
                    <div className="d-flex text-warning">
                      {[...Array(5)].map((_, i) => (
                        <MdOutlineStar key={i} />
                      ))}
                    </div>
                  </div>
                  <p className="flex-grow-1">{client.review}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HappyClients;
