
"use client";

import CountUp from "react-countup";

interface StatsCardProps {
  title: string;
  end: number;
  suffix?: string;
}

export default function StatsCard({
  title,
  end,
  suffix = "",
}: StatsCardProps) {
  return (
    <div className="bg-gray-300 rounded-2xl p-8  h-52 flex flex-col justify-between">
      <div>
        <span className="inline-block bg-gray-200 text-slate-700 text-sm font-medium px-3 py-1 rounded-lg">
          {title}
        </span>
      </div>

      <div>
        <h2 className="text-5xl md:text-6xl font-bold text-slate-900">
          <CountUp end={end} duration={4} />
          {suffix}
        </h2>
      </div> 
    </div>
  );
}