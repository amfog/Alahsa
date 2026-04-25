import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return (
    <main className="min-h-screen bg-[#FAF8F5]" dir={isAr ? 'rtl' : 'ltr'}>
      <Navbar locale={locale} isAr={isAr} />

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-[#1B4D3E] mb-6">
            {isAr ? 'نبض الأحساء' : 'Pulse of Al-Ahsa'}
          </h1>
          <p className="text-2xl text-[#D4AF37] mb-4">
            {isAr ? 'من التراث إلى البطولات العالمية' : 'From Heritage to World Championships'}
          </p>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            {isAr
              ? '٣٠ يوماً من المهرجانات في الأحساء، المملكة العربية السعودية'
              : '30 days of festival in Al-Ahsa, Saudi Arabia'}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/register`}
              className="bg-[#D4AF37] text-[#1a1a2e] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition"
            >
              {isAr ? 'احصل على الكارت' : 'Get Card'}
            </Link>
            <Link
              href={`/${locale}/zones`}
              className="bg-[#1B4D3E] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#163d31] transition"
            >
              {isAr ? 'استكشف المناطق' : 'Explore Zones'}
            </Link>
            <Link
              href={`/${locale}/al-ahsa`}
              className="bg-white border-2 border-[#1B4D3E] text-[#1B4D3E] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1B4D3E] hover:text-white transition"
            >
              {isAr ? 'اكتشف الأحساء' : 'Discover Al-Ahsa'}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#1B4D3E] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          <div>
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">٢</div>
            <div className="text-sm">{isAr ? 'بطولة عالمية' : 'World Cups'}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">٣٠</div>
            <div className="text-sm">{isAr ? 'يوماً من الفعاليات' : 'Days of Events'}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">٦</div>
            <div className="text-sm">{isAr ? 'مناطق تجربة' : 'Experience Zones'}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">+١٥K</div>
            <div className="text-sm">{isAr ? 'زائر متوقع' : 'Expected Visitors'}</div>
          </div>
        </div>
      </section>

      <Footer locale={locale} isAr={isAr} />
    </main>
  );
}
