import { Users, Briefcase, Building2, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

interface StatProps {
  icon: React.ElementType;
  value: string;
  label: string;
  endValue: number;
}

function Stat({ icon: Icon, value, label }: StatProps) {
  return (
    <div className="flex flex-col items-center">
      <Icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
      <div className="text-4xl font-bold text-primary">{value}</div>
      <div className="mt-2 text-gray-600">{label}</div>
    </div>
  );
}

export function Stats() {
  const stats = [
    { icon: Briefcase, value: "1M+", label: "Active Jobs", endValue: 1000000 },
    { icon: Building2, value: "50K+", label: "Companies", endValue: 50000 },
    { icon: Users, value: "2M+", label: "Job Seekers", endValue: 2000000 },
    { icon: Star, value: "4.8", label: "Average Rating", endValue: 4.8 }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Stat key={index} {...stat} />
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {['google', 'microsoft', 'apple', 'meta'].map((company) => (
            <div key={company} className="flex justify-center">
              <img 
                src={`https://logo.clearbit.com/${company}.com`}
                alt={`${company} logo`}
                className="h-8 object-contain filter grayscale opacity-50 hover:opacity-75 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}