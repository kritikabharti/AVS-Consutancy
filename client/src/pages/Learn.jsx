import React from "react";
import { useNavigate } from "react-router-dom";
import { color, motion } from "framer-motion";
import Footer from "../components/Footer";
import learnVideo from "../assets/learnvideo.mp4";
import logoFile from "../assets/newlogo.png";
import longiLogo from "../assets/adnibrand.png";
import canadianLogo from "../assets/aikobrand.png";
import jaLogo from "../assets/axitecbrand.png";
import jinkoLogo from "../assets/goldibrand.png";
import trinaLogo from "../assets/vikrambrand.png";
import solarry from "../assets/panels.jpg";
import polycab from "../assets/Polycab.png";
import havels from "../assets/Havells.png";
import goodwe from "../assets/goodwe.png";
import pvblink from "../assets/pvblink.png";  
import obit from "../assets/obit.png";
import inverters from "../assets/inverters.webp";
import  batteries  from "../assets/batt.jpg";
import grace from "../assets/grace.png";
import evault from "../assets/evault.png";
import voult  from "../assets/voltra.png";
import luminous from "../assets/luminous.png";
import  involtcis from "../assets/involtcis.png";




export default function Learn({ token, logout }) {
  const navigate = useNavigate();
  const isLoggedIn = !!token;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={styles.landingPage}
    >
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

      {/* Hero Section */}
              <section
        style={{
          ...styles.heroSection,
         
        }}

      >
        <motion.div
          style={styles.heroContent}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.p
            style={styles.heroTag}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            
          </motion.p>


          <motion.h1
            style={styles.heroHeading}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            KNOW
            <br />
            <span style={{ color: "#ffb703" }}>
              MORE
            </span>{" "}        
          </motion.h1>
      
          <motion.p
            style={styles.heroText}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
             AVS Solar Consultancy empowers homeowners and businesses to transition seamlessly to clean energy through a comprehensive, end-to-end service model. From your initial free financial consultation and precise engineering site survey to custom 3D system design, net-metering integration, and dedicated lifetime after-sales support, every step is managed by certified solar experts.
          </motion.p>
      
        </motion.div>
      </section>




<motion.section
  style={{
    ...styles.brandSection,
    ...styles.infoSectionReverse,
    backgroundImage: `linear-gradient(
      rgba(0,0,0,0.65),
      rgba(0,0,0,0.65)
    ), url(${solarry})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <motion.h2
    style={styles.brandTitle}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.15, duration: 0.6 }}
  >
    SOLAR PANELS
  </motion.h2>

  <motion.div
    style={styles.brandLine}
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.25, duration: 0.6 }}
  />

  <motion.p
    style={styles.brandDesc}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3, duration: 0.6 }}
  >
    High-efficiency solar panels for maximum energy generation and
    long-term reliability.
    <br />
    <span style={{ color: "#ffb703" }}>Top 5 Brands</span>{" "}
  </motion.p>

  <motion.div
    style={styles.brandContainer}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.35, duration: 0.7 }}
  >
    <motion.div
      style={styles.brandCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0 }}
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0 12px 28px rgba(0,0,0,0.25)" }}
    >
      <img src={longiLogo} alt="LONGi" style={styles.brandLogo} />
      <h4>adani</h4>
    </motion.div>

    <motion.div
      style={styles.brandCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
     transition={{ delay: 0.1, duration: 0 }}
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0 12px 28px rgba(0,0,0,0.25)" }}
    >
      <img src={canadianLogo} alt="Canadian Solar" style={styles.brandLogo} />
      <h4>AIKO</h4>
    </motion.div>

    <motion.div
      style={styles.brandCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0 }}
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0 12px 28px rgba(0,0,0,0.25)" }}
    >
      <img src={jaLogo} alt="JA Solar" style={styles.brandLogo} />
      <h4>AXITEC</h4>
    </motion.div>

    <motion.div
      style={styles.brandCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
transition={{ delay: 0.1, duration: 0 }}
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0 12px 28px rgba(0,0,0,0.25)" }}
    >
      <img src={jinkoLogo} alt="Jinko Solar" style={styles.brandLogo} />
      <h4>GOLDI</h4>
    </motion.div>

    <motion.div
      style={styles.brandCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0 }}
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0 12px 28px rgba(0,0,0,0.25)" }}
    >
      <img src={trinaLogo} alt="Trina Solar" style={styles.brandLogo} />
      <h4>VIKRAM</h4>
    </motion.div>
  </motion.div>
</motion.section>




<motion.section
  style={{
    ...styles.brandSection,
    ...styles.infoSectionReverse,
    backgroundImage: `linear-gradient(
      rgba(0,0,0,0.65),
      rgba(0,0,0,0.65)
    ), url(${inverters})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <motion.h2
    style={styles.brandTitle}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.15, duration: 0.6 }}
  >
    INVERTERS
  </motion.h2>

  <motion.div
    style={styles.brandLine}
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.25, duration: 0.6 }}
  />

  <motion.p
    style={styles.brandDesc}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3, duration: 0.6 }}
  >
   Premium products. Trusted Brands. Reliable Performance.
    <br />
    <span style={{ color: "#ffb703" }}>Top 5 Brands</span>{" "}
  </motion.p>

  <motion.div
    style={styles.brandContainer}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.35, duration: 0.7 }}
  >
    <motion.div
      style={styles.brandCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0 }}
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0 12px 28px rgba(0,0,0,0.25)" }}
    >
      <img src={polycab} alt="LONGi" style={styles.brandLogo} />
      <h4>POLYCAB</h4>
    </motion.div>

    <motion.div
      style={styles.brandCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
     transition={{ delay: 0.1, duration: 0 }}
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0 12px 28px rgba(0,0,0,0.25)" }}
    >
      <img src={havels} alt="Canadian Solar" style={styles.brandLogo} />
      <h4>HAVELLS</h4>
    </motion.div>

    <motion.div
      style={styles.brandCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0 }}
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0 12px 28px rgba(0,0,0,0.25)" }}
    >
      <img src={goodwe} alt="JA Solar" style={styles.brandLogo} />
      <h4>GOODWE</h4>
    </motion.div>

    <motion.div
      style={styles.brandCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
transition={{ delay: 0.1, duration: 0 }}
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0 12px 28px rgba(0,0,0,0.25)" }}
    >
      <img src={pvblink} alt="Jinko Solar" style={styles.brandLogo} />
      <h4>PV blink</h4>
    </motion.div>

    <motion.div
      style={styles.brandCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0 }}
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0 12px 28px rgba(0,0,0,0.25)" }}
    >
      <img src={obit} alt="Trina Solar" style={styles.brandLogo} />
      <h4>OBit</h4>
    </motion.div>
  </motion.div>
