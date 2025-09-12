import React, { useState, useEffect } from "react";

const BeautyHappens = () => {
  const images = [
    "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/imgi_5_clinic-pictures-7-1.png",
    "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/imgi_7_clinic-pictures-2-1.png",
    "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/imgi_8_clinic-pictures-3-1.png",
    "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/imgi_9_clinic-pictures-4-1.png",
    "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/imgi_10_clinic-pictures-5-1.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "500px", overflow: "hidden" }}>
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt="Beauty"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 0.5s ease-in-out",
        }}
      />

      {/* Shadow overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)", // dark overlay
        }}
      />

      {/* Centered text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "bold",
          textShadow: "2px 2px 12px rgba(0,0,0,0.7)",
          lineHeight: "1.2",
        }}
      >
        See where<br />beauty happens
      </div>
    </div>
  );
};

export default BeautyHappens;
