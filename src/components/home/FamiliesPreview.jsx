import React from 'react';
import { Link } from 'react-router-dom';
import { testimonials } from '../../data/testimonials';

export default function FamiliesPreview() {
  const featured = testimonials[0];
  const gridPhotos = testimonials.slice(1, 7);

  return (
    <section className="py-20 bg-[#fffdf8]">
      <div className="gutter max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="font-plush text-3xl sm:text-5xl text-[#2a170e]">
            Happy families & puppies
          </h2>
          <p className="text-base text-[#2a170e]/80 font-medium leading-relaxed">
            We are truly honored to see our puppies become cherished members of loving families. These heartwarming moments have been shared by our valued clients who welcomed a Teddy Pup into their homes and hearts.
          </p>
        </div>

        {/* Featured Testimonial Quote */}
        <div className="bg-[#fff1d8] rounded-3xl p-8 sm:p-10 border-2 border-[#2a170e]/15 mb-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <span className="font-plush text-5xl text-[#a24a1a] block leading-none">“</span>
            <blockquote className="font-plush text-xl sm:text-2xl text-[#2a170e] leading-snug">
              {featured.quote}
            </blockquote>
            <p className="font-bold text-sm text-[#a24a1a]">
              {featured.author} <span className="text-[#2a170e]/70 font-medium">, {featured.location}</span>
            </p>
          </div>
          <div className="md:col-span-4 aspect-square rounded-2xl overflow-hidden border border-[#2a170e]/15">
            <img
              src={featured.image}
              alt="Happy family with Maltipoo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Family Photo Cards Grid with Captions */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {gridPhotos.map((item) => (
            <div key={item.id} className="group rounded-2xl overflow-hidden border border-[#2a170e]/15 bg-[#fff1d8]/50 shadow-xs">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="p-3 text-xs sm:text-sm font-bold text-[#2a170e] text-center font-scrawl">
                {item.caption}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/happy-families" className="btn btn-primary text-sm py-3 px-8">
            See every happy family
          </Link>
        </div>
      </div>
    </section>
  );
}
