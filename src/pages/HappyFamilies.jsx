import React, { useEffect } from 'react';
import { testimonials, happyFamilyMoments } from '../data/testimonials';
import PawIcon from '../components/common/PawIcon';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function HappyFamilies() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Happy Families — TeddyPups U.A.E.";
  }, []);

  return (
    <div className="pt-28 pb-24 bg-[#fffdf8]">
      <div className="gutter">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <p className="font-scrawl text-2xl text-[#a24a1a]">our wall of happy endings</p>
          <h1 className="font-plush text-4xl sm:text-6xl text-[#2a170e]">
            Happy families
          </h1>
          <p className="text-base sm:text-lg text-[#2a170e]/80 font-medium">
            Nothing makes us happier than seeing our puppies in loving homes! Here are some beautiful moments from our TeddyPups families across Dubai, Abu Dhabi, and beyond.
          </p>
        </div>

        {/* Featured Testimonial Banner */}
        <div className="bg-gradient-to-r from-[#fff1d8] to-[#fbe3b4] rounded-3xl p-8 sm:p-12 border-2 border-[#2a170e]/10 shadow-sm mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <span className="font-scrawl text-xl text-[#a24a1a] font-bold">Featured story</span>
            <blockquote className="font-plush text-xl sm:text-2xl text-[#2a170e] leading-snug">
              "TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind."
            </blockquote>
            <p className="font-bold text-sm text-[#2a170e]/80">
              — Sarah M. , Dubai, UAE
            </p>
          </div>
          <div className="md:col-span-4">
            <img
              src="https://puppy.instabizweb.com/_next/image?url=%2Fmedia%2FlrYgKCzauGW9%2F862b350f1f%2Fb942a5_dd7daf7c699444a8bfea0bb4dcf963a1-mv2.jpg&w=640&q=75"
              alt="Happy Puppy Family"
              className="rounded-2xl w-full aspect-square object-cover shadow-md border-2 border-[#2a170e]/20"
            />
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#fffdf8] rounded-3xl p-6 sm:p-8 border-2 border-[#2a170e]/10 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#f2be6b]">
                  {[...Array(5)].map((_, i) => (
                    <PawIcon key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-sm sm:text-base text-[#2a170e]/85 italic leading-relaxed">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="pt-6 mt-6 border-t border-[#2a170e]/10 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#2a170e]/20"
                />
                <div>
                  <h4 className="font-plush text-sm sm:text-base text-[#2a170e]">
                    {item.author}
                  </h4>
                  <p className="text-xs text-[#a24a1a] font-bold">
                    Adopted {item.puppyName} ({item.puppyBreed})
                  </p>
                  <p className="text-[11px] text-[#2a170e]/60">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Gallery Grid of Happy Moments */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <p className="font-scrawl text-2xl text-[#a24a1a]">precious moments</p>
            <h2 className="font-plush text-3xl sm:text-4xl text-[#2a170e]">
              Every one of them was a Teddy Pup once
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {happyFamilyMoments.map((src, idx) => (
              <div key={idx} className="aspect-square rounded-2xl overflow-hidden border border-[#2a170e]/10 shadow-sm bg-[#fff1d8]">
                <img
                  src={src}
                  alt={`Happy family puppy moment ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Share your story CTA */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#fbe3b4]/50 border-2 border-[#2a170e]/10 text-center space-y-4">
          <p className="font-scrawl text-2xl text-[#a24a1a]">are you already a TeddyPups parent?</p>
          <h3 className="font-plush text-2xl sm:text-3xl text-[#2a170e]">
            Share your adoption story with us!
          </h3>
          <p className="text-sm sm:text-base text-[#2a170e]/75 max-w-lg mx-auto font-medium">
            Send us photos or videos of your puppy growing up and we'd love to feature you on our wall of happy endings.
          </p>
          <a
            href={getWhatsAppLink("Hi! I'd love to share photos of my TeddyPup!")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp inline-flex text-sm py-2.5 px-6 shadow-sm"
          >
            Send photos on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
