import React from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../data/puppies';

export default function TwoPaths() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#fbe3b4] to-[#f7d18d]">
      <div className="gutter mx-auto max-w-6xl">
        <h2 className="font-plush text-3xl sm:text-5xl text-[#2a170e] text-center mb-14">
          Two ways to meet your puppy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Way 1: Puppies in Dubai */}
          <article className="bg-[#fffdf8] rounded-3xl p-8 sm:p-10 border-2 border-[#2a170e]/15 shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-plush text-2xl sm:text-3xl text-[#2a170e]">
                Puppies in Dubai
              </h3>
              
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#2a170e]/15 shadow-inner">
                <img
                  src={getImageUrl('/media/FHyoHcIosLZE/60f6e7e00a/27b888_323008bb0f6a41d4bde2a0da7206cd98f000.jpg')}
                  alt="A tiny apricot teddy bear puppy held up in the TeddyPups showroom"
                  className="w-full h-full object-cover"
                />
                <span className="font-scrawl absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#fbe3b4] text-[#2a170e] text-sm font-bold shadow-sm">
                  In our showroom
                </span>
              </div>

              <p className="text-base text-[#2a170e]/85 leading-relaxed font-medium pt-2">
                See them, love them, take them home. Come meet our locally available puppies before you decide.
              </p>
            </div>

            <div className="pt-8">
              <Link to="/puppies?origin=local" className="btn btn-primary w-full text-center py-3.5 text-sm">
                Meet local puppies
              </Link>
            </div>
          </article>

          {/* Way 2: Imported for you */}
          <article className="bg-[#fffdf8] rounded-3xl p-8 sm:p-10 border-2 border-[#2a170e]/15 shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-plush text-2xl sm:text-3xl text-[#2a170e]">
                Imported for you
              </h3>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#2a170e]/15 shadow-inner bg-[#fff1d8] flex items-center justify-center p-6 text-center">
                <div className="space-y-3">
                  <span className="font-scrawl text-2xl text-[#a24a1a] block font-bold">
                    Korea → Dubai
                  </span>
                  <div className="flex items-center justify-center gap-3 font-plush text-lg text-[#2a170e]">
                    <span className="px-3 py-1 rounded-full bg-[#fbe3b4]">Seoul</span>
                    <span>✈</span>
                    <span className="px-3 py-1 rounded-full bg-[#fbe3b4]">Dubai</span>
                  </div>
                  <p className="text-xs text-[#2a170e]/70 max-w-xs mx-auto font-medium">
                    Pre-flight veterinary checks, IATA compliance, official passports & door-to-door delivery.
                  </p>
                </div>
              </div>

              <p className="text-base text-[#2a170e]/85 leading-relaxed font-medium pt-2">
                Exclusive Korean teacup puppies, delivered. Order from the world's most reputable breeders and let us handle the import.
              </p>
            </div>

            <div className="pt-8">
              <Link to="/puppies?origin=imported" className="btn btn-ghost w-full text-center py-3.5 text-sm border-2 border-[#2a170e]">
                See imported puppies
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
