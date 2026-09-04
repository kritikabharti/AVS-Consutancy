import React from "react";
import SolarJourneyDetails from "./SolarJourneyDetails";

import image from "../assets/home5.jpg";

const QuotationDetails = () => {
  return (
    <SolarJourneyDetails
      number="04"
      title="QUOTATION AND APPROVAL"
      subtitle="Receive a clear project quotation and professional assistance throughout the documentation and approval process."
      image={image}
      description="Once the solar system has been planned, we prepare a project quotation based on the proposed solution. We believe customers should clearly understand what is included before moving forward."
      overview="Our team explains the proposed system, project scope and important requirements so that you can make an informed decision. Where applicable, we also assist with the required documentation and approval-related steps."
      highlights={[
        {
          title: "Clear Quotation",
          text: "Project costs and important details are presented in a straightforward manner.",
        },
        {
          title: "System Details",
          text: "The quotation reflects the proposed solar system and project scope.",
        },
        {
          title: "Documentation Support",
          text: "We help coordinate the documents required for the next stages.",
        },
        {
          title: "Approval Assistance",
          text: "Our team provides guidance through applicable approval procedures.",
        },
        {
          title: "Project Clarity",
          text: "You understand the project before providing approval to proceed.",
        },
        {
          title: "Professional Coordination",
          text: "We maintain communication throughout the approval stage.",
        },
      ]}
      process={[
        {
          title: "Prepare Project Proposal",
          text: "The system design and collected project information are used to prepare the proposal.",
        },
        {
          title: "Share Quotation",
          text: "The quotation and important project details are presented to the customer.",
        },
        {
          title: "Clarify Requirements",
          text: "Our team answers questions and explains the proposed project.",
        },
        {
          title: "Project Approval",
          text: "Once the proposal is accepted, the project proceeds toward installation.",
        },
      ]}
      benefits={[
        "Transparent project information",
        "Clear understanding of system scope",
        "Professional documentation support",
        "Approval process guidance",
        "Better decision-making",
        "Smooth transition to installation",
      ]}
    />
  );
};

export default QuotationDetails;