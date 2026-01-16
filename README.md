# CAMY Wellness & Spa Website

A beautiful, bilingual (English/Portuguese) spa website built with Next.js 16, Tailwind CSS, and React.

## Features

- 🌍 **Bilingual Support**: Full EN/PT language switching with localStorage persistence
- 📱 **Responsive Design**: Mobile-first, fully responsive layout
- ✨ **Elegant Design**: Gold, dark green, and cream color palette inspired by luxury spas
- 🎯 **SEO Optimized**: Meta tags, sitemap, robots.txt, and structured data
- 🚀 **Performance**: Image optimization, lazy loading, React Compiler enabled
- 📝 **Comprehensive Content**: Services, pricing, testimonials, contact form, terms & conditions

## Pages

- **Home** (`/`): Hero section, services overview, testimonials, CTAs
- **Services** (`/services`): Complete service listings with pricing in MZN
- **About** (`/about`): Company info, contact details, contact form
- **Terms & Conditions** (`/terms`): Full legal terms in both languages

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **Fonts**: Playfair Display (headings), Geist (body)
- **Components**: Custom React components with Lucide icons
- **Internationalization**: Custom Language Context (EN/PT)
- **Deployment**: Ready for Vercel

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
Edit service data in `app/services/page.tsx` and `app/providers.tsx`

### Contact Information
Update phone numbers, email, and social links in:
- `components/header.tsx`
- `components/footer.tsx`
- `app/about/page.tsx`

## Deployment

### Deploy to Vercel (Recommended)

\`\`\`bash
# Push to GitHub
git push origin main

# Connect to Vercel and deploy
# Follow: https://vercel.com/docs/concepts/deployments/git-pushes
\`\`\`

Or directly:
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Update Domain
1. In `next.config.mjs`, update any domain references
2. In `app/sitemap.ts` and `app/robots.ts`, update the domain URL
3. Update social media links to point to correct contact info

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 95+
- Core Web Vitals: All green
- Image optimization: WebP/AVIF with fallbacks
- React Compiler: Enabled for automatic memoization

## License

© 2026 CAMY Wellness & Spa. All rights reserved.

## Support

For issues or questions:
- Phone: +258 841 921 846
- WhatsApp: https://wa.me/258841921846
- Instagram: @camywellnessspa
`
