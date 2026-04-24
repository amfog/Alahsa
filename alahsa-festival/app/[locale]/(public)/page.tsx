import Link from 'next/link';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2C2416]" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E0D4] px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <PulseLogo size={40} />
            <div className="font-bold text-xl text-[#1B4D3E]">
              {isAr ? 'نبض الأحساء' : 'Pulse of Al-Ahsa'}
            </div>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-bold text-[#2C2416]">
            <Link href={`/${locale}/zones`} className="hover:text-[#1B4D3E] transition">{isAr ? 'المناطق' : 'Zones'}</Link>
            <Link href={`/${locale}/schedule`} className="hover:text-[#1B4D3E] transition">{isAr ? 'الجدول' : 'Schedule'}</Link>
            <Link href={`/${locale}/sponsors`} className="hover:text-[#1B4D3E] transition">{isAr ? 'الرعاة' : 'Sponsors'}</Link>
          </div>
          <Link 
            href={`/${locale}/register`}
            className="bg-[#1B4D3E] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#143A2E] transition"
          >
            {isAr ? 'سجل الآن' : 'Register'}
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/islamic-pattern.png')"
        }}></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <PulseLogo size={80} />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#1B4D3E] mb-6 leading-tight">
            {isAr ? 'نبض الأحساء' : 'Pulse of Al-Ahsa'}
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-4">
            {isAr ? 'من التراث إلى البطولات العالمية' : 'From Heritage to World Championships'}
          </p>
          <p className="text-lg text-[#5A4A2A] mb-8 max-w-2xl mx-auto">
            {isAr 
              ? '٣٠ يوماً من المهرجانات في الأحساء، المملكة العربية السعودية، تجمع بين تراث اليونسكو وثقافة النخيل والتجارة وكأس العالم للألعاب الإلكترونية.'
              : 'A 30-day festival in Al-Ahsa, Saudi Arabia, fusing UNESCO heritage, date palm culture, commerce, and the World Cup for Electronic Games.'}
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <Link 
              href={`/${locale}/zones`}
              className="bg-[#D4AF37] text-[#1a1a2e] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg"
            >
              {isAr ? 'استكشف المناطق الست' : 'Explore 6 Zones'}
            </Link>
            <Link 
              href={`/${locale}/schedule`}
              className="bg-white border-2 border-[#1B4D3E] text-[#1B4D3E] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1B4D3E] hover:text-white transition"
            >
              {isAr ? 'شاهد الجدول الزمني' : 'View Schedule'}
            </Link>
          </div>

          {/* Festival Badge */}
          <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-md border border-[#E8E0D4]">
            <span className="text-[#1B4D3E] font-bold">{isAr ? 'منتصف يونيو – يوليو ٢٠٢٦' : 'Mid June – July 2026'}</span>
            <span className="text-[#D4AF37]">|</span>
            <span className="text-[#5A4A2A]">{isAr ? '٣٠ يوماً' : '30 Days'}</span>
            <span className="text-[#D4AF37]">|</span>
            <span className="text-[#5A4A2A]">{isAr ? 'الأحساء، السعودية' : 'Al-Ahsa, KSA'}</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1B4D3E] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          <div>
            <div className="text-4xl font-black text-[#D4AF37] mb-2">١٥٠K+</div>
            <div className="text-sm opacity-80">{isAr ? 'زائر متوقع' : 'Expected Visitors'}</div>
          </div>
          <div>
            <div className="text-4xl font-black text-[#D4AF37] mb-2">٦</div>
            <div className="text-sm opacity-80">{isAr ? 'مناطق تجربة' : 'Experience Zones'}</div>
          </div>
          <div>
            <div className="text-4xl font-black text-[#D4AF37] mb-2">٣٠</div>
            <div className="text-sm opacity-80">{isAr ? 'يوماً من الفعاليات' : 'Days of Events'}</div>
          </div>
          <div>
            <div className="text-4xl font-black text-[#D4AF37] mb-2">٢</div>
            <div className="text-sm opacity-80">{isAr ? 'بطولة عالمية' : 'World Cups'}</div>
          </div>
        </div>
      </section>

      {/* 6 Zones Preview */}
      <section className="py-24 px-6 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1B4D3E] mb-4">{isAr ? 'المناطق الست' : '6 Experience Zones'}</h2>
            <p className="text-lg text-[#5A4A2A] max-w-2xl mx-auto">
              {isAr 
                ? '٣٠ يوماً متتالياً من التراث والبطولات العالمية. كل منطقة لها هويتها الخاصة وتجمع بين الأصالة والحداثة.'
                : '30 consecutive days of heritage meets world championships. Each zone has its own identity fusing tradition with modern esports.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {zones.map((zone, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#D4AF37] transition group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition">{zone.emoji}</div>
                <h3 className="text-2xl font-bold text-[#1B4D3E] mb-3">{isAr ? zone.arName : zone.enName}</h3>
                <p className="text-[#5A4A2A] mb-6">{isAr ? zone.arDesc : zone.enDesc}</p>
                <Link 
                  href={`/${locale}/zones/${zone.id}`}
                  className="text-[#D4AF37] font-bold hover:underline"
                >
                  {isAr ? 'اكتشف المزيد ←' : 'Explore Zone →'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors CTA */}
      <section className="py-20 px-6 bg-[#F4E4C1]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">
            {isAr ? 'كن شريكاً في النجاح' : 'Partner With Us'}
          </h2>
          <p className="text-lg text-[#5A4A2A] mb-8">
            {isAr 
              ? 'انضم إلى أكثر من ٥٠ علامة تجارية في أكبر مهرجان اقتصادي في الأحساء. باقات راعٍ مخصصة لكل ميزانية.'
              : 'Join 50+ brands at Al-Ahsa\'s biggest economic festival. Custom sponsorship packages for every budget.'}
          </p>
          <Link 
            href={`/${locale}/sponsors`}
            className="inline-block bg-[#1B4D3E] text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg"
          >
            {isAr ? 'عرض باقات الرعاية' : 'View Sponsorship Packages'}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#1B4D3E] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
            <div className="font-bold text-xl">نبض الأحساء</div>
            <span className="hidden md:inline text-[#D4AF37]">|</span>
            <div className="text-sm text-[#E8E0D4]">
              {isAr ? 'الموقع بواسطة' : 'Website by'} <a href="https://nexaro.tech" target="_blank" className="text-[#D4AF37] font-bold hover:underline">Nexaro.tech</a>
              <span className="mx-2">|</span>
              {isAr ? 'الفعالية بواسطة' : 'Event by'} <span className="font-bold">The Vicious Esports</span>
            </div>
          </div>
          <p className="text-xs text-[#A89B8A]">
            © 2026 {isAr ? 'نبض الأحساء. جميع الحقوق محفوظة.' : 'Pulse of Al-Ahsa. All rights reserved.'}
          </p>
        </div>
      </footer>
    </main>
  );
}

