import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logoFile from "../assets/newlogo.png";
import backgroundImage from "../assets/solar-bg.jpg";
import whyChooseImg from "../assets/soInstallation.jpg";
import epcBg from "../assets/wallpaper1.jpg";
import wallp from "../assets/wallpaper2.jpg";
import solution from "../assets/BidWe.jpg";
import projects from "../assets/comm.jpg";
import grid from "../assets/23.jpg";
import gridoff from "../assets/images (5).jpg";
import hybrid from "../assets/images (6).jpg";
import battery from "../assets/battery.jpg";

function Services({ token, logout }) {
  const navigate = useNavigate();
  const isLoggedIn = !!token;

  const handleLogout = () => {
    if (logout) logout();
    navigate("/login");
  };

  return (
    <>
      {/* Responsive CSS - does not change your existing functionality */}
      <style>
        {`
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

          .services-page {
            width: 100%;
            overflow-x: hidden;
          }

          .services-hero {
            width: 100%;
          }

          .services-info-section {
            width: 100%;
          }

          .services-image {
            display: block;
          }

          /* Large tablets */
          @media (max-width: 1100px) {

            .services-hero {
              min-height: 65vh !important;
              padding: 120px 50px !important;
            }

            .services-hero-content {
              max-width: 600px !important;
            }

            .services-hero-heading {
              font-size: 44px !important;
            }

            .services-info-section {
              padding: 80px 50px !important;
              gap: 40px !important;
            }

            .services-image {
              height: 400px !important;
            }

            .services-title {
              font-size: 34px !important;
            }
          }

          /* Tablets */
          @media (max-width: 900px) {

            .services-hero {
              min-height: 65vh !important;
              padding: 130px 40px 80px !important;
              align-items: center !important;
            }

            .services-hero-content {
              max-width: 100% !important;
            }

            .services-hero-heading {
              font-size: 42px !important;
            }

            .services-hero-text {
              font-size: 15px !important;
              line-height: 1.7 !important;
            }

            .services-info-section {
              flex-direction: column !important;
              padding: 70px 40px !important;
              gap: 45px !important;
              align-items: stretch !important;
            }

            .services-content {
              width: 100% !important;
              flex: none !important;
            }

            .services-image-container {
              width: 100% !important;
              flex: none !important;
              order: 2;
            }

            .services-info-section .services-content {
              order: 1;
            }

            .services-image {
              width: 100% !important;
              max-width: 100% !important;
              height: 400px !important;
            }

            .services-title {
              font-size: 34px !important;
              line-height: 1.2 !important;
            }

            .services-text {
              font-size: 16px !important;
              line-height: 1.7 !important;
            }
          }

          /* Mobile */
          @media (max-width: 600px) {

            .services-hero {
              min-height: 75vh !important;
              padding: 120px 22px 60px !important;
              justify-content: center !important;
            }

            .services-hero-content {
              width: 100% !important;
              max-width: 100% !important;
            }

            .services-hero-tag {
              font-size: 11px !important;
              letter-spacing: 2.5px !important;
              margin-bottom: 12px !important;
            }

            .services-heading-line {
              width: 75px !important;
              height: 3px !important;
              margin-bottom: 20px !important;
            }

            .services-hero-heading {
              font-size: 32px !important;
              line-height: 1.15 !important;
              margin-bottom: 20px !important;
            }

            .services-hero-text {
              font-size: 14px !important;
              line-height: 1.7 !important;
              margin-bottom: 20px !important;
            }

            .services-info-section {
              padding: 55px 20px !important;
              gap: 32px !important;
            }

            .services-title {
              font-size: 28px !important;
              line-height: 1.25 !important;
              margin-bottom: 15px !important;
            }

            .services-text {
              font-size: 14px !important;
              line-height: 1.75 !important;
              margin-bottom: 15px !important;
            }

            .services-image {
              height: 280px !important;
              border-radius: 15px !important;
            }

            .services-image-container {
              width: 100% !important;
            }
          }

          /* Small mobile */
          @media (max-width: 400px) {

            .services-hero {
              padding: 110px 16px 50px !important;
            }

            .services-hero-heading {
              font-size: 27px !important;
            }

            .services-hero-text {
              font-size: 13px !important;
            }

            .services-info-section {
              padding: 45px 16px !important;
            }

            .services-title {
              font-size: 25px !important;
            }

            .services-text {
              font-size: 13px !important;
            }

            .services-image {
              height: 230px !important;
            }
          }

          /* Prevent very large images from overflowing */
          img,
          video {
            max-width: 100%;
          }

          /* Better mobile animation behavior */
          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              scroll-behavior: auto !important;
            }
          }
        `}
      </style>

      <div style={styles.container} className="services-page">
        <Navbar token={token} logout={logout} />

        {/* Hero Section */}
        <section
          className="services-hero"
          style={{
            ...styles.heroSection,
            backgroundImage: `linear-gradient(
              rgba(0,0,0,0.65),
              rgba(0,0,0,0.75)
            ), url(${backgroundImage})`,
          }}
        >
          <motion.div
            className="services-hero-content"
            style={styles.heroContent}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="services-hero-tag"
              style={styles.heroTag}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              GO GREEN GO CLEAN
            </motion.p>

            <motion.div
              className="services-heading-line"
              style={styles.headingLine}
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              transition={{ duration: 1 }}
            />

            <motion.h1
              className="services-hero-heading"
              style={styles.heroHeading}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Our Comprehensive
              <br />
              <span style={{ color: "#ffb703" }}>Solar</span>{" "}
              System
            </motion.h1>

            <motion.p
              className="services-hero-text"
              style={styles.heroText}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              AVS Solar Consultancy delivers complete solar energy
              solutions from consultation and design to installation,
              net metering, maintenance, and long-term support.
              Our goal is to provide reliable, cost-effective and
              sustainable solar systems for residential,
              commercial and industrial customers across India.
            </motion.p>
          </motion.div>
        </section>

        {/* Residential */}
        <section
          className="services-info-section"
          style={{
            ...styles.infoSection,
            backgroundImage: `url(${epcBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <motion.div
            className="services-image-container"
            style={styles.journeyImageContainer}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.img
              className="services-image"
              src={whyChooseImg}
              alt="Why Choose AVS Solar"
              style={styles.journeyImage}
              whileHover={{
                scale: 1.05,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="services-content"
            style={styles.contentContainer}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="services-title"
              style={styles.infoTitle}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Residential Solar Installation
            </motion.h2>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Residential solar installations by AVS Solar Consultancy
              provide end-to-end services to help homeowners lower
              electricity bills and achieve energy independence. Their
              process includes site assessments, custom system designs,
              and support for government subsidies. They install
              grid-tie, off-grid, and hybrid configurations using
              high-efficiency solar panels and reliable inverters.
            </motion.p>
          </motion.div>
        </section>

        {/* Commercial */}
        <section
          className="services-info-section"
          style={{
            ...styles.infoSection,
            backgroundImage: `url(${wallp})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <motion.div
            className="services-content"
            style={styles.contentContainer}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="services-title"
              style={styles.infoTitle}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Commercial solar solution
            </motion.h2>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              AVS Solar Consultancy provides scalable commercial solar
              solutions engineered to minimize operational overhead,
              achieve sustainability targets, and shield businesses
              from rising grid tariffs. Their full-service engineering,
              procurement, and construction (EPC) model begins with
              advanced energy load profiling and structural roof analysis
              to design high-yield, Tier-1 PV systems optimized for
              factories, warehouses, office complexes, and institutional
              facilities. Businesses can leverage capital-expenditure
              (CAPEX) investment models for immediate asset ownership
              or operational-expenditure (OPEX/PPA) frameworks to
              install solar with zero upfront costs while purchasing
              power at a fixed, discounted rate.
            </motion.p>
          </motion.div>

          <motion.div
            className="services-image-container"
            style={styles.journeyImageContainer}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.img
              className="services-image"
              src={solution}
              alt="Residential Solar"
              style={styles.journeyImage}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </section>

        {/* Industrial */}
        <section
          className="services-info-section"
          style={{
            ...styles.infoSection,
            backgroundImage: `url(${epcBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <motion.div
            className="services-image-container"
            style={styles.journeyImageContainer}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.img
              className="services-image"
              src={projects}
              alt="Why Choose AVS Solar"
              style={styles.journeyImage}
              whileHover={{
                scale: 1.05,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="services-content"
            style={styles.contentContainer}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="services-title"
              style={styles.infoTitle}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Industrial Solar Projects
            </motion.h2>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              AVS Solar Consultancy delivers high-capacity industrial
              solar projects engineered to significantly reduce
              high-tension electricity costs and meet corporate
              renewable purchase obligations (RPOs). Their comprehensive
              turnkey services encompass rigorous structural roof health
              checks, heavy-duty electrical engineering, procurement
              of premium Tier-1 components, and professional installation
              tailored for heavy industries like manufacturing, textiles,
              and chemical plants. To accommodate diverse corporate
              financial strategies, they offer flexible financing
              structures including direct ownership (CAPEX) for maximum
              long-term asset value or zero-upfront power purchase
              agreements (OPEX) for immediate operational savings.
            </motion.p>
          </motion.div>
        </section>

        {/* On Grid */}
        <section
          className="services-info-section"
          style={{
            ...styles.infoSection,
            backgroundImage: `url(${wallp})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <motion.div
            className="services-content"
            style={styles.contentContainer}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="services-title"
              style={styles.infoTitle}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              On-Grid Solar Solutions
            </motion.h2>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              AVS Solar Consultancy provides high-efficiency on-grid
              solar solutions designed to drastically reduce monthly
              electricity bills by syncing directly with the local
              utility network. These grid-tied setups are the most
              cost-effective solar option because they eliminate the
              need for expensive battery banks, sending any excess
              power generated during sunny hours back to the grid.
              Through the integration of smart net-metering technology,
              homeowners and businesses receive accurate energy credits
              from their utility providers, which effectively offsets
              their nighttime electricity consumption.
            </motion.p>
          </motion.div>

          <motion.div
            className="services-image-container"
            style={styles.journeyImageContainer}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.img
              className="services-image"
              src={grid}
              alt="Residential Solar"
              style={styles.journeyImage}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </section>

        {/* Off Grid */}
        <section
          className="services-info-section"
          style={{
            ...styles.infoSection,
            backgroundImage: `url(${epcBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <motion.div
            className="services-image-container"
            style={styles.journeyImageContainer}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.img
              className="services-image"
              src={gridoff}
              alt="Why Choose AVS Solar"
              style={styles.journeyImage}
              whileHover={{
                scale: 1.05,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="services-content"
            style={styles.contentContainer}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="services-title"
              style={styles.infoTitle}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Off-grid Solar Systems
            </motion.h2>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Residential Solar Installation of AVS Solar Consultancy
              provides end-to-end residential solar solutions designed
              to lower household energy costs, minimize grid dependency,
              and guarantee a steady power supply. Their certified
              engineers handle the entire project lifecycle, starting
              with a free site evaluation and energy consumption audit
              to tailor a custom system configuration for your roof.
              To guarantee high-quality performance, the company
              installs aesthetic, low-profile Tier-1 solar panel brands
              backed by long-term performance and installation warranties.
            </motion.p>
          </motion.div>
        </section>

        {/* Hybrid */}
        <section
          className="services-info-section"
          style={{
            ...styles.infoSection,
            backgroundImage: `url(${wallp})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <motion.div
            className="services-content"
            style={styles.contentContainer}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="services-title"
              style={styles.infoTitle}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hybrid Solar Systems
            </motion.h2>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hybrid solar systems combine the best features of
              grid-tied and off-grid configurations by remaining
              connected to the utility grid while integrating a
              dedicated solar battery backup bank. During peak
              daylight hours, the solar panels power your household
              appliances directly, and any surplus electricity is
              simultaneously routed to recharge your batteries.
              Once the batteries are fully charged, the system funnels
              the remaining excess power back into the utility grid,
              allowing you to earn credits through net metering
              regulations. If your panels produce less electricity
              during nighttime or cloudy weather, the system intelligently
              draws energy first from your stored battery reserves,
              turning to the external grid only as a secondary fallback.
            </motion.p>
          </motion.div>

          <motion.div
            className="services-image-container"
            style={styles.journeyImageContainer}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.img
              className="services-image"
              src={hybrid}
              alt="Residential Solar"
              style={styles.journeyImage}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </section>

        {/* Battery */}
        <section
          className="services-info-section"
          style={{
            ...styles.infoSection,
            backgroundImage: `url(${epcBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <motion.div
            className="services-image-container"
            style={styles.journeyImageContainer}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.img
              className="services-image"
              src={battery}
              alt="Why Choose AVS Solar"
              style={styles.journeyImage}
              whileHover={{
                scale: 1.05,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="services-content"
            style={styles.contentContainer}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="services-title"
              style={styles.infoTitle}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Solar Battery Solutions
            </motion.h2>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Solar battery solutions serve as the critical energy
              storage core for hybrid and off-grid configurations,
              capturing the excess electricity generated by your
              panels during peak sun hours for use at night or during
              power outages. Modern residential installations primarily
              utilize Lithium-ion, including Lithium Iron Phosphate
              or LFP, batteries due to their high depth of discharge,
              compact size, and long lifespans of up to 10 to 15 years,
              though budget-friendly Lead-acid options remain available
              for basic backup needs.
            </motion.p>
          </motion.div>
        </section>
      </div>

      <Footer />
    </>
  );
}

const styles = {
  container: {
    minHeight: "10vh",
    paddingTop: "0px",
  },

  heroSection: {
    minHeight: "70vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "120px 80px",
  },

  heroContent: {
    maxWidth: "650px",
    textAlign: "left",
  },

  headingLine: {
    width: "120px",
    height: "4px",
    background: "#ffb703",
    borderRadius: "20px",
    marginBottom: "25px",
  },

  heroTag: {
    color: "#ffb703",
    letterSpacing: "4px",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "15px",
    textAlign: "left",
  },

  heroHeading: {
    fontSize: "50px",
    fontWeight: "600",
    lineHeight: "1.1",
    color: "#fff",
    marginBottom: "25px",
    textAlign: "left",
  },

  heroText: {
    fontSize: "15px",
    color: "#e5e7eb",
    lineHeight: "1.8",
    marginBottom: "35px",
    textAlign: "left",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2px 20px",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: "rgba(0, 0, 0, 0.65)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  },

  logo: {
    display: "flex",
    alignItems: "center",
  },

  logoImage: {
    height: "60px",
    width: "auto",
  },

  logoText: {
    marginLeft: "12px",
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "2px",
    color: "#fff",
  },

  navLinks: {
    display: "flex",
    gap: "30px",
  },

  link: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },

  logInBtn: {
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.15)",
    padding: "10px 24px",
    borderRadius: "30px",
    backdropFilter: "blur(10px)",
    cursor: "pointer",
  },

  logoutBtn: {
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.15)",
    padding: "10px 24px",
    borderRadius: "30px",
    backdropFilter: "blur(10px)",
    cursor: "pointer",
  },

  journeyImage: {
    width: "100%",
    maxWidth: "650px",
    height: "450px",
    objectFit: "cover",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },

  infoSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "60px",
    padding: "100px 80px",
  },

  journeyImageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    minWidth: 0,
  },

  contentContainer: {
    flex: 1,
    minWidth: 0,
  },

  infoTitle: {
    color: "#3a1a1a",
    fontSize: "40px",
    fontWeight: "600",
    marginBottom: "20px",
  },

  infoText: {
    color: "#0e1317",
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "26px",
  },

  infoList: {
    color: "#fff",
    fontSize: "18px",
    lineHeight: "2",
    listStyle: "none",
    padding: 0,
  },
};

export default Services;