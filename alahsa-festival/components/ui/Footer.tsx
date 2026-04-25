export default function Footer({ locale, isAr }: { locale: string; isAr: boolean }) {
  return (
    <footer className="py-8 bg-[#1B4D3E] text-white text-center text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 mb-3">
          <div className="font-bold text-base">نبض الأحساء</div>
          <span className="hidden md:inline text-[#D4AF37]">|</span>
          <div className="text-[#E8E0D4]">
            {isAr ? 'الموقع بواسطة' : 'Website by'}{' '}
            <a
              href="https://project-jelc4.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] font-bold hover:underline"
            >
              Nexaro.tech
            </a>
          </div>
          <span className="hidden md:inline text-[#D4AF37]">|</span>
          <div className="text-[#E8E0D4]">
            {isAr ? 'الفعالية بواسطة' : 'Event by'}{' '}
            <span className="font-bold text-white">The Vicious Esports</span>
          </div>
        </div>
        <p className="text-xs text-[#A89B8A]">
          © 2026 {isAr ? 'نبض الأحساء. جميع الحقوق محفوظة.' : 'Pulse of Al-Ahsa. All rights reserved.'}
        </p>
      </div>
    </footer>
  );
}
