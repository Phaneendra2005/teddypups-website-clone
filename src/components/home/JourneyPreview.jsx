import React from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppLink } from '../../utils/whatsapp';

export default function JourneyPreview() {
  const steps = [
    {
      num: '1',
      title: 'Choose your breed',
      desc: "Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle."
    },
    {
      num: '2',
      title: 'Get photos & details',
      desc: 'Our team will share real photos, health details, and all necessary information directly on WhatsApp.'
    },
    {
      num: '3',
      title: 'Secure & safe delivery',
      desc: 'Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free.'
    }
  ];

  const breedChips = ['Maltipoo', 'Pomeranian', 'Poodle', 'Cavapoo', 'Shih Tzu'];

  return (
    <section className="py-20 bg-[#fffdf8]">
      <div className="gutter max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="font-plush text-3xl sm:text-5xl text-[#2a170e]">
            Your puppy journey
          </h2>
          <p className="text-base sm:text-lg text-[#2a170e]/80 font-medium">
            A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#fff1d8]/50 p-8 rounded-3xl border border-[#2a170e]/10 flex flex-col justify-between space-y-4"
            >
              <span className="font-plush text-4xl text-[#a24a1a]">
                {step.num}
              </span>
              <h3 className="font-plush text-2xl text-[#2a170e]">
                {step.title}
              </h3>
              <p className="text-sm text-[#2a170e]/80 leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* WhatsApp interactive preview card matching reference */}
        <div className="bg-[#fff1d8] rounded-3xl p-6 sm:p-8 border border-[#2a170e]/15 shadow-sm max-w-xl mx-auto space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-[#2a170e]/10">
            <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold">
              TP
            </div>
            <div>
              <p className="font-plush text-sm text-[#2a170e]">TeddyPups U.A.E.</p>
              <p className="text-xs text-[#25D366] font-bold">● online</p>
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-3 rounded-2xl bg-white max-w-[85%] text-[#2a170e] shadow-xs">
              Hi TeddyPups! I'd love to know more about your puppies.
            </div>
            <div className="p-3 rounded-2xl bg-[#fbe3b4] max-w-[90%] ml-auto text-[#2a170e] shadow-xs">
              Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle.
            </div>
          </div>

          {/* Quick breed selector chips */}
          <div className="flex flex-wrap gap-2 pt-2">
            {breedChips.map((b) => (
              <span key={b} className="px-3 py-1 rounded-full bg-white border border-[#2a170e]/15 text-xs font-bold text-[#2a170e]">
                {b}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full justify-center text-sm py-3"
            >
              Say hello on WhatsApp
            </a>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/how-it-works" className="btn btn-ghost text-sm py-2.5 px-6">
            How it works
          </Link>
        </div>
      </div>
    </section>
  );
}
