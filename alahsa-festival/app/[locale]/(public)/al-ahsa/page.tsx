import AlAhsaShowcase from '@/components/AlAhsaShowcase';

export const metadata = {
  title: 'Al-Ahsa City | نبض الأحساء',
  description: 'Discover Al-Ahsa — UNESCO World Heritage city hosting 30 days of festivals in 2026.',
};

export default async function AlAhsaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AlAhsaShowcase locale={locale} />;
}
