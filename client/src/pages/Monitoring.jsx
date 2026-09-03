import React from "react";
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
    desc: "Monitor your solar plant over Wi-Fi with secure and reliable real-time performance insights.",
  },
  {
    image: gsm,
    title: "GSM/GPRS Monitoring",
    desc: "Stay connected through GSM/GPRS networks and access your plant from virtually anywhere.",
  },
  {
    image: cloud,
    title: "Cloud-Based Monitoring",
    desc: "Secure cloud storage with real-time analytics and remote access from any device.",
  },
  {
    image: mobile,
    title: "Mobile App Monitoring",
    desc: "Track energy generation and system status directly from your smartphone.",
  },
  {
    image: scada,
    title: "SCADA Monitoring",
    desc: "Industrial-grade monitoring and control with advanced visualization and reporting.",
  },
  {
    image: centralized,
    title: "Centralized Monitoring",
    desc: "Manage multiple solar plants from one unified dashboard with complete visibility.",
  },
];

export default function Monitoring({ token, logout }) {
  return (
    <>
      <Navbar token={token} logout={logout} />

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <motion.section
        className="monitoring-hero"
        style={styles.hero}
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================================
          MONITORING SECTION
      ========================================================= */}
      <section
        className="monitoring-section"
        style={styles.section}
      >
        <div
          className="monitoring-container"
          style={styles.container}
        >
          {/* HEADING */}
          <motion.h2
            className="monitoring-heading"
            style={styles.heading}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Smart Monitoring Solutions
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            className="monitoring-subheading"
            style={styles.subHeading}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
          >
            Choose the monitoring solution that best fits your solar project.
          </motion.p>

          {/* =====================================================
              SWIPER
          ===================================================== */}
          <motion.div
            className="monitoring-swiper-wrapper"
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
          >
            <Swiper
              modules={[
                Autoplay,
                Pagination,
                Navigation,
              ]}
              slidesPerView={1}
              spaceBetween={0}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              className="monitoring-swiper"
            >
              {monitoring.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="monitoring-slide">
                    <img
                      className="monitoring-slide-image"
                      src={item.image}
                      alt={item.title}
                    />

                    {/* Mobile-only accessibility/content overlay */}
                    <div className="monitoring-mobile-info">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* =========================================================
          RESPONSIVE CSS
      ========================================================= */}
      <style>
        {`
          * {
            box-sizing: border-box;
          }

          html,
          body {
            margin: 0;
            padding: 0;
            width: 100%;
            overflow-x: hidden;
          }

          #root {
            width: 100%;
            min-height: 100%;
            overflow-x: hidden;
          }

          /* =====================================================
             HERO
          ===================================================== */

          .monitoring-hero {
            width: 100%;
            height: 100vh;
            min-height: 550px;
            overflow: hidden;
            transform-origin: center center;
          }

          /* =====================================================
             MAIN SECTION
          ===================================================== */

          .monitoring-section {
            width: 100%;
            overflow: hidden;
          }

          .monitoring-container {
            width: 100%;
          }

          /* =====================================================
             HEADING
          ===================================================== */

          .monitoring-heading {
            word-break: normal;
            overflow-wrap: break-word;
          }

          .monitoring-subheading {
            word-break: normal;
            overflow-wrap: break-word;
          }

          /* =====================================================
             SWIPER
          ===================================================== */

          .monitoring-swiper-wrapper {
            width: 100%;
            max-width: 1300px;
            margin: 0 auto;
            overflow: hidden;
            border-radius: 0;
            position: relative;
          }

          .monitoring-swiper {
            width: 100%;
            overflow: hidden;
          }

          .monitoring-swiper .swiper-wrapper {
            width: 100%;
          }

          .monitoring-swiper .swiper-slide {
            width: 100%;
            overflow: hidden;
            position: relative;
          }

          .monitoring-slide {
            width: 100%;
            position: relative;
            overflow: hidden;
          }

          .monitoring-slide-image {
            width: 100%;
            height: auto;
            min-height: 450px;
            max-height: 900px;
            object-fit: cover;
            object-position: center;
            display: block;
          }

          /* Hide mobile information on desktop */
          .monitoring-mobile-info {
            display: none;
          }

          /* =====================================================
             NAVIGATION BUTTONS
          ===================================================== */

          .monitoring-swiper .swiper-button-prev,
          .monitoring-swiper .swiper-button-next {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.55);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            margin-top: -24px;
            transition: all 0.3s ease;
            z-index: 10;
          }

          .monitoring-swiper .swiper-button-prev:hover,
          .monitoring-swiper .swiper-button-next:hover {
            background: rgba(0, 0, 0, 0.8);
            transform: scale(1.05);
          }

          .monitoring-swiper .swiper-button-prev::after,
          .monitoring-swiper .swiper-button-next::after {
            font-size: 20px;
            font-weight: 700;
          }

          .monitoring-swiper .swiper-button-prev {
            left: 20px;
          }

          .monitoring-swiper .swiper-button-next {
            right: 20px;
          }

          /* =====================================================
             PAGINATION
          ===================================================== */

          .monitoring-swiper .swiper-pagination {
            bottom: 20px !important;
            z-index: 20;
          }

          .monitoring-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            opacity: 0.8;
            transition: all 0.3s ease;
          }

          .monitoring-swiper .swiper-pagination-bullet-active {
            width: 24px;
            border-radius: 10px;
          }

          /* =====================================================
             LARGE TABLET
          ===================================================== */

          @media (max-width: 1200px) {

            .monitoring-section {
              padding-left: 25px !important;
              padding-right: 25px !important;
            }

            .monitoring-swiper-wrapper {
              max-width: 100%;
            }

            .monitoring-slide-image {
              min-height: 420px;
              max-height: 750px;
            }

            .monitoring-swiper .swiper-button-prev {
              left: 15px;
            }

            .monitoring-swiper .swiper-button-next {
              right: 15px;
            }
          }

          /* =====================================================
             TABLET
          ===================================================== */

          @media (max-width: 1024px) {

            .monitoring-hero {
              height: 78vh;
              min-height: 480px;
            }

            .monitoring-section {
              padding: 70px 20px !important;
            }

            .monitoring-heading {
              font-size: 38px !important;
              line-height: 1.2 !important;
              margin-bottom: 14px !important;
            }

            .monitoring-subheading {
              font-size: 18px !important;
              line-height: 1.55 !important;
              margin-bottom: 40px !important;
              max-width: 650px !important;
            }

            .monitoring-slide-image {
              width: 100%;
              height: 68vh !important;
              min-height: 420px !important;
              max-height: 700px !important;
              object-fit: cover !important;
              object-position: center !important;
            }

            .monitoring-swiper .swiper-button-prev,
            .monitoring-swiper .swiper-button-next {
              width: 44px;
              height: 44px;
              margin-top: -22px;
            }

            .monitoring-swiper .swiper-button-prev::after,
            .monitoring-swiper .swiper-button-next::after {
              font-size: 18px;
            }
          }

          /* =====================================================
             MOBILE - 768px
          ===================================================== */

          @media (max-width: 768px) {

            .monitoring-hero {
              width: 100%;
              height: 62vh;
              min-height: 390px;
              max-height: 650px;
            }

            .monitoring-section {
              padding: 55px 12px !important;
            }

            .monitoring-container {
              width: 100%;
              max-width: 100%;
            }

            .monitoring-heading {
              font-size: 30px !important;
              line-height: 1.2 !important;
              padding: 0 8px !important;
              margin-bottom: 12px !important;
            }

            .monitoring-subheading {
              font-size: 16px !important;
              line-height: 1.55 !important;
              padding: 0 8px !important;
              margin-bottom: 30px !important;
            }

            .monitoring-swiper-wrapper {
              width: 100%;
              margin: 0 auto;
              border-radius: 0;
            }

            .monitoring-slide {
              width: 100%;
              background: #ffffff;
            }

            .monitoring-slide-image {
              width: 100% !important;
              height: 52vh !important;
              min-height: 320px !important;
              max-height: 520px !important;
              object-fit: cover !important;
              object-position: center center !important;
            }

            /* Navigation buttons */
            .monitoring-swiper .swiper-button-prev,
            .monitoring-swiper .swiper-button-next {
              width: 38px;
              height: 38px;
              margin-top: -19px;
            }

            .monitoring-swiper .swiper-button-prev::after,
            .monitoring-swiper .swiper-button-next::after {
              font-size: 15px;
            }

            .monitoring-swiper .swiper-button-prev {
              left: 7px;
            }

            .monitoring-swiper .swiper-button-next {
              right: 7px;
            }

            /* Pagination */
            .monitoring-swiper .swiper-pagination {
              bottom: 10px !important;
            }

            .monitoring-swiper .swiper-pagination-bullet {
              width: 7px;
              height: 7px;
            }

            .monitoring-swiper .swiper-pagination-bullet-active {
              width: 18px;
            }

            /* Mobile information */
            .monitoring-mobile-info {
              display: block;
              padding: 20px 18px 24px;
              background: #ffffff;
              text-align: center;
            }

            .monitoring-mobile-info h3 {
              margin: 0 0 8px;
              font-size: 20px;
              line-height: 1.3;
              color: #222222;
              font-weight: 700;
            }

            .monitoring-mobile-info p {
              margin: 0;
              font-size: 14px;
              line-height: 1.6;
              color: #555555;
            }
          }

          /* =====================================================
             SMALL MOBILE - 600px
          ===================================================== */

          @media (max-width: 600px) {

            .monitoring-hero {
              height: 58vh;
              min-height: 360px;
              max-height: 560px;
            }

            .monitoring-section {
              padding: 48px 10px !important;
            }

            .monitoring-heading {
              font-size: 27px !important;
              line-height: 1.2 !important;
              padding: 0 5px !important;
            }

            .monitoring-subheading {
              font-size: 15px !important;
              line-height: 1.55 !important;
              padding: 0 5px !important;
              margin-bottom: 25px !important;
            }

            .monitoring-slide-image {
              height: 48vh !important;
              min-height: 290px !important;
              max-height: 460px !important;
            }

            .monitoring-mobile-info {
              padding: 18px 15px 22px;
            }

            .monitoring-mobile-info h3 {
              font-size: 18px;
            }

            .monitoring-mobile-info p {
              font-size: 13.5px;
              line-height: 1.55;
            }

            .monitoring-swiper .swiper-button-prev,
            .monitoring-swiper .swiper-button-next {
              width: 34px;
              height: 34px;
              margin-top: -17px;
            }

            .monitoring-swiper .swiper-button-prev::after,
            .monitoring-swiper .swiper-button-next::after {
              font-size: 13px;
            }

            .monitoring-swiper .swiper-button-prev {
              left: 5px;
            }

            .monitoring-swiper .swiper-button-next {
              right: 5px;
            }
          }

          /* =====================================================
             VERY SMALL MOBILE - 480px
          ===================================================== */

          @media (max-width: 480px) {

            .monitoring-hero {
              height: 54vh;
              min-height: 320px;
              max-height: 500px;
            }

            .monitoring-section {
              padding: 42px 8px !important;
            }

            .monitoring-heading {
              font-size: 24px !important;
              line-height: 1.25 !important;
              padding: 0 !important;
              margin-bottom: 10px !important;
            }

            .monitoring-subheading {
              font-size: 14px !important;
              line-height: 1.55 !important;
              padding: 0 !important;
              margin-bottom: 22px !important;
            }

            .monitoring-slide-image {
              height: 44vh !important;
              min-height: 260px !important;
              max-height: 400px !important;
            }

            .monitoring-mobile-info {
              padding: 16px 13px 20px;
            }

            .monitoring-mobile-info h3 {
              font-size: 17px;
              line-height: 1.3;
              margin-bottom: 7px;
            }

            .monitoring-mobile-info p {
              font-size: 13px;
              line-height: 1.55;
            }

            .monitoring-swiper .swiper-button-prev,
            .monitoring-swiper .swiper-button-next {
              width: 31px;
              height: 31px;
              margin-top: -15.5px;
            }

            .monitoring-swiper .swiper-button-prev::after,
            .monitoring-swiper .swiper-button-next::after {
              font-size: 12px;
            }

            .monitoring-swiper .swiper-button-prev {
              left: 4px;
            }

            .monitoring-swiper .swiper-button-next {
              right: 4px;
            }

            .monitoring-swiper .swiper-pagination {
              bottom: 8px !important;
            }

            .monitoring-swiper .swiper-pagination-bullet {
              width: 6px;
              height: 6px;
            }

            .monitoring-swiper .swiper-pagination-bullet-active {
              width: 16px;
            }
          }

          /* =====================================================
             EXTRA SMALL PHONES - 360px
          ===================================================== */

          @media (max-width: 360px) {

            .monitoring-hero {
              height: 50vh;
              min-height: 290px;
              max-height: 450px;
            }

            .monitoring-section {
              padding: 35px 6px !important;
            }

            .monitoring-heading {
              font-size: 22px !important;
            }

            .monitoring-subheading {
              font-size: 13px !important;
              line-height: 1.5 !important;
              margin-bottom: 20px !important;
            }

            .monitoring-slide-image {
              height: 40vh !important;
              min-height: 230px !important;
              max-height: 350px !important;
            }

            .monitoring-mobile-info {
              padding: 14px 11px 18px;
            }

            .monitoring-mobile-info h3 {
              font-size: 16px;
            }

            .monitoring-mobile-info p {
              font-size: 12px;
            }

            .monitoring-swiper .swiper-button-prev,
            .monitoring-swiper .swiper-button-next {
              width: 28px;
              height: 28px;
              margin-top: -14px;
            }

            .monitoring-swiper .swiper-button-prev::after,
            .monitoring-swiper .swiper-button-next::after {
              font-size: 11px;
            }
          }

          /* =====================================================
             LANDSCAPE MOBILE
          ===================================================== */

          @media (max-width: 900px) and (orientation: landscape) {

            .monitoring-hero {
              height: 100vh;
              min-height: 320px;
            }

            .monitoring-slide-image {
              height: 100vh !important;
              min-height: 300px !important;
              max-height: 600px !important;
            }

            .monitoring-section {
              padding-top: 45px !important;
              padding-bottom: 45px !important;
            }
          }

          /* =====================================================
             REDUCED MOTION
          ===================================================== */

          @media (prefers-reduced-motion: reduce) {

            .monitoring-hero {
              animation: none !important;
              transform: none !important;
            }

            .monitoring-swiper .swiper-button-prev,
            .monitoring-swiper .swiper-button-next {
              transition: none !important;
            }
          }
        `}
      </style>
    </>
  );
}