// Pulse Logo Component
function PulseLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 50 L35 50 L42 30 L50 70 L58 30 L65 50 L80 50" stroke="#1B4D3E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M45 50 Q40 40 35 50 Q40 45 45 50" fill="#1B4D3E" opacity="0.8"/>
      <path d="M55 50 Q60 40 65 50 Q60 45 55 50" fill="#1B4D3E" opacity="0.8"/>
      <path d="M50 50 L50 35 Q52 40 50 50" fill="#1B4D3E"/>
      <rect x="48" y="50" width="4" height="15" fill="#D4AF37" rx="1"/>
      <circle cx="38" cy="42" r="2" fill="#D4AF37"/>
      <circle cx="62" cy="42" r="2" fill="#D4AF37"/>
    </svg>
  );
}

// Zones Data
const zones = [
  { id: 'heritage-cuisine', emoji: '🍽️', arName: 'المطبخ الأصيل', enName: 'Heritage Cuisine', arDesc: '٥ أيام من الطبخ الأصيل، ورش عمل النخيل، وتجربة القهوة السعودية.', enDesc: '5 days of authentic cuisine, palm workshops, and Saudi coffee experience.' },
  { id: 'artisans', emoji: '🎨', arName: 'الحرفيين', enName: 'Artisans & Crafts', arDesc: '٥ أيام لعرض الحرف اليدوية، ورش العمل، وتجربة الصناعة المحلية.', enDesc: '5 days of handicrafts, workshops, and local manufacturing experience.' },
  { id: 'folk-music', emoji: '🎵', arName: 'الموسيقى الشعبية', enName: 'Folk Music & Dates', arDesc: '٥ أيام من الموسيقى الشعبية، الرقصات، وتجربة التمور الفاخرة.', enDesc: '5 days of folk music, dances, and premium date experience.' },
  { id: 'history', emoji: '🏛️', arName: 'تاريخ الأحساء', enName: 'History', arDesc: '٥ أيام لاستكشاف تراث الأحساء، المتاحف، والواقع الافتراضي.', enDesc: '5 days exploring Al-Ahsa heritage, museums, and VR experiences.' },
  { id: 'date-palm', emoji: '🌴', arName: 'النخلة والتمور', enName: 'Date Palm & Dates', arDesc: '٥ أيام للاحتفاء بالنخلة، أنواع التمور، والفوائد الصحية.', enDesc: '5 days celebrating date palms, date varieties, and health benefits.' },
  { id: 'fan-zone', emoji: '🎮', arName: 'منطقة المشجعين', enName: 'Fan Zone & Modern Al-Ahsa', arDesc: '٥ أيام من الألعاب الإلكترونية، كرة القدم، والتسوق الحديث.', enDesc: '5 days of esports, football, and modern shopping experiences.' },
];
