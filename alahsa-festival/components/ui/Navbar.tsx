'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ locale, isAr }: { locale: string; isAr: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { name: isAr ? 'الأحساء' : 'Al-Ahsa', href: `/${locale}/al-ahsa` },
    { name: isAr ? 'المناطق' : 'Zones', href: `/${locale}/zones` },
    { name: isAr ? 'الجدول' : 'Schedule', href: `/${locale}/schedule` },
    { name: isAr ? 'الرعاة' : 'Sponsors', href: `/${locale}/sponsors` },
    { name: isAr ? 'مغامرة الكنز' : 'Treasure Hunt', href: `/${locale}/treasure-hunt` },
  ];

  const toggleLanguage = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo, Brand & Language Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#1B4D3E] rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
                {isAr ? 'ض' : 'P'}
              </div>
              <span className="font-bold text-xl text-[#1B4D3E] hidden sm:block">
                {isAr ? 'نبض الأحساء' : 'Pulse of Al-Ahsa'}
              </span>
            </Link>
            <button
              onClick={toggleLanguage}
              className="bg-[#1B4D3E] text-white px-3 py-1 rounded-full text-xs font-bold hover:bg-[#143A2E] transition"
            >
              {isAr ? 'EN' : 'ض'}
            </button>
          </div>

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

          {/* Desktop CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4">
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