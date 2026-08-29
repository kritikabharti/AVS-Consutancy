import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import learnVideo from "../assets/learnvideo.mp4";

import longiLogo from "../assets/adnibrand.png";
import canadianLogo from "../assets/aikobrand.png";
import jaLogo from "../assets/axitecbrand.png";
import jinkoLogo from "../assets/goldibrand.png";
import trinaLogo from "../assets/vikrambrand.png";

import solarry from "../assets/panels.jpg";

import polycab from "../assets/Polycab.png";
import havels from "../assets/Havells.png";
import goodwe from "../assets/goodwe.png";
import pvblink from "../assets/pvblink.png";
import obit from "../assets/obit.png";

import inverters from "../assets/inverters.webp";

import batteries from "../assets/batt.jpg";
import grace from "../assets/grace.png";
import evault from "../assets/evault.png";
import voult from "../assets/voltra.png";
import luminous from "../assets/luminous.png";
import involtcis from "../assets/involtcis.png";


/* =========================================================
   SOLAR PANEL BRANDS
========================================================= */

const panelBrands = [
  {
    image: longiLogo,
    name: "ADANI",
    alt: "Adani Solar",
  },
  {
    image: canadianLogo,
    name: "AIKO",
    alt: "AIKO Solar",
  },
  {
    image: jaLogo,
    name: "AXITEC",
    alt: "AXITEC Solar",
  },
  {
    image: jinkoLogo,
    name: "GOLDI",
    alt: "Goldi Solar",
  },
  {
    image: trinaLogo,
    name: "VIKRAM",
    alt: "Vikram Solar",
  },
];


/* =========================================================
   INVERTER BRANDS
========================================================= */

const inverterBrands = [
  {
    image: polycab,
    name: "POLYCAB",
    alt: "Polycab",
  },
  {
    image: havels,
    name: "HAVELLS",
    alt: "Havells",
  },
  {
    image: goodwe,
    name: "GOODWE",
    alt: "GoodWe",
  },
  {
    image: pvblink,
    name: "PV BLINK",
    alt: "PV Blink",
  },
  {
    image: obit,
    name: "OBIT",
    alt: "OBit",
  },
];


/* =========================================================
   BATTERY BRANDS
========================================================= */

const batteryBrands = [
  {
    image: voult,
    name: "VOLTRA",
    alt: "Voltra",
  },
  {
    image: grace,
    name: "GRACE",
    alt: "Grace",
  },
  {
    image: evault,
    name: "EVAULT",
    alt: "Evault",
  },
  {
    image: luminous,
    name: "LUMINOUS",
    alt: "Luminous",
  },
  {
    image: involtcis,
    name: "INVOLTCIS",
    alt: "InvoltCIS",
  },
];


