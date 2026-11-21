import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ShieldCheck, Home } from 'lucide-react';

export default function JourneyPreview() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Browse & Choose',
      desc: 'Explore available teacup & miniature puppies on our live catalog with photos, videos, and temperament notes.'
    },
    {
      number: '02',
      icon: Heart,
      title: 'Meet or Reserve',
      desc: 'Schedule a cuddle session in our Downtown Dubai showroom, or reserve an imported puppy with custom video updates.'
    },
    {
      number: '03',
      icon: ShieldCheck,
      title: 'Health Exam & Preparation',
      desc: 'Our certified veterinarians perform final physical examinations, administer booster shots, and issue microchip records.'
    },
    {
      number: '04',
      icon: Home,
      title: 'Welcome Home',
      desc: 'Pick up your puppy same-day from the showroom or enjoy door-to-door delivery with a full puppy starter kit.'
    }
  ];

  return (
    <section className="py-20 bg-[#fffdf8]">
      <div className="gutter">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="font-scrawl text-2xl text-[#a24a1a]">how it unfolds</p>
          <h2 className="font-plush text-3xl sm:text-5xl text-[#2a170e]">
            Your seamless puppy journey
          </h2>
          <p className="text-base text-[#2a170e]/75 font-medium">
            From first glance to your first cozy cuddle at home, we make the process delightful and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="relative bg-[#fff1d8]/50 p-6 sm:p-8 rounded-3xl border border-[#2a170e]/10 flex flex-col justify-between"
              >
                <div>
                  <span className="font-plush text-3xl text-[#a24a1a]/30 block mb-4">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#2a170e] text-[#fbe3b4] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-plush text-xl text-[#2a170e] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#2a170e]/75 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link to="/how-it-works" className="btn btn-ghost text-sm py-3 px-8">
            Learn more about the process
          </Link>
        </div>
      </div>
    </section>
  );
}
