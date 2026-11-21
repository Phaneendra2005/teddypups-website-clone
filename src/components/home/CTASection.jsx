import React from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppLink } from '../../utils/whatsapp';

export default function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#fbe3b4] to-[#f2be6b] overflow-hidden text-[#2a170e]">
      <div className="gutter relative z-10 text-center max-w-3xl mx-auto space-y-6">
        <p className="font-scrawl text-3xl text-[#a24a1a] font-bold">
          welcome home
        </p>

        <h2 className="font-plush text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
          Ready to meet your new best friend?
        </h2>

        <p className="text-base sm:text-xl text-[#2a170e]/85 leading-relaxed font-medium">
          Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help you find the right match and ensure a smooth, safe delivery across the UAE.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp w-full sm:w-auto text-base py-3.5 px-8 shadow-md"
          >
            Enquire on WhatsApp
          </a>
          <Link
            to="/contact"
            className="btn btn-primary w-full sm:w-auto text-base py-3.5 px-8 shadow-md bg-[#2a170e] text-[#fffdf8]"
          >
            Visit & contact
          </Link>
        </div>
      </div>
    </section>
  );
}
