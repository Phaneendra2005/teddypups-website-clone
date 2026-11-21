import React from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppLink } from '../../utils/whatsapp';
import { getImageUrl } from '../../data/puppies';

export default function Hero() {
  const heroPuppies = [
    {
      name: 'Max',
      breed: 'Maltipoo',
      slug: 'maltipoo-max-male',
      image: '/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp',
      tilt: '-rotate-6 translate-y-3'
    },
    {
      name: 'Korean Maltipoo',
      breed: 'Teacup Maltipoo',
      slug: 'korean-teacup-maltipoo-female',
      image: '/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg',
      tilt: 'rotate-3 -translate-y-2'
    },
    {
      name: 'Korean Poodle',
      breed: 'Teacup Poodle',
      slug: 'korean-teacup-poodle-female',
      image: '/media/xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg',
      tilt: '-rotate-3 translate-y-1'
    },
    {
      name: 'Cavapoo',
      breed: 'Maltipoo & Cavapoo',
      slug: 'maltipoo-cavapoo-male',
      image: '/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg',
      tilt: 'rotate-4 translate-y-2'
    },
    {
      name: 'Toy Poodle',
      breed: 'Toy Poodle',
      slug: 'toy-poodle-male-female',
      image: '/media/vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg',
      tilt: '-rotate-4 -translate-y-1'
    },
    {
      name: 'Maltipoo Girl',
      breed: 'Maltipoo',
      slug: 'maltipoo-female-2',
      image: '/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg',
      tilt: 'rotate-6 translate-y-4'
    }
  ];

  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#fffdf8] via-[#fff5e3] to-[#fff1d8] overflow-hidden">
      {/* Decorative Sun Glow in background */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#fbe3b4]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="gutter relative z-10 text-center max-w-4xl mx-auto space-y-6">
        {/* Handwritten Tagline */}
        <div className="inline-block relative">
          <p className="font-scrawl text-2xl sm:text-3xl text-[#a24a1a] font-bold">
            every puppy is family
          </p>
          <svg viewBox="0 0 220 24" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full text-[#e4a352]" aria-hidden="true">
            <path d="M4 14c18-10 30 8 48-1s28-9 46 0 30 8 48-1 30-9 48 0 18 2 22 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>

        {/* Hero Title */}
        <h1 className="font-plush text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-[#2a170e]">
          Premium teacup <br />
          <span className="text-[#a24a1a]">puppies in Dubai</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#2a170e]/80 max-w-2xl mx-auto leading-relaxed font-medium">
          Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/puppies" className="btn btn-primary w-full sm:w-auto text-base py-3.5 px-8 shadow-md">
            View available puppies
          </Link>
          <a 
            href={getWhatsAppLink()} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-ghost w-full sm:w-auto text-base py-3.5 px-8"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      {/* Hero Puppy Lineup / Peekaboo Stage */}
      <div className="relative mt-16 max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-center gap-3 sm:gap-6 overflow-x-auto pb-4 pt-6 scrollbar-none">
          {heroPuppies.map((pup, idx) => (
            <Link
              key={pup.slug}
              to={`/puppies/${pup.slug}`}
              className={`group flex-shrink-0 relative transition-transform duration-300 hover:scale-110 hover:z-20 ${pup.tilt}`}
            >
              <div className="w-24 h-28 sm:w-36 sm:h-44 rounded-t-full rounded-b-2xl overflow-hidden border-3 border-[#2a170e] bg-[#fbe3b4] shadow-lg">
                <img
                  src={getImageUrl(pup.image)}
                  alt={pup.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
                />
              </div>
              <p className="font-scrawl text-center text-sm sm:text-base font-bold text-[#2a170e] mt-1.5 opacity-90 group-hover:opacity-100 group-hover:text-[#a24a1a]">
                {pup.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Scallop edge decoration at bottom of hero */}
      <div className="absolute bottom-0 inset-x-0 h-6 overflow-hidden text-[#fff1d8] fill-current">
        <svg className="w-full h-6" preserveAspectRatio="none" viewBox="0 0 1000 24">
          <defs>
            <pattern id="hero-scallop" width="76" height="24" patternUnits="userSpaceOnUse">
              <path d="M0 24V14A38 18 0 0 1 76 14V24Z" fill="#fff1d8"></path>
              <path d="M0 14A38 18 0 0 1 76 14" fill="none" stroke="#2a170e" strokeWidth="2" opacity="0.15"></path>
            </pattern>
          </defs>
          <rect width="100%" height="24" fill="url(#hero-scallop)" />
        </svg>
      </div>
    </section>
  );
}
