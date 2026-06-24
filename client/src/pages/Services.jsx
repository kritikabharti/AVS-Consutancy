import React from "react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logoFile from "../assets/logo.png";
import backgroundImage from "../assets/solar-bg.jpg";
import whyChooseImg from "../assets/soInstallation.jpg";
import epcBg from "../assets/wallpaper1.jpg";
import wallp from "../assets/wallpaper2.jpg";
import solution from "../assets/BidWe.jpg";
import projects from "../assets/comm.jpg";
import grid from "../assets/23.jpg";
import gridoff from "../assets/images (5).jpg";
import hybrid from "../assets/images (6).jpg";
import battery from "../assets/battery.jpg";





function Services({ token, logout }) {
  const navigate = useNavigate();
  const isLoggedIn = !!token;

  const handleLogout = () => {
    if (logout) logout();
    navigate("/login");
  };

  return (
    <>
      <div style={styles.container}>
        {/* Navbar */}
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
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              HOME
            </motion.button>

            <motion.button
              onClick={() => navigate("/about")}
              style={styles.link}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              ABOUT
            </motion.button>

            <motion.button
              onClick={() => navigate("/services")}
              style={styles.link}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              SERVICES
            </motion.button>

            <motion.button
              onClick={() => navigate("/team")}
              style={styles.link}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              OUR TEAM
            </motion.button>

            <motion.button
              onClick={() => navigate("/store")}
              style={styles.link}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              STORE
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

        {/* Hero Section */}
        <section
  style={{
    ...styles.heroSection,
    backgroundImage: `linear-gradient(
      rgba(0,0,0,0.65),
      rgba(0,0,0,0.75)
    ), url(${backgroundImage})`,
  }}
>
  <motion.div
    style={styles.heroContent}
    initial={{ opacity: 0, x: -80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <motion.p
      style={styles.heroTag}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      GO GREEN GO CLEAN
    </motion.p>

    <motion.div
      style={styles.headingLine}
      initial={{ width: 0 }}
      whileInView={{ width: 120 }}
      transition={{ duration: 1 }}
    />

    <motion.h1
      style={styles.heroHeading}
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      Our Comprehensive
      <br />
      <span style={{ color: "#ffb703" }}>
        Solar
      </span>{" "}
      System
    </motion.h1>

    <motion.p
      style={styles.heroText}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      AVS Solar Consultancy delivers complete solar energy
      solutions from consultation and design to installation,
      net metering, maintenance, and long-term support.
      Our goal is to provide reliable, cost-effective and
      sustainable solar systems for residential,
      commercial and industrial customers across India.
    </motion.p>

  </motion.div>
</section>


<section
  style={{
  ...styles.infoSection,
  backgroundImage: `url(${epcBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}}
>
  {/* IMAGE Animation */}
  <motion.div
    style={styles.journeyImageContainer}
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <motion.img
    src={whyChooseImg}
    alt="Why Choose AVS Solar"
    style={styles.journeyImage}
    whileHover={{
      scale: 1.05,
    }}
    transition={{ duration: 0.3 }}
  />
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
    
    >
      Residential Solar Installation
    </motion.h2>

    <motion.p
      style={styles.infoText}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      Residential solar installations by AVS Solar Consultancy provide end-to-end services to help homeowners lower electricity bills and achieve energy independence. Their process includes site assessments, custom system designs, and support for government subsidies. They install grid-tie, off-grid, and hybrid configurations using high-efficiency solar panels and reliable inverters.
    </motion.p>
  </motion.div>
</section>



<section
  style={{
    ...styles.infoSection,
    backgroundImage: `url(${wallp})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Text Left */}
  <motion.div
    style={styles.contentContainer}
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <motion.h2
      style={styles.infoTitle}
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      Commercial solar solution
    </motion.h2>

    <motion.p
      style={styles.infoText}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      AVS Solar Consultancy provides scalable commercial solar solutions engineered to minimize operational overhead, achieve sustainability targets, and shield businesses from rising grid tariffs. Their full-service engineering, procurement, and construction (EPC) model begins with advanced energy load profiling and structural roof analysis to design high-yield, Tier-1 PV systems optimized for factories, warehouses, office complexes, and institutional facilities. Businesses can leverage capital-expenditure (CAPEX) investment models for immediate asset ownership or operational-expenditure (OPEX/PPA) frameworks to install solar with zero upfront costs while purchasing power at a fixed, discounted rate. 
    </motion.p>
  </motion.div>

  {/* Image Right */}
  <motion.div
    style={styles.journeyImageContainer}
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <motion.img
      src={solution}
      alt="Residential Solar"
      style={styles.journeyImage}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
</section>




<section
  style={{
  ...styles.infoSection,
  backgroundImage: `url(${epcBg})`,
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
    <motion.img
    src={projects}
    alt="Why Choose AVS Solar"
    style={styles.journeyImage}
    whileHover={{
      scale: 1.05,
    }}
    transition={{ duration: 0.3 }}
  />
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
    
    >
    Industrial Solar Projects
    </motion.h2>

     <motion.p
      style={styles.infoText}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
     AVS Solar Consultancy delivers high-capacity industrial solar projects engineered to significantly reduce high-tension electricity costs and meet corporate renewable purchase obligations (RPOs). Their comprehensive turnkey services encompass rigorous structural roof health checks, heavy-duty electrical engineering, procurement of premium Tier-1 components, and professional installation tailored for heavy industries like manufacturing, textiles, and chemical plants. To accommodate diverse corporate financial strategies, they offer flexible financing structures including direct ownership (CAPEX) for maximum long-term asset value or zero-upfront power purchase agreements (OPEX) for immediate operational savings. 
    </motion.p>
  </motion.div>
</section>



<section
  style={{
    ...styles.infoSection,
    backgroundImage: `url(${wallp})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Text Left */}
  <motion.div
    style={styles.contentContainer}
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <motion.h2
      style={styles.infoTitle}
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      On-Grid Solar Solutions
    </motion.h2>

    <motion.p
      style={styles.infoText}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      AVS Solar Consultancy provides high-efficiency on-grid solar solutions designed to drastically reduce monthly electricity bills by syncing directly with the local utility network. These grid-tied setups are the most cost-effective solar option because they eliminate the need for expensive battery banks, sending any excess power generated during sunny hours back to the grid. Through the integration of smart net-metering technology, homeowners and businesses receive accurate energy credits from their utility providers, which effectively offsets their nighttime electricity consumption. 
    </motion.p>
  </motion.div>

  {/* Image Right */}
  <motion.div
    style={styles.journeyImageContainer}
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <motion.img
      src={grid}
      alt="Residential Solar"
      style={styles.journeyImage}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
</section>




<section
  style={{
  ...styles.infoSection,
  backgroundImage: `url(${epcBg})`,
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
    <motion.img
    src={gridoff}
    alt="Why Choose AVS Solar"
    style={styles.journeyImage}
    whileHover={{
      scale: 1.05,
    }}
    transition={{ duration: 0.3 }}
  />
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
    
    >
    Off-grid Solar Systems
    </motion.h2>

     <motion.p
      style={styles.infoText}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
     Residential Solar Installation of avs solar consultancy  give information in 
     paragrapfAVS Solar provides end-to-end residential solar solutions designed to
      lower household energy costs, minimize grid dependency, and guarantee a steady 
      power supply. Their certified engineers handle the entire project lifecycle,
       starting with a free site evaluation and energy consumption audit to tailor a custom
        system configuration for your roof. To guarantee up to a 90% reduction in electricity 
        bills and high-quality performance, the company installs aesthetic, 
        low-profile Tier-1 solar panel brands
        backed by a 25-year performance warranty and a 5-year installation warranty.  
        
          
    </motion.p>
  </motion.div>
</section>




<section
  style={{
    ...styles.infoSection,
    backgroundImage: `url(${wallp})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Text Left */}
  <motion.div
    style={styles.contentContainer}
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <motion.h2
      style={styles.infoTitle}
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      Hybrid Solar Systems
    </motion.h2>

    <motion.p
      style={styles.infoText}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      Hybrid solar systems combine the best features of grid-tied and off-grid configurations by remaining connected to the utility grid while integrating a dedicated solar battery backup bank. During peak daylight hours, the solar panels power your household appliances directly, and any surplus electricity is simultaneously routed to recharge your batteries. Once the batteries are fully charged, the system funnels the remaining excess power back into the utility grid, allowing you to earn credits through net metering regulations. If your panels produce less electricity during nighttime or cloudy weather, the system intelligently draws energy first from your stored battery reserves, turning to the external grid only as a secondary fallback.
    </motion.p>
  </motion.div>

  {/* Image Right */}
  <motion.div
    style={styles.journeyImageContainer}
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <motion.img
      src={hybrid}
      alt="Residential Solar"
      style={styles.journeyImage}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
</section>




<section
  style={{
  ...styles.infoSection,
  backgroundImage: `url(${epcBg})`,
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
    <motion.img
    src={battery}
    alt="Why Choose AVS Solar"
    style={styles.journeyImage}
    whileHover={{
      scale: 1.05,
    }}
    transition={{ duration: 0.3 }}
  />
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
    
    >
    Solar Battery Solutions
    </motion.h2>

     <motion.p
      style={styles.infoText}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
     Solar battery solutions serve as the critical energy storage core for hybrid and off-grid configurations, capturing the excess electricity generated by your panels during peak sun hours for use at night or during power outages. Modern residential installations primarily utilize Lithium-ion (including Lithium Iron Phosphate or LFP) batteries due to their high depth of discharge, compact size, and long lifespans of up to 10 to 15 years, though budget-friendly Lead-acid options remain available for basic backup needs.  
        
          
    </motion.p>
  </motion.div>
</section>



      </div>

      <Footer />
    </>
  );
}

const styles = {
  container: {
  minHeight: "10vh",
  paddingTop: "0px",
},

 heroSection: {
  minHeight: "70vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "120px 80px",
},

heroContent: {
  maxWidth: "650px",
  textAlign: "left",
},

headingLine: {
  width: "120px",
  height: "4px",
  background: "#ffb703",
  borderRadius: "20px",
  marginBottom: "25px",
},

heroTag: {
  color: "#ffb703",
  letterSpacing: "4px",
  fontSize: "14px",
  fontWeight: "600",
  marginBottom: "15px",
  textAlign: "left",
},

heroHeading: {
  fontSize: "50px",
  fontWeight: "600",
  lineHeight: "1.1",
  color: "#fff",
  marginBottom: "25px",
  textAlign: "left",
},

heroText: {
  fontSize: "15px",
  color: "#e5e7eb",
  lineHeight: "1.8",
  marginBottom: "35px",
  textAlign: "left",
},

  navbar: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 40px",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
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
  fontSize: "40px",
  fontWeight: "600",
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

};

export default Services;