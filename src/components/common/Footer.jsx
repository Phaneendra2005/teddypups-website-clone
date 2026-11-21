import React from 'react';
import { Link } from 'react-router-dom';
import PawIcon from './PawIcon';
import { getWhatsAppLink, DISPLAY_PHONE, DISPLAY_EMAIL, DISPLAY_ADDRESS } from '../../utils/whatsapp';

export default function Footer() {
  return (
    <footer className="relative bg-[#2a170e] text-[#fffdf8] pt-16 pb-12 overflow-hidden">
      {/* Scallop edge decoration at top of footer */}
      <div className="absolute top-0 inset-x-0 h-6 -translate-y-full overflow-hidden text-[#2a170e] fill-current">
        <svg className="w-full h-6" preserveAspectRatio="none" viewBox="0 0 1000 24">
          <defs>
            <pattern id="footer-scallop" width="60" height="24" patternUnits="userSpaceOnUse">
              <path d="M0 24V14A30 18 0 0 1 60 14V24Z" fill="#2a170e"></path>
            </pattern>
          </defs>
          <rect width="100%" height="24" fill="url(#footer-scallop)" />
        </svg>
      </div>

      <div className="gutter">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img 
                src="https://puppy.instabizweb.com/brand/logo.png" 
                alt="TeddyPups Logo" 
                className="w-12 h-12 object-contain brightness-110"
              />
              <span className="font-plush text-3xl tracking-tight text-[#fbe3b4]">
                TeddyPups U.A.E.
              </span>
            </Link>
            <p className="font-scrawl text-2xl text-[#f2be6b]">
              Home, at last.
            </p>
            <p className="text-sm leading-relaxed text-[#fffdf8]/75 max-w-sm">
              TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies, offering premium services and worldwide shipping.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-sm py-2 px-5 inline-flex"
              >
                WhatsApp our team
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-plush text-lg text-[#fbe3b4] tracking-wide">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#fffdf8]/80 font-medium">
              <li>
                <Link to="/puppies" className="hover:text-[#f2be6b] transition-colors flex items-center gap-2">
                  <PawIcon className="size-3 text-[#f2be6b]" /> Available puppies
                </Link>
              </li>
              <li>
                <Link to="/gone-home" className="hover:text-[#f2be6b] transition-colors flex items-center gap-2">
                  <PawIcon className="size-3 text-[#f2be6b]" /> Gone home
                </Link>
              </li>
              <li>
                <Link to="/happy-families" className="hover:text-[#f2be6b] transition-colors flex items-center gap-2">
                  <PawIcon className="size-3 text-[#f2be6b]" /> Happy families
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-[#f2be6b] transition-colors flex items-center gap-2">
                  <PawIcon className="size-3 text-[#f2be6b]" /> How it works
                </Link>
              </li>
              <li>
                <Link to="/how-it-works#delivery" className="hover:text-[#f2be6b] transition-colors flex items-center gap-2">
                  <PawIcon className="size-3 text-[#f2be6b]" /> Delivery & collection
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#f2be6b] transition-colors flex items-center gap-2">
                  <PawIcon className="size-3 text-[#f2be6b]" /> FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#f2be6b] transition-colors flex items-center gap-2">
                  <PawIcon className="size-3 text-[#f2be6b]" /> Visit & contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Say Hello & Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-plush text-lg text-[#fbe3b4] tracking-wide">
              Say hello
            </h4>
            <div className="space-y-3 text-sm text-[#fffdf8]/80">
              <p className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-[#f2be6b] font-bold">Showroom Address</span>
                <span>{DISPLAY_ADDRESS}</span>
              </p>
              <p className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-[#f2be6b] font-bold">Direct Line / WhatsApp</span>
                <a href={`tel:${DISPLAY_PHONE}`} className="hover:text-[#f2be6b]">{DISPLAY_PHONE}</a>
              </p>
              <p className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-[#f2be6b] font-bold">Email Inquiries</span>
                <a href={`mailto:${DISPLAY_EMAIL}`} className="hover:text-[#f2be6b]">{DISPLAY_EMAIL}</a>
              </p>
              <p className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-[#f2be6b] font-bold">Visiting Hours</span>
                <span>Monday – Sunday: 10:00 AM – 9:00 PM</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#fffdf8]/60 gap-4">
          <p>© {new Date().getFullYear()} TeddyPups U.A.E. All rights reserved.</p>
          <p className="flex items-center gap-1 font-scrawl text-lg text-[#fbe3b4]">
            every puppy is family
          </p>
        </div>
      </div>
    </footer>
  );
}
