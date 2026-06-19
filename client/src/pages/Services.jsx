import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import backgroundImage from "../assets/img.jpg";
import { motion } from "framer-motion";

function Services() {
const navigate = useNavigate();

return (
<> <div style={styles.container}><motion.button
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
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}

>

Our Comprehensive Solar System
</motion.h1>


   <motion.div
  style={styles.cardContainer}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  {[
    {
      title: "Residential Solar Installation",
      desc: "Customized solar solutions for homes to reduce electricity bills and ensure energy independence.",
    },
    {
      title: "Commercial Solar Solutions",
      desc: "Cost-effective solar systems for businesses, offices and commercial establishments.",
    },
    {
      title: "Industrial Solar Projects",
      desc: "High-capacity solar solutions for factories and industries with maximum efficiency and reliability.",
    },
    {
      title: "On-Grid Solar Systems",
      desc: "Independence solar solutions with battery backup for remote and off-grid locations.",
    },
    {
      title: "Hybrid Solar Systems",
      desc: "Smart hybrid systems that combine solar power with grid electricity for uninterrupted energy supply.",
    },
    {
      title: "Solar Water Pumps",
      desc: "Efficient solar water pumps for agriculture, farms and irrigation needs.",
    },
    {
      title: "Solar Battery Solutions",
      desc: "Reliable battery solutions for backup power and energy storage.",
    },
    {
      title: "Net Metering Assistance",
      desc: "Expert guidance and support for navigating net metering programs and maximizing solar savings.",
    },
    {
      title: "Government Subsidy Guidance",
      desc: "Complete assistance for availing government subsidies and benefits on solar installations.",
    },
    {
      title: "Site Survey & Energy Audit",
      desc: "Detailed site survey and audit to design the best solar solutions for your needs.",
    },
    {
      title: "Maintenance & AMC Services",
      desc: "Regular maintenance and AMC services for long-term performance and peace of mind.",
    },
  ].map((service, index) => (
    <motion.div
      key={index}
      style={styles.card}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -12,
        scale: 1.03,
        boxShadow: "0 15px 35px rgba(0,0,0,0.35)",
      }}
    >
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
    </motion.div>
  ))}
</motion.div>

  </div>

  <Footer />
</>

);
}

const styles = {
container: {
minHeight: "100vh",
padding: "100px 40px",
textAlign: "center",
backgroundImage: `url(${backgroundImage})`,
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
backgroundColor: "#f5f5f5",
},

heading: {
fontSize: "50px",
marginBottom: "40px",
color: "#071A2D",
},

cardContainer: {
display: "flex",
flexWrap: "wrap",
justifyContent: "center",
gap: "20px",
},

card: {
width: "280px",
padding: "25px",
borderRadius: "12px",
backgroundColor: "#262052",
color: "white",
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

export default Services;
