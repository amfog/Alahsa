'use client';

import { use } from 'react';
import Link from 'next/link';
import { FadeUp, Stagger, StaggerItem, HoverLift } from '@/components/ui/Animations';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const translations = {
  ar: {
    title: 'مغامرة الكنز: رحلة الأطفال في الأحساء',
    subtitle: 'لعبة تفاعلية تجمع بين التراث والثورة الرقمية لاكتشاف الأحساء. مصممة خصيصاً للأطفال من ٦ إلى ١٢ سنة.',
    steps: [
      { num: '١', title: 'استلم الخريطة', desc: 'احصل على نسختك الورقية أو الرقمية عند الدخول. تحوي ٦ ألغاز تربط التراث بالألعاب الإلكترونية.' },
      { num: '٢', title: 'ابحث عن الأختام', desc: 'تجول في المناطق الست وامسح رموز QR في المحطات الأربع. كل منطقة تخفي لغزاً ثقافياً أو رياضياً.' },
      { num: '٣', title: 'اكشف الصندوق', desc: 'أكمل ١٠ أختام + صندوق الكنز = جائزة فورية! صور تذكارية، تذاكر عروض، أو وشاح فريقك المفضل.' }
    ],
    zones: 'المناطق الست للبحث',
    zoneList: ['🍽️ المطبخ الأصيل', '🎨 الحرفيين', '🎵 الموسيقى الشعبية', '🏛️ التاريخ', '🌴 النخلة والتمور', '🎮 منطقة المشجعين'],
    prizes: 'جوائز الكنز',
    prizeList: ['📸 جلسة تصوير عائلية احترافية', '🎫 تذاكر عروض المسرح الرئيسية', '🧣 وشاح الفريق المفضل', '🎮 قسائم ألعاب إلكترونية', '🎁 حقائب هدايا تراثية'],
    cta: 'حمّل خريطة الكنز الآن',
    register: 'سجل طفلك في الرحلة'
  },
  en: {
    title: 'Treasure Hunt: Kids Journey in Al-Ahsa',
    subtitle: 'An interactive game blending heritage and digital revolution to discover Al-Ahsa. Designed for ages 6-12.',
    steps: [
      { num: '1', title: 'Get the Map', desc: 'Receive your digital or paper map at entry. Contains 6 puzzles connecting heritage to esports.' },
      { num: '2', title: 'Find the Stamps', desc: 'Explore all 6 zones and scan QR codes at 4 partner stations. Each zone hides a cultural or sports riddle.' },
      { num: '3', title: 'Open the Chest', desc: 'Complete 10 stamps + Treasure Box = Instant Prize! Photo sessions, show tickets, or your favorite team scarf.' }
    ],
    zones: '6 Hunt Zones',
    zoneList: ['🍽️ Heritage Cuisine', '🎨 Artisans & Crafts', '🎵 Folk Music', '🏛️ History', '🌴 Date Palm', '🎮 Fan Zone'],
    prizes: 'Treasure Rewards',
    prizeList: ['📸 Professional Family Photo Session', '🎫 Main Stage Show Tickets', '🧣 Favorite Team Scarf', '🎮 Esports Vouchers', '🎁 Heritage Gift Bags'],
    cta: 'Download Treasure Map Now',
    register: 'Register Your Child'
  }
};

export default function TreasureHuntPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const lang = resolvedParams.locale as 'ar' | 'en';
  const t = translations[lang];
  const isAr = lang === 'ar';

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2C2416]" dir={isAr ? 'rtl' : 'ltr'}>
      <Navbar locale={lang} isAr={isAr} />

      {/* Hero */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-[#FAF8F5] to-[#F4E4C1]">
        <FadeUp>
          <div className="text-6xl mb-6">🗺️✨</div>
          <h1 className="text-4xl md:text-5xl font-black text-[#1B4D3E] mb-6">{t.title}</h1>
          <p className="text-lg text-[#5A4A2A] max-w-3xl mx-auto mb-10">{t.subtitle}</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-[#D4AF37] text-[#1a1a2e] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg">{t.cta}</button>
            <Link href={`/${lang}/register`} className="bg-white border-2 border-[#1B4D3E] text-[#1B4D3E] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1B4D3E] hover:text-white transition">{t.register}</Link>
          </div>
        </FadeUp>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Stagger className="grid md:grid-cols-3 gap-8">
            {t.steps.map((step, i) => (
              <StaggerItem key={i}>
                <HoverLift className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#E8E0D4] text-center">
                  <div className="w-16 h-16 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">{step.num}</div>
                  <h3 className="text-xl font-bold text-[#1B4D3E] mb-3">{step.title}</h3>
                  <p className="text-[#5A4A2A]">{step.desc}</p>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Zones & Prizes Grid */}
      <section className="py-20 px-6 bg-[#1B4D3E] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <FadeUp>
            <div>
              <h2 className="text-3xl font-bold text-[#D4AF37] mb-6">{t.zones}</h2>
              <div className="grid grid-cols-2 gap-4">
                {t.zoneList.map((zone, i) => (
                  <div key={i} className="bg-[#143A2E] p-4 rounded-xl border border-[#2E5C3A] flex items-center gap-3">
                    <span className="text-2xl">{zone.split(' ')[0]}</span>
                    <span className="font-medium">{zone.split(' ').slice(1).join(' ')}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div>
              <h2 className="text-3xl font-bold text-[#D4AF37] mb-6">{t.prizes}</h2>
              <div className="space-y-3">
                {t.prizeList.map((prize, i) => (
                  <div key={i} className="bg-[#143A2E] p-4 rounded-xl border border-[#2E5C3A] flex items-center gap-4">
                    <span className="text-[#D4AF37] text-xl"></span>
                    <span className="font-medium">{prize}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-[#F4E4C1]">
        <FadeUp>
          <h2 className="text-2xl font-bold text-[#1B4D3E] mb-6">{isAr ? 'جاهز للمغامرة؟' : 'Ready for the Adventure?'}</h2>
          <Link href={`/${lang}/register`} className="inline-block bg-[#1B4D3E] text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg">
            {t.register}
          </Link>
        </FadeUp>
      </section>

      <Footer locale={lang} isAr={isAr} />
    </main>
  );
}
