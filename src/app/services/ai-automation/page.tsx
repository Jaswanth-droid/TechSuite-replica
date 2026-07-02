"use client";

import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function AiAutomationPage() {
  const subServices = [
    { title: "Sales Order Automation", description: "Automated order extraction from PDFs/emails with direct posting into ERP systems." },
    { title: "Master Data Processing", description: "Rule-based automation to validate and update material and customer records." },
    { title: "SS&C Blue Prism RPA", description: "Scale processes using enterprise-grade secure software robots." },
    { title: "AI-Powered Enhancements", description: "Intelligent document processing (IDP) and unstructured data interpretation." }
  ];

  return (
    <ServicePageTemplate
      title="AI & INTELLIGENT AUTOMATION"
      tagline="AUTOMATE WITH CONFIDENCE USING AI-POWERED DIGITAL WORKERS."
      description="We Implement Intelligent Automation That Frees Up Your Workforce, Enhances Accuracy, And Speeds Up Time-To-Value—Powered By SS&C Blue Prism."
      ctaTitle="Ready to Automate Your Workflows?"
      subServices={subServices}
    />
  );
}
