import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatBox from "../components/ChatBox";
import api from "../services/api";

function Contact() {
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) setError("");
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setError("");
    setSubmitted(false);
    setLoading(true);

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        subject: formData.service,
        message: formData.message.trim(),
      };

      await api.post("/contact", payload);

      setSubmitted(true);
      setFormData(initialForm);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error("Contact form error:", err);

      const message =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Unable to submit your enquiry right now. Please try again.";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
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

        .contact-page {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          color: #10283d;
          overflow: hidden;
        }

        /* =========================================================
           HERO
        ========================================================= */

        .contact-hero {
          position: relative;
          width: 100%;
          min-height: 470px;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 130px 25px 80px;

          background:
            linear-gradient(
              135deg,
              #061725 0%,
              #102b40 52%,
              #182a36 100%
            );

          overflow: hidden;
        }

        .contact-hero::before {
          content: "";
          position: absolute;

          width: 520px;
          height: 520px;

          right: -210px;
          top: -250px;

          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .contact-hero::after {
          content: "";
          position: absolute;

          width: 380px;
          height: 380px;

          left: -210px;
          bottom: -210px;

          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .contact-hero-content {
          position: relative;
          z-index: 2;

          width: 100%;
          max-width: 900px;

          text-align: center;
        }

        .contact-hero-small {
          margin: 0 0 15px;

          color: rgba(255, 255, 255, 0.7);

          font-size: 12px;
          font-weight: 700;

          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .contact-hero-title {
          margin: 0 0 20px;

          color: #ffffff;

          font-size: clamp(42px, 6vw, 72px);

          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -1.5px;
        }

        .contact-hero-line {
          width: 65px;
          height: 3px;

          margin: 0 auto 22px;

          background: #ffffff;
          border-radius: 10px;
        }

        .contact-hero-description {
          max-width: 700px;

          margin: 0 auto;

          color: rgba(255, 255, 255, 0.76);

          font-size: 15px;
          line-height: 1.8;
        }

        /* =========================================================
           MAIN SECTION
        ========================================================= */

        .contact-main {
          width: 100%;

          padding: 80px 6% 90px;

          background:
            linear-gradient(
              180deg,
              #ffffff 0%,
              #f5f7f9 100%
            );
        }

        .contact-container {
          width: 100%;
          max-width: 1250px;

          margin: 0 auto;

          display: grid;

          grid-template-columns: 0.85fr 1.15fr;

          gap: 60px;

          align-items: start;
        }

        /* =========================================================
           LEFT INFORMATION
        ========================================================= */

        .contact-info {
          color: #10283d;
        }

        .contact-section-label {
          margin: 0 0 10px;

          color: #65717b;

          font-size: 12px;
          font-weight: 800;

          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .contact-info-title {
          margin: 0 0 18px;

          color: #09233a;

          font-size: clamp(30px, 3vw, 43px);

          font-weight: 800;
          line-height: 1.1;
        }

        .contact-info-line {
          width: 55px;
          height: 3px;

          margin-bottom: 22px;

          background: #09233a;
          border-radius: 10px;
        }

        .contact-info-description {
          margin: 0 0 35px;

          color: #59636d;

          font-size: 14px;
          line-height: 1.8;
        }

        /* =========================================================
           INFO CARDS
        ========================================================= */

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-info-card {
          display: flex;
          align-items: flex-start;

          gap: 16px;

          padding: 18px;

          background: #ffffff;

          border: 1px solid #e3e7ea;
          border-radius: 8px;

          box-shadow:
            0 8px 25px rgba(8, 28, 45, 0.06);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .contact-info-card:hover {
          transform: translateY(-4px);

          border-color: #cbd4da;

          box-shadow:
            0 14px 30px rgba(8, 28, 45, 0.1);
        }

        .contact-info-icon {
          flex-shrink: 0;

          width: 44px;
          height: 44px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #09233a;
          color: #ffffff;

          border-radius: 6px;
        }

        .contact-info-card h3 {
          margin: 0 0 5px;

          color: #09233a;

          font-size: 14px;
          font-weight: 800;
        }

        .contact-info-card p {
          margin: 0;

          color: #68737d;

          font-size: 12px;
          line-height: 1.6;
        }

        /* =========================================================
           FORM CARD
        ========================================================= */

        .contact-form-card {
          padding: 40px;

          background: #ffffff;

          border: 1px solid #e1e6ea;
          border-radius: 10px;

          box-shadow:
            0 18px 50px rgba(7, 28, 45, 0.1);
        }

        .contact-form-header {
          margin-bottom: 28px;
        }

        .contact-form-header h2 {
          margin: 0 0 8px;

          color: #09233a;

          font-size: 28px;
          font-weight: 800;
        }

        .contact-form-header p {
          margin: 0;

          color: #69747e;

          font-size: 13px;
          line-height: 1.6;
        }

        /* =========================================================
           FORM
        ========================================================= */

        .contact-form {
          width: 100%;
        }

        .form-row {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 18px;
        }

        .form-group {
          margin-bottom: 19px;
        }

        .form-group label {
          display: block;

          margin-bottom: 8px;

          color: #263746;

          font-size: 11px;
          font-weight: 800;

          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;

          padding: 13px 14px;

          background: #f8fafb;

          border: 1px solid #dce2e6;
          border-radius: 5px;

          outline: none;

          color: #1c2d3b;

          font-family: inherit;
          font-size: 13px;

          transition:
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .form-group input,
        .form-group select {
          height: 46px;
        }

        .form-group textarea {
          min-height: 135px;

          resize: vertical;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #9aa4ac;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          background: #ffffff;

          border-color: #09233a;

          box-shadow:
            0 0 0 3px rgba(9, 35, 58, 0.08);
        }

        /* =========================================================
           SUBMIT BUTTON
        ========================================================= */

        .contact-submit {
          width: 100%;

          min-height: 48px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          background: #09233a;
          color: #ffffff;

          border: 1px solid #09233a;
          border-radius: 5px;

          font-size: 12px;
          font-weight: 800;

          letter-spacing: 0.7px;

          cursor: pointer;

          transition:
            all 0.3s ease;
        }

        .contact-submit:hover:not(:disabled) {
          background: #ffffff;
          color: #09233a;

          transform: translateY(-2px);

          box-shadow:
            0 8px 20px rgba(9, 35, 58, 0.12);
        }

        .contact-submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
          transform: none;
        }

        .contact-submit svg {
          flex-shrink: 0;
        }

        .contact-loading-icon {
          animation: contactSpin 0.9s linear infinite;
        }

        @keyframes contactSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        /* =========================================================
           SUCCESS
        ========================================================= */

        .contact-success,
        .contact-error {
          margin-top: 18px;

          padding: 14px 16px;

          display: flex;
          align-items: flex-start;

          gap: 10px;

          border-radius: 5px;

          font-size: 12px;
          font-weight: 600;

          line-height: 1.5;
        }

        .contact-success {
          background: #f1f6f3;
          border: 1px solid #d3e2d9;
          color: #28583e;
        }

        .contact-error {
          background: #faf3f3;
          border: 1px solid #ead2d2;
          color: #873f3f;
        }

        .contact-success svg,
        .contact-error svg {
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* =========================================================
           WHY CONTACT US
        ========================================================= */

        .contact-benefits {
          width: 100%;

          padding: 75px 6%;

          background: #09233a;
        }

        .contact-benefits-container {
          width: 100%;
          max-width: 1150px;

          margin: 0 auto;
        }

        .contact-benefits-heading {
          max-width: 650px;

          margin: 0 auto 45px;

          text-align: center;
        }

        .contact-benefits-heading h2 {
          margin: 0 0 12px;

          color: #ffffff;

          font-size: clamp(28px, 4vw, 40px);
          font-weight: 800;
        }

        .contact-benefits-heading p {
          margin: 0;

          color: rgba(255, 255, 255, 0.68);

          font-size: 13px;
          line-height: 1.7;
        }

        .contact-benefit-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 20px;
        }

        .contact-benefit {
          padding: 28px 25px;

          background: rgba(255, 255, 255, 0.05);

          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 7px;

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .contact-benefit:hover {
          transform: translateY(-5px);

          background: rgba(255, 255, 255, 0.08);
        }

        .contact-benefit-number {
          margin-bottom: 17px;

          color: rgba(255, 255, 255, 0.45);

          font-size: 12px;
          font-weight: 800;

          letter-spacing: 2px;
        }

        .contact-benefit h3 {
          margin: 0 0 10px;

          color: #ffffff;

          font-size: 18px;
          font-weight: 800;
        }

        .contact-benefit p {
          margin: 0;

          color: rgba(255, 255, 255, 0.65);

          font-size: 12px;
          line-height: 1.7;
        }

        /* =========================================================
           FINAL CTA
        ========================================================= */

        .contact-cta {
          width: 100%;

          padding: 75px 6%;

          background: #f5f7f9;
        }

        .contact-cta-container {
          width: 100%;
          max-width: 950px;

          margin: 0 auto;

          padding: 50px 40px;

          text-align: center;

          background: #ffffff;

          border: 1px solid #e0e5e8;
          border-radius: 10px;

          box-shadow:
            0 15px 40px rgba(8, 28, 45, 0.07);
        }

        .contact-cta-icon {
          width: 55px;
          height: 55px;

          margin: 0 auto 18px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #09233a;
          color: #ffffff;

          border-radius: 50%;
        }

        .contact-cta h2 {
          margin: 0 0 12px;

          color: #09233a;

          font-size: clamp(26px, 4vw, 38px);
          font-weight: 800;
        }

        .contact-cta p {
          max-width: 650px;

          margin: 0 auto;

          color: #68737d;

          font-size: 13px;
          line-height: 1.8;
        }

        /* =========================================================
           1200px
        ========================================================= */

        @media (max-width: 1200px) {
          .contact-container {
            gap: 40px;
          }

          .contact-form-card {
            padding: 32px;
          }
        }

        /* =========================================================
           900px
        ========================================================= */

        @media (max-width: 900px) {
          .contact-hero {
            min-height: 430px;
            padding-top: 120px;
          }

          .contact-container {
            grid-template-columns: 1fr;

            max-width: 700px;

            gap: 45px;
          }

          .contact-info {
            text-align: center;
          }

          .contact-info-line {
            margin-left: auto;
            margin-right: auto;
          }

          .contact-info-description {
            max-width: 650px;

            margin-left: auto;
            margin-right: auto;
          }

          .contact-info-list {
            text-align: left;
          }

          .contact-benefit-grid {
            grid-template-columns:
              repeat(3, 1fr);
          }
        }

        /* =========================================================
           768px
        ========================================================= */

        @media (max-width: 768px) {
          .contact-hero {
            min-height: 390px;

            padding:
              115px 20px 65px;
          }

          .contact-hero-small {
            font-size: 10px;
            letter-spacing: 2px;
          }

          .contact-hero-title {
            font-size: 43px;
          }

          .contact-hero-description {
            font-size: 13px;
            line-height: 1.7;
          }

          .contact-main {
            padding:
              55px 20px 65px;
          }

          .contact-form-card {
            padding: 28px 24px;
          }

          .contact-benefits {
            padding:
              55px 20px;
          }

          .contact-benefit-grid {
            grid-template-columns: 1fr;
          }

          .contact-cta {
            padding:
              55px 20px;
          }

          .contact-cta-container {
            padding: 40px 25px;
          }
        }

        /* =========================================================
           600px
        ========================================================= */

        @media (max-width: 600px) {
          .contact-hero {
            min-height: 360px;

            padding:
              105px 17px 55px;
          }

          .contact-hero-title {
            font-size: 36px;
            letter-spacing: -0.7px;
          }

          .contact-hero-line {
            width: 50px;
            height: 2px;
            margin-bottom: 18px;
          }

          .contact-hero-description {
            font-size: 12px;
          }

          .contact-main {
            padding:
              45px 15px 55px;
          }

          .contact-info-title {
            font-size: 29px;
          }

          .contact-info-description {
            font-size: 12px;
          }

          .contact-info-card {
            padding: 15px;
            gap: 12px;
          }

          .contact-info-icon {
            width: 40px;
            height: 40px;
          }

          .contact-info-card h3 {
            font-size: 13px;
          }

          .contact-info-card p {
            font-size: 11px;
          }

          .contact-form-card {
            padding:
              25px 18px;
          }

          .contact-form-header h2 {
            font-size: 24px;
          }

          .contact-form-header p {
            font-size: 11px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .form-group {
            margin-bottom: 15px;
          }

          .form-group label {
            font-size: 9px;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            font-size: 12px;
          }

          .contact-benefits {
            padding:
              50px 15px;
          }

          .contact-benefits-heading {
            margin-bottom: 30px;
          }

          .contact-benefits-heading h2 {
            font-size: 27px;
          }

          .contact-benefit {
            padding: 23px 20px;
          }

          .contact-cta {
            padding:
              50px 15px;
          }

          .contact-cta-container {
            padding:
              35px 20px;
          }

          .contact-cta h2 {
            font-size: 26px;
          }

          .contact-cta p {
            font-size: 12px;
          }
        }

        /* =========================================================
           480px
        ========================================================= */

        @media (max-width: 480px) {
          .contact-hero {
            min-height: 330px;

            padding:
              100px 15px 45px;
          }

          .contact-hero-small {
            font-size: 8px;
            letter-spacing: 1.6px;
          }

          .contact-hero-title {
            font-size: 31px;
          }

          .contact-hero-description {
            font-size: 10px;
            line-height: 1.6;
          }

          .contact-info-title {
            font-size: 25px;
          }

          .contact-info-description {
            font-size: 11px;
          }

          .contact-form-card {
            padding:
              22px 15px;
          }

          .contact-form-header h2 {
            font-size: 21px;
          }

          .contact-submit {
            min-height: 44px;
            font-size: 10px;
          }

          .contact-success,
          .contact-error {
            font-size: 10px;
          }

          .contact-benefits-heading h2 {
            font-size: 24px;
          }

          .contact-benefit h3 {
            font-size: 16px;
          }

          .contact-benefit p {
            font-size: 10px;
          }

          .contact-cta-icon {
            width: 48px;
            height: 48px;
          }

          .contact-cta h2 {
            font-size: 23px;
          }
        }

        /* =========================================================
           360px
        ========================================================= */

        @media (max-width: 360px) {
          .contact-hero {
            min-height: 310px;
          }

          .contact-hero-title {
            font-size: 27px;
          }

          .contact-hero-description {
            font-size: 9px;
          }

          .contact-info-title {
            font-size: 22px;
          }

          .contact-info-card {
            padding: 12px;
          }

          .contact-info-icon {
            width: 36px;
            height: 36px;
          }

          .contact-info-card h3 {
            font-size: 11px;
          }

          .contact-info-card p {
            font-size: 9px;
          }

          .contact-form-card {
            padding:
              20px 12px;
          }

          .contact-cta-container {
            padding:
              30px 15px;
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
            transition: none !important;
            animation: none !important;
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

      <section className="contact-hero">
        <motion.div
          className="contact-hero-content"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <p className="contact-hero-small">
            LET'S BUILD YOUR SOLAR FUTURE
          </p>

          <h1 className="contact-hero-title">
            CONTACT US
          </h1>

          <div className="contact-hero-line"></div>

          <p className="contact-hero-description">
            Have questions about solar energy, installation,
            pricing or the right system for your property?
            Our team is ready to understand your requirements
            and help you take the next step toward clean energy.
          </p>
        </motion.div>
      </section>

      {/* =========================================================
          CONTACT MAIN
      ========================================================= */}

      <section className="contact-main">
        <div className="contact-container">

          {/* =====================================================
              CONTACT INFORMATION
          ===================================================== */}

          <motion.div
            className="contact-info"
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <p className="contact-section-label">
              GET IN TOUCH
            </p>

            <h2 className="contact-info-title">
              Let's Talk About
              <br />
              Your Solar Project
            </h2>

            <div className="contact-info-line"></div>

            <p className="contact-info-description">
              Whether you are planning a residential rooftop
              installation, a commercial solar project or an
              industrial solution, our team can help you
              understand the right approach for your energy needs.
            </p>

            <div className="contact-info-list">

              {/* PHONE */}

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <FiPhone size={19} />
                </div>

                <div>
                  <h3>
                    CALL US
                  </h3>

                  <p>
                    Speak with our solar consultants
                    for project-related enquiries.
                  </p>
                </div>
              </div>

              {/* EMAIL */}

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <FiMail size={19} />
                </div>

                <div>
                  <h3>
                    EMAIL US
                  </h3>

                  <p>
                    Send us your requirements and
                    our team will get back to you.
                  </p>
                </div>
              </div>

              {/* LOCATION */}

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <FiMapPin size={19} />
                </div>

                <div>
                  <h3>
                    OUR LOCATION
                  </h3>

                  <p>
                    Contact our team to know more
                    about our office and service locations.
                  </p>
                </div>
              </div>

              {/* WORKING HOURS */}

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <FiClock size={19} />
                </div>

                <div>
                  <h3>
                    WORKING HOURS
                  </h3>

                  <p>
                    Our team is available during
                    regular business hours for enquiries.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* =====================================================
              CONTACT FORM
          ===================================================== */}

          <motion.div
            className="contact-form-card"
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="contact-form-header">
              <h2>
                Send Us An Enquiry
              </h2>

              <p>
                Fill in your details below and tell us
                what you are looking for.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* NAME + EMAIL */}

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="contact-name">
                    Full Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    minLength={2}
                    maxLength={100}
                    autoComplete="name"
                    required
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    disabled={loading}
                  />
                </div>

              </div>

              {/* PHONE + SERVICE */}

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="contact-phone">
                    Phone Number
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    minLength={7}
                    maxLength={20}
                    autoComplete="tel"
                    required
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-service">
                    Solar Requirement
                  </label>

                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  >
                    <option value="">
                      Select a service
                    </option>

                    <option value="Residential Solar">
                      Residential Solar
                    </option>

                    <option value="Commercial Solar">
                      Commercial Solar
                    </option>

                    <option value="Industrial Solar">
                      Industrial Solar
                    </option>

                    <option value="On-Grid Solar">
                      On-Grid Solar
                    </option>

                    <option value="Off-Grid Solar">
                      Off-Grid Solar
                    </option>

                    <option value="Hybrid Solar">
                      Hybrid Solar
                    </option>

                    <option value="Battery Storage">
                      Battery Storage
                    </option>

                    <option value="Solar Monitoring">
                      Solar Monitoring
                    </option>

                    <option value="Other">
                      Other Enquiry
                    </option>
                  </select>
                </div>

              </div>

              {/* MESSAGE */}

              <div className="form-group">
                <label htmlFor="contact-message">
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, location, electricity requirements or any questions..."
                  minLength={10}
                  maxLength={5000}
                  required
                  disabled={loading}
                />
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="contact-submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span>
                      SUBMITTING...
                    </span>

                    <FiLoader
                      size={15}
                      className="contact-loading-icon"
                    />
                  </>
                ) : (
                  <>
                    <span>
                      SEND ENQUIRY
                    </span>

                    <FiSend size={15} />
                  </>
                )}
              </button>

              {/* SUCCESS */}

              {submitted && (
                <motion.div
                  className="contact-success"
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                >
                  <FiCheckCircle size={18} />

                  <span>
                    Thank you! Your enquiry has been submitted
                    successfully. Our team will get back to you soon.
                  </span>
                </motion.div>
              )}

              {/* ERROR */}

              {error && (
                <motion.div
                  className="contact-error"
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                >
                  <FiAlertCircle size={18} />

                  <span>
                    {error}
                  </span>
                </motion.div>
              )}

            </form>
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          WHY CONTACT US
      ========================================================= */}

      <section className="contact-benefits">
        <div className="contact-benefits-container">

          <motion.div
            className="contact-benefits-heading"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <h2>
              Why Talk To AVS?
            </h2>

            <p>
              We focus on understanding your requirements
              first and then recommending a solar solution
              that fits your property and energy goals.
            </p>
          </motion.div>

          <div className="contact-benefit-grid">

            {/* 01 */}

            <motion.div
              className="contact-benefit"
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <div className="contact-benefit-number">
                01
              </div>

              <h3>
                Expert Guidance
              </h3>

              <p>
                Get professional guidance to understand
                your solar requirements and available options.
              </p>
            </motion.div>

            {/* 02 */}

            <motion.div
              className="contact-benefit"
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
            >
              <div className="contact-benefit-number">
                02
              </div>

              <h3>
                Customized Solutions
              </h3>

              <p>
                Every project is different. We help you
                identify a system based on your specific needs.
              </p>
            </motion.div>

            {/* 03 */}

            <motion.div
              className="contact-benefit"
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
            >
              <div className="contact-benefit-number">
                03
              </div>

              <h3>
                Long-Term Support
              </h3>

              <p>
                Our relationship does not end after installation.
                We remain available for ongoing support.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="contact-cta">
        <motion.div
          className="contact-cta-container"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="contact-cta-icon">
            <FiSend size={22} />
          </div>

          <h2>
            Ready To Explore Solar?
          </h2>

          <p>
            Tell us about your energy requirements and
            let our team help you understand the right
            solar solution for your property.
          </p>
        </motion.div>
      </section>

      {/* =========================================================
          CHATBOX
      ========================================================= */}

      <ChatBox />

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <Footer />
    </div>
  );
}

export default Contact;