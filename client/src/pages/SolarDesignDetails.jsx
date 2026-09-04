import React from "react";
import SolarJourneyDetails from "./SolarJourneyDetails";

import image from "../assets/home3.jpg";

const SolarDesignDetails = () => {
  return (
    <SolarJourneyDetails
      number="03"
      title="CUSTOM SOLAR DESIGN"
      subtitle="A solar system designed around your energy consumption, property characteristics, available space and performance goals."
      image={image}
      description="Every property has different energy requirements and installation conditions. Our custom design approach uses the information collected during consultation and site survey to create a solution suited to your project."
      overview="The design stage focuses on balancing energy generation, available space, equipment selection and practical installation requirements. Our objective is to create an efficient and maintainable solar system."
      highlights={[
        {
          title: "Customized Planning",
          text: "The system is planned according to your specific energy requirements.",
        },
        {
          title: "Space Optimization",
          text: "Available installation space is considered to achieve an efficient layout.",
        },
        {
          title: "System Sizing",
          text: "System capacity is planned based on energy usage and project objectives.",
        },
        {
          title: "Equipment Planning",
          text: "Appropriate system components are considered for the project.",
        },
        {
          title: "Performance Focus",
          text: "The design aims to support reliable and efficient solar generation.",
        },
        {
          title: "Future Considerations",
          text: "Potential future energy requirements can be considered during planning.",
        },
      ]}
      process={[
        {
          title: "Review Survey Data",
          text: "Site information and energy requirements are analyzed.",
        },
        {
          title: "Determine System Requirements",
          text: "The appropriate capacity and system configuration are planned.",
        },
        {
          title: "Prepare System Layout",
          text: "Panel placement and important installation considerations are developed.",
        },
        {
          title: "Finalize Design",
          text: "The proposed design is prepared for quotation and project approval.",
        },
      ]}
      benefits={[
        "Requirement-based system design",
        "Efficient space utilization",
        "Better installation planning",
        "Improved project clarity",
        "Professional technical planning",
        "Designed around long-term requirements",
      ]}
    />
  );
};

export default SolarDesignDetails;