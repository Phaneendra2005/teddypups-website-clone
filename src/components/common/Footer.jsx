import React from 'react';
import { Link } from 'react-router-dom';
import PawIcon from './PawIcon';
import { getWhatsAppLink } from '../../utils/whatsapp';

export default function Footer() {
  return (
    <footer className="relative bg-[#2a170e] text-[#fffdf8] pt-20 pb-12 overflow-hidden">
      {/* Curved night hill outline at top */}
      <div className="absolute top-0 inset-x-0 h-16 -translate-y-full overflow-hidden text-[#2a170e] fill-current pointer-events-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0 80V44c120-30 240-44 360-30s240 46 360 34 240-58 360-46 240 40 360 26v52z" fill="#2a170e"></path>
        </svg>
      </div>

      <div className="gutter">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/15">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <p className="font-plush text-3xl sm:text-4xl text-[#fbe3b4] tracking-tight">
              Home, at last.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#fffdf8]/80 max-w-sm font-medium">
              TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies, offering premium services and worldwide shipping.
            </p>
          </div>

          {/* Explore Column */}
          <nav aria-label="Footer" className="md:col-span-3 space-y-4">
            <h2 className="font-scrawl text-2xl text-[#fbe3b4]">
              Explore
            </h2>
            <ul className="space-y-2.5 text-sm font-semibold text-[#fffdf8]/90">
              <li>
                <Link to="/puppies" className="hover:text-[#fbe3b4] hover:underline underline-offset-4 transition-colors">
                  Available puppies
                </Link>
              </li>
              <li>
                <Link to="/gone-home" className="hover:text-[#fbe3b4] hover:underline underline-offset-4 transition-colors">
                  Gone home
                </Link>
              </li>
              <li>
                <Link to="/happy-families" className="hover:text-[#fbe3b4] hover:underline underline-offset-4 transition-colors">
                  Happy families
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-[#fbe3b4] hover:underline underline-offset-4 transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link to="/how-it-works#delivery" className="hover:text-[#fbe3b4] hover:underline underline-offset-4 transition-colors">
                  Delivery & collection
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#fbe3b4] hover:underline underline-offset-4 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#fbe3b4] hover:underline underline-offset-4 transition-colors">
                  Visit & contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Say Hello Column */}
          <div className="md:col-span-4 space-y-4">
            <h2 className="font-scrawl text-2xl text-[#fbe3b4]">
              Say hello
            </h2>
            <ul className="space-y-2.5 text-sm font-semibold text-[#fffdf8]/90">
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#fbe3b4] transition-colors"
                >
                  WhatsApp +971 50 000 0000
                </a>
              </li>
              <li>
                <a href="mailto:info@instabizweb.com" className="hover:text-[#fbe3b4] transition-colors">
                  info@instabizweb.com
                </a>
              </li>
              <li className="font-normal text-[#fffdf8]/75">
                Downtown Dubai, United Arab Emirates
              </li>
            </ul>

            {/* Social media pill buttons matching reference */}
            <ul className="pt-3 flex flex-wrap gap-2.5" aria-label="Social media">
              <li>
                <a
                  href="https://www.instabizweb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center rounded-full border border-white/20 px-4 text-xs font-semibold hover:border-[#fbe3b4] hover:text-[#fbe3b4] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.instabizweb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center rounded-full border border-white/20 px-4 text-xs font-semibold hover:border-[#fbe3b4] hover:text-[#fbe3b4] transition-colors"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://www.instabizweb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center rounded-full border border-white/20 px-4 text-xs font-semibold hover:border-[#fbe3b4] hover:text-[#fbe3b4] transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#fffdf8]/60">
          <span className="flex items-center gap-2.5">
            <img
              src="https://puppy.instabizweb.com/brand/logo.png"
              alt="TeddyPups logo"
              className="w-7 h-7 object-contain"
            />
            <span>© 2026 TeddyPups U.A.E.</span>
          </span>
          <span className="font-scrawl text-lg text-[#fbe3b4]/90">
            every puppy is family
          </span>
        </div>
      </div>
    </footer>
  );
}
