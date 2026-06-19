import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImageFile from "../assets/survey.jpg";

function Sitesurvey() {
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
    color: "#fff",
    textAlign: "center",
    padding: "20px",
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
  };

  const overlayStyle = {
    background: "rgba(0, 0, 0, 0.6)",
    padding: "40px",
    borderRadius: "15px",
    maxWidth: "800px",
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
        <h1>Site Survey</h1>

<p>
A solar site survey is a crucial step in the solar installation process. Our
experts visit your location to assess the available roof space, sunlight
exposure, structural strength, and electrical infrastructure. This helps us
design a customized solar solution that delivers maximum efficiency and
long-term savings.
</p>

<p>
During the survey, we analyze potential shading from nearby buildings or
trees, evaluate the best panel placement, and determine the optimal system
capacity based on your energy consumption. We also provide guidance on
installation requirements, estimated costs, and available government
subsidies.
</p>

<p>
Our comprehensive site survey ensures a smooth installation process and helps
you make an informed decision about transitioning to clean, renewable solar
energy.
</p>
      </div>
    </div>
  );
}

export default Sitesurvey;