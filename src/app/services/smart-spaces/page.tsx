"use client";

import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function SmartSpacesPage() {
  const subServices = [
    { title: "Network Design & Integration", description: "Custom SD-WAN architectures, high-performance switches, and routing topology." },
    { title: "Data Center Modernization", description: "Hyperconverged hardware setups, virtual environments, and physical safety guards." },
    { title: "Enterprise Collaboration", description: "Seamless deployment of Microsoft 365, Teams, and virtual workplace tooling." },
    { title: "Smart Office & IoT Security", description: "Design cloud cameras, smart alarms, biometric entrance, and visitor control." }
  ];

  return (
    <ServicePageTemplate
      title="SMART SPACES & IT INFRASTRUCTURE"
      tagline="DESIGNING INTELLIGENT WORKSPACES AND RESILIENT IT ENVIRONMENTS."
      description="We Design And Implement Robust, Scalable IT Infrastructure And Smart Workplace Environments—Laying The Foundation For Seamless Digital Operations."
      ctaTitle="Ready to Upgrade Your IT Infrastructure?"
      subServices={subServices}
    />
  );
}
