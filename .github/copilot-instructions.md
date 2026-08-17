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
- **No database** – content lives in code
- **Prices live in [lib/services-data.ts](lib/services-data.ts)**, a typed data module (`ServiceCategory` / `ServiceSubcategory` / `ServiceItem`). Source of truth is the price list PDF in `Assets/`. Do not move prices back into JSX.
- Homepage service cards in [app/page.tsx](app/page.tsx): `{ id, icon, en, pt, descEn, descPt, image }`
- WhatsApp number and prefilled booking links: [lib/booking.ts](lib/booking.ts) – do not hardcode the number elsewhere
- Images are local, in `public/`, served via `next/image`. `images.unsplash.com` is whitelisted in [next.config.mjs](next.config.mjs) only for the placeholder testimonial avatars.

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
- **Domain/URL**: `SITE_URL` in [app/layout.tsx](app/layout.tsx) drives metadataBase, canonicals and JSON-LD; also update [app/robots.ts](app/robots.ts) and [app/sitemap.ts](app/sitemap.ts)
- **Analytics**: none yet – nothing currently measures whether the site produces bookings
- **Type errors are NOT ignored**: builds fail on type errors. Do not re-enable `ignoreBuildErrors`.
- **Accordions must not unmount their contents.** Both the services and terms accordions render always and collapse with the `hidden` attribute, so the text ships in the HTML and can be indexed. Reverting to `{isOpen && ...}` silently removes all prices from the page for crawlers.

## Contact & Booking Integration
- **WhatsApp**: `WHATSAPP_URL` and `buildBookingUrl()` in [lib/booking.ts](lib/booking.ts). Service rows link to a prefilled message containing the service name and price.
- **Phone numbers**: About page and Footer; also in the JSON-LD in [app/layout.tsx](app/layout.tsx)
- Location: Rua Dos Escultores Nr 146, Matola A, Mozambique

## Testing & QA
- Verify bilingual text rendering on all pages (toggle EN/PT in header)
- Test responsive design across mobile/tablet/desktop
- Validate SEO metadata in browser dev tools
- Test language persistence on page reload (localStorage)
- After changing the services or terms pages, confirm the content is still in the HTML: `npm run build` then grep the output in `.next/server/app/` for a known price
