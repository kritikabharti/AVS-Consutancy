import React from "react";
import {
  FiPhone,
  FiMail,
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiMapPin,
  FiArrowUp,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logofile from "../assets/logo.png";

function Footer() {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="footer">
        <div className="footerWrapper">

          {/* ================= BRAND ================= */}
          <div className="footerBrand">
            <div
              className="footerLogo"
              onClick={() => navigate("/")}
            >
              <img src={logofile} alt="AVS Solar Consultancy" />

              <div>
                <h2>AVS SOLAR</h2>
                <span>CONSULTANCY</span>
              </div>
            </div>

            <p className="brandDescription">
              Your trusted partner for complete solar solutions across India.
              We specialize in consultation, design, installation, net
              metering, and long-term maintenance support for residential,
              commercial, and industrial solar projects.
            </p>

            <div className="tagline">
              Powering a cleaner & brighter future.
            </div>

            {/* Social Media */}
            <div className="socialLinks">
              <a
                href="https://www.instagram.com/avs_solar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FiFacebook />
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FiYoutube />
              </a>
            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div className="footerColumn">
            <h3>Contact Us</h3>

            <div className="footerLine" />

            <a
              className="contactItem"
              href="tel:+919988210808"
            >
              <span className="iconBox">
                <FiPhone />
              </span>

              <div>
                <small>CALL US</small>
                <strong>+91 9988210808</strong>
              </div>
            </a>

            <a
              className="contactItem"
              href="tel:+918091853310"
            >
              <span className="iconBox">
                <FiPhone />
              </span>

              <div>
                <small>CALL US</small>
                <strong>+91 8091853310</strong>
              </div>
            </a>

            <a
              className="contactItem"
              href="mailto:avsconsultancy007@gmail.com"
            >
              <span className="iconBox">
                <FiMail />
              </span>

              <div>
                <small>EMAIL</small>
                <strong>
                  avsconsultancy007@gmail.com
                </strong>
              </div>
            </a>

            <a
              className="contactItem"
              href="https://www.instagram.com/avs_solar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="iconBox">
                <FiInstagram />
              </span>

              <div>
                <small>INSTAGRAM</small>
                <strong>@avs_solar</strong>
              </div>
            </a>
          </div>

          {/* ================= LOCATIONS ================= */}
          <div className="footerColumn locationsColumn">
            <h3>Our Locations</h3>

            <div className="footerLine" />

            {/* Main Branch */}
            <div className="locationCard">
              <div className="locationIcon">
                <FiMapPin />
              </div>

              <div>
                <h4>Main Branch</h4>

                <p>
                  22-23, Torrent Hotel Compound,
                  <br />
                  Opp. Nagalpur College,
                  <br />
                  Mehsana-02 (N.G), Gujarat
                  <br />
                  384002
                </p>
              </div>
            </div>

            {/* Sub Branch */}
            <div className="locationCard">
              <div className="locationIcon">
                <FiMapPin />
              </div>

              <div>
                <h4>Sub Branch</h4>

                <p>
                  122 Vill Chowki,
                  <br />
                  P.O. Chowki Khalet,
                  <br />
                  Teh. Palampur,
                  <br />
                  Distt. Kangra, H.P.
                  <br />
                  176061
                </p>
              </div>
            </div>

            {/* Technical Branch */}
            <div className="locationCard">
              <div className="locationIcon">
                <FiMapPin />
              </div>

              <div>
                <h4>Technical Branch</h4>

                <p>
                  SCF-116, 2nd Floor,
                  <br />
                  Industrial Area Sector-5,
                  <br />
                  Mohali
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="footerBottom">
          <p>
            © {new Date().getFullYear()} AVS Solar Consultancy.
            All Rights Reserved.
          </p>

          <button
            className="topButton"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FiArrowUp />
          </button>
        </div>
      </footer>

      {/* ================= RESPONSIVE CSS ================= */}
    <style>{`
  * {
    box-sizing: border-box;
  }

  .footer {
    width: 100%;
    background:
      radial-gradient(
        circle at top right,
        rgba(255, 255, 255, 0.05),
        transparent 35%
      ),
      linear-gradient(
        135deg,
        #020b16 0%,
        #061a2d 50%,
        #03111f 100%
      );

    color: #fff;
    padding: 70px 6% 0;
    position: relative;
    overflow: hidden;
  }

  /* ================= TOP BORDER ================= */

  .footer::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.8),
      transparent
    );
  }

  /* ================= MAIN WRAPPER ================= */

  .footerWrapper {
    width: 100%;
    max-width: 1350px;
    margin: 0 auto;

    display: grid;

    grid-template-columns:
      minmax(0, 1.25fr)
      minmax(0, 0.9fr)
      minmax(0, 1.25fr);

    gap: 70px;
    padding-bottom: 60px;
  }

  /* ================= BRAND ================= */

  .footerBrand {
    min-width: 0;
  }

  .footerLogo {
    display: flex;
    align-items: center;
    gap: 14px;

    cursor: pointer;
    width: fit-content;

    margin-bottom: 25px;
  }

  .footerLogo img {
    width: 62px;
    height: 62px;

    object-fit: contain;
    border-radius: 10px;
  }

  .footerLogo h2 {
    margin: 0;

    font-size: 22px;
    letter-spacing: 1.5px;
    font-weight: 700;

    color: #ffffff;
  }

  .footerLogo span {
    display: block;

    margin-top: 3px;

    font-size: 11px;
    letter-spacing: 3px;

    color: #ffffff;
    font-weight: 600;
  }

  .brandDescription {
    color: #cbd5e1;

    font-size: 15px;
    line-height: 1.8;

    margin: 0;
    max-width: 500px;
  }

  .tagline {
    margin-top: 25px;

    color: #ffffff;

    font-size: 16px;
    font-weight: 700;

    line-height: 1.5;

    max-width: 300px;
  }

  /* ================= SOCIAL ================= */

  .socialLinks {
    display: flex;
    gap: 12px;

    margin-top: 28px;
  }

  .socialLinks a {
    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    color: #ffffff;

    background: rgba(255, 255, 255, 0.06);

    border: 1px solid rgba(255, 255, 255, 0.15);

    text-decoration: none;

    font-size: 19px;

    transition: all 0.3s ease;
  }

  .socialLinks a:hover {
    transform: translateY(-4px);

    background: #ffffff;

    border-color: #ffffff;

    color: #061a2d;
  }

  /* ================= COLUMNS ================= */

  .footerColumn {
    min-width: 0;
  }

  .footerColumn h3 {
    margin: 0;

    color: #ffffff;

    font-size: 21px;
    font-weight: 600;

    letter-spacing: 0.5px;
  }

  .footerLine {
    width: 55px;
    height: 2px;

    background: #ffffff;

    border-radius: 10px;

    margin: 12px 0 25px;
  }

  /* ================= CONTACT ================= */

  .contactItem {
    display: flex;
    align-items: center;

    gap: 14px;

    text-decoration: none;
    color: #fff;

    padding: 12px 0;

    margin-bottom: 7px;

    min-width: 0;
  }

  .iconBox {
    flex-shrink: 0;

    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;

    color: #ffffff;

    background: rgba(255, 255, 255, 0.06);

    border: 1px solid rgba(255, 255, 255, 0.14);

    font-size: 18px;

    transition: all 0.3s ease;
  }

  .contactItem small {
    display: block;

    color: #94a3b8;

    font-size: 10px;

    letter-spacing: 1.5px;

    margin-bottom: 3px;
  }

  .contactItem strong {
    display: block;

    color: #e5e7eb;

    font-size: 14px;
    font-weight: 500;

    line-height: 1.4;

    overflow-wrap: anywhere;

    transition: color 0.3s ease;
  }

  .contactItem:hover strong {
    color: #ffffff;
  }

  .contactItem:hover .iconBox {
    background: #ffffff;
    color: #061a2d;
    border-color: #ffffff;
  }

  /* ================= LOCATIONS ================= */

  .locationCard {
    display: flex;

    gap: 14px;

    padding: 15px;

    margin-bottom: 15px;

    background: rgba(255, 255, 255, 0.035);

    border: 1px solid rgba(255, 255, 255, 0.08);

    border-radius: 12px;

    transition: all 0.3s ease;
  }

  .locationCard:hover {
    transform: translateY(-3px);

    border-color: rgba(255, 255, 255, 0.35);

    background: rgba(255, 255, 255, 0.055);
  }

  .locationIcon {
    flex-shrink: 0;

    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;

    color: #ffffff;

    background: rgba(255, 255, 255, 0.06);

    border: 1px solid rgba(255, 255, 255, 0.12);

    font-size: 18px;

    transition: all 0.3s ease;
  }

  .locationCard:hover .locationIcon {
    background: #ffffff;
    color: #061a2d;
  }

  .locationCard h4 {
    margin: 0 0 6px;

    color: #ffffff;

    font-size: 14px;
    font-weight: 700;
  }

  .locationCard p {
    margin: 0;

    color: #b8c4d2;

    font-size: 12px;

    line-height: 1.65;
  }

  /* ================= BOTTOM ================= */

  .footerBottom {
    width: 100%;
    max-width: 1350px;

    margin: 0 auto;

    min-height: 75px;

    border-top: 1px solid rgba(255, 255, 255, 0.1);

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;
  }

  .footerBottom p {
    margin: 0;

    color: #94a3b8;

    font-size: 13px;
  }

  /* ================= BACK TO TOP ================= */

  .topButton {
    width: 42px;
    height: 42px;

    border: 1px solid rgba(255, 255, 255, 0.35);

    border-radius: 50%;

    background: rgba(255, 255, 255, 0.06);

    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    font-size: 18px;

    transition: all 0.3s ease;
  }

  .topButton:hover {
    transform: translateY(-4px);

    background: #ffffff;

    color: #071522;

    border-color: #ffffff;
  }

  /* ================= TABLET ================= */

  @media (max-width: 1000px) {

    .footer {
      padding: 60px 35px 0;
    }

    .footerWrapper {
      grid-template-columns: 1fr 1fr;

      gap: 45px;
    }

    .footerBrand {
      grid-column: 1 / -1;
    }

    .brandDescription {
      max-width: 750px;
    }
  }

  /* ================= MOBILE ================= */

  @media (max-width: 650px) {

    .footer {
      padding: 45px 20px 0;
    }

    .footerWrapper {
      display: flex;

      flex-direction: column;

      gap: 40px;

      padding-bottom: 40px;
    }

    .footerBrand,
    .footerColumn {
      width: 100%;

      min-width: 0;
    }

    .footerLogo {
      gap: 10px;
    }

    .footerLogo img {
      width: 52px;
      height: 52px;
    }

    .footerLogo h2 {
      font-size: 18px;
    }

    .footerLogo span {
      font-size: 9px;

      letter-spacing: 2px;
    }

    .brandDescription {
      font-size: 14px;

      line-height: 1.75;

      max-width: none;
    }

    .tagline {
      font-size: 15px;
    }

    .socialLinks {
      margin-top: 22px;
    }

    .footerColumn h3 {
      font-size: 19px;
    }

    .contactItem {
      width: 100%;

      padding: 10px 0;
    }

    .contactItem strong {
      font-size: 13px;
    }

    .locationCard {
      width: 100%;

      padding: 14px;
    }

    .locationCard p {
      font-size: 12px;

      line-height: 1.65;
    }

    .footerBottom {
      min-height: auto;

      padding: 20px 0;

      flex-direction: column;

      justify-content: center;

      text-align: center;

      gap: 15px;
    }

    .footerBottom p {
      font-size: 11px;

      line-height: 1.5;
    }

    .topButton {
      width: 40px;
      height: 40px;
    }
  }

  /* ================= VERY SMALL MOBILE ================= */

  @media (max-width: 380px) {

    .footer {
      padding-left: 15px;
      padding-right: 15px;
    }

    .footerLogo h2 {
      font-size: 16px;
    }

    .footerLogo span {
      font-size: 8px;
    }

    .brandDescription {
      font-size: 13px;
    }

    .contactItem {
      gap: 10px;
    }

    .iconBox {
      width: 38px;
      height: 38px;
    }

    .locationIcon {
      width: 36px;
      height: 36px;
    }

    .locationCard {
      gap: 10px;
    }
  }
`}</style>
    </>
  );
}

export default Footer;