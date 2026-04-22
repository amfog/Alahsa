'use client';

import { useState } from 'react';
import Link from 'next/link';

const translations = {
  ar: {
    hero: {
      title: '🎉 مهرجان الأحساء للتسوق',
      dates: '10 يونيو — 10 يوليو 2026',
      subtitle: '4 أسابيع • 5 أيام/أسبوع • الخميس إلى الاثنين • 4 م – 11 م',
      tagline: 'منصة تنشيط اقتصادي تجمع العائلات، الشباب، والتجار في قلب الأحساء',
      ctaPrimary: 'احجز بوث الآن',
      ctaSecondary: 'عرض الرعاة',
    },
    stats: {
      dailyVisitors: 'زائر يومياً',
      purchasingPower: 'قدرة شرائية يومية',
      experienceZones: 'مناطق تجربة',
      merchantBooths: 'بوث تجارية',
    },
    vision: {
      title: 'الرؤية الاستراتيجية',
      whyAlAhsa: 'لماذا الأحساء؟',
      whyAlAhsaDesc: 'مدينة تراثية يونيسكو • ثقافة عائلية • سوق صيفي غير مخدوم',
      whySummer: 'لماذا الصيف؟',
      whySummerDesc: 'المدارس مغلقة • العائلات متواجدة • وقت مكوث طويل 4-11 م',
      whyFamilies: 'لماذا العائلات؟',
      whyFamiliesDesc: 'العائلات تنفق أكثر • تبقى أطول • وتعود',
      whyShoppingGaming: 'تسوق + ألعاب',
      whyShoppingGamingDesc: 'الألعاب تجلب الشباب • الشباب يجلبون العائلات • العائلات تتسوق',
    },
    footer: {
      dates: '📅 10 يونيو — 10 يوليو 2026 • 📍 الأحساء • ⏰ 4 م – 11 م',
      note: 'عرض تنفيذي • نسخة أولية',
    },
    common: {
      langSwitch: 'English',
      registerNow: 'سجل الآن',
    },
  },
  en: {
    hero: {
      title: '🎉 Al Ahsa Shopping Festival',
      dates: 'June 10 — July 10, 2026',
      subtitle: '4 Weeks • 5 Days/Week • Thu–Mon • 4 PM – 11 PM',
      tagline: 'An economic activation platform bringing families, youth, and merchants to the heart of Al Ahsa',
      ctaPrimary: 'Book a Booth Now',
      ctaSecondary: 'Sponsor Deck',
    },
    stats: {
      dailyVisitors: 'Daily Visitors',
      purchasingPower: 'Daily Purchasing Power',
      experienceZones: 'Experience Zones',
      merchantBooths: 'Merchant Booths',
    },
    vision: {
      title: 'Strategic Vision',
      whyAlAhsa: 'Why Al Ahsa?',
      whyAlAhsaDesc: 'UNESCO heritage city • Family-first culture • Underserved summer market',
      whySummer: 'Why Summer?',
      whySummerDesc: 'Schools closed • Families home • Long dwell time 4-11 PM',
      whyFamilies: 'Why Families?',
      whyFamiliesDesc: 'Families spend more • Stay longer • Return again',
      whyShoppingGaming: 'Shopping + Gaming',
      whyShoppingGamingDesc: 'Gaming brings youth • Youth bring families • Families shop',
    },
    footer: {
      dates: '📅 June 10 – July 10, 2026 • 📍 Al Ahsa • ⏰ 4 PM – 11 PM',
      note: 'Executive Proposal • Draft Version',
    },
    common: {
      langSwitch: 'عربي',
      registerNow: 'Register Now',
    },
  },
};

export default function HomePage({ params }: { params: { locale: string } }) {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const t = translations[lang];
  const isAr = lang === 'ar';

  const toggleLang = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
  };

  return (
    <main className="min-h-screen" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Language Toggle */}
      <div className={`fixed top-4 ${isAr ? 'left-4' : 'right-4'} z-50`}>
        <button onClick={toggleLang} className="bg-[#D4AF37] text-[#1a1a2e] px-4 py-2 rounded-full font-bold shadow-md hover:scale-105 transition">
          {t.common.langSwitch}
        </button>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white shadow-sm py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-black text-[#2E5C3A]">🌴 {t.hero.title.replace('🎉 ', '')}</div>
          <button className="bg-[#D4AF37] text-[#1a1a2e] px-5 py-2 rounded-full font-bold hover:shadow-lg transition">
            {t.common.registerNow}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2E5C3A] to-[#1a4a2e] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t.hero.title}</h1>
          <div className="text-2xl text-[#D4AF37] font-bold mb-2">{t.hero.dates}</div>
          <p className="text-lg opacity-90 mb-1">{t.hero.subtitle}</p>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-95">{t.hero.tagline}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-[#D4AF37] text-[#1a1a2e] px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg">
              {t.hero.ctaPrimary}
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-[#2E5C3A] transition">
              {t.hero.ctaSecondary}
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-[#f8f5f0] rounded-xl border-t-4 border-[#00E5FF]">
            <div className="text-3xl font-black text-[#2E5C3A]">3K–5K</div>
            <div className="text-sm text-gray-600 mt-1">{t.stats.dailyVisitors}</div>
          </div>
          <div className="text-center p-6 bg-[#f8f5f0] rounded-xl border-t-4 border-[#00E5FF]">
            <div className="text-3xl font-black text-[#2E5C3A]">600K+ {isAr ? 'ر.س' : 'SAR'}</div>
            <div className="text-sm text-gray-600 mt-1">{t.stats.purchasingPower}</div>
          </div>
          <div className="text-center p-6 bg-[#f8f5f0] rounded-xl border-t-4 border-[#00E5FF]">
            <div className="text-3xl font-black text-[#2E5C3A]">6</div>
            <div className="text-sm text-gray-600 mt-1">{t.stats.experienceZones}</div>
          </div>
          <div className="text-center p-6 bg-[#f8f5f0] rounded-xl border-t-4 border-[#00E5FF]">
            <div className="text-3xl font-black text-[#2E5C3A]">50+</div>
            <div className="text-sm text-gray-600 mt-1">{t.stats.merchantBooths}</div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#2E5C3A] text-center mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#D4AF37] after:mx-auto after:mt-2">
            {t.vision.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏛️', title: t.vision.whyAlAhsa, desc: t.vision.whyAlAhsaDesc },
              { icon: '☀️', title: t.vision.whySummer, desc: t.vision.whySummerDesc },
              { icon: '👨‍👩‍', title: t.vision.whyFamilies, desc: t.vision.whyFamiliesDesc },
              { icon: '🎮️', title: t.vision.whyShoppingGaming, desc: t.vision.whyShoppingGamingDesc }
            ].map((item, i) => (
              <div key={i} className="bg-[#f8f5f0] p-6 rounded-xl text-center hover:-translate-y-1 transition">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#2E5C3A] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-white py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-2xl font-black text-[#D4AF37] mb-4">🌴 {t.hero.title.replace('🎉 ', '')}</div>
          <p className="opacity-90 mb-6">{t.footer.dates}</p>
          <p className="opacity-70 text-sm">{t.footer.note}</p>
        </div>
      </footer>
    </main>
  );
}
