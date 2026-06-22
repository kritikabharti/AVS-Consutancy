import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImageFile from "../assets/support.jpg";

function AfterSalesSupport() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <button
        style={styles.backButton}
        onClick={() => navigate("/")}
      >
        ← Back to Home
      </button>

      <div style={styles.overlay}>
        <h1 style={styles.heading}>
          After Sales Support
        </h1>

        <p style={styles.subHeading}>
          Our relationship doesn't end after installation. We provide
          continuous support to ensure your solar system operates at
          maximum efficiency for years to come.
        </p>

        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <div style={styles.icon}></div>
            <h3>Maintenance Services</h3>
            <p>
              Regular inspection and preventive maintenance to keep
              your system performing efficiently.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}></div>
            <h3>Performance Monitoring</h3>
            <p>
              Track system performance and identify any issues before
              they affect energy production.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}></div>
            <h3>24/7 Customer Support</h3>
            <p>
              Dedicated support team available to answer queries and
              resolve concerns quickly.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}></div>
            <h3>Repair & Replacement</h3>
            <p>
              Fast troubleshooting, repairs, and component replacement
              whenever required.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}></div>
            <h3>System Health Reports</h3>
            <p>
              Detailed reports to help you understand system
              performance and savings.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}></div>
            <h3>Warranty Assistance</h3>
            <p>
              Complete support for warranty claims and manufacturer
              coordination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundImage: `url(${backgroundImageFile})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  },

  overlay: {
  minHeight: "100vh",
  background:
    "linear-gradient(rgba(5,15,35,0.45), rgba(5,15,35,0.55))",
  padding: "80px 50px",
},

   backButton: {
    position: "absolute",
    top: "25px",
    left: "25px",
    padding: "12px 22px",
    border: "none",
    borderRadius: "8px",
    background: "#ff9800",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },

  heading: {
    textAlign: "center",
    color: "#b7ce23",
    fontSize: "3.5rem",
    marginBottom: "20px",
  },

  subHeading: {
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto 50px",
    color: "#ffffff",
    lineHeight: "1.8",
    fontSize: "18px",
  },

  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "30px",
  },

  card: {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    padding: "30px",
    color: "#fff",
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.15)",
    transition: "0.3s ease",
    cursor: "pointer",
  },

  icon: {
    fontSize: "3rem",
    marginBottom: "15px",
  },
};

export default AfterSalesSupport;