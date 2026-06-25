import React from "react";

function Footer() {
return (
     <div style={styles.footerContainer}>
  {/* Company */}
  <div style={styles.footerColumn}>
    <h3 style={styles.heading}>AVS Solar Consultancy</h3>
    <p style={styles.description}>
      Your trusted partner for complete solar solutions across India.
      We specialize in consultation, design, installation, net metering,
      and long-term maintenance support for residential, commercial,
      and industrial projects.
    </p>
  </div>

  {/* Contact */}
  <div style={styles.footerColumn}>
    <h3 style={styles.heading}>Contact Us</h3>

    <p>📞 <a href="tel:+919988210808">+91 9988210808</a></p>
    <p>📞 <a href="tel:+918091853310">+91 8091853310</a></p>

    <p>
      ✉️{" "}
      <a href="mailto:avsconsultancy007@gmail.com">
        avsconsultancy007@gmail.com
      </a>
    </p>

    <p>
      📷{" "}
      <a
        href="https://www.instagram.com/avs_solar"
        target="_blank"
        rel="noopener noreferrer"
      >
        @avs_solar
      </a>
    </p>

    <p>
      👍{" "}
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Advance Value Services - AVS Consultancy
      </a>
    </p>

    <p>
      ▶{" "}
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        AVSSOLAR
      </a>
    </p>
  </div>

  {/* Branches */}
  <div style={styles.footerColumn}>
    <h3 style={styles.heading}>Our Locations</h3>

    <p>
      <strong>Main Branch</strong><br />
      22-23, Torrent Hotel Compound Opp. Nagalpur College,
      Mehsana-02 (N.G), Gujarat 384002
    </p>

    <p>
      <strong>Sub Branch</strong><br />
      122 Vill Chowki, P.O. Chowki Khalet,
      Teh. Palampur, Distt. Kangra, H.P. 176061
    </p>

    <p>
      <strong>Technical Branch</strong><br />
      SCF-116, 2nd Floor,
      Industrial Area Sector-5,
      Mohali
    </p>
  </div>
  </div>



);
}

const styles = {
footer: {
  background: "linear-gradient(135deg, #02162b, #0A284F)",
  color: "white",
  padding: "60px 50px 25px",
},

footerContainer: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "40px",
  maxWidth: "1300px",
  margin: "0 auto",
},

footerColumn: {
  textAlign: "left",
  color:"white",
},

heading: {
  color: "#dfdcd0",
  marginBottom: "20px",
  fontSize: "20px",
  fontWeight: "400",
},

description: {
  lineHeight: "1.8",
  color: "#d1d5db",
},

copyright: {
  textAlign: "center",
  marginTop: "30px",
  paddingTop: "20px",
  borderTop: "1px solid rgba(255,255,255,0.15)",
  color: "#cbd5e1",
  fontSize: "14px",
},
};

export default Footer;
