import React from "react";
import SolarJourneyDetails from "./SolarJourneyDetails";

import image from "../assets/home7.jpg";

const AfterSalesDetails = () => {
  return (
    <SolarJourneyDetails
      number="07"
      title="AFTER-SALES SUPPORT"
      subtitle="Ongoing support, monitoring and maintenance assistance to help your solar system continue performing reliably."
      image={image}
      description="Our relationship with customers does not end after installation. We provide ongoing support to help customers understand their system, monitor performance and address maintenance requirements."
      overview="Regular attention to a solar system can help identify potential issues early and maintain reliable operation. Our support approach is focused on long-term customer assistance and system performance."
      highlights={[
        {
          title: "System Monitoring",
          text: "Performance can be monitored to identify unusual operating conditions.",
        },
        {
          title: "Maintenance Support",
          text: "We assist with maintenance requirements related to the solar system.",
        },
        {
          title: "Technical Assistance",
          text: "Our team provides guidance when customers need technical support.",
        },
        {
          title: "Performance Review",
          text: "System performance can be reviewed to identify potential concerns.",
        },
        {
          title: "Issue Coordination",
          text: "Reported issues are coordinated with the appropriate technical team.",
        },
        {
          title: "Long-Term Support",
          text: "We remain available to support customers beyond project completion.",
        },
      ]}
      process={[
        {
          title: "Monitor System",
          text: "System operation and performance are observed where monitoring is available.",
        },
        {
          title: "Identify Requirements",
          text: "Potential maintenance or technical requirements are identified.",
        },
        {
          title: "Technical Assistance",
          text: "Our team provides guidance or coordinates the required technical support.",
        },
        {
          title: "Performance Follow-Up",
          text: "The system is followed up to help maintain reliable operation.",
        },
      ]}
      benefits={[
        "Ongoing customer support",
        "Maintenance assistance",
        "Performance monitoring",
        "Technical guidance",
        "Issue coordination",
        "Long-term service relationship",
      ]}
    />
  );
};

export default AfterSalesDetails;