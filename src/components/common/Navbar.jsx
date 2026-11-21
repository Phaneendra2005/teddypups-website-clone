import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PawIcon from './PawIcon';
import { getWhatsAppLink } from '../../utils/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Puppies', path: '/puppies' },
    { name: 'Happy families', path: '/happy-families' },
    { name: 'How it works', path: '/how-it-works' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Visit & contact', path: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#fffdf8]/95 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="gutter flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="https://puppy.instabizweb.com/brand/logo.png" 
              alt="TeddyPups Logo" 
              className="w-12 h-12 object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <span className="font-plush text-2xl tracking-tight text-[#2a170e]">
              TeddyPups
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main" className="hidden lg:flex items-center gap-1 bg-[#fffdf8]/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#2a170e]/10 shadow-sm">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`group relative flex items-center gap-1.5 px-4 py-2 rounded-full text-[0.95rem] font-bold transition-all duration-150 ${
                    isActive 
                      ? 'text-[#2a170e] bg-[#fbe3b4]/50' 
                      : 'text-[#2a170e]/80 hover:text-[#2a170e] hover:bg-[#fbe3b4]/30'
                  }`}
                >
                  <span>{link.name}</span>
                  <PawIcon 
                    className={`size-3.5 transition-all duration-150 ${
                      isActive 
                        ? 'opacity-100 text-[#a24a1a] scale-110' 
                        : 'opacity-0 -translate-y-1 group-hover:opacity-60 group-hover:translate-y-0 text-[#2a170e]'
                    }`} 
                  />
                </Link>
              );
            })}
          </nav>

          {/* Action Button & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp hidden sm:inline-flex text-sm py-2 px-5 shadow-sm"
            >
              WhatsApp us
            </a>

            <button 
              type="button" 
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex h-11 items-center gap-2 rounded-full border-2 border-[#2a170e] bg-[#fffdf8] px-4 text-[0.95rem] font-bold lg:hidden text-[#2a170e] shadow-sm hover:bg-[#fbe3b4]/30"
              aria-label="Open navigation menu"
            >
              <PawIcon className="size-4 text-[#a24a1a]" />
              Menu
            </button>
          </div>
        </div>

        {/* Decorative Scallop Hem SVG */}
        <div className="w-full h-3.5 overflow-hidden text-[#fbe3b4] fill-current">
          <svg className="w-full h-3.5" preserveAspectRatio="none" viewBox="0 0 1000 14">
            <defs>
              <pattern id="header-scallop" width="44" height="14" patternUnits="userSpaceOnUse">
                <path d="M0 0H44V2A22 11 0 0 1 0 2Z" fill="#fbe3b4" opacity="0.6"></path>
                <path d="M0 2A22 11 0 0 0 44 2" fill="none" stroke="#2a170e" strokeWidth="1.2" opacity="0.3"></path>
              </pattern>
            </defs>
            <rect width="100%" height="14" fill="url(#header-scallop)" />
          </svg>
        </div>
      </header>

      {/* Mobile Menu Fullscreen Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#fbe3b4] text-[#2a170e] flex flex-col justify-between p-6 sm:p-10 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <span className="font-scrawl text-2xl text-[#a24a1a]">where to, friend?</span>
            <button 
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="h-11 rounded-full bg-[#2a170e] px-6 font-bold text-[#fffdf8] hover:bg-[#422617]"
            >
              Close
            </button>
          </div>

          <nav className="my-auto py-8">
            <ul className="space-y-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-plush flex items-center justify-between text-4xl sm:text-5xl py-2 transition-transform ${
                        isActive ? 'text-[#a24a1a] translate-x-2' : 'hover:translate-x-2'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <PawIcon className="size-8 text-[#a24a1a]" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="space-y-4 pt-4 border-t border-[#2a170e]/15">
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp w-full justify-center text-lg py-3.5"
            >
              WhatsApp us
            </a>
            <p className="text-center font-bold text-sm tracking-wide text-[#2a170e]/80">
              Showroom: +971 50 000 0000
            </p>
          </div>
        </div>
      )}
    </>
  );
}
