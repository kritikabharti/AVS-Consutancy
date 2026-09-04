import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiPhone,
  FiMessageCircle,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatBox from "../components/ChatBox";

const SolarJourneyDetails = ({
  number,
  title,
  subtitle,
  image,
  description,
  overview,
  benefits,
  process,
  highlights,
}) => {
  const navigate = useNavigate();

  return (
    <div className="solar-detail-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .solar-detail-page {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          color: #20252a;
          overflow-x: hidden;
        }

        /* =========================================
           HERO
        ========================================= */

        .detail-hero {
          position: relative;
          width: 100%;
          min-height: 560px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #071b2e;
        }

        .detail-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .detail-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(4, 20, 34, 0.94) 0%,
              rgba(4, 20, 34, 0.82) 42%,
              rgba(4, 20, 34, 0.48) 72%,
              rgba(4, 20, 34, 0.25) 100%
            );
        }

        .detail-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 55px 70px;
        }

        .detail-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 54px;
          height: 30px;
          padding: 0 13px;
          margin-bottom: 18px;
          border: 1px solid rgba(255,255,255,0.6);
          border-radius: 2px;
          color: #ffffff;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .detail-hero-title {
          max-width: 850px;
          margin: 0 0 18px;
          color: #ffffff;
          font-size: clamp(42px, 5.5vw, 72px);
          line-height: 1.03;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .detail-hero-line {
          width: 70px;
          height: 3px;
          margin-bottom: 22px;
          background: #ffffff;
          border-radius: 10px;
        }

        .detail-hero-subtitle {
          max-width: 680px;
          margin: 0;
          color: rgba(255,255,255,0.9);
          font-size: 16px;
          line-height: 1.7;
          font-weight: 500;
        }

        /* =========================================
           BACK BUTTON
        ========================================= */

        .detail-back-button {
          position: absolute;
          top: 95px;
          left: 55px;
          z-index: 5;

          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 9px 14px;

          background: rgba(0,0,0,0.25);
          border: 1px solid rgba(255,255,255,0.45);
          border-radius: 3px;

          color: #ffffff;
          font-size: 11px;
          font-weight: 700;

          cursor: pointer;
          transition: all 0.3s ease;
        }

        .detail-back-button:hover {
          background: #ffffff;
          color: #071b2e;
        }

        /* =========================================
           OVERVIEW
        ========================================= */

        .detail-overview-section {
          width: 100%;
          padding: 80px 5%;
          background: #ffffff;
        }

        .detail-overview-container {
          width: 100%;
          max-width: 1150px;
          margin: 0 auto;

          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 65px;
          align-items: center;
        }

        .detail-overview-image-wrapper {
          width: 100%;
          height: 410px;
          overflow: hidden;
          border-radius: 3px;
          background: #eeeeee;
        }

        .detail-overview-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .detail-overview-image-wrapper:hover
        .detail-overview-image {
          transform: scale(1.04);
        }

        .detail-section-label {
          margin: 0 0 10px;
          color: #70777d;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .detail-section-title {
          margin: 0 0 15px;
          color: #09233a;
          font-size: clamp(30px, 3vw, 43px);
          line-height: 1.1;
          font-weight: 800;
        }

        .detail-title-line {
          width: 55px;
          height: 3px;
          margin-bottom: 22px;
          background: #09233a;
          border-radius: 10px;
        }

        .detail-description {
          margin: 0 0 20px;
          color: #515b64;
          font-size: 15px;
          line-height: 1.8;
        }

        .detail-overview {
          margin: 0;
          color: #68717a;
          font-size: 14px;
          line-height: 1.8;
        }

        /* =========================================
           HIGHLIGHTS
        ========================================= */

        .detail-highlights-section {
          width: 100%;
          padding: 70px 5%;
          background: #f4f6f7;
        }

        .detail-centered-heading {
          max-width: 750px;
          margin: 0 auto 45px;
          text-align: center;
        }

        .detail-centered-heading .detail-title-line {
          margin-left: auto;
          margin-right: auto;
        }

        .detail-highlights-grid {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .detail-highlight-card {
          min-height: 170px;
          padding: 28px 25px;
          background: #ffffff;
          border: 1px solid #e4e7e9;
          transition: all 0.3s ease;
        }

        .detail-highlight-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
        }

        .detail-highlight-icon {
          margin-bottom: 17px;
          color: #09233a;
          font-size: 22px;
        }

        .detail-highlight-card h3 {
          margin: 0 0 9px;
          color: #172a3b;
          font-size: 16px;
          font-weight: 800;
        }

        .detail-highlight-card p {
          margin: 0;
          color: #68717a;
          font-size: 13px;
          line-height: 1.6;
        }

        /* =========================================
           PROCESS
        ========================================= */

        .detail-process-section {
          width: 100%;
          padding: 80px 5%;
          background: #ffffff;
        }

        .detail-process-container {
          width: 100%;
          max-width: 1050px;
          margin: 0 auto;
        }

        .detail-process-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .detail-process-item {
          position: relative;
          display: flex;
          gap: 18px;
          padding: 25px;
          background: #f7f8f9;
          border-left: 3px solid #09233a;
        }

        .detail-process-number {
          flex-shrink: 0;

          width: 38px;
          height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #09233a;
          color: #ffffff;

          font-size: 12px;
          font-weight: 800;
        }

        .detail-process-item h3 {
          margin: 0 0 8px;
          color: #172a3b;
          font-size: 16px;
          font-weight: 800;
        }

        .detail-process-item p {
          margin: 0;
          color: #68717a;
          font-size: 13px;
          line-height: 1.65;
        }

        /* =========================================
           BENEFITS
        ========================================= */

        .detail-benefits-section {
          width: 100%;
          padding: 80px 5%;
          background: #303438;
          color: #ffffff;
        }

        .detail-benefits-container {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;

          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 80px;
          align-items: center;
        }

        .detail-benefits-section .detail-section-label {
          color: rgba(255,255,255,0.65);
        }

        .detail-benefits-section .detail-section-title {
          color: #ffffff;
        }

        .detail-benefits-section .detail-title-line {
          background: #ffffff;
        }

        .detail-benefits-intro {
          color: rgba(255,255,255,0.78);
          font-size: 14px;
          line-height: 1.75;
        }

        .detail-benefits-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .detail-benefit-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 17px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.04);
        }

        .detail-benefit-check {
          flex-shrink: 0;
          margin-top: 2px;
          color: #ffffff;
          font-size: 18px;
        }

        .detail-benefit-item span {
          color: rgba(255,255,255,0.88);
          font-size: 13px;
          line-height: 1.55;
        }

        /* =========================================
           CTA
        ========================================= */

        .detail-cta-section {
          width: 100%;
          padding: 75px 5%;
          background: #f4f6f7;
          text-align: center;
        }

        .detail-cta-container {
          max-width: 750px;
          margin: 0 auto;
        }

        .detail-cta-title {
          margin: 0 0 13px;
          color: #09233a;
          font-size: clamp(27px, 3vw, 40px);
          font-weight: 800;
        }

        .detail-cta-text {
          max-width: 600px;
          margin: 0 auto 28px;
          color: #626b73;
          font-size: 14px;
          line-height: 1.7;
        }

        .detail-cta-buttons {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .detail-primary-button,
        .detail-secondary-button {
          min-height: 42px;
          padding: 0 22px;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          border-radius: 3px;

          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.4px;

          cursor: pointer;
          transition: all 0.3s ease;
        }

        .detail-primary-button {
          background: #09233a;
          border: 1px solid #09233a;
          color: #ffffff;
        }

        .detail-primary-button:hover {
          background: #ffffff;
          color: #09233a;
        }

        .detail-secondary-button {
          background: #ffffff;
          border: 1px solid #09233a;
          color: #09233a;
        }

        .detail-secondary-button:hover {
          background: #09233a;
          color: #ffffff;
        }

        /* =========================================
           RESPONSIVE
        ========================================= */

        @media (max-width: 1024px) {

          .detail-hero {
            min-height: 520px;
          }

          .detail-hero-content {
            padding: 100px 40px 60px;
          }

          .detail-back-button {
            left: 40px;
          }

          .detail-overview-container {
            gap: 40px;
          }

          .detail-overview-image-wrapper {
            height: 360px;
          }

          .detail-benefits-container {
            gap: 45px;
          }
        }

        @media (max-width: 768px) {

          .detail-hero {
            min-height: 500px;
          }

          .detail-hero-content {
            padding: 110px 25px 55px;
          }

          .detail-back-button {
            top: 85px;
            left: 25px;
          }

          .detail-hero-title {
            font-size: 42px;
          }

          .detail-hero-subtitle {
            font-size: 14px;
          }

          .detail-overview-section,
          .detail-process-section,
          .detail-benefits-section {
            padding: 60px 22px;
          }

          .detail-overview-container {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .detail-overview-image-wrapper {
            height: 330px;
          }

          .detail-highlights-section {
            padding: 60px 22px;
          }

          .detail-highlights-grid {
            grid-template-columns: 1fr 1fr;
          }

          .detail-process-list {
            grid-template-columns: 1fr;
          }

          .detail-benefits-container {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .detail-cta-section {
            padding: 60px 22px;
          }
        }

        @media (max-width: 600px) {

          .detail-hero {
            min-height: 470px;
          }

          .detail-hero-content {
            padding: 115px 18px 45px;
          }

          .detail-back-button {
            left: 18px;
            font-size: 9px;
            padding: 8px 11px;
          }

          .detail-number {
            min-width: 45px;
            height: 27px;
            font-size: 10px;
          }

          .detail-hero-title {
            font-size: 34px;
            letter-spacing: -0.5px;
          }

          .detail-hero-subtitle {
            font-size: 12px;
            line-height: 1.6;
          }

          .detail-overview-section,
          .detail-process-section,
          .detail-benefits-section {
            padding: 48px 18px;
          }

          .detail-overview-image-wrapper {
            height: 270px;
          }

          .detail-section-title {
            font-size: 28px;
          }

          .detail-description {
            font-size: 13px;
          }

          .detail-overview {
            font-size: 12px;
          }

          .detail-highlights-section {
            padding: 48px 18px;
          }

          .detail-highlights-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .detail-highlight-card {
            min-height: auto;
            padding: 22px;
          }

          .detail-process-item {
            padding: 20px;
          }

          .detail-benefits-list {
            grid-template-columns: 1fr;
          }

          .detail-cta-section {
            padding: 50px 18px;
          }

          .detail-cta-title {
            font-size: 27px;
          }

          .detail-cta-text {
            font-size: 12px;
          }

          .detail-primary-button,
          .detail-secondary-button {
            width: 100%;
            min-height: 42px;
          }

          .detail-cta-buttons {
            width: 100%;
          }
        }

        @media (max-width: 380px) {

          .detail-hero {
            min-height: 440px;
          }

          .detail-hero-title {
            font-size: 29px;
          }

          .detail-hero-subtitle {
            font-size: 11px;
          }

          .detail-overview-image-wrapper {
            height: 230px;
          }

          .detail-section-title {
            font-size: 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <Navbar />

      {/* HERO */}
      <section className="detail-hero">

        <img
          src={image}
          alt={title}
          className="detail-hero-image"
        />

        <div className="detail-hero-overlay"></div>

        <button
          type="button"
          className="detail-back-button"
          onClick={() => navigate("/")}
        >
          <FiArrowLeft size={14} />
          BACK TO HOME
        </button>

        <motion.div
          className="detail-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <motion.div
            className="detail-number"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {number}
          </motion.div>

          <motion.h1
            className="detail-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {title}
          </motion.h1>

          <div className="detail-hero-line"></div>

          <motion.p
            className="detail-hero-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {subtitle}
          </motion.p>

        </motion.div>

      </section>

      {/* OVERVIEW */}
      <section className="detail-overview-section">

        <div className="detail-overview-container">

          <motion.div
            className="detail-overview-image-wrapper"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={image}
              alt={title}
              className="detail-overview-image"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="detail-section-label">
              SOLAR JOURNEY
            </p>

            <h2 className="detail-section-title">
              {title}
            </h2>

            <div className="detail-title-line"></div>

            <p className="detail-description">
              {description}
            </p>

            <p className="detail-overview">
              {overview}
            </p>

          </motion.div>

        </div>

      </section>

      {/* HIGHLIGHTS */}
      <section className="detail-highlights-section">

        <motion.div
          className="detail-centered-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <p className="detail-section-label">
            WHAT WE PROVIDE
          </p>

          <h2 className="detail-section-title">
            Key Highlights
          </h2>

          <div className="detail-title-line"></div>

        </motion.div>

        <div className="detail-highlights-grid">

          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="detail-highlight-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >

              <FiCheckCircle className="detail-highlight-icon" />

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </motion.div>
          ))}

        </div>

      </section>

      {/* PROCESS */}
      <section className="detail-process-section">

        <div className="detail-process-container">

          <motion.div
            className="detail-centered-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <p className="detail-section-label">
              HOW IT WORKS
            </p>

            <h2 className="detail-section-title">
              Our Process
            </h2>

            <div className="detail-title-line"></div>

          </motion.div>

          <div className="detail-process-list">

            {process.map((item, index) => (
              <motion.div
                key={index}
                className="detail-process-item"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >

                <div className="detail-process-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="detail-benefits-section">

        <div className="detail-benefits-container">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="detail-section-label">
              WHY CHOOSE US
            </p>

            <h2 className="detail-section-title">
              Benefits
            </h2>

            <div className="detail-title-line"></div>

            <p className="detail-benefits-intro">
              Our approach focuses on making every stage of
              your solar journey simple, transparent and
              professionally managed.
            </p>

          </motion.div>

          <div className="detail-benefits-list">

            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="detail-benefit-item"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >

                <FiCheckCircle className="detail-benefit-check" />

                <span>{benefit}</span>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="detail-cta-section">

        <motion.div
          className="detail-cta-container"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <h2 className="detail-cta-title">
            Ready to Start Your Solar Journey?
          </h2>

          <p className="detail-cta-text">
            Talk to our team and get professional guidance
            for your solar project from planning to
            installation and beyond.
          </p>

          <div className="detail-cta-buttons">

            {/* <button
              type="button"
              className="detail-primary-button"
              onClick={() => navigate("/quotation")}
            >
              REQUEST A QUOTATION
              <FiArrowRight size={14} />
            </button> */}

            <button
              type="button"
              className="detail-secondary-button"
              onClick={() => navigate("/contact")}
            >
              <FiMessageCircle size={14} />
              CONTACT US
            </button>

          </div>

        </motion.div>

      </section>

      <ChatBox />

      <Footer />

    </div>
  );
};

export default SolarJourneyDetails;