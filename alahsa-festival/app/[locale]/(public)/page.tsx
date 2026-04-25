'use client';

import { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import PulseLogo from '@/components/ui/PulseLogo';

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const isAr = locale === 'ar';

  return (
    <main className="min-h-screen bg-[#FAF8F5]" dir={isAr ? 'rtl' : 'ltr'}>
      <Navbar locale={locale} isAr={isAr} />

      {/* Hero Section */}
      <section className="py-20 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">

          {/* Animated Logo — entrance + continuous pulse via PulseLogo */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <PulseLogo size={120} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-[#1B4D3E] mb-6">
              {isAr ? 'نبض الأحساء' : 'Pulse of Al-Ahsa'}
            </h1>
            <p className="text-2xl text-[#D4AF37] mb-4">
              {isAr ? 'من التراث إلى البطولات العالمية' : 'From Heritage to World Championships'}
            </p>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              {isAr
                ? '٣٠ يوماً من المهرجانات في الأحساء، المملكة العربية السعودية'
                : '30 days of festival in Al-Ahsa, Saudi Arabia'}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={`/${locale}/register`}
              className="bg-[#D4AF37] text-[#1a1a2e] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition"
            >
              {isAr ? 'احصل على الكارت' : 'Get Card'}
            </Link>
            <Link
              href={`/${locale}/zones`}
              className="bg-[#1B4D3E] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#163d31] transition"
            >
              {isAr ? 'استكشف المناطق' : 'Explore Zones'}
            </Link>
            <Link
              href={`/${locale}/al-ahsa`}
              className="bg-white border-2 border-[#1B4D3E] text-[#1B4D3E] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1B4D3E] hover:text-white transition"
            >
              {isAr ? 'اكتشف الأحساء' : 'Discover Al-Ahsa'}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Treasure Hunt Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#1B4D3E] to-[#143A2E] text-white relative overflow-hidden">

        {/* Floating background orbs — GPU-accelerated via willChange */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-[#D4AF37] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ willChange: 'transform' }}
          animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 bg-[#00F5FF] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ willChange: 'transform' }}
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-14 h-14 bg-[#D4AF37] rounded-full blur-2xl opacity-10 pointer-events-none"
          style={{ willChange: 'transform' }}
          animate={{ x: [0, 18, -12, 0], y: [0, -22, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">

          {/* Left: Text content — slides in from outside */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block bg-[#D4AF37] text-[#1a1a2e] px-3 py-1 rounded-full text-xs font-bold mb-4">
              {isAr ? '🧩 للأطفال والعائلات' : '🧩 For Families & Kids'}
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              {isAr ? 'مغامرة الكنز' : 'Treasure Hunt Adventure'}
            </h2>
            <p className="text-[#E8E0D4] mb-6 text-lg">
              {isAr
                ? 'انطلق في رحلة ممتعة عبر المناطق الست! اجمع الأختام، حل الألغاز التراثية، واكسب جوائز حصرية عند صندوق الكنز.'
                : 'Embark on a fun journey through the 6 zones! Collect stamps, solve heritage riddles, and win exclusive prizes at the Treasure Chest.'}
            </p>
            <Link
              href={`/${locale}/treasure-hunt`}
              className="inline-flex items-center gap-2 bg-white text-[#1B4D3E] px-6 py-3 rounded-xl font-bold hover:bg-[#F4E4C1] transition"
            >
              {isAr ? 'ابدأ المغامرة ←' : 'Start Adventure →'}
            </Link>
          </motion.div>

          {/* Right: Map card — slides in + hover tilt */}
          <motion.div
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl"
            initial={{ opacity: 0, x: isAr ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 1, scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="flex items-center gap-4 mb-4 border-b border-white/20 pb-4">
              <div className="text-4xl">🗺️</div>
              <div>
                <div className="font-bold text-lg">{isAr ? 'خريطة المغامرة' : 'Adventure Map'}</div>
                <div className="text-sm text-[#D4AF37]">{isAr ? '٦ مناطق · ١٠ أختام' : '6 Zones · 10 Stamps'}</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-white/10 p-2 rounded-lg border border-white/10 cursor-pointer select-none"
                  whileHover={{
                    backgroundColor: 'rgba(212, 175, 55, 0.25)',
                    borderColor: 'rgba(212, 175, 55, 0.6)',
                    scale: 1.07,
                    transition: { duration: 0.15 },
                  }}
                >
                  {isAr ? `منطقة ${i + 1}` : `Zone ${i + 1}`}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1B4D3E] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          {[
            { value: '٢', label: isAr ? 'بطولة عالمية' : 'World Cups' },
            { value: '٣٠', label: isAr ? 'يوماً من الفعاليات' : 'Days of Events' },
            { value: '٦', label: isAr ? 'مناطق تجربة' : 'Experience Zones' },
            { value: '+١٥٠K', label: isAr ? 'زائر متوقع' : 'Expected Visitors' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">{stat.value}</div>
              <div className="text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer locale={locale} isAr={isAr} />
    </main>
  );
}
