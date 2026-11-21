import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/faqs';
import { getWhatsAppLink } from '../../utils/whatsapp';

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState(0);
  const previewFaqs = faqs.slice(0, 5);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#fffdf8]">
      <div className="gutter max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <p className="font-scrawl text-2xl text-[#a24a1a]">clear answers</p>
          <h2 className="font-plush text-3xl sm:text-5xl text-[#2a170e]">
            Frequently asked questions
          </h2>
          <p className="text-base text-[#2a170e]/75 font-medium">
            Everything you need to know about welcoming your new puppy home.
          </p>
        </div>

        <div className="space-y-3.5">
          {previewFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl border-2 border-[#2a170e]/10 bg-[#fffdf8] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left py-4 px-6 flex items-center justify-between gap-4 font-plush text-lg text-[#2a170e] hover:bg-[#fff1d8]/40 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 text-[#a24a1a] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#2a170e]/80 leading-relaxed font-medium bg-[#fffdf8]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Link to="/faq" className="btn btn-ghost text-sm py-2.5 px-6">
            View full FAQ page
          </Link>
          <a
            href={getWhatsAppLink("Hi! I have a question about your puppies.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp text-sm py-2.5 px-6"
          >
            Ask directly on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
