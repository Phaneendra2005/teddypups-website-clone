import React, { useState, useEffect } from 'react';
import { getWhatsAppLink, DISPLAY_PHONE, DISPLAY_EMAIL, DISPLAY_ADDRESS } from '../utils/whatsapp';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Enquiry about a puppy',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Visit & Contact — TeddyPups U.A.E.";
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please provide your message or inquiry';
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
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <p className="font-scrawl text-2xl text-[#a24a1a]">we'd love to meet you</p>
          <h1 className="font-plush text-4xl sm:text-6xl text-[#2a170e]">
            Get in touch with us
          </h1>
          <p className="text-base sm:text-lg text-[#2a170e]/80 font-medium">
            Have questions about our puppies or adoption process? Fill out the form, visit our Downtown Dubai showroom, or chat instantly via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-[#fff1d8]/40 p-8 sm:p-10 rounded-3xl border-2 border-[#2a170e]/10 shadow-sm">
            <h2 className="font-plush text-2xl text-[#2a170e] mb-6">
              Send an inquiry
            </h2>

            {submitted ? (
              <div className="p-8 bg-[#fffdf8] rounded-2xl border border-[#25D366] text-center space-y-4 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
                <h3 className="font-plush text-2xl text-[#2a170e]">Thank you for reaching out!</h3>
                <p className="text-sm text-[#2a170e]/75 font-medium max-w-md mx-auto">
                  We have received your message regarding <strong>{formData.subject}</strong>. A TeddyPups specialist will respond to {formData.email} shortly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'Enquiry about a puppy', message: '' });
                    }}
                    className="btn btn-ghost text-xs py-2 px-6"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2a170e]/70 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Miller"
                    className={`w-full px-4 py-3 rounded-2xl bg-[#fffdf8] border ${
                      errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-[#2a170e]/20 focus:border-[#2a170e]'
                    } outline-none text-sm text-[#2a170e] font-medium transition-all`}
                  />
                  {errors.name && <p className="text-xs text-red-500 font-bold mt-1">{errors.name}</p>}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2a170e]/70 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@example.com"
                      className={`w-full px-4 py-3 rounded-2xl bg-[#fffdf8] border ${
                        errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#2a170e]/20 focus:border-[#2a170e]'
                      } outline-none text-sm text-[#2a170e] font-medium transition-all`}
                    />
                    {errors.email && <p className="text-xs text-red-500 font-bold mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2a170e]/70 mb-1.5">
                      Phone Number (optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 000 0000"
                      className="w-full px-4 py-3 rounded-2xl bg-[#fffdf8] border border-[#2a170e]/20 focus:border-[#2a170e] outline-none text-sm text-[#2a170e] font-medium transition-all"
                    />
                  </div>
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2a170e]/70 mb-1.5">
                    Subject / Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#fffdf8] border border-[#2a170e]/20 focus:border-[#2a170e] outline-none text-sm text-[#2a170e] font-medium transition-all"
                  >
                    <option value="Enquiry about a puppy">Enquiry about an available puppy</option>
                    <option value="Showroom visit appointment">Book a private showroom appointment</option>
                    <option value="Import custom inquiry">Korean teacup breed import inquiry</option>
                    <option value="General question">General adoption question</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2a170e]/70 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the puppy breed you love or any questions you have..."
                    className={`w-full px-4 py-3 rounded-2xl bg-[#fffdf8] border ${
                      errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-[#2a170e]/20 focus:border-[#2a170e]'
                    } outline-none text-sm text-[#2a170e] font-medium transition-all`}
                  />
                  {errors.message && <p className="text-xs text-red-500 font-bold mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full justify-center py-3.5 text-base gap-2 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Send inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & Showroom Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#fffdf8] p-8 rounded-3xl border-2 border-[#2a170e]/10 shadow-sm space-y-6">
              <h3 className="font-plush text-2xl text-[#2a170e]">
                Downtown Dubai Showroom
              </h3>

              <div className="space-y-4 text-sm text-[#2a170e]/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#a24a1a] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#2a170e]">Address:</strong>
                    <span>{DISPLAY_ADDRESS}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#a24a1a] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#2a170e]">Phone & WhatsApp:</strong>
                    <a href={`tel:${DISPLAY_PHONE}`} className="hover:text-[#a24a1a]">{DISPLAY_PHONE}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#a24a1a] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#2a170e]">Email:</strong>
                    <a href={`mailto:${DISPLAY_EMAIL}`} className="hover:text-[#a24a1a]">{DISPLAY_EMAIL}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#a24a1a] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#2a170e]">Hours:</strong>
                    <span>Monday to Sunday: 10:00 AM – 9:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#2a170e]/10">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full justify-center text-sm py-3 gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Instant chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Showroom Map Card */}
            <div className="bg-[#fff1d8] rounded-3xl p-6 border border-[#2a170e]/10 overflow-hidden space-y-3">
              <h4 className="font-plush text-lg text-[#2a170e]">Location map</h4>
              <div className="w-full h-48 rounded-2xl overflow-hidden border border-[#2a170e]/15 shadow-inner">
                <iframe
                  title="TeddyPups Dubai Showroom Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14440.892429624536!2d55.2707828!3d25.197197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
