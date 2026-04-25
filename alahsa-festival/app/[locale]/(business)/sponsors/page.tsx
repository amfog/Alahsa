'use client';

import { use } from 'react';
import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const translations = {
  ar: {
    title: 'باقات الرعاية',
    subtitle: 'انضم إلى أكبر منصة تنشيط اقتصادي في الأحساء. كل شريك يحصل على عائد استثمار قابل للقياس.',
    impact: {
      title: 'الأثر الاقتصادي المتوقع',
      visitors: '١٥٠،٠٠٠+ زائر',
      spending: '٦٠٠K+ ر.س قدرة شرائية يومية',
      merchants: '٣٠٠+ تاجر وحرفي',
      reach: '٢٠M+ انطباع رقمي'
    },
    tiers: [
      {
        name: 'الراعي البلاتيني',
        tag: 'حصرية · فرصة واحدة فقط',
        price: 'تسمية المهرجان',
        features: [
          'تسمية المهرجان بالكامل (شعار + اسم)',
          '٢ بوث مميز (أفضل موقع في المهرجان)',
          'تسمية المسرح الرئيسي ومساحة المشجعين',
          'ذكر يومي من المذيع (× ٣٠ يوم)',
          '٥ منشورات أسبوعية + ٤ فيديوهات حملة',
          'حفل الافتتاح والختام (كلمة الراعي)',
          'ضيافة VIP حصرية + تقارير أسبوعية'
        ],
        kpi: 'إجمالي الانطباعات • حركة البوث • الوصول الاجتماعي',
        target: 'STC • موبايلي • الراجحي • البنوك الكبرى • FMCG',
        cta: 'تواصل معنا',
        link: 'mailto:sponsors@pulse-ahsa.sa',
        highlight: true
      },
      {
        name: 'الراعي الذهبي',
        tag: 'ملكية المنطقة',
        price: 'مخصص',
        features: [
          'تسمية منطقة كاملة (من أصل ٦ مناطق)',
          'علامة تجارية في كل أنحاء المنطقة',
          'بوث كبير (موقع مميز داخل المنطقة)',
          'ذكر يومي خلال ساعات عمل المنطقة',
          '٣ منشورات أسبوعية + نشاط برعاية',
          '٢–٣ فرص متاحة لكل منطقة',
          'تقرير أداء مفصل أسبوعي'
        ],
        kpi: 'حركة المنطقة • وقت المكوث • استحضار العلامة',
        target: 'ريد بول • سامسونج • البيك • هامليز • ناهد',
        cta: 'تواصل معنا',
        link: 'mailto:sponsors@pulse-ahsa.sa',
        highlight: false
      },
      {
        name: 'الراعي الفضي',
        tag: 'علامة النشاط / الجوائز',
        price: 'من ١٠،٠٠٠ ر.س',
        features: [
          'علامة على نشاط متكرر (ساعة الخصم / السحب)',
          'تسمية "[العلامة] ساعة الخصم" أو "جائزة كبرى"',
          'لافتة النشاط + ذكر من المذيع يومياً',
          'بوث قياسي + منشران أسبوعياً',
          'دمج في نظام الجوائز والسحب',
          'خيار بدون بوث (تركيز رقمي)',
          'تقرير تحليلات المشاركة'
        ],
        kpi: 'حضور النشاط • الذكريات • زيارات البوث',
        target: 'مدى • STC Pay • بيبسي • نسكافيه • نون',
        cta: 'سجل الآن',
        link: '/ar/apply',
        highlight: false
      },
      {
        name: 'الشريك المحلي',
        tag: 'تركيز على التحويل',
        price: 'من ٥،٠٠٠ ر.س',
        features: [
          'بوث واحد في سوق التجار',
          'مشاركة في ساعة الخصم اليومية',
          'نظام QR لجمع العملاء والبيانات',
          'منشور واحد أسبوعياً على السوشيال',
          'حقوق التذوق وتوزيع العينات',
          'محطة ختم في جواز المهرجان',
          'قائمة منتجات المهرجان الرسمية'
        ],
        kpi: 'حجم المبيعات • حركة البوث • معدل المسح',
        target: 'تجار الأحساء • SMEs • مطاعم • علامات محلية',
        cta: 'سجل الآن',
        link: '/ar/apply',
        highlight: false
      }
    ],
    back: '← العودة للرئيسية',
    contact: 'للمزيد من المعلومات والحجز المبكر',
    email: 'sponsors@pulse-ahsa.sa'
  },
  en: {
    title: 'Sponsorship Packages',
    subtitle: 'Join Al-Ahsa\'s biggest economic activation platform. Every partner gets measurable ROI.',
    impact: {
      title: 'Expected Economic Impact',
      visitors: '150,000+ Visitors',
      spending: '600K+ SAR Daily Purchasing',
      merchants: '300+ Merchants & Craftsmen',
      reach: '20M+ Digital Impressions'
    },
    tiers: [
      {
        name: 'Platinum Sponsor',
        tag: 'Exclusive · 1 Slot Only',
        price: 'Festival Naming Rights',
        features: [
          'Full festival naming rights (logo + title)',
          '2 premium booths (best festival location)',
          'Main stage & Fan Zone naming',
          'Daily MC mention (× 30 days)',
          '5 social posts/week + 4 campaign videos',
          'Opening & closing ceremony (speaker slot)',
          'Exclusive VIP hospitality + weekly reports'
        ],
        kpi: 'Total impressions • Booth footfall • Social reach',
        target: 'STC • Mobily • Alrajhi • Major Banks • FMCG',
        cta: 'Contact Us',
        link: 'mailto:sponsors@pulse-ahsa.sa',
        highlight: true
      },
      {
        name: 'Gold Sponsor',
        tag: 'Zone Ownership',
        price: 'Custom',
        features: [
          'Full naming of 1 zone (out of 6)',
          'Zone-wide branding & signage',
          '1 large booth (prime in-zone location)',
          'Daily mention × zone operating hours',
          '3 social posts/week + sponsored activity',
          '2–3 slots available per zone',
          'Detailed weekly performance report'
        ],
        kpi: 'Zone footfall • Dwell time • Brand recall',
        target: 'Red Bull • Samsung • AlBaik • Hamleys • Nahdi',
        cta: 'Contact Us',
        link: 'mailto:sponsors@pulse-ahsa.sa',
        highlight: false
      },
      {
        name: 'Silver Sponsor',
        tag: 'Activation / Prize Power',
        price: 'From SAR 10,000',
        features: [
          'Brand on recurring activity (Flash Sale / Draws)',
          "'[Brand] Flash Sale Hour' or 'Grand Prize' naming",
          'Activity banner + daily MC mention',
          '1 standard booth + 2 social posts/week',
          'Integration into prize & draw system',
          'No-booth option (digital focus)',
          'Participation analytics report'
        ],
        kpi: 'Activity attendance • Mentions • Booth visits',
        target: 'Saudi Payments • STC Pay • Pepsi • Nescafe • Noon',
        cta: 'Apply Now',
        link: '/en/apply',
        highlight: false
      },
      {
        name: 'Local Partner',
        tag: 'Conversion Focus',
        price: 'From SAR 5,000',
        features: [
          '1 standard marketplace booth',
          'Daily Flash Sale Hour participation',
          'QR lead capture & data collection setup',
          '1 social story/week',
          'Sampling & tasting rights',
          'Passport stamp station',
          'Official festival product listing'
        ],
        kpi: 'Direct sales • Booth traffic • QR scan rate',
        target: 'Al-Ahsa merchants • SMEs • Restaurants • Local brands',
        cta: 'Apply Now',
        link: '/en/apply',
        highlight: false
      }
    ],
    back: '← Back to Home',
    contact: 'For more information & early booking',
    email: 'sponsors@pulse-ahsa.sa'
  }
};

