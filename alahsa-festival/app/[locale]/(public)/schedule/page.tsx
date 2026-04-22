'use client';

import { useState, use } from 'react';
import Link from 'next/link';

const translations = {
  ar: {
    title: 'الجدول الزمني والأنشطة',
    subtitle: '4 أسابيع من الترفيه والتسوق — كل يوم مغامرة جديدة',
    hours: {
      label: 'أوقات العمل',
      days: 'الخميس — الاثنين',
      time: '4:00 م — 11:00 م'
    },
    timeline: {
      title: 'الجدول الزمني لمدة 4 أسابيع',
      weeks: [
        {
          week: 'الأسبوع الأول',
          dates: '10 يونيو — 16 يونيو',
          theme: '🎉 الافتتاح الكبير',
          events: [
            'حفل الافتتاح وقطع الشريط',
            'تحدي المؤثرين للتسوق',
            'إطلاق جواز المهرجان',
            'سحب الجوائز الكبرى (مليون ريال)'
          ]
        },
        {
          week: 'الأسبوع الثاني',
          dates: '17 يونيو — 23 يونيو',
          theme: '👨‍👩‍👧 العائلة والتراث',
          events: [
            'مطبخ الأحساء (مسابقة طبخ)',
            'رحلة تراثية خاصة',
            'ليلة العلامات المحلية',
            'رحلة البحث عن الكنز'
          ]
        },
        {
          week: 'الأسبوع الثالث',
          dates: '24 يونيو — 30 يونيو',
          theme: '🎮 الشباب والألعاب',
          events: [
            'بطولة الألعاب الإلكترونية المصغرة',
            'تحدي المهارات الرياضية',
            'ركن المبدعين (تيك توك)',
            'يوم المؤثرين'
          ]
        },
        {
          week: 'الأسبوع الرابع',
          dates: '1 يوليو — 10 يوليو',
          theme: '🏆 الأسبوع الختامي الكبير',
          events: [
            'أسبوع التخفيضات الضخمة',
            'السحب الكبير لجواز المهرجان',
            'بطولة عجلة الحظ النهائية',
            'حفل الختام الكبير'
          ]
        }
      ]
    },
    daily: {
      title: 'الجدول اليومي (الخميس — الاثنين)',
      activities: [
        { time: '4:00 م', name: '🚪 افتتاح الأبواب', desc: 'استقبال الزوار وتسليم جوازات المهرجان.' },
        { time: '5:00 م', name: '🌴 التراث والحرف', desc: 'ورش عمل النخيل وقصة الأحساء.' },
        { time: '6:00 م', name: '🎮 تحدي الألعاب اليومي', desc: 'بطولة مصغرة ومسابقات شبابية.' },
        { time: '7:00 م', name: '🎤 عرض المسرح العائلي', desc: 'مسرحيات ومسابقات تفاعلية للأطفال.' },
        { time: '8:00 م', name: '⚡ ساعة الخصم (FLASH SALE)', desc: 'تخفيضات حصرية لمدة 60 دقيقة في جميع البوثات!' },
        { time: '9:30 م', name: '🎁 سحب الجوائز', desc: 'الإعلان عن الفائزين وعروض المساء.' }
      ]
    },
    back: '← العودة للرئيسية',
    register: 'سجل الآن'
  },
  en: {
    title: 'Schedule & Activities',
    subtitle: '4 Weeks of Entertainment & Shopping — A New Adventure Every Day',
    hours: {
      label: 'Operating Hours',
      days: 'Thursday — Monday',
      time: '4:00 PM — 11:00 PM'
    },
    timeline: {
      title: '4-Week Master Timeline',
      weeks: [
        {
          week: 'Week 1',
          dates: 'Jun 10 – Jun 16',
          theme: '🎉 Grand Opening',
          events: [
            'Opening Ceremony & Ribbon Cutting',
            'VIP Influencer Shopping Challenge',
            'Festival Passport Launch',
            'Mega Opening Giveaway (SAR Prizes)'
          ]
        },
        {
          week: 'Week 2',
          dates: 'Jun 17 – Jun 23',
          theme: '👨‍👧 Family & Culture',
          events: [
            'Al Ahsa Kitchen (Cooking Competition)',
            'Special Heritage Walk',
            'Local Brands Showcase Night',
            'All-Zone Treasure Hunt'
          ]
        },
        {
          week: 'Week 3',
          dates: 'Jun 24 – Jun 30',
          theme: '🎮 Youth & Gaming',
          events: [
            'Mini Esports Tournament',
            'Outdoor Football Skills Challenge',
            'Creator Corner (TikTok & Reels)',
            'Influencer Day Guest Appearances'
          ]
        },
        {
          week: 'Week 4',
          dates: 'Jul 1 – Jul 10',
          theme: '🏆 Mega Finale Week',
          events: [
            'Mega Discount Week (All Brands)',
            'Loyalty Passport Grand Draw',
            'Spin Wheel Championship Finale',
            'Closing Ceremony (Jul 10)'
          ]
        }
      ]
    },
    daily: {
      title: 'Daily Schedule (Thu – Mon)',
      activities: [
        { time: '4:00 PM', name: '🚪 Doors Open', desc: 'Entry flow & Passport distribution.' },
        { time: '5:00 PM', name: '🌴 Heritage & Crafts', desc: 'Date palm workshops & storytelling.' },
        { time: '6:00 PM', name: '🎮 Daily Gaming Challenge', desc: 'Mini-tournaments & youth competitions.' },
        { time: '7:00 PM', name: '🎤 Family Main Stage Show', desc: 'Interactive shows & kids competitions.' },
        { time: '8:00 PM', name: '⚡ Flash Sale Hour', desc: 'Exclusive discounts across all booths for 60 mins!' },
        { time: '9:30 PM', name: '🎁 Prize Draws & Shows', desc: 'Winner announcements & evening entertainment.' }
      ]
    },
    back: '← Back to Home',
    register: 'Register Now'
  }
};

