import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { goneHomePuppies, getImageUrl } from '../data/puppies';
import { Heart, Sparkles } from 'lucide-react';
import PawIcon from '../components/common/PawIcon';

export default function GoneHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Gone Home (Adopted Puppies) — TeddyPups U.A.E.";
  }, []);

  return (
    <div className="pt-28 pb-24 bg-[#fffdf8]">
      <div className="gutter">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <p className="font-scrawl text-2xl text-[#a24a1a]">happily adopted</p>
          <h1 className="font-plush text-4xl sm:text-6xl text-[#2a170e]">
            Gone home
          </h1>
          <p className="text-base sm:text-lg text-[#2a170e]/80 font-medium">
            These precious little ones have already joined their forever families. Every successful adoption represents another happy story we are proud to be part of.
          </p>
        </div>

        {/* Gone Home Puppies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {goneHomePuppies.map((pup) => (
            <div
              key={pup.slug}
              className="bg-[#fff1d8]/40 rounded-3xl overflow-hidden border-2 border-[#2a170e]/10 shadow-sm flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] bg-[#fff1d8] overflow-hidden">
                <img
                  src={getImageUrl(pup.image)}
                  alt={`${pup.name}, ${pup.breed}`}
                  className="w-full h-full object-cover object-center"
                />
                <span className="font-scrawl absolute top-3 right-3 px-3.5 py-1 rounded-full bg-[#2a170e] text-[#fffdf8] text-sm font-bold shadow-md flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 fill-current text-[#f9b9a6]" />
                  <span>Adopted</span>
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-plush text-2xl text-[#2a170e]">
                    {pup.name}
                  </h3>
                  <PawIcon className="size-4 text-[#a24a1a]" />
                </div>
                <p className="text-sm font-bold text-[#a24a1a]">
                  {pup.breed} ({pup.gender})
                </p>
                <p className="text-xs text-[#2a170e]/75 font-semibold pt-1 border-t border-[#2a170e]/10">
                  {pup.family}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-10 rounded-3xl bg-gradient-to-r from-[#fff1d8] to-[#fbe3b4] border border-[#2a170e]/10 text-center space-y-4">
          <p className="font-scrawl text-2xl text-[#a24a1a]">looking for your own companion?</p>
          <h2 className="font-plush text-3xl text-[#2a170e]">
            Explore our currently available puppies
          </h2>
          <p className="text-sm sm:text-base text-[#2a170e]/80 max-w-lg mx-auto font-medium">
            We have beautiful puppies ready for showroom visits today, as well as imported puppies arriving soon.
          </p>
          <div className="pt-2">
            <Link to="/puppies" className="btn btn-primary text-sm py-3 px-8">
              View available puppies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
