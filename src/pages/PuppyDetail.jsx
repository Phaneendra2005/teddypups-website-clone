import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { availablePuppies, getImageUrl } from '../data/puppies';
import { getPuppyInquiryLink, getWhatsAppLink } from '../utils/whatsapp';
import { ArrowLeft, Check, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import PawIcon from '../components/common/PawIcon';

export default function PuppyDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const puppyIdx = availablePuppies.findIndex((p) => p.slug === slug);
  const puppy = availablePuppies[puppyIdx];

  const prevPuppy = puppyIdx > 0 ? availablePuppies[puppyIdx - 1] : availablePuppies[availablePuppies.length - 1];
  const nextPuppy = puppyIdx < availablePuppies.length - 1 ? availablePuppies[puppyIdx + 1] : availablePuppies[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    setActivePhotoIdx(0);
    setFormSubmitted(false);
    if (puppy) {
      document.title = `${puppy.name}, ${puppy.breed} puppy | TeddyPups U.A.E.`;
      setInquiryForm((prev) => ({
        ...prev,
        message: `Hi! I'd love to know more about ${puppy.name} (${puppy.breed}).`
      }));
    }
  }, [slug, puppy]);

  if (!puppy) {
    return (
      <div className="pt-36 pb-24 text-center gutter space-y-6">
        <h1 className="font-plush text-4xl text-[#2a170e]">Puppy not found</h1>
        <p className="text-base text-[#2a170e]/75">This puppy profile may have already gone home or the link is incorrect.</p>
        <Link to="/puppies" className="btn btn-primary">
          Available puppies
        </Link>
      </div>
    );
  }

  const gallery = puppy.gallery || [puppy.image];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!inquiryForm.name.trim()) errs.name = 'Your name is required';
    if (!inquiryForm.phone.trim()) errs.phone = 'Phone or WhatsApp is required';
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setFormSubmitted(true);
  };

  return (
    <article className="pt-24 pb-20 bg-gradient-to-b from-[#fff1d8]/40 via-[#fffdf8] to-[#fffdf8] text-[#2a170e]">
      <div className="gutter max-w-6xl mx-auto space-y-16">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-sm font-semibold text-[#2a170e]/70 flex items-center gap-2">
          <Link to="/puppies" className="hover:text-[#a24a1a] hover:underline">
            Available puppies
          </Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-[#2a170e] font-bold">{puppy.name}</span>
        </nav>

        {/* Chapter 1: Hello, it's me */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-plush text-3xl text-[#a24a1a]">1</span>
            <span className="font-scrawl text-2xl text-[#a24a1a]">hello, it's me</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Gallery Left */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-3xl overflow-hidden border-2 border-[#2a170e]/15 bg-[#fff1d8] shadow-md">
                <img
                  src={getImageUrl(gallery[activePhotoIdx])}
                  alt={`${puppy.name}, photo ${activePhotoIdx + 1} of ${gallery.length}`}
                  className="w-full h-full object-cover"
                />

                {/* Slideshow Arrows */}
                {gallery.length > 1 && (
                  <div className="absolute inset-x-4 bottom-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setActivePhotoIdx((activePhotoIdx - 1 + gallery.length) % gallery.length)}
                      className="size-11 place-items-center rounded-full border-2 border-[#2a170e] bg-white/95 text-xl font-bold hover:bg-[#fbe3b4] transition-colors"
                      aria-label="Previous photo"
                    >
                      ‹
                    </button>
                    <span className="rounded-full bg-[#2a170e]/80 px-3.5 py-1 text-xs font-semibold text-white">
                      {activePhotoIdx + 1} / {gallery.length}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActivePhotoIdx((activePhotoIdx + 1) % gallery.length)}
                      className="size-11 place-items-center rounded-full border-2 border-[#2a170e] bg-white/95 text-xl font-bold hover:bg-[#fbe3b4] transition-colors"
                      aria-label="Next photo"
                    >
                      ›
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Puppy Specs Right */}
            <div className="lg:col-span-5 bg-[#fff1d8]/40 p-8 rounded-3xl border border-[#2a170e]/10 space-y-6">
              <div>
                <span className="font-scrawl text-xl text-[#a24a1a] font-bold block mb-1">
                  {puppy.status}
                </span>
                <h1 className="font-plush text-4xl sm:text-5xl text-[#2a170e]">
                  {puppy.name}
                </h1>
                <p className="font-plush text-xl text-[#a24a1a] mt-1">
                  {puppy.breed}
                </p>
              </div>

              {/* Exact Specs List matching reference */}
              <dl className="grid grid-cols-2 gap-4 py-4 border-y border-[#2a170e]/10 text-sm">
                <div>
                  <dt className="text-xs text-[#2a170e]/60 font-bold uppercase">Breed</dt>
                  <dd className="font-bold text-[#2a170e] mt-0.5">{puppy.breed}</dd>
                </div>
                <div>
                  <dt className="text-xs text-[#2a170e]/60 font-bold uppercase">Boy or girl</dt>
                  <dd className="font-bold text-[#2a170e] mt-0.5">{puppy.gender}</dd>
                </div>
                <div>
                  <dt className="text-xs text-[#2a170e]/60 font-bold uppercase">Age</dt>
                  <dd className="font-bold text-[#2a170e] mt-0.5">{puppy.age}</dd>
                </div>
                <div>
                  <dt className="text-xs text-[#2a170e]/60 font-bold uppercase">Where</dt>
                  <dd className="font-bold text-[#a24a1a] mt-0.5">{puppy.where}</dd>
                </div>
              </dl>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={getPuppyInquiryLink(puppy.name, puppy.breed)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full justify-center text-sm py-3.5 shadow-md gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Ask about {puppy.name} on WhatsApp</span>
                </a>
                <a
                  href="#inquiry"
                  className="btn btn-ghost w-full justify-center text-sm py-3 bg-[#fffdf8]"
                >
                  Send an enquiry
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 2: What comes with Max */}
        <section className="bg-[#fff1d8] p-8 sm:p-12 rounded-3xl border border-[#2a170e]/15 space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-plush text-3xl text-[#a24a1a]">2</span>
            <span className="font-scrawl text-2xl text-[#a24a1a]">what comes with {puppy.name}</span>
          </div>

          <h2 className="font-plush text-2xl sm:text-3xl text-[#2a170e]">
            Every Teddy Pup comes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm font-bold text-[#2a170e]">
            <div className="p-4 rounded-2xl bg-white border border-[#2a170e]/10 flex items-center gap-3">
              <Check className="w-5 h-5 text-[#25D366] flex-shrink-0" /> Vaccinated
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#2a170e]/10 flex items-center gap-3">
              <Check className="w-5 h-5 text-[#25D366] flex-shrink-0" /> Dewormed
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#2a170e]/10 flex items-center gap-3">
              <Check className="w-5 h-5 text-[#25D366] flex-shrink-0" /> Verified health certificate from licensed vets
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#2a170e]/10 flex items-center gap-3">
              <Check className="w-5 h-5 text-[#25D366] flex-shrink-0" /> Thoroughly checked before joining your family
            </div>
          </div>
        </section>

        {/* Chapter 3: The way home (Import or Showroom process) */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-[#2a170e]/15 space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-plush text-3xl text-[#a24a1a]">3</span>
            <span className="font-scrawl text-2xl text-[#a24a1a]">the way home</span>
          </div>

          <h2 className="font-plush text-2xl sm:text-3xl text-[#2a170e]">
            {puppy.where === 'Imported for you' ? 'Coming home from abroad' : 'Showroom adoption process'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#fff1d8]/50 border border-[#2a170e]/10 space-y-2">
              <span className="font-plush text-2xl text-[#a24a1a]">1</span>
              <h3 className="font-plush text-lg text-[#2a170e]">Reserve your puppy</h3>
              <p className="text-xs text-[#2a170e]/75 font-medium leading-relaxed">Tell us which puppy has captured your heart.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#fff1d8]/50 border border-[#2a170e]/10 space-y-2">
              <span className="font-plush text-2xl text-[#a24a1a]">2</span>
              <h3 className="font-plush text-lg text-[#2a170e]">Personalized consultation</h3>
              <p className="text-xs text-[#2a170e]/75 font-medium leading-relaxed">We finalize details with you and share updates on your puppy's journey.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#fff1d8]/50 border border-[#2a170e]/10 space-y-2">
              <span className="font-plush text-2xl text-[#a24a1a]">3</span>
              <h3 className="font-plush text-lg text-[#2a170e]">Import and arrival</h3>
              <p className="text-xs text-[#2a170e]/75 font-medium leading-relaxed">We manage health checks, travel arrangements, and documentation.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#fff1d8]/50 border border-[#2a170e]/10 space-y-2">
              <span className="font-plush text-2xl text-[#a24a1a]">4</span>
              <h3 className="font-plush text-lg text-[#2a170e]">Welcome home</h3>
              <p className="text-xs text-[#2a170e]/75 font-medium leading-relaxed">We help your new puppy settle in and ensure a smooth transition into your home.</p>
            </div>
          </div>
        </section>

        {/* Chapter 4: Ask about Max (Inquiry Letter Form) */}
        <section id="inquiry" className="bg-[#fffdf8] p-8 sm:p-12 rounded-3xl border-2 border-[#2a170e]/15 shadow-sm space-y-6 scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="font-plush text-3xl text-[#a24a1a]">4</span>
            <span className="font-scrawl text-2xl text-[#a24a1a]">dear TeddyPups…</span>
          </div>

          <div>
            <h2 className="font-plush text-3xl text-[#2a170e]">
              Ask about {puppy.name}
            </h2>
            <p className="text-sm text-[#2a170e]/80 mt-1 font-medium">
              Leave your details and our team will get back to you promptly — or message us on WhatsApp for the quickest reply.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 bg-[#fff1d8] rounded-2xl text-center space-y-3">
              <h3 className="font-plush text-2xl text-[#2a170e]">Thank you!</h3>
              <p className="text-sm text-[#2a170e]/80">We have received your enquiry about {puppy.name}. Our team will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 max-w-2xl">
              <div>
                <label className="block text-xs font-bold uppercase text-[#2a170e]/70 mb-1">
                  Your name *
                </label>
                <input
                  type="text"
                  required
                  value={inquiryForm.name}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                  placeholder="e.g. Sarah Miller"
                  className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.name ? 'border-red-500' : 'border-[#2a170e]/20'} outline-none text-sm`}
                />
                {errors.name && <p className="text-xs text-red-500 font-bold mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#2a170e]/70 mb-1">
                    Phone or WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={inquiryForm.phone}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                    placeholder="With country code, e.g. +971 50 123 4567"
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.phone ? 'border-red-500' : 'border-[#2a170e]/20'} outline-none text-sm`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 font-bold mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#2a170e]/70 mb-1">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    value={inquiryForm.email}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                    placeholder="optional"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#2a170e]/20 outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#2a170e]/70 mb-1">
                  Your area (optional)
                </label>
                <input
                  type="text"
                  value={inquiryForm.area}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, area: e.target.value })}
                  placeholder="e.g. Dubai Marina"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#2a170e]/20 outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#2a170e]/70 mb-1">
                  Message (optional)
                </label>
                <textarea
                  rows={3}
                  value={inquiryForm.message}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#2a170e]/20 outline-none text-sm"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button type="submit" className="btn btn-primary py-3 px-8 text-sm">
                  Send enquiry
                </button>
                <a
                  href={getPuppyInquiryLink(puppy.name, puppy.breed)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp py-3 px-6 text-sm"
                >
                  WhatsApp us directly
                </a>
              </div>
            </form>
          )}
        </section>

        {/* Previous / Next Puppy Navigation matching reference */}
        <div className="pt-8 border-t border-[#2a170e]/15 flex items-center justify-between text-sm font-bold">
          <Link to={`/puppies/${prevPuppy.slug}`} className="flex items-center gap-2 hover:text-[#a24a1a] transition-colors">
            <ChevronLeft className="w-4 h-4" />
            <div>
              <span className="text-xs text-[#2a170e]/60 block font-normal">Previous pup</span>
              <span>{prevPuppy.name}</span>
            </div>
          </Link>
          <Link to={`/puppies/${nextPuppy.slug}`} className="flex items-center gap-2 text-right hover:text-[#a24a1a] transition-colors">
            <div>
              <span className="text-xs text-[#2a170e]/60 block font-normal">Next pup</span>
              <span>{nextPuppy.name}</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
