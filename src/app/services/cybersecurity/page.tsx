"use client";

import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function CybersecurityPage() {
  const subServices = [
    { title: "Vulnerability Assessment & PT", description: "Find, report, and patch software, network, and firewall security loopholes." },
    { title: "SAP Security Audits", description: "Audit access permissions, system profiles, and ensure GRC compliance." },
    { title: "Threat Protection", description: "Host security, enterprise firewall, endpoint detection, and spam filters." },
    { title: "Access Control (IAM)", description: "Implement single-sign-on (SSO), multi-factor authorization, and privilege rules." }
  ];

  return (
    <ServicePageTemplate
      title="CYBER SECURITY"
      tagline="ENSURE DATA INTEGRITY WITH NEXT-GEN SECURITY MEASURES."
      description="We Help Protect Your Data, Infrastructure, And User Access With Our Suite Of Cybersecurity Services Tailored For SAP, Enterprise IT, And Hybrid Cloud Environments."
      ctaTitle="Ready to Secure Your Enterprise?"
      subServices={subServices}
    />
  );
}
