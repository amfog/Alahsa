'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useState } from 'react';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const isAr = locale === 'ar';
  const [lang, setLang] = useState(locale);

  const toggleLang = () => {
    const newLang = lang === 'ar' ? 'en' : 'ar';
    setLang(newLang);
    // In production, use next-intl routing: router.push(`/${newLang}`);
    window.location.href = `/${newLang}`;
  };

  return (
    <main className="min-h-screen">
      {/* Language Toggle */}
      <div className={`fixed top-4 ${isAr ? 'left-4' : 'right-4'} z-50`}>
        <button onClick={toggleLang} className="bg-[#D4AF37] text-[#1a1a2e] px-4 py-2 rounded-full font-bold shadow-md hover:scale-105 transition">
          {t('Common.langSwitch')}
        </button>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white shadow-sm py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-black text-[#2E5C3A]">🌴 {t('Hero.title').replace('🎉 ', '')}</div>
          <Link href={`/${lang}/business/apply`} className="bg-[#D4AF37] text-[#1a1a2e] px-5 py-2 rounded-full font-bold hover:shadow-lg transition">
            {t('Common.registerNow')}
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2E5C3A] to-[#1a4a2e] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t('Hero.title')}</h1>
          <div className="text-2xl text-[#D4AF37] font-bold mb-2">{t('Hero.dates')}</div>
          <p className="text-lg opacity-90 mb-1">{t('Hero.subtitle')}</p>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-95">{t('Hero.tagline')}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href={`/${lang}/business/apply`} className="bg-[#D4AF37] text-[#1a1a2e] px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg">
              {t('Hero.ctaPrimary')}
            </Link>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-[#2E5C3A] transition">
              {t('Hero.ctaSecondary')}
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-[#f8f5f0] rounded-xl border-t-4 border-[#00E5FF]">
            <div className="text-3xl font-black text-[#2E5C3A]">3K–5K</div>
            <div className="text-sm text-gray-600 mt-1">{t('Stats.dailyVisitors')}</div>
          </div>
          <div className="text-center p-6 bg-[#f8f5f0] rounded-xl border-t-4 border-[#00E5FF]">
            <div className="text-3xl font-black text-[#2E5C3A]">600K+ {isAr ? 'ر.س' : 'SAR'}</div>
            <div className="text-sm text-gray-600 mt-1">{t('Stats.purchasingPower')}</div>
          </div>
          <div className="text-center p-6 bg-[#f8f5f0] rounded-xl border-t-4 border-[#00E5FF]">
            <div className="text-3xl font-black text-[#2E5C3A]">6</div>
            <div className="text-sm text-gray-600 mt-1">{t('Stats.experienceZones')}</div>
          </div>
          <div className="text-center p-6 bg-[#f8f5f0] rounded-xl border-t-4 border-[#00E5FF]">
            <div className="text-3xl font-black text-[#2E5C3A]">50+</div>
            <div className="text-sm text-gray-600 mt-1">{t('Stats.merchantBooths')}</div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#2E5C3A] text-center mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#D4AF37] after:mx-auto after:mt-2">
            {t('Vision.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏛️', title: t('Vision.whyAlAhsa'), desc: t('Vision.whyAlAhsaDesc') },
              { icon: '☀️', title: t('Vision.whySummer'), desc: t('Vision.whySummerDesc') },
              { icon: '👨‍👩‍', title: t('Vision.whyFamilies'), desc: t('Vision.whyFamiliesDesc') },
              { icon: '🎮️', title: t('Vision.whyShoppingGaming'), desc: t('Vision.whyShoppingGamingDesc') }
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

      {/* Zones */}
      <section className="py-16 bg-[#f8f5f0]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#2E5C3A] text-center mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#D4AF37] after:mx-auto after:mt-2">
            {t('Zones.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🛍️', title: t('Zones.marketplace'), desc: t('Zones.marketplaceDesc') },
              { icon: '👨‍👩‍', title: t('Zones.family'), desc: t('Zones.familyDesc') },
              { icon: '🍽️', title: t('Zones.food'), desc: t('Zones.foodDesc') },
              { icon: '🎮', title: t('Zones.gaming'), desc: t('Zones.gamingDesc') },
              { icon: '🌴', title: t('Zones.heritage'), desc: t('Zones.heritageDesc') },
              { icon: '🎤', title: t('Zones.stage'), desc: t('Zones.stageDesc') }
            ].map((zone, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border-r-4 border-[#C49A6C] hover:shadow-lg transition">
                <div className="text-3xl mb-2">{zone.icon}</div>
                <h3 className="text-xl font-bold text-[#2E5C3A] mb-2">{zone.title}</h3>
                <p className="text-gray-600">{zone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#2E5C3A] text-center mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#D4AF37] after:mx-auto after:mt-2">
            {t('Sponsors.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f8f5f0] p-6 rounded-xl text-center border-3 border-[#D4AF37] shadow-md">
              <h3 className="text-xl font-bold text-[#2E5C3A] mb-2">{t('Sponsors.titleSponsor')}</h3>
              <div className="text-2xl font-black text-[#D4AF37] mb-4">{t('Sponsors.exclusive')}</div>
              <ul className="text-right text-sm text-gray-600 mb-6 space-y-2 list-none">
                <li>✅ {isAr ? 'تسمية المهرجان' : 'Festival naming rights'}</li>
                <li>✅ {isAr ? '2 بوثة مميزة' : '2 premium booths'}</li>
                <li>✅ {isAr ? 'تسمية المسرح الرئيسي' : 'Main stage naming'}</li>
              </ul>
              <Link href={`/${lang}/business/apply`} className="block w-full bg-[#D4AF37] text-[#1a1a2e] py-2 rounded-lg font-bold hover:scale-105 transition">
                {t('Sponsors.contact')}
              </Link>
            </div>
            <div className="bg-[#f8f5f0] p-6 rounded-xl text-center border-2 border-[#C49A6C]">
              <h3 className="text-xl font-bold text-[#2E5C3A] mb-2">{t('Sponsors.zoneSponsor')}</h3>
              <div className="text-2xl font-black text-[#D4AF37] mb-4">{t('Sponsors.custom')}</div>
              <ul className="text-right text-sm text-gray-600 mb-6 space-y-2 list-none">
                <li>✅ {isAr ? 'تسمية منطقة كاملة' : 'Full zone naming'}</li>
                <li>✅ {isAr ? 'بوثة كبيرة' : 'Large booth'}</li>
                <li>✅ {isAr ? '3 منشورات أسبوعية' : '3 social posts/week'}</li>
              </ul>
              <Link href={`/${lang}/business/apply`} className="block w-full bg-[#D4AF37] text-[#1a1a2e] py-2 rounded-lg font-bold hover:scale-105 transition">
                {t('Sponsors.contact')}
              </Link>
            </div>
            <div className="bg-[#f8f5f0] p-6 rounded-xl text-center border-2 border-[#C49A6C]">
              <h3 className="text-xl font-bold text-[#2E5C3A] mb-2">{t('Sponsors.localTrader')}</h3>
              <div className="text-2xl font-black text-[#D4AF37] mb-4">{t('Sponsors.from5k')}</div>
              <ul className="text-right text-sm text-gray-600 mb-6 space-y-2 list-none">
                <li>✅ {isAr ? 'بوثة في السوق' : 'Marketplace booth'}</li>
                <li>✅ {isAr ? 'مشاركة في العروض' : 'Flash sale participation'}</li>
                <li>✅ {isAr ? 'نظام مسح للعملاء' : 'QR customer capture'}</li>
              </ul>
              <Link href={`/${lang}/business/apply`} className="block w-full bg-[#D4AF37] text-[#1a1a2e] py-2 rounded-lg font-bold hover:scale-105 transition">
                {t('Sponsors.register')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-white py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-2xl font-black text-[#D4AF37] mb-4">🌴 {t('Hero.title').replace('🎉 ', '')}</div>
          <p className="opacity-90 mb-6">{t('Footer.dates')}</p>
          <p className="opacity-70 text-sm">{t('Footer.note')}</p>
        </div>
      </footer>
    </main>
  );
}
