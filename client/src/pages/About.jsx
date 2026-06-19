import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import backgroundImage from "../assets/img.jpg";
import { motion } from "framer-motion";

function About() {
const navigate = useNavigate();

return (

<> <div style={styles.container}> <div style={styles.overlay}> <motion.button
style={styles.button}
onClick={() => navigate("/")}
whileHover={{
scale: 1.08,
y: -3,
}}
whileTap={{
scale: 0.95,
}}

>

← Back to Home
</motion.button>


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


      <motion.div
style={styles.cardContainer}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
variants={{
visible: {
transition: {
staggerChildren: 0.2,
},
},
}}

>

<motion.div
className="card"
style={styles.card}
variants={{
hidden: { opacity: 0, y: 60 },
visible: { opacity: 1, y: 0 },
}}
whileHover={{
y: -10,
scale: 1.03,
boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
}}

>


<div className="card-body">

  <h4 className="card-title">WHY CHOOSE US</h4>
  <p>✓ Experienced solar professionals</p>
  <p>✓ Premium quality solar panels</p>
  <p>✓ Certified installation</p>
  <p>✓ Dedicated after-sales support</p>
  <p>✓ Competitive pricing guarantee</p>
</div>


</motion.div>

<motion.div
className="card"
style={styles.card}
variants={{
hidden: { opacity: 0, y: 60 },
visible: { opacity: 1, y: 0 },
}}
whileHover={{
y: -10,
scale: 1.03,
boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
}}

>


<div className="card-body">


  <h4 className="card-title">AVS SOLAR CONSULTANCY</h4>
  <p>
    Powering India's sustainable future with premium solar
    energy solutions. We specialize in residential,
    commercial, and industrial solar installations,
    delivering excellence from consultation to
    commissioning.
  </p>
</div>

</motion.div>

<motion.div
className="card"
style={styles.card}
variants={{
hidden: { opacity: 0, y: 60 },
visible: { opacity: 1, y: 0 },
}}
whileHover={{
y: -10,
scale: 1.03,
boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
}}

>

<div className="card-body">
  <h4 className="card-title">OUR MISSION</h4>
  <p>
    To empower homes and businesses with clean,
    sustainable solar energy solutions that reduce costs
    and protect our environment.
  </p>
</div>


</motion.div>

<motion.div
className="card"
style={styles.card}
variants={{
hidden: { opacity: 0, y: 60 },
visible: { opacity: 1, y: 0 },
}}
whileHover={{
y: -10,
scale: 1.03,
boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
}}

>

<div className="card-body">

  <h4 className="card-title">OUR VISION</h4>
  <p>
    To be India's most trusted solar consultancy,
    leading the transition to clean energy through
    excellence and innovation.
  </p>
</div>

</motion.div>
</motion.div>

    </div>
  </div>

  <Footer />
</>

);
}

const styles = {
container: {
minHeight: "100vh",
backgroundImage: `url(${backgroundImage})`,
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
},

overlay: {
minHeight: "100vh",
backgroundColor: "rgba(0,0,0,0.65)",
padding: "100px 40px",
textAlign: "center",
},

heading: {
fontSize: "52px",
fontWeight: "700",
color: "#ffffff",
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
marginTop: "50px",
padding: "14px 30px",
border: "none",
borderRadius: "30px",
background: "linear-gradient(135deg,#ffb703,#fb8500)",
color: "white",
cursor: "pointer",
fontSize: "16px",
fontWeight: "600",
},
};

export default About;
