import React from "react";
import SolarJourneyDetails from "./SolarJourneyDetails";

import image from "../assets/home50.jpg";

const InstallationDetails = () => {
  return (
    <SolarJourneyDetails
      number="05"
      title="INSTALLATION"
      subtitle="Professional solar installation focused on safety, quality workmanship and reliable system performance."
      image={image}
      description="Installation is where the planned solar system becomes a working energy solution. Our team follows the approved design and coordinates the installation of the major system components."
      overview="We focus on proper installation practices, safe electrical connections, appropriate equipment placement and systematic project execution. Every stage is coordinated to ensure the installation is completed professionally."
      highlights={[
        {
          title: "Professional Team",
          text: "Installation is handled by trained professionals with practical project experience.",
        },
        {
          title: "Safety First",
          text: "Safety considerations are maintained throughout the installation process.",
        },
        {
          title: "Quality Workmanship",
          text: "Attention is given to equipment placement, mounting and system connections.",
        },
        {
          title: "System Coordination",
          text: "The installation follows the approved project design and requirements.",
        },
        {
          title: "Testing",
          text: "Important system components and connections are checked during completion.",
        },
        {
          title: "Project Handover",
          text: "The completed system is prepared for commissioning and customer use.",
        },
      ]}
      process={[
        {
          title: "Installation Preparation",
          text: "Materials, equipment and site requirements are coordinated before work begins.",
        },
        {
          title: "Mounting & Panel Installation",
          text: "Solar modules and mounting structures are installed according to the planned layout.",
        },
        {
          title: "Electrical Installation",
          text: "Required electrical components and connections are installed carefully.",
        },
        {
          title: "Inspection & Testing",
          text: "The installed system is checked before moving toward commissioning.",
        },
      ]}
      benefits={[
        "Professional installation",
        "Safety-focused execution",
        "Quality workmanship",
        "Proper system coordination",
        "System inspection",
        "Smooth commissioning process",
      ]}
    />
  );
};

export default InstallationDetails;