'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const zoneData = {
  'heritage-cuisine': {
    ar: {
      title: 'المطبخ الأصيل', emoji: '🍽️', days: '١-٥ يونيو',
      desc: '٥ أيام من الطبخ الأصيل، ورش عمل النخيل، وتجربة القهوة السعودية. تذوق أشهى الأطباق المحلية واستمتع بعروض الطبخ الحي.',
      activities: [
        'ركن "قهوة الأحساء" مع أنواع القهوة المحلية',
        'عرض "نور العجوة" للطبخ الحي يومي الجمعة والسبت',
        'مسابقة "خباّط الأحساء الصغير" للأطفال',
        'محطة تذوق التمور والقهوة التراثية',
        'عروض موسيقية شعبية يومية'
      ],
      sponsors: 'وزارة الثقافة • هيئة السياحة • مزارع التمور المحلية • المراعي',
      day5: 'حفل "خباّط الأحساء الصغير" • توزيع جوائز مسابقة الطبخ'
    },
    en: {
      title: 'Heritage Cuisine', emoji: '🍽️', days: 'Jun 1–5',
      desc: '5 days of authentic cuisine, palm workshops, and Saudi coffee experience. Taste local delicacies and enjoy live cooking shows.',
      activities: [
        '"Al-Ahsa Coffee" station with local brews',
        '"Nour Al-Ajwa" live cooking shows (Fri & Sat)',
        '"Little Al-Ahsa Chef" competition for kids',
        'Date & coffee heritage tasting station',
        'Daily traditional music performances'
      ],
      sponsors: 'Ministry of Culture • Saudi Tourism • Local Date Farms • Almarai',
      day5: '"Little Al-Ahsa Chef" Ceremony • Cooking Competition Awards'
    }
  },
  'artisans': {
    ar: {
      title: 'الحرفيين', emoji: '🎨', days: '٦-١٠ يونيو',
      desc: '٥ أيام لعرض الحرف اليدوية، ورش العمل، وتجربة الصناعة المحلية. تفاعل مع حرفيي الأحساء واكتشف إبداعاتهم.',
      activities: [
        'ورش التطريز التقليدي وصناعة السدو',
        'محطة صناعة الفخار والأواني التراثية',
        'ورشة "تصميم × حرفة" مع مصممين محليين',
        'عرض "ألوان الأحساء" للرسامين الشباب',
        'محطة تذوق المنتجات اليدوية'
      ],
      sponsors: 'الهيئة العامة للترفيه • مراكز الحرف اليدوية • علامات الأزياء المحلية',
      day5: 'حفل "ألوان الأحساء" • معرض أعمال الأطفال والحرفيين'
    },
    en: {
      title: 'Artisans & Crafts', emoji: '🎨', days: 'Jun 6–10',
      desc: '5 days of handicrafts, workshops, and local manufacturing experience. Interact with Al-Ahsa artisans and discover their creations.',
      activities: [
        'Traditional embroidery & Sadu weaving workshops',
        'Pottery & heritage vessel making station',
        '"Design × Craft" workshop with local designers',
        '"Colors of Al-Ahsa" young artists showcase',
        'Handmade products tasting & sampling station'
      ],
      sponsors: 'GEA • Craft Centers • Local Fashion Brands',
      day5: '"Colors of Al-Ahsa" Festival • Children & Artisans Exhibition'
    }
  },
  'folk-music': {
    ar: {
      title: 'الموسيقى الشعبية', emoji: '🎵', days: '١١-١٥ يونيو',
      desc: '٥ أيام من الموسيقى الشعبية، الرقصات، وتجربة التمور الفاخرة. استمتع بالأمسيات التراثية والعروض الحية.',
      activities: [
        'عروض يومية لفرق الفنون الشعبية',
        'جلسات "رماح" للحكايات والأهازيج الشعبية',
        'عرض أنواع التمور الفاخرة وطرق حفظها',
        'مسابقة الغناء الشعبي العائلي',
        'ركن العود والآلات الموسيقية التراثية'
      ],
      sponsors: 'جمعية الثقافة والفنون • مزارع التمور الفاخرة • علامات المشروبات',
      day5: 'حفل "مهرجان التمور المصغر" • تكريم الفرق الفائزة'
    },
    en: {
      title: 'Folk Music & Dates', emoji: '🎵', days: 'Jun 11–15',
      desc: '5 days of folk music, dances, and premium date experience. Enjoy traditional evenings and live performances.',
      activities: [
        'Daily folk arts & dance performances',
        '"Ramassah" storytelling & folk songs sessions',
        'Premium date varieties showcase & preservation methods',
        'Family folk singing competition',
        'Oud & traditional instruments corner'
      ],
      sponsors: 'Culture & Arts Society • Premium Date Farms • Beverage Brands',
      day5: '"Mini Date Festival" • Winning Teams Recognition'
    }
  },
  'history': {
    ar: {
      title: 'تاريخ الأحساء', emoji: '🏛️', days: '١٦-٢٠ يونيو',
      desc: '٥ أيام لاستكشاف تراث الأحساء، المتاحف، والواقع الافتراضي. جولة في عمق التاريخ مع تجارب تفاعلية.',
      activities: [
        'جولة افتراضية ٣٦° داخل جبل القارة وقصر إبراهيم',
        'خط زمني تفاعلي لتاريخ الأحساء عبر العصور',
        'سوق التحف والمخطوطات القديمة',
        'مسابقة "أين كنت عندما استضافت الأحساء كأس العالم؟"',
        'عرض مرئي للتراث العمراني الأصيل'
      ],
      sponsors: 'هيئة التراث • المتاحف المحلية • شركاء تقنية الواقع الافتراضي',
      day5: 'حفل "المؤرخون الصغار" • مسابقة المعلومات التاريخية'
    },
    en: {
      title: 'History of Al-Ahsa', emoji: '🏛️', days: 'Jun 16–20',
      desc: '5 days exploring Al-Ahsa heritage, museums, and VR experiences. A journey into deep history with interactive exhibits.',
      activities: [
        'VR 360° tour inside Al-Qarah Mountain & Ibrahim Palace',
        'Interactive timeline of Al-Ahsa through the ages',
        'Antiques & old manuscripts market',
        '"Where were you when Al-Ahsa hosted the World Cup?" quiz',
        'Authentic architectural heritage visual exhibit'
      ],
      sponsors: 'Heritage Authority • Local Museums • VR Tech Partners',
      day5: '"Young Historians" Ceremony • Historical Trivia Competition'
    }
  },
  'date-palm': {
    ar: {
      title: 'النخلة والتمور', emoji: '🌴', days: '٢١-٢٥ يونيو',
      desc: '٥ أيام للاحتفاء بالنخلة، أنواع التمور، والفوائد الصحية. اكتشف عالم التمور من الشجرة إلى المائدة.',
      activities: [
        'معرض ٨ أنواع مشهورة من تمور الأحساء',
        'مصنع عصر التمر الطازج وعرض حي',
        'ركن "قهوة نوى التمر" الصحية',
        'محاضرة "خصائص النخلة في الغذاء والطب الشعبي"',
        'جلسة شاي ملكي مع تمور الأحساء الفاخرة'
      ],
      sponsors: 'مزارع التمور • علامات الصحة والعناية • الجمعيات الزراعية',
      day5: 'حفل "صديق النخلة" • توزيع شهادات بيئية وجوائز'
    },
    en: {
      title: 'Date Palm & Dates', emoji: '🌴', days: 'Jun 21–25',
      desc: '5 days celebrating date palms, date varieties, and health benefits. Discover the world of dates from tree to table.',
      activities: [
        'Showcase of 8 famous Al-Ahsa date varieties',
        'Fresh date juice press & live demo',
        '"Date Seed Coffee" health corner',
        '"Date Palm in Food & Folk Medicine" talk',
        'Royal tea session with premium Al-Ahsa dates'
      ],
      sponsors: 'Date Farms • Health & Care Brands • Agricultural Associations',
      day5: '"Friend of the Palm" Ceremony • Eco-Certificates & Awards'
    }
  },
  'fan-zone': {
    ar: {
      title: 'منطقة المشجعين', emoji: '🎮', days: '٢٦-٣٠ يونيو',
      desc: '٥ أيام من الألعاب الإلكترونية، كرة القدم، والتسوق الحديث. حماس الألعاب وبطولة العالم في قلب الأحساء.',
      activities: [
        'بث مباشر لمباريات كأس العالم على شاشة LED ضخمة',
        'بطولة EA FC / Rocket League / Fortnite المفتوحة',
        'مسابقة "كأس الأحساء الإلكتروني" بجوائز حقيقية',
        'ركن Cosplay × التقليد بملابس الفرق المحلية',
        'عروض تجريبية لأحدث الألعاب والإكسسوارات'
      ],
      sponsors: 'بلايستيشن • إس تي سي • علامات الألعاب • متاجر التجزئة',
      day5: 'حفل "أبطال الغد" • نهائيات كأس الأحساء وتكريم الفائزين'
    },
    en: {
      title: 'Fan Zone & Modern Al-Ahsa', emoji: '🎮', days: 'Jun 26–30',
      desc: '5 days of esports, football, and modern shopping. The excitement of games and the World Cup in the heart of Al-Ahsa.',
      activities: [
        'Live World Cup broadcasts on giant LED screen',
        'Open EA FC / Rocket League / Fortnite tournaments',
        '"Al-Ahsa Esports Cup" with real prizes',
        'Cosplay × Tradition corner with local team kits',
        'Demos of latest games & accessories'
      ],
      sponsors: 'PlayStation • STC • Gaming Brands • Retail Stores',
      day5: '"Champions of Tomorrow" Ceremony • Al-Ahsa Cup Finals & Awards'
    }
  }
};

