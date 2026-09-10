import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import bgImage from "../assets/CHAT.png";
import sectionBg from "../assets/scada-solar-monitoring-01.webp";
import wifi from "../assets/solar monitoring.png";
import gsm from "../assets/GPRS.png";
import cloud from "../assets/CLOUD.png";
import mobile from "../assets/mobile.png";
import scada from "../assets/SCADA.png";
import centralized from "../assets/centralised.png";

const monitoring = [
  {
    image: wifi,
    title: "Wi-Fi Solar Monitoring",
    short: "Wi-Fi",
    desc: "Monitor your solar plant over Wi-Fi with secure and reliable real-time performance insights.",
    points: [
      "Real-time plant information",
      "Easy network connectivity",
      "Remote system visibility",
    ],
  },
  {
    image: gsm,
    title: "GSM / GPRS Monitoring",
    short: "GSM / GPRS",
    desc: "Stay connected through GSM/GPRS networks and access your plant from virtually anywhere.",
    points: [
      "Independent network connectivity",
      "Remote plant access",
      "Reliable communication",
    ],
  },
  {
    image: cloud,
    title: "Cloud-Based Monitoring",
    short: "Cloud",
    desc: "Secure cloud storage with real-time analytics and remote access from any device.",
    points: [
      "Centralized online data",
      "Access from multiple devices",
      "Performance history",
    ],
  },
  {
    image: mobile,
    title: "Mobile App Monitoring",
    short: "Mobile App",
    desc: "Track energy generation and system status directly from your smartphone.",
    points: [
      "Mobile-friendly monitoring",
      "Plant status at a glance",
      "Convenient remote access",
    ],
  },
  {
    image: scada,
    title: "SCADA Monitoring",
    short: "SCADA",
    desc: "Industrial-grade monitoring and control with advanced visualization and reporting.",
    points: [
      "Detailed plant visualization",
      "System-level monitoring",
      "Advanced reporting",
    ],
  },
  {
    image: centralized,
    title: "Centralized Monitoring",
    short: "Centralized",
    desc: "Manage multiple solar plants from one unified dashboard with complete visibility.",
    points: [
      "Multiple plant management",
      "Unified monitoring interface",
      "Centralized performance overview",
    ],
  },
];

