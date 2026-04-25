# Al-Ahsa Festival Site — Project Context

## Project Overview

**Name:** نبض الأحساء / Pulse of Al-Ahsa  
**Purpose:** Public-facing website for the Al-Ahsa Shopping Festival (10 June – 10 July 2026), combining cultural heritage, esports, and live events. Includes a public-facing site for visitors and a business-facing section for sponsors/exhibitors.  
**Deployment:** Vercel  
**Primary Language:** Arabic (RTL); bilingual Arabic/English via locale routing.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.4 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Database | Supabase (PostgreSQL via `@supabase/supabase-js`) |
| Forms | react-hook-form + zod |
| Fonts | Tajawal (Arabic), Inter (English) via `next/font/google` |
| React | 19.2.4 |

---

## Architecture Overview

### Locale Routing

All user-facing pages live under `app/[locale]/`. The root `app/page.tsx` redirects to `/ar` by default. Supported locales: `ar`, `en`.

- `app/layout.tsx` — root layout; contains the only `<html>` and `<body>` tags; loads fonts; sets default `lang="ar" dir="rtl"`.
- `app/[locale]/layout.tsx` — thin passthrough layout (no html/body); locale-specific wrapping handled per-page via `dir` on `<main>`.

### Route Groups

```
app/[locale]/
  (public)/          — visitor-facing pages (no auth)
    page.tsx         — homepage
    al-ahsa/         — Al-Ahsa city showcase
    zones/           — zone list + zone detail [zoneId]
    schedule/        — event schedule
    rewards/         — loyalty rewards / Pulse Card
    treasure-hunt/   — kids interactive treasure hunt
    event/           — general event info
  (business)/        — sponsor/exhibitor pages
    register/        — visitor registration (Supabase insert)
    sponsors/        — sponsorship tiers
    apply/           — exhibitor application
```

### Component Hierarchy

```
Navbar (client, sticky, locale-aware)
  └─ Language toggle → router.push to opposite locale
Page <main dir="rtl|ltr">
  └─ FadeUp / Stagger / StaggerItem / HoverLift (animation wrappers)
Footer (server-compatible, locale-aware)
```

### State Management

No global state. All state is:
- **Server:** data colocated in each page file (translations object)
- **Client:** local `useState` in interactive components (Navbar mobile menu, forms)

### Data Flow

- Static content (translations, zone data, schedule) is embedded directly in each page file as constants — no CMS or i18n library.
- Dynamic data (sponsor applications) flows via `POST /api/apply` → Supabase `applications` table.

---

## Key Files

| File | Purpose | Server/Client |
|---|---|---|
| `app/layout.tsx` | Root layout — fonts, html/body | Server |
| `app/[locale]/layout.tsx` | Locale passthrough | Server |
| `app/page.tsx` | Redirects `/` → `/ar` | Server |
| `app/[locale]/(public)/page.tsx` | Homepage | Client |
| `app/[locale]/(public)/zones/page.tsx` | Zone list | Client |
| `app/[locale]/(public)/zones/[zoneId]/page.tsx` | Zone detail | Client |
| `app/[locale]/(public)/treasure-hunt/page.tsx` | Treasure Hunt page | Client |
| `app/[locale]/(public)/schedule/page.tsx` | Event schedule | Client |
| `app/[locale]/(public)/rewards/page.tsx` | Pulse Card rewards | Client |
| `app/[locale]/(public)/al-ahsa/page.tsx` | Al-Ahsa showcase | Client |
| `app/[locale]/(business)/register/page.tsx` | Visitor registration form | Client |
| `app/[locale]/(business)/sponsors/page.tsx` | Sponsorship tiers | Client |
| `app/[locale]/(business)/apply/page.tsx` | Exhibitor apply form | Client |
| `app/api/apply/route.ts` | POST handler → Supabase insert | Server |
| `components/ui/Navbar.tsx` | Shared navbar with lang toggle | Client |
| `components/ui/Footer.tsx` | Shared footer | Server-compatible |
| `components/ui/Animations.tsx` | Framer Motion wrappers | Client |
| `components/ui/PulseLogo.tsx` | Animated festival logo | Client |
| `components/AlAhsaShowcase.tsx` | Al-Ahsa city showcase component | Client |
| `lib/supabase.ts` | Supabase client singleton | — |
| `data/alAhsaData.ts` | Static Al-Ahsa cultural data | — |
| `messages/ar.json` | Arabic message strings | — |
| `messages/en.json` | English message strings | — |

---

## Coding Conventions

### i18n Pattern

No i18n library. Each page embeds its own `translations` object keyed by locale:

```tsx
const translations = { ar: { title: '...' }, en: { title: '...' } };
const t = translations[lang];
```

Locale is resolved from `params` (a Promise in Next.js 15+):
```tsx
const { locale } = use(params);   // in client components
// or
const { locale } = await params;  // in server components
```

### RTL/LTR

Applied per-page on the `<main>` element:
```tsx
<main dir={isAr ? 'rtl' : 'ltr'}>
```

Root `<html>` defaults to `dir="rtl"` (Arabic-first).

### Styling

- Tailwind CSS v4 utility classes only — no CSS modules or styled-components.
- Design tokens (inline): `#1B4D3E` (dark green primary), `#D4AF37` (gold accent), `#FAF8F5` (cream bg), `#2C2416` (dark brown text), `#5A4A2A` (muted brown), `#F4E4C1` (warm section bg).
- Rounded corners: `rounded-full` for pills/buttons, `rounded-2xl` / `rounded-xl` for cards.

### Animation

All animations via `components/ui/Animations.tsx` wrappers:
- `<FadeUp delay={0.2}>` — fade + slide up on scroll
- `<Stagger>` + `<StaggerItem>` — staggered list entrance
- `<HoverLift>` — card hover lift effect
- `<PulseBeat>` — continuous heartbeat pulse

### Component Props Pattern

Shared UI components receive `locale` and `isAr` as explicit props:
```tsx
<Navbar locale={lang} isAr={isAr} />
<Footer locale={lang} isAr={isAr} />
```

---

## Environment Variables

| Variable | Usage |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |

---

## Build & Development

```bash
npm run dev      # start dev server
npm run build    # production build
npm run start    # start production server
npx tsc --noEmit # type check only
```

---

## Critical Dependencies

| Package | Purpose |
|---|---|
| `next@16.2.4` | App Router, Server Components, Route Handlers |
| `react@19.2.4` | UI, `use()` hook for Promise params |
| `framer-motion@12` | Page/section animations |
| `@supabase/supabase-js@2` | Database (sponsor applications) |
| `react-hook-form@7` | Form state management |
| `zod@4` | Form validation schemas |
| `tailwindcss@4` | Utility-first styling |
| `next/font/google` | Tajawal (Arabic) + Inter (English) |

---

## Important Constraints

- **No nested `<html>/<body>`**: Only `app/layout.tsx` may use these tags. All child layouts use fragments or divs.
- **All pages are `'use client'`** — data is static, no server-fetching needed per page.
- **No i18n library**: Translations are colocated constants per file.
- **Params are Promises**: In Next.js 15+, `params` in pages/layouts is `Promise<{...}>`. Use `use(params)` in client components or `await params` in server components.
