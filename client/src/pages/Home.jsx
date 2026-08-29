import React, { useState } from "react";
import heroVideo from "../assets/solar-video.mp4";
import logoFile from "../assets/newlogo.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import imagess from "../assets/home1.jpg";
import home2 from "../assets/Home2.jpg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/home5.jpg";
import home5 from "../assets/home5.jpg";
import home6 from "../assets/home6.jpg";
import home7 from "../assets/home7.jpg";
import afterimg from "../assets/images (4).jpg";
import jourvideo from "../assets/journeyvid.mp4";
import ChatBox from "../components/ChatBox";
import bgSolarr from "../assets/cardd1.jpg";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Home({ token, logout }) {
  const navigate = useNavigate();
  const [showMounts, setShowMounts] = useState(false);
  const isLoggedIn = !!token;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={styles.landingPage}>
      {/* ================= RESPONSIVE CSS ================= */}
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

        img,
        video {
          max-width: 100%;
        }

        /* ================================
           TABLET
        ================================= */

        @media (max-width: 1024px) {
          .hero-section {
            height: 100vh !important;
            min-height: 650px !important;
          }

          .hero-content {
            width: 100% !important;
            max-width: 850px !important;
            padding: 0 30px !important;
          }

          .hero-title {
            font-size: 45px !important;
          }

          .hero-subtitle {
            font-size: 16px !important;
          }

          .journey-hero {
            padding: 70px 35px 40px !important;
          }

          .journey-heading {
            font-size: 45px !important;
          }

          .journey-description {
            font-size: 15px !important;
            line-height: 1.7 !important;
          }

          .solar-card {
            width: 92% !important;
            height: 65vh !important;
            min-height: 500px !important;
          }

          .solar-card-content {
            width: 60% !important;
            margin-left: 25px !important;
            padding: 30px !important;
          }

          .solar-card-title {
            font-size: 28px !important;
          }

          .solar-card-text {
            font-size: 15px !important;
          }
        }

        /* ================================
           MOBILE
        ================================= */

        @media (max-width: 768px) {

          body {
            overflow-x: hidden !important;
          }

          /* HERO */

          .hero-section {
            height: 100svh !important;
            min-height: 600px !important;
            width: 100% !important;
          }

          .hero-content {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 18px !important;
          }

          .hero-title {
            font-size: clamp(31px, 9vw, 42px) !important;
            line-height: 1.15 !important;
            letter-spacing: -0.5px !important;
            margin-bottom: 18px !important;
          }

          .hero-subtitle {
            font-size: 14px !important;
            line-height: 1.55 !important;
            padding: 0 !important;
            margin-bottom: 28px !important;
          }

          .learn-more-btn {
            padding: 12px 30px !important;
            font-size: 14px !important;
          }

          /* JOURNEY */

          .journey-hero {
            padding: 55px 18px 30px !important;
            width: 100% !important;
          }

          .journey-heading {
            font-size: clamp(28px, 8vw, 38px) !important;
            line-height: 1.2 !important;
            margin-bottom: 15px !important;
          }

          .heading-line {
            width: 80px !important;
            height: 3px !important;
            margin: 0 auto 20px auto !important;
          }

          .journey-description {
            font-size: 14px !important;
            line-height: 1.7 !important;
            padding: 0 !important;
            margin-bottom: 20px !important;
            text-align: justify !important;
          }

          /* BACKGROUND SECTION */

          .solar-background {
            padding: 1px 0 !important;
            width: 100% !important;
            background-attachment: scroll !important;
          }

          /* SOLAR IMAGE CARDS */

          .solar-card {
            width: calc(100% - 24px) !important;
            height: auto !important;
            min-height: 500px !important;
            margin: 20px auto !important;
            border-radius: 18px !important;
            overflow: hidden !important;
          }

          .solar-card-image {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
          }

          .solar-card-overlay {
            background:
              linear-gradient(
                to top,
                rgba(0, 0, 0, 0.93) 0%,
                rgba(0, 0, 0, 0.72) 40%,
                rgba(0, 0, 0, 0.18) 100%
              ) !important;
          }

          .solar-card-content {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 25px 20px !important;
            margin-bottom: 0 !important;
            align-self: flex-end !important;
          }

          .solar-card-title {
            font-size: 24px !important;
            line-height: 1.2 !important;
            margin-bottom: 14px !important;
          }

          .solar-card-text {
            font-size: 14px !important;
            line-height: 1.65 !important;
            max-width: 100% !important;
          }
        }

        /* ================================
           SMALL MOBILE
        ================================= */

        @media (max-width: 480px) {

          .hero-section {
            min-height: 580px !important;
          }

          .hero-content {
            padding: 0 15px !important;
          }

          .hero-title {
            font-size: 31px !important;
            line-height: 1.15 !important;
          }

          .hero-subtitle {
            font-size: 13px !important;
            line-height: 1.55 !important;
          }

          .learn-more-btn {
            padding: 11px 27px !important;
            font-size: 13px !important;
          }

          .journey-hero {
            padding: 45px 15px 25px !important;
          }

          .journey-heading {
            font-size: 28px !important;
          }

          .journey-description {
            font-size: 13px !important;
            line-height: 1.65 !important;
            text-align: justify !important;
          }

          .solar-card {
            width: calc(100% - 20px) !important;
            min-height: 480px !important;
            margin: 15px auto !important;
            border-radius: 15px !important;
          }

          .solar-card-content {
            padding: 22px 17px !important;
          }

          .solar-card-title {
            font-size: 21px !important;
            line-height: 1.25 !important;
          }

          .solar-card-text {
            font-size: 13px !important;
            line-height: 1.6 !important;
          }
        }

        /* ================================
           VERY SMALL DEVICES
        ================================= */

        @media (max-width: 360px) {

          .hero-title {
            font-size: 28px !important;
          }

          .hero-subtitle {
            font-size: 12px !important;
          }

          .journey-heading {
            font-size: 25px !important;
          }

          .journey-description {
            font-size: 12px !important;
          }

          .solar-card {
            min-height: 450px !important;
          }

          .solar-card-title {
            font-size: 19px !important;
          }

          .solar-card-text {
            font-size: 12px !important;
          }
        }
      `}</style>

      <Navbar token={token} logout={logout} />

      {/* ================= HERO SECTION ================= */}

      <div
        className="hero-section"
        style={styles.heroSection}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={styles.videoBackground}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div style={styles.overlay}></div>

        <motion.div
          className="hero-content"
          style={styles.heroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="hero-title"
            style={styles.mainTitle}
          >
            Join our solar <br />
            solution journey with us.
          </h1>

          <p
            className="hero-subtitle"
            style={styles.subtitle}
          >
            <i>
              Powering India's sustainable future with premium solar energy
              solutions.
              <br />
              We specialize in residential, commercial, and industrial solar
              installations, delivering excellence from consultancy to
              commissioning.
            </i>
          </p>

          <motion.button
            className="learn-more-btn"
            style={styles.learnMoreBtn}
            onClick={() => navigate("/learn")}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* ================= SOLAR JOURNEY SECTION ================= */}

      <section
        className="journey-hero"
        style={styles.journeyHero}
      >
        <motion.h2
          className="journey-heading"
          style={styles.journeyHeading}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <i>Our Solar Solution Journey</i>
        </motion.h2>

        <div
          className="heading-line"
          style={styles.headingLine}
        ></div>

        <p
          className="journey-description"
          style={styles.journeySubHeading}
        >
          Transitioning to green energy is made simple through a seamless
          7-step process managed entirely by AVS Solar Consultancy. The journey
          begins with a precise energy audit and custom roof layout design
          tailored specifically to your property's monthly consumption needs.
          Next, their team handles all complex government subsidy applications
          and legal permits while sourcing premium, top-tier equipment.
          Professional engineers then execute a safe installation and
          coordinate with local authorities for regulatory testing and final
          net-metering connection. Once activated, the system delivers
          immediate financial savings, backed by AVS Solar Consultancy's
          continuous monitoring and long-term support.
        </p>
      </section>

      {/* ================= SOLAR CARDS BACKGROUND ================= */}

      <div
        className="solar-background"
        style={{
          backgroundImage: `url(${bgSolarr})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          padding: "1px 0",
        }}
      >

        {/* ================= FREE CONSULTATION ================= */}

        <section
          className="solar-card"
          style={styles.heroImageSection}
        >
          <motion.img
            className="solar-card-image"
            src={imagess}
            alt="On Grid Solar"
            style={styles.heroImage}
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div
            className="solar-card-overlay"
            style={styles.darkOverlay}
          ></div>

          <motion.div
            className="solar-card-content"
            style={styles.textOverlay}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2
              className="solar-card-title"
              style={styles.infoTitle}
            >
              FREE CONSULTATION
            </h2>

            <p
              className="solar-card-text"
              style={styles.infoText}
            >
              Getting professional advice ensures your system is optimized
              for net metering and helps you secure necessary government
              incentives. In Punjab, homeowners who install rooftop solar can
              receive central financial assistance and state incentives
              through the PM Surya Ghar scheme, which can subsidize costs
              significantly.
            </p>
          </motion.div>
        </section>

        {/* ================= SITE SURVEY ================= */}

        <section
          className="solar-card"
          style={styles.heroImageSection}
        >
          <motion.img
            className="solar-card-image"
            src={home2}
            alt="On Grid Solar"
            style={styles.heroImage}
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div
            className="solar-card-overlay"
            style={styles.darkOverlay}
          ></div>

          <motion.div
            className="solar-card-content"
            style={styles.textOverlay}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2
              className="solar-card-title"
              style={styles.infoTitle}
            >
              SITE SURVEY
            </h2>

            <p
              className="solar-card-text"
              style={styles.infoText}
            >
              A professional AVS Solar site survey evaluates your roof's
              structure, orientation, and shadow patterns to maximize energy
              generation. Certified engineers measure available space and test
              structural weight capacity to ensure absolute safety. They also
              inspect your property’s electrical grid, meter, and wiring layout
              to design a secure, compliant installation blueprint. This
              critical physical check guarantees your solar system delivers
              peak power output with zero structural risks.
            </p>
          </motion.div>
        </section>

        {/* ================= CUSTOM SOLAR DESIGN ================= */}

        <section
          className="solar-card"
          style={styles.heroImageSection}
        >
          <motion.img
            className="solar-card-image"
            src={home3}
            alt="On Grid Solar"
            style={styles.heroImage}
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div
            className="solar-card-overlay"
            style={styles.darkOverlay}
          ></div>

          <motion.div
            className="solar-card-content"
            style={styles.textOverlay}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2
              className="solar-card-title"
              style={styles.infoTitle}
            >
              CUSTOM SOLAR DESIGN
            </h2>

            <p
              className="solar-card-text"
              style={styles.infoText}
            >
              An AVS Solar custom design maximizes your energy yield by
              tailoring the installation blueprint to your property's unique
              characteristics. Engineers use site survey data to optimize
              panel placement, tilt angles, and electrical routing, bypassing
              shadows from trees or nearby structures. This precise engineering
              ensures maximum sun exposure, seamless architectural integration,
              and peak power output for your specific energy needs.
            </p>
          </motion.div>
        </section>

        {/* ================= QUOTATION AND APPROVAL ================= */}

        <section
          className="solar-card"
          style={styles.heroImageSection}
        >
          <motion.img
            className="solar-card-image"
            src={home4}
            alt="On Grid Solar"
            style={styles.heroImage}
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div
            className="solar-card-overlay"
            style={styles.darkOverlay}
          ></div>

          <motion.div
            className="solar-card-content"
            style={styles.textOverlay}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2
              className="solar-card-title"
              style={styles.infoTitle}
            >
              QUOTATION AND APPROVAL
            </h2>

            <p
              className="solar-card-text"
              style={styles.infoText}
            >
              An AVS Solar quotation provides a transparent, itemized cost
              breakdown of your customized solar system, detailing component
              costs, warranties, and guaranteed government subsidy deductions.
              Once you review and accept the financial proposal, the team
              manages all engineering paperwork and submits your documentation
              to local discoms for immediate regulatory approval.
            </p>
          </motion.div>
        </section>

        {/* ================= INSTALLATION ================= */}

        <section
          className="solar-card"
          style={styles.heroImageSection}
        >
          <motion.img
            className="solar-card-image"
            src={home5}
            alt="On Grid Solar"
            style={styles.heroImage}
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div
            className="solar-card-overlay"
            style={styles.darkOverlay}
          ></div>

          <motion.div
            className="solar-card-content"
            style={styles.textOverlay}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2
              className="solar-card-title"
              style={styles.infoTitle}
            >
              INSTALLATION
            </h2>

            <p
              className="solar-card-text"
              style={styles.infoText}
            >
              Following design approval, certified technicians execute the
              physical installation by securely mounting the aluminum
              structures, aligning the solar panels, and integrating the
              inverter. The team completes all DC/AC wiring with robust
              earthing and surge protection to ensure maximum operational
              safety and system durability.
            </p>
          </motion.div>
        </section>

        {/* ================= NET METERING ================= */}

        <section
          className="solar-card"
          style={styles.heroImageSection}
        >
          <motion.img
            className="solar-card-image"
            src={home6}
            alt="On Grid Solar"
            style={styles.heroImage}
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div
            className="solar-card-overlay"
            style={styles.darkOverlay}
          ></div>

          <motion.div
            className="solar-card-content"
            style={styles.textOverlay}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2
              className="solar-card-title"
              style={styles.infoTitle}
            >
              NET METERING
            </h2>

            <p
              className="solar-card-text"
              style={styles.infoText}
            >
              Net metering connects your solar system to the local utility
              grid through a specialized bi-directional meter that tracks
              energy flow. When your panels generate surplus electricity during
              peak sunny hours, this excess power is fed into the grid,
              automatically spinning your meter backward and earning you energy
              credits.
            </p>
          </motion.div>
        </section>

        {/* ================= AFTER SALES SUPPORT ================= */}

        <section
          className="solar-card"
          style={styles.heroImageSection}
        >
          <motion.img
            className="solar-card-image"
            src={home7}
            alt="On Grid Solar"
            style={styles.heroImage}
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div
            className="solar-card-overlay"
            style={styles.darkOverlay}
          ></div>

          <motion.div
            className="solar-card-content"
            style={styles.textOverlay}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2
              className="solar-card-title"
              style={styles.infoTitle}
            >
              AFTER-SALES SUPPORT
            </h2>

            <p
              className="solar-card-text"
              style={styles.infoText}
            >
              AVS Solar after-sales support ensures your system maintains peak
              performance through proactive real-time performance monitoring,
              scheduled preventive maintenance, and rapid troubleshooting.
              Dedicated service teams handle routine panel cleaning,
              electrical safety audits, and seamless processing of component
              warranties for inverters and modules
            </p>
          </motion.div>
        </section>
      </div>

      <Footer />

      <ChatBox />
    </div>
  );
}

