import React from "react";
import heroVideo from "../assets/solar-video.mp4";
import logoFile from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import imagess from "../assets/home1.jpg";
import home2 from "../assets/Home2.jpg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/HOME4.jpg";
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

  <div 
  style={styles.headingLine}></div>

  <p style={styles.journeySubHeading}>
   Transitioning to green energy is made simple through a seamless 7-step process managed entirely by AVS Solar Consultancy. The journey begins with a precise energy audit and custom roof layout design tailored specifically to your property's monthly consumption needs. Next, their team handles all complex government subsidy applications and legal permits while sourcing premium, top-tier equipment. Professional engineers then execute a safe installation and coordinate with local authorities for regulatory testing and final net-metering connection. Once activated, the system delivers immediate financial savings, backed by AVS Solar Consultancy's continuous monitoring and long-term support.
  </p>
</section>




<div
  style={{
    backgroundImage: `url(${bgSolarr})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    padding: "1px 0",
  }}
>



<section style={styles.heroImageSection}
>
  <motion.img
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

  <div style={styles.darkOverlay}></div>

  <motion.div
    style={styles.textOverlay}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <h2 style={styles.infoTitle}>FREE CONSULTATION</h2>

    <p style={styles.infoText}>
     Getting professional advice ensures your system is optimized for net metering and helps you secure necessary government incentives. In Punjab, homeowners who install rooftop solar can receive central financial assistance and state incentives through the PM Surya Ghar scheme, which can subsidize costs significantly.
    </p>
  </motion.div>
</section>



<section style={styles.heroImageSection}
>
  <motion.img
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

  <div style={styles.darkOverlay}></div>

  <motion.div
    style={styles.textOverlay}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <h2 style={styles.infoTitle}>SITE SURVEY</h2>

    <p style={styles.infoText}>
    A professional AVS Solar site survey evaluates your roof's structure, orientation, and shadow patterns to maximize energy generation. Certified engineers measure available space and test structural weight capacity to ensure absolute safety. They also inspect your property’s electrical grid, meter, and wiring layout to design a secure, compliant installation blueprint. This critical physical check guarantees your solar system delivers peak power output with zero structural risks.
    </p>
  </motion.div>
</section>




<section style={styles.heroImageSection}
>
  <motion.img
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

  <div style={styles.darkOverlay}></div>

  <motion.div
    style={styles.textOverlay}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <h2 style={styles.infoTitle}>CUSTOM SOLAR DESIGN</h2>

    <p style={styles.infoText}>
    An AVS Solar custom design maximizes your energy yield by tailoring the installation blueprint to your property's unique characteristics. Engineers use site survey data to optimize panel placement, tilt angles, and electrical routing, bypassing shadows from trees or nearby structures. This precise engineering ensures maximum sun exposure, seamless architectural integration, and peak power output for your specific energy needs.
    </p>
  </motion.div>
</section>



<section style={styles.heroImageSection}
>
  <motion.img
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

  <div style={styles.darkOverlay}></div>

  <motion.div
    style={styles.textOverlay}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <h2 style={styles.infoTitle}>QUOTATION AND APPROVAL</h2>

    <p style={styles.infoText}>
    An AVS Solar quotation provides a transparent, itemized cost breakdown of your customized solar system, detailing component costs, warranties, and guaranteed government subsidy deductions. Once you review and accept the financial proposal, the team manages all engineering paperwork and submits your documentation to local discoms for immediate regulatory approval.
    </p>
  </motion.div>
</section>


<section style={styles.heroImageSection}
>
  <motion.img
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

  <div style={styles.darkOverlay}></div>

  <motion.div
    style={styles.textOverlay}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <h2 style={styles.infoTitle}>INSTALLATION</h2>

    <p style={styles.infoText}>
    Following design approval, certified technicians execute the physical installation by securely mounting the aluminum structures, aligning the solar panels, and integrating the inverter. The team completes all DC/AC wiring with robust earthing and surge protection to ensure maximum operational safety and system durability.
    </p>
  </motion.div>
</section>


<section style={styles.heroImageSection}
>
  <motion.img
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

  <div style={styles.darkOverlay}></div>

  <motion.div
    style={styles.textOverlay}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <h2 style={styles.infoTitle}>NET METERING</h2>

    <p style={styles.infoText}>
    Net metering connects your solar system to the local utility grid through a specialized bi-directional meter that tracks energy flow. When your panels generate surplus electricity during peak sunny hours, this excess power is fed into the grid, automatically spinning your meter backward and earning you energy credits. 
    </p>
  </motion.div>
</section>



<section style={styles.heroImageSection}
>
  <motion.img
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

  <div style={styles.darkOverlay}></div>

  <motion.div
    style={styles.textOverlay}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <h2 style={styles.infoTitle}>AFTER-SALES SUPPORT</h2>

    <p style={styles.infoText}>
   AVS Solar after-sales support ensures your system maintains peak performance through proactive real-time performance monitoring, scheduled preventive maintenance, and rapid troubleshooting. Dedicated service teams handle routine panel cleaning, electrical safety audits, and seamless processing of component warranties for inverters and modules
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
  borderRadius: "15px",
  height: "400px",
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


journeyImage: {
  width: "100%",
  maxWidth: "650px",
  height: "450px",
  objectFit: "cover",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  
},

infoSection: {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "60px",
  padding: "100px 80px",
},

journeyImageContainer: {
  flex: 1,
},

contentContainer: {
  flex: 1,
},

infoTitle: {
  color: "#3a1a1a",
  fontSize: "30px",
  fontWeight: "700",
  marginBottom: "20px",
},

infoText: {
  color: "#0e1317",
  fontSize: "16px",
  lineHeight: "1.6",
  marginBottom: "26px",
},

infoList: {
  color: "#fff",
  fontSize: "18px",
  lineHeight: "2",
  listStyle: "none",
  padding: 0,
},
infoSection: {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "60px",
  padding: "100px 80px",
},

contentContainer: {
  flex: 1,
},

journeyImageContainer: {
  flex: 1,
  display: "flex",
  justifyContent: "center",
},





heroImageSection: {
  position: "relative",
  width: "95%",
  height: "85vh",
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
  marginRight: "auto",   // pushes content left
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


};




