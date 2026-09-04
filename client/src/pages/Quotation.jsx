import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiFileText,
  FiDollarSign,
  FiTrendingUp,
  FiShield,
  FiZap,
  FiHome,
  FiSettings,
  FiBarChart2,
  FiPhone,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import backgroundImageFile from "../assets/quotation.jpg";

function Quotation() {
  const navigate = useNavigate();

  const quotationFeatures = [
    {
      icon: <FiFileText />,
      title: "Detailed Pricing",
      text: "A clear breakdown of solar panels, inverter, mounting structure, installation and other required components.",
    },
    {
      icon: <FiZap />,
      title: "Energy Generation",
      text: "Estimated solar generation based on your electricity requirements and proposed system capacity.",
    },
    {
      icon: <FiDollarSign />,
      title: "Cost & Savings",
      text: "Understand your expected investment, electricity savings and potential reduction in monthly bills.",
    },
    {
      icon: <FiShield />,
      title: "Warranty Coverage",
      text: "Complete information about product warranties, installation support and applicable service coverage.",
    },
    {
      icon: <FiTrendingUp />,
      title: "ROI Analysis",
      text: "Estimated payback period and long-term financial benefits of your solar investment.",
    },
    {
      icon: <FiSettings />,
      title: "System Specifications",
      text: "Technical details of the proposed solar system, including capacity and major equipment.",
    },
  ];

  const quotationSteps = [
    {
      number: "01",
      title: "Understand Your Requirement",
      text: "We begin by understanding your electricity consumption, property type, budget and solar objectives.",
    },
    {
      number: "02",
      title: "Evaluate Your Site",
      text: "Our team evaluates available space, roof conditions, shading, orientation and electrical requirements.",
    },
    {
      number: "03",
      title: "Prepare Solar Design",
      text: "We prepare a suitable system configuration designed around your energy requirements and site conditions.",
    },
    {
      number: "04",
      title: "Prepare Your Quotation",
      text: "You receive a transparent quotation containing system details, pricing, savings estimates and warranty information.",
    },
  ];

  const includedItems = [
    "Recommended solar system capacity",
    "Solar panel specifications",
    "Inverter specifications",
    "Mounting structure details",
    "Installation and commissioning costs",
    "Estimated energy generation",
    "Estimated electricity savings",
    "Warranty information",
    "Expected payback period",
    "Applicable documentation and approvals",
  ];

  return (
    <div className="quotation-page">
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
          background: #ffffff;
        }

        button {
          font-family: inherit;
        }

        /* =========================================================
           HERO
        ========================================================= */

        .quotation-hero {
          position: relative;
          min-height: 620px;
          height: 78vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #081c2d;
        }

        .quotation-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: scale(1.02);
        }

        .quotation-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(5, 20, 34, 0.96) 0%,
              rgba(5, 20, 34, 0.82) 35%,
              rgba(5, 20, 34, 0.50) 65%,
              rgba(5, 20, 34, 0.25) 100%
            );
        }

        .quotation-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1250px;
          margin: 0 auto;
          padding: 100px 55px 70px;
        }

        .quotation-back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 35px;
          padding: 10px 17px;
          border: 1px solid rgba(255,255,255,0.55);
          border-radius: 3px;
          background: rgba(255,255,255,0.08);
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .quotation-back-button:hover {
          background: #ffffff;
          color: #102437;
          transform: translateX(-3px);
        }

        .quotation-eyebrow {
          margin: 0 0 15px;
          color: rgba(255,255,255,0.72);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .quotation-hero-title {
          max-width: 760px;
          margin: 0 0 20px;
          color: #ffffff;
          font-size: clamp(44px, 6vw, 76px);
          font-weight: 800;
          line-height: 1.02;
          letter-spacing: -1.5px;
        }

        .quotation-hero-title span {
          display: block;
          color: #ffffff;
        }

        .quotation-hero-description {
          max-width: 650px;
          margin: 0 0 30px;
          color: rgba(255,255,255,0.88);
          font-size: 16px;
          line-height: 1.75;
        }

        .quotation-hero-actions {
          display: flex;
          align-items: center;
          gap: 13px;
          flex-wrap: wrap;
        }

        .quotation-primary-btn,
        .quotation-secondary-btn {
          min-height: 43px;
          padding: 0 21px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border-radius: 3px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .quotation-primary-btn {
          border: 1px solid #ffffff;
          background: #ffffff;
          color: #172737;
        }

        .quotation-primary-btn:hover {
          background: transparent;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .quotation-secondary-btn {
          border: 1px solid rgba(255,255,255,0.55);
          background: transparent;
          color: #ffffff;
        }

        .quotation-secondary-btn:hover {
          background: rgba(255,255,255,0.12);
          border-color: #ffffff;
        }

        /* =========================================================
           INTRO
        ========================================================= */

        .quotation-intro {
          padding: 75px 6%;
          background: #ffffff;
        }

        .quotation-intro-container {
          max-width: 1150px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 80px;
          align-items: center;
        }

        .quotation-section-label {
          margin: 0 0 12px;
          color: #5d6670;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .quotation-section-title {
          margin: 0 0 17px;
          color: #10283d;
          font-size: clamp(31px, 4vw, 47px);
          font-weight: 800;
          line-height: 1.1;
        }

        .quotation-line {
          width: 58px;
          height: 3px;
          margin-bottom: 22px;
          background: #10283d;
        }

        .quotation-intro-text {
          margin: 0;
          color: #59636c;
          font-size: 15px;
          line-height: 1.8;
        }

        .quotation-intro-highlight {
          padding: 35px;
          background: #f3f5f6;
          border-left: 4px solid #10283d;
        }

        .quotation-intro-highlight p {
          margin: 0;
          color: #303a43;
          font-size: 16px;
          line-height: 1.8;
        }

        /* =========================================================
           FEATURES
        ========================================================= */

        .quotation-features-section {
          padding: 75px 6%;
          background: #eef1f3;
        }

        .quotation-section-header {
          max-width: 780px;
          margin: 0 auto 45px;
          text-align: center;
        }

        .quotation-section-header .quotation-line {
          margin: 0 auto 20px;
        }

        .quotation-section-description {
          margin: 0;
          color: #626b73;
          font-size: 14px;
          line-height: 1.7;
        }

        .quotation-features-grid {
          max-width: 1150px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .quotation-feature-card {
          min-height: 230px;
          padding: 30px 27px;
          background: #ffffff;
          border: 1px solid #e1e5e7;
          transition: all 0.35s ease;
        }

        .quotation-feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 35px rgba(0,0,0,0.10);
        }

        .quotation-feature-icon {
          width: 48px;
          height: 48px;
          margin-bottom: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #10283d;
          color: #ffffff;
          font-size: 21px;
        }

        .quotation-feature-card h3 {
          margin: 0 0 10px;
          color: #172b3d;
          font-size: 18px;
        }

        .quotation-feature-card p {
          margin: 0;
          color: #69727a;
          font-size: 13px;
          line-height: 1.7;
        }

        /* =========================================================
           PROCESS
        ========================================================= */

        .quotation-process-section {
          padding: 80px 6%;
          background: #ffffff;
        }

        .quotation-process-container {
          max-width: 1150px;
          margin: 0 auto;
        }

        .quotation-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          margin-top: 50px;
        }

        .quotation-process-card {
          position: relative;
          padding: 0 28px;
        }

        .quotation-process-card:not(:last-child)::after {
          content: "";
          position: absolute;
          top: 22px;
          right: 0;
          width: 1px;
          height: 75px;
          background: #d9dddf;
        }

        .quotation-step-number {
          margin-bottom: 20px;
          color: #10283d;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .quotation-process-card h3 {
          margin: 0 0 11px;
          color: #1a2d3d;
          font-size: 17px;
          line-height: 1.3;
        }

        .quotation-process-card p {
          margin: 0;
          color: #68727a;
          font-size: 13px;
          line-height: 1.7;
        }

        /* =========================================================
           INCLUDED
        ========================================================= */

        .quotation-included-section {
          padding: 80px 6%;
          background: #303438;
          color: #ffffff;
        }

        .quotation-included-container {
          max-width: 1150px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 80px;
          align-items: center;
        }

        .quotation-included-section .quotation-section-label {
          color: rgba(255,255,255,0.6);
        }

        .quotation-included-section .quotation-section-title {
          color: #ffffff;
        }

        .quotation-included-section .quotation-line {
          background: #ffffff;
        }

        .quotation-included-text {
          color: rgba(255,255,255,0.75);
          font-size: 14px;
          line-height: 1.8;
        }

        .quotation-check-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px 25px;
        }

        .quotation-check-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: rgba(255,255,255,0.9);
          font-size: 13px;
          line-height: 1.5;
        }

        .quotation-check-icon {
          flex-shrink: 0;
          margin-top: 2px;
          color: #ffffff;
        }

        /* =========================================================
           CTA
        ========================================================= */

        .quotation-cta {
          padding: 80px 6%;
          background: #f4f6f7;
        }

        .quotation-cta-container {
          max-width: 1050px;
          margin: 0 auto;
          padding: 55px;
          background: #10283d;
          text-align: center;
          box-shadow: 0 20px 45px rgba(0,0,0,0.12);
        }

        .quotation-cta-icon {
          width: 52px;
          height: 52px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.45);
          color: #ffffff;
          font-size: 21px;
        }

        .quotation-cta-container h2 {
          margin: 0 0 13px;
          color: #ffffff;
          font-size: clamp(27px, 4vw, 40px);
        }

        .quotation-cta-container p {
          max-width: 650px;
          margin: 0 auto 27px;
          color: rgba(255,255,255,0.78);
          font-size: 14px;
          line-height: 1.7;
        }

        .quotation-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          min-height: 42px;
          padding: 0 22px;
          border: 1px solid #ffffff;
          background: #ffffff;
          color: #10283d;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .quotation-cta-button:hover {
          background: transparent;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* =========================================================
           1024
        ========================================================= */

        @media (max-width: 1024px) {
          .quotation-hero-content {
            padding: 90px 40px 60px;
          }

          .quotation-intro-container,
          .quotation-included-container {
            gap: 45px;
          }

          .quotation-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .quotation-process-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 0;
          }

          .quotation-process-card:nth-child(2)::after {
            display: none;
          }
        }

        /* =========================================================
           768
        ========================================================= */

        @media (max-width: 768px) {
          .quotation-hero {
            min-height: 600px;
            height: 75vh;
          }

          .quotation-hero-content {
            padding: 90px 25px 55px;
          }

          .quotation-hero-title {
            font-size: clamp(40px, 9vw, 58px);
          }

          .quotation-hero-description {
            font-size: 14px;
          }

          .quotation-intro {
            padding: 55px 22px;
          }

          .quotation-intro-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .quotation-features-section,
          .quotation-process-section,
          .quotation-included-section,
          .quotation-cta {
            padding: 60px 22px;
          }

          .quotation-features-grid {
            grid-template-columns: 1fr 1fr;
          }

          .quotation-included-container {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .quotation-check-list {
            grid-template-columns: 1fr 1fr;
          }

          .quotation-cta-container {
            padding: 45px 25px;
          }
        }

        /* =========================================================
           600
        ========================================================= */

        @media (max-width: 600px) {
          .quotation-hero {
            min-height: 570px;
          }

          .quotation-hero-content {
            padding: 90px 18px 45px;
          }

          .quotation-back-button {
            margin-bottom: 25px;
            font-size: 10px;
          }

          .quotation-eyebrow {
            font-size: 9px;
            letter-spacing: 1.5px;
          }

          .quotation-hero-title {
            margin-bottom: 15px;
            font-size: 37px;
            letter-spacing: -0.5px;
          }

          .quotation-hero-description {
            font-size: 12px;
            line-height: 1.65;
          }

          .quotation-primary-btn,
          .quotation-secondary-btn {
            min-height: 38px;
            padding: 0 15px;
            font-size: 9px;
          }

          .quotation-intro {
            padding: 45px 18px;
          }

          .quotation-section-title {
            font-size: 29px;
          }

          .quotation-intro-text,
          .quotation-intro-highlight p {
            font-size: 13px;
          }

          .quotation-intro-highlight {
            padding: 25px;
          }

          .quotation-features-section,
          .quotation-process-section,
          .quotation-included-section,
          .quotation-cta {
            padding: 50px 18px;
          }

          .quotation-section-description {
            font-size: 12px;
          }

          .quotation-features-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .quotation-feature-card {
            min-height: auto;
            padding: 25px 22px;
          }

          .quotation-feature-card h3 {
            font-size: 16px;
          }

          .quotation-feature-card p {
            font-size: 12px;
          }

          .quotation-process-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .quotation-process-card {
            padding: 0;
          }

          .quotation-process-card:not(:last-child)::after {
            display: none;
          }

          .quotation-check-list {
            grid-template-columns: 1fr;
          }

          .quotation-check-item {
            font-size: 12px;
          }

          .quotation-cta-container {
            padding: 40px 20px;
          }

          .quotation-cta-container h2 {
            font-size: 27px;
          }

          .quotation-cta-container p {
            font-size: 12px;
          }

          .quotation-cta-button {
            min-height: 38px;
            padding: 0 17px;
            font-size: 9px;
          }
        }

        /* =========================================================
           400
        ========================================================= */

        @media (max-width: 400px) {
          .quotation-hero {
            min-height: 550px;
          }

          .quotation-hero-content {
            padding: 85px 15px 40px;
          }

          .quotation-hero-title {
            font-size: 32px;
          }

          .quotation-hero-description {
            font-size: 11px;
          }

          .quotation-section-title {
            font-size: 25px;
          }

          .quotation-feature-icon {
            width: 42px;
            height: 42px;
            font-size: 18px;
          }

          .quotation-feature-card {
            padding: 22px 18px;
          }
        }

        /* =========================================================
           REDUCED MOTION
        ========================================================= */

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="quotation-hero">
        <img
          src={backgroundImageFile}
          alt="Solar quotation and consultation"
          className="quotation-hero-image"
        />

        <div className="quotation-hero-overlay"></div>

        <motion.div
          className="quotation-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button
            type="button"
            className="quotation-back-button"
            onClick={() => navigate("/")}
          >
            <FiArrowLeft size={14} />
            BACK TO HOME
          </button>

          <motion.p
            className="quotation-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            AVS SOLAR CONSULTANCY
          </motion.p>

          <motion.h1
            className="quotation-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            QUOTATION
            <span>& COST ESTIMATION</span>
          </motion.h1>

          <motion.p
            className="quotation-hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Get a transparent and carefully prepared solar quotation designed
            around your energy requirements, property conditions and long-term
            savings goals.
          </motion.p>

          <motion.div
            className="quotation-hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              type="button"
              className="quotation-primary-btn"
              onClick={() => navigate("/contact")}
            >
              REQUEST A QUOTATION
              <FiArrowRight size={14} />
            </button>

            <button
              type="button"
              className="quotation-secondary-btn"
              onClick={() =>
                document
                  .getElementById("quotation-details")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              VIEW DETAILS
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="quotation-intro" id="quotation-details">
        <motion.div
          className="quotation-intro-container"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="quotation-section-label">
              A CLEAR APPROACH
            </p>

            <h2 className="quotation-section-title">
              Know Your Solar Investment Before You Begin
            </h2>

            <div className="quotation-line"></div>

            <p className="quotation-intro-text">
              We believe a solar investment should be easy to understand.
              Before installation, our team provides a structured quotation
              that explains the recommended system, major equipment, estimated
              generation, costs, savings and warranty information.
            </p>
          </div>

          <div className="quotation-intro-highlight">
            <p>
              Every quotation is prepared according to the specific
              requirements of your property. Rather than offering a generic
              package, we consider your energy consumption, available space,
              site conditions and preferred solar solution.
            </p>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}

      <section className="quotation-features-section">
        <motion.div
          className="quotation-section-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="quotation-section-label">
            WHAT WE PROVIDE
          </p>

          <h2 className="quotation-section-title">
            Everything You Need to Understand the Proposal
          </h2>

          <div className="quotation-line"></div>

          <p className="quotation-section-description">
            Our quotation is designed to give you a complete view of your
            proposed solar system and its expected financial and technical
            benefits.
          </p>
        </motion.div>

        <div className="quotation-features-grid">
          {quotationFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="quotation-feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
              }}
            >
              <div className="quotation-feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section className="quotation-process-section">
        <div className="quotation-process-container">
          <motion.div
            className="quotation-section-header"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="quotation-section-label">
              OUR PROCESS
            </p>

            <h2 className="quotation-section-title">
              How We Prepare Your Quotation
            </h2>

            <div className="quotation-line"></div>
          </motion.div>

          <div className="quotation-process-grid">
            {quotationSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="quotation-process-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
              >
                <div className="quotation-step-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          INCLUDED
      ========================================================= */}

      <section className="quotation-included-section">
        <motion.div
          className="quotation-included-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="quotation-section-label">
              COMPLETE TRANSPARENCY
            </p>

            <h2 className="quotation-section-title">
              What's Included in Your Quotation?
            </h2>

            <div className="quotation-line"></div>

            <p className="quotation-included-text">
              Your quotation contains the important technical and financial
              information required to understand the proposed solar project
              before making a decision.
            </p>
          </div>

          <div className="quotation-check-list">
            {includedItems.map((item) => (
              <div
                className="quotation-check-item"
                key={item}
              >
                <FiCheck
                  className="quotation-check-icon"
                  size={15}
                />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="quotation-cta">
        <motion.div
          className="quotation-cta-container"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="quotation-cta-icon">
            <FiPhone />
          </div>

          <h2>Ready to Understand Your Solar Investment?</h2>

          <p>
            Speak with our team to discuss your electricity requirements,
            property and preferred solar solution. We will help you take the
            next step toward a suitable solar system.
          </p>

          <button
            type="button"
            className="quotation-cta-button"
            onClick={() => navigate("/contact")}
          >
            TALK TO OUR TEAM
            <FiArrowRight size={14} />
          </button>
        </motion.div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <Footer />
    </div>
  );
}

export default Quotation;