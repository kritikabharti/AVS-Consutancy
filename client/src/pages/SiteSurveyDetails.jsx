import React from "react";
import SolarJourneyDetails from "./SolarJourneyDetails";

import image from "../assets/Home2.jpg";

const SiteSurveyDetails = () => {
  return (
    <SolarJourneyDetails
      number="02"
      title="SITE SURVEY"
      subtitle="A detailed assessment of your property to understand the available space, structure, shading and electrical requirements."
      image={image}
      description="A proper site survey is essential for designing a reliable solar installation. Our experts inspect the property and evaluate the physical and electrical conditions that can affect system performance."
      overview="The survey helps our team collect practical site information before preparing the final system design. This allows us to plan the installation more accurately and identify potential challenges at an early stage."
      highlights={[
        {
          title: "Roof Assessment",
          text: "We examine available roof area and understand its suitability for solar installation.",
        },
        {
          title: "Shading Analysis",
          text: "Potential shading sources are identified to support better system planning.",
        },
        {
          title: "Space Evaluation",
          text: "We evaluate available installation space and access requirements.",
        },
        {
          title: "Electrical Review",
          text: "Existing electrical infrastructure is reviewed for project planning.",
        },
        {
          title: "Structural Consideration",
          text: "Important structural factors are considered before installation planning.",
        },
        {
          title: "Site Documentation",
          text: "Relevant site information is collected for accurate system design.",
        },
      ]}
      process={[
        {
          title: "Schedule Site Visit",
          text: "A suitable date and time is coordinated for the site assessment.",
        },
        {
          title: "Inspect the Property",
          text: "Our team evaluates roof, ground area, access and installation conditions.",
        },
        {
          title: "Analyze Site Conditions",
          text: "Shading, orientation, available space and electrical requirements are reviewed.",
        },
        {
          title: "Prepare Survey Findings",
          text: "Collected information is used for the next stage of system design.",
        },
      ]}
      benefits={[
        "Accurate project planning",
        "Better use of available space",
        "Identification of potential site issues",
        "Improved system design accuracy",
        "Professional site assessment",
        "Reduced installation surprises",
      ]}
    />
  );
};

export default SiteSurveyDetails;