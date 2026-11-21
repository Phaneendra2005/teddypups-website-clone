import React from 'react';
import { ShieldCheck, HeartHandshake, Stethoscope, Sparkles, Truck, Award } from 'lucide-react';

export default function TrustSection() {
  const guarantees = [
    {
      icon: Stethoscope,
      title: 'Comprehensive Health Checks',
      desc: 'Full clinical vet exam, core vaccination schedule, deworming, and parasite clearance before departure.'
    },
    {
      icon: ShieldCheck,
      title: 'Written Health Guarantee',
      desc: 'Every adoption contract includes our binding health warranty for complete peace of mind.'
    },
    {
      icon: Award,
      title: 'Official Microchip & Passport',
      desc: 'Government-compliant microchip registered in your name, alongside international pet passport.'
    },
    {
      icon: HeartHandshake,
      title: 'Ethical Breeding Ethics',
      desc: 'We strictly collaborate with responsible, family-scale breeders. No puppy mills, ever.'
    },
    {
      icon: Truck,
      title: 'VIP UAE Delivery & Travel',
      desc: 'Climate-controlled chauffeur direct to your doorstep anywhere across Dubai, Abu Dhabi & the Emirates.'
    },
    {
      icon: Sparkles,
      title: 'Lifetime Puppy Parenting Support',
      desc: 'Nutrition advice, training consultations, and emergency team assistance whenever you need us.'
    }
  ];

  return (
    <section className="py-20 bg-[#fff5e3]">
      <div className="gutter">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="font-scrawl text-2xl text-[#a24a1a]">our commitment to you</p>
          <h2 className="font-plush text-3xl sm:text-5xl text-[#2a170e]">
            Adopt with absolute confidence
          </h2>
          <p className="text-base text-[#2a170e]/75 font-medium">
            We hold ourselves to the strictest global veterinary and animal care standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-[#fffdf8] p-8 rounded-3xl border border-[#2a170e]/10 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-start space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#fbe3b4] text-[#a24a1a] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-plush text-xl text-[#2a170e]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#2a170e]/75 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
