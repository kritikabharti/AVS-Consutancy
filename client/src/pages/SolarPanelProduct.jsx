import React from "react";
import { useNavigate } from "react-router-dom";

function SolarPanelProduct() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "50px",
        background: "#a0c5e1",
      }}
    >
      <button
        onClick={() => navigate("/store")}
        style={{
          padding: "10px 20px",
          border: "none",
          background: "#ff9800",
          color: "#fff",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ← Back to Store
      </button>

     <h1
  style={{
    color: "#000",
    fontSize: "42px",
    marginBottom: "20px",
    fontWeight: "700",
  }}
>
  550W Solar Panel
</h1>

      <img
        src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
        alt="Solar Panel"
        style={{
          width: "500px",
          maxWidth: "100%",
          borderRadius: "15px",
        }}
      />

      <h2 style={{ color: "green" }}>₹18,999</h2>

     <p style={{ color: "#000", fontSize: "18px", lineHeight: "1.8" }}>
  High-efficiency 550W Mono PERC Solar Panel designed
  for residential, commercial and industrial solar
  projects.
</p>

    <ul
  style={{
    color: "#000",
    fontSize: "18px",
    lineHeight: "2",
    listStylePosition: "inside",
  }}
>
  <li>550 Watt Capacity</li>
  <li>25 Years Performance Warranty</li>
  <li>High Conversion Efficiency</li>
  <li>Weather Resistant</li>
  <li>Low Maintenance</li>
</ul>

        <button
  style={{
    padding: "15px 30px",
    background: "#ff9800",
    color: "#131212",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "20px",
    marginLeft: "10px",
  }}
  onClick={() => navigate("/checkout")}
>
  Buy Now
</button>
    </div>
  );
}

export default SolarPanelProduct;