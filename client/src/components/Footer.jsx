import React from "react";

function Footer() {
return (
     <footer style={styles.footer}> <div style={styles.footerContainer}> <div> 
<p>Your trusted partner for complete solar solutions across India.</p> </div>

    <div>
      <h4>Contact Us</h4>
      <h4>-We are here to help you-</h4>
      <p>Phone: +91 9988210808</p>
      <p>Phone: +91 8091853310</p>
      <p>Email: avsconsultancy007@gmail.com</p>
      <p>Instagram: avs_solar</p>
      <p>Facebook: Advance Value Services-AVS Consultancy</p>
      <p>YouTube: AVSSOLAR</p>
      <p>Main Branch: 22-23,Torrent Hotel Compound Opp. Nagalpur College mehsana 02(N.G) Gujrat 384002</p>
      <p>Sub Branch: 122 Vill Chowki P.O. Chowki Khalet Teh.Palampur Distt.Kangra H.P.176061</p>
      <p>Technical Branch: SCF-116,2nd Floor ,Ind Area Sector 5,Mohali</p>
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
};

export default Footer;
