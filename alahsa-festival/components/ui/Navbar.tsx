'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ locale, isAr }: { locale: string; isAr: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: isAr ? 'المناطق' : 'Zones', href: `/${locale}/zones` },
    { name: isAr ? 'الجدول' : 'Schedule', href: `/${locale}/schedule` },
    { name: isAr ? 'الرعاة' : 'Sponsors', href: `/${locale}/sponsors` },
    { name: isAr ? 'مغامرة الكنز' : 'Treasure Hunt', href: `/${locale}/treasure-hunt` },
    { name: isAr ? 'اكتشف الأحساء' : 'Discover Al-Ahsa', href: `/${locale}/al-ahsa` },
  ];

  const toggleLanguage = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    window.location.href = `/${newLocale}`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo + Brand */}
          <Link href={`/${locale}`} className="flex items-center gap-2 shrink-0">
            {/* Animated Logo — outer pulse + inner heartbeat draw */}
            <motion.div
              className="shrink-0"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="navTrunk" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1B4D3E"/>
                    <stop offset="100%" stopColor="#0C2218"/>
                  </linearGradient>
                </defs>
                {/* Trunk */}
                <rect x="46" y="52" width="8" height="24" rx="2" fill="url(#navTrunk)"/>
                {/* Center frond */}
                <path d="M50 52 C49 43 48 33 50 22 C52 33 51 43 50 52" fill="#1B4D3E"/>
                {/* Upper-left frond */}
                <path d="M50 49 C43 41 34 32 25 27 C34 35 43 43 50 49" fill="#1B4D3E" opacity="0.9"/>
                {/* Lower-left frond */}
                <path d="M50 51 C40 48 28 46 18 48 C28 47 40 50 50 51" fill="#1B4D3E" opacity="0.7"/>
                {/* Upper-right frond */}
                <path d="M50 49 C57 41 66 32 75 27 C66 35 57 43 50 49" fill="#1B4D3E" opacity="0.9"/>
                {/* Lower-right frond */}
                <path d="M50 51 C60 48 72 46 82 48 C72 47 60 50 50 51" fill="#1B4D3E" opacity="0.7"/>
                {/* Date dots */}
                <circle cx="38" cy="36" r="2.5" fill="#D4AF37"/>
                <circle cx="62" cy="36" r="2.5" fill="#D4AF37"/>
                {/* Heartbeat — draws then fades, loops */}
                <motion.path
                  d="M8 50 L24 50 L30 37 L40 63 L50 50 L54 50 L60 27 L66 73 L72 50 L92 50"
                  stroke="#D4AF37"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.45, 0.6, 1], repeatDelay: 0.8 }}
                />
              </svg>
            </motion.div>
            <span className="font-bold text-lg text-[#1B4D3E] hidden sm:block">
              {isAr ? 'نبض الأحساء' : 'Pulse of Al-Ahsa'}
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-[#5A4A2A] hover:text-[#1B4D3E] font-medium transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side: Language Toggle + CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="bg-[#1B4D3E] text-white px-3 py-1 rounded-full text-xs font-bold hover:bg-[#143A2E] transition"
            >
              {locale === 'ar' ? 'EN' : 'ض'}
            </button>

            {/* Register Button */}
            <Link 
              href={`/${locale}/register`}
              className="hidden md:inline-block bg-[#D4AF37] text-[#1a1a2e] px-5 py-2 rounded-full text-sm font-bold hover:bg-[#B8941F] transition"
            >
              {isAr ? 'سجل الآن' : 'Register'}
            </Link>
            
            {/* Mobile Hamburger */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#1B4D3E] hover:bg-[#E8E0D4] rounded-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#FAF8F5] border-b border-[#E8E0D4] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              {links.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-[#5A4A2A] hover:text-[#1B4D3E]"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href={`/${locale}/register`}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#D4AF37] text-[#1a1a2e] py-3 rounded-xl font-bold hover:bg-[#B8941F] transition"
              >
                {isAr ? 'سجل الآن' : 'Register'}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}