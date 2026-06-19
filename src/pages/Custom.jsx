import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImageFile from "../assets/custom.jpg";

function CustomSolarDesign() {
  const navigate = useNavigate();

  const pageStyle = {
    minHeight: "100vh",
    backgroundImage: `url(${backgroundImageFile})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "50px",
    position: "relative",
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
    fontSize: "15px",
  };

  const contentStyle = {
    maxWidth: "650px",
    background: "rgba(0, 0, 0, 0.65)",
    backdropFilter: "blur(8px)",
    padding: "40px",
    borderRadius: "20px",
    color: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  };

  const headingStyle = {
    fontSize: "42px",
    marginBottom: "20px",
    color: "#ffcc00",
  };

  return (
    <div style={pageStyle}>
      <button
        style={buttonStyle}
        onClick={() => navigate("/")}
      >
        ← Back to Home
      </button>

      <div style={contentStyle}>
        <h1 style={headingStyle}>Custom Solar Design</h1>

        <p style={{ lineHeight: "1.8" }}>
          Every home and business has unique energy requirements. Our Custom
          Solar Design service creates a personalized solar solution tailored
          specifically to your property's layout, energy consumption, and
          future goals.
        </p>

        <p style={{ lineHeight: "1.8" }}>
          Using advanced design tools and site analysis, our experts determine
          the ideal panel placement, system capacity, inverter configuration,
          and energy production estimates to maximize efficiency and savings.
        </p>

        <h3>Why Choose Our Custom Design?</h3>

        <ul style={{ lineHeight: "2" }}>
          <li>✓ Tailored solar system layout</li>
          <li>✓ Maximum energy generation</li>
          <li>✓ Optimized roof space utilization</li>
          <li>✓ Accurate production forecasts</li>
          <li>✓ Cost-effective system planning</li>
          <li>✓ Future expansion recommendations</li>
          <li>✓ Professional engineering support</li>
        </ul>
      </div>
    </div>
  );
}

export default CustomSolarDesign;