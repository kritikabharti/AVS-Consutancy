import React from "react";
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
    backgroundImage: `linear-gradient(
      rgba(0,0,0,0.55),
      rgba(0,0,0,0.55)
    ), url(${mmmm})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <h2 style={styles.header}>Our Mounting Structures</h2>
 

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
  style={{
    ...styles.card,
    backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${rooftop})`,
  }}
  variants={{
  hidden: {
    opacity: 0,
    x: -120,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
}}
  transition={{
    duration: 0.6,
    ease: "easeOut",
  }}
  whileHover={{
    scale: 1.06,
    y: -12,
    rotate: -1,
    boxShadow: "0 25px 60px",
  }}
>
      <motion.h2
  style={styles.heading}
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  Rooftop Mounting Systems
</motion.h2>

     <motion.p
  style={styles.text}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
>
        Strong, lightweight and corrosion-resistant rooftop mounting
        structures designed for maximum durability and easy installation.
      </motion.p>
    </motion.div>





   <motion.div
  style={{
    ...styles.card,
    backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${ground})`,
  }}
 variants={{
  hidden: {
    opacity: 0,
    x: -120,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
}}
  transition={{
    duration: 0.6,
    ease: "easeOut",
  }}
  whileHover={{
    scale: 1.06,
    y: -12,
    rotate: -1,
    boxShadow: "0 25px 60px",
  }}
>
     <motion.h2
  style={styles.heading}
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  Ground Mounted Structure
</motion.h2>

<motion.p
  style={styles.text}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
>
        Reliable ground-mounted solar systems engineered for commercial,
        industrial and utility-scale solar power plants.
      </motion.p>
    </motion.div>






<motion.div
  style={{
    ...styles.card,
    backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${elevated})`,
  }}
  variants={{
  hidden: {
    opacity: 0,
    x: -120,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
}}
  transition={{
    duration: 0.6,
    ease: "easeOut",
  }}
  whileHover={{
    scale: 1.06,
    y: -12,
    rotate: -1,
    boxShadow: "0 25px 60px",
  }}
>


     <motion.h2
  style={styles.heading}
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>Elevated Mounting Structures</motion.h2>

     <motion.p
  style={styles.text}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
>
        Tailor-made mounting solutions developed to match your site
        conditions while ensuring safety, efficiency and long service life.
      </motion.p>
    </motion.div>

  </motion.div>
</section>




 {/* Content */}
<section
  style={{
    ...styles.content,
    backgroundImage: `linear-gradient(
      rgba(0,0,0,0.55),
      rgba(0,0,0,0.55)
    ), url(${mmmm})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Mounting Cards */}

  <motion.div style={styles.cardContainer}>

    
<motion.div
  style={{
    ...styles.card,
    backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${fixed})`,
  }}
   initial={{
    opacity: 0,
    x: 120,      // Start from right
    scale: 0.9,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    scale: 1,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  viewport={{ once: true }}
  whileHover={{
    scale: 1.06,
    y: -12,
    rotate: -1,
    boxShadow: "0 25px 60px",
  }}
>


     <motion.h2
  style={styles.heading}
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>Fixed Tilt Structure</motion.h2>

     <motion.p
  style={styles.text}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
>
        Tailor-made mounting solutions developed to match your site
        conditions while ensuring safety, efficiency and long service life.
      </motion.p>
    </motion.div>




    
<motion.div
  style={{
    ...styles.card,
    backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${tracker})`,
  }}
   initial={{
    opacity: 0,
    x: 120,      // Start from right
    scale: 0.9,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    scale: 1,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  viewport={{ once: true }}
  whileHover={{
    scale: 1.06,
    y: -12,
    rotate: -1,
    boxShadow: "0 25px 60px",
  }}
>


     <motion.h2
  style={styles.heading}
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>Solar Tracter Structure</motion.h2>

     <motion.p
  style={styles.text}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
>
        Tailor-made mounting solutions developed to match your site
        conditions while ensuring safety, efficiency and long service life.
      </motion.p>
    </motion.div>



    
<motion.div
  style={{
    ...styles.card,
    backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${ballasted})`,
  }}
   initial={{
    opacity: 0,
    x: 120,      // Start from right
    scale: 0.9,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    scale: 1,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  viewport={{ once: true }}
  whileHover={{
    scale: 1.06,
    y: -12,
    rotate: -1,
    boxShadow: "0 25px 60px",
  }}
>


     <motion.h2
  style={styles.heading}
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>Ballasted Mounting Structures</motion.h2>

     <motion.p
  style={styles.text}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
>
        Tailor-made mounting solutions developed to match your site
        conditions while ensuring safety, efficiency and long service life.
      </motion.p>
    </motion.div>

  </motion.div>
</section>





{/* Content */}
<section
  style={{
    ...styles.content,
    backgroundImage: `linear-gradient(
      rgba(0,0,0,0.55),
      rgba(0,0,0,0.55)
    ), url(${mmmm})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Mounting Cards */}

  <motion.div style={styles.cardContainer}>

  <motion.div
  style={{
    ...styles.card,
    backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${pole})`,
  }}
  variants={{
    hidden: {
      opacity: 0,
      x: -150, // Starts from left
      scale: 0.9,
    },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
  }}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  whileHover={{
    scale: 1.06,
    y: -12,
    rotate: -1,
    boxShadow: "0 25px 60px",
  }}
>


     <motion.h2
  style={styles.heading}
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>Pole Mounting Structures</motion.h2>

     <motion.p
  style={styles.text}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
>
        Tailor-made mounting solutions developed to match your site
        conditions while ensuring safety, efficiency and long service life.
      </motion.p>
    </motion.div>



    <motion.div
  style={{
    ...styles.card,
    backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${agricultural})`,
  }}
 variants={{
    hidden: {
      opacity: 0,
      x: -150, // Starts from left
      scale: 0.9,
    },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
  }}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  whileHover={{
    scale: 1.06,
    y: -12,
    rotate: -1,
    boxShadow: "0 25px 60px",
  }}
>


     <motion.h2
  style={styles.heading}
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>Agricultural Mounting Structures</motion.h2>

     <motion.p
  style={styles.text}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
>
        Tailor-made mounting solutions developed to match your site
        conditions while ensuring safety, efficiency and long service life.
      </motion.p>
    </motion.div>

    

  </motion.div>
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
    padding: "50px 80px",
    background: "#fff",
    minHeight: "400px",
  },





cardContainer: {
  display: "flex",
  justifyContent: "center",
  gap: "40px",
  flexWrap: "wrap",
},

card: {
  width: "260px",
  minHeight: "420px",
  borderRadius: "20px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "35px",
  color: "#fff",
  boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
  transition: "0.4s ease",
  cursor: "pointer",
},

cardTitle: {
  fontSize: "28px",
  fontWeight: "700",
  marginBottom: "15px",
},

cardText: {
  fontSize: "16px",
  lineHeight: "1.8",
  color: "#f1f1f1",
},

header:{
fontSize: "52px",
  fontWeight: "300",
  color: "yellow",
  marginTop: "0px",
  marginBottom: "20px",
  textTransform: "uppercase",
  letterSpacing: "1px",
},

};