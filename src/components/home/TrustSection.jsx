import React from 'react';
import { ShieldCheck, Plane, Clock, Globe } from 'lucide-react';

export default function TrustSection() {
  const points = [
    {
      icon: ShieldCheck,
      title: 'Vet-checked & healthy',
      desc: 'Every puppy comes vaccinated, dewormed, and with a verified health certificate.'
    },
    {
      icon: Plane,
      title: 'Korea to Dubai, safely',
      desc: 'Trusted breeders, safe travel, and premium care from start to finish.'
    },
    {
      icon: Clock,
      title: 'Support 24/7',
      desc: 'Always here to help, from choosing your puppy to post-delivery support.'
    },
    {
      icon: Globe,
      title: 'Trusted by families worldwide',
      desc: 'Puppies delivered to loving homes all around the world.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#f0b866] to-[#a65a30] text-[#fffdf8]">
      <div className="gutter max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-2">
          <p className="font-scrawl text-2xl text-[#fbe3b4]">puppy passport</p>
          <h2 className="font-plush text-3xl sm:text-5xl text-[#fffdf8]">
            Why families trust TeddyPups
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-[#2a170e]/85 backdrop-blur-sm p-8 rounded-3xl border border-white/15 space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#fbe3b4] text-[#2a170e] flex items-center justify-center font-bold">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-plush text-2xl text-[#fbe3b4]">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#fffdf8]/90 font-medium">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
