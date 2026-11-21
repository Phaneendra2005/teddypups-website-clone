import React, { useState, useEffect } from 'react';
import { getWhatsAppLink, DISPLAY_PHONE, DISPLAY_EMAIL, DISPLAY_ADDRESS } from '../utils/whatsapp';
import { availablePuppies } from '../data/puppies';
import { MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';
import PawIcon from '../components/common/PawIcon';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    puppyId: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Visit & contact | TeddyPups U.A.E.";
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please tell us your name';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 bg-[#fffdf8]">
      <div className="gutter">
        {/* Top Header */}
        <header className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="font-scrawl text-2xl text-[#a24a1a]">{DISPLAY_PHONE}</span>
          </div>
          <h1 className="font-plush text-4xl sm:text-6xl text-[#2a170e]">
            Get in touch with us
          </h1>
          <p className="text-base sm:text-lg text-[#2a170e]/80 font-medium max-w-2xl">
            Have questions about our puppies or adoption process? Fill out the form, and our team will get back to you promptly. Whether ready to adopt or just seeking info, we'd love to hear from you!
          </p>
        </header>

        {/* Main 2-column Grid */}
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-14 items-start">
          {/* Left Column: Direct Contact & Showroom */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <a
                href={getWhatsAppLink("Hello! I would like to get in touch with TeddyPups.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full sm:w-auto text-base py-3 px-8 shadow-sm flex items-center justify-center gap-2.5"
              >
                <span>WhatsApp {DISPLAY_PHONE}</span>
              </a>

              <dl className="mt-10 space-y-6">
                <div>
                  <dt className="font-scrawl text-2xl text-[#a24a1a]">call us</dt>
                  <dd className="mt-1 text-lg font-bold text-[#2a170e]">
                    <a href="tel:+971500000000" className="hover:text-[#a24a1a] transition-colors">
                      {DISPLAY_PHONE}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-scrawl text-2xl text-[#a24a1a]">email</dt>
                  <dd className="mt-1 text-lg font-bold text-[#2a170e] break-all">
                    <a href={`mailto:${DISPLAY_EMAIL}`} className="hover:text-[#a24a1a] transition-colors">
                      {DISPLAY_EMAIL}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Showroom Visit Box */}
            <section className="relative overflow-hidden rounded-3xl bg-[#fff1d8]/70 border-2 border-[#2a170e]/10 p-7 sm:p-8">
              {/* Skyline background doodle */}
              <svg
                viewBox="0 0 300 120"
                className="absolute -bottom-1 right-0 w-3/4 text-[#2a170e]/10 pointer-events-none"
                aria-hidden="true"
              >
                <path
                  d="M4 116h292M20 116V78h16v38M44 116V60h18v56M70 116V84h12v32M150 116V36l4-6v-14l3-4 3 4v14l4 6v80M118 116V70l12-8v54M174 116V64l14 8v44M200 116V82h18v34M226 116V56h14v60M248 116V88h22v28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="relative z-10 space-y-4">
                <h2 className="font-plush text-2xl sm:text-3xl text-[#2a170e] leading-tight">
                  Visit us in Downtown Dubai
                </h2>
                <p className="text-sm sm:text-base text-[#2a170e]/80 font-medium">
                  Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face.
                </p>

                <p className="flex items-center gap-2 font-bold text-sm text-[#2a170e]">
                  <MapPin className="w-4 h-4 text-[#a24a1a] flex-shrink-0" />
                  <span>{DISPLAY_ADDRESS}</span>
                </p>

                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Downtown+Dubai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#a24a1a] hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Letter Form */}
          <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1">
            <div className="relative rounded-3xl bg-[#fffdf8] border-2 border-[#2a170e]/15 p-7 sm:p-10 shadow-md">
              {/* Postage Stamp */}
              <div className="absolute top-6 right-6 w-12 h-14 bg-[#fff1d8] border-2 border-dashed border-[#2a170e]/30 rounded-lg flex items-center justify-center text-[#a24a1a] shadow-inner">
                <PawIcon className="w-6 h-6 fill-current" />
              </div>

              {submitted ? (
                <div className="py-12 px-4 text-center space-y-5 animate-in fade-in">
                  <CheckCircle2 className="w-16 h-16 text-[#25D366] mx-auto" />
                  <h3 className="font-plush text-3xl text-[#2a170e]">Your letter is on its way!</h3>
                  <p className="text-base text-[#2a170e]/80 max-w-md mx-auto font-medium">
                    Thank you, <strong>{formData.name}</strong>. Our puppy specialist will review your note and reach out to you on <strong>{formData.phone}</strong> or by email shortly.
                  </p>
                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', phone: '', email: '', area: '', puppyId: '', message: '' });
                      }}
                      className="btn btn-ghost text-xs py-2 px-6"
                    >
                      Write another letter
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Greeting */}
                  <p className="font-scrawl text-3xl text-[#a24a1a]">Dear TeddyPups,</p>

                  {/* Letter Line 1 */}
                  <p className="text-base sm:text-lg text-[#2a170e] font-medium leading-loose">
                    my name is{' '}
                    <span className="inline-block border-b-2 border-[#2a170e]/40 focus-within:border-[#2a170e] transition-colors mx-1">
                      <input
                        type="text"
                        aria-label="Your name (required)"
                        placeholder="your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-transparent border-none outline-none text-[#2a170e] font-bold px-1 py-0.5 w-36 sm:w-44 text-base"
                        required
                      />
                    </span>
                    {errors.name && <span className="block text-xs text-red-500 font-bold">{errors.name}</span>}
                    , and you can reach me on{' '}
                    <span className="inline-block border-b-2 border-[#2a170e]/40 focus-within:border-[#2a170e] transition-colors mx-1">
                      <input
                        type="tel"
                        aria-label="Phone or WhatsApp number with country code (required)"
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-transparent border-none outline-none text-[#2a170e] font-bold px-1 py-0.5 w-36 sm:w-44 text-base"
                        required
                      />
                    </span>
                    {errors.phone && <span className="block text-xs text-red-500 font-bold">{errors.phone}</span>}
                    or by email at{' '}
                    <span className="inline-block border-b-2 border-[#2a170e]/40 focus-within:border-[#2a170e] transition-colors mx-1">
                      <input
                        type="email"
                        aria-label="Email (optional)"
                        placeholder="email (optional)"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-transparent border-none outline-none text-[#2a170e] font-bold px-1 py-0.5 w-36 sm:w-48 text-base"
                      />
                    </span>
                    .
                  </p>

                  {/* Letter Line 2 */}
                  <p className="text-base sm:text-lg text-[#2a170e] font-medium leading-loose">
                    I live in{' '}
                    <span className="inline-block border-b-2 border-[#2a170e]/40 focus-within:border-[#2a170e] transition-colors mx-1">
                      <input
                        type="text"
                        aria-label="Your area (optional)"
                        placeholder="e.g. Dubai Marina"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        className="bg-transparent border-none outline-none text-[#2a170e] font-bold px-1 py-0.5 w-32 sm:w-40 text-base"
                      />
                    </span>
                    , and I'm curious about{' '}
                    <span className="inline-block border-b-2 border-[#2a170e]/40 focus-within:border-[#2a170e] transition-colors mx-1">
                      <select
                        aria-label="Puppy you're interested in (optional)"
                        value={formData.puppyId}
                        onChange={(e) => setFormData({ ...formData, puppyId: e.target.value })}
                        className="bg-transparent border-none outline-none text-[#a24a1a] font-bold px-1 py-0.5 text-base cursor-pointer"
                      >
                        <option value="">any puppy (not sure yet)</option>
                        {availablePuppies.map((p) => (
                          <option key={p.slug} value={p.slug}>
                            {p.name} ({p.breed}, {p.gender})
                          </option>
                        ))}
                      </select>
                    </span>
                    .
                  </p>

                  {/* Note / Textarea */}
                  <div className="pt-2">
                    <label htmlFor="contact-note" className="sr-only">
                      Your message (optional)
                    </label>
                    <textarea
                      id="contact-note"
                      rows={4}
                      placeholder="Anything else you'd like to tell us…"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 rounded-2xl bg-[#fff1d8]/40 border-2 border-[#2a170e]/15 outline-none focus:border-[#2a170e] text-sm text-[#2a170e] font-medium transition-all"
                    />
                  </div>

                  {/* Sign-off & Submit */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#2a170e]/10">
                    <p className="font-scrawl text-2xl text-[#a24a1a]">
                      with love, a future puppy parent
                    </p>
                    <button
                      type="submit"
                      className="btn btn-primary text-sm py-2.5 px-8 w-full sm:w-auto shadow-sm"
                    >
                      Post my letter
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
