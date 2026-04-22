'use client';

import { useState, use } from 'react';
import Link from 'next/link';

const translations = {
  ar: {
    title: 'عن المهرجان',
    subtitle: 'منصة تنشيط اقتصادي لمدة 4 أسابيع في قلب الأحساء',
    vision: {
      title: 'الرؤية الاستراتيجية',
      whyAhsa: 'لماذا الأحساء؟',
      whyAhsaText: 'مدينة تراثية يونيسكو. ثقافة عائلية. سوق ترفيهي صيفي غير مخدوم.',
      whySummer: 'لماذا الصيف؟',
      whySummerText: 'المدارس مغلقة. العائلات متواجدة. قدرة شرائية متاحة.',
      whyFamilies: 'لماذا العائلات؟',
      whyFamiliesText: 'العائلات تنفق أكثر، تبقى أطول، وتعود. عائلة من 5 أفراد × 3000 عائلة = +600 ألف ر.س يومياً.',
      whyGaming: 'لماذا الألعاب والتسوق؟',
      whyGamingText: 'الألعاب تجذب الشباب → الشباب يجلبون العائلات → العائلات تتسوق.'
    },
    zones: {
      title: '6 مناطق رئيسية',
      zone1: {
        title: '🛍️ سوق التسوق الكبير',
        desc: '200+ بوث • تخفيضات يومية • عروض حصرية',
        sponsors: 'بنده، الدانوب، جرير، المدفوعات السعودية'
      },
      zone2: {
        title: '👨‍👩‍👧 منطقة تجربة العائلة',
        desc: 'ورش عمل للأطفال • مسرح عائلي • مسابقات',
        sponsors: 'هاملز، ناهض، ماركات الأطفال'
      },
      zone3: {
        title: '🍽 منطقة المأكولات',
        desc: 'مطاعم الأحساء • شاحنات طعام • تراث القهوة',
        sponsors: 'البيك، هردي، نسكافيه، ريد بول'
      },
      zone4: {
        title: '🎮 منطقة الألعاب',
        desc: 'بطولات يومية • تحدي المحترفين • محطات مجانية',
        sponsors: 'STC، موبايلي، بلايستيشن، نون'
      },
      zone5: {
        title: '🌴 التراث والمنتجات المحلية',
        desc: 'نخيل التمور • حرف يدوية • فنون شعبية',
        sponsors: 'وزارة الثقافة، هيئة السياحة، مزارع التمور'
      },
      zone6: {
        title: '🎤 المسرح الرئيسي',
        desc: 'عروض يومية • سحب الجوائز • إعلانات التخفيضات',
        sponsors: 'الراعي الرئيسي، اتصالات، FMCG'
      }
    },
    mechanics: {
      title: 'آليات التحويل',
      passport: {
        title: '🗺️ جواز المهرجان',
        desc: 'اجمع الأختام من كل منطقة واربح جوائز كبرى.'
      },
      spend: {
        title: '🏆 أنفق واربح',
        desc: 'كل 100 ر.س شراء = تذكرة سحب على الجوائز الكبرى.'
      },
      flash: {
        title: '⚡ ساعة الخصم',
        desc: 'يومياً 8-9 م. تخفيضات حصرية متزامنة في كل البوثات.'
      },
      loyalty: {
        title: '🔄 برنامج الولاء',
        desc: '3 زيارات أسبوعياً = دخول VIP وختم إضافي.'
      }
    },
    stats: {
      title: 'أرقام المهرجان',
      visitors: '3K–5K زائر يومياً',
      purchasing: '600K+ ر.س شراء يومي',
      duration: '4 أسابيع × 5 أيام',
      booths: '50+ بوث راعية'
    },
    back: '← العودة للرئيسية',
    register: 'سجل الآن'
  },
  en: {
    title: 'About The Festival',
    subtitle: 'A 4-week economic activation platform in the heart of Al Ahsa',
    vision: {
      title: 'Strategic Vision',
      whyAhsa: 'Why Al Ahsa?',
      whyAhsaText: 'UNESCO heritage city. Family-first culture. Underserved summer entertainment market.',
      whySummer: 'Why Summer?',
      whySummerText: 'Schools closed. Families are home. Spending power is available.',
      whyFamilies: 'Why Families?',
      whyFamiliesText: 'Families spend more, stay longer, and return. 5-person family × 3000 families = 600K+ SAR/day.',
      whyGaming: 'Why Gaming & Shopping?',
      whyGamingText: 'Gaming drives youth traffic → youth bring families → families shop.'
    },
    zones: {
      title: '6 Main Zones',
      zone1: {
        title: '🛍️ Mega Shopping Marketplace',
        desc: '200+ Booths • Daily Flash Sales • Exclusive Offers',
        sponsors: 'Panda, Danube, Jarir, Saudi Payments'
      },
      zone2: {
        title: '👨‍‍👧 Family Experience Zone',
        desc: 'Kids Crafts • Family Stage Shows • Competitions',
        sponsors: 'Hamleys, Nahdi, Kids Brands'
      },
      zone3: {
        title: '🍽 Food & Dining Zone',
        desc: 'Al Ahsa Restaurants • Food Trucks • Heritage Coffee',
        sponsors: 'AlBaik, Herfy, Nescafe, Red Bull'
      },
      zone4: {
        title: '🎮 Gaming Traffic Driver Zone',
        desc: 'Daily Tournaments • Beat The Pro • Free Play Stations',
        sponsors: 'STC, Mobily, PlayStation, Noon'
      },
      zone5: {
        title: '🌴 Heritage & Local Products',
        desc: 'Date Palm Crafts • Traditional Arts • Folklore',
        sponsors: 'Ministry of Culture, Saudi Tourism, Date Farms'
      },
      zone6: {
        title: '🎤 Live Deals Main Stage',
        desc: 'Daily Shows • Prize Draws • Flash Sale Announcements',
        sponsors: 'Title Sponsor, Telecom, FMCG'
      }
    },
    mechanics: {
      title: 'Conversion Mechanics',
      passport: {
        title: '🗺️ Festival Passport',
        desc: 'Collect stamps from every zone to unlock grand prizes.'
      },
      spend: {
        title: '🏆 Spend & Win',
        desc: 'Every 100 SAR spent = 1 ticket for grand prize draws.'
      },
      flash: {
        title: '⚡ Flash Sale Hour',
        desc: 'Daily 8-9 PM. Exclusive synchronized discounts across all booths.'
      },
      loyalty: {
        title: '🔄 Loyalty Return',
        desc: '3 visits per week = VIP entry + bonus passport stamp.'
      }
    },
    stats: {
      title: 'Festival Numbers',
      visitors: '3K–5K Daily Visitors',
      purchasing: '600K+ SAR Daily Purchasing',
      duration: '4 Weeks × 5 Days',
      booths: '50+ Sponsor Booths'
    },
    back: '← Back to Home',
    register: 'Register Now'
  }
};

