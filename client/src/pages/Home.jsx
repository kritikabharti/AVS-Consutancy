import React from "react";
import heroVideo from "../assets/solar-video.mp4";
import logoFile from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import imagess from "../assets/free.jpg";
import siteimg from "../assets/survey.jpg";
import customimg from "../assets/custom.jpg";
import quoimg from '../assets/quoimage.jpg';
import insimg from "../assets/insimage.jpg";
import netimage from "../assets/netimg.jpg";
import afterimg from "../assets/images (4).jpg";
import jourvideo from "../assets/journeyvid.mp4";

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
  const isLoggedIn = !!token;


  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={styles.landingPage}>
      {/* Header Navigation Bar */}
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
            onClick={() => navigate('/login')} 
            style={styles.logInBtn}
          >
            Log In
          </button>
        )}
      </nav>

     {/* Hero Section */}

<div style={styles.heroSection}>
  
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
    style={styles.heroContent}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >


<h1 style={styles.mainTitle}>

  Join our solar <br />
  solution journey with us.
</h1>

<p style={styles.subtitle}>
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



{/* Solar Journey Section */}


{/* Journey Hero */}
<section style={styles.journeyHero}>
  <motion.h2
    style={styles.journeyHeading}
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <i>Our Solar Solution Journey</i>
  </motion.h2>

  <div style={styles.headingLine}></div>

  <p style={styles.journeySubHeading}>
   Transitioning to green energy is made simple through a seamless 7-step process managed entirely by AVS Solar Consultancy. The journey begins with a precise energy audit and custom roof layout design tailored specifically to your property's monthly consumption needs. Next, their team handles all complex government subsidy applications and legal permits while sourcing premium, top-tier equipment. Professional engineers then execute a safe installation and coordinate with local authorities for regulatory testing and final net-metering connection. Once activated, the system delivers immediate financial savings, backed by AVS Solar Consultancy's continuous monitoring and long-term support.
  </p>
</section>


<section style={styles.cardsSection}>
  <video
  autoPlay
  muted
  loop
  playsInline
  style={styles.cardsVideoBg}
>
  <source src={jourvideo} type="video/mp4" />
</video>

  <motion.div
    style={styles.stepContainer}
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
  <motion.div
  style={styles.stepCard}
  variants={cardVariants}
  whileHover={{
    y: -12,
    scale: 1.03,
  }}
>
  <img
    src={imagess}
    alt="Free Consultation"
    style={styles.cardImage}
  />

  <div style={styles.cardOverlay}>
    <h3 style={styles.overlayTitle}>
      1. Free Consultation
    </h3>

    <p style={styles.overlayText}>
      We understand your energy needs and provide expert advice.
    </p>

    <button
      style={styles.overlayBtn}
      onClick={() => navigate("/solar-panels")}
    >
      Explore More →
    </button>
  </div>
</motion.div>





<motion.div
  style={styles.stepCard}
  variants={cardVariants}
  whileHover={{
    y: -12,
    scale: 1.03,
  }}
>
  <img
    src={siteimg}
    alt="Free Consultation"
    style={styles.cardImage}
  />

  <div style={styles.cardOverlay}>
    <h3 style={styles.overlayTitle}>
    2. Site Survey
    </h3>

    <p style={styles.overlayText}>
      Our team visits your location and evaluates the site.
    </p>

    <button
      style={styles.overlayBtn}
       onClick={() => navigate("/site-survey")}
    >
      Explore More →
    </button>
  </div>
</motion.div>



<motion.div
  style={styles.stepCard}
  variants={cardVariants}
  whileHover={{
    y: -12,
    scale: 1.03,
  }}
>
  <img
     src={customimg}
    alt="Custom Solar Design"
    style={styles.cardImage}
  />

  <div style={styles.cardOverlay}>
    <h3 style={styles.overlayTitle}>
      3. Custom Solar Design
    </h3>

    <p style={styles.overlayText}>
      Customized solar system tailored to your requirements.
    </p>

    <button
      style={styles.overlayBtn}
      onClick={() => navigate("/custom")}
    >
      Explore More →
    </button>
  </div>
</motion.div>




<motion.div
  style={styles.stepCard}
  variants={cardVariants}
  whileHover={{ y: -12, scale: 1.03 }}
>
  <img
     src={quoimg}
    alt="Quotation & Approval"
    style={styles.cardImage}
  />

  <div style={styles.cardOverlay}>
    <h3 style={styles.overlayTitle}>
      4. Quotation & Approval
    </h3>

    <p style={styles.overlayText}>
      Receive a transparent quotation and project approval.
    </p>

    <button
      style={styles.overlayBtn}
      onClick={() => navigate("/quotation")}
    >
      Explore More →
    </button>
  </div>
</motion.div>




<motion.div
  style={styles.stepCard}
  variants={cardVariants}
  whileHover={{ y: -12, scale: 1.03 }}
>
  <img
    src={insimg}
    alt="Installation"
    style={styles.cardImage}
  />

  <div style={styles.cardOverlay}>
    <h3 style={styles.overlayTitle}>
      5. Installation
    </h3>

    <p style={styles.overlayText}>
      Professional installation by certified experts.
    </p>

    <button
      style={styles.overlayBtn}
      onClick={() => navigate("/installation")}
    >
      Explore More →
    </button>
  </div>
</motion.div>



<motion.div
  style={styles.stepCard}
  variants={cardVariants}
  whileHover={{ y: -12, scale: 1.03 }}
>
  <img
    src={netimage}
    alt="Net Metering"
    style={styles.cardImage}
  />

  <div style={styles.cardOverlay}>
    <h3 style={styles.overlayTitle}>
      6. Net Metering
    </h3>

    <p style={styles.overlayText}>
      Assistance with net metering and electricity savings.
    </p>

    <button
      style={styles.overlayBtn}
      onClick={() => navigate("/netmetering")}
    >
      Explore More →
    </button>
  </div>
</motion.div>





<motion.div
  style={styles.stepCard}
  variants={cardVariants}
  whileHover={{ y: -12, scale: 1.03 }}
>
  <img
    src={afterimg}
    alt="After Sales Support"
    style={styles.cardImage}
  />

  <div style={styles.cardOverlay}>
    <h3 style={styles.overlayTitle}>
      7. After-Sales Support
    </h3>

    <p style={styles.overlayText}>
      Ongoing maintenance and support for long-term performance.
    </p>

    <button
      style={styles.overlayBtn}
      onClick={() => navigate("/after-support")}
    >
      Explore More →
    </button>
  </div>
</motion.div>
  </motion.div>
</section>



      <Footer />
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
  },

  subtitle: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "40px",
    opacity: 0.9,
    fontWeight: "300",
  },

  learnMoreBtn: {
    backgroundColor: "#f1b92b",
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

journeyHeading: {
fontSize: "56px",
fontWeight: "700",
color: "#ffffff",
marginBottom: "10px",
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
},

stepContainer: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  gap: "30px",
  maxWidth: "1400px",
  margin: "0 auto",
},

stepCard: {
  position: "relative",
  overflow: "hidden",
  borderRadius: "25px",
  height: "500px",
  cursor: "pointer",
},

cardImage: {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
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

cardTitle: {
fontSize: "28px",
fontWeight: "500",
color: "#ffb703",
marginBottom: "15px",
},

cardText: {
fontSize: "18px",
lineHeight: "1.5",
color: "#dbeafe",
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

stepContainer: {
  position: "relative",
  zIndex: 2,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  gap: "30px",
  maxWidth: "1400px",
  margin: "0 auto",
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




