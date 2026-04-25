import Link from 'next/link';
import { FadeUp, Stagger, StaggerItem, PulseBeat, HoverLift } from '@/components/ui/Animations';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2C2416] overflow-x-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FAF8F5]/80 backdrop-blur-md border-b border-[#E8E0D4] px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <PulseLogo size={48} />
            <div className="font-bold text-xl text-[#1B4D3E]">
              {isAr ? 'نبض الأحساء' : 'Pulse of Al-Ahsa'}
            </div>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-bold text-[#2C2416]">
            <Link href={`/${locale}/zones`} className="hover:text-[#1B4D3E] transition-colors">{isAr ? 'المناطق' : 'Zones'}</Link>
            <Link href={`/${locale}/schedule`} className="hover:text-[#1B4D3E] transition-colors">{isAr ? 'الجدول' : 'Schedule'}</Link>
            <Link href={`/${locale}/sponsors`} className="hover:text-[#1B4D3E] transition-colors">{isAr ? 'الرعاة' : 'Sponsors'}</Link>
          </div>
          <Link 
            href={`/${locale}/register`}
            className="bg-[#1B4D3E] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#143A2E] transition-all hover:scale-105 active:scale-95"
          >
            {isAr ? 'سجل الآن' : 'Register'}
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <FadeUp>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <PulseBeat>
              <div className="inline-block mb-8">
                <PulseLogo size={140} />
              </div>
            </PulseBeat>
            <h1 className="text-5xl md:text-7xl font-black text-[#1B4D3E] mb-6 leading-tight tracking-tight">
              {isAr ? 'نبض الأحساء' : 'Pulse of Al-Ahsa'}
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-4">
              {isAr ? 'من التراث إلى البطولات العالمية' : 'From Heritage to World Championships'}
            </p>
            <p className="text-lg text-[#5A4A2A] mb-10 max-w-2xl mx-auto leading-relaxed">
              {isAr 
                ? '٣٠ يوماً من المهرجانات في الأحساء، المملكة العربية السعودية، تجمع بين تراث اليونسكو وثقافة النخيل والتجارة وكأس العالم للألعاب الإلكترونية.'
                : 'A 30-day festival in Al-Ahsa, Saudi Arabia, fusing UNESCO heritage, date palm culture, commerce, and the World Cup for Electronic Games.'}
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
              <Link 
                href={`/${locale}/zones`}
                className="bg-[#D4AF37] text-[#1a1a2e] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                {isAr ? 'استكشف المناطق الست' : 'Explore 6 Zones'}
              </Link>
              <Link 
                href={`/${locale}/schedule`}
                className="bg-white border-2 border-[#1B4D3E] text-[#1B4D3E] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1B4D3E] hover:text-white transition-all active:scale-95"
              >
                {isAr ? 'شاهد الجدول الزمني' : 'View Schedule'}
              </Link>
            </div>

            {/* Festival Badge */}
            <FadeUp delay={0.3}>
              <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-md border border-[#E8E0D4]">
                <span className="text-[#1B4D3E] font-bold">{isAr ? 'منتصف يونيو – يوليو ٢٠٢٦' : 'Mid June – July 2026'}</span>
                <span className="text-[#D4AF37]">|</span>
                <span className="text-[#5A4A2A]">{isAr ? '٣٠ يوماً' : '30 Days'}</span>
                <span className="text-[#D4AF37]">|</span>
                <span className="text-[#5A4A2A]">{isAr ? 'الأحساء، السعودية' : 'Al-Ahsa, KSA'}</span>
              </div>
            </FadeUp>
          </div>
        </FadeUp>
      </section>

      {/* Stats Section */}
      <Stagger className="py-16 bg-[#1B4D3E] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          {[
            { val: '١٥K+', label: isAr ? 'زائر متوقع' : 'Expected Visitors' },
            { val: '٦', label: isAr ? 'مناطق تجربة' : 'Experience Zones' },
            { val: '٣٠', label: isAr ? 'يوماً من الفعاليات' : 'Days of Events' },
            { val: '٢', label: isAr ? 'بطولة عالمية' : 'World Cups' },
          ].map((stat, i) => (
            <StaggerItem key={i}>
              <HoverLift className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="text-4xl font-black text-[#D4AF37] mb-2">{stat.val}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </HoverLift>
            </StaggerItem>
          ))}
        </div>
      </Stagger>

      {/* 6 Zones Preview */}
      <section className="py-24 px-6 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-[#1B4D3E] mb-4">{isAr ? 'المناطق الست' : '6 Experience Zones'}</h2>
              <p className="text-lg text-[#5A4A2A] max-w-2xl mx-auto">
                {isAr 
                  ? '٣٠ يوماً متتالياً من التراث والبطولات العالمية. كل منطقة لها هويتها الخاصة وتجمع بين الأصالة والحداثة.'
                  : '30 consecutive days of heritage meets world championships. Each zone has its own identity fusing tradition with modern esports.'}
              </p>
            </div>
          </FadeUp>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { emoji: '🍽️', ar: 'المطبخ الأصيل', en: 'Heritage Cuisine', arDesc: '٥ أيام من الطبخ الأصيل...', enDesc: '5 days of authentic cuisine...' },
              { emoji: '🎨', ar: 'الحرفيين', en: 'Artisans & Crafts', arDesc: '٥ أيام لعرض الحرف...', enDesc: '5 days of handicrafts...' },
              { emoji: '🎵', ar: 'الموسيقى الشعبية', en: 'Folk Music & Dates', arDesc: '٥ أيام من الموسيقى...', enDesc: '5 days of folk music...' },
              { emoji: '🏛️', ar: 'تاريخ الأحساء', en: 'History', arDesc: '٥ أيام لاستكشاف...', enDesc: '5 days exploring...' },
              { emoji: '🌴', ar: 'النخلة والتمور', en: 'Date Palm & Dates', arDesc: '٥ أيام للاحتفاء...', enDesc: '5 days celebrating...' },
              { emoji: '🎮', ar: 'منطقة المشجعين', en: 'Fan Zone', arDesc: '٥ أيام من الألعاب...', enDesc: '5 days of esports...' },
            ].map((zone, i) => (
              <StaggerItem key={i}>
                <HoverLift className="bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#D4AF37] transition-all group cursor-pointer">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{zone.emoji}</div>
                  <h3 className="text-2xl font-bold text-[#1B4D3E] mb-3">{isAr ? zone.ar : zone.en}</h3>
                  <p className="text-[#5A4A2A] mb-6">{isAr ? zone.arDesc : zone.enDesc}</p>
                  <Link 
                    href={`/${locale}/zones/${i === 0 ? 'heritage-cuisine' : i === 1 ? 'artisans' : i === 2 ? 'folk-music' : i === 3 ? 'history' : i === 4 ? 'date-palm' : 'fan-zone'}`}
                    className="text-[#D4AF37] font-bold hover:underline inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    {isAr ? 'اكتشف المزيد' : 'Explore Zone'} <span className="transition-transform group-hover:translate-x-1">{isAr ? '←' : '→'}</span>
                  </Link>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Sponsors CTA */}
      <FadeUp className="py-20 px-6 bg-[#F4E4C1]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">
            {isAr ? 'كن شريكاً في النجاح' : 'Partner With Us'}
          </h2>
          <p className="text-lg text-[#5A4A2A] mb-8">
            {isAr 
              ? 'انضم إلى أكثر من ٥٠ علامة تجارية في أكبر مهرجان اقتصادي في الأحساء. باقات راعٍ مخصصة لكل ميزانية.'
              : 'Join 50+ brands at Al-Ahsa\'s biggest economic festival. Custom sponsorship packages for every budget.'}
          </p>
          <HoverLift>
            <Link 
              href={`/${locale}/sponsors`}
              className="inline-block bg-[#1B4D3E] text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              {isAr ? 'عرض باقات الرعاية' : 'View Sponsorship Packages'}
            </Link>
          </HoverLift>
        </div>
      </FadeUp>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#1B4D3E] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <FadeUp>
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
          </FadeUp>
        </div>
      </footer>
    </main>
  );
}

