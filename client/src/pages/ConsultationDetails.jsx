import React from "react";
import SolarJourneyDetails from "./SolarJourneyDetails";

import image from "../assets/home1.jpg";

const ConsultationDetails = () => {
  return (
    <SolarJourneyDetails
      number="01"
      title="FREE CONSULTATION"
      subtitle="Understand your energy requirements and discover a solar solution designed around your home, business or industrial needs."
      image={image}
      description="Our free consultation is the first step toward understanding how solar energy can work for your property. Our team discusses your electricity consumption, energy goals, property type and expectations before recommending a suitable approach."
      overview="We focus on understanding your requirements rather than offering a one-size-fits-all solution. The consultation gives you a clear starting point for your solar project and helps identify the next steps required for a detailed assessment."
      highlights={[
        {
          title: "Energy Assessment",
          text: "We understand your current electricity usage and future energy requirements.",
        },
        {
          title: "Solar Guidance",
          text: "We explain suitable solar options based on your property and objectives.",
        },
        {
          title: "Requirement Analysis",
          text: "We discuss roof space, energy goals, budget expectations and project priorities.",
        },
        {
          title: "Professional Advice",
          text: "Get practical guidance from professionals experienced in solar projects.",
        },
        {
          title: "Transparent Approach",
          text: "We clearly explain the process, requirements and next steps.",
        },
        {
          title: "No Initial Cost",
          text: "Start the discussion and understand your options without an initial consultation fee.",
        },
      ]}
      process={[
        {
          title: "Understand Your Requirement",
          text: "We discuss your property, electricity consumption and energy objectives.",
        },
        {
          title: "Review Your Energy Needs",
          text: "Our team identifies important factors that influence your solar requirement.",
        },
        {
          title: "Recommend the Right Approach",
          text: "We explain the type of solar solution that may be suitable for your requirements.",
        },
        {
          title: "Plan the Next Step",
          text: "If required, we proceed toward a detailed site survey and system planning.",
        },
      ]}
      benefits={[
        "Professional solar guidance",
        "Clear understanding of available options",
        "Requirement-based recommendations",
        "Transparent communication",
        "Better project planning",
        "Easy transition to site survey",
      ]}
    />
  );
};

export default ConsultationDetails;