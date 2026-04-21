import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Tajawal, Inter } from 'next/font/google';
import './globals.css';

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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  const isAr = params.locale === 'ar';

  return (
    <html lang={params.locale} dir={isAr ? 'rtl' : 'ltr'}>
      <body className={`${isAr ? tajawal.variable : inter.variable} font-sans antialiased bg-[#f8f5f0] text-[#1a1a2e]`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
