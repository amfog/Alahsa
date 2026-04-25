'use client';

import { use } from 'react';
import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const translations = {
  ar: {
    title: 'الجدول الزمني والأنشطة',
    subtitle: '٣٠ يوماً من المهرجانات في الأحساء، تجمع بين تراث اليونسكو وثقافة النخيل والتجارة وكأس العالم للألعاب الإلكترونية.',
    timeline: {
      title: 'مناورة ٣٠ يوماً',
      desc: 'كل ٥ أيام، منطقة جديدة في موقع جديد.',
      weeks: [
        { days: '١-٥', title: 'المطبخ الأصيل', venue: 'الأحساء مول', emoji: '🍽️' },
        { days: '٦-١٠', title: 'الحرفيين', venue: 'الراشد مول', emoji: '🎨' },
        { days: '١١-١٥', title: 'الموسيقى الشعبية', venue: 'الجوهرة', emoji: '🎵' },
        { days: '١٦-٢٠', title: 'تاريخ الأحساء', venue: 'العقيل مول', emoji: '🏛️' },
        { days: '٢١-٢٥', title: 'النخلة والتمور', venue: 'الأحساء مول', emoji: '🌴' },
        { days: '٢٦-٣٠', title: 'منطقة المشجعين', venue: 'مدينة الملاهي/كرة القدم', emoji: '🎮' }
      ]
    },
    routine: {
      title: 'الروتين اليومي',
      activities: [
        { time: '٤:٠٠ م', name: 'افتتاح الأبواب', desc: 'استقبال الزوار وتوزيع جوازات نبض الأحساء.' },
        { time: '٥:٠٠ م', name: 'التراث والحرف', desc: 'ورش عمل النخيل وقصة الأحساء.' },
        { time: '٦:٠٠ م', name: 'تحدي الألعاب اليومي', desc: 'بطولة مصغرة ومسابقات شبابية.' },
        { time: '٧:٠٠ م', name: 'عرض المسرح العائلي', desc: 'مسرحيات ومسابقات تفاعلية للأطفال.' },
        { time: '٨:٠٠ م', name: 'ساعة الخصم (FLASH SALE)', desc: 'تخفيضات حصرية لمدة ٦٠ دقيقة في جميع البوثات!' },
        { time: '٩:٣٠ م', name: 'سحب الجوائز', desc: 'الإعلان عن الفائزين وعروض المساء.' }
      ]
    },
    events: {
      opening: 'حفل الافتتاح الكبير (١٠ يونيو)',
      closing: 'حفل الختام وجائزة نبض الأحساء الكبرى (١٠ يوليو)'
    },
    back: '← العودة للرئيسية',
    register: 'سجل الآن'
  },
  en: {
    title: 'Schedule & Activities',
    subtitle: '30 days of festival in Al-Ahsa, fusing UNESCO heritage, date palm culture, commerce, and the World Cup for Electronic Games.',
    timeline: {
      title: '30-Day Timeline',
      desc: 'Every 5 days, a new zone at a new venue.',
      weeks: [
        { days: 'Days 1–5', title: 'Heritage Cuisine', venue: 'Al Ahsa Mall', emoji: '🍽️' },
        { days: 'Days 6–10', title: 'Artisans & Crafts', venue: 'Al Rashid Mall', emoji: '🎨' },
        { days: 'Days 11–15', title: 'Folk Music & Dates', venue: 'Al Jawhara', emoji: '🎵' },
        { days: 'Days 16–20', title: 'History of Al-Ahsa', venue: 'Al Oqail Mall', emoji: '🏛️' },
        { days: 'Days 21–25', title: 'Date Palm & Dates', venue: 'Al Ahsa Mall', emoji: '🌴' },
        { days: 'Days 26–30', title: 'Fan Zone & Modern Al-Ahsa', venue: 'Entertainment City/Football', emoji: '🎮' }
      ]
    },
    routine: {
      title: 'Daily Routine',
      activities: [
        { time: '4:00 PM', name: 'Doors Open', desc: 'Visitor reception & Pulse of Al-Ahsa passport distribution.' },
        { time: '5:00 PM', name: 'Heritage & Crafts', desc: 'Palm workshops & Al-Ahsa storytelling.' },
        { time: '6:00 PM', name: 'Daily Gaming Challenge', desc: 'Mini-tournaments & youth competitions.' },
        { time: '7:00 PM', name: 'Family Main Stage Show', desc: 'Interactive shows & kids competitions.' },
        { time: '8:00 PM', name: 'Flash Sale Hour', desc: 'Exclusive discounts across all booths for 60 mins!' },
        { time: '9:30 PM', name: 'Prize Draws', desc: 'Winner announcements & evening entertainment.' }
      ]
    },
    events: {
      opening: 'Grand Opening Ceremony (June 10)',
      closing: 'Closing Night & Pulse of Al-Ahsa Grand Prize (July 10)'
    },
    back: '← Back to Home',
    register: 'Register Now'
  }
};

export default function SchedulePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const lang = resolvedParams.locale as 'ar' | 'en';
  const t = translations[lang];
  const isAr = lang === 'ar';

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2C2416]" dir={isAr ? 'rtl' : 'ltr'}>
      <Navbar locale={lang} isAr={isAr} />

      {/* Header */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-[#1B4D3E] mb-6">{t.title}</h1>
        <p className="text-lg text-[#5A4A2A] max-w-3xl mx-auto mb-12">{t.subtitle}</p>
        
        {/* Special Events */}
        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-[#D4AF37] text-[#1a1a2e] px-6 py-4 rounded-xl shadow-md font-bold text-lg">
            🎉 {t.events.opening}
          </div>
          <div className="bg-[#1B4D3E] text-white px-6 py-4 rounded-xl shadow-md font-bold text-lg">
            🏆 {t.events.closing}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1B4D3E] mb-4">{t.timeline.title}</h2>
          <p className="text-center text-[#5A4A2A] mb-12">{t.timeline.desc}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.timeline.weeks.map((week, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#D4AF37] transition group relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#1B4D3E] text-white px-4 py-2 rounded-bl-xl text-sm font-bold">
                  {week.days}
                </div>
                <div className="text-5xl mb-6 group-hover:scale-110 transition transform">{week.emoji}</div>
                <h3 className="text-2xl font-bold text-[#1B4D3E] mb-3">{week.title}</h3>
                <p className="text-[#5A4A2A] text-sm mb-4 flex items-center gap-2">
                  <span>📍</span> {week.venue}
                </p>
                <div className="w-full h-1 bg-[#E8E0D4] rounded-full overflow-hidden">
                  <div className="h-full bg-[#D4AF37]" style={{ width: `${((i + 1) / 6) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Routine Section */}
      <section className="py-20 px-6 bg-[#1B4D3E] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#D4AF37]">{t.routine.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.routine.activities.map((activity, i) => (
              <div key={i} className="bg-[#143A2E] p-6 rounded-xl border border-[#2E5C3A]">
                <div className="text-[#D4AF37] font-bold text-lg mb-2">{activity.time}</div>
                <h4 className="text-xl font-bold mb-2">{activity.name}</h4>
                <p className="text-[#A89B8A] text-sm">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer locale={lang} isAr={isAr} />
    </main>
  );
}
