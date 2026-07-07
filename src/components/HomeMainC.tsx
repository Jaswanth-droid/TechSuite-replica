"use client";

import React from "react";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  desc: string;
  linkText: string;
  route: string;
  icon: React.ReactNode;
}

export default function Services() {
  const services: Service[] = [
    {
      id: "erp",
      title: "ERP Solutions",
      desc: "Seamlessly implement and optimize SAP ERP systems for scalable business operations.",
      linkText: "Explore ERP Services",
      route: "/services/erp",
      icon: <img src="/erp.png" alt="ERP Solutions" className="w-10 h-10 object-contain" />
    },
    {
      id: "cloud",
      title: "Cloud Services",
      desc: "Secure, scalable, and cost-effective infrastructure for your digital workloads.",
      linkText: "Explore Cloud Services",
      route: "/services/cloud-services",
      icon: <img src="/cloud.png" alt="Cloud Services" className="w-10 h-10 object-contain" />
    },
    {
      id: "analytics",
      title: "Planning & Analytics",
      desc: "Turn real-time SAP data into powerful insights with actionable dashboards.",
      linkText: "Explore Analytics",
      route: "/services/planning-analytics",
      icon: <img src="/analytics.png" alt="Planning & Analytics" className="w-10 h-10 object-contain" />
    },
    {
      id: "automation",
      title: "AI & Intelligent Automation",
      desc: "Streamline operations using AI-driven digital workers and intelligent workflows.",
      linkText: "Explore Automation",
      route: "/services/ai-automation",
      icon: <img src="/automation.png" alt="AI & Intelligent Automation" className="w-10 h-10 object-contain" />
    },
    {
      id: "cybersecurity",
      title: "Cyber Security",
      desc: "End-to-end protection across SAP, cloud, and IT environments.",
      linkText: "Explore Cybersecurity",
      route: "/services/cybersecurity",
      icon: <img src="/security.png" alt="Cyber Security" className="w-10 h-10 object-contain" />
    },
    {
      id: "infrastructure",
      title: "Smart Spaces & IT Infrastructure",
      desc: "Integrated infrastructure and IoT solutions to power smart enterprise environments.",
      linkText: "Explore Smart Infrastructure",
      route: "/services/smart-spaces",
      icon: <img src="/infrastructure.png" alt="Smart Spaces & IT Infrastructure" className="w-10 h-10 object-contain" />
    }
  ];

  return (
    <section id="services" className="relative w-full py-24 px-4 sm:px-6 bg-white overflow-hidden">
      {/* Centered Honeycomb Background Pattern matching the mockup */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[340px] pointer-events-none z-0 overflow-hidden select-none opacity-40">
        <div className="w-full h-full [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,white_20%,transparent_100%)]">
          <svg className="w-full h-full text-slate-100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="honeycomb" width="56" height="32.32" patternUnits="userSpaceOnUse" patternTransform="scale(1.2)">
                <path d="M28 0 L56 8.08 L56 24.24 L28 32.32 L0 24.24 L0 8.08 Z" fill="currentColor" stroke="white" strokeWidth="1.5" />
                <path d="M0 16.16 L28 24.24 L28 40.4 L0 48.48 L-28 40.4 L-28 16.16 Z" fill="currentColor" stroke="white" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#honeycomb)" />
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
         

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-slate-100/80 border border-slate-200 px-4 py-1.5 rounded-full mb-6 relative z-10">
            <svg className="w-3.5 h-3.5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="text-[12px] font-semibold text-slate-700 tracking-wide uppercase">
              What We Do?
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight relative z-10">
            Services
          </h2>
          
          <p className="mt-4 text-[14px] sm:text-[15px] text-slate-500 font-medium  max-w-2xl mx-auto leading-relaxed relative z-10">
            "We help businesses scale with cloud-native ERP, advanced analytics, intelligent automation, and secure digital infrastructure."
          </p>
        </div>

        {/* 3x2 Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-white border border-slate-100 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(79,70,229,0.08)] hover:border-indigo-100 transition-all duration-500 flex flex-col items-center text-center"
            >
              {/* Icon Container with Wings */}
              <div className="relative mb-6">
                {/* Left Wing */}
                <div className="absolute inset-0 bg-[#4f46e5]/10 rounded-[18px] transition-all duration-500 ease-out transform scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-x-3 group-hover:-rotate-12 z-0"></div>
                {/* Right Wing */}
                <div className="absolute inset-0 bg-[#4f46e5]/10 rounded-[18px] transition-all duration-500 ease-out transform scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-3 group-hover:rotate-12 z-0"></div>
                
                {/* Icon box container (Main Card) */}
                <div className="relative z-10 w-16 h-16 rounded-[18px] bg-blue-50/50 border border-blue-100/60 flex items-center justify-center shadow-sm transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_12px_24px_rgba(79,70,229,0.15)] group-hover:border-indigo-300">
                  <div className="transition-transform duration-500 group-hover:scale-110">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#4f46e5] group-hover:text-indigo-600 transition-colors mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] sm:text-[14px] text-slate-500 font-normal leading-relaxed mb-6 flex-1 max-w-xs">
                {service.desc}
              </p>

              {/* Route Link */}
              <Link
                href={service.route}
                className="text-[13px] font-bold text-slate-800 hover:text-[#4f46e5] inline-flex items-center gap-1.5 transition-colors group/link cursor-pointer"
              >
                <span>{service.linkText}</span>
                <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
