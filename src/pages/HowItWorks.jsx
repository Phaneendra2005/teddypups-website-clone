import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppLink, DISPLAY_PHONE } from '../utils/whatsapp';
import { Store, Plane, ShieldCheck, Heart, FileCheck, Stethoscope, Truck, Check, ArrowRight, MessageCircle } from 'lucide-react';

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('local');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "How it works | TeddyPups U.A.E.";
  }, []);

  const localSteps = [
    {
      num: '1',
      title: 'Explore our puppies',
      desc: 'Browse our website to view the available puppies. Each listing includes photos, breed details, age, and health information.'
    },
    {
      num: '2',
      title: 'Choose your puppy',
      desc: 'Once you find a puppy you love, open their profile for more information or to enquire further. You can also reach out to us directly if you have any questions.'
    },
    {
      num: '3',
      title: 'Meet before you choose',
      desc: 'Spend time bonding before making your decision.'
    },
    {
      num: '4',
      title: 'Pick-up or delivery',
      desc: 'Pick up your puppy from us or have them delivered to your home within Dubai. Our delivery service is safe and reliable, ensuring your puppy arrives comfortably.'
    }
  ];

  const importSteps = [
    {
      num: '1',
      title: 'Reserve your puppy',
      desc: 'Browse our selection of available breeds and place a reservation for the teacup puppy that captures your heart. Our reservation-only model ensures that each puppy is specifically sourced to meet your preferences.'
    },
    {
      num: '2',
      title: 'Personalized consultation',
      desc: "Once your reservation is confirmed, we will work closely with you to finalize details and provide updates on your puppy's journey."
    },
    {
      num: '3',
      title: 'Import and arrival',
      desc: 'We manage all aspects of the import process, including health checks, travel arrangements, and necessary documentation. Your puppy will be carefully transported and will arrive ready to join your family.'
    },
    {
      num: '4',
      title: 'Welcome home',
      desc: 'Upon arrival, we provide support to help your new puppy acclimate to their new environment. Our team is available for any additional assistance and to ensure a smooth transition into your home.'
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-[#fffdf8]">
      <div className="gutter">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="font-scrawl text-2xl text-[#a24a1a]">{DISPLAY_PHONE}</span>
          </div>
          <h1 className="font-plush text-4xl sm:text-6xl text-[#2a170e]">
            How it works
          </h1>
          <p className="text-base sm:text-lg text-[#2a170e]/80 font-medium">
            Whether you choose to visit us locally or order a premium breed from overseas, TeddyPups is here to make the experience unforgettable.
          </p>

          {/* Quick Nav Anchors */}
          <div className="pt-4 flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm font-bold">
            <a href="#two-ways" className="py-1.5 px-4 rounded-full bg-[#fff1d8] text-[#2a170e] hover:bg-[#fbe3b4] transition-colors border border-[#2a170e]/10">
              1 Two ways home
            </a>
            <a href="#promise" className="py-1.5 px-4 rounded-full bg-[#fff1d8] text-[#2a170e] hover:bg-[#fbe3b4] transition-colors border border-[#2a170e]/10">
              2 Our premium puppy promise
            </a>
            <a href="#delivery" className="py-1.5 px-4 rounded-full bg-[#fff1d8] text-[#2a170e] hover:bg-[#fbe3b4] transition-colors border border-[#2a170e]/10">
              3 Delivery & collection
            </a>
            <a href="#why-choose-us" className="py-1.5 px-4 rounded-full bg-[#fff1d8] text-[#2a170e] hover:bg-[#fbe3b4] transition-colors border border-[#2a170e]/10">
              4 Why choose us
            </a>
          </div>
        </div>

        {/* Section 1: Two Ways Home */}
        <section id="two-ways" className="mb-24 scroll-mt-28">
          <div className="mb-8">
            <p className="font-scrawl text-2xl text-[#a24a1a]">choose your way</p>
            <h2 className="font-plush text-3xl sm:text-4xl text-[#2a170e]">
              Two ways home
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex gap-3 mb-8">
            <button
              type="button"
              onClick={() => setActiveTab('local')}
              className={`py-2.5 px-6 rounded-full font-bold text-sm transition-all ${
                activeTab === 'local'
                  ? 'bg-[#2a170e] text-[#fffdf8] shadow-sm'
                  : 'bg-[#fff1d8] text-[#2a170e] hover:bg-[#fbe3b4]'
              }`}
            >
              In Dubai · meet in person
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('import')}
              className={`py-2.5 px-6 rounded-full font-bold text-sm transition-all ${
                activeTab === 'import'
                  ? 'bg-[#2a170e] text-[#fffdf8] shadow-sm'
                  : 'bg-[#fff1d8] text-[#2a170e] hover:bg-[#fbe3b4]'
              }`}
            >
              Imported · order upon request
            </button>
          </div>

          {activeTab === 'local' ? (
            <div className="bg-[#fff1d8]/60 rounded-3xl p-8 sm:p-12 border-2 border-[#2a170e]/10 space-y-8 animate-in fade-in">
              <div className="max-w-2xl space-y-3">
                <span className="inline-block py-1 px-3 bg-[#fffdf8] border border-[#2a170e]/15 rounded-full text-xs font-bold text-[#a24a1a]">
                  Downtown Dubai
                </span>
                <h3 className="font-plush text-2xl sm:text-3xl text-[#2a170e]">
                  Meet your puppy in person
                </h3>
                <p className="text-sm sm:text-base text-[#2a170e]/80 leading-relaxed font-medium">
                  Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. We source healthy, well-socialized puppies from trusted local breeders, ensuring they're raised with care, proper nutrition, and veterinary checks.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {localSteps.map((step) => (
                  <div key={step.num} className="bg-[#fffdf8] p-6 rounded-2xl border border-[#2a170e]/10 shadow-sm space-y-2">
                    <span className="font-plush text-xl text-[#a24a1a] block">Step {step.num}</span>
                    <h4 className="font-plush text-lg text-[#2a170e]">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-[#2a170e]/75 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <Link to="/puppies?origin=local" className="btn btn-primary text-sm py-2.5 px-6">
                  See available showroom puppies
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-[#fbe3b4]/40 rounded-3xl p-8 sm:p-12 border-2 border-[#2a170e]/10 space-y-8 animate-in fade-in">
              <div className="max-w-2xl space-y-3">
                <span className="inline-block py-1 px-3 bg-[#fffdf8] border border-[#2a170e]/15 rounded-full text-xs font-bold text-[#a24a1a]">
                  Europe · Korea → Dubai
                </span>
                <h3 className="font-plush text-2xl sm:text-3xl text-[#2a170e]">
                  Order upon request
                </h3>
                <p className="text-sm sm:text-base text-[#2a170e]/80 leading-relaxed font-medium">
                  Looking for a truly exceptional companion? Our Order Upon Request service gives you access to some of the world's most sought-after teacup breeds — ethically sourced from the most reputable, certified breeders across Europe, Korea, and beyond. From Korean teacup poodles to rare Maltese, Pom, and Yorkie lines, we bring the world's finest puppies to Dubai, just for you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {importSteps.map((step) => (
                  <div key={step.num} className="bg-[#fffdf8] p-6 rounded-2xl border border-[#2a170e]/10 shadow-sm space-y-2">
                    <span className="font-plush text-xl text-[#a24a1a] block">Step {step.num}</span>
                    <h4 className="font-plush text-lg text-[#2a170e]">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-[#2a170e]/75 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <a
                  href={getWhatsAppLink("Hello! I'd like to ask about ordering an imported teacup puppy upon request.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp text-sm py-2.5 px-6"
                >
                  Ask about import on WhatsApp
                </a>
              </div>
            </div>
          )}
        </section>

        {/* Section 2: Premium Puppy Promise */}
        <section id="promise" className="mb-24 scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <p className="font-scrawl text-2xl text-[#a24a1a]">puppy passport</p>
            <h2 className="font-plush text-3xl sm:text-4xl text-[#2a170e]">
              Our premium puppy promise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#fffdf8] p-8 rounded-3xl border-2 border-[#2a170e]/10 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#fff1d8] flex items-center justify-center text-[#a24a1a] mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-plush text-xl text-[#2a170e]">Hand-selected breeders</h3>
              <p className="text-sm text-[#2a170e]/75 font-medium leading-relaxed">
                We work only with breeders who uphold the highest ethical and health standards.
              </p>
            </div>

            <div className="bg-[#fffdf8] p-8 rounded-3xl border-2 border-[#2a170e]/10 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#fff1d8] flex items-center justify-center text-[#a24a1a] mb-4">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="font-plush text-xl text-[#2a170e]">Full transparency</h3>
              <p className="text-sm text-[#2a170e]/75 font-medium leading-relaxed">
                Photos, videos, and health certificates are shared before your puppy travels.
              </p>
            </div>

            <div className="bg-[#fffdf8] p-8 rounded-3xl border-2 border-[#2a170e]/10 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#fff1d8] flex items-center justify-center text-[#a24a1a] mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-plush text-xl text-[#2a170e]">Safe, stress-free delivery</h3>
              <p className="text-sm text-[#2a170e]/75 font-medium leading-relaxed">
                We handle every detail of the import process, so your puppy arrives happy, healthy, and ready to love you.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Delivery & Collection */}
        <section id="delivery" className="mb-24 scroll-mt-28">
          <div className="bg-[#fff1d8]/50 rounded-3xl p-8 sm:p-12 border-2 border-[#2a170e]/10 space-y-8">
            <div className="max-w-2xl space-y-2">
              <h2 className="font-plush text-3xl sm:text-4xl text-[#2a170e]">
                Delivery & collection
              </h2>
              <p className="text-base text-[#2a170e]/80 font-medium">
                From a same-day visit in Downtown Dubai to a flight from Korea, every puppy travels comfortably and arrives safely.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#fffdf8] p-6 rounded-2xl border border-[#2a170e]/10 shadow-sm space-y-2">
                <h3 className="font-plush text-lg text-[#2a170e]">Take your puppy home the same day</h3>
                <p className="text-xs sm:text-sm text-[#2a170e]/75 font-medium leading-relaxed">
                  Local puppies are available immediately — visit, fall in love, and go home together.
                </p>
              </div>

              <div className="bg-[#fffdf8] p-6 rounded-2xl border border-[#2a170e]/10 shadow-sm space-y-2">
                <h3 className="font-plush text-lg text-[#2a170e]">Delivery within Dubai</h3>
                <p className="text-xs sm:text-sm text-[#2a170e]/75 font-medium leading-relaxed">
                  Prefer to stay home? We deliver your puppy to your door within Dubai, safely and comfortably.
                </p>
              </div>

              <div className="bg-[#fffdf8] p-6 rounded-2xl border border-[#2a170e]/10 shadow-sm space-y-2">
                <h3 className="font-plush text-lg text-[#2a170e]">Safe international cargo</h3>
                <p className="text-xs sm:text-sm text-[#2a170e]/75 font-medium leading-relaxed">
                  We handle all the paperwork and ensure comfortable travel so your puppy arrives happy and stress-free.
                </p>
              </div>

              <div className="bg-[#fffdf8] p-6 rounded-2xl border border-[#2a170e]/10 shadow-sm space-y-2">
                <h3 className="font-plush text-lg text-[#2a170e]">Worldwide delivery</h3>
                <p className="text-xs sm:text-sm text-[#2a170e]/75 font-medium leading-relaxed">
                  We safely deliver puppies to loving homes all around the world. Our trusted international cargo partners ensure your new furry friend travels comfortably and arrives safely, no matter the distance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Why Choose Us */}
        <section id="why-choose-us" className="scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="font-plush text-3xl sm:text-4xl text-[#2a170e]">
              Why choose us
            </h2>
            <p className="text-base text-[#2a170e]/80 font-medium">
              We're here to help you find a new family member. From the moment you visit our site to the joyful day your puppy arrives at your door, we're with you every step of the way. Our mission is to make the entire adoption process smooth, transparent, and full of love.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-[#fffdf8] p-6 rounded-2xl border border-[#2a170e]/10 shadow-sm space-y-2">
              <h3 className="font-plush text-lg text-[#2a170e]">International cargo</h3>
              <p className="text-xs sm:text-sm text-[#2a170e]/75 font-medium leading-relaxed">
                We safely deliver puppies to loving homes all around the world. Our trusted international cargo partners ensure your new furry friend travels comfortably and arrives safely, no matter the distance.
              </p>
            </div>

            <div className="bg-[#fffdf8] p-6 rounded-2xl border border-[#2a170e]/10 shadow-sm space-y-2">
              <h3 className="font-plush text-lg text-[#2a170e]">Support 24/7</h3>
              <p className="text-xs sm:text-sm text-[#2a170e]/75 font-medium leading-relaxed">
                Our team is available 24/7 to answer your questions and assist you through every step of the adoption process. From choosing your puppy to post-delivery support — we're just a message away.
              </p>
            </div>

            <div className="bg-[#fffdf8] p-6 rounded-2xl border border-[#2a170e]/10 shadow-sm space-y-2">
              <h3 className="font-plush text-lg text-[#2a170e]">Health guarantee</h3>
              <p className="text-xs sm:text-sm text-[#2a170e]/75 font-medium leading-relaxed">
                All our puppies come with a verified health certificate from licensed vets. We ensure every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.
              </p>
            </div>

            <div className="bg-[#fffdf8] p-6 rounded-2xl border border-[#2a170e]/10 shadow-sm space-y-2">
              <h3 className="font-plush text-lg text-[#2a170e]">Unique and high quality puppies</h3>
              <p className="text-xs sm:text-sm text-[#2a170e]/75 font-medium leading-relaxed">
                When you choose TeddyPups, you can trust that you're getting a puppy of the highest quality. We also provide guidance and support to new pet owners, offering advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink("Hello! I would like to ask a question about choosing a puppy.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-sm py-3 px-8 shadow-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Ask us on WhatsApp</span>
            </a>
            <Link to="/puppies" className="btn btn-primary text-sm py-3 px-8 shadow-sm flex items-center gap-2">
              <span>See available puppies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
