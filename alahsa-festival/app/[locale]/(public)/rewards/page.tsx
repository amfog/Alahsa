'use client';

import { use } from 'react';
import Link from 'next/link';

const translations = {
  ar: {
    title: 'نظام المكافآت والكاش باك',
    subtitle: 'كل ١ ر.س إنفاق = ١ بذرة تمر. استبدلها بخصومات، تذاكر سحب، ووصول VIP.',
    currency: {
      title: 'عملة المهرجان: بذرة التمر 🌴',
      desc: '١٠٠ بذرة = ١ ر.س كاش باك • قابلة للاستخدام في جميع بوثات المهرجان',
      how: [
        'أنفق ١ ر.س → احصل على ١ بذرة',
        'امسح كود QR في كل بوث → اجمع البذور',
        'استبدل ١٠٠ بذرة → خصم فوري أو تذكرة سحب',
        'تتبع رصيدك عبر كارت نبض الرقمي'
      ]
    },
    tiers: {
      title: 'مستويات كارت نبض',
      silver: {
        name: 'فضي',
        spend: '٠ – ٥٠٠ ر.س',
        perks: ['كاش باك ٥٪', 'سحب يومي على جوائز', 'وصول مبكر لساعة الخصم', 'هدية ترحيب عند أول زيارة'],
        color: 'border-[#C0C0C0] bg-gradient-to-b from-white to-gray-50'
      },
      gold: {
        name: 'ذهبي',
        spend: '٥٠ – ١,٥٠٠ ر.س',
        perks: ['كاش باك ٨٪', 'وصول VIP لمنطقة العائلات', 'خصم ١٥٪ في مطاعم الشركاء', 'تذكرة سحب مضاعفة كل جمعة', 'شحن مجاني للطلبات'],
        color: 'border-[#D4AF37] bg-gradient-to-b from-[#FFFBEB] to-white scale-105 shadow-xl'
      },
      diamond: {
        name: 'ماسي',
        spend: '١,٥٠٠+ ر.س',
        perks: ['كاش باك ١٢٪', 'دعوة لحفل الختام الكبير', 'ضياء VIP في المسرح الرئيسي', 'جوائز حصرية غير قابلة للشراء', 'مدير حساب مخصص'],
        color: 'border-[#B9F2FF] bg-gradient-to-b from-[#F0FDFA] to-white'
      }
    },
    mechanics: {
      title: 'آليات التحويل الأربع',
      flash: { title: '⚡ ساعة الخصم', desc: 'يومياً ٨-٩ م. جميع البوثات تفعّل عروضاً حصرية. عد تنازلي على المسرح الرئيسي.' },
      passport: { title: '🗺️ جواز المهرجان', desc: 'اجمع أختام من كل منطقة. ١٠ أختام = جائزة كبرى. ٢٠ ختم = وصول VIP دائم.' },
      spendwin: { title: '🏆 أنفق واربح', desc: 'كل ١٠ ر.س شراء = تذكرة سحب. السحب الأسبوعي على المسرح يوم الجمعة ٩:٣٠ م.' },
      loyalty: { title: '🔄 برنامج الولاء', desc: '٣ زيارات أسبوعياً = دخول سريع + ختم إضافي. أعضاء الشهر يحصلون على هدايا مفاجئة.' }
    },
    back: '← العودة للرئيسية',
    register: 'سجل واحصل على كارت نبض مجاناً'
  },
  en: {
    title: 'Rewards & Cashback System',
    subtitle: 'Every 1 SAR spent = 1 Date Seed. Redeem for discounts, draw tickets, and VIP access.',
    currency: {
      title: 'Festival Currency: Date Seed 🌴',
      desc: '100 Seeds = 1 SAR Cashback • Valid across all festival booths',
      how: [
        'Spend 1 SAR → Earn 1 Seed',
        'Scan QR at any booth → Collect seeds',
        'Redeem 100 Seeds → Instant discount or draw ticket',
        'Track balance via digital Pulse Card'
      ]
    },
    tiers: {
      title: 'Pulse Card Tiers',
      silver: {
        name: 'Silver',
        spend: '0 – 500 SAR',
        perks: ['5% Cashback', 'Daily prize draws', 'Early Flash Sale access', 'Welcome gift on first visit'],
        color: 'border-[#C0C0C0] bg-gradient-to-b from-white to-gray-50'
      },
      gold: {
        name: 'Gold',
        spend: '500 – 1,500 SAR',
        perks: ['8% Cashback', 'VIP Family Zone access', '15% discount at partner restaurants', 'Double draw tickets every Friday', 'Free delivery on orders'],
        color: 'border-[#D4AF37] bg-gradient-to-b from-[#FFFBEB] to-white scale-105 shadow-xl'
      },
      diamond: {
        name: 'Diamond',
        spend: '1,500+ SAR',
        perks: ['12% Cashback', 'Closing ceremony VIP invite', 'Main stage VIP seating', 'Exclusive non-saleable prizes', 'Dedicated account manager'],
        color: 'border-[#B9F2FF] bg-gradient-to-b from-[#F0FDFA] to-white'
      }
    },
    mechanics: {
      title: '4 Conversion Mechanics',
      flash: { title: '⚡ Flash Sale Hour', desc: 'Daily 8-9 PM. All booths activate exclusive offers. Countdown on main stage.' },
      passport: { title: '🗺️ Festival Passport', desc: 'Collect stamps from every zone. 10 stamps = grand prize. 20 stamps = permanent VIP.' },
      spendwin: { title: '🏆 Spend & Win', desc: 'Every 100 SAR spent = 1 draw ticket. Weekly draws on stage every Friday 9:30 PM.' },
      loyalty: { title: '🔄 Loyalty Program', desc: '3 visits/week = fast-track entry + bonus stamp. Monthly members get surprise gifts.' }
    },
    back: '← Back to Home',
    register: 'Register & Get Your Free Pulse Card'
  }
};

