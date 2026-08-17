# CAMY Wellness & Spa Website

A beautiful, bilingual (English/Portuguese) spa website built with Next.js 16, Tailwind CSS, and React.

## Features

- 🌍 **Bilingual Support**: Full EN/PT language switching with localStorage persistence
- 📱 **Responsive Design**: Mobile-first, fully responsive layout
- ✨ **Elegant Design**: Gold, dark green, and cream color palette inspired by luxury spas
- 🎯 **SEO Optimized**: Meta tags, sitemap, robots.txt, and structured data
- 🚀 **Performance**: Image optimization, lazy loading, React Compiler enabled
- 📝 **Comprehensive Content**: Services with full 2026 pricing, downloadable price list, terms & conditions

## Pages

- **Home** (`/`): Hero section, services overview, testimonials, CTAs
- **Services** (`/services`): Complete service listings with pricing in MZN
- **About** (`/about`): Company info, mission and values, location and contact details
- **Terms & Conditions** (`/terms`): Full legal terms in both languages

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **Fonts**: Playfair Display (headings, self-hosted via next/font); system sans stack for body
- **Components**: Custom React components with Lucide icons
- **Internationalization**: Custom Language Context (EN/PT)
- **Deployment**: Netlify, auto-deploying from `main` (see `netlify.toml`)

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

\`\`\`bash
# Clone the repository
git clone <repo-url>

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

No environment variables are required for basic functionality.

## Customization

### Colors
Edit design tokens in `app/globals.css`:
\`\`\`css
--gold: #d4af37;
--dark-green: #1a3c34;
--cream: #f8f5f0;
\`\`\`

### Services & Pricing
All prices live in **`lib/services-data.ts`**, a plain typed data file with no
JSX around it. The source of truth is the price list PDF in `Assets/`.

To change a price, edit the `price` field only, keeping the `"1200 MZN"`
format. When adding a service, `en`, `pt` and `price` are all required or the
item renders blank in one language. Then run `npm run build`, check the item
in both EN and PT, and commit with the price in the message so git history
doubles as a price-change log.

### Contact Information
Update phone numbers, email, and social links in:
- `components/header.tsx`
- `components/footer.tsx`
- `app/about/page.tsx`

## Deployment

### Deploy

Pushing to `main` triggers a Netlify build and deploy. Pull requests get a
deploy preview -- always check the preview in **both EN and PT** before
merging.

To run a production build locally:

```bash
npm run build
npm run start
```
### Update Domain
1. Update `SITE_URL` in `app/layout.tsx` (drives `metadataBase`, canonicals and JSON-LD)
2. Update the domain in `app/sitemap.ts` and `app/robots.ts`
3. Update the WhatsApp number in `lib/booking.ts` if it changes -- it is used site-wide

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Images served through `next/image` (WebP/AVIF, responsive sizes)
- Fonts self-hosted at build time, no third-party font requests
- Background videos are not preloaded; each page loads only its own

## License

© 2026 CAMY Wellness & Spa. All rights reserved.

## Support

For issues or questions:
- Phone: +258 841 921 846
- WhatsApp: https://wa.me/258841921846
- Instagram: @camywellnessspa
