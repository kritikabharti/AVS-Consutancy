import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

function Learn() {
const navigate = useNavigate();

const courses = [
{
title: "WHY GO SOLAR?",
description:
"Reduce electricity bills by up to 90% and Increase your Property value Energy independence from grid Government subsidies available Low maintenence costs"
},
{
title: "BENEFITS OF SOLAR ENERGY",
description:
"Switching to solar power offers numerous advantages for homeowners, business, and industries across India. From substantial cost savings to environmental benefits, solar energy is the smart choice for a sustainable future.  "
},
{
title: "FINANCIAL BENEFITS",
description:
"Solar energy provides significant cost saving with minimal ongoing expenses. Enjoy predictable energy costs and protection from rising electricity rates"
},
{
title: "Environment Impsct",
description:
"Join the clean energy revolution. Reduce your carbon footprint and contribute to a sustainable future for India"
}
];

return ( <div style={styles.container}> <div style={styles.hero}> <motion.h1
  style={styles.heading}
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Learn About Solar Energy
</motion.h1>

<motion.p
  style={styles.subtitle}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  Explore renewable energy solutions and gain knowledge about
  sustainable solar technologies.
</motion.p>

    <motion.button
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
  </div>

 <motion.div
style={styles.cardContainer}
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}

>

{courses.map((course, index) => (
<motion.div
key={index}
style={styles.card}
initial={{ opacity: 0, y: 60 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{
duration: 0.6,
delay: 0,
}}
whileHover={{
scale: 1.05,
y: -12,
boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
}}
>
<h3
style={{
color: "#ffb703",
marginBottom: "15px",
fontSize: "22px",
}}
>
{course.title} </h3>

  <p
    style={{
      color: "#f1f1f1",
      lineHeight: "1.8",
    }}
  >
    {course.description}
  </p>
</motion.div>

))}
</motion.div>

  <Footer />
</div>

);
}

const styles = {
container: {
minHeight: "100vh",
background:
"linear-gradient(135deg, #071A2D 0%, #123456 100%)",
padding: "60px 30px",
color: "white",
},

hero: {
textAlign: "center",
marginBottom: "60px",
},

heading: {
fontSize: "52px",
fontWeight: "700",
marginBottom: "20px",
},

subtitle: {
maxWidth: "800px",
margin: "0 auto",
fontSize: "18px",
lineHeight: "1.8",
color: "#dcdcdc",
},

button: {
marginTop: "30px",
padding: "14px 30px",
border: "none",
borderRadius: "30px",
background: "linear-gradient(135deg,#ffb703,#fb8500)",
color: "white",
fontSize: "16px",
fontWeight: "600",
cursor: "pointer",
},

cardContainer: {
display: "flex",
justifyContent: "center",
flexWrap: "wrap",
gap: "25px",
},

card: {
width: "300px",
backgroundColor: "rgba(255,255,255,0.1)",
backdropFilter: "blur(10px)",
padding: "25px",
borderRadius: "15px",
boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
transition: "0.3s",
},
};

export default Learn;