export default function Learn({ token, logout }) {

  return (
    <div style={styles.landingPage}>

      {/* =====================================================
          RESPONSIVE CSS
      ===================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .learn-hero-content {
          max-width: 650px;
          width: 100%;
        }

        .learn-hero-heading {
          font-size: 58px;
          line-height: 1.08;
          margin: 0 0 25px;
        }

        .learn-hero-text {
          font-size: 17px;
          line-height: 1.8;
          max-width: 650px;
        }

        .brand-section {
          padding: 100px 50px;
        }

        .brand-title {
          font-size: 60px;
        }

        .brand-description {
          font-size: 20px;
        }

        .brand-container {
          display: flex;
          justify-content: center;
          align-items: stretch;
          gap: 25px;
          flex-wrap: wrap;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .brand-card {
          width: 200px;
          height: 220px;
        }

        .brand-logo {
          width: 150px;
          max-width: 80%;
          height: 100px;
          object-fit: contain;
        }


        /* =================================================
           LARGE TABLETS
        ================================================= */

        @media (max-width: 1100px) {

          .learn-hero-content {
            max-width: 600px;
          }

          .learn-hero-heading {
            font-size: 52px;
          }

          .learn-hero-text {
            font-size: 16px;
          }

          .brand-section {
            padding: 80px 35px;
          }

          .brand-title {
            font-size: 50px;
          }

          .brand-card {
            width: 180px;
            height: 210px;
          }

        }


        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 768px) {

          .learn-hero-section {
            min-height: 85vh !important;
            padding: 100px 30px 60px !important;
            justify-content: center !important;
          }

          .learn-hero-content {
            max-width: 650px;
            text-align: center;
            margin: 0 auto;
          }

          .learn-hero-heading {
            font-size: 46px;
            text-align: center;
          }

          .learn-hero-text {
            font-size: 15px;
            line-height: 1.7;
            text-align: center;
          }

          .brand-section {
            padding: 75px 25px;
          }

          .brand-title {
            font-size: 44px;
          }

          .brand-description {
            font-size: 17px;
            line-height: 1.6;
            margin-bottom: 40px;
          }

          .brand-container {
            gap: 18px;
          }

          .brand-card {
            width: calc(50% - 12px);
            max-width: 220px;
            height: 200px;
          }

          .brand-logo {
            width: 140px;
            height: 90px;
          }

          .brand-card h4 {
            font-size: 15px;
            margin: 8px 0 0;
          }

        }


        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 480px) {

          .learn-hero-section {
            min-height: 90vh !important;
            padding: 100px 18px 45px !important;
          }

          .learn-hero-content {
            width: 100%;
            max-width: 100%;
          }

          .learn-hero-heading {
            font-size: 38px;
            line-height: 1.1;
            margin-bottom: 20px;
          }

          .learn-hero-text {
            font-size: 14px;
            line-height: 1.65;
            padding: 0 4px;
          }

          .brand-section {
            padding: 60px 15px;
          }

          .brand-title {
            font-size: 34px;
            line-height: 1.15;
            margin-bottom: 12px;
          }

          .brand-line {
            width: 110px !important;
            height: 3px !important;
            margin-bottom: 20px !important;
          }

          .brand-description {
            font-size: 15px;
            line-height: 1.6;
            margin: 0 auto 35px;
            max-width: 330px;
          }

          .brand-container {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }

          .brand-card {
            width: 100%;
            max-width: none;
            height: 170px;
            min-width: 0;
            border-radius: 15px;
          }

          .brand-logo {
            width: 115px;
            max-width: 82%;
            height: 70px;
            margin-bottom: 8px;
          }

          .brand-card h4 {
            font-size: 13px;
            margin: 5px 0 0;
          }

          .brand-card:hover {
            transform: none;
          }

        }


        /* =================================================
           VERY SMALL PHONES
        ================================================= */

        @media (max-width: 360px) {

          .learn-hero-section {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }

          .learn-hero-heading {
            font-size: 32px;
          }

          .learn-hero-text {
            font-size: 13px;
          }

          .brand-section {
            padding-left: 10px;
            padding-right: 10px;
          }

          .brand-title {
            font-size: 30px;
          }

          .brand-description {
            font-size: 14px;
          }

          .brand-container {
            gap: 10px;
          }

          .brand-card {
            height: 155px;
          }

          .brand-logo {
            width: 95px;
            height: 60px;
          }

          .brand-card h4 {
            font-size: 12px;
          }

        }

      `}</style>


      {/* =====================================================
          VIDEO BACKGROUND
      ===================================================== */}

      <video
        autoPlay
        muted
        loop
        playsInline
        style={styles.videoBg}
      >
        <source
          src={learnVideo}
          type="video/mp4"
        />
      </video>


      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar
        token={token}
        logout={logout}
      />


      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section
        className="learn-hero-section"
        style={styles.heroSection}
      >

        <motion.div
          className="learn-hero-content"
          style={styles.heroContent}
          initial={{
            opacity: 0,
            x: -80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
        >

          <motion.p
            style={styles.heroTag}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
          />

          <motion.h1
            className="learn-hero-heading"
            style={styles.heroHeading}
            initial={{
              opacity: 0,
              y: 0,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
          >

            KNOW

            <br />

            <span
              style={{
                color: "#ffb703",
              }}
            >
              MORE
            </span>

          </motion.h1>


          <motion.p
            className="learn-hero-text"
            style={styles.heroText}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
            }}
          >
            AVS Solar Consultancy empowers homeowners and
            businesses to transition seamlessly to clean
            energy through a comprehensive, end-to-end
            service model. From your initial free financial
            consultation and precise engineering site survey
            to custom 3D system design, net-metering
            integration, and dedicated lifetime after-sales
            support, every step is managed by certified
            solar experts.
          </motion.p>

        </motion.div>

      </section>


      {/* =====================================================
          SOLAR PANELS
      ===================================================== */}

      <BrandSection
        title="SOLAR PANELS"
        description={
          <>
            High-efficiency solar panels for maximum energy
            generation and long-term reliability.
            <br />

            <span
              style={{
                color: "#ffb703",
              }}
            >
              Top 5 Brands
            </span>
          </>
        }
        background={solarry}
        brands={panelBrands}
      />


      {/* =====================================================
          INVERTERS
      ===================================================== */}

      <BrandSection
        title="INVERTERS"
        description={
          <>
            Premium products. Trusted Brands. Reliable
            Performance.
            <br />

            <span
              style={{
                color: "#ffb703",
              }}
            >
              Top 5 Brands
            </span>
          </>
        }
        background={inverters}
        brands={inverterBrands}
      />


      {/* =====================================================
          BATTERIES
      ===================================================== */}

      <BrandSection
        title="BATTERIES"
        description={
          <>
            Reliable Batteries for uninterrupted power &
            Energy Storage
            <br />

            <span
              style={{
                color: "#ffb703",
              }}
            >
              Top 5 Brands
            </span>
          </>
        }
        background={batteries}
        brands={batteryBrands}
      />


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </div>
  );
}


/* =========================================================
   REUSABLE BRAND SECTION
========================================================= */

function BrandSection({
  title,
  description,
  background,
  brands,
}) {

  return (
    <motion.section
      className="brand-section"
      style={{
        ...styles.brandSection,
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.65),
            rgba(0,0,0,0.65)
          ),
          url(${background})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
    >

      {/* TITLE */}

      <motion.h2
        className="brand-title"
        style={styles.brandTitle}
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.15,
          duration: 0.6,
        }}
      >
        {title}
      </motion.h2>


      {/* LINE */}

      <motion.div
        className="brand-line"
        style={styles.brandLine}
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.25,
          duration: 0.6,
        }}
      />


      {/* DESCRIPTION */}

      <motion.p
        className="brand-description"
        style={styles.brandDesc}
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.3,
          duration: 0.6,
        }}
      >
        {description}
      </motion.p>


      {/* BRAND CARDS */}

      <motion.div
        className="brand-container"
        style={styles.brandContainer}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.35,
          duration: 0.7,
        }}
      >

        {brands.map((brand, index) => (

          <motion.div
            key={brand.name}
            className="brand-card"
            style={styles.brandCard}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1 + index * 0.08,
              duration: 0.5,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
              boxShadow:
                "0 12px 28px rgba(0,0,0,0.25)",
            }}
          >

            <img
              src={brand.image}
              alt={brand.alt}
              className="brand-logo"
              style={styles.brandLogo}
            />

            <h4>
              {brand.name}
            </h4>

          </motion.div>

        ))}

      </motion.div>

    </motion.section>
  );
}


/* =========================================================
   STYLES
========================================================= */

const styles = {

  /* =======================================================
     MAIN PAGE
  ======================================================= */

  landingPage: {
    minHeight: "100vh",
    color: "white",
    position: "relative",
    overflow: "hidden",
    padding: "0",
  },


  /* =======================================================
     VIDEO
  ======================================================= */

  videoBg: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
    filter: "brightness(40%)",
    pointerEvents: "none",
  },


  /* =======================================================
     HERO
  ======================================================= */

  heroSection: {
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "100px 70px 60px",
    position: "relative",
  },

  heroContent: {
    maxWidth: "650px",
    width: "100%",
    textAlign: "left",
  },

  heroTag: {
    color: "#ffb703",
    letterSpacing: "4px",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "15px",
  },

  heroHeading: {
    fontSize: "58px",
    fontWeight: "600",
    lineHeight: "1.08",
    color: "#fff",
    marginBottom: "25px",
    textAlign: "left",
    textTransform: "uppercase",
  },

  heroText: {
    fontSize: "17px",
    color: "#e5e7eb",
    lineHeight: "1.8",
    marginBottom: "35px",
    textAlign: "left",
  },


  /* =======================================================
     BRAND SECTION
  ======================================================= */

  brandSection: {
    padding: "100px 50px",
    background: "rgba(0,0,0,0.55)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    textAlign: "center",
    position: "relative",
  },

  brandTitle: {
    fontSize: "60px",
    color: "#f4c542",
    fontWeight: "500",
    marginTop: 0,
    marginBottom: "15px",
    lineHeight: "1.15",
    textTransform: "uppercase",
  },

  brandLine: {
    width: "180px",
    height: "4px",
    background: "#f4c542",
    margin: "0 auto 25px",
    borderRadius: "20px",
  },

  brandDesc: {
    color: "#fff",
    fontSize: "20px",
    lineHeight: "1.6",
    margin: "0 auto 60px",
    maxWidth: "700px",
  },

  brandContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    gap: "25px",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  brandCard: {
    width: "200px",
    height: "220px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
    overflow: "hidden",
    padding: "15px",
  },

  brandLogo: {
    width: "150px",
    maxWidth: "80%",
    height: "100px",
    objectFit: "contain",
    marginBottom: "12px",
  },

};