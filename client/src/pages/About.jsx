import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

import backgroundVideo from "../assets/about-solar.mp4";
import epcBg from "../assets/epc.jpg";
import logoFile from "../assets/newlogo.png";
import epcVideo from "../assets/video1.mp4";
import comimage from "../assets/comimage.jpg";
import resvideo from "../assets/video2(1).mp4";
import comvideo from "../assets/video3.mp4";
import mvideo from "../assets/video4.mp4";
import resBg from "../assets/residential.jpg";
import commercialBg from "../assets/20240305170303.jpg";
import maintenanceBg from "../assets/solerrr.jpg";

function About({ token, logout }) {
  const navigate = useNavigate();

  const services = [
    {
      number: "01",
      title: "Residential Solar",
      subtitle: "Power your home smarter",
      description:
        "Designed for modern homes, our residential solar solutions help you generate clean electricity and take greater control of your energy expenses.",
      video: resvideo,
      image: resBg,
      points: [
        "Customized rooftop solutions",
        "Energy-efficient system design",
        "Subsidy & net-metering guidance",
      ],
    },
    {
      number: "02",
      title: "Commercial Solar",
      subtitle: "Reduce business energy costs",
      description:
        "Scalable solar systems for offices, shops, institutions and commercial properties looking for dependable renewable energy.",
      video: mvideo,
      image: commercialBg,
      points: [
        "Business-focused system sizing",
        "High-efficiency solar solutions",
        "Long-term performance planning",
      ],
    },
    {
      number: "03",
      title: "Maintenance & Support",
      subtitle: "Keep your system performing",
      description:
        "Solar performance doesn't end after installation. Our maintenance and support services help your system continue operating efficiently.",
      video: comvideo,
      image: maintenanceBg,
      points: [
        "System inspection",
        "Panel cleaning & maintenance",
        "Technical assistance",
      ],
    },
  ];

  const handleConsultation = () => {
    navigate("/solar-journey/consultation");
  };

  return (
    <div className="avs-about-page">
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
          background: #07111d;
        }

        .avs-about-page {
          width: 100%;
          overflow: hidden;
          background: #07111d;
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
        }

        /* =========================================
           HERO
        ========================================= */

        .avs-hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .avs-hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .avs-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(3, 12, 22, 0.96) 0%,
              rgba(3, 12, 22, 0.78) 40%,
              rgba(3, 12, 22, 0.35) 72%,
              rgba(3, 12, 22, 0.68) 100%
            );
        }

        .avs-hero-content {
          position: relative;
          z-index: 2;
          width: min(1250px, 92%);
          margin: 0 auto;
          padding: 150px 0 90px;
        }

        .avs-hero-grid {
          max-width: 820px;
        }

        .avs-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 16px;
          border: 1px solid rgba(255, 190, 40, 0.45);
          border-radius: 50px;
          background: rgba(255, 190, 40, 0.08);
          color: #ffc42e;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 25px;
        }

        .avs-eyebrow-dot {
          width: 7px;
          height: 7px;
          background: #ffc42e;
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(255, 196, 46, 0.8);
        }

        .avs-hero-title {
          margin: 0;
          font-size: clamp(45px, 7vw, 88px);
          line-height: 0.98;
          letter-spacing: -3px;
          font-weight: 800;
        }

        .avs-hero-title span {
          color: #ffc42e;
        }

        .avs-hero-text {
          max-width: 680px;
          margin: 30px 0 35px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 18px;
          line-height: 1.8;
        }

        .avs-hero-actions {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .avs-primary-btn,
        .avs-secondary-btn {
          border: none;
          cursor: pointer;
          padding: 15px 25px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          transition: 0.3s ease;
        }

        .avs-primary-btn {
          background: #ffc42e;
          color: #08121e;
          box-shadow: 0 10px 35px rgba(255, 196, 46, 0.2);
        }

        .avs-primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(255, 196, 46, 0.35);
        }

        .avs-secondary-btn {
          color: white;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .avs-secondary-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .avs-scroll-indicator {
          position: absolute;
          bottom: 35px;
          left: 4%;
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.55);
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .avs-scroll-line {
          width: 45px;
          height: 1px;
          background: #ffc42e;
        }

        /* =========================================
           INTRO STRIP
        ========================================= */

        .avs-intro {
          position: relative;
          background: #fff;
          color: #0b1b2a;
          padding: 85px 0;
        }

        .avs-container {
          width: min(1180px, 90%);
          margin: auto;
        }

        .avs-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: center;
        }

        .avs-section-label {
          color: #b58a12;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .avs-intro-title {
          margin: 0;
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.05;
          letter-spacing: -2px;
        }

        .avs-intro-title span {
          color: #c99a19;
        }

        .avs-intro-text {
          margin: 0;
          color: #526171;
          font-size: 17px;
          line-height: 1.9;
        }

        .avs-mini-stats {
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid #e6e9ed;
          padding-top: 25px;
        }

        .avs-mini-stat strong {
          display: block;
          font-size: 28px;
          color: #0b1b2a;
        }

        .avs-mini-stat span {
          display: block;
          margin-top: 5px;
          color: #7a8794;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* =========================================
           FEATURE VIDEO
        ========================================= */

        .avs-feature {
          background: #07111d;
          padding: 110px 0;
          position: relative;
        }

        .avs-feature-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          margin-bottom: 45px;
        }

        .avs-feature-title {
          max-width: 650px;
          margin: 0;
          font-size: clamp(36px, 5vw, 65px);
          line-height: 1;
          letter-spacing: -2px;
        }

        .avs-feature-title span {
          color: #ffc42e;
        }

        .avs-feature-description {
          max-width: 400px;
          margin: 0;
          color: #8493a2;
          line-height: 1.7;
          font-size: 14px;
        }

        .avs-feature-video-wrap {
          position: relative;
          border-radius: 25px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.12);
          background: #101d2a;
          box-shadow: 0 30px 80px rgba(0,0,0,0.4);
        }

        .avs-feature-video {
          display: block;
          width: 100%;
          height: min(650px, 60vw);
          min-height: 350px;
          object-fit: cover;
        }

        .avs-video-gradient {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              0deg,
              rgba(3,10,17,0.8),
              transparent 55%
            );
          pointer-events: none;
        }

        .avs-video-label {
          position: absolute;
          left: 30px;
          bottom: 25px;
          z-index: 2;
        }

        .avs-video-label small {
          color: #ffc42e;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .avs-video-label h3 {
          margin: 7px 0 0;
          font-size: 25px;
        }

        /* =========================================
           SERVICE CARDS
        ========================================= */

        .avs-services {
          background: #f5f7f9;
          color: #081522;
          padding: 110px 0;
        }

        .avs-services-heading {
          max-width: 700px;
          margin-bottom: 55px;
        }

        .avs-services-heading h2 {
          margin: 0;
          font-size: clamp(38px, 5vw, 65px);
          line-height: 1;
          letter-spacing: -2.5px;
        }

        .avs-services-heading p {
          color: #657382;
          line-height: 1.8;
          max-width: 580px;
          margin-top: 22px;
        }

        .avs-service-card {
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          min-height: 520px;
          margin-bottom: 30px;
          background: #fff;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 15px 50px rgba(12, 30, 45, 0.08);
        }

        .avs-service-card:nth-child(even) {
          grid-template-columns: 1.25fr 0.75fr;
        }

        .avs-service-card:nth-child(even) .avs-service-media {
          order: 2;
        }

        .avs-service-card:nth-child(even) .avs-service-content {
          order: 1;
        }

        .avs-service-media {
          position: relative;
          min-height: 450px;
          overflow: hidden;
        }

        .avs-service-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .avs-service-card:hover .avs-service-bg {
          transform: scale(1.06);
        }

        .avs-service-media::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(5,16,27,0.05),
            rgba(5,16,27,0.65)
          );
        }

        .avs-service-number {
          position: absolute;
          z-index: 2;
          left: 28px;
          top: 25px;
          font-size: 14px;
          font-weight: 800;
          color: #ffc42e;
          letter-spacing: 2px;
        }

        .avs-service-content {
          padding: 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .avs-service-content h3 {
          margin: 0;
          font-size: clamp(30px, 3vw, 45px);
          letter-spacing: -1.5px;
        }

        .avs-service-subtitle {
          margin: 12px 0 22px;
          color: #b28717;
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .avs-service-content p {
          color: #637181;
          font-size: 16px;
          line-height: 1.8;
          max-width: 550px;
        }

        .avs-service-list {
          list-style: none;
          margin: 25px 0 0;
          padding: 0;
          display: grid;
          gap: 13px;
        }

        .avs-service-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #273746;
          font-size: 14px;
        }

        .avs-check {
          width: 20px;
          height: 20px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background: #fff4cf;
          color: #b07f00;
          font-size: 11px;
          font-weight: 900;
        }

        /* =========================================
           PROCESS
        ========================================= */

        .avs-process {
          background: #fff;
          color: #081522;
          padding: 110px 0;
        }

        .avs-process-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 70px;
        }

        .avs-process-header h2 {
          margin: 0;
          font-size: clamp(38px, 5vw, 60px);
          letter-spacing: -2px;
        }

        .avs-process-header p {
          color: #687684;
          line-height: 1.8;
        }

        .avs-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }

        .avs-process-item {
          position: relative;
          padding: 0 25px;
          text-align: center;
        }

        .avs-process-item:not(:last-child)::after {
          content: "";
          position: absolute;
          right: -1px;
          top: 31px;
          width: 1px;
          height: 90px;
          background: #e2e6ea;
        }

        .avs-process-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 22px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background: #fff7da;
          color: #bc8a0c;
          font-size: 24px;
          font-weight: 800;
        }

        .avs-process-item h3 {
          margin: 0 0 10px;
          font-size: 18px;
        }

        .avs-process-item p {
          margin: 0;
          color: #75818d;
          font-size: 13px;
          line-height: 1.7;
        }

        /* =========================================
           EPC VIDEO SECTION
        ========================================= */

        .avs-epc {
          position: relative;
          background: #0b1a28;
          min-height: 700px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .avs-epc-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.35;
        }

        .avs-epc-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            #07111de8,
            #07111d9c,
            #07111d55
          );
        }

        .avs-epc-content {
          position: relative;
          z-index: 2;
          width: min(1180px, 90%);
          margin: auto;
        }

        .avs-epc-layout {
          max-width: 650px;
        }

        .avs-epc-layout h2 {
          margin: 0;
          font-size: clamp(40px, 6vw, 75px);
          line-height: 0.98;
          letter-spacing: -3px;
        }

        .avs-epc-layout h2 span {
          color: #ffc42e;
        }

        .avs-epc-layout p {
          color: #aeb9c3;
          line-height: 1.8;
          font-size: 16px;
          margin: 28px 0;
        }

        .avs-epc-video {
          margin-top: 35px;
          width: 100%;
          height: 260px;
          object-fit: cover;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.16);
          box-shadow: 0 25px 70px rgba(0,0,0,0.4);
        }

        /* =========================================
           CTA
        ========================================= */

        .avs-cta {
          padding: 100px 0;
          background:
            radial-gradient(
              circle at 85% 20%,
              rgba(255,196,46,0.16),
              transparent 30%
            ),
            #f7f8f9;
          color: #071522;
        }

        .avs-cta-box {
          position: relative;
          overflow: hidden;
          background: #0a1a29;
          border-radius: 30px;
          padding: 70px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
        }

        .avs-cta-box::before {
          content: "";
          position: absolute;
          width: 350px;
          height: 350px;
          border: 1px solid rgba(255,196,46,0.2);
          border-radius: 50%;
          right: -100px;
          top: -170px;
        }

        .avs-cta-content {
          position: relative;
          z-index: 2;
        }

        .avs-cta-content small {
          color: #ffc42e;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .avs-cta-content h2 {
          margin: 12px 0;
          color: #fff;
          font-size: clamp(35px, 5vw, 58px);
          letter-spacing: -2px;
        }

        .avs-cta-content p {
          margin: 0;
          color: #8999a8;
          max-width: 600px;
          line-height: 1.7;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {

          .avs-intro-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .avs-feature-header {
            display: block;
          }

          .avs-feature-description {
            margin-top: 20px;
          }

          .avs-service-card,
          .avs-service-card:nth-child(even) {
            grid-template-columns: 1fr;
          }

          .avs-service-card:nth-child(even) .avs-service-media,
          .avs-service-card:nth-child(even) .avs-service-content {
            order: initial;
          }

          .avs-service-media {
            min-height: 350px;
          }

          .avs-process-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 45px 0;
          }

          .avs-process-item:nth-child(2)::after {
            display: none;
          }

          .avs-cta-box {
            padding: 50px;
            display: block;
          }

          .avs-cta-box button {
            margin-top: 30px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .avs-hero {
            min-height: 90svh;
          }

          .avs-hero-content {
            width: 88%;
            padding: 130px 0 70px;
          }

          .avs-hero-title {
            font-size: clamp(40px, 12vw, 58px);
            letter-spacing: -2px;
          }

          .avs-hero-text {
            font-size: 15px;
            line-height: 1.7;
          }

          .avs-scroll-indicator {
            display: none;
          }

          .avs-intro,
          .avs-feature,
          .avs-services,
          .avs-process,
          .avs-cta {
            padding: 75px 0;
          }

          .avs-container {
            width: 90%;
          }

          .avs-mini-stats {
            gap: 15px;
          }

          .avs-mini-stat strong {
            font-size: 21px;
          }

          .avs-mini-stat span {
            font-size: 9px;
          }

          .avs-feature-video {
            height: 280px;
            min-height: 280px;
          }

          .avs-video-label {
            left: 20px;
            bottom: 20px;
          }

          .avs-video-label h3 {
            font-size: 19px;
          }

          .avs-service-card {
            border-radius: 20px;
            margin-bottom: 20px;
          }

          .avs-service-media {
            min-height: 280px;
          }

          .avs-service-content {
            padding: 35px 25px;
          }

          .avs-service-content h3 {
            font-size: 31px;
          }

          .avs-process-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .avs-process-item {
            padding: 0 15px;
          }

          .avs-process-item::after {
            display: none !important;
          }

          .avs-epc {
            min-height: 650px;
          }

          .avs-epc-video {
            height: 220px;
          }

          .avs-cta-box {
            border-radius: 22px;
            padding: 38px 25px;
          }

          .avs-cta-content h2 {
            font-size: 37px;
          }
        }

        @media (max-width: 380px) {

          .avs-hero-title {
            font-size: 38px;
          }

          .avs-primary-btn,
          .avs-secondary-btn {
            width: 100%;
          }

          .avs-mini-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <Navbar token={token} logout={logout} />

      {/* =========================================
          HERO
      ========================================= */}

      <section className="avs-hero">
        <video
          className="avs-hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        <div className="avs-hero-overlay" />

        <div className="avs-hero-content">
          <motion.div
            className="avs-hero-grid"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
           

            <h1 className="avs-hero-title">
              Powering a <span>Brighter</span>
              <br />
              Tomorrow.
            </h1>

            <p className="avs-hero-text">
              AVS Solar Consultancy delivers thoughtfully designed solar
              energy solutions for homes, businesses and large-scale
              applications — helping you move towards cleaner and smarter
              energy.
            </p>

            <div className="avs-hero-actions">
              <button
                className="avs-primary-btn"
                onClick={handleConsultation}
              >
                Start Your Solar Journey
              </button>

              <button
                className="avs-secondary-btn"
                onClick={() =>
                  document
                    .getElementById("avs-services")
                    ?.scrollIntoView()
                }
              >
                Explore Solutions
              </button>
            </div>
          </motion.div>
        </div>

        <div className="avs-scroll-indicator">
          <span className="avs-scroll-line" />
          Scroll to explore
        </div>
      </section>

      {/* =========================================
          INTRO
      ========================================= */}

      <section className="avs-intro">
        <div className="avs-container">
          <div className="avs-intro-grid">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="avs-section-label">
                Why AVS Solar
              </div>

              <h2 className="avs-intro-title">
                More than solar.
                <br />
                A smarter <span>energy future.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="avs-intro-text">
                From the first consultation to system installation and
                long-term support, AVS Solar Consultancy focuses on creating
                practical solar solutions around your actual energy
                requirements.
              </p>

              <div className="avs-mini-stats">
                <div className="avs-mini-stat">
                  <strong>01</strong>
                  <span>Consultation</span>
                </div>

                <div className="avs-mini-stat">
                  <strong>02</strong>
                  <span>Design</span>
                </div>

                <div className="avs-mini-stat">
                  <strong>03</strong>
                  <span>Installation</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          MAIN VIDEO
      ========================================= */}

      <section className="avs-feature">
        <div className="avs-container">

          <motion.div
            className="avs-feature-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="avs-section-label">
                See Solar In Action
              </div>

              <h2 className="avs-feature-title">
                Engineering that turns
                <br />
                sunlight into <span>possibility.</span>
              </h2>
            </div>

            <p className="avs-feature-description">
              Explore our approach to solar engineering, installation and
              energy transformation through our project video.
            </p>
          </motion.div>

          <motion.div
            className="avs-feature-video-wrap"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <video
              className="avs-feature-video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={epcVideo} type="video/mp4" />
            </video>

            <div className="avs-video-gradient" />

            <div className="avs-video-label">
              <small>AVS Solar</small>
              <h3>Engineering • Procurement • Construction</h3>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================
          SERVICES
      ========================================= */}

      <section
        id="avs-services"
        className="avs-services"
      >
        <div className="avs-container">

          <motion.div
            className="avs-services-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="avs-section-label">
              Our Solutions
            </div>

            <h2>
              Solar designed
              <br />
              around <span>you.</span>
            </h2>

            <p>
              Every property has different energy requirements. Our solutions
              are planned around your space, usage and long-term goals.
            </p>
          </motion.div>

          {services.map((service, index) => (
            <motion.article
              key={service.number}
              className="avs-service-card"
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >
              <div className="avs-service-media">

                <img
                  className="avs-service-bg"
                  src={service.image}
                  alt={service.title}
                />

                <span className="avs-service-number">
                  {service.number}
                </span>

              </div>

              <div className="avs-service-content">

                <h3>{service.title}</h3>

                <div className="avs-service-subtitle">
                  {service.subtitle}
                </div>

                <p>{service.description}</p>

                <ul className="avs-service-list">
                  {service.points.map((point) => (
                    <li key={point}>
                      <span className="avs-check">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>

              </div>
            </motion.article>
          ))}

        </div>
      </section>

      {/* =========================================
          PROCESS
      ========================================= */}

      <section className="avs-process">

        <div className="avs-container">

          <motion.div
            className="avs-process-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="avs-section-label">
              Simple Process
            </div>

            <h2>
              From idea to
              <br />
              <span>solar power.</span>
            </h2>

            <p>
              Our process keeps your solar journey simple, transparent and
              organized from beginning to end.
            </p>
          </motion.div>

          <div className="avs-process-grid">

            <motion.div
              className="avs-process-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="avs-process-icon">01</div>
              <h3>Consultation</h3>
              <p>
                Understand your energy requirements and property.
              </p>
            </motion.div>

            <motion.div
              className="avs-process-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="avs-process-icon">02</div>
              <h3>Site & Design</h3>
              <p>
                Analyze the site and create a suitable solar design.
              </p>
            </motion.div>

            <motion.div
              className="avs-process-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="avs-process-icon">03</div>
              <h3>Installation</h3>
              <p>
                Install and configure the solar energy system.
              </p>
            </motion.div>

            <motion.div
              className="avs-process-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="avs-process-icon">04</div>
              <h3>Support</h3>
              <p>
                Continue with monitoring, maintenance and assistance.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* =========================================
          EPC VIDEO / IMAGE SECTION
      ========================================= */}

      <section className="avs-epc">

        <img
          className="avs-epc-image"
          src={epcBg}
          alt="Solar project"
        />

        <div className="avs-epc-overlay" />

        <div className="avs-epc-content">

          <motion.div
            className="avs-epc-layout"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="avs-section-label">
              Complete Solar Solutions
            </div>

            <h2>
              One team.
              <br />
              One complete
              <br />
              <span>solar solution.</span>
            </h2>

            <p>
              AVS Solar Consultancy brings consultation, engineering,
              procurement, installation and ongoing support together under one
              streamlined solar journey.
            </p>

            <video
              className="avs-epc-video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={epcVideo} type="video/mp4" />
            </video>

          </motion.div>

        </div>
      </section>

      {/* =========================================
          CTA
      ========================================= */}

      <section className="avs-cta">

        <div className="avs-container">

          <motion.div
            className="avs-cta-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <div className="avs-cta-content">

              <small>
                READY TO GO SOLAR?
              </small>

              <h2>
                Let's build your
                <br />
                solar future.
              </h2>

              <p>
                Tell us about your energy requirements and take the first step
                towards a customized solar solution.
              </p>

            </div>

            <button
              className="avs-primary-btn"
              onClick={handleConsultation}
            >
              Get Free Consultation
            </button>

          </motion.div>

        </div>

      </section>

      <Footer />
    </div>
  );
}

export default About;