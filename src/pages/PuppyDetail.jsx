import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { availablePuppies, getImageUrl } from '../data/puppies';
import { getPuppyInquiryLink, getWhatsAppLink } from '../utils/whatsapp';
import { ArrowLeft, Check, ShieldCheck, HeartHandshake, Sparkles, MessageCircle } from 'lucide-react';
import PawIcon from '../components/common/PawIcon';

export default function PuppyDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const puppy = availablePuppies.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (puppy) {
      document.title = `${puppy.name} (${puppy.breed}) — TeddyPups U.A.E.`;
    }
  }, [puppy]);

  if (!puppy) {
    return (
      <div className="pt-36 pb-24 text-center gutter space-y-6">
        <h1 className="font-plush text-4xl text-[#2a170e]">Puppy not found</h1>
        <p className="text-base text-[#2a170e]/75">This puppy profile may have already gone home or the link is incorrect.</p>
        <Link to="/puppies" className="btn btn-primary">
          Back to all puppies
        </Link>
      </div>
    );
  }

  const related = availablePuppies.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="pt-28 pb-24 bg-[#fffdf8]">
      <div className="gutter">
        {/* Back Link */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#2a170e]/75 hover:text-[#a24a1a] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to puppies</span>
        </button>

        {/* Main Puppy Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Photos column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#2a170e]/15 bg-[#fff1d8] shadow-md">
              <img
                src={getImageUrl(puppy.image)}
                alt={puppy.name}
                className="w-full h-full object-cover object-center"
              />
              <span className="font-scrawl absolute top-4 left-4 px-4 py-1 rounded-full bg-[#fbe3b4] text-[#2a170e] text-base font-bold shadow-sm">
                {puppy.status === 'available' ? 'Available now' : 'Reserved'}
              </span>
            </div>

            {/* Gallery thumbnails */}
            {puppy.gallery && puppy.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {puppy.gallery.map((img, idx) => (
                  <div key={idx} className="aspect-square rounded-2xl overflow-hidden border border-[#2a170e]/15 bg-[#fff1d8]">
                    <img
                      src={getImageUrl(img)}
                      alt={`${puppy.name} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details & Actions column */}
          <div className="lg:col-span-5 space-y-6 bg-[#fff1d8]/40 p-8 rounded-3xl border border-[#2a170e]/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-extrabold text-[#a24a1a]">
                  {puppy.origin === 'imported' ? 'Imported Korean Bloodline' : 'Local Dubai Showroom'}
                </span>
              </div>
              <h1 className="font-plush text-4xl sm:text-5xl text-[#2a170e] mt-1">
                {puppy.name}
              </h1>
              <p className="font-plush text-xl text-[#a24a1a] mt-1 font-bold">
                {puppy.breed}
              </p>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-3 py-4 border-y border-[#2a170e]/10 text-sm">
              <div>
                <span className="text-xs text-[#2a170e]/60 block font-bold uppercase">Gender</span>
                <span className="font-bold text-[#2a170e] capitalize">{puppy.gender}</span>
              </div>
              <div>
                <span className="text-xs text-[#2a170e]/60 block font-bold uppercase">Age</span>
                <span className="font-bold text-[#2a170e]">{puppy.age}</span>
              </div>
              <div>
                <span className="text-xs text-[#2a170e]/60 block font-bold uppercase">Health Clearance</span>
                <span className="font-bold text-[#2a170e]">Vet Examined & Cleared</span>
              </div>
              <div>
                <span className="text-xs text-[#2a170e]/60 block font-bold uppercase">Vaccinations</span>
                <span className="font-bold text-[#2a170e]">Up to date + Microchip</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="font-plush text-base text-[#2a170e]">About {puppy.name}</h3>
              <p className="text-sm leading-relaxed text-[#2a170e]/80 font-medium">
                {puppy.description}
              </p>
            </div>

            {/* Price & Primary Call to Action */}
            <div className="pt-4 space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-[#2a170e]/60 font-bold uppercase">Adoption Fee</span>
                <span className="font-plush text-2xl text-[#2a170e]">{puppy.price || 'Inquire for quote'}</span>
              </div>

              <a
                href={getPuppyInquiryLink(puppy.name, puppy.breed)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full justify-center text-base py-3.5 shadow-md gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Enquire on WhatsApp about {puppy.name}</span>
              </a>

              <Link
                to="/contact"
                className="btn btn-ghost w-full justify-center text-sm py-3 bg-[#fffdf8]"
              >
                Book a showroom visit
              </Link>
            </div>

            {/* Highlights list */}
            <div className="space-y-2 pt-4 border-t border-[#2a170e]/10 text-xs text-[#2a170e]/80 font-semibold">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#a24a1a]" />
                <span>Includes official UAE veterinarian health certificate</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#a24a1a]" />
                <span>Complete starter pack with food, blanket, and guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#a24a1a]" />
                <span>VIP climate-controlled chauffeur delivery available in UAE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Puppies */}
        <div className="pt-16 border-t border-[#2a170e]/10">
          <h2 className="font-plush text-2xl sm:text-3xl text-[#2a170e] mb-8">
            You may also fall in love with
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((rel) => (
              <div key={rel.slug} className="bg-[#fff1d8]/50 rounded-2xl p-4 border border-[#2a170e]/10 flex items-center gap-4">
                <img
                  src={getImageUrl(rel.image)}
                  alt={rel.name}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-plush text-lg text-[#2a170e]">{rel.name}</h4>
                  <p className="text-xs text-[#a24a1a] font-bold">{rel.breed}</p>
                  <Link to={`/puppies/${rel.slug}`} className="text-xs font-bold text-[#2a170e] underline mt-1 block">
                    View profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
