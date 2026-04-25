import Link from 'next/link';
import { FadeUp, Stagger, StaggerItem, HoverLift } from '@/components/ui/Animations';
import Navbar from '@/components/ui/Navbar';
import PulseLogo from '@/components/ui/PulseLogo';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2C2416] overflow-x-hidden font-sans" dir={isAr ? 'rtl' : 'ltr'}>
      <Navbar locale={locale} isAr={isAr} />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-6 overflow-hidden">
        <FadeUp>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-block mb-8">
              <PulseLogo size={140} />
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-[#1B4D3E] mb-6 leading-tight tracking-tight">
              {isAr ? 'نبض الأحساء' : 'Pulse of Al-Ahsa'}
            </h1>
            <p className="text-xl md:text-3xl font-bold text-[#D4AF37] mb-6">
              {isAr ? 'من التراث إلى البطولات العالمية' : 'From Heritage to World Championships'}
            </p>
            <p className="text-base md:text-lg text-[#5A4A2A] mb-10 max-w-2xl mx-auto leading-relaxed">
              {isAr 
                ? '٣٠ يوماً من المهرجانات في الأحساء، المملكة العربية السعودية، تجمع بين تراث اليونسكو وثقافة النخيل والتجارة وكأس العالم للألعاب الإلكترونية.'
                : 'A 30-day festival in Al-Ahsa, Saudi Arabia, fusing UNESCO heritage, date palm culture, commerce, and the World Cup for Electronic Games.'}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href={`/${locale}/zones`} className="bg-[#D4AF37] text-[#1a1a2e] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg active:scale-95">
                {isAr ? 'استكشف المناطق' : 'Explore Zones'}
              </Link>
              <Link href={`/${locale}/register`} className="bg-white border-2 border-[#1B4D3E] text-[#1B4D3E] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1B4D3E] hover:text-white transition active:scale-95">
                {isAr ? 'احصل على الكارت' : 'Get Pulse Card'}
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Treasure Hunt Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#1B4D3E] to-[#143A2E] text-white relative overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#D4AF37] rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#00F5FF] rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
          <FadeUp>
            <div>
              <span className="inline-block bg-[#D4AF37] text-[#1a1a2e] px-3 py-1 rounded-full text-xs font-bold mb-4">
                {isAr ? '🧩 للأطفال والعائلات' : '🧩 For Families & Kids'}
              </span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                {isAr ? 'مغامرة الكنز' : 'Treasure Hunt Adventure'}
              </h2>
              <p className="text-[#E8E0D4] mb-6 text-lg">
                {isAr 
                  ? 'انطلق في رحلة ممتعة عبر المناطق الست! اجمع الأختام، حل الألغاز التراثية، واكسب جوائز حصرية عند صندوق الكنز.'
                  : 'Embark on a fun journey through the 6 zones! Collect stamps, solve heritage riddles, and win exclusive prizes at the Treasure Chest.'}
              </p>
              <Link href={`/${locale}/treasure-hunt`} className="inline-flex items-center gap-2 bg-white text-[#1B4D3E] px-6 py-3 rounded-xl font-bold hover:bg-[#F4E4C1] transition">
                {isAr ? 'ابدأ المغامرة ←' : 'Start Adventure →'}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Stats Section */}
      <Stagger className="py-16 bg-[#1B4D3E] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-6">
          {[
            { val: '١٥K+', label: isAr ? 'زائر متوقع' : 'Expected Visitors' },
            { val: '٦', label: isAr ? 'مناطق تجربة' : 'Experience Zones' },
            { val: '٣٠', label: isAr ? 'يوماً من الفعاليات' : 'Days of Events' },
            { val: '٢', label: isAr ? 'بطولة عالمية' : 'World Cups' },
          ].map((stat, i) => (
            <StaggerItem key={i}>
              <HoverLift className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="text-3xl md:text-4xl font-black text-[#D4AF37] mb-2">{stat.val}</div>
                <div className="text-sm md:text-base opacity-80">{stat.label}</div>
              </HoverLift>
            </StaggerItem>
          ))}
        </div>
      </Stagger>

      {/* Sponsor Preview */}
      <section className="py-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B4D3E] mb-4">{isAr ? 'فرص الرعاية' : 'Sponsorship'}</h2>
          </FadeUp>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: isAr ? 'بلاتينيوم' : 'Platinum', color: 'bg-[#1B4D3E] text-white' },
              { name: isAr ? 'ذهبي' : 'Gold', color: 'bg-[#D4AF37] text-[#1a1a2e]' },
              { name: isAr ? 'فضي' : 'Silver', color: 'bg-gray-200 text-[#5A4A2A]' },
              { name: isAr ? 'شريك محلي' : 'Local', color: 'bg-[#F4E4C1] text-[#5A4A2A]' },
            ].map((tier, i) => (
              <StaggerItem key={i}>
                <HoverLift className={`${tier.color} p-6 rounded-xl shadow-lg text-center`}>
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <Link href={`/${locale}/sponsors`} className="text-sm font-bold underline hover:opacity-80">{isAr ? 'المزيد' : 'Details'}</Link>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#1B4D3E] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <FadeUp>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
              <div className="font-bold text-xl">نبض الأحساء</div>
              <span className="hidden md:inline text-[#D4AF37]">|</span>
              <div className="text-sm text-[#E8E0D4]">
                {isAr ? 'الموقع بواسطة' : 'Website by'} <a href="https://project-jelc4.vercel.app" target="_blank" className="text-[#D4AF37] font-bold hover:underline">Nexaro.tech</a>
                <span className="mx-2">|</span>
                {isAr ? 'الفعالية بواسطة' : 'Event by'} <span className="font-bold">The Vicious Esports</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </footer>
    </main>
  );
}