export default function SchedulePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const [lang, setLang] = useState<'ar' | 'en'>(resolvedParams.locale as 'ar' | 'en');
  const t = translations[lang];
  const isAr = lang === 'ar';

  return (
    <main className="min-h-screen bg-white" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Language Toggle */}
      <div className={`fixed top-4 ${isAr ? 'left-4' : 'right-4'} z-50`}>
        <button 
          onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} 
          className="bg-[#D4AF37] text-[#1a1a2e] px-4 py-2 rounded-full font-bold shadow-md hover:scale-105 transition"
        >
          {lang === 'ar' ? 'English' : 'عربي'}
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Back Link */}
        <div className="pt-8">
          <Link href={`/${lang}`} className="text-[#2E5C3A] font-bold hover:underline inline-block">
            {t.back}
          </Link>
        </div>

        {/* Header */}
        <section className="text-center py-16">
          <h1 className="text-5xl font-black text-[#2E5C3A] mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{t.subtitle}</p>
          
          {/* Hours Badge */}
          <div className="inline-block bg-[#2E5C3A] text-white px-8 py-4 rounded-2xl shadow-lg">
            <div className="text-sm opacity-80 mb-1">{t.hours.label}</div>
            <div className="text-2xl font-bold">{t.hours.days} • {t.hours.time}</div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-[#2E5C3A] mb-10">{t.timeline.title}</h2>
          <div className="grid gap-8">
            {t.timeline.weeks.map((week, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 items-start bg-[#f8f5f0] p-8 rounded-2xl border-l-4 border-[#D4AF37]">
                <div className="md:w-1/3 text-center md:text-left">
                  <h3 className="text-2xl font-black text-[#D4AF37]">{week.week}</h3>
                  <p className="text-gray-500 font-bold">{week.dates}</p>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-bold text-[#2E5C3A] mb-3">{week.theme}</h4>
                  <ul className="space-y-2">
                    {week.events.map((evt, j) => (
                      <li key={j} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-[#2E5C3A] rounded-full ml-2 mr-2"></span>
                        {evt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Daily Schedule Section */}
        <section className="mb-20 bg-[#1a1a2e] text-white rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#D4AF37]">{t.daily.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.daily.activities.map((activity, i) => (
              <div key={i} className="flex items-start gap-4 bg-[#2a2a3e] p-6 rounded-xl border border-gray-700">
                <div className="bg-[#D4AF37] text-[#1a1a2e] px-3 py-1 rounded font-bold text-sm whitespace-nowrap">
                  {activity.time}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">{activity.name}</h4>
                  <p className="text-gray-400 text-sm">{activity.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pb-20">
          <Link 
            href={`/${lang}/apply`}
            className="inline-block bg-[#D4AF37] text-[#1a1a2e] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg"
          >
            {t.register}
          </Link>
        </div>
      </div>
    </main>
  );
}