</motion.section>



<motion.section
  style={{
    ...styles.brandSection,
    ...styles.infoSectionReverse,
    backgroundImage: `linear-gradient(
      rgba(0,0,0,0.65),
      rgba(0,0,0,0.65)
    ), url(${batteries})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <motion.h2
    style={styles.brandTitle}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.15, duration: 0.6 }}
  >
    BATTERIES
  </motion.h2>

  <motion.div
    style={styles.brandLine}
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.25, duration: 0.6 }}
  />

  <motion.p
    style={styles.brandDesc}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3, duration: 0.6 }}
  >
    Reliable Batteries for uninterrupted power & Energy Storage
    <br />
    <span style={{ color: "#ffb703" }}>Top 5 Brands</span>{" "}
  </motion.p>

  <motion.div
    style={styles.brandContainer}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.35, duration: 0.7 }}
  >
    <motion.div
      style={styles.brandCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0 }}
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0 12px 28px rgba(0,0,0,0.25)" }}
    >
      <img src={voult} alt="LONGi" style={styles.brandLogo} />
      <h4>VOLTRA</h4>
    </motion.div>

    <motion.div
      style={styles.brandCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
     transition={{ delay: 0.1, duration: 0 }}
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0 12px 28px rgba(0,0,0,0.25)" }}
    >
      <img src={grace} alt="Canadian Solar" style={styles.brandLogo} />
      <h4>GRACE</h4>
    </motion.div>

    <motion.div
      style={styles.brandCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0 }}
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0 12px 28px rgba(0,0,0,0.25)" }}
    >
      <img src={evault} alt="JA Solar" style={styles.brandLogo} />
      <h4>EVAULT</h4>
    </motion.div>

    <motion.div
      style={styles.brandCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
transition={{ delay: 0.1, duration: 0 }}
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0 12px 28px rgba(0,0,0,0.25)" }}
    >
      <img src={luminous} alt="Jinko Solar" style={styles.brandLogo} />
      <h4>LUMINOUS</h4>
    </motion.div>

    <motion.div
      style={styles.brandCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0 }}
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0 12px 28px rgba(0,0,0,0.25)" }}
    >
      <img src={involtcis} alt="Trina Solar" style={styles.brandLogo} />
      <h4>INVOLTCIS</h4>
    </motion.div>
  </motion.div>
</motion.section>

{/* <Footer /> */}
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
      padding: "10px 0px",
  },

  videoBg: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "90%",
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
    fontWeight: "500",
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


heading: {
  fontSize: "52px",
  fontWeight: "400",
  color: "yellow",
  marginTop: "80px",
  marginBottom: "20px",
  textTransform: "uppercase",
  letterSpacing: "2px",
},

description: {
maxWidth: "900px",
margin: "0 auto 40px",
lineHeight: "1.8",
fontSize: "18px",
color: "#f5f5f5",
},

journeySection: {
  minHeight: "30vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "50px 10px",

  background: "rgba(0,0,0,0.45)",
  backdropFilter: "blur(10px)",
},

journeyContent: {
  maxWidth: "1000px",
  textAlign: "center",
},

journeyTitle: {
  fontSize: "48px",
  fontWeight: "400",
  color: "#F4C542",
  marginBottom: "15px",
  textTransform: "uppercase",
  letterSpacing: "2px",
},

journeyLine: {
  width: "120px",
  height: "4px",
  background: "#F4C542",
  margin: "0 auto 30px",
  borderRadius: "20px",
},

journeyText: {
  fontSize: "15px",
  lineHeight: "1.5",
  color: "#f5f5f5",
  marginBottom: "35px",
},
heroSection: {
  minHeight: "70vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "flex-center",
  alignItems: "center",
  padding: "40px 60px",
},

heroContent: {
  maxWidth: "350px",
  textAlign: "center",
},

headingLine: {
  width: "120px",
  height: "4px",
  background: "#ffb703",
  borderRadius: "20px",
  marginBottom: "25px",
},

heroTag: {
  color: "#ffb703",
  letterSpacing: "4px",
  fontSize: "14px",
  fontWeight: "600",
  marginBottom: "15px",
  textAlign: "left",
},

heroHeading: {
  fontSize: "50px",
  fontWeight: "600",
  lineHeight: "1.1",
  color: "#fff",
  marginBottom: "25px",
  textAlign: "left",
},

heroText: {
  fontSize: "15px",
  color: "#e5e7eb",
  lineHeight: "1.8",
  marginBottom: "35px",
  textAlign: "left",
},


brandSection: {
  padding: "100px 50px",
  background: "rgba(0,0,0,0.55)",
  backdropFilter: "blur(10px)",
  textAlign: "center",
},

brandTitle: {
  fontSize: "60px",
  color: "#f4c542",
  fontWeight: "500",
  marginBottom: "15px",
},

brandLine: {
  width: "180px",
  height: "4px",
  background: "#f4c542",
  margin: "0 auto 25px",
  borderRadius: "20px",
},

brandDesc: {
  color: "#fff",
  fontSize: "20px",
  marginBottom: "60px",
},

brandContainer: {
  display: "flex",
  justifyContent: "center",
  gap: "25px",
  flexWrap: "wrap",
},

brandCard: {
  width: "200px",
  height: "220px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "20px",
  backdropFilter: "blur(10px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  transition: "0.3s",
  cursor: "pointer",
},

brandLogo: {
  width: "150px",
  objectFit: "contain",
  marginBottom: "20px",
},

};