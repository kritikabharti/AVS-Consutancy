


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/CHAT.png";
import sectionBg from "../assets/scada-solar-monitoring-01.webp";
import wifi from "../assets/solar monitoring.png";
import gsm from "../assets/GPRS.png";
import cloud from "../assets/CLOUD.png";
import mobile from "../assets/mobile.png";
import scada from "../assets/SCADA.png";
import centralized from "../assets/centralised.png";


const monitoring = [
  {
    image: wifi,
    title: "Wi-Fi Solar Monitoring",
    desc: "Monitor your solar plant over Wi-Fi with secure and reliable real-time performance insights.",
  },
  {
    image: gsm,
    title: "GSM/GPRS Monitoring",
    desc: "Stay connected through GSM/GPRS networks and access your plant from virtually anywhere.",
  },
  {
    image: cloud,
    title: "Cloud-Based Monitoring",
    desc: "Secure cloud storage with real-time analytics and remote access from any device.",
  },
  {
    image: mobile,
    title: "Mobile App Monitoring",
    desc: "Track energy generation and system status directly from your smartphone.",
  },
  {
    image: scada,
    title: "SCADA Monitoring",
    desc: "Industrial-grade monitoring and control with advanced visualization and reporting.",
  },
  {
    image: centralized,
    title: "Centralized Monitoring",
    desc: "Manage multiple solar plants from one unified dashboard with complete visibility.",
  },
];

export default function Monitoring({ token, logout }) {
  return (
    <>
      <Navbar token={token} logout={logout} />
      <motion.section
  style={styles.hero}
  animate={{
    scale: [1, 1.06, 1],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

      <section style={styles.section}>
        <div style={styles.container}>
          <motion.h2
  style={styles.heading}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  Smart Monitoring Solutions
</motion.h2>

          <motion.p
  style={styles.subHeading}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2, duration: 0.8 }}
>
  Choose the monitoring solution that best fits your solar project.
</motion.p>



         <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  <Swiper
    modules={[Autoplay, Pagination, Navigation]}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    loop={true}
  >
    {monitoring.map((item, index) => (
      <SwiperSlide key={index}>
        <img
          src={item.image}
          alt={item.title}
          style={styles.slideImage}
        />
      </SwiperSlide>
    ))}
  </Swiper>
</motion.div>

        </div>
        
      </section>
        <Footer />
    </>
  );
}

const styles = {
 hero: {
  width: "100%",
  height: "100vh",
  margin: "0 auto", // centers the section
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
},

  slideImage: {
  width: "100%",
  height: "100vh", // almost full screen
  objectFit: "cover",
  borderRadius: "0px",
},

  section: {
  padding: "90px 20px",
  backgroundImage: `url(${sectionBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
},

  container: {
    maxWidth: "1300px",
    margin: "auto",
  },

 small: {
  color: "#0d6efd",
  letterSpacing: "2px",
  fontWeight: "600",
  marginBottom: "10px",
  textAlign: "center",
},

heading: {
  fontSize: "45px",
  marginBottom: "15px",
  color: "#222",
  textAlign: "center",
},

subHeading: {
  color: "#2c2929",
    fontSize: "20px",
  marginBottom: "50px",
  maxWidth: "650px",
  margin: "0 auto 50px",
  textAlign: "center",
},
 
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },


 
};