// Improved Pulse Logo Component - Clean & Professional
function PulseLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Palm Tree Trunk */}
      <rect x="46" y="52" width="8" height="28" fill="#1B4D3E" rx="2"/>
      
      {/* Palm Fronds - Left */}
      <path d="M50 52 Q38 42 32 46 Q38 44 50 52" fill="#1B4D3E" opacity="0.95"/>
      <path d="M50 50 Q35 38 28 41 Q36 38 50 50" fill="#1B4D3E" opacity="0.85"/>
      <path d="M50 48 Q36 34 30 36 Q37 34 50 48" fill="#1B4D3E" opacity="0.75"/>
      
      {/* Palm Fronds - Right */}
      <path d="M50 52 Q62 42 68 46 Q62 44 50 52" fill="#1B4D3E" opacity="0.95"/>
      <path d="M50 50 Q65 38 72 41 Q64 38 50 50" fill="#1B4D3E" opacity="0.85"/>
      <path d="M50 48 Q64 34 70 36 Q63 34 50 48" fill="#1B4D3E" opacity="0.75"/>
      
      {/* Center Frond */}
      <path d="M50 50 L50 28 Q52 36 50 50" fill="#1B4D3E"/>
      <path d="M50 50 L48 32 Q50 38 50 50" fill="#1B4D3E" opacity="0.85"/>
      <path d="M50 50 L52 32 Q50 38 50 50" fill="#1B4D3E" opacity="0.85"/>
      
      {/* Pulse/Heartbeat Line - Gold */}
      <path d="M18 52 L26 52 L30 38 L36 66 L42 52 L46 52 L50 24 L54 80 L58 52 L62 52 L68 42 L74 62 L82 62" 
            stroke="#D4AF37" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"/>
      
      {/* Dates - Gold Dots */}
      <circle cx="36" cy="44" r="2.5" fill="#D4AF37"/>
      <circle cx="64" cy="44" r="2.5" fill="#D4AF37"/>
      <circle cx="50" cy="36" r="2.5" fill="#D4AF37"/>
    </svg>
  );
}
