import React from "react";
import { useNavigate } from "react-router-dom";
import { color, motion } from "framer-motion";
import Footer from "../components/Footer";
import learnVideo from "../assets/learnvideo.mp4";
import logoFile from "../assets/logo.png";

export default function Learn({ token, logout }) {
  const navigate = useNavigate();
  const isLoggedIn = !!token;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const courses = [
    {
      title: "WHY GO SOLAR?",
      description:
        "Going solar drastically cuts your monthly electricity bills and shields you from rising utility rates while significantly boosting your property value. By transitioning to clean, renewable sun energy, you actively reduce your carbon footprint and combat climate change. Government incentives, tax credits, and subsidies make the initial investment highly affordable, allowing systems to pay for themselves quickly. Ultimately, it offers long-term financial independence and a reliable, low-maintenance power source for decades to come.",
    },
    {
      title: "BENEFITS OF SOLAR ENERGY",
      description:
        "Going solar offers exceptional financial and environmental advantages by instantly slashing your monthly electricity bills and protecting you from rising utility tariff hikes. This smart investment significantly increases your property value and delivers a rapid return on investment, which is further accelerated by lucrative government subsidy schemes like the PM Surya Ghar Yojana. On an environmental level, switching to clean sun energy drastically shrinks your carbon footprint, reduces greenhouse gases, and conserves vital natural resources without producing air pollution. Furthermore, solar systems are highly durable, requiring minimal maintenance while providing reliable, long-term energy independence for twenty-five years or more.",
    },
    {
      title: "FINANCIAL BENEFITS",
      description:
        "Switching to solar energy delivers an immediate financial turnaround by drastically slashing monthly electricity bills and locking in free power for decades. This strategic investment protects property owners from unpredictable utility price hikes while significantly boosting the overall market value of the building. With lucrative government subsidies like the PM Surya Ghar Yojana lowering upfront installation costs, the system quickly pays for itself, paving the way for a high return on investment and long-term financial independence.",
    },
    {
      title: "ENVIRONMENT IMPACT",
      description:
        "Every solar panel installed represents a powerful stand against environmental degradation, actively replacing toxic coal energy with pure, infinite sunlight. By making the switch, you immediately cut down on the smog and particulate matter that trigger respiratory illnesses, creating localized pockets of cleaner, safer air. Solar arrays also prevent the destructive land mining and cross-country fuel transport that devastate wildlife habitats and trigger ecological crises. Choosing this silent, pollution-free power source acts as a continuous, daily investment in restoring the earth's natural climate balance.",
    },
  ];

  return (
    <div style={styles.landingPage}>
      {/* VIDEO BACKGROUND */}
      <video autoPlay muted loop playsInline style={styles.videoBg}>
        <source src={learnVideo} type="video/mp4" />
      </video>

      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>
          <img src={logoFile} alt="logo" style={styles.logoImage} />
          <span style={styles.logoText}>AVS SOLAR CONSULTANCY</span>
        </div>

        <div style={styles.navLinks}>
          <motion.button onClick={() => navigate("/")} style={styles.link}>
            HOME
          </motion.button>

          <motion.button onClick={() => navigate("/about")} style={styles.link}>
            About
          </motion.button>

          <motion.button onClick={() => navigate("/services")} style={styles.link}>
            Services
          </motion.button>

          <motion.button onClick={() => navigate("/team")} style={styles.link}>
            Our Team
          </motion.button>

          <motion.button onClick={() => navigate("/store")} style={styles.link}>
            Store
          </motion.button>
        </div>

        {isLoggedIn ? (
          <button onClick={handleLogout} style={styles.logoutBtn}>
            Log Out
          </button>
        ) : (
          <button onClick={() => navigate("/login")} style={styles.logInBtn}>
            Log In
          </button>
        )}
      </nav>

      {/* MAIN */}
      <div style={styles.container}>
        <div style={styles.cardContainer}>
          {courses.map((course, index) => (
            <motion.div
              key={index}
              style={styles.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
              }}
            >
              <h3 style={styles.cardTitle}>{course.title}</h3>
              <p style={styles.cardText}>{course.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}



/* STYLES */
const styles = {
  landingPage: {
    minHeight: "100vh",
    color: "white",
    position: "relative",
    overflow: "hidden",
  },

  videoBg: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
    filter: "brightness(40%)",
  },


  logo: { display: "flex", alignItems: "center" },

  logoImage: {
    height: "50px",
    objectFit: "contain",
  },

  logoText: {
    marginLeft: "12px",
    fontSize: "18px",
    fontWeight: "bold",
  },

navLinks: {
    display: "flex",
    gap: "20px",
  },

  link: {
    background: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600",
  },

  container: {
    minHeight: "100vh",
    padding: "100px 30px 60px",
    position: "relative",
    zIndex: 1,
  },

  hero: {
    textAlign: "center",
    marginBottom: "60px",
  },

  heading: {
    fontSize: "52px",
    fontWeight: "700",
    color:"yellow",
  },

  subtitle: {
    maxWidth: "800px",
    margin: "20px auto",
    fontSize: "18px",
    color: "#dcdcdc",
  },

  button: {
    marginTop: "20px",
    padding: "14px 30px",
    border: "none",
    borderRadius: "30px",
    background: "linear-gradient(135deg,#ffb703,#fb8500)",
    color: "white",
    cursor: "pointer",
  },

  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px",
  },

  card: {
    width: "1500px",
    backgroundColor: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    padding: "25px",
    borderRadius: "15px",
  },


  cardTitle: {
    color: "#efc24f",
    marginBottom: "8px",
  },

  cardText: {
  color: "#f1f1f1",
  lineHeight: "1.5",
  fontSize: "11px",
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

  navbar: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "5px 20px",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,

  background: "rgba(0, 0, 0, 0.65)", // black transparent
  backdropFilter: "blur(15px)",
  WebkitBackdropFilter: "blur(15px)",

  borderBottom: "1px solid rgba(255,255,255,0.1)",
  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
},
};