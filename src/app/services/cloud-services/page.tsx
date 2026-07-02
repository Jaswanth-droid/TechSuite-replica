"use client";

import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function CloudServicesPage() {
  const subServices = [
    { title: "SAP Landscape Hosting", description: "Optimized virtual infrastructure hosting with guaranteed SLA performance uptime." },
    { title: "Zero-Downtime Migration", description: "Relocate legacy infrastructure workloads to premium public/private cloud providers." },
    { title: "Managed Infrastructure", description: "System monitoring, patch management, and continuous resource optimization." },
    { title: "Disaster Recovery (DRaaS)", description: "Robust backup, point-in-time recovery, and business continuity systems." }
  ];

  return (
    <ServicePageTemplate
      title="CLOUD SERVICES – IAAS"
      tagline="SECURE, SCALABLE INFRASTRUCTURE THAT GROWS WITH YOUR NEEDS."
      description="We Help Businesses Modernize Their IT Backbone By Enabling Secure, Cost-Effective, And Highly Available Cloud Hosting Environments For SAP And Enterprise Workloads."
      ctaTitle="Ready to Migrate to the Cloud?"
      subServices={subServices}
    />
  );
}
