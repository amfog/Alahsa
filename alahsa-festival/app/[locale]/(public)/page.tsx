import Link from 'next/link';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  
  return (
    <main className="min-h-screen bg-[#FAF8F5]" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Simple Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-2xl text-[#1B4D3E]">
            {isAr ? 'نبض الأحساء' : 'Pulse of Al-Ahsa'}
          </div>
          <div className="flex gap-6">
            <Link href={`/${locale}/zones`} className="text-gray-700 hover:text-[#1B4D3E]">
              {isAr ? 'المناطق' : 'Zones'}
            </Link>
            <Link href={`/${locale}/schedule`} className="text-gray-700 hover:text-[#1B4D3E]">
              {isAr ? 'الجدول' : 'Schedule'}
            </Link>
            <Link href={`/${locale}/sponsors`} className="text-gray-700 hover:text-[#1B4D3E]">
              {isAr ? 'الرعاة' : 'Sponsors'}
            </Link>
          </div>
        </div>
      </nav>

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
          
          <div className="flex justify-center gap-4">
            <Link 
              href={`/${locale}/zones`}
              className="bg-[#D4AF37] text-[#1a1a2e] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition"
            >
              {isAr ? 'استكشف المناطق' : 'Explore Zones'}
            </Link>
            <Link 
              href={`/${locale}/register`}
              className="bg-white border-2 border-[#1B4D3E] text-[#1B4D3E] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1B4D3E] hover:text-white transition"
            >
              {isAr ? 'احصل على الكارت' : 'Get Card'}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#1B4D3E] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          <div>
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">١٥K+</div>
            <div className="text-sm">{isAr ? 'زائر متوقع' : 'Expected Visitors'}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">٦</div>
            <div className="text-sm">{isAr ? 'مناطق تجربة' : 'Experience Zones'}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">٣٠</div>
            <div className="text-sm">{isAr ? 'يوماً من الفعاليات' : 'Days of Events'}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">٢</div>
            <div className="text-sm">{isAr ? 'بطولة عالمية' : 'World Cups'}</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1B4D3E] text-white text-center text-sm">
        <div>
          {isAr ? 'الموقع بواسطة' : 'Website by'}{' '}
          <a href="https://project-jelc4.vercel.app" className="text-[#D4AF37] font-bold">
            Nexaro.tech
          </a>
          <span className="mx-2">|</span>
          {isAr ? 'الفعالية بواسطة' : 'Event by'}{' '}
          <span className="font-bold">The Vicious Esports</span>
        </div>
      </footer>
    </main>
  );
}