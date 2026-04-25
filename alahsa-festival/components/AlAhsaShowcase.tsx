'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { FadeUp, Stagger, StaggerItem, HoverLift } from '@/components/ui/Animations';
import { landmarks, zones, stats, features, timelinePhases } from '@/data/alAhsaData';

const cardGradients = [
  'from-amber-700 to-amber-500',
  'from-emerald-800 to-emerald-600',
  'from-green-700 to-teal-600',
  'from-slate-700 to-slate-500',
  'from-orange-700 to-amber-600',
  'from-teal-800 to-cyan-600',
];

// ─── Count-up hook ───────────────────────────────────────────────────────────

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, target]);

  return count;
}

// ─── Stat card ───────────────────────────────────────────────────────────────

function StatCard({
  value,
  suffix,
  labelAr,
  labelEn,
  isAr,
}: {
  value: number;
  suffix: string;
  labelAr: string;
  labelEn: string;
  isAr: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const count = useCountUp(value, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl p-6 text-center shadow-md border border-[#E8E0D4]"
    >
      <div className="text-4xl md:text-5xl font-black text-[#D4AF37] mb-2 tabular-nums">
        {count.toLocaleString('en')}
        {suffix}
      </div>
      <div className="text-sm text-[#5A4A2A] font-medium">{isAr ? labelAr : labelEn}</div>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function AlAhsaShowcase({ locale }: { locale: string }) {
  const isAr = locale === 'ar';

  const heroRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(heroScroll, [0, 1], ['0%', '35%']);
  const heroOpacity = useTransform(heroScroll, [0, 0.75], [1, 0]);

  const { scrollYProgress: timelineScroll } = useScroll({
    target: timelineRef,
    offset: ['start 85%', 'end 25%'],
  });
  const lineScaleY = useTransform(timelineScroll, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen bg-[#FAF8F5]" dir={isAr ? 'rtl' : 'ltr'}>
      <Navbar locale={locale} isAr={isAr} />

      {/* ═══ HERO ═══════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center"
      >
        {/* Parallax background */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 bg-gradient-to-br from-[#1B4D3E] via-[#2a6652] to-[#163d31]"
        >
          {/* Decorative grid overlay */}
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '48px 48px' }}
          />
          {/* Floating palm silhouettes */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.span
              key={i}
              className="absolute text-white/[0.07] select-none pointer-events-none"
              style={{
                fontSize: `${7 + (i % 3) * 2}rem`,
                left: `${8 + i * 14}%`,
                bottom: `${4 + (i % 3) * 8}%`,
              }}
              animate={{
                y: [0, -18, 0],
                rotate: [0, i % 2 === 0 ? 4 : -4, 0],
              }}
              transition={{
                duration: 3.5 + i * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.25,
              }}
            >
              🌴
            </motion.span>
          ))}
        </motion.div>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Pulsing icon */}
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              className="text-6xl mb-6 inline-block"
            >
              🌴
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-tight tracking-tight">
              {isAr ? 'نبض الأحساء' : 'Pulse of Al-Ahsa'}
            </h1>
            <p className="text-xl md:text-2xl text-[#D4AF37] font-bold mb-4">
              {isAr ? 'من التراث إلى البطولات العالمية' : 'From Heritage to World Championships'}
            </p>
            <p className="text-white/75 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              {isAr
                ? '٣٠ يوماً من المهرجانات في الأحساء، المملكة العربية السعودية'
                : '30 days of festivals in Al-Ahsa, Saudi Arabia'}
            </p>

            <motion.a
              href="#explore"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block bg-[#D4AF37] text-[#1a1a2e] px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-[#c9a230] transition-colors"
            >
              {isAr ? 'استكشف' : 'Explore'}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      {/* ═══ STATS ══════════════════════════════════════════════════════════ */}
      <section id="explore" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B4D3E]">
              {isAr ? 'الأحساء بالأرقام' : 'Al-Ahsa by the Numbers'}
            </h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <StatCard
                key={i}
                value={s.value}
                suffix={s.suffix}
                labelAr={s.ar}
                labelEn={s.en}
                isAr={isAr}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY AL-AHSA ════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-3">
              {isAr ? 'لماذا الأحساء؟' : 'Why Al-Ahsa?'}
            </h2>
            <p className="text-[#5A4A2A] text-base max-w-xl mx-auto">
              {isAr
                ? 'مدينة تجمع بين أصالة التراث وحيوية الحاضر'
                : 'A city that bridges authentic heritage with a vibrant present'}
            </p>
          </FadeUp>

          <Stagger className="grid md:grid-cols-3 gap-7">
            {features.map((f, i) => (
              <StaggerItem key={i}>
                <HoverLift className="bg-white rounded-2xl p-8 shadow-md border border-[#E8E0D4] h-full text-center">
                  <div className="text-5xl mb-5">{f.emoji}</div>
                  <h3 className="text-xl font-bold text-[#1B4D3E] mb-3">
                    {isAr ? f.ar.title : f.en.title}
                  </h3>
                  <p className="text-[#5A4A2A] text-sm leading-relaxed">
                    {isAr ? f.ar.desc : f.en.desc}
                  </p>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ═══ LANDMARKS ══════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-3">
              {isAr ? 'معالم الأحساء' : 'Al-Ahsa Landmarks'}
            </h2>
            <p className="text-[#5A4A2A] text-base max-w-xl mx-auto">
              {isAr
                ? 'اكتشف روائع الأحساء التاريخية والطبيعية'
                : 'Discover the historic and natural wonders of Al-Ahsa'}
            </p>
          </FadeUp>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landmarks.map((lm, i) => {
              const data = isAr ? lm.ar : lm.en;
              return (
                <StaggerItem key={lm.id}>
                  <motion.div
                    whileHover={{ y: -7, boxShadow: '0 24px 48px rgba(0,0,0,0.13)' }}
                    transition={{ duration: 0.22 }}
                    className="bg-white rounded-2xl overflow-hidden border border-[#E8E0D4] shadow-sm h-full flex flex-col"
                  >
                    {/* Image area */}
                    <div
                      className={`h-40 bg-gradient-to-br ${cardGradients[i % cardGradients.length]} flex items-center justify-center relative flex-shrink-0`}
                    >
                      <span className="text-6xl drop-shadow-lg">{lm.emoji}</span>
                      {data.unesco && (
                        <span className="absolute top-3 end-3 bg-[#D4AF37] text-[#1a1a2e] text-xs font-bold px-2.5 py-1 rounded-full shadow">
                          UNESCO
                        </span>
                      )}
                    </div>
                    {/* Content */}
                    <div className="p-5 flex-1">
                      <h3 className="text-base font-bold text-[#1B4D3E] mb-2">{data.title}</h3>
                      <p className="text-[#5A4A2A] text-sm leading-relaxed">{data.description}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ═══ FESTIVAL ZONES ═════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#1B4D3E]">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              {isAr ? 'مناطق المهرجان' : 'Festival Zones'}
            </h2>
            <p className="text-white/65 text-base">
              {isAr ? 'ستة مناطق تجربة فريدة على مدار ٣٠ يوماً' : 'Six unique experience zones across 30 days'}
            </p>
          </FadeUp>

          <Stagger className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {zones.map((z, i) => {
              const data = isAr ? z.ar : z.en;
              return (
                <StaggerItem key={i}>
                  <motion.div
                    whileHover={{ y: -6, borderColor: '#D4AF37' }}
                    transition={{ duration: 0.2 }}
                    className="bg-white/10 border border-white/20 rounded-2xl p-5 md:p-6 text-center text-white h-full flex flex-col items-center cursor-default"
                  >
                    <div className="text-4xl mb-3">{z.emoji}</div>
                    <h3 className="font-bold text-base md:text-lg mb-1.5">{data.name}</h3>
                    <p className="text-[#D4AF37] text-sm font-semibold mb-2">{data.dates}</p>
                    <p className="text-white/65 text-xs leading-relaxed">{data.desc}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ═══ TIMELINE ═══════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-2xl mx-auto">
          <FadeUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-3">
              {isAr ? 'الجدول الزمني' : 'Timeline'}
            </h2>
            <p className="text-[#5A4A2A] text-sm">
              {isAr ? 'مراحل تنفيذ مهرجان نبض الأحساء' : 'Phases of the Pulse of Al-Ahsa festival'}
            </p>
          </FadeUp>

          <div
            ref={timelineRef}
            className={`relative ${isAr ? 'pr-12 md:pr-14' : 'pl-12 md:pl-14'}`}
          >
            {/* Background line */}
            <div
              className={`absolute ${isAr ? 'right-4 md:right-5' : 'left-4 md:left-5'} inset-y-0 w-0.5 bg-[#E8E0D4]`}
            />
            {/* Animated progress line */}
            <motion.div
              style={{ scaleY: lineScaleY, transformOrigin: 'top' }}
              className={`absolute ${isAr ? 'right-4 md:right-5' : 'left-4 md:left-5'} inset-y-0 w-0.5 bg-[#D4AF37]`}
            />

            <div className="space-y-8">
              {timelinePhases.map((p, i) => {
                const data = isAr ? p.ar : p.en;
                return (
                  <FadeUp key={p.phase} delay={i * 0.1}>
                    <div className="relative">
                      {/* Phase dot */}
                      <div
                        className={`absolute ${isAr ? '-right-[2.85rem] md:-right-[3.35rem]' : '-left-[2.85rem] md:-left-[3.35rem]'} top-4 w-9 h-9 md:w-10 md:h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#1a1a2e] font-black text-sm shadow-lg z-10`}
                      >
                        {p.phase}
                      </div>
                      {/* Card */}
                      <div className="bg-white rounded-2xl p-5 shadow-md border border-[#E8E0D4]">
                        <div className="text-xs text-[#D4AF37] font-bold mb-1 uppercase tracking-wide">
                          {isAr ? 'المرحلة' : 'Phase'} {p.phase}
                        </div>
                        <h3 className="font-bold text-[#1B4D3E] text-base mb-1">{data.title}</h3>
                        <p className="text-[#D4AF37] text-sm font-semibold mb-2">{data.period}</p>
                        <p className="text-[#5A4A2A] text-sm leading-relaxed">{data.desc}</p>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#1B4D3E] to-[#2a6652] text-white text-center">
        <FadeUp>
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="text-6xl mb-6 inline-block"
          >
            💛
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            {isAr ? 'كن جزءاً من النبض' : 'Be Part of the Pulse'}
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            {isAr
              ? 'انضم إلى آلاف الزوار في تجربة لا تُنسى بقلب الأحساء'
              : 'Join thousands of visitors in an unforgettable experience in the heart of Al-Ahsa'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link
                href={`/${locale}/register`}
                className="inline-block bg-[#D4AF37] text-[#1a1a2e] px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-[#c9a230] transition-colors"
              >
                {isAr ? 'سجل الآن' : 'Register Now'}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link
                href={`/${locale}/sponsors`}
                className="inline-block bg-white/10 border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors"
              >
                {isAr ? 'اعرف المزيد' : 'Learn More'}
              </Link>
            </motion.div>
          </div>
        </FadeUp>
      </section>

      <Footer locale={locale} isAr={isAr} />
    </div>
  );
}
