'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const translations = {
  ar: {
    title: 'سجل للحصول على كارت نبض',
    subtitle: 'احصل على خصومات حصرية، تذاكر سحب، ووصول VIP.',
    benefits: {
      title: 'لماذا تسجل؟',
      items: [
        '💳 كارت نبض مجاني عند التسجيل',
        '🏆 تذاكر سحب يومية على جوائز كبرى',
        '⚡ وصول مبكر لساعة الخصم (٨-٩ م)',
        '🎁 هدايا حصرية عند كل زيارة'
      ]
    },
    tiers: {
      title: 'مستويات الكارت',
      silver: { name: 'فضي', spend: 'حتى ٥٠٠ ر.س', perk: '٥٪ كاش باك + سحب يومي' },
      gold: { name: 'ذهبي', spend: '٥٠٠-١٥٠٠ ر.س', perk: '٨٪ كاش باك + منطقة VIP' },
      diamond: { name: 'ماسي', spend: '١٥٠٠+ ر.س', perk: '١٢٪ كاش باك + حفل الختام' }
    },
    form: {
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الجوال',
      age: 'الفئة العمرية',
      ageOptions: ['أقل من ١٨', '١٨-٣٠', '٣١-٥٠', 'أكبر من ٥٠'],
      interests: 'الاهتمامات',
      interestOptions: ['تراث وثقافة', 'ألعاب إلكترونية', 'تسوق وعروض', 'طعام ومأكولات', 'عائلة وأطفال'],
      submit: 'احصل على الكارت',
      submitting: 'جاري التسجيل...',
      success: 'تم التسجيل بنجاح! استلم كارت نبض عند الدخول.',
      error: 'حدث خطأ، حاول مرة أخرى.'
    },
    back: '← العودة للرئيسية'
  },
  en: {
    title: 'Register for Pulse Card',
    subtitle: 'Get exclusive discounts, draw tickets, and VIP access.',
    benefits: {
      title: 'Why Register?',
      items: [
        '💳 Free Pulse Card upon registration',
        '🏆 Daily draw tickets for grand prizes',
        '⚡ Early access to Flash Sale Hour (8-9 PM)',
        '🎁 Exclusive gifts with every visit'
      ]
    },
    tiers: {
      title: 'Card Tiers',
      silver: { name: 'Silver', spend: 'Up to 500 SAR', perk: '5% Cashback + Daily Draw' },
      gold: { name: 'Gold', spend: '500-1500 SAR', perk: '8% Cashback + VIP Zone Access' },
      diamond: { name: 'Diamond', spend: '1500+ SAR', perk: '12% Cashback + Closing Ceremony Invite' }
    },
    form: {
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      age: 'Age Group',
      ageOptions: ['Under 18', '18-30', '31-50', 'Over 50'],
      interests: 'Interests',
      interestOptions: ['Heritage & Culture', 'Gaming & Esports', 'Shopping & Deals', 'Food & Dining', 'Family & Kids'],
      submit: 'Get My Card',
      submitting: 'Registering...',
      success: 'Registration successful! Pick up your Pulse Card at entry.',
      error: 'Something went wrong. Please try again.'
    },
    back: '← Back to Home'
  }
};

export default function RegisterPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const lang = resolvedParams.locale as 'ar' | 'en';
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const t = translations[lang];
  const isAr = lang === 'ar';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      age: formData.get('age'),
      interests: formData.getAll('interests'),
    };

    try {
      // Placeholder for API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2C2416]" dir={isAr ? 'rtl' : 'ltr'}>
      <Navbar locale={lang} isAr={isAr} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Back Link */}
        <Link href={`/${lang}`} className="text-[#1B4D3E] font-bold hover:underline mb-8 inline-block">
          {t.back}
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-[#1B4D3E] mb-4">{t.title}</h1>
          <p className="text-lg text-[#5A4A2A]">{t.subtitle}</p>
        </div>

        {/* Card Tiers Visual */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl border-2 border-[#C0C0C0] text-center">
            <div className="text-2xl font-bold text-[#C0C0C0] mb-2">{t.tiers.silver.name}</div>
            <div className="text-sm text-[#5A4A2A] mb-2">{t.tiers.silver.spend}</div>
            <div className="text-xs text-[#1B4D3E] font-bold">{t.tiers.silver.perk}</div>
          </div>
          <div className="bg-white p-6 rounded-xl border-2 border-[#D4AF37] text-center transform scale-105 shadow-lg">
            <div className="text-2xl font-bold text-[#D4AF37] mb-2">{t.tiers.gold.name}</div>
            <div className="text-sm text-[#5A4A2A] mb-2">{t.tiers.gold.spend}</div>
            <div className="text-xs text-[#1B4D3E] font-bold">{t.tiers.gold.perk}</div>
          </div>
          <div className="bg-white p-6 rounded-xl border-2 border-[#B9F2FF] text-center">
            <div className="text-2xl font-bold text-[#00A8A8] mb-2">{t.tiers.diamond.name}</div>
            <div className="text-sm text-[#5A4A2A] mb-2">{t.tiers.diamond.spend}</div>
            <div className="text-xs text-[#1B4D3E] font-bold">{t.tiers.diamond.perk}</div>
          </div>
        </div>

        {/* Registration Form */}
        {status === 'success' ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl text-center">
            ✅ {t.form.success}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-6 max-w-2xl mx-auto">
            <div>
              <label className="block text-sm font-bold text-[#1B4D3E] mb-2">{t.form.name}</label>
              <input name="name" type="text" required className="w-full px-4 py-3 border border-[#E8E0D4] rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-[#1B4D3E] mb-2">{t.form.email}</label>
                <input name="email" type="email" required className="w-full px-4 py-3 border border-[#E8E0D4] rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1B4D3E] mb-2">{t.form.phone}</label>
                <input name="phone" type="tel" required className="w-full px-4 py-3 border border-[#E8E0D4] rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1B4D3E] mb-2">{t.form.age}</label>
              <select name="age" required className="w-full px-4 py-3 border border-[#E8E0D4] rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent">
                {t.form.ageOptions.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1B4D3E] mb-4">{t.form.interests}</label>
              <div className="grid md:grid-cols-2 gap-3">
                {t.form.interestOptions.map((opt, i) => (
                  <label key={i} className="flex items-center gap-3 p-3 rounded-lg border border-[#E8E0D4] hover:bg-[#FAF8F5] cursor-pointer">
                    <input type="checkbox" name="interests" value={opt} className="w-5 h-5 text-[#1B4D3E] rounded focus:ring-[#D4AF37]" />
                    <span className="text-sm text-[#5A4A2A]">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" disabled={status === 'submitting'} className="w-full bg-[#1B4D3E] text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
              {status === 'submitting' ? t.form.submitting : t.form.submit}
            </button>
          </form>
        )}

        {status === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl text-center mt-6">
            ❌ {t.form.error}
          </div>
        )}

      </div>
      <Footer locale={lang} isAr={isAr} />
    </main>
  );
}
