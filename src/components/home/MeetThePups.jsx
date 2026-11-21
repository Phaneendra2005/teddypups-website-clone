import React from 'react';
import { Link } from 'react-router-dom';
import PuppyCard from '../puppies/PuppyCard';
import { availablePuppies } from '../../data/puppies';

export default function MeetThePups() {
  // Take top 6 available puppies for the showcase
  const showcasePuppies = availablePuppies.slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-b from-[#fff1d8] to-[#fbe3b4]/60">
      <div className="gutter">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-plush text-3xl sm:text-5xl text-[#2a170e]">
              Meet the pups
            </h2>
            <p className="text-base sm:text-lg text-[#2a170e]/80 mt-2 max-w-xl font-medium">
              Real puppies, real photos, looking for their families right now.
            </p>
          </div>
          <Link to="/puppies" className="btn btn-primary self-start md:self-auto text-sm py-3 px-6 shadow-sm">
            See all available puppies
          </Link>
        </div>

        {/* Grid of Puppy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {showcasePuppies.map((puppy) => (
            <PuppyCard key={puppy.slug} puppy={puppy} />
          ))}
        </div>
      </div>
    </section>
  );
}
