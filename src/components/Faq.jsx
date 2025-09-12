import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { FaCircleArrowRight } from "react-icons/fa6";

const Faq = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const faqs = [
    {
      question: "What is PRP hair treatment?",
      answer:
        "It’s a natural process that stimulates hair growth with plasma-rich cells without utilizing artificial methods.",
    },
    {
      question: "Is PRP treatment painful?",
      answer:
        "Most patients feel only mild discomfort since it’s minimally invasive. Numbing cream is applied to reduce sensitivity.",
    },
    {
      question: "How many PRP sessions are required?",
      answer:
        "Generally, 3–6 sessions are recommended for visible results. Your doctor will suggest a plan based on your hair condition.",
    },
    {
      question: "Are there any side effects of PRP?",
      answer:
        "Side effects are minimal, such as redness or mild swelling at the injection site, which usually subsides quickly.",
    },
    {
      question: "Who is a good candidate for PRP hair treatment?",
      answer:
        "People experiencing hair thinning or early stages of hair loss are ideal candidates. A consultation helps determine suitability.",
    },
  ];

  return (
    <div className="py-5" style={{ backgroundColor: "#f8f8f8" }}>
      <Container>
        <h1 className="text-center">Frequently Asked</h1>
        <h1 className="text-center mb-4">Questions</h1>

        <div className="d-flex flex-column gap-3">
          {faqs.map((faq, idx) => (
            <Card
              key={idx}
              className="p-3 border-0 shadow-sm"
              style={{
                transition: "all 0.3s ease",
                cursor: "pointer",
                backgroundColor: hoverIndex === idx ? "#f1f1f1" : "#ffffff",
              }}
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2 align-items-center">
                  <p className="fw-bold mb-0">{String(idx + 1).padStart(2, "0")}</p>
                  <p className="mb-0">{faq.question}</p>
                </div>
                <div
                  style={{
                    transform: hoverIndex === idx ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <FaCircleArrowRight />
                </div>
              </div>

              {/* Show answer only on hover */}
              {hoverIndex === idx && (
                <p className="mt-2 text-muted">{faq.answer}</p>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Faq;
