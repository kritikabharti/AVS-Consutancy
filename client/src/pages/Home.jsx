import React from "react";
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


function Home() {

  const navigate = useNavigate();


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

          padding:
            40px 55px;
        }


        .hero-content-inner {
          max-width: 650px;
        }


        .hero-small-text {
          margin:
            0 0 13px;

          color: #d4af37;

          font-size: 13px;

          font-weight: 700;

          letter-spacing: 1.5px;

          text-transform: uppercase;
        }


        .hero-title {
          margin:
            0 0 18px;

          color: #ffffff;

          font-size:
            clamp(42px, 5vw, 70px);

          font-weight: 800;

          line-height: 1.04;

          letter-spacing: -1px;
        }


        .hero-title span {
          color: #d4af37;
        }


        .hero-subtitle {
          max-width: 580px;

          margin:
            0 0 25px;

          color:
            rgba(255, 255, 255, 0.92);

          font-size: 15px;

          font-weight: 500;

          line-height: 1.6;
        }


        .learn-more-btn {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          padding:
            11px 20px;

          background: #ffffff;

          color: #071d31;

          border:
            1px solid #ffffff;

          border-radius: 4px;

          font-size: 12px;

          font-weight: 700;

          cursor: pointer;

          transition:
            all 0.3s ease;
        }


        .learn-more-btn:hover {
          background: transparent;

          color: #ffffff;

          transform:
            translateY(-2px);
        }


        /* ==========================================================
           COMPANY STATS
        ========================================================== */

        .company-stats-section {
          position: relative;

          width: 100%;

          padding:
            17px 5%;

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

          min-height: 62px;

          padding:
            7px 24px;

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

          padding:
            45px 0 0;

          overflow: hidden;
        }


        /* ==========================================================
           JOURNEY HEADING
        ========================================================== */

        .journey-heading-section {
          width: 100%;

          max-width: 850px;

          margin: 0 auto;

          padding:
            0 20px 35px;

          text-align: center;
        }


        .journey-heading {
          margin:
            0 0 9px;

          color: #09233a;

          font-size:
            clamp(30px, 3vw, 42px);

          font-weight: 800;

          line-height: 1.1;
        }


        .heading-line {
          width: 55px;

          height: 3px;

          margin:
            0 auto 15px;

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
           MAIN CARD
           
           FULL WIDTH
           LARGE HEIGHT
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

           The image itself has a diagonal edge.
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
           1200 PX
        ========================================================== */

        @media (max-width: 1200px) {

          .hero-content {
            padding:
              40px 45px;
          }


          .solar-split-card {
            height: 410px;

            min-height: 410px;
          }


          .solar-split-image-wrapper {
            min-height: 410px;

            width: calc(100% + 65px);

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

        }


        /* ==========================================================
           1024 PX
        ========================================================== */

        @media (max-width: 1024px) {

          .hero-content {
            padding:
              35px 40px;
          }


          .hero-title {
            font-size: 52px;
          }


          .solar-split-card {
            height: 390px;

            min-height: 390px;
          }


          .solar-split-image-wrapper {
            min-height: 390px;

            width: calc(100% + 60px);

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

            padding-left: 75px;

            padding-right: 55px;
          }


          .solar-split-card.image-left
          .solar-split-content {
            padding-left: 85px;
          }


          .solar-split-card.image-right
          .solar-split-content {
            padding-right: 85px;
          }


          .solar-split-title {
            font-size: 29px;
          }


          .solar-split-text {
            font-size: 13px;

            line-height: 1.6;
          }

        }


        /* ==========================================================
           768 PX
        ========================================================== */

        @media (max-width: 768px) {

          /* HERO */

          .hero-section {
            height: 100svh;

            min-height: 580px;
          }


          .hero-content {
            padding:
              25px 22px;
          }


          .hero-title {
            font-size:
              clamp(34px, 9vw, 47px);
          }


          .hero-subtitle {
            font-size: 13px;
          }


          /* STATS */

          .company-stats-section {
            padding:
              10px 15px;
          }


          .company-stats-container {
            max-width: 600px;
          }


          .company-stat-item {
            min-height: 58px;

            padding:
              7px 12px;

            gap: 7px;
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


          /* JOURNEY */

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
          }


          /* ======================================================
             MOBILE CARD
          ====================================================== */

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
          }


          .solar-split-text {
            font-size: 12px;

            line-height: 1.6;
          }


          .solar-explore-button {
            height: 34px;

            min-width: 110px;

            font-size: 9px;
          }

        }


        /* ==========================================================
           600 PX
        ========================================================== */

        @media (max-width: 600px) {

          .hero-content {
            padding:
              20px 17px;
          }


          .hero-small-text {
            font-size: 10px;
          }


          .hero-title {
            font-size: 33px;

            letter-spacing:
              -0.5px;
          }


          .hero-subtitle {
            font-size: 12px;

            max-width: 400px;
          }


          /* STATS */

          .company-stats-section {
            padding:
              10px 8px;
          }


          .company-stat-item {
            padding:
              7px 5px;

            gap: 5px;
          }


          .company-stat-item h2 {
            font-size: 19px;
          }


          .company-stat-item p {
            font-size: 8px;
          }


          /* JOURNEY */

          .journey-heading {
            font-size: 25px;
          }


          .journey-description {
            font-size: 11px;
          }


          /* IMAGE */

          .solar-split-image-wrapper,
          .solar-split-card.image-left
          .solar-split-image-wrapper,
          .solar-split-card.image-right
          .solar-split-image-wrapper {

            height: 270px;

            min-height: 270px;
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
            font-size: 20px;
          }


          .solar-content-line {
            width: 45px;

            height: 2px;

            margin-bottom: 13px;
          }


          .solar-split-text {
            font-size: 10px;

            line-height: 1.5;

            margin-bottom: 15px;
          }


          .solar-explore-button {
            height: 30px;

            min-width: 100px;

            font-size: 8px;
          }

        }


        /* ==========================================================
           480 PX
        ========================================================== */

        @media (max-width: 480px) {

          .hero-section {
            min-height: 560px;
          }


          .hero-content {
            padding:
              20px 15px;
          }


          .hero-title {
            font-size: 30px;
          }


          .hero-subtitle {
            font-size: 11px;

            line-height: 1.5;
          }


          .learn-more-btn {
            padding:
              9px 15px;

            font-size: 10px;
          }


          /* STATS */

          .company-stat-item h2 {
            font-size: 17px;
          }


          .company-stat-item p {
            font-size: 7px;
          }


          /* JOURNEY */

          .solar-journey-section {
            padding:
              25px 0 0;
          }


          .journey-heading-section {
            padding:
              0 12px 20px;
          }


          .journey-heading {
            font-size: 23px;
          }


          .journey-description {
            font-size: 10px;
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
            font-size: 9px;
          }


          .solar-split-title {
            font-size: 17px;
          }


          .solar-content-line {
            width: 40px;

            height: 2px;

            margin-bottom: 9px;
          }


          .solar-split-text {
            font-size: 9px;

            line-height: 1.45;
          }


          .solar-explore-button {
            height: 28px;

            min-width: 95px;

            font-size: 7px;
          }

        }


        /* ==========================================================
           360 PX
        ========================================================== */

        @media (max-width: 360px) {

          .hero-title {
            font-size: 27px;
          }


          .hero-subtitle {
            font-size: 10px;
          }


          /* STATS */

          .company-stat-item h2 {
            font-size: 15px;
          }


          .company-stat-item p {
            font-size: 6px;
          }


          /* JOURNEY */

          .journey-heading {
            font-size: 21px;
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
            font-size: 8px;
          }


          .solar-split-title {
            font-size: 14px;
          }


          .solar-split-text {
            font-size: 7px;

            line-height: 1.35;
          }


          .solar-explore-button {
            height: 25px;

            min-width: 85px;

            font-size: 6px;
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