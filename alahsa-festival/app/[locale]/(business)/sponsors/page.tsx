'use client';

import { useState } from 'react';
import Link from 'next/link';

const translations = {
  ar: {
    title: 'باقات الرعاية',
    subtitle: 'شراكة استراتيجية مع مهرجان الأحساء للتسوق 2026',
    packages: [
      {
        name: 'الراعي الرئيسي',
        price: 'حصرية',
        features: ['تسمية المهرجان', '2 بوثة مميزة', 'تسمية المسرح الرئيسي', 'شعار في كل المواد التسويقية'],
        action: 'تواصل معنا',
        link: 'mailto:info@alahsashopping.com'
      },
      {
        name: 'راعي منطقة',
        price: 'مخصص',
        features: ['تسمية منطقة كاملة', 'بوثة كبيرة', '3 منشورات أسبوعية', 'تفاعل مباشر'],
        action: 'تواصل معنا',
        link: 'mailto:info@alahsashopping.com'
      },
      {
        name: 'تاجر محلي',
        price: 'من 5,000 ر.س',
        features: ['بوثة في السوق', 'مشاركة في العروض', 'نظام مسح للعملاء', 'دعم فني'],
        action: 'سجل الآن',
        link: '/apply'
      }
    ],
    back: '← العودة للرئيسية'
  },
  en: {
    title: 'Sponsorship Packages',
    subtitle: 'Strategic Partnership with Al Ahsa Shopping Festival 2026',
    packages: [
      {
        name: 'Title Sponsor',
        price: 'Exclusive',
        features: ['Festival Naming', '2 Premium Booths', 'Main Stage Naming', 'Logo on all materials'],
        action: 'Contact Us',
        link: 'mailto:info@alahsashopping.com'
      },
      {
        name: 'Zone Sponsor',
        price: 'Custom',
        features: ['Zone Naming', 'Large Booth', '3 Weekly Posts', 'Direct Engagement'],
        action: 'Contact Us',
        link: 'mailto:info@alahsashopping.com'
      },
      {
        name: 'Local Trader',
        price: 'From SAR 5,000',
        features: ['Market Booth', 'Show Participation', 'Customer Scanning', 'Technical Support'],
        action: 'Apply Now',
        link: '/apply'
      }
    ],
    back: '← Back to Home'
  }
};

export default function SponsorsPage({ params }: { params: { locale: string } }) {
  const [lang, setLang] = useState<'ar' | 'en'>(params.locale as 'ar' | 'en');
  const t = translations[lang];
  const isAr = lang === 'ar';

  return (
    <main className="min-h-screen py-20 bg-[#f8f5f0]" dir={isAr ? 'rtl' : 'ltr'}>
      <div className={`fixed top-4 ${isAr ? 'left-4' : 'right-4'} z-50`}>
        <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="bg-[#D4AF37] text-[#1a1a2e] px-4 py-2 rounded-full font-bold shadow-md hover:scale-105 transition">
          {lang === 'ar' ? 'English' : 'عربي'}
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <Link href={`/${lang}`} className="text-[#2E5C3A] font-bold hover:underline mb-8 inline-block">
          {t.back}
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-[#2E5C3A] mb-2">{t.title}</h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.packages.map((pkg, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-[#D4AF37] transition flex flex-col">
              <h2 className="text-2xl font-bold text-[#2E5C3A] mb-2">{pkg.name}</h2>
              <p className="text-3xl font-black text-[#D4AF37] mb-6">{pkg.price}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feat, j) => (
                  <li key={j} className="flex items-center text-gray-600">
                    <span className="text-[#D4AF37] mr-2 ml-2">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <a 
                href={isAr ? pkg.link : pkg.link.replace('/ar', '/en')} 
                className="block w-full text-center bg-[#2E5C3A] text-white py-3 rounded-xl font-bold hover:bg-[#1a3a23] transition"
              >
                {pkg.action}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