/* =============================================================
   INLINE STYLES
============================================================= */

const styles = {
  hero: {
    width: "100%",
    height: "100vh",
    minHeight: "550px",

    margin: "0 auto",

    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",

    overflow: "hidden",
  },

  slideImage: {
    width: "100%",
    height: "100vh",

    minHeight: "450px",
    maxHeight: "900px",

    objectFit: "cover",
    objectPosition: "center",

    borderRadius: "0px",

    display: "block",
  },

  section: {
    width: "100%",

    padding: "90px 20px",

    backgroundImage: `url(${sectionBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    boxSizing: "border-box",

    overflow: "hidden",
  },

  container: {
    width: "100%",
    maxWidth: "1300px",

    margin: "0 auto",

    boxSizing: "border-box",
  },

  small: {
    color: "#0d6efd",
    letterSpacing: "2px",
    fontWeight: "600",
    marginBottom: "10px",
    textAlign: "center",
  },

  heading: {
    fontSize: "clamp(30px, 5vw, 45px)",

    lineHeight: "1.2",

    marginBottom: "15px",

    color: "#222",

    textAlign: "center",

    padding: "0 10px",

    boxSizing: "border-box",
  },

  subHeading: {
    color: "#2c2929",

    fontSize: "clamp(16px, 2vw, 20px)",

    lineHeight: "1.6",

    marginBottom: "50px",

    maxWidth: "650px",

    margin: "0 auto 50px",

    textAlign: "center",

    padding: "0 10px",

    boxSizing: "border-box",
  },

  image: {
    width: "100%",
    height: "220px",

    objectFit: "cover",

    display: "block",
  },
};