export default function SponsorsPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const lang = resolvedParams.locale as 'ar' | 'en';
  const t = translations[lang];
  const isAr = lang === 'ar';

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2C2416]" dir={isAr ? 'rtl' : 'ltr'}>
      <Navbar locale={lang} isAr={isAr} />

      {/* Header */}
      <section className="py-16 px-6 text-center bg-gradient-to-b from-[#FAF8F5] to-[#F4E4C1]">
        <h1 className="text-4xl md:text-5xl font-black text-[#1B4D3E] mb-6">{t.title}</h1>
        <p className="text-lg text-[#5A4A2A] max-w-3xl mx-auto mb-12">{t.subtitle}</p>
        
        {/* Economic Impact */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E8E0D4]">
            <div className="text-2xl font-black text-[#D4AF37] mb-1">١٥K+</div>
            <div className="text-sm text-[#5A4A2A]">{t.impact.visitors}</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E8E0D4]">
            <div className="text-2xl font-black text-[#D4AF37] mb-1">٦٠K+</div>
            <div className="text-sm text-[#5A4A2A]">{t.impact.spending}</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E8E0D4]">
            <div className="text-2xl font-black text-[#D4AF37] mb-1">٣٠٠+</div>
            <div className="text-sm text-[#5A4A2A]">{t.impact.merchants}</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E8E0D4]">
            <div className="text-2xl font-black text-[#D4AF37] mb-1">٢٠M+</div>
            <div className="text-sm text-[#5A4A2A]">{t.impact.reach}</div>
          </div>
        </div>
      </section>

      {/* Tiers Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {t.tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`rounded-2xl p-8 shadow-lg flex flex-col ${
                tier.highlight 
                  ? 'bg-gradient-to-br from-[#1B4D3E] to-[#143A2E] text-white border-2 border-[#D4AF37]' 
                  : 'bg-white border-2 border-[#E8E0D4] hover:border-[#D4AF37] transition'
              }`}
            >
              <div className="mb-4">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${tier.highlight ? 'bg-[#D4AF37] text-[#1a1a2e]' : 'bg-[#F4E4C1] text-[#5A4A2A]'}`}>
                  {tier.tag}
                </div>
                <h2 className="text-2xl font-bold">{tier.name}</h2>
                <p className={`text-xl font-black mt-2 ${tier.highlight ? 'text-[#D4AF37]' : 'text-[#1B4D3E]'}`}>
                  {tier.price}
                </p>
              </div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                {tier.features.map((feat, j) => (
                  <li key={j} className={`flex items-start gap-2 text-sm ${tier.highlight ? 'text-[#E8E0D4]' : 'text-[#5A4A2A]'}`}>
                    <span className={tier.highlight ? 'text-[#D4AF37]' : 'text-[#1B4D3E]'}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
              
              <div className={`text-xs mb-6 pb-4 border-t ${tier.highlight ? 'border-[#ffffff33]' : 'border-[#E8E0D4]'}`}>
                <span className={tier.highlight ? 'text-[#E8E0D4]' : 'text-[#5A4A2A]'}>
                  <strong>KPI:</strong> {tier.kpi}
                </span>
              </div>
              
              <div className={`text-xs mb-6 ${tier.highlight ? 'text-[#E8E0D4]' : 'text-[#5A4A2A]'}`}>
                <strong>{isAr ? 'علامات مقترحة:' : 'Target Brands:'}</strong> {tier.target}
              </div>
              
              <a 
                href={tier.link} 
                className={`block w-full text-center py-3 rounded-xl font-bold transition ${
                  tier.highlight 
                    ? 'bg-[#D4AF37] text-[#1a1a2e] hover:bg-[#B8941F]' 
                    : 'bg-[#1B4D3E] text-white hover:bg-[#143A2E]'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-[#F4E4C1] text-center">
        <p className="text-[#5A4A2A] mb-2">{t.contact}</p>
        <a href={`mailto:${t.email}`} className="text-xl font-bold text-[#1B4D3E] hover:underline">
          {t.email}
        </a>
      </section>

      <Footer locale={lang} isAr={isAr} />
    </main>
  );
}
