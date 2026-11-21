export const WHATSAPP_PHONE = '919898124987';
export const DISPLAY_PHONE = '+971 50 000 0000';
export const DISPLAY_EMAIL = 'info@instabizweb.com';
export const DISPLAY_ADDRESS = 'Downtown Dubai, United Arab Emirates';

export const getWhatsAppLink = (message = "Hi Insta Biz Web, I'd like to discuss a project.") => {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

export const getPuppyInquiryLink = (puppyName, breed) => {
  const msg = `Hi TeddyPups, I'm interested in ${puppyName || 'a puppy'}${breed ? ` (${breed})` : ''}. Is it currently available for showroom visit or adoption?`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
};