export default function ZoneDetailPage({ params }: { params: Promise<{ locale: string; zoneId: string }> }) {
  const resolvedParams = use(params);
  const { locale, zoneId } = resolvedParams;
  const zone = zoneData[zoneId as keyof typeof zoneData];
  
  if (!zone) notFound();
  
  const lang = locale as 'ar' | 'en';
  const t = zone[lang];
  const isAr = lang === 'ar';

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2C2416]" dir={isAr ? 'rtl' : 'ltr'}>
      <Navbar locale={lang} isAr={isAr} />

      {/* Hero */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-[#FAF8F5] to-[#F4E4C1]">
        <div className="text-7xl mb-6 animate-bounce">{t.emoji}</div>
        <h1 className="text-4xl md:text-6xl font-black text-[#1B4D3E] mb-4">{t.title}</h1>
        <div className="inline-block bg-[#D4AF37] text-[#1a1a2e] px-4 py-1 rounded-full font-bold mb-6">{t.days}</div>
        <p className="text-lg text-[#5A4A2A] max-w-3xl mx-auto">{t.desc}</p>
      </section>

      {/* Activities */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1B4D3E] mb-10">{isAr ? 'الأنشطة والفعاليات' : 'Activities & Events'}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.activities.map((act, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-[#E8E0D4] flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <p className="text-[#5A4A2A]">{act}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day 5 Special */}
      <section className="py-16 px-6 bg-[#1B4D3E] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">
            {isAr ? '🎉 حدث اليوم الخامس الخاص' : '🎉 Special Day 5 Event'}
          </h3>
          <p className="text-lg opacity-90">{t.day5}</p>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold text-[#1B4D3E] mb-4">{isAr ? 'الرعاة والشركاء' : 'Sponsors & Partners'}</h3>
          <p className="text-[#5A4A2A]">{t.sponsors}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <Link 
          href={`/${lang}/register`}
          className="inline-block bg-[#D4AF37] text-[#1a1a2e] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg"
        >
          {isAr ? 'سجل واحصل على كارت نبض' : 'Register & Get Your Pulse Card'}
        </Link>
      </section>

      <Footer locale={lang} isAr={isAr} />
    </main>
  );
}