export default function RewardsPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const lang = resolvedParams.locale as 'ar' | 'en';
  const t = translations[lang];
  const isAr = lang === 'ar';

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2C2416]" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#FAF8F5]/80 backdrop-blur-md border-b border-[#E8E0D4] px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href={`/${lang}`} className="font-bold text-xl text-[#1B4D3E]">
            {isAr ? 'نبض الأحساء' : 'Pulse of Al-Ahsa'}
          </Link>
          <div className="hidden md:flex gap-6 text-sm font-bold text-[#2C2416]">
            <Link href={`/${lang}/zones`} className="hover:text-[#1B4D3E] transition">{isAr ? 'المناطق' : 'Zones'}</Link>
            <Link href={`/${lang}/schedule`} className="hover:text-[#1B4D3E] transition">{isAr ? 'الجدول' : 'Schedule'}</Link>
            <Link href={`/${lang}/sponsors`} className="hover:text-[#1B4D3E] transition">{isAr ? 'الرعاة' : 'Sponsors'}</Link>
          </div>
          <Link href={`/${lang}/register`} className="bg-[#1B4D3E] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#143A2E] transition">{isAr ? 'سجل الآن' : 'Register'}</Link>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-6 text-center bg-gradient-to-b from-[#FAF8F5] to-[#F4E4C1]">
        <h1 className="text-4xl md:text-5xl font-black text-[#1B4D3E] mb-6">{t.title}</h1>
        <p className="text-lg text-[#5A4A2A] max-w-3xl mx-auto mb-12">{t.subtitle}</p>
        
        {/* Currency Section */}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-[#E8E0D4]">
          <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4">{t.currency.title}</h2>
          <p className="text-[#5A4A2A] mb-6">{t.currency.desc}</p>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            {t.currency.how.map((step, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-[#FAF8F5] rounded-xl">
                <span className="text-[#D4AF37] font-bold text-xl">✓</span>
                <span className="text-[#2C2416]">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1B4D3E] mb-12">{t.tiers.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[t.tiers.silver, t.tiers.gold, t.tiers.diamond].map((tier, i) => (
              <div key={i} className={`p-8 rounded-2xl border-2 ${tier.color} flex flex-col`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#1B4D3E] mb-2">{tier.name}</h3>
                  <p className="text-sm text-[#5A4A2A]">{tier.spend}</p>
                </div>
                <ul className="space-y-4 flex-grow">
                  {tier.perks.map((perk, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <span className="text-[#D4AF37]">★</span>
                      <span className="text-[#2C2416] text-sm">{perk}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/${lang}/register`} className="mt-8 block text-center bg-[#1B4D3E] text-white py-3 rounded-xl font-bold hover:bg-[#143A2E] transition">
                  {isAr ? 'احصل على الكارت' : 'Get Card'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanics */}
      <section className="py-20 px-6 bg-[#1B4D3E] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#D4AF37]">{t.mechanics.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[t.mechanics.flash, t.mechanics.passport, t.mechanics.spendwin, t.mechanics.loyalty].map((mech, i) => (
              <div key={i} className="bg-[#143A2E] p-6 rounded-xl border border-[#2E5C3A]">
                <h3 className="text-xl font-bold mb-2 text-[#D4AF37]">{mech.title}</h3>
                <p className="text-[#E8E0D4]">{mech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-[#F4E4C1]">
        <Link href={`/${lang}/register`} className="inline-block bg-[#1B4D3E] text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg">
          {t.register}
        </Link>
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
        <p className="text-xs text-[#A89B8A]">© 2026 {isAr ? 'نبض الأحساء. جميع الحقوق محفوظة.' : 'Pulse of Al-Ahsa. All rights reserved.'}</p>
      </footer>
    </main>
  );
}
