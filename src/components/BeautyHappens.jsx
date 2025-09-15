import React, { useState, useEffect, useRef } from "react";

const BeautyHappens = () => {
  const images = [
    "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/imgi_5_clinic-pictures-7-1.png",
    "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/imgi_7_clinic-pictures-2-1.png",
    "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/imgi_8_clinic-pictures-3-1.png",
    "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/imgi_9_clinic-pictures-4-1.png",
    "https://services.enfieldroyalclinic.com/wp-content/uploads/2025/08/imgi_10_clinic-pictures-5-1.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    // Set up Intersection Observer to detect when component is in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect observer after first trigger
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // Trigger when 30% of component is visible
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Set up the image rotation interval only after component is visible
    let interval;
    if (isVisible) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isVisible]);

  return (
    <div 
      ref={componentRef}
      style={{ 
        position: "relative", 
        width: "100%", 
        height: "500px", 
        overflow: "hidden",
        backgroundColor: "#000"
      }}
    >
      {/* Animated Image Container */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: isVisible ? "100%" : "0%",
          height: isVisible ? "100%" : "0%",
          transform: "translate(-50%, -50%)",
          borderRadius: isVisible ? "0%" : "50%",
          overflow: "hidden",
          transition: "all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
          zIndex: 1,
        }}
      >
        <img
          src={images[currentIndex]}
          alt="Beauty"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Shadow overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.8s ease-in-out 0.5s",
          zIndex: 2,
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
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.8s ease-in-out 0.8s",
          zIndex: 3,
        }}
      >
        See where<br />beauty happens
      </div>
    </div>
  );
};

export default BeautyHappens;