export default function EventPage({ params }: { params: Promise<{ locale: string }> }) {
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

      <div className="max-w-7xl mx-auto px-4">
        {/* Back Link */}
        <div className="pt-8">
          <Link href={`/${lang}`} className="text-[#2E5C3A] font-bold hover:underline inline-block">
            {t.back}
          </Link>
        </div>

        {/* Header */}
        <section className="text-center py-16">
          <h1 className="text-5xl font-black text-[#2E5C3A] mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </section>

        {/* Stats Grid */}
        <section className="bg-[#2E5C3A] rounded-3xl p-10 mb-20 text-white">
          <h2 className="text-3xl font-bold text-center mb-10">{t.stats.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-[#D4AF37] mb-2">3K–5K</div>
              <div className="text-sm opacity-80">{t.stats.visitors}</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#D4AF37] mb-2">600K+</div>
              <div className="text-sm opacity-80">{t.stats.purchasing}</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#D4AF37] mb-2">20</div>
              <div className="text-sm opacity-80">{t.stats.duration}</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#D4AF37] mb-2">50+</div>
              <div className="text-sm opacity-80">{t.stats.booths}</div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-[#2E5C3A] mb-10">{t.vision.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#f8f5f0] p-8 rounded-2xl border-l-4 border-[#D4AF37]">
              <h3 className="text-xl font-bold text-[#2E5C3A] mb-2">{t.vision.whyAhsa}</h3>
              <p className="text-gray-600">{t.vision.whyAhsaText}</p>
            </div>
            <div className="bg-[#f8f5f0] p-8 rounded-2xl border-l-4 border-[#D4AF37]">
              <h3 className="text-xl font-bold text-[#2E5C3A] mb-2">{t.vision.whySummer}</h3>
              <p className="text-gray-600">{t.vision.whySummerText}</p>
            </div>
            <div className="bg-[#f8f5f0] p-8 rounded-2xl border-l-4 border-[#D4AF37]">
              <h3 className="text-xl font-bold text-[#2E5C3A] mb-2">{t.vision.whyFamilies}</h3>
              <p className="text-gray-600">{t.vision.whyFamiliesText}</p>
            </div>
            <div className="bg-[#f8f5f0] p-8 rounded-2xl border-l-4 border-[#D4AF37]">
              <h3 className="text-xl font-bold text-[#2E5C3A] mb-2">{t.vision.whyGaming}</h3>
              <p className="text-gray-600">{t.vision.whyGamingText}</p>
            </div>
          </div>
        </section>

        {/* Zones Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-[#2E5C3A] mb-10">{t.zones.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Zone 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#D4AF37] transition">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-bold text-[#2E5C3A] mb-2">{t.zones.zone1.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{t.zones.zone1.desc}</p>
              <div className="text-xs text-gray-500 bg-gray-100 p-2 rounded">
                <strong>{isAr ? 'الرعاة:' : 'Sponsors:'}</strong> {t.zones.zone1.sponsors}
              </div>
            </div>
            {/* Zone 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#D4AF37] transition">
              <div className="text-4xl mb-4">👨‍‍👧</div>
              <h3 className="text-xl font-bold text-[#2E5C3A] mb-2">{t.zones.zone2.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{t.zones.zone2.desc}</p>
              <div className="text-xs text-gray-500 bg-gray-100 p-2 rounded">
                <strong>{isAr ? 'الرعاة:' : 'Sponsors:'}</strong> {t.zones.zone2.sponsors}
              </div>
            </div>
            {/* Zone 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#D4AF37] transition">
              <div className="text-4xl mb-4">🍽</div>
              <h3 className="text-xl font-bold text-[#2E5C3A] mb-2">{t.zones.zone3.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{t.zones.zone3.desc}</p>
              <div className="text-xs text-gray-500 bg-gray-100 p-2 rounded">
                <strong>{isAr ? 'الرعاة:' : 'Sponsors:'}</strong> {t.zones.zone3.sponsors}
              </div>
            </div>
            {/* Zone 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#D4AF37] transition">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-[#2E5C3A] mb-2">{t.zones.zone4.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{t.zones.zone4.desc}</p>
              <div className="text-xs text-gray-500 bg-gray-100 p-2 rounded">
                <strong>{isAr ? 'الرعاة:' : 'Sponsors:'}</strong> {t.zones.zone4.sponsors}
              </div>
            </div>
            {/* Zone 5 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#D4AF37] transition">
              <div className="text-4xl mb-4">🌴</div>
              <h3 className="text-xl font-bold text-[#2E5C3A] mb-2">{t.zones.zone5.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{t.zones.zone5.desc}</p>
              <div className="text-xs text-gray-500 bg-gray-100 p-2 rounded">
                <strong>{isAr ? 'الرعاة:' : 'Sponsors:'}</strong> {t.zones.zone5.sponsors}
              </div>
            </div>
            {/* Zone 6 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#D4AF37] transition">
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="text-xl font-bold text-[#2E5C3A] mb-2">{t.zones.zone6.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{t.zones.zone6.desc}</p>
              <div className="text-xs text-gray-500 bg-gray-100 p-2 rounded">
                <strong>{isAr ? 'الرعاة:' : 'Sponsors:'}</strong> {t.zones.zone6.sponsors}
              </div>
            </div>
          </div>
        </section>

        {/* Mechanics Section */}
        <section className="mb-20 bg-[#1a1a2e] text-white rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#D4AF37]">{t.mechanics.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#2a2a3e] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">{t.mechanics.passport.title}</h3>
              <p className="text-gray-300">{t.mechanics.passport.desc}</p>
            </div>
            <div className="bg-[#2a2a3e] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">{t.mechanics.spend.title}</h3>
              <p className="text-gray-300">{t.mechanics.spend.desc}</p>
            </div>
            <div className="bg-[#2a2a3e] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">{t.mechanics.flash.title}</h3>
              <p className="text-gray-300">{t.mechanics.flash.desc}</p>
            </div>
            <div className="bg-[#2a2a3e] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">{t.mechanics.loyalty.title}</h3>
              <p className="text-gray-300">{t.mechanics.loyalty.desc}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pb-20">
          <Link 
            href={`/${lang}/sponsors`}
            className="inline-block bg-[#D4AF37] text-[#1a1a2e] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg"
          >
            {t.register}
          </Link>
        </div>
      </div>
    </main>
  );
}
