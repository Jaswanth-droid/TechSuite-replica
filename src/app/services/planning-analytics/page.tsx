"use client";

import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function PlanningAnalyticsPage() {
  const subServices = [
    { title: "SAP Analytics Cloud (SAC)", description: "Seamless planning, self-service BI, and automated predictive forecasting." },
    { title: "Microsoft Power BI", description: "Interactive data visualizations and unified business unit reporting." },
    { title: "Real-time Dashboards", description: "Live data pipeline integration to view operational and sales KPIs." },
    { title: "Financial Consolidation", description: "Structured enterprise reporting models for planning and budgeting cycles." }
  ];

  return (
    <ServicePageTemplate
      title="PLANNING & ANALYTICS"
      tagline="TURN INSIGHTS INTO IMPACT WITH REAL-TIME ANALYTICS AND PLANNING."
      description="We Empower Organizations To Move From Spreadsheets To Insights By Delivering Data Visualization, Planning, And Forecasting Solutions Integrated With SAP And Microsoft Platforms."
      ctaTitle="Ready to Unlock Real-time Insights?"
      subServices={subServices}
    />
  );
}
