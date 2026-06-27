import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import backgroundVideo from "../assets/about-solar.mp4";
import { motion } from "framer-motion";
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
  const isLoggedIn = !!token;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

return (

<>     <div style={styles.landingPage}>
  <nav style={styles.navbar}>
  <div style={styles.logo}>
    <img
      src={logoFile}
      alt="AVS SOLAR CONSULTANCY"
      style={styles.logoImage}
    />

    <span style={styles.logoText}>
      AVS SOLAR CONSULTANCY
    </span>
  </div>

  <div style={styles.navLinks}>
   <motion.button
       onClick={() => navigate("/")}
       style={styles.link}
       whileHover={{
         scale: 1.1,
         y: -2,
       }}
       whileTap={{
         scale: 0.95,
       }}
     >
       HOME
     </motion.button>
   


    <motion.button
    onClick={() => navigate("/about")}
    style={styles.link}
    whileHover={{
    scale: 1.1,
    y: -2,
    }}
    whileTap={{
    scale: 0.95,
    }}
    
    >
    
    About
    
    </motion.button>

    <motion.button
    onClick={() => navigate("/services")}
    style={styles.link}
    whileHover={{
    scale: 1.1,
    y: -2,
    }}
    whileTap={{
    scale: 0.95,
    }}
    
    >
    
    Services
    
    
    </motion.button>


    
    <motion.button
    onClick={() => navigate("/team")}
    style={styles.link}
    whileHover={{
    scale: 1.1,
    y: -2,
    }}
    whileTap={{
    scale: 0.95,
    }}
    
    >
    
    Our Team
    
    
    </motion.button>

    <motion.button
    onClick={() => navigate("/store")}
    style={styles.link}
    whileHover={{
    scale: 1.1,
    y: -2,
    }}
    whileTap={{
    scale: 0.95,
    }}
    
    >
    
    Store
    
    </motion.button>


    
  </div>
   {isLoggedIn ? (
    <button
      onClick={handleLogout}
      style={styles.logoutBtn}
    >
      Log Out
    </button>
  ) : (
    <button
      onClick={() => navigate("/login")}
      style={styles.logInBtn}
    >
      Log In
    </button>
  )}
</nav>
  <video
    autoPlay
    loop
    muted
    playsInline
    style={styles.video}
  >
    <source src={backgroundVideo} type="video/mp4" />
  </video>

  <div style={styles.overlay}>


<motion.h1
style={styles.heading}
initial={{ opacity: 0, y: -50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}

>

AVS Solar Consultancy
</motion.h1>

<motion.p
style={styles.description}
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1, delay: 0.3 }}

>

AVS Solar Consultancy is committed to providing reliable and
sustainable solar energy solutions across India. We help
residential, commercial, and industrial customers reduce
electricity costs and contribute to a greener future.
</motion.p>



    </div>
  
