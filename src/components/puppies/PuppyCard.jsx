import React from 'react';
import { Link } from 'react-router-dom';
import PawIcon from '../common/PawIcon';
import { getImageUrl } from '../../data/puppies';
import { getPuppyInquiryLink } from '../../utils/whatsapp';

export default function PuppyCard({ puppy }) {
  const { slug, name, breed, gender, age, where, status, image } = puppy;

  return (
    <div className="group relative flex flex-col bg-[#fffdf8] rounded-3xl overflow-hidden border-2 border-[#2a170e]/10 hover:border-[#a24a1a]/40 shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Puppy Image with Door-like arched frame */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#fff1d8]">
        <img
          src={getImageUrl(image)}
          alt={`${name}, ${breed} puppy`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Origin / Status Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="font-scrawl px-3 py-0.5 rounded-full bg-[#fbe3b4] text-[#2a170e] text-sm font-bold shadow-sm">
            {status}
          </span>
          {where === 'Imported for you' && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#2a170e] text-[#fffdf8] text-xs font-bold uppercase tracking-wider">
              Imported
            </span>
          )}
        </div>
      </div>

      {/* Puppy Info */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-plush text-xl text-[#2a170e] group-hover:text-[#a24a1a] transition-colors">
              {name}
            </h3>
            <PawIcon className="size-4 text-[#a24a1a]/40 group-hover:text-[#a24a1a] transition-colors" />
          </div>
          <p className="text-sm font-bold text-[#a24a1a] mt-0.5">
            {breed}
          </p>
          <p className="text-xs text-[#2a170e]/70 mt-1 capitalize font-medium">
            {gender} • {age}
          </p>
          <p className="text-[11px] text-[#2a170e]/60 font-semibold mt-0.5">
            {where}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex items-center gap-2">
          <Link
            to={`/puppies/${slug}`}
            className="flex-1 text-center py-2 px-3 rounded-full border border-[#2a170e] text-xs font-bold text-[#2a170e] hover:bg-[#2a170e] hover:text-[#fffdf8] transition-colors"
          >
            Meet {name.split(' ')[0]}
          </Link>
          <a
            href={getPuppyInquiryLink(name, breed)}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-3 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba5a] transition-colors"
            title="Chat about this puppy"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
