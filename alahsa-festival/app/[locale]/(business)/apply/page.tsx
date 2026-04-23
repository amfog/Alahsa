'use client';

import { useState, use } from 'react';
import Link from 'next/link';

const translations = {
  ar: {
    title: 'تسجيل تاجر / راعي',
    subtitle: 'احجز بوثتك في مهرجان الأحساء للتسوق 2026',
    form: {
      companyName: 'اسم الشركة / المتجر',
      contactName: 'اسم المسؤول',
      email: 'البريد الإلكتروني',
      phone: 'رقم الجوال',
      tier: 'نوع المشاركة',
      tierOptions: ['تاجر محلي (من 5,000 ر.س)', 'راعي منطقة (مخصص)', 'الراعي الرئيسي (حصرية)'],
      boothSize: 'حجم البوث المطلوب',
      boothOptions: ['3x3 م (قياسي)', '3x6 م (كبير)', '6x6 م (مميز)'],
      description: 'نبذة عن منتجاتك/خدماتك',
      submit: 'إرسال الطلب',
      submitting: 'جاري الإرسال...',
      success: 'تم استلام طلبك بنجاح! سنتواصل معك خلال 48 ساعة.',
      error: 'حدث خطأ، حاول مرة أخرى.',
    },
    back: '← العودة للرئيسية',
  },
  en: {
    title: 'Merchant / Sponsor Registration',
    subtitle: 'Book your booth at Al Ahsa Shopping Festival 2026',
    form: {
      companyName: 'Company / Store Name',
      contactName: 'Contact Person',
      email: 'Email Address',
      phone: 'Phone Number',
      tier: 'Participation Tier',
      tierOptions: ['Local Trader (From SAR 5,000)', 'Zone Sponsor (Custom)', 'Title Sponsor (Exclusive)'],
      boothSize: 'Booth Size',
      boothOptions: ['3x3m (Standard)', '3x6m (Large)', '6x6m (Premium)'],
      description: 'Brief description of your products/services',
      submit: 'Submit Application',
      submitting: 'Submitting...',
      success: 'Application submitted successfully! We will contact you within 48 hours.',
      error: 'Something went wrong. Please try again.',
    },
    back: '← Back to Home',
  },
};

export default function ApplyPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const [lang, setLang] = useState<'ar' | 'en'>(resolvedParams.locale as 'ar' | 'en');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const t = translations[lang];
  const isAr = lang === 'ar';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const data = {
      companyName: formData.get('companyName'),
      contactName: formData.get('contactName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      tier: formData.get('tier'),
      boothSize: formData.get('boothSize'),
      description: formData.get('description'),
    };

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const toggleLang = () => setLang(lang === 'ar' ? 'en' : 'ar');

  return (
    <main className="min-h-screen py-20" dir={isAr ? 'rtl' : 'ltr'}>
      <div className={`fixed top-4 ${isAr ? 'left-4' : 'right-4'} z-50`}>
        <button onClick={toggleLang} className="bg-[#D4AF37] text-[#1a1a2e] px-4 py-2 rounded-full font-bold shadow-md hover:scale-105 transition">
          {lang === 'ar' ? 'English' : 'عربي'}
        </button>
      </div>

      <div className="max-w-2xl mx-auto px-4">
        <Link href={`/${lang}`} className="text-[#2E5C3A] font-bold hover:underline mb-8 inline-block">
          {t.back}
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-[#2E5C3A] mb-2">{t.title}</h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        {status === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl mb-6 text-center">
            ✅ {t.form.success}
          </div>
        )}

        {status === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl mb-6 text-center">
            ❌ {t.form.error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
          <div>
            <label className="block text-sm font-bold text-[#2E5C3A] mb-2">{t.form.companyName}</label>
            <input name="companyName" type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent" />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#2E5C3A] mb-2">{t.form.contactName}</label>
            <input name="contactName" type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-[#2E5C3A] mb-2">{t.form.email}</label>
              <input name="email" type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#2E5C3A] mb-2">{t.form.phone}</label>
              <input name="phone" type="tel" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#2E5C3A] mb-2">{t.form.tier}</label>
            <select name="tier" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent">
              {t.form.tierOptions.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#2E5C3A] mb-2">{t.form.boothSize}</label>
            <select name="boothSize" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent">
              {t.form.boothOptions.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#2E5C3A] mb-2">{t.form.description}</label>
            <textarea name="description" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent" />
          </div>

          <button type="submit" disabled={status === 'submitting'} className="w-full bg-[#D4AF37] text-[#1a1a2e] py-4 rounded-xl font-bold text-lg hover:scale-105 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
            {status === 'submitting' ? t.form.submitting : t.form.submit}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm bg-[#f8f5f0] py-4 rounded-xl border border-gray-200">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-1">
            <span>{isAr ? 'الموقع بواسطة' : 'Website by'} <a href="https://nexaro.tech" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] font-bold hover:underline">Nexaro.tech</a></span>
            <span className="hidden md:inline text-gray-300">|</span>
            <span>{isAr ? 'الفعالية بواسطة' : 'Event by'} <span className="text-[#2E5C3A] font-bold">The Vicious Esports</span></span>
          </div>
          <p className="text-xs opacity-70">
            {isAr ? '© 2026 مهرجان الأحساء للتسوق. جميع الحقوق محفوظة.' : '© 2026 Al Ahsa Shopping Festival. All rights reserved.'}
          </p>
        </div>
      </div>
    </main>
  );
}
