import React from 'react';
import { Link } from 'react-router-dom';
import { testimonials } from '../../data/testimonials';
import PawIcon from '../common/PawIcon';

export default function FamiliesPreview() {
  const previewList = testimonials.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-[#fbe3b4]/30 to-[#fffdf8]">
      <div className="gutter">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-scrawl text-2xl text-[#a24a1a]">hearts full of love</p>
            <h2 className="font-plush text-3xl sm:text-5xl text-[#2a170e]">
              Happy families
            </h2>
            <p className="text-base text-[#2a170e]/80 mt-2 max-w-xl font-medium">
              Nothing makes us happier than seeing our puppies in their loving forever homes.
            </p>
          </div>
          <Link to="/happy-families" className="btn btn-ghost self-start md:self-auto text-sm py-3 px-6">
            View all stories
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewList.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#fffdf8] rounded-3xl p-6 sm:p-8 border border-[#2a170e]/10 shadow-sm flex flex-col justify-between"
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
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#2a170e]/20"
                />
                <div>
                  <h4 className="font-plush text-sm text-[#2a170e]">
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
      </div>
    </section>
  );
}
