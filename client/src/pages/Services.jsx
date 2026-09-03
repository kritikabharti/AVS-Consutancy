import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
      {/* =========================================================
          RESPONSIVE CSS
      ========================================================= */}

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

          /* =====================================================
             LARGE TABLETS
          ===================================================== */

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

          /* =====================================================
             TABLETS
          ===================================================== */

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

          /* =====================================================
             MOBILE
          ===================================================== */

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

          /* =====================================================
             SMALL MOBILE
          ===================================================== */

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

          /* =====================================================
             IMAGE PROTECTION
          ===================================================== */

          img,
          video {
            max-width: 100%;
          }

          /* =====================================================
             REDUCED MOTION
          ===================================================== */

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

        {/* =========================================================
            HERO SECTION
        ========================================================= */}

        <section
          className="services-hero"
          style={{
            ...styles.heroSection,
            backgroundImage: `
              linear-gradient(
                rgba(0,0,0,0.65),
                rgba(0,0,0,0.75)
              ),
              url(${backgroundImage})
            `,
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
              AVS Solar Consultancy provides complete solar energy
              solutions designed around the individual requirements
              of homeowners, businesses, industries and institutions.
              From the first consultation and site assessment to
              system design, installation, documentation, net metering
              and after-sales assistance, our approach focuses on
              creating practical and dependable renewable energy
              systems that deliver value over the long term.
            </motion.p>
          </motion.div>
        </section>

        {/* =========================================================
            RESIDENTIAL SOLAR
        ========================================================= */}

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
              alt="Residential Solar Installation"
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
              AVS Solar Consultancy provides residential solar
              solutions for homeowners who want to reduce their
              dependence on conventional electricity and make
              better use of available rooftop space. Every project
              begins with understanding the customer's electricity
              consumption, available installation area, roof
              condition and expected energy requirements.
            </motion.p>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Based on the site assessment, a suitable solar system
              configuration can be planned according to the
              property's requirements. The installation process
              includes mounting structure planning, solar panel
              placement, inverter integration, electrical connections
              and system testing. The objective is to create a neat,
              safe and efficient installation that works reliably
              throughout the year.
            </motion.p>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Residential customers can also receive assistance
              with documentation, grid connection procedures and
              net-metering related requirements wherever applicable.
              With proper planning and regular maintenance, a
              rooftop solar system can become a dependable part of
              a home's long-term energy strategy.
            </motion.p>

          </motion.div>
        </section>

        {/* =========================================================
            COMMERCIAL SOLAR
        ========================================================= */}

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
              Commercial Solar Solutions
            </motion.h2>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Commercial properties consume significant amounts of
              electricity for lighting, cooling, machinery, office
              equipment and other daily operations. AVS Solar
              Consultancy helps businesses evaluate their energy
              requirements and identify suitable solar opportunities
              for offices, warehouses, shops, educational institutions,
              hospitals and other commercial facilities.
            </motion.p>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Our commercial solar planning considers electricity
              consumption patterns, rooftop availability, structural
              conditions, orientation, shading and expected generation.
              The resulting system is designed to make effective use
              of available space while maintaining accessibility for
              inspection and future maintenance.
            </motion.p>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              A professionally planned commercial solar installation
              can help organizations manage energy expenditure while
              supporting their environmental goals. AVS focuses on
              practical engineering, organized installation and
              dependable system support so that businesses can
              continue concentrating on their core operations.
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
              alt="Commercial Solar Solution"
              style={styles.journeyImage}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

          </motion.div>

        </section>

        {/* =========================================================
            INDUSTRIAL SOLAR
        ========================================================= */}

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
              alt="Industrial Solar Projects"
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
              Industrial facilities often operate with large and
              continuous electricity requirements. AVS Solar
              Consultancy provides customized solar project planning
              for manufacturing units, factories, processing facilities,
              workshops, warehouses and other high-consumption
              environments.
            </motion.p>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Industrial installations require careful attention to
              structural strength, electrical distribution, equipment
              placement, cable routing, safety procedures and system
              capacity. Our project approach considers these factors
              before installation so that the solar plant can be
              integrated with the existing electrical infrastructure
              in an organized manner.
            </motion.p>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              From project planning and component selection to
              installation, testing and handover, every stage requires
              coordination between technical teams and the customer.
              The focus is on developing a scalable solar solution
              that supports long-term energy management and operational
              efficiency.
            </motion.p>

          </motion.div>

        </section>

        {/* =========================================================
            ON-GRID SOLAR
        ========================================================= */}

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
              On-grid solar systems are connected directly to the
              electricity distribution network. During periods of
              sunlight, the solar panels generate electricity that
              can be used by the property. This allows homes and
              businesses to make use of their own solar generation
              while remaining connected to the utility grid.
            </motion.p>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              One of the major advantages of an on-grid configuration
              is that it generally does not require a large battery
              storage system. This can make the system simpler to
              operate and maintain. The solar inverter manages the
              conversion of electricity generated by the panels and
              coordinates the system with the grid connection.
            </motion.p>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              AVS can also assist customers in understanding the
              documentation and process involved in grid connectivity
              and net-metering requirements, subject to the applicable
              local electricity regulations. Proper system sizing and
              installation are important for achieving consistent
              performance from an on-grid solar plant.
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
              alt="On Grid Solar System"
              style={styles.journeyImage}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

          </motion.div>

        </section>

        {/* =========================================================
            OFF-GRID SOLAR
        ========================================================= */}

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
              alt="Off Grid Solar System"
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
              Off-Grid Solar Systems
            </motion.h2>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Off-grid solar systems are designed for locations where
              reliable grid electricity is limited, unavailable or
              where independent power generation is preferred. These
              systems combine solar panels with battery storage so
              that electricity generated during the day can be stored
              and used when sunlight is not available.
            </motion.p>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Before designing an off-grid system, the expected load,
              daily consumption pattern, essential appliances and
              required backup duration need to be evaluated carefully.
              Correct sizing of the solar array, inverter and battery
              bank is important because the system must balance energy
              generation with available storage capacity.
            </motion.p>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              AVS focuses on creating practical independent power
              systems for suitable residential, rural, remote and
              specialized applications. With appropriate system
              planning and regular maintenance, off-grid solar can
              provide dependable access to renewable electricity
              without relying entirely on the conventional grid.
            </motion.p>

          </motion.div>

        </section>

        {/* =========================================================
            HYBRID SOLAR
        ========================================================= */}

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
              Hybrid solar systems combine solar generation,
              electricity storage and grid connectivity into a single
              energy solution. This configuration provides greater
              flexibility because solar power can be used directly,
              stored in batteries or supplied through the grid
              depending on the system design and energy requirements.
            </motion.p>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              During daylight hours, solar generation can supply the
              property's active electrical loads while surplus energy
              can be directed towards battery charging. The stored
              energy can then be used during periods of low solar
              production or power interruptions. The system can also
              remain connected to the grid as an additional energy
              source when required.
            </motion.p>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Hybrid systems are particularly useful for customers
              who want the benefits of solar generation together with
              backup capability. AVS helps evaluate energy usage,
              backup expectations, available installation space and
              storage requirements before recommending an appropriate
              configuration.
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
              alt="Hybrid Solar System"
              style={styles.journeyImage}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

          </motion.div>

        </section>

        {/* =========================================================
            BATTERY SOLUTIONS
        ========================================================= */}

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
              alt="Solar Battery Solutions"
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
              Battery storage plays an important role in solar
              systems where backup power or greater energy independence
              is required. Instead of using all generated electricity
              immediately, a battery allows surplus energy to be stored
              and made available later when solar production is low or
              unavailable.
            </motion.p>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Battery capacity should be selected according to the
              customer's energy consumption, expected backup duration,
              critical loads and solar generation capacity. Different
              battery technologies have different characteristics in
              terms of usable capacity, maintenance requirements,
              operating conditions, charging behavior and expected
              service life.
            </motion.p>

            <motion.p
              className="services-text"
              style={styles.infoText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              AVS Solar Consultancy can help customers understand
              available storage configurations and choose a solution
              suitable for their solar setup. Proper installation,
              system configuration and periodic monitoring are
              important for maintaining safe and reliable battery
              performance over the life of the system.
            </motion.p>

          </motion.div>

        </section>

      </div>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <Footer />
    </>
  );
}


/* ===============================================================
   STYLES
================================================================ */

const styles = {

  container: {
    minHeight: "10vh",
    paddingTop: "0px",
  },

  /* =============================================================
     HERO
  ============================================================= */

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

  /* =============================================================
     NAVBAR STYLES
  ============================================================= */

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

  /* =============================================================
     IMAGE
  ============================================================= */

  journeyImage: {
    width: "100%",

    maxWidth: "650px",

    height: "450px",

    objectFit: "cover",

    borderRadius: "20px",

    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },

  /* =============================================================
     INFORMATION SECTION
  ============================================================= */

  infoSection: {
    display: "flex",

    alignItems: "center",

    justifyContent: "space-between",

    gap: "60px",

    padding: "100px 80px",
  },

  /* =============================================================
     IMAGE CONTAINER
  ============================================================= */

  journeyImageContainer: {
    flex: 1,

    display: "flex",

    justifyContent: "center",

    minWidth: 0,
  },

  /* =============================================================
     CONTENT
  ============================================================= */

  contentContainer: {
    flex: 1,

    minWidth: 0,
  },

  /* =============================================================
     TITLE
  ============================================================= */

  infoTitle: {
    color: "#3a1a1a",

    fontSize: "40px",

    fontWeight: "600",

    marginBottom: "20px",
  },

  /* =============================================================
     TEXT
  ============================================================= */

  infoText: {
    color: "#0e1317",

    fontSize: "16px",

    lineHeight: "1.6",

    marginBottom: "26px",
  },

  /* =============================================================
     LIST
  ============================================================= */

  infoList: {
    color: "#fff",

    fontSize: "18px",

    lineHeight: "2",

    listStyle: "none",

    padding: 0,
  },
};

export default Services;