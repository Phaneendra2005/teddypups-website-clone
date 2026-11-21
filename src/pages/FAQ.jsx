import React, { useState, useEffect } from 'react';
import { faqs } from '../data/faqs';
import { getWhatsAppLink } from '../utils/whatsapp';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openMap, setOpenMap] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Questions & Answers (FAQ) — TeddyPups U.A.E.";
    // Open first question by default
    setOpenMap({ 'Health & Safety-0': true });
  }, []);

  const toggle = (key) => {
    setOpenMap((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Group FAQs by category
  const categories = [...new Set(faqs.map((f) => f.category))];

  return (
    <div className="pt-28 pb-24 bg-[#fffdf8]">
      <div className="gutter max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="font-scrawl text-2xl text-[#a24a1a]">we're here to help</p>
          <h1 className="font-plush text-4xl sm:text-6xl text-[#2a170e]">
            Questions & answers
          </h1>
          <p className="text-base sm:text-lg text-[#2a170e]/80 font-medium max-w-2xl mx-auto">
            Can't find what you're looking for? Message us on WhatsApp — our team replies within minutes.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppLink("Hi! I have a question not listed in your FAQ.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-sm py-2.5 px-6 inline-flex gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Message us on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Categories & Accordions */}
        <div className="space-y-12">
          {categories.map((cat) => {
            const catFaqs = faqs.filter((f) => f.category === cat);
            return (
              <div key={cat} className="space-y-4">
                <h2 className="font-plush text-2xl text-[#2a170e] flex items-center gap-2 pb-2 border-b border-[#2a170e]/15">
                  <HelpCircle className="w-5 h-5 text-[#a24a1a]" />
                  <span>{cat}</span>
                </h2>

                <div className="space-y-3">
                  {catFaqs.map((faq, idx) => {
                    const key = `${cat}-${idx}`;
                    const isOpen = !!openMap[key];
                    return (
                      <div
                        key={key}
                        className="rounded-2xl border-2 border-[#2a170e]/10 bg-[#fffdf8] overflow-hidden transition-all duration-200"
                      >
                        <button
                          type="button"
                          onClick={() => toggle(key)}
                          className="w-full text-left py-4 px-6 flex items-center justify-between gap-4 font-plush text-lg text-[#2a170e] hover:bg-[#fff1d8]/40 transition-colors"
                          aria-expanded={isOpen}
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={`w-5 h-5 flex-shrink-0 text-[#a24a1a] transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#2a170e]/80 leading-relaxed font-medium bg-[#fffdf8] border-t border-[#2a170e]/5">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-16 p-8 rounded-3xl bg-[#fff1d8] border-2 border-[#2a170e]/10 text-center space-y-4">
          <h3 className="font-plush text-2xl text-[#2a170e]">
            Have a custom question or specific request?
          </h3>
          <p className="text-sm text-[#2a170e]/75 max-w-md mx-auto font-medium">
            Our puppy specialists are happy to advise you on breed characteristics, apartment suitability, and upcoming litters.
          </p>
          <a
            href={getWhatsAppLink("Hello! I would like some advice on choosing a puppy.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-sm py-3 px-8 inline-flex"
          >
            Chat with a specialist
          </a>
        </div>
      </div>
    </div>
  );
}
