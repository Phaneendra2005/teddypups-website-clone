import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PawIcon from '../components/common/PawIcon';

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found — TeddyPups U.A.E.";
  }, []);

  return (
    <div className="pt-36 pb-28 bg-[#fffdf8] text-center">
      <div className="gutter max-w-xl mx-auto space-y-6">
        <div className="inline-flex p-4 rounded-full bg-[#fff1d8] text-[#a24a1a] mb-2">
          <PawIcon className="size-12" />
        </div>

        <p className="font-scrawl text-3xl text-[#a24a1a]">oops, puppy wandered off!</p>

        <h1 className="font-plush text-5xl sm:text-6xl text-[#2a170e]">
          404
        </h1>

        <p className="text-base sm:text-lg text-[#2a170e]/80 leading-relaxed font-medium">
          The page you are looking for might have been moved or doesn't exist. Let's get you back to the puppies!
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="btn btn-primary text-sm py-3 px-8 w-full sm:w-auto">
            Back to homepage
          </Link>
          <Link to="/puppies" className="btn btn-ghost text-sm py-3 px-8 w-full sm:w-auto">
            View available puppies
          </Link>
        </div>
      </div>
    </div>
  );
}
