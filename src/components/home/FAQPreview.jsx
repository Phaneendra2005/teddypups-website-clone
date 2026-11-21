import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/faqs';

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState(0);
  const previewFaqs = faqs.slice(0, 3);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#4d2b19] to-[#2f1a10] text-[#fffdf8] relative overflow-hidden">
      <div className="gutter max-w-4xl mx-auto relative z-10 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/15 pb-6">
          <div>
            <h2 className="font-plush text-3xl sm:text-5xl text-[#fbe3b4]">
              Questions, answered
            </h2>
          </div>
          <Link
            to="/faq"
            className="btn btn-ghost text-sm py-2 px-5 text-[#fffdf8] border-white/30 hover:border-[#fbe3b4] hover:text-[#fbe3b4] self-start sm:self-auto"
          >
            Read all questions
          </Link>
        </div>

        <div className="space-y-4">
          {previewFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left py-5 px-6 flex items-center justify-between gap-4 font-plush text-lg sm:text-xl text-[#fbe3b4] hover:bg-white/10 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#fbe3b4] text-[#2a170e] inline-flex items-center justify-center text-sm font-extrabold flex-shrink-0">
                      ?
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-[#fbe3b4] transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#fffdf8]/90 leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