<section
  style={{
    ...styles.infoSection,
    backgroundImage: `linear-gradient(
      rgba(0,0,0,0.7),
      rgba(0,0,0,0.7)
    ), url(${epcBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Video Animation */}
  <motion.div
    style={styles.journeyImageContainer}
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <motion.video
      autoPlay
      loop
      muted
      playsInline
      style={styles.journeyVideo}
      whileHover={{
        scale: 1.05,
      }}
      transition={{ duration: 0.3 }}
    >
      <source src={epcVideo} type="video/mp4" />
    </motion.video>
  </motion.div>

  {/* Text Animation */}
  <motion.div
    style={styles.contentContainer}
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <motion.h2
      style={styles.infoTitle}
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      WHY CHOOSE US
    </motion.h2>

    <motion.p
      style={styles.infoText}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      viewport={{ once: true }}
    >
      AVS Solar Consultancy provides complete Engineering,
      Procurement and Construction solutions for residential,
      commercial and industrial solar power plants.
    </motion.p>

    <motion.ul
      style={styles.infoList}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      viewport={{ once: true }}
    >
      <li> Site Survey & Analysis</li>
      <li> Engineering Design</li>
      <li> Solar Installation</li>
      <li> Project Commissioning</li>
    </motion.ul>
  </motion.div>
</section>



<motion.section
  style={{
    ...styles.infoSectionReverse,
    backgroundImage: `linear-gradient(
      rgba(0,0,0,0.65),
      rgba(0,0,0,0.65)
    ), url(${resBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  <motion.div
    style={styles.contentContainer}
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <h2 style={styles.infoTitle}>Residential Solar</h2>

    <p style={styles.infoText}>
      Reduce electricity bills and power your home with
      sustainable solar energy solutions.
    </p>

    <ul style={styles.infoList}>
      <li> Lower Electricity Bills</li>
      <li> Clean Renewable Energy</li>
      <li> Government Subsidy Benefits</li>
      <li> 25+ Years Panel Life</li>
    </ul>
  </motion.div>

  <motion.div
    style={styles.journeyImageContainer}
    initial={{ opacity: 0, x: 100, scale: 0.9 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2 }}
    whileHover={{
      scale: 1.03,
    }}
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      style={styles.journeyVideo}
    >
      <source src={resvideo} type="video/mp4" />
    </video>
  </motion.div>
</motion.section>



<motion.section
  style={{
    ...styles.infoSection,
    backgroundImage: `linear-gradient(
      rgba(0,0,0,0.65),
      rgba(0,0,0,0.65)
    ), url(${commercialBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  <motion.div
    style={styles.journeyImageContainer}
    initial={{ opacity: 0, x: -100, scale: 0.9 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2 }}
    whileHover={{ scale: 1.03 }}
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      style={styles.journeyVideo}
    >
      <source src={mvideo} type="video/mp4" />
    </video>
  </motion.div>

  <motion.div
    style={styles.contentContainer}
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <h2 style={styles.infoTitle}>Commercial Solar</h2>

    <p style={styles.infoText}>
      Help businesses reduce operational costs with
      high-efficiency solar energy systems.
    </p>

    <ul style={styles.infoList}>
      <li> Reduce Electricity Expenses</li>
      <li> Fast Return on Investment</li>
      <li> Sustainable Business Operations</li>
      <li> Scalable Energy Solutions</li>
    </ul>
  </motion.div>
</motion.section>




<motion.section
  style={{
    ...styles.infoSectionReverse,
    backgroundImage: `linear-gradient(
      rgba(0,0,0,0.65),
      rgba(0,0,0,0.65)
    ), url(${maintenanceBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  <motion.div
    style={styles.contentContainer}
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <h2 style={styles.infoTitle}>Maintenance & Support</h2>

    <p style={styles.infoText}>
      We provide long-term monitoring, maintenance,
      cleaning and technical support.
    </p>

    <ul style={styles.infoList}>
      <li> Annual Maintenance Contracts</li>
      <li> Solar Panel Cleaning</li>
      <li> Remote System Monitoring</li>
      <li> Quick Technical Assistance</li>
      <li> Performance Optimization</li>
    </ul>
  </motion.div>

  <motion.div
    style={styles.journeyImageContainer}
    initial={{ opacity: 0, x: 100, scale: 0.9 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2 }}
    whileHover={{
      scale: 1.03,
    }}
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      style={styles.journeyVideo}
    >
      <source src={comvideo} type="video/mp4" />
    </video>
  </motion.div>
</motion.section>
    <Footer />
  </div>

</>

);
}

const styles = {
container: {
  position: "relative",
  minHeight: "100vh",
  overflow: "hidden",
},
contentContainer: {
  flex: 1,
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(12px)",
  padding: "40px",
  borderRadius: "20px",
  border: "1px solid rgba(255,255,255,0.2)",
  transition: "all 0.3s ease",
},


navbar: {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 40px",
},

logo: {
  display: "flex",
  alignItems: "center",
},

logoImage: {
  height: "60px",
  width: "auto",
},

logoText: {
  marginLeft: "12px",
  fontSize: "20px",
  fontWeight: "bold",
  letterSpacing: "2px",
  color: "#fff",
},

navLinks: {
  display: "flex",
  gap: "30px",
},

link: {
  background: "transparent",
  border: "none",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
},

video: {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: -2,
},

overlay: {
  minHeight: "100vh",
  backgroundColor: "rgba(0,0,0,0.65)",
  padding: "0 40px",
  textAlign: "center",
  position: "relative",
  zIndex: 1,

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
},

heading: {
  fontSize: "52px",
  fontWeight: "700",
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

statsContainer: {
display: "flex",
justifyContent: "center",
gap: "30px",
flexWrap: "wrap",
marginBottom: "50px",
},

statBox: {
backgroundColor: "rgba(255,255,255,0.15)",
backdropFilter: "blur(8px)",
padding: "20px 40px",
borderRadius: "15px",
color: "white",
minWidth: "180px",
},

cardContainer: {
display: "flex",
flexWrap: "wrap",
justifyContent: "center",
gap: "25px",
},

card: {
maxWidth: "320px",
backgroundColor: "#262052",
color: "white",
borderRadius: "15px",
boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
padding: "10px",
},

button: {
  position: "absolute",
  top: "30px",
  left: "30px",
  padding: "14px 30px",
  border: "none",
  borderRadius: "30px",
  background: "linear-gradient(135deg,#ffb703,#fb8500)",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
  zIndex: 10,
},

infoSection: {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "100px 80px",
  background: "#081b29",
  color: "white",
  gap: "60px",
},
journeyImage: {
  width: "100%",
  maxWidth: "600px",
  borderRadius: "15px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  objectFit: "cover",
},

infoSectionReverse: {
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "100px 80px",
  background: "#10273d",
  color: "white",
  gap: "60px",
},

imageContainer: {
  flex: 1,
},

infoImage: {
  width: "100%",
  borderRadius: "20px",
  boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
},

contentContainer: {
  flex: 1,
},

infoTitle: {
  fontSize: "42px",
  color: "#ffb703",
  marginBottom: "20px",
},

infoText: {
  fontSize: "18px",
  lineHeight: "1.8",
  color: "#e5e7eb",
},

infoList: {
  marginTop: "20px",
  lineHeight: "2",
  fontSize: "17px",
},
journeyVideo: {
  width: "100%",
  maxWidth: "650px",
  height: "400px",
  objectFit: "cover",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
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
  padding: "2px 20px",
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

export default About;
