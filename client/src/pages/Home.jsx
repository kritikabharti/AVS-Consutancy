import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatBox from "../components/ChatBox";

import heroVideo from "../assets/solar-video.mp4";

import imagess from "../assets/home1.jpg";
import home2 from "../assets/Home2.jpg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/home5.jpg";
import home5 from "../assets/home50.jpg";
import home6 from "../assets/home6.jpg";
import home7 from "../assets/home7.jpg";
import Login from "../pages/Login";

function Home() {

  const navigate = useNavigate();
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoginPopup(true);
    }, 3000); // 60 seconds = 1 minute

    return () => clearTimeout(timer);
  }, []);

  /* ============================================================
     SOLAR JOURNEY DATA
  ============================================================ */

 const solarJourneyCards = [
  {
    number: "01",
    title: "FREE CONSULTATION",
    image: imagess,
    text:
      "We understand your energy needs and goals to recommend the right solar solution for your home or business.",
    path: "/solar-journey/consultation",
  },

  {
    number: "02",
    title: "SITE SURVEY",
    image: home2,
    text:
      "Our experts visit your site to analyze roof structure, shading, space availability and electrical requirements.",
    path: "/solar-journey/site-survey",
  },

  {
    number: "03",
    title: "CUSTOM SOLAR DESIGN",
    image: home3,
    text:
      "We design a customized solar system that maximizes efficiency, performance and long-term savings.",
    path: "/solar-journey/custom-design",
  },

  {
    number: "04",
    title: "QUOTATION AND APPROVAL",
    image: home4,
    text:
      "You receive a transparent quotation with clear details. We assist you throughout documentation and approvals.",
    path: "/solar-journey/quotation",
  },

  {
    number: "05",
    title: "INSTALLATION",
    image: home5,
    text:
      "Our skilled team installs the system using quality equipment with strict safety and industry standards.",
    path: "/solar-journey/installation",
  },

  {
    number: "06",
    title: "NET METERING",
    image: home6,
    text:
      "We help you with net metering connection so you can export excess energy and reduce electricity bills.",
    path: "/solar-journey/net-metering",
  },

  {
    number: "07",
    title: "AFTER-SALES SUPPORT",
    image: home7,
    text:
      "We provide ongoing monitoring, maintenance and support to ensure your system delivers peak performance.",
    path: "/solar-journey/after-sales",
  },
];


  return (

    <div className="home-page">


      {/* ==========================================================
          COMPLETE HOME PAGE CSS
      ========================================================== */}

  <style>{`

/* ==========================================================
   GLOBAL
========================================================== */

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background: #ffffff;
}

button {
  font-family: inherit;
}

img,
video {
  max-width: 100%;
}

img {
  display: block;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

h1,
h2,
h3,
h4,
p {
  overflow-wrap: break-word;
}


/* ==========================================================
   HERO SECTION
========================================================== */

.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 620px;

  overflow: hidden;

  display: flex;
  align-items: center;

  background: #061b2e;
}

.hero-video {
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  z-index: 0;
}

.hero-overlay {
  position: absolute;

  inset: 0;

  z-index: 1;

  background:
    linear-gradient(
      90deg,
      rgba(2, 18, 32, 0.92) 0%,
      rgba(2, 18, 32, 0.72) 38%,
      rgba(2, 18, 32, 0.30) 75%,
      rgba(2, 18, 32, 0.15) 100%
    );
}

.hero-content {
  position: relative;

  z-index: 2;

  width: 100%;

  max-width: 1200px;

  margin: 0 auto;

  padding: 40px 55px;
}

.hero-content-inner {
  max-width: 650px;
}

.hero-small-text {
  margin: 0 0 13px;

  color: #d4af37;

  font-size: 13px;

  font-weight: 700;

  letter-spacing: 1.5px;

  text-transform: uppercase;
}

.hero-title {
  margin: 0 0 18px;

  color: #ffffff;

  font-size: clamp(42px, 5vw, 70px);

  font-weight: 800;

  line-height: 1.04;

  letter-spacing: -1px;
}

.hero-title span {
  color: #d4af37;
}

.hero-subtitle {
  max-width: 580px;

  margin: 0 0 25px;

  color: rgba(255, 255, 255, 0.92);

  font-size: 15px;

  font-weight: 500;

  line-height: 1.6;
}

.learn-more-btn {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 8px;

  min-height: 40px;

  padding: 11px 20px;

  background: #ffffff;

  color: #071d31;

  border: 1px solid #ffffff;

  border-radius: 4px;

  font-size: 12px;

  font-weight: 700;

  cursor: pointer;

  transition: all 0.3s ease;
}

.learn-more-btn:hover {
  background: transparent;

  color: #ffffff;

  transform: translateY(-2px);
}


/* ==========================================================
   COMPANY STATS
========================================================== */

.company-stats-section {
  position: relative;

  width: 100%;

  padding: 17px 5%;

  background:
    linear-gradient(
      90deg,
      #0a1e31,
      #10283d
    );

  overflow: hidden;
}

.company-stats-container {
  position: relative;

  z-index: 2;

  width: 100%;

  max-width: 1000px;

  margin: 0 auto;

  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 0;
}

.company-stat-item {
  position: relative;

  min-width: 0;

  min-height: 62px;

  padding: 7px 24px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 13px;

  text-align: left;
}

.company-stat-item:not(:last-child)::after {
  content: "";

  position: absolute;

  right: 0;

  top: 10px;

  height: 42px;

  width: 1px;

  background:
    rgba(255, 255, 255, 0.3);
}

.company-stat-item h2 {
  margin: 0;

  color: #ffffff;

  font-size: 27px;

  font-weight: 800;

  line-height: 1;

  white-space: nowrap;
}

.company-stat-item p {
  margin: 0;

  color:
    rgba(255, 255, 255, 0.88);

  font-size: 11px;

  font-weight: 500;

  line-height: 1.3;
}


/* ==========================================================
   SOLAR JOURNEY SECTION
========================================================== */

.solar-journey-section {
  width: 100%;

  background: #ffffff;

  padding: 45px 0 0;

  overflow: hidden;
}


/* ==========================================================
   JOURNEY HEADING
========================================================== */

.journey-heading-section {
  width: 100%;

  max-width: 850px;

  margin: 0 auto;

  padding: 0 20px 35px;

  text-align: center;
}

.journey-heading {
  margin: 0 0 9px;

  color: #09233a;

  font-size:
    clamp(30px, 3vw, 42px);

  font-weight: 800;

  line-height: 1.1;
}

.heading-line {
  width: 55px;

  height: 3px;

  margin: 0 auto 15px;

  background: #09233a;

  border-radius: 10px;
}

.journey-description {
  max-width: 700px;

  margin: auto;

  color: #4c5660;

  font-size: 14px;

  line-height: 1.65;
}


/* ==========================================================
   CARDS CONTAINER
========================================================== */

.solar-cards-container {
  width: 100%;

  margin: 0;

  padding: 0;
}


/* ==========================================================
   MAIN SOLAR CARD
========================================================== */

.solar-split-card {
  position: relative;

  width: 100%;

  height: 430px;

  min-height: 430px;

  margin: 0;

  padding: 0;

  display: grid;

  grid-template-columns:
    53% 47%;

  overflow: hidden;

  background: #383b3e;

  border-top:
    1px solid
    rgba(255, 255, 255, 0.22);

  border-bottom:
    1px solid
    rgba(255, 255, 255, 0.22);

  isolation: isolate;

  transition:
    box-shadow 0.4s ease;
}

.solar-split-card:hover {
  box-shadow:
    0 15px 35px
    rgba(0, 0, 0, 0.25);
}


/* ==========================================================
   IMAGE WRAPPER
========================================================== */

.solar-split-image-wrapper {
  position: relative;

  width: calc(100% + 75px);

  height: 100%;

  min-height: 430px;

  overflow: hidden;

  z-index: 4;

  margin-right: -75px;

  clip-path:
    polygon(
      0 0,
      100% 0,
      82% 100%,
      0 100%
    );
}


/* ==========================================================
   IMAGE
========================================================== */

.solar-split-image {
  display: block;

  width: 100%;

  height: 100%;

  object-fit: cover;

  object-position: center;

  transition:
    transform 0.8s ease;
}

.solar-split-card:hover
.solar-split-image {
  transform:
    scale(1.045);
}


/* ==========================================================
   IMAGE OVERLAY
========================================================== */

.solar-split-image-wrapper::after {
  content: "";

  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.02),
      rgba(0, 0, 0, 0.18)
    );

  pointer-events: none;
}


/* ==========================================================
   IMAGE LEFT
========================================================== */

.solar-split-card.image-left {
  grid-template-columns:
    53% 47%;
}

.solar-split-card.image-left
.solar-split-image-wrapper {
  grid-column: 1;

  grid-row: 1;

  margin-right: -75px;

  clip-path:
    polygon(
      0 0,
      100% 0,
      82% 100%,
      0 100%
    );
}

.solar-split-card.image-left
.solar-split-content {
  grid-column: 2;

  grid-row: 1;

  padding-left: 105px;
}


/* ==========================================================
   IMAGE RIGHT
========================================================== */

.solar-split-card.image-right {
  grid-template-columns:
    47% 53%;
}

.solar-split-card.image-right
.solar-split-image-wrapper {
  grid-column: 2;

  grid-row: 1;

  margin-left: -75px;

  clip-path:
    polygon(
      18% 0,
      100% 0,
      100% 100%,
      0 100%
    );
}

.solar-split-card.image-right
.solar-split-content {
  grid-column: 1;

  grid-row: 1;

  padding-right: 105px;
}


/* ==========================================================
   CONTENT SIDE
========================================================== */

.solar-split-content {
  position: relative;

  z-index: 3;

  width: 100%;

  min-width: 0;

  height: 100%;

  min-height: 430px;

  display: flex;

  flex-direction: column;

  justify-content: center;

  padding-top: 45px;

  padding-bottom: 45px;

  padding-left: 80px;

  padding-right: 70px;

  background:
    linear-gradient(
      135deg,
      #414448,
      #34373a
    );

  color: #ffffff;
}


/* ==========================================================
   NUMBER
========================================================== */

.solar-card-number {
  margin-bottom: 8px;

  color: #ffffff;

  font-size: 17px;

  font-weight: 800;

  line-height: 1;

  letter-spacing: 1px;
}


/* ==========================================================
   TITLE
========================================================== */

.solar-split-title {
  margin:
    8px 0 14px;

  color: #ffffff;

  font-size:
    clamp(28px, 3vw, 40px);

  font-weight: 800;

  line-height: 1.08;

  letter-spacing: 0.3px;
}


/* ==========================================================
   WHITE UNDERLINE
========================================================== */

.solar-content-line {
  width: 65px;

  height: 3px;

  margin-bottom: 20px;

  background: #ffffff;

  border-radius: 10px;
}


/* ==========================================================
   DESCRIPTION
========================================================== */

.solar-split-text {
  width: 100%;

  max-width: 570px;

  margin:
    0 0 25px;

  color:
    rgba(255, 255, 255, 0.88);

  font-size: 15px;

  font-weight: 500;

  line-height: 1.7;
}


/* ==========================================================
   EXPLORE BUTTON
========================================================== */

.solar-explore-button {
  width: max-content;

  min-width: 125px;

  min-height: 38px;

  height: 38px;

  padding:
    0 18px;

  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 9px;

  background: #ffffff;

  color: #303337;

  border:
    1px solid #ffffff;

  border-radius: 3px;

  font-size: 11px;

  font-weight: 800;

  letter-spacing: 0.5px;

  cursor: pointer;

  transition:
    all 0.3s ease;
}

.solar-explore-button:hover {
  background: transparent;

  color: #ffffff;

  transform:
    translateY(-2px);
}


/* ==========================================================
   REMOVE OLD DIAGONAL DIVIDER
========================================================== */

.solar-diagonal-divider {
  display: none !important;
}


/* ==========================================================
   WHY AVS SOLAR
========================================================== */

.why-avs-section {
  width: 100%;

  padding: 95px 7%;

  background: #f5f7f8;

  overflow: hidden;
}

.why-avs-heading {
  max-width: 850px;

  margin: 0 auto 60px;

  text-align: center;
}

.why-avs-heading > span,
.solar-solutions-heading > span,
.how-solar-heading > span,
.benefits-intro > span,
.solar-home-cta-content > span {
  display: block;

  margin-bottom: 13px;

  color: #b28a18;

  font-size: 11px;

  font-weight: 800;

  letter-spacing: 2px;
}

.why-avs-heading h2,
.solar-solutions-heading h2,
.how-solar-heading h2 {
  margin: 0 0 20px;

  color: #09233a;

  font-size:
    clamp(32px, 4vw, 48px);

  line-height: 1.12;
}

.why-avs-heading h2 strong,
.solar-solutions-heading h2 strong,
.how-solar-heading h2 strong {
  color: #0c5a83;
}

.why-avs-heading p,
.solar-solutions-heading p,
.how-solar-heading p {
  max-width: 720px;

  margin: auto;

  color: #5d6870;

  font-size: 15px;

  line-height: 1.8;
}

.why-avs-grid {
  max-width: 1180px;

  margin: auto;

  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  border-top:
    1px solid #d9dfe2;

  border-bottom:
    1px solid #d9dfe2;
}

.why-avs-item {
  min-width: 0;

  min-height: 270px;

  padding: 35px 28px;

  border-right:
    1px solid #d9dfe2;
}

.why-avs-item:last-child {
  border-right: none;
}

.why-number {
  margin-bottom: 30px;

  color: #d4af37;

  font-size: 14px;

  font-weight: 800;

  letter-spacing: 1px;
}

.why-avs-item h3 {
  margin: 0 0 15px;

  color: #09233a;

  font-size: 19px;
}

.why-avs-item p {
  margin: 0;

  color: #66727a;

  font-size: 13px;

  line-height: 1.75;
}


/* ==========================================================
   SOLAR SOLUTIONS
========================================================== */

.solar-solutions-section {
  width: 100%;

  padding: 100px 7%;

  background: #ffffff;
}

.solar-solutions-heading {
  max-width: 850px;

  margin: 0 auto 65px;

  text-align: center;
}

.solar-solution-list {
  max-width: 1100px;

  margin: auto;
}

.solar-solution-row {
  display: grid;

  grid-template-columns:
    110px 1fr;

  gap: 35px;

  padding: 42px 0;

  border-top:
    1px solid #dce1e4;
}

.solar-solution-row:last-child {
  border-bottom:
    1px solid #dce1e4;
}

.solution-index {
  color: #d4af37;

  font-size: 14px;

  font-weight: 800;

  letter-spacing: 1px;
}

.solution-content {
  min-width: 0;
}

.solution-content h3 {
  margin: 0 0 14px;

  color: #09233a;

  font-size: 27px;
}

.solution-content p {
  max-width: 850px;

  margin: 0 0 22px;

  color: #5d6870;

  font-size: 14px;

  line-height: 1.8;
}

.solution-points {
  display: flex;

  flex-wrap: wrap;

  gap: 10px;
}

.solution-points span {
  padding: 8px 13px;

  border:
    1px solid #dce1e4;

  border-radius: 3px;

  color: #35505e;

  background: #f8fafb;

  font-size: 11px;

  font-weight: 700;
}


/* ==========================================================
   HOW SOLAR WORKS
========================================================== */

.how-solar-section {
  width: 100%;

  padding: 100px 7%;

  background: #09233a;
}

.how-solar-heading {
  max-width: 850px;

  margin: 0 auto 70px;

  text-align: center;
}

.how-solar-heading h2 {
  color: #ffffff;
}

.how-solar-heading h2 strong {
  color: #d4af37;
}

.how-solar-heading p {
  color:
    rgba(255,255,255,0.72);
}

.solar-process {
  max-width: 1200px;

  margin: auto;

  display: grid;

  grid-template-columns:
    repeat(4, 1fr);
}

.solar-process-item {
  min-width: 0;

  min-height: 260px;

  padding: 0 28px;

  border-right:
    1px solid
    rgba(255,255,255,0.15);
}

.solar-process-item:last-child {
  border-right: none;
}

.process-top {
  display: flex;

  align-items: center;

  gap: 18px;

  margin-bottom: 35px;
}

.process-top span {
  color: #d4af37;

  font-size: 13px;

  font-weight: 800;
}

.process-top div {
  height: 1px;

  flex: 1;

  background:
    rgba(255,255,255,0.18);
}

.solar-process-item h3 {
  margin: 0 0 14px;

  color: #ffffff;

  font-size: 19px;
}

.solar-process-item p {
  margin: 0;

  color:
    rgba(255,255,255,0.65);

  font-size: 13px;

  line-height: 1.75;
}


/* ==========================================================
   BENEFITS
========================================================== */

.solar-benefits-section {
  width: 100%;

  padding: 100px 7%;

  background: #f5f7f8;
}

.solar-benefits-inner {
  max-width: 1200px;

  margin: auto;

  display: grid;

  grid-template-columns:
    0.8fr 1.2fr;

  gap: 80px;

  align-items: start;
}

.benefits-intro {
  position: sticky;

  top: 100px;

  min-width: 0;
}

.benefits-intro h2 {
  margin: 0 0 20px;

  color: #09233a;

  font-size:
    clamp(32px, 4vw, 46px);

  line-height: 1.1;
}

.benefits-intro h2 strong {
  color: #0c5a83;
}

.benefits-intro p {
  margin: 0;

  color: #626e76;

  font-size: 14px;

  line-height: 1.8;
}

.benefits-grid {
  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 1px;

  background: #d7dde0;

  border:
    1px solid #d7dde0;
}

.benefit-box {
  min-width: 0;

  min-height: 210px;

  padding: 30px;

  background: #ffffff;
}

.benefit-box strong {
  display: block;

  margin-bottom: 25px;

  color: #d4af37;

  font-size: 13px;
}

.benefit-box h3 {
  margin: 0 0 12px;

  color: #09233a;

  font-size: 18px;
}

.benefit-box p {
  margin: 0;

  color: #68747b;

  font-size: 12px;

  line-height: 1.7;
}


/* ==========================================================
   FINAL CTA
========================================================== */

.solar-home-cta {
  width: 100%;

  padding: 95px 25px;

  background:
    linear-gradient(
      135deg,
      #0b2d47,
      #071b2c
    );

  text-align: center;
}

.solar-home-cta-content {
  max-width: 750px;

  margin: auto;
}

.solar-home-cta-content > span {
  color: #d4af37;
}

.solar-home-cta-content h2 {
  margin: 0 0 18px;

  color: #ffffff;

  font-size:
    clamp(34px, 5vw, 52px);

  line-height: 1.08;
}

.solar-home-cta-content h2 strong {
  color: #d4af37;
}

.solar-home-cta-content p {
  max-width: 600px;

  margin: 0 auto 30px;

  color:
    rgba(255,255,255,0.72);

  font-size: 14px;

  line-height: 1.8;
}

.solar-cta-button {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 9px;

  min-height: 42px;

  padding: 13px 22px;

  border:
    1px solid #d4af37;

  border-radius: 3px;

  background: #d4af37;

  color: #09233a;

  font-size: 11px;

  font-weight: 800;

  letter-spacing: 0.7px;

  cursor: pointer;

  transition:
    all 0.3s ease;
}

.solar-cta-button:hover {
  background: transparent;

  color: #ffffff;

  transform:
    translateY(-2px);
}


/* ==========================================================
   LARGE TABLET / SMALL DESKTOP
   1200 PX
========================================================== */

@media (max-width: 1200px) {

  .hero-content {
    padding: 40px 45px;
  }

  .solar-split-card {
    height: 410px;

    min-height: 410px;
  }

  .solar-split-image-wrapper {
    min-height: 410px;

    width:
      calc(100% + 65px);

    margin-right: -65px;
  }

  .solar-split-card.image-left
  .solar-split-image-wrapper {
    margin-right: -65px;
  }

  .solar-split-card.image-right
  .solar-split-image-wrapper {
    margin-left: -65px;
  }

  .solar-split-content {
    min-height: 410px;
  }

  .solar-split-card.image-left
  .solar-split-content {
    padding-left: 90px;
  }

  .solar-split-card.image-right
  .solar-split-content {
    padding-right: 90px;
  }

  .solar-benefits-inner {
    gap: 55px;
  }

  .why-avs-item {
    padding-left: 22px;
    padding-right: 22px;
  }

  .solar-process-item {
    padding-left: 22px;
    padding-right: 22px;
  }
}


/* ==========================================================
   TABLET
   1024 PX
========================================================== */

@media (max-width: 1024px) {

  .hero-content {
    padding: 35px 40px;
  }

  .hero-title {
    font-size: 52px;
  }

  .hero-subtitle {
    max-width: 520px;
  }

  .solar-split-card {
    height: 390px;

    min-height: 390px;
  }

  .solar-split-image-wrapper {
    min-height: 390px;

    width:
      calc(100% + 60px);

    margin-right: -60px;
  }

  .solar-split-card.image-left
  .solar-split-image-wrapper {
    margin-right: -60px;
  }

  .solar-split-card.image-right
  .solar-split-image-wrapper {
    margin-left: -60px;
  }

  .solar-split-content {
    min-height: 390px;

    padding-top: 35px;

    padding-bottom: 35px;

    padding-left: 60px;

    padding-right: 45px;
  }

  .solar-split-card.image-left
  .solar-split-content {
    padding-left: 75px;
  }

  .solar-split-card.image-right
  .solar-split-content {
    padding-right: 75px;
  }

  .solar-split-title {
    font-size: 29px;
  }

  .solar-split-text {
    font-size: 13px;

    line-height: 1.6;
  }

  .why-avs-section,
  .solar-solutions-section,
  .how-solar-section,
  .solar-benefits-section {
    padding-left: 5%;
    padding-right: 5%;
  }

  .why-avs-item {
    padding:
      30px 20px;
  }

  .solar-process-item {
    padding:
      0 20px;
  }

  .solar-benefits-inner {
    gap: 45px;
  }
}


/* ==========================================================
   TABLET / MOBILE
   900 PX
========================================================== */

@media (max-width: 900px) {

  .why-avs-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .why-avs-item:nth-child(2) {
    border-right: none;
  }

  .why-avs-item:nth-child(-n+2) {
    border-bottom:
      1px solid #d9dfe2;
  }

  .solar-process {
    grid-template-columns:
      repeat(2, 1fr);

    gap: 45px 0;
  }

  .solar-process-item:nth-child(2) {
    border-right: none;
  }

  .solar-process-item:nth-child(-n+2) {
    border-bottom:
      1px solid rgba(255,255,255,0.15);
  }

  .solar-benefits-inner {
    grid-template-columns: 1fr;

    gap: 50px;
  }

  .benefits-intro {
    position: static;

    text-align: center;

    max-width: 700px;

    margin: auto;
  }
}


/* ==========================================================
   MOBILE
   768 PX
========================================================== */
@media screen and (max-width: 768px) {

  html,
  body {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  #root {
    width: 100%;
    overflow-x: hidden;
  }

  /* =======================================================
     HERO
     ======================================================= */

  .hero-section,
  .hero,
  .home-hero {
    width: 100%;
    min-height: calc(100svh - 60px);
    height: auto;

    position: relative;

    overflow: hidden;
  }


  /* =======================================================
     HERO BACKGROUND / IMAGE
     ======================================================= */

  .hero-section img,
  .hero img {
    max-width: 100%;
  }


  /* --------------------------------------------------------
     STATS
  -------------------------------------------------------- */

  .company-stats-section {
    padding:
      10px 15px;
  }

  .company-stats-container {
    max-width: 600px;

    width: 100%;
  }

  .company-stat-item {
    min-height: 58px;

    padding:
      7px 12px;

    gap: 7px;

    justify-content: center;
  }

  .company-stat-item h2 {
    font-size: 22px;
  }

  .company-stat-item p {
    font-size: 9px;
  }

  .company-stat-item:not(:last-child)::after {
    height: 34px;

    top: 12px;
  }


  /* --------------------------------------------------------
     JOURNEY
  -------------------------------------------------------- */

  .solar-journey-section {
    padding:
      30px 0 0;
  }

  .journey-heading-section {
    padding:
      0 18px 25px;
  }

  .journey-heading {
    font-size: 28px;
  }

  .journey-description {
    font-size: 12px;

    line-height: 1.65;
  }


  /* --------------------------------------------------------
     MOBILE SOLAR CARDS
  -------------------------------------------------------- */

  .solar-split-card,
  .solar-split-card.image-left,
  .solar-split-card.image-right {

    height: auto;

    min-height: 0;

    display: flex;

    flex-direction: column;
  }


  /* IMAGE */

  .solar-split-image-wrapper,
  .solar-split-card.image-left
  .solar-split-image-wrapper,
  .solar-split-card.image-right
  .solar-split-image-wrapper {

    width: 100%;

    height: 300px;

    min-height: 300px;

    margin: 0;

    clip-path:
      polygon(
        0 0,
        100% 0,
        100% 88%,
        0 100%
      );

    flex-shrink: 0;
  }

  .solar-split-image {
    object-position: center;
  }


  /* CONTENT */

  .solar-split-content,
  .solar-split-card.image-left
  .solar-split-content,
  .solar-split-card.image-right
  .solar-split-content {

    width: 100%;

    min-height: 300px;

    padding:
      45px 25px 40px;

    justify-content: center;
  }

  .solar-card-number {
    font-size: 13px;
  }

  .solar-split-title {
    font-size: 24px;

    line-height: 1.12;
  }

  .solar-content-line {
    width: 55px;

    height: 2px;

    margin-bottom: 16px;
  }

  .solar-split-text {
    max-width: 100%;

    font-size: 12px;

    line-height: 1.6;
  }

  .solar-explore-button {
    height: 36px;

    min-height: 36px;

    min-width: 110px;

    padding:
      0 15px;

    font-size: 9px;
  }


  /* --------------------------------------------------------
     ADDITIONAL SECTIONS
  -------------------------------------------------------- */

  .why-avs-section,
  .solar-solutions-section,
  .how-solar-section,
  .solar-benefits-section {

    padding:
      75px 25px;
  }

  .why-avs-heading,
  .solar-solutions-heading,
  .how-solar-heading {

    margin-bottom: 45px;
  }

  .why-avs-heading > span,
  .solar-solutions-heading > span,
  .how-solar-heading > span,
  .benefits-intro > span,
  .solar-home-cta-content > span {

    font-size: 10px;

    letter-spacing: 1.7px;
  }

  .why-avs-heading h2,
  .solar-solutions-heading h2,
  .how-solar-heading h2 {

    font-size: 32px;

    line-height: 1.12;
  }

  .why-avs-heading p,
  .solar-solutions-heading p,
  .how-solar-heading p {

    font-size: 13px;

    line-height: 1.75;
  }


  /* WHY */

  .why-avs-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .why-avs-item {
    min-height: 220px;

    padding:
      30px 22px;
  }

  .why-number {
    margin-bottom: 20px;

    font-size: 13px;
  }

  .why-avs-item h3 {
    font-size: 18px;
  }

  .why-avs-item p {
    font-size: 12px;

    line-height: 1.7;
  }


  /* SOLAR SOLUTIONS */

  .solar-solution-row {
    grid-template-columns:
      55px 1fr;

    gap: 20px;

    padding:
      32px 0;
  }

  .solution-index {
    font-size: 12px;
  }

  .solution-content h3 {
    font-size: 23px;
  }

  .solution-content p {
    font-size: 12px;

    line-height: 1.75;
  }

  .solution-points {
    gap: 8px;
  }

  .solution-points span {
    padding:
      7px 10px;

    font-size: 9px;
  }


  /* HOW SOLAR WORKS */

  .solar-process {
    grid-template-columns:
      repeat(2, 1fr);

    gap: 0;
  }

  .solar-process-item {
    min-height: 230px;

    padding:
      25px 20px;
  }

  .process-top {
    gap: 12px;

    margin-bottom: 25px;
  }

  .process-top span {
    font-size: 12px;
  }

  .solar-process-item h3 {
    font-size: 18px;
  }

  .solar-process-item p {
    font-size: 12px;

    line-height: 1.7;
  }


  /* BENEFITS */

  .solar-benefits-inner {
    grid-template-columns: 1fr;

    gap: 40px;
  }

  .benefits-intro {
    position: static;

    text-align: center;
  }

  .benefits-intro h2 {
    font-size: 32px;
  }

  .benefits-intro p {
    font-size: 13px;
  }

  .benefits-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .benefit-box {
    min-height: 190px;

    padding: 25px;
  }

  .benefit-box strong {
    margin-bottom: 20px;

    font-size: 12px;
  }

  .benefit-box h3 {
    font-size: 17px;
  }

  .benefit-box p {
    font-size: 11px;

    line-height: 1.7;
  }


  /* CTA */

  .solar-home-cta {
    padding:
      75px 25px;
  }

  .solar-home-cta-content h2 {
    font-size: 34px;
  }

  .solar-home-cta-content p {
    font-size: 12px;

    line-height: 1.75;
  }

  .solar-cta-button {
    min-height: 42px;

    padding:
      12px 20px;

    font-size: 10px;
  }
}


/* ==========================================================
   MOBILE
   600 PX
========================================================== */

@media (max-width: 600px) {

  /* HERO */

  .hero-section {
    min-height: 560px;
  }

  .hero-content {
    padding:
      20px 17px;
  }

  .hero-small-text {
    font-size: 10px;

    letter-spacing: 1.2px;
  }

  .hero-title {
    font-size: 33px;

    letter-spacing:
      -0.5px;
  }

  .hero-subtitle {
    font-size: 12px;

    max-width: 400px;

    line-height: 1.55;
  }

  .learn-more-btn {
    min-height: 38px;

    padding:
      9px 15px;

    font-size: 10px;
  }


  /* STATS */

  .company-stats-section {
    padding:
      10px 8px;
  }

  .company-stat-item {
    min-width: 0;

    padding:
      7px 5px;

    gap: 5px;
  }

  .company-stat-item h2 {
    font-size: 19px;
  }

  .company-stat-item p {
    font-size: 8px;

    line-height: 1.25;
  }

  .company-stat-item:not(:last-child)::after {
    height: 30px;

    top: 14px;
  }


  /* JOURNEY */

  .solar-journey-section {
    padding:
      25px 0 0;
  }

  .journey-heading-section {
    padding:
      0 15px 25px;
  }

  .journey-heading {
    font-size: 26px;
  }

  .journey-description {
    font-size: 11px;

    line-height: 1.65;
  }


  /* IMAGE */

  .solar-split-image-wrapper,
  .solar-split-card.image-left
  .solar-split-image-wrapper,
  .solar-split-card.image-right
  .solar-split-image-wrapper {

    height: 270px;

    min-height: 270px;

    clip-path:
      polygon(
        0 0,
        100% 0,
        100% 89%,
        0 100%
      );
  }


  /* CONTENT */

  .solar-split-content,
  .solar-split-card.image-left
  .solar-split-content,
  .solar-split-card.image-right
  .solar-split-content {

    min-height: 290px;

    padding:
      40px 22px 35px;
  }

  .solar-card-number {
    font-size: 11px;
  }

  .solar-split-title {
    font-size: 21px;

    line-height: 1.12;
  }

  .solar-content-line {
    width: 45px;

    height: 2px;

    margin-bottom: 13px;
  }

  .solar-split-text {
    font-size: 11px;

    line-height: 1.55;

    margin-bottom: 18px;
  }

  .solar-explore-button {
    height: 34px;

    min-height: 34px;

    min-width: 100px;

    font-size: 8px;
  }


  /* ADDITIONAL SECTIONS */

  .why-avs-section,
  .solar-solutions-section,
  .how-solar-section,
  .solar-benefits-section {

    padding:
      65px 20px;
  }

  .why-avs-heading,
  .solar-solutions-heading,
  .how-solar-heading {

    margin-bottom: 40px;
  }

  .why-avs-heading h2,
  .solar-solutions-heading h2,
  .how-solar-heading h2 {

    font-size: 29px;
  }

  .why-avs-heading p,
  .solar-solutions-heading p,
  .how-solar-heading p {

    font-size: 12px;

    line-height: 1.7;
  }


  /* WHY */

  .why-avs-grid {
    grid-template-columns: 1fr;
  }

  .why-avs-item {
    min-height: auto;

    padding:
      28px 20px;

    border-right: none;

    border-bottom:
      1px solid #d9dfe2;
  }

  .why-avs-item:nth-child(2) {
    border-right: none;
  }

  .why-avs-item:nth-child(-n+2) {
    border-bottom:
      1px solid #d9dfe2;
  }

  .why-avs-item:last-child {
    border-bottom: none;
  }

  .why-number {
    margin-bottom: 18px;

    font-size: 12px;
  }

  .why-avs-item h3 {
    font-size: 17px;
  }

  .why-avs-item p {
    font-size: 11px;

    line-height: 1.7;
  }


  /* SOLAR SOLUTIONS */

  .solar-solution-row {
    grid-template-columns:
      45px 1fr;

    gap: 15px;

    padding:
      30px 0;
  }

  .solution-index {
    font-size: 11px;
  }

  .solution-content h3 {
    font-size: 21px;

    line-height: 1.2;
  }

  .solution-content p {
    font-size: 11px;

    line-height: 1.7;
  }

  .solution-points {
    gap: 7px;
  }

  .solution-points span {
    font-size: 9px;

    padding:
      7px 9px;
  }


  /* HOW SOLAR */

  .solar-process {
    grid-template-columns: 1fr;

    gap: 0;
  }

  .solar-process-item {
    min-height: auto;

    padding:
      25px 0;

    border-right: none;

    border-bottom:
      1px solid
      rgba(255,255,255,0.15);
  }

  .solar-process-item:nth-child(-n+2) {
    border-bottom:
      1px solid
      rgba(255,255,255,0.15);
  }

  .solar-process-item:last-child {
    border-bottom: none;
  }

  .process-top {
    margin-bottom: 20px;
  }

  .solar-process-item h3 {
    font-size: 17px;
  }

  .solar-process-item p {
    font-size: 11px;

    line-height: 1.7;
  }


  /* BENEFITS */

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .benefit-box {
    min-height: auto;

    padding:
      25px;
  }

  .benefit-box h3 {
    font-size: 16px;
  }

  .benefit-box p {
    font-size: 11px;
  }


  /* CTA */

  .solar-home-cta {
    padding:
      70px 20px;
  }

  .solar-home-cta-content h2 {
    font-size: 31px;
  }

  .solar-home-cta-content p {
    font-size: 11px;

    line-height: 1.7;
  }

  .solar-cta-button {
    min-height: 40px;

    padding:
      11px 18px;

    font-size: 9px;
  }
}


/* ==========================================================
   SMALL MOBILE
   480 PX
========================================================== */

@media (max-width: 480px) {

  /* HERO */

  .hero-section {
    min-height: 540px;
  }

  .hero-content {
    padding:
      20px 15px;
  }

  .hero-title {
    font-size: 30px;

    line-height: 1.07;
  }

  .hero-subtitle {
    font-size: 11px;

    line-height: 1.5;
  }


  /* STATS */

  .company-stat-item {
    padding:
      7px 3px;

    gap: 4px;
  }

  .company-stat-item h2 {
    font-size: 17px;
  }

  .company-stat-item p {
    font-size: 7px;

    line-height: 1.2;
  }


  /* JOURNEY */

  .journey-heading-section {
    padding:
      0 12px 20px;
  }

  .journey-heading {
    font-size: 23px;
  }

  .journey-description {
    font-size: 10px;

    line-height: 1.6;
  }


  /* IMAGE */

  .solar-split-image-wrapper,
  .solar-split-card.image-left
  .solar-split-image-wrapper,
  .solar-split-card.image-right
  .solar-split-image-wrapper {

    height: 235px;

    min-height: 235px;
  }


  /* CONTENT */

  .solar-split-content,
  .solar-split-card.image-left
  .solar-split-content,
  .solar-split-card.image-right
  .solar-split-content {

    min-height: 270px;

    padding:
      35px 20px 30px;
  }

  .solar-card-number {
    font-size: 10px;
  }

  .solar-split-title {
    font-size: 18px;
  }

  .solar-content-line {
    width: 40px;

    height: 2px;

    margin-bottom: 10px;
  }

  .solar-split-text {
    font-size: 10px;

    line-height: 1.5;

    margin-bottom: 16px;
  }

  .solar-explore-button {
    height: 32px;

    min-height: 32px;

    min-width: 95px;

    padding:
      0 12px;

    font-size: 8px;
  }


  /* ADDITIONAL SECTIONS */

  .why-avs-section,
  .solar-solutions-section,
  .how-solar-section,
  .solar-benefits-section {

    padding:
      55px 17px;
  }

  .why-avs-heading,
  .solar-solutions-heading,
  .how-solar-heading {

    margin-bottom: 35px;
  }

  .why-avs-heading > span,
  .solar-solutions-heading > span,
  .how-solar-heading > span,
  .benefits-intro > span,
  .solar-home-cta-content > span {

    font-size: 9px;

    letter-spacing: 1.4px;
  }

  .why-avs-heading h2,
  .solar-solutions-heading h2,
  .how-solar-heading h2 {

    font-size: 26px;
  }

  .why-avs-heading p,
  .solar-solutions-heading p,
  .how-solar-heading p {

    font-size: 11px;
  }


  /* WHY */

  .why-avs-item {
    padding:
      25px 17px;
  }

  .why-number {
    font-size: 11px;

    margin-bottom: 15px;
  }

  .why-avs-item h3 {
    font-size: 16px;
  }

  .why-avs-item p {
    font-size: 10px;
  }


  /* SOLUTIONS */

  .solar-solution-row {
    grid-template-columns:
      38px 1fr;

    gap: 12px;

    padding:
      25px 0;
  }

  .solution-index {
    font-size: 10px;
  }

  .solution-content h3 {
    font-size: 19px;
  }

  .solution-content p {
    font-size: 10px;

    line-height: 1.65;
  }

  .solution-points span {
    font-size: 8px;

    padding:
      6px 8px;
  }


  /* PROCESS */

  .solar-process-item {
    padding:
      22px 0;
  }

  .process-top {
    gap: 10px;

    margin-bottom: 17px;
  }

  .process-top span {
    font-size: 11px;
  }

  .solar-process-item h3 {
    font-size: 16px;
  }

  .solar-process-item p {
    font-size: 10px;
  }


  /* BENEFITS */

  .benefit-box {
    padding:
      22px 20px;
  }

  .benefit-box strong {
    font-size: 11px;

    margin-bottom: 17px;
  }

  .benefit-box h3 {
    font-size: 15px;
  }

  .benefit-box p {
    font-size: 10px;
  }


  /* CTA */

  .solar-home-cta {
    padding:
      60px 17px;
  }

  .solar-home-cta-content h2 {
    font-size: 28px;
  }

  .solar-home-cta-content p {
    font-size: 10px;
  }

  .solar-cta-button {
    min-height: 38px;

    padding:
      10px 16px;

    font-size: 8px;
  }
}


/* ==========================================================
   EXTRA SMALL MOBILE
   380 PX
========================================================== */

@media (max-width: 380px) {

  /* HERO */

  .hero-section {
    min-height: 520px;
  }

  .hero-content {
    padding:
      18px 13px;
  }

  .hero-small-text {
    font-size: 9px;

    letter-spacing: 1px;

    margin-bottom: 10px;
  }

  .hero-title {
    font-size: 28px;

    letter-spacing:
      -0.4px;

    margin-bottom: 14px;
  }

  .hero-subtitle {
    font-size: 10px;

    line-height: 1.45;

    margin-bottom: 20px;
  }

  .learn-more-btn {
    min-height: 36px;

    padding:
      8px 13px;

    font-size: 9px;
  }


  /* STATS */

  .company-stats-section {
    padding:
      8px 5px;
  }

  .company-stat-item {
    min-height: 52px;

    padding:
      5px 2px;

    gap: 3px;
  }

  .company-stat-item h2 {
    font-size: 15px;
  }

  .company-stat-item p {
    font-size: 6.5px;
  }

  .company-stat-item:not(:last-child)::after {
    height: 27px;

    top: 12px;
  }


  /* JOURNEY */

  .solar-journey-section {
    padding-top: 22px;
  }

  .journey-heading-section {
    padding:
      0 10px 18px;
  }

  .journey-heading {
    font-size: 21px;
  }

  .journey-description {
    font-size: 9px;

    line-height: 1.55;
  }


  /* IMAGE */

  .solar-split-image-wrapper,
  .solar-split-card.image-left
  .solar-split-image-wrapper,
  .solar-split-card.image-right
  .solar-split-image-wrapper {

    height: 210px;

    min-height: 210px;
  }


  /* CONTENT */

  .solar-split-content,
  .solar-split-card.image-left
  .solar-split-content,
  .solar-split-card.image-right
  .solar-split-content {

    min-height: 245px;

    padding:
      30px 18px 28px;
  }

  .solar-card-number {
    font-size: 9px;

    margin-bottom: 6px;
  }

  .solar-split-title {
    font-size: 16px;

    margin:
      7px 0 11px;
  }

  .solar-content-line {
    width: 36px;

    height: 2px;

    margin-bottom: 9px;
  }

  .solar-split-text {
    font-size: 9px;

    line-height: 1.45;

    margin-bottom: 14px;
  }

  .solar-explore-button {
    height: 30px;

    min-height: 30px;

    min-width: 88px;

    font-size: 7px;

    padding:
      0 10px;
  }


  /* ADDITIONAL SECTIONS */

  .why-avs-section,
  .solar-solutions-section,
  .how-solar-section,
  .solar-benefits-section {

    padding:
      48px 14px;
  }

  .why-avs-heading h2,
  .solar-solutions-heading h2,
  .how-solar-heading h2 {

    font-size: 23px;
  }

  .why-avs-heading p,
  .solar-solutions-heading p,
  .how-solar-heading p {

    font-size: 10px;

    line-height: 1.65;
  }


  /* WHY */

  .why-avs-item {
    padding:
      23px 15px;
  }

  .why-number {
    font-size: 10px;
  }

  .why-avs-item h3 {
    font-size: 15px;
  }

  .why-avs-item p {
    font-size: 9px;

    line-height: 1.65;
  }


  /* SOLUTIONS */

  .solar-solution-row {
    grid-template-columns:
      32px 1fr;

    gap: 10px;

    padding:
      22px 0;
  }

  .solution-index {
    font-size: 9px;
  }

  .solution-content h3 {
    font-size: 17px;
  }

  .solution-content p {
    font-size: 9px;
  }

  .solution-points {
    gap: 5px;
  }

  .solution-points span {
    font-size: 7px;

    padding:
      5px 7px;
  }


  /* PROCESS */

  .solar-process-item {
    padding:
      20px 0;
  }

  .process-top {
    margin-bottom: 15px;
  }

  .process-top span {
    font-size: 10px;
  }

  .solar-process-item h3 {
    font-size: 15px;
  }

  .solar-process-item p {
    font-size: 9px;

    line-height: 1.65;
  }


  /* BENEFITS */

  .benefit-box {
    padding:
      20px 17px;
  }

  .benefit-box strong {
    font-size: 10px;

    margin-bottom: 14px;
  }

  .benefit-box h3 {
    font-size: 14px;
  }

  .benefit-box p {
    font-size: 9px;
  }


  /* CTA */

  .solar-home-cta {
    padding:
      52px 14px;
  }

  .solar-home-cta-content h2 {
    font-size: 25px;
  }

  .solar-home-cta-content p {
    font-size: 9px;

    line-height: 1.65;
  }

  .solar-cta-button {
    min-height: 36px;

    padding:
      9px 14px;

    font-size: 7px;
  }
}


/* ==========================================================
   VERY SMALL PHONES
   360 PX
========================================================== */

@media (max-width: 360px) {

  .hero-title {
    font-size: 27px;
  }

  .hero-subtitle {
    font-size: 10px;
  }

  .company-stat-item h2 {
    font-size: 15px;
  }

  .company-stat-item p {
    font-size: 6px;
  }

  .journey-heading {
    font-size: 20px;
  }

  .journey-description {
    font-size: 8.5px;
  }

  .solar-split-image-wrapper,
  .solar-split-card.image-left
  .solar-split-image-wrapper,
  .solar-split-card.image-right
  .solar-split-image-wrapper {

    height: 200px;

    min-height: 200px;
  }

  .solar-split-content,
  .solar-split-card.image-left
  .solar-split-content,
  .solar-split-card.image-right
  .solar-split-content {

    min-height: 235px;

    padding:
      28px 16px 25px;
  }

  .solar-card-number {
    font-size: 8px;
  }

  .solar-split-title {
    font-size: 15px;
  }

  .solar-split-text {
    font-size: 8.5px;

    line-height: 1.4;
  }

  .solar-explore-button {
    height: 29px;

    min-height: 29px;

    min-width: 84px;

    font-size: 6.5px;
  }

  .why-avs-heading h2,
  .solar-solutions-heading h2,
  .how-solar-heading h2 {

    font-size: 22px;
  }

  .solution-content h3 {
    font-size: 16px;
  }

  .solar-home-cta-content h2 {
    font-size: 24px;
  }
}


/* ==========================================================
   LANDSCAPE MOBILE
========================================================== */

@media (max-height: 600px) and (orientation: landscape) {

  .hero-section {
    height: auto;

    min-height: 520px;
  }

  .hero-content {
    padding:
      55px 30px;
  }

  .hero-title {
    font-size:
      clamp(30px, 6vw, 48px);
  }

  .hero-subtitle {
    max-width: 600px;

    font-size: 12px;
  }

  .company-stats-section {
    padding:
      8px 15px;
  }

  .company-stat-item {
    min-height: 50px;
  }

  .solar-split-image-wrapper {
    height: 280px;
  }
}


/* ==========================================================
   TOUCH DEVICES
   KEEP ANIMATIONS
========================================================== */

@media (hover: none) {

  .solar-split-card:hover {
    box-shadow: none;
  }

  .solar-split-card:hover
  .solar-split-image {
    transform: none;
  }

  .learn-more-btn:hover,
  .solar-explore-button:hover,
  .solar-cta-button:hover {
    transform: none;
  }
}

`}</style>


      {/* ==========================================================
          NAVBAR
      ========================================================== */}

      <Navbar />


      {/* ==========================================================
          HERO
      ========================================================== */}

      <section className="hero-section">

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >

          <source
            src={heroVideo}
            type="video/mp4"
          />

          Your browser does not support
          the video tag.

        </video>


        <div className="hero-overlay"></div>


        <motion.div
          className="hero-content"

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}
        >

          <div className="hero-content-inner">

            <motion.p
              className="hero-small-text"

              initial={{
                opacity: 0,
                y: 15,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
            >

              POWERING A SUSTAINABLE FUTURE

            </motion.p>


            <motion.h1
              className="hero-title"

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
            >

              CLEAN ENERGY

              <br />

              BETTER{" "}

              <span>
                TOMORROW
              </span>

            </motion.h1>


            <motion.p
              className="hero-subtitle"

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
            >

              We provide smart, reliable and
              cost-effective solar solutions
              for homes, businesses and industries.

            </motion.p>


            <motion.button
              type="button"

              className="learn-more-btn"

              initial={{
                opacity: 0,
                y: 15,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: 0.55,
              }}

              onClick={() =>
                navigate("/about")
              }
            >

              LEARN MORE

              <FiArrowRight
                size={15}
              />

            </motion.button>

          </div>

        </motion.div>

      </section>



{/* ==========================================================
    WHY CHOOSE AVS SOLAR
========================================================== */}

<section className="why-avs-section">

  <motion.div
    className="why-avs-heading"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <span>WHY CHOOSE US</span>

    <h2>
      Smarter Solar Solutions.
      <br />
      <strong>Designed Around You.</strong>
    </h2>

    <p>
      At AVS Solar, we believe solar energy should be simple,
      reliable and designed according to your actual energy
      requirements. From the first consultation to long-term
      system support, our team focuses on delivering a smooth
      and transparent solar experience.
    </p>
  </motion.div>


  <div className="why-avs-grid">

    <motion.div
      className="why-avs-item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="why-number">01</div>

      <h3>Customized Solutions</h3>

      <p>
        Every property has different energy requirements.
        We evaluate your consumption, available space and
        project requirements before recommending a suitable
        solar solution.
      </p>
    </motion.div>


    <motion.div
      className="why-avs-item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="why-number">02</div>

      <h3>Quality Installation</h3>

      <p>
        Our installation process focuses on proper system
        design, safe electrical connections, professional
        mounting and careful commissioning of your solar
        system.
      </p>
    </motion.div>


    <motion.div
      className="why-avs-item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="why-number">03</div>

      <h3>Transparent Process</h3>

      <p>
        We explain the system, quotation, documentation,
        installation and approvals clearly so you can make
        informed decisions without unnecessary complexity.
      </p>
    </motion.div>


    <motion.div
      className="why-avs-item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="why-number">04</div>

      <h3>Long-Term Support</h3>

      <p>
        Our relationship does not end after installation.
        We provide support, monitoring and maintenance guidance
        to help your solar system continue performing efficiently.
      </p>
    </motion.div>

  </div>

</section>


{/* ==========================================================
    SOLAR SOLUTIONS
========================================================== */}

<section className="solar-solutions-section">

  <motion.div
    className="solar-solutions-heading"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <span>OUR SOLUTIONS</span>

    <h2>
      Solar Energy For
      <br />
      <strong>Every Kind of Property</strong>
    </h2>

    <p>
      Whether you are looking to reduce electricity expenses
      at home, improve business operating costs or power a
      large industrial facility, our solar solutions can be
      planned around your specific requirements.
    </p>
  </motion.div>


  <div className="solar-solution-list">

    <motion.article
      className="solar-solution-row"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >

      <div className="solution-index">01</div>

      <div className="solution-content">
        <h3>Residential Solar</h3>

        <p>
          Generate clean electricity for your home and take
          greater control over your household energy expenses.
          Our residential systems can be planned according to
          your roof space, electricity consumption and future
          energy requirements.
        </p>

        <div className="solution-points">
          <span>Home Energy Planning</span>
          <span>Rooftop Installation</span>
          <span>Net Metering Assistance</span>
        </div>
      </div>

    </motion.article>


    <motion.article
      className="solar-solution-row"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >

      <div className="solution-index">02</div>

      <div className="solution-content">
        <h3>Commercial Solar</h3>

        <p>
          Businesses can use solar power to manage energy
          expenditure while making better use of available
          rooftop and commercial space. We design systems
          around operational requirements and electricity usage.
        </p>

        <div className="solution-points">
          <span>Business Energy Assessment</span>
          <span>Rooftop Solar Systems</span>
          <span>Performance Monitoring</span>
        </div>
      </div>

    </motion.article>


    <motion.article
      className="solar-solution-row"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >

      <div className="solution-index">03</div>

      <div className="solution-content">
        <h3>Industrial Solar</h3>

        <p>
          Industrial facilities often have substantial energy
          requirements. We help plan solar installations with
          attention to available area, electrical requirements,
          system capacity and long-term operational needs.
        </p>

        <div className="solution-points">
          <span>Industrial Energy Planning</span>
          <span>Large-Scale Solar Systems</span>
          <span>System Monitoring</span>
        </div>
      </div>

    </motion.article>

  </div>

</section>


{/* ==========================================================
    HOW SOLAR WORKS
========================================================== */}

<section className="how-solar-section">

  <motion.div
    className="how-solar-heading"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >

    <span>UNDERSTANDING SOLAR</span>

    <h2>
      From Sunlight
      <br />
      <strong>To Usable Energy</strong>
    </h2>

    <p>
      A properly designed solar system converts sunlight into
      usable electricity and helps you make better use of
      renewable energy for your property.
    </p>

  </motion.div>


  <div className="solar-process">

    <motion.div
      className="solar-process-item"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >

      <div className="process-top">
        <span>01</span>
        <div></div>
      </div>

      <h3>Solar Panels</h3>

      <p>
        Solar panels capture energy from sunlight and convert
        it into electrical energy.
      </p>

    </motion.div>


    <motion.div
      className="solar-process-item"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >

      <div className="process-top">
        <span>02</span>
        <div></div>
      </div>

      <h3>Energy Conversion</h3>

      <p>
        The inverter converts the electricity generated by
        the panels into usable power for your property.
      </p>

    </motion.div>


    <motion.div
      className="solar-process-item"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >

      <div className="process-top">
        <span>03</span>
        <div></div>
      </div>

      <h3>Power Your Property</h3>

      <p>
        The generated electricity can be used to power
        appliances, equipment and other electrical loads.
      </p>

    </motion.div>


    <motion.div
      className="solar-process-item"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >

      <div className="process-top">
        <span>04</span>
        <div></div>
      </div>

      <h3>Monitor & Maintain</h3>

      <p>
        System monitoring and regular maintenance help keep
        the solar installation operating effectively.
      </p>

    </motion.div>

  </div>

</section>


      {/* ==========================================================
          COMPANY STATS
      ========================================================== */}

      <section className="company-stats-section">

        <div className="company-stats-container">


          <motion.div
            className="company-stat-item"

            initial={{
              opacity: 0,
              y: 15,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.5,
            }}
          >

            <h2>
              30MW+
            </h2>

            <p>
              Installations Completed
            </p>

          </motion.div>


          <motion.div
            className="company-stat-item"

            initial={{
              opacity: 0,
              y: 15,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >

            <h2>
              100+
            </h2>

            <p>
              Projects Delivered
            </p>

          </motion.div>


          <motion.div
            className="company-stat-item"

            initial={{
              opacity: 0,
              y: 15,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >

            <h2>
              PAN
            </h2>

            <p>
              India Presence
            </p>

          </motion.div>


        </div>

      </section>


      {/* ==========================================================
          OUR SOLAR JOURNEY
      ========================================================== */}

      <section
        className="solar-journey-section"
        id="solar-journey"
      >


        {/* ========================================================
            JOURNEY HEADING
        ======================================================== */}

        <motion.div
          className="journey-heading-section"

          initial={{
            opacity: 0,
            y: 25,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.7,
          }}
        >

          <h2 className="journey-heading">
            OUR SOLAR JOURNEY
          </h2>


          <div className="heading-line"></div>


          <p className="journey-description">

            From consultation to commissioning and
            beyond, we follow a transparent process
            to ensure the best solar experience for you.

          </p>

        </motion.div>


        {/* ========================================================
            SOLAR CARDS
        ======================================================== */}

        <div className="solar-cards-container">

          {solarJourneyCards.map(
            (card, index) => {

              const imageLeft =
                index % 2 === 0;


              return (

                <motion.article

                  key={card.number}

                  className={
                    `solar-split-card ${
                      imageLeft
                        ? "image-left"
                        : "image-right"
                    }`
                  }


                  initial={{
                    opacity: 0,
                    y: 45,
                  }}


                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}


                  viewport={{
                    once: true,

                    amount: 0.12,
                  }}


                  transition={{
                    duration: 0.75,

                    ease: "easeOut",
                  }}
                >


                  {/* ==================================================
                      IMAGE
                  ================================================== */}

                  <motion.div

                    className="
                      solar-split-image-wrapper
                    "


                    initial={{
                      scale: 1.06,
                    }}


                    whileInView={{
                      scale: 1,
                    }}


                    viewport={{
                      once: true,
                    }}


                    transition={{
                      duration: 1.1,

                      ease: "easeOut",
                    }}
                  >

                    <img
                      src={card.image}
                      alt={card.title}
                      className="solar-split-image"
                    />

                  </motion.div>


                  {/* ==================================================
                      CONTENT
                  ================================================== */}

                  <motion.div

                    className="
                      solar-split-content
                    "


                    initial={{
                      opacity: 0,

                      x:
                        imageLeft
                          ? 35
                          : -35,
                    }}


                    whileInView={{
                      opacity: 1,

                      x: 0,
                    }}


                    viewport={{
                      once: true,
                    }}


                    transition={{
                      duration: 0.75,

                      delay: 0.15,
                    }}
                  >


                    <div
                      className="
                        solar-card-number
                      "
                    >

                      {card.number}

                    </div>


                    <h2
                      className="
                        solar-split-title
                      "
                    >

                      {card.title}

                    </h2>


                    <div
                      className="
                        solar-content-line
                      "
                    ></div>


                    <p
                      className="
                        solar-split-text
                      "
                    >

                      {card.text}

                    </p>


                   <button
  type="button"
  className="solar-explore-button"
  onClick={() => navigate(card.path)}
>

                      <span>
                        EXPLORE MORE
                      </span>


                      <FiArrowRight
                        size={15}
                      />

                    </button>


                  </motion.div>


                </motion.article>

              );

            }
          )}

        </div>

      </section>



      {/* ==========================================================
    SOLAR BENEFITS
========================================================== */}

<section className="solar-benefits-section">

  <div className="solar-benefits-inner">

    <motion.div
      className="benefits-intro"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >

      <span>THE SOLAR ADVANTAGE</span>

      <h2>
        Make Your Energy
        <br />
        <strong>Work Smarter</strong>
      </h2>

      <p>
        Solar energy is more than installing panels on a roof.
        It is a long-term approach to managing energy,
        improving efficiency and moving towards cleaner
        power generation.
      </p>

    </motion.div>


    <div className="benefits-grid">

      <motion.div
        className="benefit-box"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <strong>01</strong>
        <h3>Reduce Energy Dependence</h3>
        <p>
          Generate electricity from a renewable source and
          reduce your dependence on conventional power.
        </p>
      </motion.div>


      <motion.div
        className="benefit-box"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <strong>02</strong>
        <h3>Use Clean Energy</h3>
        <p>
          Solar power provides a renewable alternative that
          supports a cleaner and more sustainable future.
        </p>
      </motion.div>


      <motion.div
        className="benefit-box"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <strong>03</strong>
        <h3>Better Energy Planning</h3>
        <p>
          Understanding your energy consumption helps create
          a solar system suited to your actual requirements.
        </p>
      </motion.div>


      <motion.div
        className="benefit-box"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <strong>04</strong>
        <h3>Long-Term Value</h3>
        <p>
          A professionally planned solar system can become
          an important part of your long-term energy strategy.
        </p>
      </motion.div>

    </div>

  </div>

</section>


{/* ==========================================================
    SOLAR CTA
========================================================== */}

<section className="solar-home-cta">

  <motion.div
    className="solar-home-cta-content"
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >

    <span>START YOUR SOLAR JOURNEY</span>

    <h2>
      Ready to Explore
      <br />
      <strong>Solar Energy?</strong>
    </h2>

    <p>
      Talk to our team about your energy requirements and
      discover a solar solution designed for your property.
    </p>

    <button
      type="button"
      onClick={() => navigate("/contact")}
      className="solar-cta-button"
    >
      GET STARTED
      <FiArrowRight size={16} />
    </button>

  </motion.div>

</section>

  {showLoginPopup && (
        <Login
          onClose={() => setShowLoginPopup(false)}
        />
      )}
      {/* ==========================================================
          CHATBOX
      ========================================================== */}

      <ChatBox />


      {/* ==========================================================
          FOOTER
      ========================================================== */}

      <Footer />


    </div>

  );
}


export default Home;