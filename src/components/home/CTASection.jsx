import React from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppLink } from '../../utils/whatsapp';
import { getImageUrl } from '../../data/puppies';

export default function CTASection() {
  return (
    <section className="py-24 bg-[#fffdf8] relative overflow-hidden">
      <div className="gutter max-w-4xl mx-auto text-center space-y-6">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-3 border-[#2a170e] shadow-lg bg-[#fbe3b4]">
          <img
            src={getImageUrl('/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp')}
            alt="Max puppy waiting inside"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="font-scrawl text-3xl text-[#a24a1a] font-bold">
          welcome home
        </p>

        <h2 className="font-plush text-3xl sm:text-5xl lg:text-6xl text-[#2a170e] tracking-tight">
          Ready to meet your new best friend?
        </h2>

        <p className="text-base sm:text-lg text-[#2a170e]/80 max-w-2xl mx-auto leading-relaxed font-medium">
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
            className="btn btn-primary w-full sm:w-auto text-base py-3.5 px-8 shadow-md"
          >
            Visit & contact
          </Link>
        </div>
      </div>
    </section>
  );
}
