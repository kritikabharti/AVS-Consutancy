import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImageFile from "../assets/installation.jpg";

function Installation() {
  const navigate = useNavigate();

  const pageStyle = {
    minHeight: "100vh",
    backgroundImage: `url(${backgroundImageFile})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
     justifyContent: "center",
    padding: "50px",
    position: "relative",
    display: "flex",
    alignItems: "center",
  };

  const overlayStyle = {
    background: "rgba(115, 107, 107, 0.7)",
    color: "#2f2d2d",
    maxWidth: "500px",
    padding: "50px",
    borderRadius: "20px",
    backdropFilter: "blur(8px)",
  };

  const buttonStyle = {
    position: "absolute",
    top: "20px",
    left: "20px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    background: "#ff9800",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={pageStyle}>
      <button
        style={buttonStyle}
        onClick={() => navigate("/")}
      >
        ← Back to Home
      </button>

      <div style={overlayStyle}>
        <h1
          style={{
            fontSize: "3rem",
            color: "#FFD700",
            marginBottom: "20px",
          }}
        >
          Solar Installation
        </h1>

        <p style={{ lineHeight: "1.8" }}>
          Our professional installation team ensures your solar
          energy system is installed safely, efficiently, and according
          to industry standards. We handle every aspect of the process,
          from mounting solar panels to connecting the system with your
          electrical network.
        </p>

        <p style={{ lineHeight: "1.8" }}>
          Using premium-quality materials and advanced installation
          techniques, we guarantee maximum system performance,
          reliability, and long-term durability.
        </p>

        <h3 style={{ marginTop: "25px", color: "#ff9800" }}>
          Installation Process
        </h3>

        <ul style={{ lineHeight: "2" }}>
          <li>✓ Site Preparation & Safety Checks</li>
          <li>✓ Solar Panel Mounting</li>
          <li>✓ Inverter Installation</li>
          <li>✓ Electrical Connections</li>
          <li>✓ System Testing & Inspection</li>
          <li>✓ Grid Connection Assistance</li>
          <li>✓ Final Handover & Training</li>
        </ul>

        <h3 style={{ marginTop: "25px", color: "#ff9800" }}>
          Benefits
        </h3>

        <ul style={{ lineHeight: "2" }}>
          <li>⚡ Fast & Professional Installation</li>
          <li>⚡ Certified Solar Experts</li>
          <li>⚡ Quality Assurance</li>
          <li>⚡ Long-Term Performance</li>
          <li>⚡ Complete Customer Support</li>
        </ul>
      </div>
    </div>
  );
}

export default Installation;