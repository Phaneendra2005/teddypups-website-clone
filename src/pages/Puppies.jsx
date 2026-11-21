import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import PuppyCard from '../components/puppies/PuppyCard';
import { availablePuppies, goneHomePuppies, getImageUrl } from '../data/puppies';
import { DISPLAY_PHONE } from '../utils/whatsapp';
import { Filter, ArrowRight } from 'lucide-react';

export default function Puppies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const originFilter = searchParams.get('origin') || 'all';
  const breedFilter = searchParams.get('breed') || 'all';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Available puppies | TeddyPups U.A.E.";
  }, []);

  const breeds = [
    { label: 'All Breeds', value: 'all' },
    { label: 'Maltipoo', value: 'maltipoo' },
    { label: 'Pomeranian', value: 'pomeranian' },
    { label: 'Poodle', value: 'poodle' },
    { label: 'Cavapoo', value: 'cavapoo' },
    { label: 'Shih Tzu', value: 'shih tzu' },
  ];

  const origins = [
    { label: 'All Puppies', value: 'all' },
    { label: 'In our showroom', value: 'local' },
    { label: 'Imported for you', value: 'imported' },
  ];

  const filteredPuppies = availablePuppies.filter((pup) => {
    const isImported = pup.where === 'Imported for you';
    const matchesOrigin =
      originFilter === 'all' ||
      (originFilter === 'imported' && isImported) ||
      (originFilter === 'local' && !isImported);
    const matchesBreed =
      breedFilter === 'all' || pup.breed.toLowerCase().includes(breedFilter.toLowerCase());
    return matchesOrigin && matchesBreed;
  });

  const handleOriginChange = (val) => {
    const newParams = new URLSearchParams(searchParams);
    if (val === 'all') newParams.delete('origin');
    else newParams.set('origin', val);
    setSearchParams(newParams);
  };

  const handleBreedChange = (val) => {
    const newParams = new URLSearchParams(searchParams);
    if (val === 'all') newParams.delete('breed');
    else newParams.set('breed', val);
    setSearchParams(newParams);
  };

  return (
    <div className="pt-28 pb-24 bg-[#fffdf8]">
      <div className="gutter">
        {/* Header from Teddy's sketchbook */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="font-scrawl text-2xl text-[#a24a1a]">{DISPLAY_PHONE}</span>
          </div>
          <p className="font-scrawl text-2xl text-[#a24a1a]">from Teddy's sketchbook</p>
          <h1 className="font-plush text-4xl sm:text-6xl text-[#2a170e]">
            Available puppies
          </h1>
          <p className="text-base sm:text-lg text-[#2a170e]/80 font-medium">
            Every listing shows real photos of the actual puppy. Open a profile to see them all, then ask us about them on WhatsApp.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#fff1d8] p-4 sm:p-6 rounded-3xl border border-[#2a170e]/10 mb-12 shadow-sm space-y-4">
          <div className="flex items-center gap-2 font-plush text-[#2a170e] text-sm font-bold pb-2 border-b border-[#2a170e]/10">
            <Filter className="w-4 h-4 text-[#a24a1a]" />
            <span>Filter Puppies</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
            {/* Origin Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase font-bold text-[#2a170e]/60 mr-1">Origin:</span>
              {origins.map((o) => (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => handleOriginChange(o.value)}
                  className={`py-1.5 px-4 rounded-full text-xs font-bold transition-all ${
                    originFilter === o.value
                      ? 'bg-[#2a170e] text-[#fffdf8] shadow-sm'
                      : 'bg-[#fffdf8] text-[#2a170e] border border-[#2a170e]/15 hover:bg-[#fbe3b4]/50'
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>

            {/* Breed Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase font-bold text-[#2a170e]/60 mr-1">Breed:</span>
              {breeds.map((b) => (
                <button
                  key={b.value}
                  type="button"
                  onClick={() => handleBreedChange(b.value)}
                  className={`py-1.5 px-3.5 rounded-full text-xs font-bold transition-all ${
                    breedFilter === b.value
                      ? 'bg-[#a24a1a] text-[#fffdf8] shadow-sm'
                      : 'bg-[#fffdf8] text-[#2a170e] border border-[#2a170e]/15 hover:bg-[#fbe3b4]/50'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Listing Results */}
        {filteredPuppies.length === 0 ? (
          <div className="text-center py-20 bg-[#fff1d8]/40 rounded-3xl border border-dashed border-[#2a170e]/20 space-y-4">
            <p className="font-scrawl text-2xl text-[#a24a1a]">No puppies match these filters</p>
            <p className="text-sm text-[#2a170e]/70">Try clearing your filters or contact us to inquire about upcoming litters.</p>
            <button
              type="button"
              onClick={() => {
                setSearchParams({});
              }}
              className="btn btn-primary text-sm py-2 px-6"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {filteredPuppies.map((puppy) => (
              <PuppyCard key={puppy.slug} puppy={puppy} />
            ))}
          </div>
        )}

        {/* Already Gone Home Section */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#fff1d8]/60 border-2 border-[#2a170e]/10 space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <span className="font-scrawl text-2xl text-[#a24a1a]">Already gone home</span>
              <h2 className="font-plush text-3xl sm:text-4xl text-[#2a170e]">
                These puppies have found their families.
              </h2>
            </div>
            <Link to="/gone-home" className="btn btn-primary text-xs py-2.5 px-6 shrink-0 flex items-center gap-1.5">
              <span>See the puppies who've gone home</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Quick Gone Home Preview Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {goneHomePuppies.slice(0, 5).map((pup) => (
              <div key={pup.slug} className="group relative rounded-2xl overflow-hidden border border-[#2a170e]/10 bg-[#fffdf8] shadow-sm">
                <div className="aspect-square relative">
                  <img
                    src={getImageUrl(pup.image)}
                    alt={pup.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-[#2a170e]/80 text-[#fffdf8] text-[10px] font-bold py-0.5 px-2 rounded-full">
                    gone home ♥
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-plush text-sm text-[#2a170e] truncate">{pup.name}</h4>
                  <p className="text-[11px] text-[#2a170e]/60 truncate">{pup.breed}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
