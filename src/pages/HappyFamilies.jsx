import React, { useState, useEffect } from 'react';
import { happyFamilyMoments, happyFamilyCaptions } from '../data/testimonials';
import { getWhatsAppLink, DISPLAY_PHONE } from '../utils/whatsapp';
import { X, MessageCircle } from 'lucide-react';

export default function HappyFamilies() {
  const [activePhoto, setActivePhoto] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Happy families | TeddyPups U.A.E.";
  }, []);

  return (
    <div className="pt-28 pb-24 bg-[#fffdf8]">
      <div className="gutter">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="font-scrawl text-2xl text-[#a24a1a]">{DISPLAY_PHONE}</span>
          </div>
          <p className="font-scrawl text-2xl text-[#a24a1a]">our wall of happy endings</p>
          <h1 className="font-plush text-4xl sm:text-6xl text-[#2a170e]">
            Happy families
          </h1>
          <p className="text-base sm:text-lg text-[#2a170e]/80 font-medium">
            Nothing makes us happier than seeing our puppies in loving homes! Here are some beautiful moments shared by our amazing clients after welcoming their furry friends.
          </p>
          <div className="pt-2">
            <span className="inline-block py-1.5 px-4 bg-[#fff1d8] border border-[#2a170e]/15 rounded-full text-xs font-bold text-[#a24a1a]">
              64 moments and counting
            </span>
          </div>
        </div>

        {/* Featured Testimonial Banner */}
        <div className="bg-gradient-to-r from-[#fff1d8] to-[#fbe3b4] rounded-3xl p-8 sm:p-12 border-2 border-[#2a170e]/10 shadow-sm mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <span className="text-5xl font-serif text-[#a24a1a] leading-none block">“</span>
            <blockquote className="font-plush text-xl sm:text-2xl text-[#2a170e] leading-snug">
              TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.
            </blockquote>
            <p className="font-bold text-sm text-[#2a170e]/80">
              Sarah M. , Dubai, UAE
            </p>
          </div>
          <div className="md:col-span-4">
            <img
              src="https://puppy.instabizweb.com/_next/image?url=%2Fmedia%2FlrYgKCzauGW9%2F862b350f1f%2Fb942a5_dd7daf7c699444a8bfea0bb4dcf963a1-mv2.jpg&w=640&q=75"
              alt="Happy family moment"
              className="rounded-2xl w-full aspect-square object-cover shadow-md border-2 border-[#2a170e]/20"
            />
          </div>
        </div>

        {/* Moments Gallery with Captions */}
        <div className="space-y-6 mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {happyFamilyMoments.map((src, idx) => {
              const caption = happyFamilyCaptions[idx % happyFamilyCaptions.length];
              return (
                <div
                  key={idx}
                  onClick={() => setActivePhoto({ src, caption })}
                  className="group relative rounded-2xl overflow-hidden border border-[#2a170e]/10 shadow-sm bg-[#fff1d8] cursor-pointer"
                >
                  <div className="aspect-square">
                    <img
                      src={src}
                      alt={caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 bg-[#fffdf8] border-t border-[#2a170e]/10">
                    <p className="text-xs font-bold text-[#2a170e] truncate">{caption}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#fbe3b4]/40 border-2 border-dashed border-[#2a170e]/15 text-center space-y-4">
          <p className="font-scrawl text-2xl text-[#a24a1a]">every one of them was a Teddy Pup once</p>
          <h3 className="font-plush text-2xl sm:text-3xl text-[#2a170e]">
            Ready to welcome your own furry family member?
          </h3>
          <p className="text-sm sm:text-base text-[#2a170e]/75 max-w-lg mx-auto font-medium">
            Contact us on WhatsApp to view available puppies or discuss our custom import service.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppLink("Hello! I would love to find a puppy for my family.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-sm py-2.5 px-6 shadow-sm inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#2a170e]/80 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-lg w-full bg-[#fffdf8] rounded-3xl overflow-hidden border-2 border-[#fffdf8]/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#2a170e]/70 hover:bg-[#2a170e] text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-square bg-[#fff1d8]">
              <img
                src={activePhoto.src}
                alt={activePhoto.caption}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 text-center bg-[#fffdf8]">
              <p className="font-plush text-lg text-[#2a170e]">{activePhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
