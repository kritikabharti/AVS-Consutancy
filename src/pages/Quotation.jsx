import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImageFile from "../assets/quotation.jpg";

function Quotation() {
  const navigate = useNavigate();

  const pageStyle = {
    minHeight: "100vh",
    backgroundImage: `url(${backgroundImageFile})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: "20px",
  };

  const backButton = {
    position: "absolute",
    top: "20px",
    left: "20px",
    padding: "10px 18px",
    border: "none",
    borderRadius: "10px",
    background: "#ff9800",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const cardStyle = {
    width: "800px",
    maxWidth: "95%",
    background: "rgba(54, 51, 51, 0.12)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: "25px",
    padding: "50px",
    color: "#141313",
    textAlign: "center",
    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
  };

  const titleStyle = {
    fontSize: "3rem",
    marginBottom: "20px",
    color: "#1a1a18",
  };

  return (
    <div style={pageStyle}>
      <button style={backButton} onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <div style={cardStyle}>
        <h1 style={titleStyle}>Quotation & Cost Estimation</h1>

        <p style={{ lineHeight: "1.8", fontSize: "18px" }}>
          We provide transparent and detailed solar quotations tailored to your
          energy requirements. Our quotation includes system specifications,
          estimated energy generation, installation costs, warranty details,
          and projected savings.
        </p>

        <p style={{ lineHeight: "1.8", fontSize: "18px" }}>
          Every quotation is carefully prepared after evaluating your site,
          energy consumption, and preferred solar solution. This ensures you
          receive the most cost-effective and efficient solar system for your
          home or business.
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          <div>
            <h3>📋 Detailed Pricing</h3>
            <p>Complete breakdown of equipment and installation costs.</p>
          </div>

          <div>
            <h3>⚡ Energy Savings</h3>
            <p>Estimated monthly and yearly savings calculations.</p>
          </div>

          <div>
            <h3>🛡 Warranty Details</h3>
            <p>Information about panel and inverter warranties.</p>
          </div>

          <div>
            <h3>💰 ROI Analysis</h3>
            <p>Expected payback period and long-term returns.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotation;