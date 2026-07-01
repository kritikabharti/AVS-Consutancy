import React from "react";
import {
  FaSolarPanel,
  FaRulerCombined,
  FaShieldAlt,
    FaHome,
  FaTools,
    FaIndustry,
  FaBroom,
  FaBolt,
  FaCompressArrowsAlt,
  FaCloudSun,
  FaParking,
   FaCompass,
  FaDollarSign,
 FaSun,
  FaChartLine,
   FaCube,
    FaSeedling,
  FaGlobe,
  FaTint,
} from "react-icons/fa";
import Footer from "../components/Footer";
import mount from "../assets/mounting.mp4";
import mmmm from "../assets/mmmmmm.jpg";
import { motion } from "framer-motion";
import rooftop from "../assets/rooftop.jpg";
import ground from "../assets/ground.jpg";
import elevated from "../assets/elevated.jpg";
import fixed from "../assets/fixedtilt.jpg";
import tracker from "../assets/solartracker.jpg";
import ballasted from "../assets/bellasted.jpg";
import pole from "../assets/polemounted.jpg";
import agricultural from "../assets/agricultural.jpg";
import homep from "../assets/homep.png";



function Mounting() {
  return (
    <>
      {/* Hero Section */}
      <section style={styles.hero}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={styles.video}
        >
          <source src={mount} type="video/mp4" />
        </video>   
      </section>

    
     {/* Content */}
<section
  style={{
    ...styles.content,
    backgroundImage: `
    url(${mmmm})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <h2 style={styles.header}>Our Mounting Structures</h2>
 


<section style={styles.cardsSection}>
  {/* Mounting Cards */}
<motion.div
  style={styles.cardContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  }}
>

   <motion.div
  style={styles.productCard}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  whileHover={{
    y: -10,
    scale: 1.02,
  }}
>
  {/* Left Side */}
 <div style={styles.leftSide}>
  <img
    src={rooftop}
    alt="Rooftop Mounting"
    style={styles.productImage}
  />
</div>

  {/* Right Side */}

  <div style={styles.rightSide}>

    <h3 style={styles.productTitle}>
      Rooftop Mounting Structure
    </h3>

    <div style={styles.feature}>

      <div style={styles.iconCircle}>
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <FaHome />
  </motion.div>
</div>

      <div>

        <h4 style={styles.featureHeading}>Ideal for Residential & Commercial Roofs</h4>

       

      </div>

    </div>

    <div style={styles.feature}>

      <div style={styles.iconCircle}>
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.2,
    }}
  >
    <FaSolarPanel />
  </motion.div>
</div>

      <div>

         <h4 style={styles.featureHeading}>Space Saving</h4>


      </div>

    </div>

    <div style={styles.feature}>

      <div style={styles.iconCircle}
      >
        <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.2,
    }}
  >
    <FaTools />
  </motion.div>
        
      </div>

      <div>

        <h4 style={styles.featureHeading}>Strong & Corrosion Resistant</h4>

      </div>

    </div>

  </div>

</motion.div>




  <motion.div
  style={styles.productCard}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  whileHover={{
    y: -10,
    scale: 1.02,
  }}
>
  {/* Left Side */}
 <div style={styles.leftSide}>
  <img
    src={ground}
    alt="Ground Mounting"
    style={styles.productImage}
  />
</div>

  {/* Right Side */}

  <div style={styles.rightSide}>

    <h3 style={styles.productTitle}>
      Ground Mounting Structure
    </h3>

    <div style={styles.feature}>

      <div style={styles.iconCircle}>
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <FaIndustry />
  </motion.div>
</div>

      <div>

        <h4 style={styles.featureHeading}>Suitable for Large-Scale Installations</h4>

       

      </div>

    </div>

    <div style={styles.feature}>

      <div style={styles.iconCircle}>
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.2,
    }}
  >
    <FaBroom />
  </motion.div>
</div>

      <div>

        <h4 style={styles.featureHeading}>Easy Maintenance & Cleaning</h4>


      </div>

    </div>

    <div style={styles.feature}>

      <div style={styles.iconCircle}>
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.2,
    }}
  >
    <FaBolt />
  </motion.div>
</div>

      <div>

        <h4 style={styles.featureHeading}>Better Panel Tilt & Orientation</h4>

      </div>

    </div>

  </div>

</motion.div>


    


     <motion.div
  style={styles.productCard}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  whileHover={{
    y: -10,
    scale: 1.02,
  }}
>
  {/* Left Side */}
 <div style={styles.leftSide}>
  <img
    src={elevated}
    alt="Elevated Mounting"
    style={styles.productImage}
  />
</div>

  {/* Right Side */}

  <div style={styles.rightSide}>

    <h3 style={styles.productTitle}>
      Elevated Mounting Structure
    </h3>

    <div style={styles.feature}>

      <div style={styles.iconCircle}>
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <FaCompressArrowsAlt />
  </motion.div>
</div>

      <div>

        <h4 style={styles.featureHeading}>Utilizes Space Efficiency</h4>

       

      </div>

    </div>

    <div style={styles.feature}>

      <div style={styles.iconCircle}>
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.2,
    }}
  >
    <FaCloudSun />
  </motion.div>
</div>

      <div>

        <h4 style={styles.featureHeading}>Provides Shade and Protection</h4>


      </div>

    </div>

    <div style={styles.feature}>

      <div style={styles.iconCircle}>
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.2,
    }}
  >
    <FaParking />
  </motion.div>
</div>

      <div>

        <h4 style={styles.featureHeading}>Ideal for Parking & CommercialAreas</h4>

      </div>

    </div>

  </div>

</motion.div>



  <motion.div
  style={styles.productCard}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  whileHover={{
    y: -10,
    scale: 1.02,
  }}
>
  {/* Left Side */}
 <div style={styles.leftSide}>
  <img
    src={fixed}
    alt="Fixed Mounting"
    style={styles.productImage}
  />
</div>

  {/* Right Side */}

  <div style={styles.rightSide}>

    <h3 style={styles.productTitle}>
      Fixed Mounting Structure
    </h3>

    <div style={styles.feature}>

      <div style={styles.iconCircle}>
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <FaCompass />
  </motion.div>
</div>

      <div>

        <h4 style={styles.featureHeading} >Fixed at Optimum Angle</h4>

       

      </div>

    </div>

    <div style={styles.feature}>

      <div style={styles.iconCircle}>
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.2,
    }}
  >
    <FaDollarSign />
  </motion.div>
</div>

      <div>

        <h4 style={styles.featureHeading}>Cost Effective Solution</h4>


      </div>

    </div>

    <div style={styles.feature}>

      <div style={styles.iconCircle}>
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.2,
    }}
  >
    <FaShieldAlt />
  </motion.div>
</div>

      <div>

        <h4 style={styles.featureHeading}>Low Maintenance Requirements</h4>

      </div>

    </div>

  </div>

</motion.div>





  <motion.div
  style={styles.productCard}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  whileHover={{
    y: -10,
    scale: 1.02,
  }}
>
  {/* Left Side */}
 <div style={styles.leftSide}>
  <img
    src={tracker}
    alt="Solar Tracker"
    style={styles.productImage}
  />
</div>

  {/* Right Side */}

  <div style={styles.rightSide}>

    <h3 style={styles.productTitle}>
      Solar Tracker Structure
    </h3>

    <div style={styles.feature}>

      <div style={styles.iconCircle}>
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <FaSun />
  </motion.div>
</div>

      <div>

         <h4 style={styles.featureHeading}>Follows Sun Movement</h4>

       

      </div>

    </div>

    <div style={styles.feature}>

      <div style={styles.iconCircle}>
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.2,
    }}
  >
    <FaSolarPanel />
  </motion.div>
</div>

      <div>

       <h4 style={styles.featureHeading}>Higher Energy Generation</h4>


      </div>

    </div>

    <div style={styles.feature}>

      <div style={styles.iconCircle}>
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.2,
    }}
  >
    <FaChartLine />
  </motion.div>
</div>
      <div>

        <h4 style={styles.featureHeading}>Maximizes Efficiency</h4>

      </div>

    </div>

  </div>

</motion.div>




<motion.div
  style={styles.productCard}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  whileHover={{
    y: -10,
    scale: 1.02,
  }}
>
  {/* Left Side */}
 <div style={styles.leftSide}>
  <img
    src={ballasted}
    alt="Ballasted Tracker"
    style={styles.productImage}
  />
</div>

  {/* Right Side */}

  <div style={styles.rightSide}>

    <h3 style={styles.productTitle}>
      Ballasted Tracker Structure
    </h3>

    <div style={styles.feature}>

      <div style={styles.iconCircle}>
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <FaShieldAlt />
  </motion.div>
</div>

      <div>

         <h4 style={styles.featureHeading}>No Roof penetration</h4>

       

      </div>

    </div>

    <div style={styles.feature}>

      <div style={styles.iconCircle}>
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.2,
    }}
  >
    <FaCube />
  </motion.div>
</div>

      <div>

        <h4 style={styles.featureHeading}>Uses Concrete Blocks</h4>


      </div>

    </div>

    <div style={styles.feature}>

      <div style={styles.iconCircle}>
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.2,
    }}
  >
    <FaHome />
  </motion.div>
</div>

      <div>

         <h4 style={styles.featureHeading}>Ideal for Flat Roots</h4>

      </div>

    </div>

  </div>

</motion.div>



<motion.div
  style={styles.productCard}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  whileHover={{
    y: -10,
    scale: 1.02,
  }}
>
  {/* Left Side */}
 <div style={styles.leftSide}>
  <img
    src={agricultural}
    alt="Agricultural Tracker"
    style={styles.productImage}
  />
</div>

  {/* Right Side */}

  <div style={styles.rightSide}>

    <h3 style={styles.productTitle}>
      Agricultural Tracker Structure
    </h3>

    <div style={styles.feature}>

      <div style={styles.iconCircle}>
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <FaSeedling />
  </motion.div>
</div>

      <div>

         <h4 style={styles.featureHeading}>Supports Crop Cultivation</h4>

       

      </div>

    </div>

    <div style={styles.feature}>

      <div style={styles.iconCircle}>
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.2,
    }}
  >
    <FaGlobe />
  </motion.div>
</div>

      <div>

        <h4 style={styles.featureHeading}>Efficient Land Utilization</h4>


      </div>

    </div>

    <div style={styles.feature}>

      <div style={styles.iconCircle}>
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.2,
    }}
  >
    <FaTint />
  </motion.div>
</div>

      <div>

        <h4 style={styles.featureHeading}>
  Ideal for Solar Water Pumps
</h4>
      </div>

    </div>

  </div>

</motion.div>



  </motion.div>
</section>


</section>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Mounting;

const styles = {
  hero: {
    position: "relative",
    width: "100%",
    height: "100vh",
  },

  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  overlay: {
    position: "relative",
    zIndex: 2,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },

  content: {
    padding: "40px 80px",
    background: "#fff",
    width: "90%",
    minHeight: "10px",
  },





cardsSection: {
  display: "flex",
  gap: "30px",
  justifyContent: "center",
  alignItems: "stretch",
  flexWrap: "wrap",
  marginTop: "60px",
},

productCard: {
  width: "700%",
  maxWidth: "1050px",
    maxHeight: "500px",
  background: "#fff",
  borderRadius: "24px",
  display: "flex",
  overflow: "hidden",
  boxShadow: "0 20px 50px rgba(0,0,0,.15)",
  margin: "30px auto",
},

leftSide: {
  width: "40%",
  minHeight: "500px",
  overflow: "hidden",
},

productImage: {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
},

rightSide: {
  width: "58%",
  padding: "50px",
  display: "flex",
  flexDirection: "column",
},

logo: {
  width: "220px",
  marginBottom: "30px",
},


productTitle: {
  fontSize: "30px",
  fontWeight: "700",
  color: "#2d3748",
  marginBottom: "35px",
  lineHeight: "1.5",
    fontFamily: "'Poppins', sans-serif",
},

feature: {
  display: "flex",
  gap: "22px",
  alignItems: "center",
  marginBottom: "28px",
  color: "black",
},

featureHeading: {
  fontSize: "18px",
  fontWeight: "500",
  color: "#1f2937",
  fontFamily: "Arial, sans-serif", // or "Roboto", "Inter", "Poppins"
  lineHeight: "1.4",
  margin: 0,
},

iconCircle: {
  width: "72px",
  height: "72px",
  borderRadius: "50%",
  background: "#212429",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "28px",
},


header:{
fontSize: "52px",
  fontWeight: "600",
  color: "yellow",
  marginTop: "0px",
  marginBottom: "20px",
  textTransform: "uppercase",
  letterSpacing: "1.0px",
},

heading:{
color: "yellow",
},

};