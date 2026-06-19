import React from "react";

function Footer() {
return (
     <footer style={styles.footer}> <div style={styles.footerContainer}> <div> 
<p>Your trusted partner for complete solar solutions across India.</p> </div>

   <div style={styles.contactSection}>
  <h4>Contact Us</h4>
  <h5>- We are here to help you -</h5>

  <p>
    Phone{" "}
    <a href="tel:+919988210808">
      +91 9988210808
    </a>
  </p>

  <p>
    Phone{" "}
    <a href="tel:+918091853310">
      +91 8091853310
    </a>
  </p>

  <p>
    Gmail{" "}
    <a href="mailto:avsconsultancy007@gmail.com">
      avsconsultancy007@gmail.com
    </a>
  </p>

  <p>
    Instagram{" "}
    <a
      href="https://www.instagram.com/avs_solar"
      target="_blank"
      rel="noopener noreferrer"
    >
      avs_solar
    </a>
  </p>

  <p>
    Facebook{" "}
    <a
      href="https://www.facebook.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Advance Value Services - AVS Consultancy
    </a>
  </p>

  <p>
    ▶Youtube{" "}
    <a
      href="@AVSSolar"
      target="_blank"
      rel="noopener noreferrer"
    >
      AVSSOLAR
    </a>
  </p>

  <p>
     <strong>Main Branch:</strong><br />
    22-23, Torrent Hotel Compound Opp. Nagalpur College,
    Mehsana-02 (N.G), Gujarat 384002
  </p>

  <p>
   <strong>Sub Branch:</strong><br />
    122 Vill Chowki, P.O. Chowki Khalet,
    Teh. Palampur, Distt. Kangra,
    H.P. 176061
  </p>

  <p>
    <strong>Technical Branch:</strong><br />
    SCF-116, 2nd Floor,
    Industrial Area Sector-5,
    Mohali
  </p>
</div>
  </div>

  <hr style={{ opacity: 0.2 }} />

  <p style={styles.copyright}>
    © 2026 AVS Solar Consultancy. All Rights Reserved.
  </p>
</footer>


);
}

const styles = {
footer: {
  backgroundColor: "#071A2D",
  color: "white",
  padding: "50px 60px 30px",
  textAlign: "center",
},

footerContainer: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "25px",
  marginBottom: "100px",
},

copyright: {
textAlign: "center",
marginTop: "20px",
opacity: 0.8,
fontSize: "14px",
},


  contactSection: {
    color: "white",
    lineHeight: "1.8",
  },
};

export default Footer;
