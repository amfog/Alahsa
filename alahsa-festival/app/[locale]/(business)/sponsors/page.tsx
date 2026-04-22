'use client';

import { useState, use } from 'react';
import Link from 'next/link';

const translations = {
  ar: {
    title: 'باقات الرعاية',
    subtitle: 'شراكة استراتيجية مع مهرجان الأحساء للتسوق 2026',
    economicImpact: {
      title: 'الأثر الاقتصادي المتوقع',
      visitors: '3K–5K زائر يومياً',
      purchasing: '600K+ ر.س قدرة شرائية يومية',
      booths: '50+ بوث تجارية',
      revenue: '2M+ ر.س إيرادات متوقعة',
      weeks: '4 أسابيع • 5 أيام/أسبوع'
    },
    whySponsor: {
      title: 'لماذا ترعى المهرجان؟',
      reasons: [
        'الوصول لـ 3,000-5,000 زائر يومياً',
        'قدرة شرائية يومية تتجاوز 600 ألف ريال',
        'منصة تنشيط اقتصادي متكاملة',
        'تواجد عائلي مكثف (4 م - 11 م)',
        'تغطية إعلامية ورقمية واسعة',
        'فرص بيع مباشرة وتفاعل مع العملاء'
      ]
    },
    tiers: [
      {
        name: 'الراعي الرئيسي',
        subtitle: 'حصرية - فرصة واحدة فقط',
        price: 'تسمية المهرجان',
        features: [
          'تسمية المهرجان بالكامل',
          '2 بوث مميزة (أفضل موقع)',
          'تسمية المسرح الرئيسي',
          'ذكر يومي من المذيع (× 20 يوم)',
          '5 منشورات أسبوعية',
          '4 فيديوهات حملة',
          'حفل الافتتاح والختام',
          'ضيافة VIP حصرية'
        ],
        kpi: 'إجمالي الانطباعات • حركة البوث • الوصول الاجتماعي',
        brands: 'STC • موبايلي • الراجحي • البنوك • FMCG الكبرى',
        action: 'تواصل معنا',
        link: 'mailto:info@alahsashopping.com',
        highlight: true
      },
      {
        name: 'راعي منطقة',
        subtitle: 'ملكية المنطقة',
        price: 'مخصص',
        features: [
          'تسمية منطقة كاملة',
          'علامة تجارية في كل المنطقة',
          'بوث كبير (موقع مميز)',
          'ذكر يومي خلال ساعات المنطقة',
          '3 منشورات أسبوعية',
          'نشاط برعاية في المنطقة',
          '2-3 فرص متاحة'
        ],
        kpi: 'حركة المنطقة • وقت المكوث • استحضار العلامة',
        brands: 'ريد بول • سامسونج • البيك • هامليز',
        action: 'تواصل معنا',
        link: 'mailto:info@alahsashopping.com',
        highlight: false
      },
      {
        name: 'راعي نشاط',
        subtitle: 'علامة النشاط',
        price: 'من 10,000 ر.س',
        features: [
          'علامة على نشاط متكرر',
          'تسمية "[العلامة] ساعة الخصم"',
          'لافتة النشاط + ذكر من المذيع',
          'بوث قياسي',
          'منشوران أسبوعياً',
          'دمج في الجوائز',
          'علامات متعددة ممكنة'
        ],
        kpi: 'حضور النشاط • الذكريات • زيارات البوث',
        brands: 'مدى • STC Pay • بيبسي • نسكافيه',
        action: 'سجل الآن',
        link: '/apply',
        highlight: false
      },
      {
        name: 'راعي الجوائز',
        subtitle: 'قوة العطاء',
        price: 'حسب قيمة الجائزة',
        features: [
          'العلامة على عجلة الحظ والجواز',
          'إعلان "[جائزة العلامة الكبرى]"',
          'ذكر على المسرح في كل سحب',
          'شعار على كل مواد الجوائز',
          'خيار بدون بوث',
          'حسب قيمة الجائزة'
        ],
        kpi: 'المشاركة في السحب • الانتشار الاجتماعي',
        brands: 'إلكترونيات • جوالات • سفر • قسائم',
        action: 'تواصل معنا',
        link: 'mailto:info@alahsashopping.com',
        highlight: false
      },
      {
        name: 'تاجر محلي',
        subtitle: 'تركيز على التحويل',
        price: 'من 5,000 ر.س',
        features: [
          'بوث واحد في السوق',
          'مشاركة في ساعة الخصم',
          'نظام QR لجمع العملاء',
          'منشور واحد أسبوعياً',
          'حقوق التذوق والعينات',
          'محطة ختم الجواز',
          'قائمة منتجات المهرجان'
        ],
        kpi: 'حجم المبيعات • حركة البوث • معدل المسح',
        brands: 'تجار الأحساء • SMEs • مطاعم • علامات محلية',
        action: 'سجل الآن',
        link: '/apply',
        highlight: false
      },
      {
        name: 'راعي رقمي',
        subtitle: 'الوصول للحملات',
        price: 'مخصص',
        features: [
          'حملة اجتماعية مشتركة',
          'حقوق تحدي الهاشتاق',
          'ظهور في كل المنشورات',
          'استيلاء على القصص (1/أسبوع)',
          'دمج في التطبيق',
          'مضمون المؤثرين',
          'تقرير تحليلات الوصول'
        ],
        kpi: 'الانطباعات الرقمية • معدل النقر • حجم الهاشتاق',
        brands: 'تيك توك • سناب شات • نون • تطبيقات التوصيل',
        action: 'تواصل معنا',
        link: 'mailto:info@alahsashopping.com',
        highlight: false
      }
    ],
    back: '← العودة للرئيسية',
    contact: 'للمزيد من المعلومات',
    email: 'info@alahsashopping.com'
  },
  en: {
    title: 'Sponsorship Packages',
    subtitle: 'Strategic Partnership with Al Ahsa Shopping Festival 2026',
    economicImpact: {
      title: 'Expected Economic Impact',
      visitors: '3K–5K Daily Visitors',
      purchasing: 'SAR 600K+ Daily Purchasing',
      booths: '50+ Sponsor Booths',
      revenue: 'SAR 2M+ Est. Revenue',
      weeks: '4 Weeks • 5 Days/Week'
    },
    whySponsor: {
      title: 'Why Sponsor?',
      reasons: [
        'Reach 3,000-5,000 daily visitors',
        'SAR 600K+ daily purchasing power',
        'Integrated economic activation platform',
        'Intensive family presence (4 PM - 11 PM)',
        'Wide media & digital coverage',
        'Direct sales opportunities & customer engagement'
      ]
    },
    tiers: [
      {
        name: 'Title Sponsor',
        subtitle: 'Exclusive - 1 Slot Only',
        price: 'Festival Naming Rights',
        features: [
          'Festival naming rights',
          '2 premium booths (best location)',
          'Main stage naming',
          'Daily MC mention (× 20 days)',
          '5 social posts/week',
          '4 campaign videos',
          'Opening & closing ceremony',
          'Exclusive VIP hospitality'
        ],
        kpi: 'Total impressions • Booth footfall • Social reach',
        brands: 'STC • Mobily • Alrajhi • Banks • Major FMCG',
        action: 'Contact Us',
        link: 'mailto:info@alahsashopping.com',
        highlight: true
      },
      {
        name: 'Zone Sponsor',
        subtitle: 'Zone Ownership',
        price: 'Custom',
        features: [
          'Full naming of 1 zone',
          'Zone-wide branding & signage',
          '1 large booth (prime in zone)',
          'Daily mention × zone hours',
          '3 social posts/week',
          'Sponsored activity in zone',
          '2–3 slots per zone'
        ],
        kpi: 'Zone footfall • Dwell time • Brand recall',
        brands: 'Red Bull • Samsung • AlBaik • Hamleys',
        action: 'Contact Us',
        link: 'mailto:info@alahsashopping.com',
        highlight: false
      },
      {
        name: 'Activity Sponsor',
        subtitle: 'Activation Brand',
        price: 'From SAR 10,000',
        features: [
          'Brand on 1 recurring activity',
          "'[Brand] Flash Sale Hour' naming",
          'Activity banner + MC mention',
          '1 standard booth',
          '2 social posts/week',
          'Giveaway integration slot',
          'Multiple brands possible'
        ],
        kpi: 'Activity attendance • Mentions • Booth visits',
        brands: 'Saudi Payments • STC Pay • Pepsi • Nescafe',
        action: 'Apply Now',
        link: '/apply',
        highlight: false
      },
      {
        name: 'Prize Sponsor',
        subtitle: 'Giveaway Power',
        price: 'Based on Prize Value',
        features: [
          'Name on spin wheel & passport',
          "'[Brand] Grand Prize' announcements",
          'Stage shoutout every draw',
          'Logo on all prize collateral',
          'No booth required option',
          'Scaled by prize value'
        ],
        kpi: 'Draw participation • Social virality',
        brands: 'Electronics • Mobile • Travel • Retail vouchers',
        action: 'Contact Us',
        link: 'mailto:info@alahsashopping.com',
        highlight: false
      },
      {
        name: 'Local Trader',
        subtitle: 'Conversion Focus',
        price: 'From SAR 5,000',
        features: [
          '1 standard marketplace booth',
          'Flash sale hour participation',
          'QR lead capture setup',
          '1 social story/week',
          'Sampling rights',
          'Passport stamp station',
          'Festival product listing'
        ],
        kpi: 'Direct sales • Booth traffic • QR scan rate',
        brands: 'Al Ahsa merchants • SMEs • Restaurants • Local brands',
        action: 'Apply Now',
        link: '/apply',
        highlight: false
      },
      {
        name: 'Digital Sponsor',
        subtitle: 'Campaign Reach',
        price: 'Custom',
        features: [
          'Co-branded social campaign',
          'Hashtag challenge rights',
          'Featured in all digital posts',
          'Story takeover (1 per week)',
          'App integration (if applicable)',
          'Influencer content inclusion',
          'Reach analytics report'
        ],
        kpi: 'Digital impressions • CTR • Hashtag volume',
        brands: 'TikTok • Snapchat • Noon • Delivery apps',
        action: 'Contact Us',
        link: 'mailto:info@alahsashopping.com',
        highlight: false
      }
    ],
    back: '← Back to Home',
    contact: 'For more information',
    email: 'info@alahsashopping.com'
  }
};

