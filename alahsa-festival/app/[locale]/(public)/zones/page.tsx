'use client';

import { use } from 'react';
import Link from 'next/link';

const translations = {
  ar: {
    title: 'المناطق الست',
    subtitle: '٣٠ يوماً من التراث والبطولات العالمية. كل منطقة لها هويتها الخاصة وتجمع بين الأصالة والحداثة.',
    zones: [
      { id: 'heritage-cuisine', emoji: '🍽️', title: 'المطبخ الأصيل', desc: '٥ أيام من الطبخ الأصيل، ورش عمل النخيل، وتجربة القهوة السعودية. تذوق أشهى الأطباق المحلية.', details: 'ورش عمل • تذوق • مطاعم' },
      { id: 'artisans', emoji: '🎨', title: 'الحرفيين', desc: '٥ أيام لعرض الحرف اليدوية، ورش العمل، وتجربة الصناعة المحلية. تفاعل مع حرفيي الأحساء.', details: 'حرف يدوية • ورش عمل • فنون' },
      { id: 'folk-music', emoji: '🎵', title: 'الموسيقى الشعبية', desc: '٥ أيام من الموسيقى الشعبية، الرقصات، وتجربة التمور الفاخرة. استمتع بالأمسيات التراثية.', details: 'موسيقى • رقصات • تمور' },
      { id: 'history', emoji: '🏛️', title: 'تاريخ الأحساء', desc: '٥ أيام لاستكشاف تراث الأحساء، المتاحف، والواقع الافتراضي. جولة في عمق التاريخ.', details: 'متاحف • واقع افتراضي • تراث' },
      { id: 'date-palm', emoji: '🌴', title: 'النخلة والتمور', desc: '٥ أيام للاحتفاء بالنخلة، أنواع التمور، والفوائد الصحية. اكتشف عالم التمور.', details: 'أنواع التمور • زراعة • صحة' },
      { id: 'fan-zone', emoji: '🎮', title: 'منطقة المشجعين', desc: '٥ أيام من الألعاب الإلكترونية، كرة القدم، والتسوق الحديث. حماس الألعاب وبطولة العالم.', details: 'ألعاب إلكترونية • كرة قدم • تسوق' }
    ],
    back: '← العودة للرئيسية',
    explore: 'استكشف المنطقة'
  },
  en: {
    title: '6 Experience Zones',
    subtitle: '30 days of heritage meets world championships. Each zone has its own identity fusing tradition with modern esports.',
    zones: [
      { id: 'heritage-cuisine', emoji: '🍽️', title: 'Heritage Cuisine', desc: '5 days of authentic cuisine, palm workshops, and Saudi coffee experience. Taste local delicacies.', details: 'Workshops • Tasting • Dining' },
      { id: 'artisans', emoji: '🎨', title: 'Artisans & Crafts', desc: '5 days of handicrafts, workshops, and local manufacturing experience. Interact with local artisans.', details: 'Handicrafts • Workshops • Arts' },
      { id: 'folk-music', emoji: '🎵', title: 'Folk Music & Dates', desc: '5 days of folk music, dances, and premium date experience. Enjoy traditional evenings.', details: 'Music • Dances • Dates' },
      { id: 'history', emoji: '🏛️', title: 'History of Al-Ahsa', desc: '5 days exploring Al-Ahsa heritage, museums, and VR experiences. A journey into deep history.', details: 'Museums • VR • Heritage' },
      { id: 'date-palm', emoji: '🌴', title: 'Date Palm & Dates', desc: '5 days celebrating date palms, date varieties, and health benefits. Discover the world of dates.', details: 'Varieties • Farming • Health' },
      { id: 'fan-zone', emoji: '🎮', title: 'Fan Zone & Modern Al-Ahsa', desc: '5 days of esports, football, and modern shopping. The excitement of games and the World Cup.', details: 'Esports • Football • Shopping' }
    ],
    back: '← Back to Home',
    explore: 'Explore Zone'
  }
};

export default function ZonesPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const lang = resolvedParams.locale as 'ar' | 'en';
  const t = translations[lang];
  const isAr = lang === 'ar';

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2C2416]" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E0D4] px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href={`/${lang}`} className="font-bold text-xl text-[#1B4D3E]">
            {isAr ? 'نبض الأحساء' : 'Pulse of Al-Ahsa'}
          </Link>
          <div className="hidden md:flex gap-6 text-sm font-bold text-[#2C2416]">
            <Link href={`/${lang}/zones`} className="text-[#1B4D3E]">{isAr ? 'المناطق' : 'Zones'}</Link>
            <Link href={`/${lang}/schedule`} className="hover:text-[#1B4D3E] transition">{isAr ? 'الجدول' : 'Schedule'}</Link>
            <Link href={`/${lang}/sponsors`} className="hover:text-[#1B4D3E] transition">{isAr ? 'الرعاة' : 'Sponsors'}</Link>
          </div>
          <Link 
            href={`/${lang}/register`}
            className="bg-[#1B4D3E] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#143A2E] transition"
          >
            {isAr ? 'سجل الآن' : 'Register'}
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-[#1B4D3E] mb-6">{t.title}</h1>
        <p className="text-lg text-[#5A4A2A] max-w-3xl mx-auto">{t.subtitle}</p>
      </section>

      {/* Zones Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.zones.map((zone, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#D4AF37] transition group flex flex-col">
              <div className="text-5xl mb-6 group-hover:scale-110 transition transform">{zone.emoji}</div>
              <h3 className="text-2xl font-bold text-[#1B4D3E] mb-3">{zone.title}</h3>
              <p className="text-[#5A4A2A] mb-6 flex-grow">{zone.desc}</p>
              <div className="mb-6">
                <span className="text-xs font-bold text-[#D4AF37] bg-[#FAF8F5] px-3 py-1 rounded-full">{zone.details}</span>
              </div>
              <Link 
                href={`/${lang}/zones/${zone.id}`}
                className="inline-flex items-center justify-center text-[#1B4D3E] font-bold hover:text-[#D4AF37] transition"
              >
                {t.explore} {isAr ? '←' : '→'}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#1B4D3E] text-white text-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
          <div className="font-bold text-xl">نبض الأحساء</div>
          <span className="hidden md:inline text-[#D4AF37]">|</span>
          <div className="text-sm text-[#E8E0D4]">
            {isAr ? 'الموقع بواسطة' : 'Website by'} <a href="https://nexaro.tech" target="_blank" className="text-[#D4AF37] font-bold hover:underline">Nexaro.tech</a>
            <span className="mx-2">|</span>
            {isAr ? 'الفعالية بواسطة' : 'Event by'} <span className="font-bold">The Vicious Esports</span>
          </div>
        </div>
        <p className="text-xs text-[#A89B8A]">
          © 2026 {isAr ? 'نبض الأحساء. جميع الحقوق محفوظة.' : 'Pulse of Al-Ahsa. All rights reserved.'}
        </p>
      </footer>
    </main>
  );
}
