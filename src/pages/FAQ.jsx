import React, { useState, useEffect } from 'react';
import { faqs } from '../data/faqs';
import { getWhatsAppLink, DISPLAY_PHONE } from '../utils/whatsapp';
import { ChevronDown, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [openMap, setOpenMap] = useState({ 0: true });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Questions & answers | TeddyPups U.A.E.";
  }, []);

  const toggle = (index) => {
    setOpenMap((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="pt-28 pb-24 bg-[#fffdf8]">
      <div className="gutter max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="font-scrawl text-2xl text-[#a24a1a]">{DISPLAY_PHONE}</span>
          </div>
          <h1 className="font-plush text-4xl sm:text-6xl text-[#2a170e]">
            Questions & answers
          </h1>
          <p className="text-base sm:text-lg text-[#2a170e]/80 font-medium max-w-2xl mx-auto">
            Can't find what you're looking for? Message us on WhatsApp — our team is available 24/7.
          </p>

          <div className="pt-4 flex items-center justify-center gap-3">
            <span className="font-scrawl text-xl text-[#a24a1a]">sniff out a question</span>
            <span className="text-xs font-bold uppercase tracking-wider py-1 px-3 bg-[#fff1d8] rounded-full border border-[#2a170e]/10 text-[#2a170e]">
              9 notes on the board
            </span>
          </div>
        </div>

        {/* 9 Notes Accordion List */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = !!openMap[idx];
            return (
              <div
                key={idx}
                className="rounded-3xl border-2 border-[#2a170e]/10 bg-[#fffdf8] overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left py-5 px-6 sm:px-8 flex items-center justify-between gap-4 font-plush text-lg sm:text-xl text-[#2a170e] hover:bg-[#fff1d8]/40 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-scrawl text-2xl text-[#a24a1a] w-6 shrink-0">{idx + 1}.</span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-[#a24a1a] transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-base text-[#2a170e]/85 leading-relaxed font-medium bg-[#fffdf8] border-t border-[#2a170e]/5 pl-14 sm:pl-16">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Inquiry Prompt */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#fff1d8] border-2 border-[#2a170e]/10 text-center space-y-4">
          <p className="font-scrawl text-2xl text-[#a24a1a]">? ! Ask your own question</p>
          <h3 className="font-plush text-2xl sm:text-3xl text-[#2a170e]">
            Have a custom question or specific request?
          </h3>
          <p className="text-sm sm:text-base text-[#2a170e]/75 max-w-md mx-auto font-medium">
            Our puppy specialists are happy to advise you on breed characteristics, apartment suitability, and upcoming litters.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppLink("Hello! I have a question not listed in your FAQ.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-sm py-3 px-8 inline-flex items-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Ask us on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
