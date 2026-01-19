# CAMY Wellness & Spa - AI Coding Agent Instructions

## Project Overview
CAMY is a bilingual (EN/PT) spa website for women's wellness services in Mozambique, built with **Next.js 16** (App Router), **Tailwind CSS v4**, and **React Compiler enabled**. It's a content-rich marketing/booking site (not a backend system).

## Architecture & Key Patterns

### Language & Internationalization
- **Not using i18n libraries** – Custom Context-based translation system in [app/providers.tsx](app/providers.tsx)
- Translation dictionary in `LanguageContext` with keys like `"nav.home"`, `"services.title"` 
- Use `const { language, setLanguage, t } = useLanguage()` hook in client components
- Language persists via localStorage
- All content pages must support bilingual rendering (English/Portuguese)

### Page Structure & Routing
- **App Router layout**: Each page is a `"use client"` component importing `Header` and `Footer`
- Routes: `/` (home), `/services`, `/about`, `/terms` 
- Add new pages as folders in `app/` with `page.tsx` inside (e.g., `app/newpage/page.tsx`)
- SEO metadata in [app/layout.tsx](app/layout.tsx) – update for new pages via `metadata` export

### Data & Services
- **No database** – All data (services, testimonials) is **hardcoded in component files**
- Service data structure in [app/page.tsx](app/page.tsx#L10): `{ id, icon, en, pt, descEn, descPt, image }`
- Services page sourced from [app/services/page.tsx](app/services/page.tsx) and [app/providers.tsx](app/providers.tsx)
- Images sourced from Unsplash (external) – configure in [next.config.mjs](next.config.mjs) `remotePatterns`

### Component Patterns
- All components in `components/` use `"use client"` (client-side rendering)
- Components: [Header](components/header.tsx), [Footer](components/footer.tsx), [ClientImage](components/client-image.tsx)
- Styling with **Tailwind utility classes** only – no CSS Modules or styled-components
- Design tokens (gold `#d4af37`, dark-green `#1a3c34`, cream `#f8f5f0`) hardcoded in classes

## Development Workflow

### Build & Run
```bash
npm run dev          # Start dev server on localhost:3000
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Adding Features
1. **New page**: Create `app/[page-name]/page.tsx` as `"use client"` component with Header/Footer
2. **New translation**: Add keys to `translations` object in [app/providers.tsx](app/providers.tsx) (both `en` and `pt` keys)
3. **New service/data**: Update hardcoded arrays in component files (e.g., `services` array in [app/page.tsx](app/page.tsx))
4. **New component**: Create in `components/` with `"use client"` and export as named export

## Project-Specific Conventions

- **No external CMS/API** – All content is code-based; changes require code commits
- **No form backends** – Contact forms would need API integration (currently not implemented)
- **Domain/URL**: Update in [next.config.mjs](next.config.mjs), [app/robots.ts](app/robots.ts), [app/sitemap.ts](app/sitemap.ts)
- **Analytics**: Vercel Analytics enabled in [app/layout.tsx](app/layout.tsx)
- **IgnoreBuildErrors**: TypeScript strict mode enabled but build errors ignored (see [next.config.mjs](next.config.mjs))

## Contact & Booking Integration
- **WhatsApp link**: `https://wa.me/258841921846` (hardcoded in [Header](components/header.tsx#L67))
- **Phone/Email**: Update in Header, Footer, and About page as needed
- Location: Rua Dos Escultores Nr 146, Matola A, Mozambique

## Testing & QA
- Verify bilingual text rendering on all pages (toggle EN/PT in header)
- Test responsive design across mobile/tablet/desktop
- Validate SEO metadata in browser dev tools
- Check image loading (Unsplash URLs work consistently)
- Test language persistence on page reload (localStorage)
