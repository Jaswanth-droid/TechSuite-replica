"use client";

import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function ErpPage() {
  const subServices = [
    { title: "S/4HANA Implementation", description: "Greenfield & Brownfield deployments using industry-aligned best practice blueprints." },
    { title: "ECC to S/4HANA Migration", description: "Secure, low-downtime conversion strategies to upgrade your legacy SAP systems." },
    { title: "RISE & GROW with SAP", description: "Cloud-first deployment models tailored for mid-market and global enterprises." },
    { title: "SLA-Driven Support & AMS", description: "Continuous monitoring, functional consulting, and maintenance of your SAP landscape." }
  ];

  return (
    <ServicePageTemplate
      title="ERP SOLUTION"
      tagline="EMPOWERING YOUR BUSINESS WITH INTELLIGENT ERP ADOPTION."
      description="At TechSuite, We Bring Deep Domain Knowledge And SAP Expertise To Help Organizations Streamline Operations, Reduce Manual Overhead, And Unlock Real-Time Insights Through ERP Modernization."
      ctaTitle="Ready to Upgrade Your ERP?"
      subServices={subServices}
    />
  );
}
