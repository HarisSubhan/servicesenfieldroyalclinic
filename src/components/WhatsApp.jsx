import React from "react";
import { Button } from "react-bootstrap";

const WhatsApp = () => {
  return (
    <div>
      <div
        className="whatsapp d-flex justify-content-center align-items-center gap-2 flex-wrap p-2 rounded"
        style={{
        backgroundColor: "#57564e",
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "30px",
        zIndex: 1000,
        width: "95%",
        maxWidth: "600px", 
      }}
      >
        <Button
          className="flex-grow-1"
          style={{ backgroundColor: "#936e41", color: "#fff", border: "none" }}
        >
          Call
        </Button>
        <Button
          className="flex-grow-1"
          style={{ backgroundColor: "#936e41", color: "#fff", border: "none" }}
        >
          WhatsApp
        </Button>
        <Button
          className="flex-grow-1"
          style={{ backgroundColor: "#936e41", color: "#fff", border: "none" }}
        >
          Before & After
        </Button>
        <Button
          className="flex-grow-1"
          style={{ backgroundColor: "#936e41", color: "#fff", border: "none" }}
        >
          Book a Consultation
        </Button>
      </div>
    </div>
  );
};

export default WhatsApp;
