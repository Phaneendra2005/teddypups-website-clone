import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppLink } from '../utils/whatsapp';
import { Store, Plane, ShieldCheck, Heart, FileCheck, Stethoscope, Truck, Check } from 'lucide-react';

export default function HowItWorks() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "How It Works — TeddyPups U.A.E.";
  }, []);

  const localSteps = [
    {
      num: '1',
      title: 'Browse available puppies online',
      desc: 'Browse our live catalog of currently available teacup puppies in Dubai with unfiltered photos and videos.'
    },
    {
      num: '2',
      title: 'Visit our Downtown Dubai showroom',
      desc: 'Drop in or schedule a private consultation to meet, hold, and interact with the puppies in our boutique showroom.'
    },
    {
      num: '3',
      title: 'Veterinary review & documentation',
      desc: 'Review complete health inspection reports, microchip registration, and vaccination records with our specialists.'
    },
    {
      num: '4',
      title: 'Same-day adoption & welcome home',
      desc: 'Take your puppy home right away with our comprehensive starter pack, nutrition guidelines, and 24/7 care support.'
    }
  ];

  const importSteps = [
    {
      num: '1',
      title: 'Specify your dream breed & preferences',
      desc: 'Tell us your preferred breed (Korean teacup Maltipoo, Pomeranian, Poodle), color genetics, size, and gender.'
    },
    {
      num: '2',
      title: 'Curated selection from partner breeders',
      desc: 'We match your request with certified, ethical breeders in South Korea and worldwide, providing weekly HD videos.'
    },
    {
      num: '3',
      title: 'Health testing, permits & flight prep',
      desc: 'Our logistics and veterinary team handles blood testing, microchipping, rabies titer, import permits, and IATA booking.'
    },
    {
      num: '4',
      title: 'Chauffeur delivery to your door',
      desc: 'Upon arrival at Dubai International Airport and clearing veterinary customs, we deliver your puppy directly to your home.'
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-[#fffdf8]">
      <div className="gutter">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <p className="font-scrawl text-2xl text-[#a24a1a]">clear, joyful & transparent</p>
          <h1 className="font-plush text-4xl sm:text-6xl text-[#2a170e]">
            How it works
          </h1>
          <p className="text-base sm:text-lg text-[#2a170e]/80 font-medium">
            Whether you choose to visit us locally or order a premium breed from overseas, TeddyPups makes the entire experience safe, simple, and memorable.
          </p>
        </div>

        {/* Section 1: Local Path */}
        <div className="mb-20 bg-[#fff1d8] rounded-3xl p-8 sm:p-12 border-2 border-[#2a170e]/10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#2a170e] text-[#fbe3b4] flex items-center justify-center">
              <Store className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#a24a1a]">Option A</span>
              <h2 className="font-plush text-2xl sm:text-3xl text-[#2a170e]">
                Adopting locally in Dubai
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localSteps.map((step) => (
              <div key={step.num} className="bg-[#fffdf8] p-6 rounded-2xl border border-[#2a170e]/10 space-y-3">
                <span className="font-plush text-2xl text-[#a24a1a] block">Step {step.num}</span>
                <h3 className="font-plush text-lg text-[#2a170e]">{step.title}</h3>
                <p className="text-sm text-[#2a170e]/75 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Link to="/puppies?origin=local" className="btn btn-primary text-sm py-2.5 px-6">
              View local puppies ready today
            </Link>
          </div>
        </div>

        {/* Section 2: Import Path */}
        <div className="mb-20 bg-[#fbe3b4]/40 rounded-3xl p-8 sm:p-12 border-2 border-[#2a170e]/10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#a24a1a] text-[#fffdf8] flex items-center justify-center">
              <Plane className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#a24a1a]">Option B</span>
              <h2 className="font-plush text-2xl sm:text-3xl text-[#2a170e]">
                Importing an exclusive breed
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {importSteps.map((step) => (
              <div key={step.num} className="bg-[#fffdf8] p-6 rounded-2xl border border-[#2a170e]/10 space-y-3">
                <span className="font-plush text-2xl text-[#a24a1a] block">Step {step.num}</span>
                <h3 className="font-plush text-lg text-[#2a170e]">{step.title}</h3>
                <p className="text-sm text-[#2a170e]/75 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <a
              href={getWhatsAppLink("Hi! I'd like to ask about importing a puppy.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-sm py-2.5 px-6"
            >
              Consult an import specialist
            </a>
          </div>
        </div>

        {/* Delivery & Collection Section */}
        <div id="delivery" className="mb-20 scroll-mt-28">
          <div className="bg-[#fffdf8] rounded-3xl p-8 sm:p-12 border-2 border-[#2a170e]/10 shadow-sm space-y-8">
            <div className="max-w-2xl">
              <p className="font-scrawl text-2xl text-[#a24a1a]">safe transit</p>
              <h2 className="font-plush text-3xl sm:text-4xl text-[#2a170e]">
                Delivery & Collection across the UAE
              </h2>
              <p className="text-base text-[#2a170e]/75 mt-2 font-medium">
                We take the safety and comfort of our puppies seriously. Here is how your new family member travels to you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#fff1d8]/50 border border-[#2a170e]/10 space-y-3">
                <Truck className="w-8 h-8 text-[#a24a1a]" />
                <h3 className="font-plush text-xl text-[#2a170e]">Showroom Handover</h3>
                <p className="text-sm text-[#2a170e]/75 font-medium leading-relaxed">
                  Pick up your puppy directly from our air-conditioned Downtown Dubai showroom. Spend initial time bonding with staff guidance.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#fff1d8]/50 border border-[#2a170e]/10 space-y-3">
                <Truck className="w-8 h-8 text-[#a24a1a]" />
                <h3 className="font-plush text-xl text-[#2a170e]">UAE VIP Chauffeur</h3>
                <p className="text-sm text-[#2a170e]/75 font-medium leading-relaxed">
                  Direct delivery in private, sanitized, temperature-regulated pet vehicles across Dubai, Abu Dhabi, Sharjah, Ajman, and RAK.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#fff1d8]/50 border border-[#2a170e]/10 space-y-3">
                <Plane className="w-8 h-8 text-[#a24a1a]" />
                <h3 className="font-plush text-xl text-[#2a170e]">GCC & Worldwide Flights</h3>
                <p className="text-sm text-[#2a170e]/75 font-medium leading-relaxed">
                  IATA-certified in-cabin pet nanny travel or dedicated pet cargo with full customs clearing assistance at your destination.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What Comes With Every Puppy */}
        <div className="bg-[#fff5e3] rounded-3xl p-8 sm:p-12 border border-[#2a170e]/10 space-y-6">
          <div className="max-w-xl">
            <h3 className="font-plush text-2xl sm:text-3xl text-[#2a170e]">
              What comes with every puppy
            </h3>
            <p className="text-sm text-[#2a170e]/75 mt-1 font-medium">
              We send every puppy home with everything you need for their first week.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm font-bold text-[#2a170e]/85">
            <div className="flex items-center gap-3 p-3 bg-[#fffdf8] rounded-xl border border-[#2a170e]/10">
              <Check className="w-5 h-5 text-[#25D366]" /> Official Pet Passport
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#fffdf8] rounded-xl border border-[#2a170e]/10">
              <Check className="w-5 h-5 text-[#25D366]" /> Registered Microchip
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#fffdf8] rounded-xl border border-[#2a170e]/10">
              <Check className="w-5 h-5 text-[#25D366]" /> Up-to-date Core Vaccinations
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#fffdf8] rounded-xl border border-[#2a170e]/10">
              <Check className="w-5 h-5 text-[#25D366]" /> Deworming & Parasite Clearance
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#fffdf8] rounded-xl border border-[#2a170e]/10">
              <Check className="w-5 h-5 text-[#25D366]" /> Written Health Guarantee
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#fffdf8] rounded-xl border border-[#2a170e]/10">
              <Check className="w-5 h-5 text-[#25D366]" /> Premium Puppy Starter Kit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
