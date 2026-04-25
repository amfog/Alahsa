'use client';

import Link from 'next/link';
import { FadeUp, Stagger, StaggerItem, HoverLift } from '@/components/ui/Animations';
import Navbar from '@/components/ui/Navbar';
import PulseLogo from '@/components/ui/PulseLogo';
import { motion } from 'framer-motion';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2C2416] overflow-x-hidden font-sans" dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* 1. New Responsive Navbar */}
      <Navbar locale={locale} isAr={isAr} />

      {/* 2. Hero Section with Animated Logo */}
      <section className="relative py-16 md:py-24 px-6 overflow-hidden">
        <FadeUp>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-block mb-8">
              <PulseLogo size={140} />
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-[#1B4D3E] mb-6 leading-tight tracking-tight">
              {isAr ? 'نبض الأحساء' : 'Pulse of Al-Ahsa'}
            </h1>
            <p className="text-xl md:text-3xl font-bold text-[#D4AF37] mb-6">
              {isAr ? 'من التراث إلى البطولات العالمية' : 'From Heritage to World Championships'}
            </p>
            <p className="text-base md:text-lg text-[#5A4A2A] mb-10 max-w-2xl mx-auto leading-relaxed">
              {isAr 
                ? '٣٠ يوماً من المهرجانات في الأحساء، المملكة العربية السعودية، تجمع بين تراث اليونسكو وثقافة النخيل والتجارة وكأس العالم للألعاب الإلكترونية.'
                : 'A 30-day festival in Al-Ahsa, Saudi Arabia, fusing UNESCO heritage, date palm culture, commerce, and the World Cup for Electronic Games.'}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link 
                href={`/${locale}/zones`}
                className="bg-[#D4AF37] text-[#1a1a2e] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg active:scale-95"
              >
                {isAr ? 'استكشف المناطق' : 'Explore Zones'}
              </Link>
              <Link 
                href={`/${locale}/register`}
                className="bg-white border-2 border-[#1B4D3E] text-[#1B4D3E] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1B4D3E] hover:text-white transition active:scale-95"
              >
                {isAr ? 'احصل على الكارت' : 'Get Pulse Card'}
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* 3. TREASURE HUNT Section with Animations */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#1B4D3E] to-[#143A2E] text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-10 left-10 w-20 h-20 bg-[#D4AF37] rounded-full blur-3xl opacity-20"
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-32 h-32 bg-[#00F5FF] rounded-full blur-3xl opacity-20"
          animate={{ scale: [1.5, 1, 1.5], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#D4AF37] rounded-full blur-2xl opacity-10"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
          <FadeUp>
            <div>
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
            </div>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <motion.div 
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl"
              whileHover={{ rotate: 1, scale: 1.02 }}
              transition={{ duration: 0.3 }}
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
                    className="bg-white/10 p-2 rounded-lg border border-white/10"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(212, 175, 55, 0.3)' }}
                  >
                    Zone {i + 1}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </FadeUp>
        </div>
      </section>

      {/* 4. Stats Section */}
      <Stagger className="py-16 bg-[#1B4D3E] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-6">
          {[
            { val: '١٥K+', label: isAr ? 'زائر متوقع' : 'Expected Visitors' },
            { val: '٦', label: isAr ? 'مناطق تجربة' : 'Experience Zones' },
            { val: '٣٠', label: isAr ? 'يوماً من الفعاليات' : 'Days of Events' },
            { val: '٢', label: isAr ? 'بطولة عالمية' : 'World Cups' },
          ].map((stat, i) => (
            <StaggerItem key={i}>
              <HoverLift className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="text-3xl md:text-4xl font-black text-[#D4AF37] mb-2">{stat.val}</div>
                <div className="text-sm md:text-base opacity-80">{stat.label}</div>
              </HoverLift>
            </StaggerItem>
          ))}
        </div>
      </Stagger>

      {/* 5. SPONSORSHIP Section (From PDF) */}
      <section className="py-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#1B4D3E] mb-4">{isAr ? 'فرص الرعاية والشراكة' : 'Sponsorship & Partnership'}</h2>
              <p className="text-lg text-[#5A4A2A] max-w-2xl mx-auto">
                {isAr 
                  ? 'انضم إلى أكبر منصة تنشيط اقتصادي في الأحساء. باقات مخصصة للعلامات المحلية والعالمية.'
                  : 'Join Al-Ahsa\'s biggest economic activation platform. Custom packages for local and global brands.'}
              </p>
            </div>
          </FadeUp>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: isAr ? 'بلاتينيوم' : 'Platinum', 
                price: isAr ? 'حصرية' : 'Exclusive',
                desc: isAr ? 'تسمية المهرجان' : 'Festival Naming',
                color: 'bg-[#1B4D3E] text-white',
                features: [
                  isAr ? 'تسمية المهرجان بالكامل' : 'Full festival naming',
                  isAr ? '٢ بوث مميز' : '2 premium booths',
                  isAr ? 'تسمية المسرح الرئيسي' : 'Main stage naming',
                ]
              },
              { 
                name: isAr ? 'ذهبي' : 'Gold', 
                price: isAr ? 'مخصص' : 'Custom',
                desc: isAr ? 'ملكية المنطقة' : 'Zone Ownership',
                color: 'bg-[#D4AF37] text-[#1a1a2e]',
                features: [
                  isAr ? 'تسمية منطقة كاملة' : 'Full zone naming',
                  isAr ? 'بوث كبير' : '1 large booth',
                  isAr ? '٣ منشورات أسبوعياً' : '3 posts/week',
                ]
              },
              { 
                name: isAr ? 'فضي' : 'Silver', 
                price: isAr ? '١٠K+ ر.س' : '10K+ SAR',
                desc: isAr ? 'علامة النشاط' : 'Activation Brand',
                color: 'bg-gray-200 text-[#5A4A2A]',
                features: [
                  isAr ? 'علامة على نشاط' : 'Brand on activity',
                  isAr ? 'بوث قياسي' : '1 standard booth',
                  isAr ? 'منشوران أسبوعياً' : '2 posts/week',
                ]
              },
              { 
                name: isAr ? 'شريك محلي' : 'Local Partner', 
                price: isAr ? '٥K+ ر.س' : '5K+ SAR',
                desc: isAr ? 'تركيز على التحويل' : 'Conversion Focus',
                color: 'bg-[#F4E4C1] text-[#5A4A2A]',
                features: [
                  isAr ? 'بوث في السوق' : '1 marketplace booth',
                  isAr ? 'مشاركة في الخصم' : 'Flash sale participation',
                  isAr ? 'نظام QR' : 'QR lead capture',
                ]
              },
            ].map((tier, i) => (
              <StaggerItem key={i}>
                <HoverLift className={`${tier.color} p-6 rounded-xl shadow-lg text-center h-full flex flex-col`}>
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-2xl font-black text-[#D4AF37] mb-2">{tier.price}</p>
                  <p className="text-sm opacity-90 mb-4">{tier.desc}</p>
                  <ul className="text-sm space-y-2 mb-6 flex-grow text-left">
                    {tier.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <span className="text-[#D4AF37]">✓</span>
                        <span className="opacity-90">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/${locale}/sponsors`} className="text-sm font-bold underline hover:opacity-80 mt-auto">
                    {isAr ? 'المزيد' : 'Details'}
                  </Link>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 6. Zones Preview */}
      <section className="py-16 md:py-24 px-6 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#1B4D3E] mb-4">{isAr ? 'المناطق الست' : '6 Experience Zones'}</h2>
            </div>
          </FadeUp>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '🍽️', ar: 'المطبخ الأصيل', en: 'Heritage Cuisine' },
              { emoji: '🎨', ar: 'الحرفيين', en: 'Artisans' },
              { emoji: '🎵', ar: 'الموسيقى', en: 'Folk Music' },
              { emoji: '🏛️', ar: 'التاريخ', en: 'History' },
              { emoji: '🌴', ar: 'النخلة والتمور', en: 'Date Palm' },
              { emoji: '🎮', ar: 'المشجعين', en: 'Fan Zone' },
            ].map((zone, i) => (
              <StaggerItem key={i}>
                <HoverLift className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#D4AF37] transition-all group cursor-pointer">
                  <div className="text-4xl md:text-5xl mb-4 md:mb-6 group-hover:scale-110 transition-transform">{zone.emoji}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1B4D3E] mb-3">{isAr ? zone.ar : zone.en}</h3>
                  <Link 
                    href={`/${locale}/zones/${['heritage-cuisine', 'artisans', 'folk-music', 'history', 'date-palm', 'fan-zone'][i]}`}
                    className="text-[#D4AF37] font-bold hover:underline inline-flex items-center gap-2 text-sm md:text-base"
                  >
                    {isAr ? 'اكتشف المزيد' : 'Explore'} <span className="transition-transform group-hover:translate-x-1">{isAr ? '←' : '→'}</span>
                  </Link>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#1B4D3E] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <FadeUp>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
              <div className="font-bold text-xl">نبض الأحساء</div>
              <span className="hidden md:inline text-[#D4AF37]">|</span>
              <div className="text-sm text-[#E8E0D4]">
                {isAr ? 'الموقع بواسطة' : 'Website by'} <a href="https://project-jelc4.vercel.app" target="_blank" className="text-[#D4AF37] font-bold hover:underline">Nexaro.tech</a>
                <span className="mx-2">|</span>
                {isAr ? 'الفعالية بواسطة' : 'Event by'} <span className="font-bold">The Vicious Esports</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </footer>
    </main>
  );
}