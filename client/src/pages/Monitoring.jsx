import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css/navigation";
import "swiper/css";
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

      {/* ================= HERO SECTION ================= */}
      <motion.section
        className="monitoring-hero"
        style={styles.hero}
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================= MONITORING SECTION ================= */}
      <section
        className="monitoring-section"
        style={styles.section}
      >
        <div
          className="monitoring-container"
          style={styles.container}
        >
          <motion.h2
            style={styles.heading}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Smart Monitoring Solutions
          </motion.h2>

          <motion.p
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

          {/* ================= SWIPER ================= */}
          <motion.div
            className="monitoring-swiper-wrapper"
            initial={{
              opacity: 0,
              scale: 0.95,
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
              navigation
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="monitoring-swiper"
            >
              {monitoring.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="monitoring-slide-image"
                    src={item.image}
                    alt={item.title}
                    style={styles.slideImage}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* ================= RESPONSIVE CSS ================= */}
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
            overflow-x: hidden;
          }

          /* ================= HERO ================= */

          .monitoring-hero {
            width: 100%;
            height: 100vh;
            min-height: 500px;
            overflow: hidden;
          }

          /* ================= SECTION ================= */

          .monitoring-section {
            width: 100%;
            overflow: hidden;
          }

          .monitoring-container {
            width: 100%;
          }

          /* ================= SWIPER ================= */

          .monitoring-swiper-wrapper {
            width: 100%;
            max-width: 1300px;
            margin: 0 auto;
            overflow: hidden;
            border-radius: 0;
          }

          .monitoring-swiper {
            width: 100%;
            overflow: hidden;
          }

          .monitoring-swiper .swiper-slide {
            width: 100%;
            overflow: hidden;
          }

          .monitoring-slide-image {
            width: 100%;
            display: block;
          }

          /* ================= NAVIGATION ================= */

          .monitoring-swiper .swiper-button-prev,
          .monitoring-swiper .swiper-button-next {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            margin-top: -24px;
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

          /* ================= PAGINATION ================= */

          .monitoring-swiper .swiper-pagination {
            bottom: 20px !important;
          }

          .monitoring-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            opacity: 0.8;
          }

          /* ================= TABLET ================= */

          @media (max-width: 1024px) {
            .monitoring-hero {
              height: 80vh;
              min-height: 500px;
            }

            .monitoring-section {
              padding: 70px 25px !important;
            }

            .monitoring-container {
              max-width: 100%;
            }

            .monitoring-swiper-wrapper {
              max-width: 100%;
            }

            .monitoring-slide-image {
              height: 75vh !important;
              min-height: 450px !important;
              max-height: 750px !important;
            }

            .monitoring-swiper .swiper-button-prev {
              left: 15px;
            }

            .monitoring-swiper .swiper-button-next {
              right: 15px;
            }
          }

          /* ================= MOBILE ================= */

          @media (max-width: 768px) {
            .monitoring-hero {
              height: 70vh;
              min-height: 430px;
            }

            .monitoring-section {
              padding: 60px 15px !important;
            }

            .monitoring-slide-image {
              width: 100% !important;
              height: 65vh !important;
              min-height: 400px !important;
              max-height: 650px !important;
              object-fit: cover !important;
              object-position: center !important;
            }

            .monitoring-swiper .swiper-button-prev,
            .monitoring-swiper .swiper-button-next {
              width: 40px;
              height: 40px;
              margin-top: -20px;
            }

            .monitoring-swiper .swiper-button-prev::after,
            .monitoring-swiper .swiper-button-next::after {
              font-size: 16px;
            }

            .monitoring-swiper .swiper-button-prev {
              left: 8px;
            }

            .monitoring-swiper .swiper-button-next {
              right: 8px;
            }

            .monitoring-swiper .swiper-pagination {
              bottom: 12px !important;
            }

            .monitoring-swiper .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
            }
          }

          /* ================= SMALL MOBILE ================= */

          @media (max-width: 480px) {
            .monitoring-hero {
              height: 65vh;
              min-height: 380px;
            }

            .monitoring-section {
              padding: 50px 10px !important;
            }

            .monitoring-slide-image {
              height: 58vh !important;
              min-height: 340px !important;
              max-height: 550px !important;
              object-fit: cover !important;
            }

            .monitoring-swiper .swiper-button-prev,
            .monitoring-swiper .swiper-button-next {
              width: 34px;
              height: 34px;
              margin-top: -17px;
            }

            .monitoring-swiper .swiper-button-prev::after,
            .monitoring-swiper .swiper-button-next::after {
              font-size: 14px;
            }

            .monitoring-swiper .swiper-button-prev {
              left: 6px;
            }

            .monitoring-swiper .swiper-button-next {
              right: 6px;
            }

            .monitoring-swiper .swiper-pagination {
              bottom: 8px !important;
            }

            .monitoring-swiper .swiper-pagination-bullet {
              width: 7px;
              height: 7px;
            }
          }

          /* ================= VERY SMALL PHONES ================= */

          @media (max-width: 360px) {
            .monitoring-hero {
              height: 60vh;
              min-height: 350px;
            }

            .monitoring-section {
              padding: 40px 8px !important;
            }

            .monitoring-slide-image {
              height: 55vh !important;
              min-height: 320px !important;
            }

            .monitoring-swiper .swiper-button-prev,
            .monitoring-swiper .swiper-button-next {
              width: 30px;
              height: 30px;
              margin-top: -15px;
            }

            .monitoring-swiper .swiper-button-prev::after,
            .monitoring-swiper .swiper-button-next::after {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  );
}

/* ============================================================
   RESPONSIVE STYLES
============================================================ */

const styles = {
  hero: {
    width: "100%",
    height: "100vh",
    minHeight: "500px",

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