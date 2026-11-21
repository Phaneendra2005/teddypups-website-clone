import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../utils/whatsapp';

export default function WhatsAppButton({ 
  className = "", 
  text = "WhatsApp us", 
  message = "Hi Insta Biz Web, I'd like to discuss a project.",
  iconOnly = false 
}) {
  return (
    <a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-whatsapp gap-2 ${className}`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      {!iconOnly && <span>{text}</span>}
    </a>
  );
}
