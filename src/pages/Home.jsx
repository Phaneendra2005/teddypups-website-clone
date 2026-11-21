import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import MeetThePups from '../components/home/MeetThePups';
import TwoPaths from '../components/home/TwoPaths';
import JourneyPreview from '../components/home/JourneyPreview';
import TrustSection from '../components/home/TrustSection';
import FamiliesPreview from '../components/home/FamiliesPreview';
import FAQPreview from '../components/home/FAQPreview';
import CTASection from '../components/home/CTASection';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "TeddyPups U.A.E. — Premium teacup puppies in Dubai";
  }, []);

  return (
    <div className="w-full">
      <Hero />
      <MeetThePups />
      <TwoPaths />
      <JourneyPreview />
      <TrustSection />
      <FamiliesPreview />
      <FAQPreview />
      <CTASection />
    </div>
  );
}
