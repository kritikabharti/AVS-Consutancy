import React from "react";
import {
  FaSolarPanel,
  FaRulerCombined,
  FaShieldAlt,
  FaHome,
  FaTools,
  FaIndustry,
  FaBroom,
  FaBolt,
  FaCompressArrowsAlt,
  FaCloudSun,
  FaParking,
  FaCompass,
  FaDollarSign,
  FaSun,
  FaChartLine,
  FaCube,
  FaSeedling,
  FaGlobe,
  FaTint,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import mount from "../assets/mounting.mp4";
import mmmm from "../assets/mmmmmm.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import rooftop from "../assets/rooftop.jpg";
import ground from "../assets/ground.jpg";
import elevated from "../assets/elevated.jpg";
import fixed from "../assets/fixedtilt.jpg";
import tracker from "../assets/solartracker.jpg";
import ballasted from "../assets/bellasted.jpg";
import agricultural from "../assets/agricultural.jpg";
import homep from "../assets/homep.png";

export function Mounting({ token, logout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (logout) logout();
    navigate("/login");
  };

  return (
    <>
      <Navbar token={token} logout={logout} />

      {/* Hero Section */}
      <section style={styles.hero}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={styles.video}
        >
          <source src={mount} type="video/mp4" />
        </video>

        <div style={styles.heroOverlay} />
      </section>

      {/* Content */}
      <section
        style={{
          ...styles.content,
          backgroundImage: `linear-gradient(
            rgba(255,255,255,0.88),
            rgba(255,255,255,0.88)
          ), url(${mmmm})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 style={styles.header}>Our Mounting Structures</h2>

        <section style={styles.cardsSection}>
          {/* Rooftop Mounting */}
          <motion.div
            style={styles.productCard}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.01,
            }}
          >
            <div style={styles.leftSide}>
              <img
                src={rooftop}
                alt="Rooftop Mounting"
                style={styles.productImage}
              />
            </div>

            <div style={styles.rightSide}>
              <h3 style={styles.productTitle}>
                Rooftop Mounting Structure
              </h3>

              <div style={styles.feature}>
                <div style={styles.iconCircle}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaHome />
                  </motion.div>
                </div>

                <div style={styles.featureText}>
                  <h4 style={styles.featureHeading}>
                    Ideal for Residential & Commercial Roofs
                  </h4>
                </div>
              </div>

              <div style={styles.feature}>
                <div style={styles.iconCircle}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  >
                    <FaSolarPanel />
                  </motion.div>
                </div>

                <div style={styles.featureText}>
                  <h4 style={styles.featureHeading}>
                    Space Saving
                  </h4>
                </div>
              </div>

              <div style={styles.feature}>
                <div style={styles.iconCircle}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  >
                    <FaTools />
                  </motion.div>
                </div>

                <div style={styles.featureText}>
                  <h4 style={styles.featureHeading}>
                    Strong & Corrosion Resistant
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ground Mounting */}
          <motion.div
            style={styles.productCard}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.01,
            }}
          >
            <div style={styles.leftSide}>
              <img
                src={ground}
                alt="Ground Mounting"
                style={styles.productImage}
              />
            </div>

            <div style={styles.rightSide}>
              <h3 style={styles.productTitle}>
                Ground Mounting Structure
              </h3>

              <div style={styles.feature}>
                <div style={styles.iconCircle}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaIndustry />
                  </motion.div>
                </div>

                <div style={styles.featureText}>
                  <h4 style={styles.featureHeading}>
                    Suitable for Large-Scale Installations
                  </h4>
                </div>
              </div>

              <div style={styles.feature}>
                <div style={styles.iconCircle}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  >
                    <FaBroom />
                  </motion.div>
                </div>

                <div style={styles.featureText}>
                  <h4 style={styles.featureHeading}>
                    Easy Maintenance & Cleaning
                  </h4>
                </div>
              </div>

              <div style={styles.feature}>
                <div style={styles.iconCircle}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  >
                    <FaBolt />
                  </motion.div>
                </div>

                <div style={styles.featureText}>
                  <h4 style={styles.featureHeading}>
                    Better Panel Tilt & Orientation
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Elevated Mounting */}
          <motion.div
            style={styles.productCard}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.01,
            }}
          >
            <div style={styles.leftSide}>
              <img
                src={elevated}
                alt="Elevated Mounting"
                style={styles.productImage}
              />
            </div>

            <div style={styles.rightSide}>
              <h3 style={styles.productTitle}>
                Elevated Mounting Structure
              </h3>

              <div style={styles.feature}>
                <div style={styles.iconCircle}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaCompressArrowsAlt />
                  </motion.div>
                </div>

                <div style={styles.featureText}>
                  <h4 style={styles.featureHeading}>
                    Utilizes Space Efficiency
                  </h4>
                </div>
              </div>

              <div style={styles.feature}>
                <div style={styles.iconCircle}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  >
                    <FaCloudSun />
                  </motion.div>
                </div>

                <div style={styles.featureText}>
                  <h4 style={styles.featureHeading}>
                    Provides Shade and Protection
                  </h4>
                </div>
              </div>

              <div style={styles.feature}>
                <div style={styles.iconCircle}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  >
                    <FaParking />
                  </motion.div>
                </div>

                <div style={styles.featureText}>
                  <h4 style={styles.featureHeading}>
                    Ideal for Parking & Commercial Areas
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Fixed Mounting */}
          <motion.div
            style={styles.productCard}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.01,
            }}
          >
            <div style={styles.leftSide}>
              <img
                src={fixed}
                alt="Fixed Mounting"
                style={styles.productImage}
              />
            </div>

            <div style={styles.rightSide}>
              <h3 style={styles.productTitle}>
                Fixed Mounting Structure
              </h3>

              <div style={styles.feature}>
                <div style={styles.iconCircle}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaCompass />
                  </motion.div>
                </div>

                <div style={styles.featureText}>
                  <h4 style={styles.featureHeading}>
                    Fixed at Optimum Angle
                  </h4>
                </div>
              </div>

              <div style={styles.feature}>
                <div style={styles.iconCircle}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  >
                    <FaDollarSign />
                  </motion.div>
                </div>

                <div style={styles.featureText}>
                  <h4 style={styles.featureHeading}>
                    Cost Effective Solution
                  </h4>
                </div>
              </div>

              <div style={styles.feature}>
                <div style={styles.iconCircle}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  >
                    <FaShieldAlt />
                  </motion.div>
                </div>

                <div style={styles.featureText}>
                  <h4 style={styles.featureHeading}>
                    Low Maintenance Requirements
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Solar Tracker */}
          <motion.div
            style={styles.productCard}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.01,
            }}
          >
            <div style={styles.leftSide}>
              <img
                src={tracker}
                alt="Solar Tracker"
                style={styles.productImage}
              />
            </div>

            <div style={styles.rightSide}>
              <h3 style={styles.productTitle}>
                Solar Tracker Structure
              </h3>

              <div style={styles.feature}>
                <div style={styles.iconCircle}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaSun />
                  </motion.div>
                </div>

                <div style={styles.featureText}>
                  <h4 style={styles.featureHeading}>
                    Follows Sun Movement
                  </h4>
                </div>
              </div>

              <div style={styles.feature}>
                <div style={styles.iconCircle}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  >
                    <FaSolarPanel />
                  </motion.div>
                </div>

                <div style={styles.featureText}>
                  <h4 style={styles.featureHeading}>
                    Higher Energy Generation
                  </h4>
                </div>
              </div>

              <div style={styles.feature}>
                <div style={styles.iconCircle}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  >
                    <FaChartLine />
                  </motion.div>
                </div>

                <div style={styles.featureText}>
                  <h4 style={styles.featureHeading}>
                    Maximizes Efficiency
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ballasted Structure */}
          <motion.div
            style={styles.productCard}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.01,
            }}
          >
            <div style={styles.leftSide}>
              <img
                src={ballasted}
                alt="Ballasted Tracker"
                style={styles.productImage}
              />
            </div>

            <div style={styles.rightSide}>
              <h3 style={styles.productTitle}>
                Ballasted Tracker Structure
              </h3>

              <div style={styles.feature}>
                <div style={styles.iconCircle}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaShieldAlt />
                  </motion.div>
                </div>

                <div style={styles.featureText}>
                  <h4 style={styles.featureHeading}>
                    No Roof Penetration
                  </h4>
                </div>
              </div>

              <div style={styles.feature}>
                <div style={styles.iconCircle}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  >
                    <FaCube />
                  </motion.div>
                </div>

                <div style={styles.featureText}>
                  <h4 style={styles.featureHeading}>
                    Uses Concrete Blocks
                  </h4>
                </div>
              </div>

              <div style={styles.feature}>
                <div style={styles.iconCircle}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  >
                    <FaHome />
                  </motion.div>
                </div>

                <div style={styles.featureText}>
                  <h4 style={styles.featureHeading}>
                    Ideal for Flat Roofs
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Agricultural Structure */}
          <motion.div
            style={styles.productCard}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.01,
            }}
          >
            <div style={styles.leftSide}>
              <img
                src={agricultural}
                alt="Agricultural Tracker"
                style={styles.productImage}
              />
            </div>

            <div style={styles.rightSide}>
              <h3 style={styles.productTitle}>
                Agricultural Tracker Structure
              </h3>

              <div style={styles.feature}>
                <div style={styles.iconCircle}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaSeedling />
                  </motion.div>
                </div>

                <div style={styles.featureText}>
                  <h4 style={styles.featureHeading}>
                    Supports Crop Cultivation
                  </h4>
                </div>
              </div>

              <div style={styles.feature}>
                <div style={styles.iconCircle}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  >
                    <FaGlobe />
                  </motion.div>
                </div>

                <div style={styles.featureText}>
                  <h4 style={styles.featureHeading}>
                    Efficient Land Utilization
                  </h4>
                </div>
              </div>

              <div style={styles.feature}>
                <div style={styles.iconCircle}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  >
                    <FaTint />
                  </motion.div>
                </div>

                <div style={styles.featureText}>
                  <h4 style={styles.featureHeading}>
                    Ideal for Solar Water Pumps
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </section>

      <Footer />
    </>
  );
}

export default Mounting;

const styles = {
  hero: {
    position: "relative",
    width: "100%",
    height: "100vh",
    minHeight: "500px",
    overflow: "hidden",
  },

  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.15)",
    zIndex: 1,
  },

  content: {
    width: "100%",
    minHeight: "100vh",
    padding: "70px 5%",
    boxSizing: "border-box",
    overflow: "hidden",
  },

  header: {
    fontSize: "clamp(30px, 5vw, 52px)",
    fontWeight: "600",
    color: "#d4a900",
    marginTop: "0",
    marginBottom: "50px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    textAlign: "center",
    lineHeight: "1.2",
  },

  cardsSection: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  productCard: {
    width: "100%",
    maxWidth: "1050px",
    minHeight: "480px",
    margin: "0 auto",
    background: "#fff",
    borderRadius: "24px",
    display: "flex",
    overflow: "hidden",
    boxShadow: "0 20px 50px rgba(0,0,0,.15)",
    boxSizing: "border-box",
  },

  leftSide: {
    width: "42%",
    minHeight: "480px",
    overflow: "hidden",
    flexShrink: 0,
  },

  productImage: {
    width: "100%",
    height: "100%",
    minHeight: "480px",
    objectFit: "cover",
    display: "block",
  },

  rightSide: {
    width: "58%",
    padding: "45px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxSizing: "border-box",
  },

  productTitle: {
    fontSize: "clamp(24px, 3vw, 30px)",
    fontWeight: "700",
    color: "#2d3748",
    marginBottom: "30px",
    lineHeight: "1.4",
    fontFamily: "'Poppins', sans-serif",
  },

  feature: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    marginBottom: "24px",
    color: "black",
    width: "100%",
  },

  featureText: {
    flex: 1,
    minWidth: 0,
  },

  featureHeading: {
    fontSize: "clamp(15px, 2vw, 18px)",
    fontWeight: "500",
    color: "#1f2937",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.4",
    margin: 0,
  },

  iconCircle: {
    width: "68px",
    height: "68px",
    minWidth: "68px",
    borderRadius: "50%",
    background: "#212429",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "27px",
  },

  logo: {
    width: "220px",
    maxWidth: "100%",
    marginBottom: "30px",
  },
};