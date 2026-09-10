import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  CheckCircle2,
  Home,
  Building2,
  Factory,
  Sun,
  BatteryCharging,
  Network,
  Zap,
  ShieldCheck,
  Settings,
  Phone,
  Sparkles,
} from "lucide-react";

// ================================
// IMAGES
// ================================

import backgroundImage from "../assets/solar-bg.jpg";
import whyChooseImg from "../assets/soInstallation.jpg";
import solution from "../assets/BidWe.jpg";
import projects from "../assets/comm.jpg";
import grid from "../assets/23.jpg";
import gridoff from "../assets/images (5).jpg";
import hybrid from "../assets/images (6).jpg";
import battery from "../assets/battery.jpg";
import whyChoose from "../assets/why-choose.jpg";

// ================================
// VIDEO
// ================================

import solarVideo from "../assets/solar-video.mp4";

function Services({ token, logout }) {
  const navigate = useNavigate();

  return (
    <>
      {/* =========================================================
          GLOBAL STYLES
      ========================================================= */}

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
          font-family: Arial, Helvetica, sans-serif;
        }

        .services-page {
          width: 100%;
          background: #f7f9fc;
          overflow: hidden;
        }

        /* ======================================================
           COMMON
        ====================================================== */

        .section-container {
          width: min(1200px, calc(100% - 100px));
          margin: 0 auto;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #c79b28;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 15px;
        }

        .section-label::before {
          content: "";
          width: 28px;
          height: 2px;
          background: #c79b28;
        }

        .section-heading {
          font-size: 46px;
          line-height: 1.12;
          color: #09233f;
          margin: 0 0 18px;
          font-weight: 700;
        }

        .section-description {
          color: #667085;
          font-size: 16px;
          line-height: 1.8;
          margin: 0;
        }

        /* ======================================================
           VIDEO HERO
        ====================================================== */

        .services-video-hero {
          position: relative;
          width: 100%;
          height: 88vh;
          min-height: 650px;
          overflow: hidden;
          background: #06192b;
        }

        .services-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-dark-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(3, 20, 37, 0.92) 0%,
              rgba(3, 20, 37, 0.70) 45%,
              rgba(3, 20, 37, 0.28) 100%
            );
        }

        .video-bottom-gradient {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 180px;
          background:
            linear-gradient(
              transparent,
              rgba(3, 20, 37, 0.75)
            );
        }

        .video-content {
          position: relative;
          z-index: 2;
          height: 100%;
          width: min(1200px, calc(100% - 100px));
          margin: auto;
          display: flex;
          align-items: center;
        }

        .video-content-inner {
          max-width: 760px;
          padding-top: 50px;
        }

        .video-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #ffbf2f;
          font-size: 13px;
          letter-spacing: 3px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .video-label span {
          width: 35px;
          height: 2px;
          background: #ffbf2f;
        }

        .video-title {
          color: white;
          font-size: clamp(48px, 6vw, 78px);
          line-height: 1.02;
          font-weight: 700;
          margin: 0 0 25px;
          letter-spacing: -2px;
        }

        .video-title span {
          color: #ffbf2f;
        }

        .video-description {
          max-width: 680px;
          color: rgba(255,255,255,0.82);
          font-size: 17px;
          line-height: 1.8;
          margin: 0 0 32px;
        }

        .hero-buttons {
          display: flex;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .primary-btn {
          border: none;
          padding: 14px 24px;
          border-radius: 7px;
          background: #ffb703;
          color: #09233f;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          transition: 0.3s ease;
        }

        .primary-btn:hover {
          transform: translateY(-3px);
          background: #ffc52f;
          box-shadow: 0 10px 25px rgba(255,183,3,0.25);
        }

        .secondary-btn {
          border: 1px solid rgba(255,255,255,0.35);
          padding: 13px 23px;
          border-radius: 7px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          color: white;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          transition: 0.3s ease;
        }

        .secondary-btn:hover {
          background: rgba(255,255,255,0.16);
          transform: translateY(-3px);
        }

        .hero-scroll {
          position: absolute;
          bottom: 35px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          color: rgba(255,255,255,0.75);
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        /* ======================================================
           INTRO SECTION
        ====================================================== */

        .intro-section {
          background: white;
          padding: 110px 0;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 80px;
          align-items: center;
        }

        .intro-image-wrapper {
          position: relative;
        }

        .intro-image {
          width: 100%;
          height: 510px;
          object-fit: cover;
          border-radius: 18px;
          display: block;
          box-shadow: 0 25px 60px rgba(9,35,63,0.15);
        }

        .experience-box {
          position: absolute;
          right: -25px;
          bottom: 30px;
          width: 185px;
          padding: 24px;
          background: #09233f;
          color: white;
          border-radius: 12px;
          box-shadow: 0 18px 40px rgba(0,0,0,0.2);
        }

        .experience-number {
          display: block;
          color: #ffb703;
          font-size: 35px;
          font-weight: 800;
          margin-bottom: 5px;
        }

        .experience-text {
          font-size: 12px;
          line-height: 1.5;
          color: rgba(255,255,255,0.75);
        }

        .intro-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-top: 30px;
        }

        .intro-point {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #344054;
          font-size: 14px;
          line-height: 1.6;
        }

        .intro-point svg {
          color: #c79b28;
          min-width: 18px;
          margin-top: 2px;
        }

        /* ======================================================
           SOLUTIONS SECTION
        ====================================================== */

        .solutions-section {
          padding: 110px 0;
          background: #f4f7fa;
        }

        .section-top {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 55px;
        }

        .section-top .section-label {
          justify-content: center;
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .solution-card {
          position: relative;
          min-height: 330px;
          overflow: hidden;
          border-radius: 16px;
          background: #09233f;
          cursor: pointer;
          box-shadow: 0 12px 35px rgba(9,35,63,0.10);
        }

        .solution-card-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .solution-card:hover .solution-card-image {
          transform: scale(1.08);
        }

        .solution-card-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              transparent 20%,
              rgba(4,24,43,0.92) 90%
            );
        }

        .solution-card-content {
          position: absolute;
          left: 25px;
          right: 25px;
          bottom: 25px;
          z-index: 2;
          color: white;
        }

        .solution-icon {
          width: 46px;
          height: 46px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,183,3,0.95);
          color: #09233f;
          margin-bottom: 16px;
        }

        .solution-card h3 {
          margin: 0 0 8px;
          font-size: 22px;
        }

        .solution-card p {
          margin: 0;
          color: rgba(255,255,255,0.75);
          font-size: 13px;
          line-height: 1.6;
        }

        /* ======================================================
           SERVICE DETAIL SECTIONS
        ====================================================== */

        .detail-section {
          padding: 115px 0;
          background: white;
        }

        .detail-section.dark {
          background: #09233f;
        }

        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .detail-grid.reverse .detail-image-wrapper {
          order: 2;
        }

        .detail-grid.reverse .detail-content {
          order: 1;
        }

        .detail-image-wrapper {
          position: relative;
        }

        .detail-image {
          width: 100%;
          height: 470px;
          object-fit: cover;
          border-radius: 18px;
          display: block;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }

        .image-number {
          position: absolute;
          top: 22px;
          left: 22px;
          padding: 9px 13px;
          border-radius: 5px;
          background: #ffb703;
          color: #09233f;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .detail-content h2 {
          font-size: 43px;
          line-height: 1.15;
          margin: 0 0 20px;
          color: #09233f;
        }

        .dark .detail-content h2 {
          color: white;
        }

        .detail-content p {
          color: #667085;
          line-height: 1.8;
          font-size: 15px;
          margin: 0 0 17px;
        }

        .dark .detail-content p {
          color: rgba(255,255,255,0.68);
        }

        .detail-list {
          padding: 0;
          margin: 28px 0 0;
          list-style: none;
          display: grid;
          gap: 12px;
        }

        .detail-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #344054;
          font-size: 14px;
        }

        .dark .detail-list li {
          color: rgba(255,255,255,0.82);
        }

        .detail-list svg {
          color: #c79b28;
          min-width: 18px;
        }

        /* ======================================================
           SYSTEM TYPES
        ====================================================== */

        .system-section {
          padding: 110px 0;
          background:
            linear-gradient(
              135deg,
              #061a2e,
              #09233f
            );
        }

        .system-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: end;
          margin-bottom: 50px;
        }

        .system-header h2 {
          color: white;
          font-size: 45px;
          margin: 0;
          line-height: 1.15;
        }

        .system-header p {
          color: rgba(255,255,255,0.67);
          line-height: 1.8;
          margin: 0;
        }

        .system-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .system-card {
          padding: 30px 24px;
          min-height: 275px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.045);
          border-radius: 14px;
          transition: 0.35s ease;
        }

        .system-card:hover {
          transform: translateY(-8px);
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,183,3,0.4);
        }

        .system-card-icon {
          width: 52px;
          height: 52px;
          border-radius: 11px;
          background: rgba(255,183,3,0.12);
          color: #ffb703;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
        }

        .system-card h3 {
          color: white;
          margin: 0 0 10px;
          font-size: 19px;
        }

        .system-card p {
          color: rgba(255,255,255,0.60);
          font-size: 13px;
          line-height: 1.7;
          margin: 0;
        }

        /* ======================================================
           PROCESS
        ====================================================== */

        .process-section {
          padding: 110px 0;
          background: white;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 55px;
        }

        .process-card {
          position: relative;
          padding: 30px 25px;
          border-radius: 14px;
          background: #f7f9fc;
          border: 1px solid #e8edf3;
        }

        .process-number {
          font-size: 40px;
          font-weight: 800;
          color: rgba(9,35,63,0.08);
          margin-bottom: 20px;
        }

        .process-card h3 {
          margin: 0 0 10px;
          color: #09233f;
          font-size: 18px;
        }

        .process-card p {
          color: #667085;
          font-size: 13px;
          line-height: 1.7;
          margin: 0;
        }

        /* ======================================================
           CTA
        ====================================================== */

        .services-cta {
          position: relative;
          padding: 100px 30px;
          text-align: center;
          background:
            linear-gradient(
              rgba(5,25,44,0.90),
              rgba(5,25,44,0.90)
            ),
            url(${backgroundImage});
          background-size: cover;
          background-position: center;
        }

        .services-cta h2 {
          color: white;
          font-size: 45px;
          margin: 0 0 15px;
        }

        .services-cta p {
          max-width: 680px;
          margin: 0 auto 30px;
          color: rgba(255,255,255,0.72);
          line-height: 1.8;
          font-size: 15px;
        }

        /* ======================================================
           TABLET
        ====================================================== */

        @media (max-width: 1000px) {

          .section-container,
          .video-content {
            width: min(100% - 60px, 850px);
          }

          .intro-grid,
          .detail-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .detail-grid.reverse .detail-image-wrapper,
          .detail-grid.reverse .detail-content {
            order: unset;
          }

          .solutions-grid {
            grid-template-columns: 1fr 1fr;
          }

          .system-grid {
            grid-template-columns: 1fr 1fr;
          }

          .process-grid {
            grid-template-columns: 1fr 1fr;
          }

          .system-header {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .intro-image {
            height: 430px;
          }
        }

        /* ======================================================
           MOBILE
        ====================================================== */

        @media (max-width: 600px) {

          .section-container,
          .video-content {
            width: calc(100% - 36px);
          }

          .services-video-hero {
            height: 90vh;
            min-height: 600px;
          }

          .video-content-inner {
            padding-top: 60px;
          }

          .video-title {
            font-size: 42px;
            letter-spacing: -1px;
          }

          .video-description {
            font-size: 14px;
            line-height: 1.7;
          }

          .hero-buttons {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
          }

          .primary-btn,
          .secondary-btn {
            justify-content: center;
          }

          .intro-section,
          .solutions-section,
          .detail-section,
          .system-section,
          .process-section {
            padding: 75px 0;
          }

          .section-heading,
          .system-header h2,
          .services-cta h2 {
            font-size: 32px;
          }

          .intro-image {
            height: 300px;
          }

          .experience-box {
            right: 12px;
            bottom: 15px;
            width: 155px;
            padding: 18px;
          }

          .experience-number {
            font-size: 28px;
          }

          .intro-points {
            grid-template-columns: 1fr;
          }

          .solutions-grid,
          .system-grid,
          .process-grid {
            grid-template-columns: 1fr;
          }

          .solution-card {
            min-height: 300px;
          }

          .detail-image {
            height: 300px;
          }

          .detail-content h2 {
            font-size: 31px;
          }

          .system-card {
            min-height: auto;
          }

          .services-cta {
            padding: 75px 20px;
          }

        }

        @media (max-width: 380px) {

          .video-title {
            font-size: 36px;
          }

          .section-heading,
          .system-header h2,
          .services-cta h2 {
            font-size: 28px;
          }

        }

        /* ======================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {

          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

        }

      `}</style>

      <div className="services-page">

        {/* =====================================================
            NAVBAR
        ===================================================== */}

        <Navbar
          token={token}
          logout={logout}
        />

        {/* =====================================================
            VIDEO HERO
        ===================================================== */}

        <section className="services-video-hero">

          <video
            className="services-video"
            src={solarVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />

          <div className="video-dark-overlay" />
          <div className="video-bottom-gradient" />

          <div className="video-content">

            <motion.div
              className="video-content-inner"
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
            >

              <div className="video-label">
                <span />
                AVS SOLAR CONSULTANCY
              </div>

              <h1 className="video-title">
                Complete Solar
                <br />
                <span>Energy Solutions</span>
              </h1>

              <p className="video-description">
                From consultation and site assessment to
                system design, installation, net metering
                and long-term support, we provide practical
                solar solutions designed around your energy
                requirements.
              </p>

              <div className="hero-buttons">

                <button
                  className="primary-btn"
                  onClick={() =>
                    navigate("/contact")
                  }
                >
                  Get Free Consultation
                  <ArrowRight size={18} />
                </button>

                <button
                  className="secondary-btn"
                  onClick={() =>
                    document
                      .getElementById("solar-solutions")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                >
                  Explore Solutions
                  <ArrowRight size={17} />
                </button>

              </div>

            </motion.div>

          </div>

          <div className="hero-scroll">
            Scroll to explore
          </div>

        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="intro-section">

          <div className="section-container">

            <div className="intro-grid">

              <motion.div
                className="intro-image-wrapper"
                initial={{
                  opacity: 0,
                  x: -70,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                viewport={{
                  once: true,
                }}
              >

                <img
                  src={whyChoose}
                  alt="Solar Installation"
                  className="intro-image"
                />

                <div className="experience-box">

                  <span className="experience-number">
                    360°
                  </span>

                  <span className="experience-text">
                    Complete solar planning,
                    installation & support
                  </span>

                </div>

              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 70,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                viewport={{
                  once: true,
                }}
              >

                <div className="section-label">
                  Our Approach
                </div>

                <h2 className="section-heading">
                  Solar designed around
                  your energy needs.
                </h2>

                <p className="section-description">
                  Every property has different energy
                  requirements. AVS Solar Consultancy
                  evaluates your electricity consumption,
                  available installation area and future
                  requirements before recommending a
                  suitable solar configuration.
                </p>

                <p
                  className="section-description"
                  style={{
                    marginTop: "18px",
                  }}
                >
                  Our approach combines technical
                  planning, quality installation and
                  dependable support to help customers
                  move towards cleaner and more efficient
                  energy.
                </p>

                <div className="intro-points">

                  <div className="intro-point">
                    <CheckCircle2 size={18} />
                    Customized system planning
                  </div>

                  <div className="intro-point">
                    <CheckCircle2 size={18} />
                    Professional installation
                  </div>

                  <div className="intro-point">
                    <CheckCircle2 size={18} />
                    Grid & net-metering assistance
                  </div>

                  <div className="intro-point">
                    <CheckCircle2 size={18} />
                    Long-term support
                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </section>

        {/* =====================================================
            SOLAR SOLUTIONS
        ===================================================== */}

        <section
          className="solutions-section"
          id="solar-solutions"
        >

          <div className="section-container">

            <motion.div
              className="section-top"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{
                once: true,
              }}
            >

              <div className="section-label">
                Solar Applications
              </div>

              <h2 className="section-heading">
                Solutions for every
                type of property
              </h2>

              <p className="section-description">
                Whether you are a homeowner, business
                owner, institution or industrial operator,
                we can help identify the right solar
                approach for your energy requirements.
              </p>

            </motion.div>

            <div className="solutions-grid">

              <SolutionCard
                image={whyChooseImg}
                icon={<Home size={22} />}
                title="Residential Solar"
                text="Rooftop solar solutions designed for homes and individual energy requirements."
              />

              <SolutionCard
                image={solution}
                icon={<Building2 size={22} />}
                title="Commercial Solar"
                text="Energy solutions for offices, shops, warehouses, institutions and businesses."
              />

              <SolutionCard
                image={projects}
                icon={<Factory size={22} />}
                title="Industrial Solar"
                text="Customized solar planning for high-consumption industrial environments."
              />

            </div>

          </div>

        </section>

        {/* =====================================================
            RESIDENTIAL
        ===================================================== */}

        <DetailSection
          image={whyChooseImg}
          number="01"
          label="Residential Energy"
          title="Power your home with clean solar energy."
          paragraphs={[
            "AVS Solar Consultancy provides residential solar solutions for homeowners who want to reduce their dependence on conventional electricity and make better use of available rooftop space.",
            "We evaluate electricity consumption, available roof area, orientation, shading and expected energy requirements before planning an appropriate solar system.",
            "The installation process can include mounting structure planning, panel placement, inverter integration, electrical connections, testing and documentation support.",
          ]}
          points={[
            "Customized rooftop solar planning",
            "Efficient use of available roof space",
            "System sizing based on electricity usage",
            "Documentation and net-metering assistance",
          ]}
        />

        {/* =====================================================
            COMMERCIAL
        ===================================================== */}

        <DetailSection
          reverse
          dark
          image={solution}
          number="02"
          label="Commercial Energy"
          title="Reduce business energy costs with solar."
          paragraphs={[
            "Commercial properties can have significant electricity requirements for lighting, cooling, equipment and daily operations.",
            "Our commercial solar planning considers consumption patterns, rooftop availability, structural conditions, orientation, shading and expected generation.",
            "We focus on practical system design, organized installation and long-term support so businesses can adopt solar without compromising their daily operations.",
          ]}
          points={[
            "Offices and commercial buildings",
            "Warehouses and shops",
            "Educational institutions",
            "Business-focused energy planning",
          ]}
        />

        {/* =====================================================
            INDUSTRIAL
        ===================================================== */}

        <DetailSection
          image={projects}
          number="03"
          label="Industrial Energy"
          title="Engineered solar solutions for industry."
          paragraphs={[
            "Industrial facilities often operate with large and continuous electricity requirements. AVS provides customized solar project planning for factories, manufacturing units, workshops and warehouses.",
            "Industrial installations require careful attention to structural strength, electrical distribution, equipment placement, cable routing and safety.",
            "Our project approach coordinates planning, component selection, installation, testing and handover to create a scalable solar solution.",
          ]}
          points={[
            "Large-scale solar project planning",
            "Structural and electrical considerations",
            "Scalable system configurations",
            "Project coordination and support",
          ]}
        />

        {/* =====================================================
            SOLAR SYSTEM TYPES
        ===================================================== */}

        <section className="system-section">

          <div className="section-container">

            <div className="system-header">

              <div>

                <div className="section-label">
                  System Types
                </div>

                <h2>
                  Choose the right
                  solar configuration
                </h2>

              </div>

              <p>
                Different properties require different
                energy configurations. We help you
                understand the available options and
                select a system according to your
                electricity usage and requirements.
              </p>

            </div>

            <div className="system-grid">

              <SystemCard
                icon={<Network size={23} />}
                title="On-Grid Solar"
                text="Connected to the electricity grid and suitable for properties looking to use solar generation while remaining connected to utility power."
              />

              <SystemCard
                icon={<Sun size={23} />}
                title="Off-Grid Solar"
                text="Independent solar systems using battery storage for locations requiring greater energy independence."
              />

              <SystemCard
                icon={<Zap size={23} />}
                title="Hybrid Solar"
                text="Combines solar generation, battery storage and grid connectivity for flexible energy management."
              />

              <SystemCard
                icon={<BatteryCharging size={23} />}
                title="Battery Solutions"
                text="Energy storage solutions that allow surplus solar generation to be stored and used when required."
              />

            </div>

          </div>

        </section>

        {/* =====================================================
            SYSTEM DETAILS
        ===================================================== */}

        <section className="detail-section">

          <div className="section-container">

            <motion.div
              className="detail-grid"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
            >

              <div className="detail-image-wrapper">

                <img
                  src={grid}
                  alt="On Grid Solar"
                  className="detail-image"
                />

                <div className="image-number">
                  ON-GRID
                </div>

              </div>

              <div className="detail-content">

                <div className="section-label">
                  Grid Connected
                </div>

                <h2>
                  Reliable solar with
                  grid connectivity.
                </h2>

                <p>
                  On-grid solar systems are connected
                  directly to the electricity distribution
                  network. Solar electricity can be used
                  by the property while the grid remains
                  available as an additional source.
                </p>

                <p>
                  These systems generally do not require
                  large battery storage, making them a
                  practical option for many residential
                  and commercial properties.
                </p>

                <ul className="detail-list">

                  <li>
                    <CheckCircle2 size={18} />
                    Grid-connected operation
                  </li>

                  <li>
                    <CheckCircle2 size={18} />
                    Suitable for homes and businesses
                  </li>

                  <li>
                    <CheckCircle2 size={18} />
                    Net-metering assistance
                  </li>

                  <li>
                    <CheckCircle2 size={18} />
                    Professional system planning
                  </li>

                </ul>

              </div>

            </motion.div>

          </div>

        </section>

        {/* =====================================================
            OFF GRID
        ===================================================== */}

        <section className="detail-section dark">

          <div className="section-container">

            <motion.div
              className="detail-grid reverse"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
            >

              <div className="detail-image-wrapper">

                <img
                  src={gridoff}
                  alt="Off Grid Solar"
                  className="detail-image"
                />

                <div className="image-number">
                  OFF-GRID
                </div>

              </div>

              <div className="detail-content">

                <div className="section-label">
                  Independent Energy
                </div>

                <h2>
                  Energy independence
                  when the grid is limited.
                </h2>

                <p>
                  Off-grid solar systems combine solar
                  panels with battery storage to provide
                  electricity without depending entirely
                  on conventional grid power.
                </p>

                <p>
                  Before designing an off-grid system,
                  load requirements, daily consumption,
                  essential appliances and required backup
                  duration are evaluated carefully.
                </p>

                <ul className="detail-list">

                  <li>
                    <CheckCircle2 size={18} />
                    Solar plus battery storage
                  </li>

                  <li>
                    <CheckCircle2 size={18} />
                    Suitable for remote locations
                  </li>

                  <li>
                    <CheckCircle2 size={18} />
                    Backup-focused planning
                  </li>

                  <li>
                    <CheckCircle2 size={18} />
                    Customized energy capacity
                  </li>

                </ul>

              </div>

            </motion.div>

          </div>

        </section>

        {/* =====================================================
            HYBRID
        ===================================================== */}

        <section className="detail-section">

          <div className="section-container">

            <motion.div
              className="detail-grid"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
            >

              <div className="detail-image-wrapper">

                <img
                  src={hybrid}
                  alt="Hybrid Solar"
                  className="detail-image"
                />

                <div className="image-number">
                  HYBRID
                </div>

              </div>

              <div className="detail-content">

                <div className="section-label">
                  Flexible Energy
                </div>

                <h2>
                  Solar, storage and
                  grid working together.
                </h2>

                <p>
                  Hybrid solar systems combine solar
                  generation, battery storage and grid
                  connectivity into one flexible energy
                  solution.
                </p>

                <p>
                  During daylight hours, solar generation
                  can supply active loads while surplus
                  energy can be directed towards battery
                  charging.
                </p>

                <ul className="detail-list">

                  <li>
                    <CheckCircle2 size={18} />
                    Solar generation
                  </li>

                  <li>
                    <CheckCircle2 size={18} />
                    Battery backup
                  </li>

                  <li>
                    <CheckCircle2 size={18} />
                    Grid connectivity
                  </li>

                  <li>
                    <CheckCircle2 size={18} />
                    Flexible energy management
                  </li>

                </ul>

              </div>

            </motion.div>

          </div>

        </section>

        {/* =====================================================
            BATTERY
        ===================================================== */}

        <section className="detail-section dark">

          <div className="section-container">

            <motion.div
              className="detail-grid reverse"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
            >

              <div className="detail-image-wrapper">

                <img
                  src={battery}
                  alt="Solar Battery"
                  className="detail-image"
                />

                <div className="image-number">
                  STORAGE
                </div>

              </div>

              <div className="detail-content">

                <div className="section-label">
                  Energy Storage
                </div>

                <h2>
                  Store solar energy
                  for when you need it.
                </h2>

                <p>
                  Battery storage allows surplus solar
                  generation to be stored and used later
                  when solar production is low or
                  unavailable.
                </p>

                <p>
                  Battery capacity should be selected
                  according to energy consumption,
                  critical loads, backup duration and
                  solar generation capacity.
                </p>

                <ul className="detail-list">

                  <li>
                    <CheckCircle2 size={18} />
                    Backup power capability
                  </li>

                  <li>
                    <CheckCircle2 size={18} />
                    Customized storage capacity
                  </li>

                  <li>
                    <CheckCircle2 size={18} />
                    Suitable battery configuration
                  </li>

                  <li>
                    <CheckCircle2 size={18} />
                    Safe installation and monitoring
                  </li>

                </ul>

              </div>

            </motion.div>

          </div>

        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section className="process-section">

          <div className="section-container">

            <div className="section-top">

              <div className="section-label">
                Our Process
              </div>

              <h2 className="section-heading">
                From first conversation
                to solar installation.
              </h2>

              <p className="section-description">
                We follow a structured process so that
                your solar project is properly evaluated,
                designed and implemented.
              </p>

            </div>

            <div className="process-grid">

              <ProcessCard
                number="01"
                title="Consultation"
                text="We understand your electricity usage, goals and expectations."
              />

              <ProcessCard
                number="02"
                title="Site Assessment"
                text="We evaluate the property, roof space, orientation and installation conditions."
              />

              <ProcessCard
                number="03"
                title="Solar Design"
                text="A suitable system configuration is planned according to your requirements."
              />

              <ProcessCard
                number="04"
                title="Installation & Support"
                text="The system is installed, tested and supported for long-term operation."
              />

            </div>

          </div>

        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="services-cta">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="section-label">
              Start Your Solar Journey
            </div>

            <h2>
              Ready to switch to solar?
            </h2>

            <p>
              Speak with our team to understand your
              solar requirements and explore a solution
              designed for your property.
            </p>

            <button
              className="primary-btn"
              onClick={() =>
                navigate("/contact")
              }
            >
              Book Free Consultation
              <Phone size={18} />
            </button>

          </motion.div>

        </section>

      </div>

      <Footer />
    </>
  );
}


/* ================================================================
   SOLUTION CARD
================================================================ */

function SolutionCard({
  image,
  icon,
  title,
  text,
}) {
  return (
    <motion.div
      className="solution-card"
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      viewport={{
        once: true,
      }}
    >

      <img
        src={image}
        alt={title}
        className="solution-card-image"
      />

      <div className="solution-card-overlay" />

      <div className="solution-card-content">

        <div className="solution-icon">
          {icon}
        </div>

        <h3>{title}</h3>

        <p>{text}</p>

      </div>

    </motion.div>
  );
}


/* ================================================================
   DETAIL SECTION
================================================================ */

function DetailSection({
  image,
  number,
  label,
  title,
  paragraphs,
  points,
  reverse = false,
  dark = false,
}) {
  return (
    <section
      className={`detail-section ${
        dark ? "dark" : ""
      }`}
    >

      <div className="section-container">

        <motion.div
          className={`detail-grid ${
            reverse ? "reverse" : ""
          }`}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >

          <div className="detail-image-wrapper">

            <img
              src={image}
              alt={title}
              className="detail-image"
            />

            <div className="image-number">
              {number}
            </div>

          </div>

          <div className="detail-content">

            <div className="section-label">
              {label}
            </div>

            <h2>{title}</h2>

            {paragraphs.map(
              (paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              )
            )}

            <ul className="detail-list">

              {points.map(
                (point, index) => (
                  <li key={index}>
                    <CheckCircle2 size={18} />
                    {point}
                  </li>
                )
              )}

            </ul>

          </div>

        </motion.div>

      </div>

    </section>
  );
}


/* ================================================================
   SYSTEM CARD
================================================================ */

function SystemCard({
  icon,
  title,
  text,
}) {
  return (
    <motion.div
      className="system-card"
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >

      <div className="system-card-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

    </motion.div>
  );
}


/* ================================================================
   PROCESS CARD
================================================================ */

function ProcessCard({
  number,
  title,
  text,
}) {
  return (
    <motion.div
      className="process-card"
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >

      <div className="process-number">
        {number}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

    </motion.div>
  );
}

export default Services;