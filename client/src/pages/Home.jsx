import React from "react";
import backgroundImageFile from "../assets/image.jpg";
import logoFile from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from "framer-motion";


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

  
  const dynamicHeroStyle = {
    ...styles.heroSection,
    backgroundImage: `url(${backgroundImageFile})`,
  };

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

<div style={dynamicHeroStyle}>
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


<section style={styles.journeySection}>
  <motion.h2
    style={styles.journeyHeading}
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    Our Solar Solution Journey
  </motion.h2>

  <div style={styles.headingLine}></div>

  <p style={styles.journeySubHeading}>
    A Simple 7-Step Process Towards Clean & Green Energy
  </p>

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
  <div>
    <h3 style={styles.cardTitle}>1. Free Consultation</h3>

    <p style={styles.cardText}>
      We understand your energy needs and provide expert advice.
    </p>

    <button
      style={styles.exploreBtn}
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
  <div>
    <h3 style={styles.cardTitle}>2. Site Survey</h3>
    <p style={styles.cardText}>
      Our team visits your location and evaluates the site.
    </p>
    <button
      style={styles.exploreBtn}
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
  <div>
    <h3 style={styles.cardTitle}>3. Custom Solar Design</h3>
    <p style={styles.cardText}>
     Customized solar system tailored to your requirements.
    </p>
    <button
      style={styles.exploreBtn}
      onClick={() => navigate("/custom")}
    >Explore More →
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
  <div>
    <h3 style={styles.cardTitle}>4. Quotation & Approval</h3>
    <p style={styles.cardText}>
     Receive a transparent quotation and project approval.
    </p>
    <button
      style={styles.exploreBtn}
    onClick={() => navigate("/quotation")}
    >Explore More →
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
  <div>
    <h3 style={styles.cardTitle}>5. Installation</h3>
    <p style={styles.cardText}>
      Professional installation by certified experts.
    </p>
    <button
      style={styles.exploreBtn}
     onClick={() => navigate("/installation")}
    >Explore More →
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
  onClick={() => navigate("/netmetering")}
>
  <div>
    <h3 style={styles.cardTitle}>6. Net Metering</h3>
    <p style={styles.cardText}>
      Assistance with net metering and electricity savings.
    </p>
     <button
      style={styles.exploreBtn}
    onClick={() => navigate("/netmetering")}
    >Explore More →
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
  <div>
    <h3 style={styles.cardTitle}>7. After-Sales Support</h3>
    <p style={styles.cardText}>
      Ongoing maintenance and support for long-term performance.
    </p>
    <button
      style={styles.exploreBtn}
   onClick={() => navigate("/after-support")}
    >Explore More →
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
    gap: "30px",
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
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    padding: "8px 20px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
  },

  logoutBtn: {
     backgroundColor: "rgba(255, 255, 255, 0.15)",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    padding: "8px 20px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
  },

  heroSection: {
     backgroundColor: '#0a192f',
    position: "relative",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(rgba(10, 40, 80, 0.6), rgba(10, 25, 47, 0.85))",
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
fontSize: "22px",
color: "#dbeafe",
marginBottom: "60px",
},

stepContainer: {
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
gap: "30px",
maxWidth: "1400px",
margin: "0 auto",
},

stepCard: {
backgroundColor: "rgba(255,255,255,0.1)",
backdropFilter: "blur(12px)",
border: "1px solid rgba(255,255,255,0.2)",
borderRadius: "25px",
padding: "30px",
minHeight: "180px",
display: "flex",
justifyContent: "space-between",
alignItems: "center",
textAlign: "left",
color: "#ffffff",
boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
},

cardTitle: {
fontSize: "28px",
fontWeight: "600",
color: "#ffb703",
marginBottom: "15px",
},

cardText: {
fontSize: "18px",
lineHeight: "1.7",
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

};