export default function Monitoring({ token, logout }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = monitoring[activeIndex];

  return (
    <>
      <Navbar token={token} logout={logout} />

      <main className="monitoring-page">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="monitoring-hero-new">
          <div className="monitoring-hero-inner">

            <motion.div
              className="monitoring-hero-content"
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="monitoring-label">
                SOLAR PLANT MONITORING
              </div>

              <h1>
                Stay Connected
                <span> With Your Solar Plant</span>
              </h1>

              <p>
                Keep track of your solar plant performance with reliable
                monitoring solutions designed to give you clear and useful
                information whenever you need it.
              </p>

              <div className="monitoring-hero-actions">
                <a href="#monitoring-solutions">
                  Explore Monitoring
                  <span>↓</span>
                </a>

                <div className="hero-note">
                  <span className="hero-note-dot"></span>
                  Connected energy visibility
                </div>
              </div>
            </motion.div>

            <motion.div
              className="monitoring-hero-visual"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="hero-image-box">
                <img
                  src={bgImage}
                  alt="Solar monitoring system"
                />
              </div>

              <div className="hero-caption">
                <div>
                  <strong>Solar Monitoring</strong>
                  <span>Clear system visibility</span>
                </div>

                <div className="caption-line"></div>

                <div className="caption-status">
                  <span></span>
                  Connected
                </div>
              </div>
            </motion.div>

          </div>
        </section>


        {/* =====================================================
            INTRODUCTION
        ====================================================== */}
        <section className="monitoring-intro">
          <div className="monitoring-intro-inner">

            <motion.div
              className="intro-number"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              01
            </motion.div>

            <motion.div
              className="intro-main"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-kicker">
                WHY MONITORING MATTERS
              </div>

              <h2>
                Your solar system works every day.
                <br />
                <span>Monitoring keeps you informed.</span>
              </h2>

              <p>
                Solar monitoring allows you to understand how your plant is
                performing without having to be physically present at the
                installation. Depending on your project, monitoring can be
                connected through Wi-Fi, GSM, cloud platforms, mobile
                applications, SCADA systems or a centralized interface.
              </p>
            </motion.div>

            <motion.div
              className="intro-side"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="intro-side-item">
                <span>01</span>
                <div>
                  <strong>Performance</strong>
                  <p>Understand your plant's generation.</p>
                </div>
              </div>

              <div className="intro-side-item">
                <span>02</span>
                <div>
                  <strong>Visibility</strong>
                  <p>Access system information remotely.</p>
                </div>
              </div>

              <div className="intro-side-item">
                <span>03</span>
                <div>
                  <strong>Information</strong>
                  <p>Review useful operating data.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>


        {/* =====================================================
            MONITORING TECHNOLOGY EXPLORER
        ====================================================== */}
        <section
          className="monitoring-solutions"
          id="monitoring-solutions"
          style={{
            backgroundImage: `url(${sectionBg})`,
          }}
        >
          <div className="solutions-overlay"></div>

          <div className="solutions-container">

            <motion.div
              className="solutions-heading"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-kicker">
                MONITORING TECHNOLOGIES
              </div>

              <h2>
                Choose the right way
                <br />
                <span>to monitor your plant.</span>
              </h2>

              <p>
                Different solar projects require different monitoring
                approaches. Explore the available options below.
              </p>
            </motion.div>


            {/* Desktop technology selector */}
            <div className="technology-selector">
              {monitoring.map((item, index) => (
                <button
                  key={item.title}
                  className={
                    activeIndex === index
                      ? "technology-tab active"
                      : "technology-tab"
                  }
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="tab-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="tab-name">
                    {item.short}
                  </span>

                  <span className="tab-arrow">
                    →
                  </span>
                </button>
              ))}
            </div>


            {/* Main technology display */}
            <motion.div
              className="technology-display"
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >

              <div className="technology-image-area">
                <div className="technology-image-frame">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                  />
                </div>

                <div className="image-label">
                  <span>
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>

                  <p>
                    {activeItem.short}
                  </p>
                </div>
              </div>


              <div className="technology-information">

                <div className="technology-top">
                  <span>
                    MONITORING SOLUTION
                  </span>

                  <span>
                    {String(activeIndex + 1).padStart(2, "0")} / 06
                  </span>
                </div>

                <h3>
                  {activeItem.title}
                </h3>

                <p className="technology-description">
                  {activeItem.desc}
                </p>

                <div className="technology-points">
                  {activeItem.points.map((point, index) => (
                    <div
                      className="technology-point"
                      key={point}
                    >
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p>{point}</p>
                    </div>
                  ))}
                </div>

                <div className="technology-footer">
                  <div>
                    <span className="footer-small">
                      SUITABLE FOR
                    </span>

                    <strong>
                      Solar Plant Monitoring
                    </strong>
                  </div>

                  <div className="footer-line"></div>

                  <div className="footer-circle">
                    →
                  </div>
                </div>

              </div>

            </motion.div>


            {/* Mobile / secondary Swiper */}
            <div className="mobile-monitoring-slider">

              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={18}
                slidesPerView={1}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.realIndex);
                }}
              >
                {monitoring.map((item, index) => (
                  <SwiperSlide key={item.title}>

                    <div className="mobile-slide-card">

                      <div className="mobile-slide-image">
                        <img
                          src={item.image}
                          alt={item.title}
                        />
                      </div>

                      <div className="mobile-slide-content">

                        <span className="mobile-slide-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3>
                          {item.title}
                        </h3>

                        <p>
                          {item.desc}
                        </p>

                        <div className="mobile-slide-points">
                          {item.points.map((point) => (
                            <div key={point}>
                              <span>✓</span>
                              {point}
                            </div>
                          ))}
                        </div>

                      </div>

                    </div>

                  </SwiperSlide>
                ))}
              </Swiper>

            </div>

          </div>
        </section>


        {/* =====================================================
            CAPABILITIES
        ====================================================== */}
        <section className="monitoring-capabilities">

          <div className="capabilities-container">

            <motion.div
              className="capabilities-heading"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-kicker">
                MONITORING CAPABILITIES
              </div>

              <h2>
                Information that helps you
                <br />
                <span>understand your system.</span>
              </h2>
            </motion.div>


            <div className="capabilities-grid">

              <motion.div
                className="capability-item"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="capability-icon">
                  01
                </div>

                <div>
                  <h3>Real-Time Visibility</h3>

                  <p>
                    Access important plant information and understand
                    current system performance.
                  </p>
                </div>
              </motion.div>


              <motion.div
                className="capability-item"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="capability-icon">
                  02
                </div>

                <div>
                  <h3>Remote Access</h3>

                  <p>
                    Check your solar system remotely without needing to
                    be physically present at the site.
                  </p>
                </div>
              </motion.div>


              <motion.div
                className="capability-item"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="capability-icon">
                  03
                </div>

                <div>
                  <h3>Performance Information</h3>

                  <p>
                    Review useful generation and operating information
                    to understand plant behaviour.
                  </p>
                </div>
              </motion.div>


              <motion.div
                className="capability-item"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="capability-icon">
                  04
                </div>

                <div>
                  <h3>Centralized View</h3>

                  <p>
                    For larger installations, bring multiple systems
                    together into one monitoring environment.
                  </p>
                </div>
              </motion.div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SIMPLE PROCESS
        ====================================================== */}
        <section className="monitoring-process">

          <div className="process-container">

            <div className="process-left">

              <div className="section-kicker">
                HOW IT WORKS
              </div>

              <h2>
                From your solar plant
                <br />
                <span>to your screen.</span>
              </h2>

              <p>
                Monitoring creates a connection between your solar
                installation and the information you need to understand
                its performance.
              </p>

            </div>


            <div className="process-right">

              <div className="process-step">
                <div className="process-step-number">
                  01
                </div>

                <div className="process-step-content">
                  <h3>Solar Plant</h3>

                  <p>
                    Energy generation and system information originate
                    from your solar installation.
                  </p>
                </div>
              </div>


              <div className="process-connector"></div>


              <div className="process-step">
                <div className="process-step-number">
                  02
                </div>

                <div className="process-step-content">
                  <h3>Monitoring Device</h3>

                  <p>
                    The appropriate monitoring technology collects and
                    communicates system information.
                  </p>
                </div>
              </div>


              <div className="process-connector"></div>


              <div className="process-step">
                <div className="process-step-number">
                  03
                </div>

                <div className="process-step-content">
                  <h3>Your Dashboard</h3>

                  <p>
                    Relevant information becomes accessible through the
                    selected monitoring platform.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="monitoring-cta">

          <div className="cta-inner">

            <div className="cta-number">
              06
            </div>

            <div className="cta-content">

              <div className="section-kicker">
                SOLAR MONITORING
              </div>

              <h2>
                Choose smarter visibility
                <br />
                for your solar investment.
              </h2>

              <p>
                Talk to our team about the monitoring solution that fits
                your solar project and operating requirements.
              </p>

              <a href="/contact" className="cta-button">
                Discuss Your Project
                <span>→</span>
              </a>

            </div>

          </div>

        </section>

      </main>

      <Footer />


      {/* =====================================================
          CSS
      ====================================================== */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        .monitoring-page {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          color: #252823;
          font-family: inherit;
        }


        /* =====================================================
           COMMON
        ====================================================== */

        .section-kicker {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.4px;
          color: #5b7d4e;
          margin-bottom: 18px;
        }


        /* =====================================================
           HERO
        ====================================================== */

        .monitoring-hero-new {
          width: 100%;
          background: #f7f8f3;
          padding: 70px 30px 75px;
          border-bottom: 1px solid #e4e7df;
        }

        .monitoring-hero-inner {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: 65px;
          align-items: center;
        }

        .monitoring-hero-content {
          padding: 25px 0;
        }

        .monitoring-label {
          display: inline-block;
          font-size: 12px;
          letter-spacing: 2px;
          font-weight: 700;
          color: #5b7d4e;
          margin-bottom: 22px;
          padding-bottom: 10px;
          border-bottom: 2px solid #cbd9c2;
        }

        .monitoring-hero-content h1 {
          font-size: clamp(42px, 5vw, 70px);
          line-height: 1.04;
          font-weight: 650;
          letter-spacing: -2.8px;
          margin: 0;
          color: #252823;
        }

        .monitoring-hero-content h1 span {
          display: block;
          color: #66875a;
        }

        .monitoring-hero-content > p {
          max-width: 570px;
          margin: 28px 0 0;
          color: #697067;
          font-size: 17px;
          line-height: 1.75;
        }

        .monitoring-hero-actions {
          margin-top: 35px;
          display: flex;
          align-items: center;
          gap: 25px;
          flex-wrap: wrap;
        }

        .monitoring-hero-actions > a {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          padding: 15px 22px;
          background: #5c7d50;
          color: #ffffff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.25s ease;
        }

        .monitoring-hero-actions > a:hover {
          background: #48663e;
          transform: translateY(-2px);
        }

        .monitoring-hero-actions > a span {
          font-size: 18px;
        }

        .hero-note {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #727970;
          font-size: 13px;
        }

        .hero-note-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #759968;
        }


        .monitoring-hero-visual {
          position: relative;
        }

        .hero-image-box {
          width: 100%;
          height: 510px;
          background: #ffffff;
          border: 1px solid #dfe4db;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          overflow: hidden;
        }

        .hero-image-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
        }

        .hero-caption {
          width: calc(100% - 40px);
          margin: -1px auto 0;
          min-height: 70px;
          padding: 15px 20px;
          background: #ffffff;
          border: 1px solid #dfe4db;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .hero-caption strong {
          display: block;
          color: #2a3028;
          font-size: 14px;
          margin-bottom: 4px;
        }

        .hero-caption span {
          color: #7a8178;
          font-size: 12px;
        }

        .caption-line {
          flex: 1;
          height: 1px;
          background: #e2e5df;
        }

        .caption-status {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          color: #60735a;
        }

        .caption-status span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #77976c;
        }


        /* =====================================================
           INTRO
        ====================================================== */

        .monitoring-intro {
          width: 100%;
          padding: 105px 30px;
          background: #ffffff;
        }

        .monitoring-intro-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 80px 1.5fr 0.8fr;
          gap: 45px;
          align-items: start;
        }

        .intro-number {
          font-size: 14px;
          color: #78906d;
          padding-top: 7px;
          font-weight: 700;
        }

        .intro-main h2 {
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.12;
          letter-spacing: -1.8px;
          margin: 0;
          color: #252923;
          font-weight: 600;
        }

        .intro-main h2 span {
          color: #78906c;
        }

        .intro-main > p {
          max-width: 720px;
          margin: 28px 0 0;
          color: #6e756d;
          font-size: 16px;
          line-height: 1.8;
        }

        .intro-side {
          border-left: 1px solid #dfe4dc;
          padding-left: 30px;
        }

        .intro-side-item {
          display: flex;
          gap: 18px;
          padding: 18px 0;
          border-bottom: 1px solid #e8ebe6;
        }

        .intro-side-item:first-child {
          padding-top: 0;
        }

        .intro-side-item:last-child {
          border-bottom: none;
        }

        .intro-side-item > span {
          color: #91a487;
          font-size: 11px;
          font-weight: 700;
          padding-top: 2px;
        }

        .intro-side-item strong {
          display: block;
          font-size: 14px;
          color: #30352f;
          margin-bottom: 6px;
        }

        .intro-side-item p {
          margin: 0;
          font-size: 13px;
          line-height: 1.55;
          color: #858b84;
        }


        /* =====================================================
           SOLUTIONS
        ====================================================== */

        .monitoring-solutions {
          position: relative;
          width: 100%;
          padding: 100px 30px 110px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .solutions-overlay {
          position: absolute;
          inset: 0;
          background: rgba(250, 251, 247, 0.93);
        }

        .solutions-container {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
        }

        .solutions-heading {
          max-width: 700px;
          margin-bottom: 45px;
        }

        .solutions-heading h2 {
          font-size: clamp(35px, 4vw, 55px);
          line-height: 1.1;
          letter-spacing: -1.8px;
          font-weight: 600;
          margin: 0;
          color: #252923;
        }

        .solutions-heading h2 span {
          color: #78906c;
        }

        .solutions-heading p {
          max-width: 600px;
          margin: 22px 0 0;
          color: #737a71;
          font-size: 16px;
          line-height: 1.7;
        }


        /* TECHNOLOGY TABS */

        .technology-selector {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          border-top: 1px solid #dce2d8;
          border-bottom: 1px solid #dce2d8;
          margin-bottom: 35px;
        }

        .technology-tab {
          appearance: none;
          border: none;
          background: transparent;
          border-right: 1px solid #dce2d8;
          padding: 18px 15px;
          cursor: pointer;
          text-align: left;
          min-height: 100px;
          transition: all 0.25s ease;
          position: relative;
        }

        .technology-tab:first-child {
          border-left: 1px solid #dce2d8;
        }

        .technology-tab:hover {
          background: rgba(255,255,255,0.7);
        }

        .technology-tab.active {
          background: #ffffff;
        }

        .technology-tab.active::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: -1px;
          height: 3px;
          background: #66875a;
        }

        .tab-number {
          display: block;
          color: #9aa59a;
          font-size: 10px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .tab-name {
          display: block;
          color: #30362f;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.3;
        }

        .tab-arrow {
          display: block;
          color: #82917d;
          font-size: 17px;
          margin-top: 10px;
          transition: transform 0.2s ease;
        }

        .technology-tab:hover .tab-arrow,
        .technology-tab.active .tab-arrow {
          transform: translateX(4px);
        }


        /* TECHNOLOGY DISPLAY */

        .technology-display {
          display: grid;
          grid-template-columns: 1.35fr 0.85fr;
          min-height: 560px;
          background: #ffffff;
          border: 1px solid #dfe4dc;
        }

        .technology-image-area {
          position: relative;
          padding: 22px;
          background: #f4f6f1;
          border-right: 1px solid #e1e5df;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .technology-image-frame {
          width: 100%;
          height: 100%;
          min-height: 510px;
          background: #ffffff;
          border: 1px solid #e0e4de;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .technology-image-frame img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
        }

        .image-label {
          position: absolute;
          left: 40px;
          bottom: 40px;
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.95);
          padding: 9px 13px;
          border: 1px solid #dce1d9;
        }

        .image-label span {
          font-size: 10px;
          font-weight: 700;
          color: #6c8862;
        }

        .image-label p {
          margin: 0;
          font-size: 11px;
          color: #4f574d;
          font-weight: 600;
        }


        .technology-information {
          padding: 42px 38px;
          display: flex;
          flex-direction: column;
        }

        .technology-top {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          color: #91a08b;
          font-size: 10px;
          letter-spacing: 1.6px;
          font-weight: 700;
          padding-bottom: 22px;
          border-bottom: 1px solid #e3e7e1;
        }

        .technology-information h3 {
          margin: 35px 0 18px;
          color: #252a24;
          font-size: clamp(28px, 3vw, 40px);
          line-height: 1.15;
          letter-spacing: -1px;
          font-weight: 600;
        }

        .technology-description {
          color: #747b72;
          font-size: 15px;
          line-height: 1.75;
          margin: 0;
        }

        .technology-points {
          margin-top: 32px;
        }

        .technology-point {
          display: flex;
          gap: 15px;
          padding: 13px 0;
          border-bottom: 1px solid #edf0eb;
        }

        .technology-point span {
          color: #7c9672;
          font-size: 10px;
          font-weight: 700;
          padding-top: 3px;
        }

        .technology-point p {
          margin: 0;
          color: #444b42;
          font-size: 13px;
          line-height: 1.5;
        }

        .technology-footer {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: auto;
          padding-top: 30px;
        }

        .footer-small {
          display: block;
          font-size: 9px;
          letter-spacing: 1.4px;
          color: #98a198;
          margin-bottom: 5px;
          font-weight: 700;
        }

        .technology-footer strong {
          color: #424940;
          font-size: 12px;
        }

        .footer-line {
          flex: 1;
          height: 1px;
          background: #e1e5df;
        }

        .footer-circle {
          width: 38px;
          height: 38px;
          border: 1px solid #bdc9b8;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #66875a;
          font-size: 17px;
        }


        .mobile-monitoring-slider {
          display: none;
        }


        /* =====================================================
           CAPABILITIES
        ====================================================== */

        .monitoring-capabilities {
          padding: 110px 30px;
          background: #ffffff;
        }

        .capabilities-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .capabilities-heading {
          margin-bottom: 55px;
        }

        .capabilities-heading h2 {
          margin: 0;
          font-size: clamp(34px, 4vw, 53px);
          line-height: 1.1;
          letter-spacing: -1.7px;
          color: #252923;
          font-weight: 600;
        }

        .capabilities-heading h2 span {
          color: #78906c;
        }

        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border-top: 1px solid #dfe4dc;
          border-left: 1px solid #dfe4dc;
        }

        .capability-item {
          display: grid;
          grid-template-columns: 70px 1fr;
          gap: 25px;
          padding: 35px;
          border-right: 1px solid #dfe4dc;
          border-bottom: 1px solid #dfe4dc;
          min-height: 180px;
        }

        .capability-icon {
          width: 44px;
          height: 44px;
          border: 1px solid #c5d2bf;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #66875a;
          font-size: 10px;
          font-weight: 700;
        }

        .capability-item h3 {
          margin: 3px 0 12px;
          font-size: 18px;
          color: #30362e;
          font-weight: 600;
        }

        .capability-item p {
          margin: 0;
          color: #777e75;
          font-size: 14px;
          line-height: 1.7;
          max-width: 470px;
        }


        /* =====================================================
           PROCESS
        ====================================================== */

        .monitoring-process {
          padding: 110px 30px;
          background: #f5f6f1;
          border-top: 1px solid #e1e5dd;
          border-bottom: 1px solid #e1e5dd;
        }

        .process-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 100px;
        }

        .process-left h2 {
          margin: 0;
          font-size: clamp(35px, 4vw, 52px);
          line-height: 1.1;
          letter-spacing: -1.7px;
          color: #252923;
          font-weight: 600;
        }

        .process-left h2 span {
          color: #78906c;
        }

        .process-left > p {
          margin: 25px 0 0;
          max-width: 450px;
          color: #757c73;
          line-height: 1.75;
          font-size: 15px;
        }

        .process-right {
          padding-top: 5px;
        }

        .process-step {
          display: grid;
          grid-template-columns: 75px 1fr;
          gap: 25px;
        }

        .process-step-number {
          width: 50px;
          height: 50px;
          border: 1px solid #bacab4;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #67825e;
          font-size: 11px;
          font-weight: 700;
        }

        .process-step-content h3 {
          margin: 3px 0 9px;
          color: #31372f;
          font-size: 18px;
          font-weight: 600;
        }

        .process-step-content p {
          margin: 0;
          color: #767d74;
          font-size: 14px;
          line-height: 1.7;
          max-width: 520px;
        }

        .process-connector {
          width: 1px;
          height: 50px;
          background: #cdd5c9;
          margin: 10px 0 10px 24px;
        }


        /* =====================================================
           CTA
        ====================================================== */

        .monitoring-cta {
          padding: 100px 30px;
          background: #e9eee5;
        }

        .cta-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 45px;
          align-items: start;
        }

        .cta-number {
          font-size: 14px;
          color: #70886a;
          font-weight: 700;
          padding-top: 7px;
        }

        .cta-content h2 {
          margin: 0;
          color: #283027;
          font-size: clamp(35px, 4.5vw, 58px);
          line-height: 1.08;
          letter-spacing: -1.8px;
          font-weight: 600;
        }

        .cta-content p {
          max-width: 650px;
          color: #697268;
          font-size: 16px;
          line-height: 1.7;
          margin: 25px 0 30px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 25px;
          padding: 15px 20px;
          color: #ffffff;
          background: #5c7d50;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          transition: all 0.25s ease;
        }

        .cta-button:hover {
          background: #48663e;
          transform: translateY(-2px);
        }

        .cta-button span {
          font-size: 18px;
        }


        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 1050px) {

          .monitoring-hero-inner {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .monitoring-hero-content {
            max-width: 760px;
          }

          .hero-image-box {
            height: 500px;
          }

          .monitoring-intro-inner {
            grid-template-columns: 55px 1fr;
          }

          .intro-side {
            grid-column: 2;
            border-left: none;
            border-top: 1px solid #dfe4dc;
            padding: 25px 0 0;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .intro-side-item {
            border-bottom: none;
            padding: 0;
          }

          .technology-selector {
            grid-template-columns: repeat(3, 1fr);
          }

          .technology-tab {
            border-bottom: 1px solid #dce2d8;
          }

          .technology-display {
            grid-template-columns: 1fr;
          }

          .technology-image-area {
            border-right: none;
            border-bottom: 1px solid #e1e5df;
          }

          .technology-image-frame {
            min-height: 480px;
          }

          .process-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }

        }


        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 700px) {

          .monitoring-hero-new {
            padding: 45px 18px 55px;
          }

          .monitoring-hero-inner {
            gap: 35px;
          }

          .monitoring-hero-content h1 {
            font-size: 42px;
            letter-spacing: -1.8px;
          }

          .monitoring-hero-content > p {
            font-size: 15px;
            line-height: 1.7;
          }

          .monitoring-hero-actions {
            align-items: flex-start;
            flex-direction: column;
            gap: 18px;
          }

          .hero-image-box {
            height: 340px;
            padding: 10px;
          }

          .hero-caption {
            width: calc(100% - 20px);
            padding: 12px 14px;
          }

          .caption-line {
            display: none;
          }


          .monitoring-intro {
            padding: 75px 18px;
          }

          .monitoring-intro-inner {
            display: block;
          }

          .intro-number {
            margin-bottom: 22px;
          }

          .intro-main h2 {
            font-size: 35px;
            letter-spacing: -1px;
          }

          .intro-main > p {
            font-size: 14px;
          }

          .intro-side {
            margin-top: 40px;
            display: block;
            border-top: 1px solid #dfe4dc;
            padding-top: 15px;
          }

          .intro-side-item {
            padding: 16px 0;
            border-bottom: 1px solid #e8ebe6;
          }


          .monitoring-solutions {
            padding: 75px 18px 85px;
          }

          .solutions-heading {
            margin-bottom: 35px;
          }

          .solutions-heading h2 {
            font-size: 35px;
            letter-spacing: -1px;
          }

          .solutions-heading p {
            font-size: 14px;
          }


          /* Hide desktop technology selector/display */
          .technology-selector,
          .technology-display {
            display: none;
          }

          /* Show mobile swiper */
          .mobile-monitoring-slider {
            display: block;
          }

          .mobile-slide-card {
            background: #ffffff;
            border: 1px solid #dfe4dc;
          }

          .mobile-slide-image {
            width: 100%;
            height: 330px;
            background: #f4f6f1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 12px;
            border-bottom: 1px solid #e0e4de;
            overflow: hidden;
          }

          .mobile-slide-image img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
            display: block;
          }

          .mobile-slide-content {
            padding: 25px;
          }

          .mobile-slide-number {
            font-size: 10px;
            color: #78906c;
            font-weight: 700;
          }

          .mobile-slide-content h3 {
            margin: 10px 0 12px;
            font-size: 25px;
            line-height: 1.2;
            color: #293029;
          }

          .mobile-slide-content > p {
            color: #737a72;
            font-size: 14px;
            line-height: 1.7;
            margin: 0;
          }

          .mobile-slide-points {
            margin-top: 20px;
            border-top: 1px solid #e5e9e2;
          }

          .mobile-slide-points div {
            display: flex;
            gap: 10px;
            padding: 10px 0;
            border-bottom: 1px solid #edf0eb;
            color: #555d54;
            font-size: 12px;
          }

          .mobile-slide-points span {
            color: #67855d;
            font-weight: 700;
          }

          .mobile-monitoring-slider .swiper-button-next,
          .mobile-monitoring-slider .swiper-button-prev {
            width: 32px;
            height: 32px;
            background: #ffffff;
            border: 1px solid #d8ded5;
            color: #5d7855;
          }

          .mobile-monitoring-slider .swiper-button-next::after,
          .mobile-monitoring-slider .swiper-button-prev::after {
            font-size: 12px;
          }

          .mobile-monitoring-slider .swiper-pagination {
            position: relative;
            margin-top: 22px;
          }

          .mobile-monitoring-slider .swiper-pagination-bullet {
            background: #aab6a5;
            opacity: 1;
          }

          .mobile-monitoring-slider .swiper-pagination-bullet-active {
            background: #64845a;
          }


          .monitoring-capabilities {
            padding: 75px 18px;
          }

          .capabilities-heading {
            margin-bottom: 35px;
          }

          .capabilities-heading h2 {
            font-size: 35px;
            letter-spacing: -1px;
          }

          .capabilities-grid {
            grid-template-columns: 1fr;
          }

          .capability-item {
            grid-template-columns: 55px 1fr;
            padding: 25px 20px;
            gap: 15px;
            min-height: auto;
          }

          .capability-item h3 {
            font-size: 16px;
          }

          .capability-item p {
            font-size: 13px;
          }


          .monitoring-process {
            padding: 75px 18px;
          }

          .process-container {
            gap: 45px;
          }

          .process-left h2 {
            font-size: 35px;
            letter-spacing: -1px;
          }

          .process-left > p {
            font-size: 14px;
          }

          .process-step {
            grid-template-columns: 55px 1fr;
            gap: 15px;
          }

          .process-step-number {
            width: 42px;
            height: 42px;
          }


          .monitoring-cta {
            padding: 75px 18px;
          }

          .cta-inner {
            display: block;
          }

          .cta-number {
            margin-bottom: 25px;
          }

          .cta-content h2 {
            font-size: 36px;
            letter-spacing: -1px;
          }

          .cta-content p {
            font-size: 14px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ====================================================== */

        @media (max-width: 420px) {

          .monitoring-hero-content h1 {
            font-size: 36px;
          }

          .hero-image-box {
            height: 290px;
          }

          .hero-caption {
            display: block;
          }

          .caption-status {
            margin-top: 8px;
          }

          .mobile-slide-image {
            height: 270px;
          }

          .intro-main h2,
          .solutions-heading h2,
          .capabilities-heading h2,
          .process-left h2,
          .cta-content h2 {
            font-size: 31px;
          }

        }

      `}</style>
    </>
  );
}