export default function SponsorsPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const [lang, setLang] = useState<'ar' | 'en'>(resolvedParams.locale as 'ar' | 'en');
  const t = translations[lang];
  const isAr = lang === 'ar';

  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-[#f8f5f0] to-white" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Language Toggle */}
      <div className={`fixed top-4 ${isAr ? 'left-4' : 'right-4'} z-50`}>
        <button 
          onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} 
          className="bg-[#D4AF37] text-[#1a1a2e] px-4 py-2 rounded-full font-bold shadow-md hover:scale-105 transition"
        >
          {lang === 'ar' ? 'English' : 'عربي'}
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Back Link */}
        <Link href={`/${lang}`} className="text-[#2E5C3A] font-bold hover:underline mb-8 inline-block">
          {t.back}
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-[#2E5C3A] mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {/* Economic Impact Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-[#2E5C3A] mb-10">{t.economicImpact.title}</h2>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-[#D4AF37]">
              <div className="text-4xl font-black text-[#D4AF37] mb-2">3K–5K</div>
              <div className="text-sm text-gray-600">{t.economicImpact.visitors}</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-[#D4AF37]">
              <div className="text-3xl font-black text-[#D4AF37] mb-2">600K+ ر.س</div>
              <div className="text-sm text-gray-600">{t.economicImpact.purchasing}</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-[#D4AF37]">
              <div className="text-4xl font-black text-[#D4AF37] mb-2">50+</div>
              <div className="text-sm text-gray-600">{t.economicImpact.booths}</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-[#D4AF37]">
              <div className="text-3xl font-black text-[#D4AF37] mb-2">2M+ ر.س</div>
              <div className="text-sm text-gray-600">{t.economicImpact.revenue}</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-[#D4AF37]">
              <div className="text-2xl font-black text-[#D4AF37] mb-2">4×5</div>
              <div className="text-sm text-gray-600">{t.economicImpact.weeks}</div>
            </div>
          </div>
        </section>

        {/* Why Sponsor Section */}
        <section className="mb-20 bg-[#2E5C3A] rounded-3xl p-10 text-white">
          <h2 className="text-3xl font-bold text-center mb-10">{t.whySponsor.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.whySponsor.reasons.map((reason, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-[#D4AF37] text-2xl">✓</span>
                <span className="text-lg">{reason}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Sponsorship Tiers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {t.tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`rounded-2xl p-8 shadow-xl flex flex-col ${
                tier.highlight 
                  ? 'bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-[#1a1a2e] scale-105 border-4 border-[#2E5C3A]' 
                  : 'bg-white border-2 border-transparent hover:border-[#D4AF37] transition'
              }`}
            >
              <div className="mb-4">
                <h2 className={`text-2xl font-bold mb-1 ${tier.highlight ? 'text-[#1a1a2e]' : 'text-[#2E5C3A]'}`}>
                  {tier.name}
                </h2>
                <p className={`text-sm ${tier.highlight ? 'text-[#1a1a2e]/80' : 'text-gray-500'}`}>
                  {tier.subtitle}
                </p>
              </div>
              
              <p className={`text-3xl font-black mb-6 ${tier.highlight ? 'text-[#1a1a2e]' : 'text-[#D4AF37]'}`}>
                {tier.price}
              </p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feat, j) => (
                  <li key={j} className={`flex items-start gap-2 text-sm ${tier.highlight ? 'text-[#1a1a2e]' : 'text-gray-600'}`}>
                    <span className={`${tier.highlight ? 'text-[#1a1a2e]' : 'text-[#D4AF37]'} mt-1`}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
              
              <div className={`text-xs mb-4 pb-4 border-b ${tier.highlight ? 'border-[#1a1a2e]/30' : 'border-gray-200'}`}>
                <span className={tier.highlight ? 'text-[#1a1a2e]/80' : 'text-gray-500'}>
                  <strong>KPI:</strong> {tier.kpi}
                </span>
              </div>
              
              <div className={`text-xs mb-6 ${tier.highlight ? 'text-[#1a1a2e]/80' : 'text-gray-500'}`}>
                <strong>{isAr ? 'علامات مقترحة:' : 'Target Brands:'}</strong> {tier.brands}
              </div>
              
              <a 
                href={tier.link} 
                className={`block w-full text-center py-3 rounded-xl font-bold transition ${
                  tier.highlight 
                    ? 'bg-[#2E5C3A] text-white hover:bg-[#1a3a23]' 
                    : 'bg-[#2E5C3A] text-white hover:bg-[#1a3a23]'
                }`}
              >
                {tier.action}
              </a>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center bg-[#f8f5f0] rounded-2xl p-10">
          <p className="text-gray-600 mb-2">{t.contact}</p>
          <a href="mailto:info@alahsashopping.com" className="text-2xl font-bold text-[#D4AF37] hover:underline">
            {t.email}
          </a>
        </div>
      </div>
    </main>
  );
}
