import React from "react";
import { Button } from "react-bootstrap";


const TopCall = () => {
  return (
    <div className="top-call">
      <div className="d-flex flex-wrap justify-content-center align-items-center p-2 rounded">
        <Button
          className="flex-grow-1"
          style={{ backgroundColor: "#000000", color: "#ffffff", border: "none" }}
        >
          Call
        </Button>
        <Button
          className="flex-grow-1"
          style={{ backgroundColor: "#25d366", color: "#ffffff", border: "none" }}
        >
          WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default TopCall;
