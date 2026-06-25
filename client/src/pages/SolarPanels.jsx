import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImageFile from "../assets/solar-bg.jpg";

function SolarPanels() {
  const navigate = useNavigate();

  const pageStyle = {
    height: "100vh",
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    overflow: "hidden",
  };

  const backgroundImgStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
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

  const overlayStyle = {
    background: "rgba(0, 0, 0, 0.6)",
    padding: "40px",
    borderRadius: "15px",
    maxWidth: "800px",
  };

  return (
    <div style={pageStyle}>
      <img
        src={backgroundImageFile}
        alt="Solar panels"
        style={backgroundImgStyle}
      />
      <button
        style={buttonStyle}
        onClick={() => navigate("/")}
      >
        ← Back to Home
      </button>

      <div style={overlayStyle}>
        <h1>Free Consultations</h1>
        <p>
          Get expert guidance on switching to solar energy with our free consultation service. Our specialists assess your energy needs, evaluate your property, and recommend the most efficient solar solutions tailored to your budget. Discover potential savings, government incentives, and the benefits of clean, renewable energy—all with no obligation.
        </p>
      </div>
    </div>
  );
}

export default SolarPanels;