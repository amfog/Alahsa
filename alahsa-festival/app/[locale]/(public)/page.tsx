import Link from 'next/link';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  
  return (
    <main className="min-h-screen bg-white" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6">
        <div className="font-bold text-2xl text-[#2E5C3A]">
          {isAr ? '🌴 مهرجان الأحساء للتسوق' : '🌴 Al Ahsa Shopping Festival'}
        </div>
        <div className="flex gap-6 text-sm md:text-base">
          <Link href={`/${locale}/event`} className="text-[#2E5C3A] font-bold hover:underline">{isAr ? 'عن المهرجان' : 'About'}</Link>
          <Link href={`/${locale}/schedule`} className="text-[#2E5C3A] font-bold hover:underline">{isAr ? 'الجدول' : 'Schedule'}</Link>
          <Link href={`/${locale}/sponsors`} className="text-[#2E5C3A] font-bold hover:underline">{isAr ? 'الرعاة' : 'Sponsors'}</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-[#f8f5f0] to-white">
        <h1 className="text-5xl font-black text-[#2E5C3A] mb-4">
          {isAr ? '🎉 مهرجان الأحساء للتسوق' : '🎉 Al Ahsa Shopping Festival'}
        </h1>
        <p className="text-2xl font-bold text-[#D4AF37] mb-6">
          {isAr ? '10 يونيو — 10 يوليو 2026' : 'June 10 – July 10, 2026'}
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          {isAr 
            ? '4 أسابيع • 5 أيام أسبوعياً • الخميس إلى الاثنين • 4 م – 11 م\nمنصة تنشيط اقتصادي تجمع العائلات، الشباب، والتجار في قلب الأحساء' 
            : '4 weeks • 5 days a week • Thu – Mon • 4 PM – 11 PM\nAn economic activation platform uniting families, youth, and merchants in the heart of Al Ahsa.'}
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link href={`/${locale}/apply`} className="bg-[#D4AF37] text-[#1a1a2e] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg">
            {isAr ? 'احجز بوث الآن' : 'Book a Booth Now'}
          </Link>
          <Link href={`/${locale}/schedule`} className="bg-[#2E5C3A] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg">
            {isAr ? 'شاهد الجدول' : 'View Schedule'}
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2E5C3A] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
          <div>
            <div className="text-3xl font-black text-[#D4AF37]">3K–5K</div>
            <div className="text-sm opacity-80">{isAr ? 'زائر يومياً' : 'Daily Visitors'}</div>
          </div>
          <div>
            <div className="text-3xl font-black text-[#D4AF37]">600K+ ر.س</div>
            <div className="text-sm opacity-80">{isAr ? 'قدرة شرائية يومية' : 'Daily Purchasing Power'}</div>
          </div>
          <div>
            <div className="text-3xl font-black text-[#D4AF37]">4</div>
            <div className="text-sm opacity-80">{isAr ? 'أسابيع من المرح' : 'Weeks of Fun'}</div>
          </div>
          <div>
            <div className="text-3xl font-black text-[#D4AF37]">50+</div>
            <div className="text-sm opacity-80">{isAr ? 'بوث تجارية' : 'Commercial Booths'}</div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="text-center py-10 text-gray-500 text-sm bg-[#f8f5f0] border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-2">
          <span>{isAr ? 'الموقع بواسطة' : 'Website by'} <a href="https://nexaro.tech" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] font-bold hover:underline">Nexaro.tech</a></span>
          <span className="hidden md:inline text-gray-300">|</span>
          <span>{isAr ? 'الفعالية بواسطة' : 'Event by'} <span className="text-[#2E5C3A] font-bold">The Vicious Esports</span></span>
        </div>
        <p className="text-xs opacity-70">
          {isAr ? '© 2026 مهرجان الأحساء للتسوق. جميع الحقوق محفوظة.' : '© 2026 Al Ahsa Shopping Festival. All rights reserved.'}
        </p>
      </footer>
    </main>
  );
}
