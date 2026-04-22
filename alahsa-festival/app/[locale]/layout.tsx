import { Tajawal, Inter } from 'next/font/google';
import '../globals.css';

const tajawal = Tajawal({
  weight: ['400', '500', '700', '800', '900'],
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-ar',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-en',
});

export const metadata = {
  title: 'مهرجان الأحساء للتسوق | Al Ahsa Shopping Festival',
  description: '10 يونيو — 10 يوليو 2026',
};

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.variable} ${inter.variable} font-sans antialiased bg-[#f8f5f0] text-[#1a1a2e]`}>
        {children}
      </body>
    </html>
  );
}