const styles = {
  landingPage: {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    margin: 0,
    padding: 0,
    minHeight: "100vh",
    color: "yellow",
    overflowX: "hidden",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },

  logo: {
    display: "flex",
    alignItems: "center",
  },

  logoImage: {
    height: "60px",
    width: "auto",
    objectFit: "contain",
  },

  logoText: {
    marginLeft: "12px",
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "2px",
    color: "white",
  },

  navLinks: {
    display: "flex",
    gap: "20px",
  },

  link: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
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

  heroSection: {
    position: "relative",
    height: "100vh",
    minHeight: "650px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    overflow: "hidden",
    backgroundColor: "#000",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.65))",
    zIndex: 1,
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    maxWidth: "900px",
    padding: "0 20px",
  },

  mainTitle: {
    fontSize: "52px",
    fontWeight: "700",
    lineHeight: "1.2",
    marginBottom: "24px",
    letterSpacing: "-1px",
    color: "#d1b55a",
  },

  subtitle: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "40px",
    opacity: 0.9,
    fontWeight: "300",
    color: "#fff",
  },

  learnMoreBtn: {
    backgroundColor: "#d7b152",
    color: "#0A284F",
    border: "none",
    padding: "14px 40px",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  },

  videoBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },

  cardImage: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
  },

  cardContent: {
    padding: "25px",
    textAlign: "center",
  },

  cardTitle: {
    fontSize: "30px",
    fontWeight: "700",
    color: "#7CFC00",
    marginBottom: "15px",
  },

  cardText: {
    color: "#e5e7eb",
    fontSize: "18px",
    lineHeight: "1.7",
    minHeight: "80px",
  },

  journeySection: {
    padding: "100px 60px",
    background:
      "linear-gradient(135deg, #02162b 0%, #0a3d75 100%)",
    textAlign: "center",
  },

  journeyHero: {
    padding: "80px 60px 40px",
    background:
      "linear-gradient(135deg, #02162b 0%, #0a3d75 100%)",
    textAlign: "center",
  },

  journeyHeading: {
    fontSize: "56px",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "10px",
    textAlign: "center",
  },

  headingLine: {
    width: "120px",
    height: "4px",
    background: "#4db8ff",
    margin: "0 auto 25px auto",
    borderRadius: "10px",
  },

  journeySubHeading: {
    fontSize: "15px",
    color: "#dbeafe",
    marginBottom: "60px",
    textAlign: "center",
    lineHeight: "1.7",
  },

  stepContainer: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "30px",
    maxWidth: "1400px",
    margin: "0 auto",
  },

  stepCard: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "15px",
    height: "400px",
    cursor: "pointer",
  },

  cardOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2))",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    textAlign: "center",
    padding: "30px",
  },

  overlayTitle: {
    color: "#a3e635",
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "15px",
  },

  overlayText: {
    color: "#fff",
    fontSize: "20px",
    lineHeight: "1.7",
    marginBottom: "25px",
    maxWidth: "90%",
  },

  overlayBtn: {
    background: "#ff9800",
    color: "#fff",
    border: "none",
    borderRadius: "30px",
    padding: "14px 35px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },

  exploreBtn: {
    marginTop: "15px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "25px",
    background: "#ff9800",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
  },

  cardsSection: {
    position: "relative",
    overflow: "hidden",
    padding: "40px 60px 100px",
    background: "#02162b",
  },

  cardsVideoBg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },

  cardsOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(rgba(2,22,43,0.85), rgba(2,22,43,0.92))",
    zIndex: 1,
  },

  heroImageSection: {
    position: "relative",
    width: "95%",
    height: "85vh",
    minHeight: "550px",
    margin: "40px auto",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
    borderRadius: "25px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
  },

  heroImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  darkOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2))",
    zIndex: 1,
  },

  textOverlay: {
    position: "relative",
    zIndex: 2,
    color: "#fff",
    width: "50%",
    marginRight: "auto",
    marginLeft: "60px",
    textAlign: "left",
    padding: "40px",
    marginBottom: "30px",
  },

  infoTitle: {
    fontSize: "30px",
    fontWeight: "500",
    marginBottom: "20px",
    color: "#c9b90c",
    textAlign: "left",
  },

  infoText: {
    fontSize: "15px",
    lineHeight: "1.5",
    color: "#a5bacf",
    textAlign: "left",
    maxWidth: "500px",
  },

  infoSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "60px",
    padding: "100px 80px",
  },

  journeyImage: {
    width: "100%",
    maxWidth: "650px",
    height: "450px",
    objectFit: "cover",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },

  journeyImageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  contentContainer: {
    flex: 1,
  },

  infoList: {
    color: "#fff",
    fontSize: "18px",
    lineHeight: "2",
    listStyle: "none",
    padding: 0,
  },

  dropdown: {
    position: "relative",
  },

  dropdownMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    background: "rgba(0,0,0,0.9)",
    backdropFilter: "blur(10px)",
    borderRadius: "8px",
    minWidth: "180px",
    marginTop: "1px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    zIndex: 999,
  },

  dropdownItem: {
    display: "block",
    width: "100%",
    padding: "15px 18px",
    background: "transparent",
    border: "none",
    color: "#fff",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "15px",
    transition: "0.3s",
  },
};