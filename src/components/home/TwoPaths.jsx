import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Globe, ArrowRight } from 'lucide-react';

export default function TwoPaths() {
  return (
    <section className="py-20 bg-[#fffdf8] relative">
      <div className="gutter">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="font-scrawl text-2xl text-[#a24a1a]">two simple ways</p>
          <h2 className="font-plush text-3xl sm:text-5xl text-[#2a170e]">
            Choose your adoption journey
          </h2>
          <p className="text-base text-[#2a170e]/75 font-medium">
            Whether you want to visit our boutique showroom in Dubai or reserve a rare teacup lineage from South Korea, we guide you every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Path 1: Local Showroom */}
          <div className="bg-[#fff1d8] rounded-3xl p-8 sm:p-10 border-2 border-[#2a170e]/10 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#2a170e] text-[#fbe3b4] flex items-center justify-center shadow-md">
                <Store className="w-7 h-7" />
              </div>
              <h3 className="font-plush text-2xl sm:text-3xl text-[#2a170e]">
                Meet them locally
              </h3>
              <p className="text-base text-[#2a170e]/80 leading-relaxed font-medium">
                Step into our Downtown Dubai showroom to interact, bond, and play with our puppies in person. Our local puppies are fully vetted and ready to go home with you today.
              </p>
              <ul className="space-y-2 text-sm text-[#2a170e]/85 font-semibold pt-2">
                <li className="flex items-center gap-2">✓ Same-day adoption available</li>
                <li className="flex items-center gap-2">✓ Meet and play in private showroom rooms</li>
                <li className="flex items-center gap-2">✓ In-person veterinary briefing & starter kit</li>
              </ul>
            </div>
            <div className="pt-8">
              <Link to="/puppies?origin=local" className="btn btn-primary w-full text-center py-3 text-sm gap-2">
                <span>View local showroom puppies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Path 2: Imported Breeds */}
          <div className="bg-[#fbe3b4]/50 rounded-3xl p-8 sm:p-10 border-2 border-[#2a170e]/10 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#a24a1a] text-[#fffdf8] flex items-center justify-center shadow-md">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="font-plush text-2xl sm:text-3xl text-[#2a170e]">
                Import a rare breed
              </h3>
              <p className="text-base text-[#2a170e]/80 leading-relaxed font-medium">
                Looking for exclusive Korean Teacup lines, rare color genetics, or miniature lineage? We source exclusively from certified international ethical breeders with complete passport and IATA compliance.
              </p>
              <ul className="space-y-2 text-sm text-[#2a170e]/85 font-semibold pt-2">
                <li className="flex items-center gap-2">✓ Korean micro & teacup bloodlines</li>
                <li className="flex items-center gap-2">✓ Full documentation, CITES & IATA travel</li>
                <li className="flex items-center gap-2">✓ Weekly HD video & medical milestones</li>
              </ul>
            </div>
            <div className="pt-8">
              <Link to="/puppies?origin=imported" className="btn btn-ghost w-full text-center py-3 text-sm gap-2 bg-[#fffdf8]">
                <span>Explore imported teacups</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
