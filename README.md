# Professional Services Firm Website Template

A sophisticated, production-ready Next.js 15 website template designed for law firms, accounting firms, consulting agencies, financial advisors, and other professional services businesses.

## Features

- **Next.js 15** with App Router and React 19
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom color scheme
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons
- **Fully Responsive** design for all devices
- **SEO Optimized** with proper metadata
- **Accessibility** focused components

## Demo Content

This template includes demo content for "Sterling & Associates Law Firm" including:

- 6 team member profiles with detailed bios
- 6 practice areas/services
- 6 case studies with full details
- 4 client testimonials
- 3 office locations
- Awards and credentials

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, practice areas preview, team preview, credentials, testimonials, case studies |
| About | `/about` | Firm history, values, achievements, timeline |
| Team | `/team` | Attorney/advisor profiles grid |
| Team Member | `/team/[slug]` | Individual profile with bio, credentials, cases |
| Services | `/services` | All practice areas |
| Service Detail | `/services/[slug]` | Individual practice area with team leads |
| Case Studies | `/case-studies` | Success stories grid |
| Case Study Detail | `/case-studies/[slug]` | Full case study with challenge, solution, result |
| Contact | `/contact` | Contact form with office locations |

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone or copy this template:

```bash
cd ft-template-professional-services
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Site Configuration

Edit `lib/config.ts` to customize:

- Firm name and tagline
- Contact information
- Office locations
- Navigation links
- Team members
- Practice areas
- Case studies
- Testimonials
- Awards and credentials

### Color Scheme

The template uses a sophisticated navy blue and gold color scheme. Customize colors in `tailwind.config.ts`:

```typescript
colors: {
  navy: {
    // Primary navy blue palette
    50: '#f0f4f8',
    // ... through 950
  },
  gold: {
    // Gold accent palette
    50: '#fffbeb',
    // ... through 900
  },
}
```

### Typography

The template uses:
- **Serif fonts** (Georgia) for headings - professional and authoritative
- **Sans-serif fonts** (Inter) for body text - clean and readable

### Images

Replace placeholder images from Unsplash with your own:
- Team member headshots (400x500 recommended)
- Hero backgrounds (1920x1080)
- Service/practice area images (800x600)
- Case study images (800x600)

## Project Structure

```
ft-template-professional-services/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── case-studies/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   ├── cta.tsx
│   │   ├── hero.tsx
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   ├── cta.tsx
│   │   ├── hero.tsx
│   │   └── page.tsx
│   ├── team/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   ├── cta.tsx
│   │   ├── hero.tsx
│   │   └── page.tsx
│   ├── cta-section.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── footer.tsx
│   │   └── navbar.tsx
│   ├── sections/
│   │   ├── case-studies-preview.tsx
│   │   ├── credentials.tsx
│   │   ├── hero.tsx
│   │   ├── practice-areas.tsx
│   │   ├── team-grid.tsx
│   │   └── testimonials.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       └── container.tsx
├── lib/
│   └── config.ts
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Components

### UI Components

- **Button** - Multiple variants (primary, secondary, ghost, outline) and sizes
- **Card** - Elevated, dark, outlined, and flat variants with optional hover effects
- **Container** - Responsive container with configurable max-width
- **Section** - Consistent section spacing with background variants
- **SectionHeader** - Standardized section titles with dividers

### Section Components

- **Hero** - Split hero with parallax background and feature cards
- **PracticeAreas** - Grid of practice area cards with icons
- **TeamGrid** - Team member profiles with hover overlay
- **Credentials** - Awards, credentials, and statistics
- **Testimonials** - Carousel with client quotes
- **CaseStudiesPreview** - Case study cards with images

### Layout Components

- **Navbar** - Sticky navigation with mobile menu
- **Footer** - Multi-column footer with credentials bar

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

Build the production version:

```bash
npm run build
npm start
```

## Environment Variables

No environment variables are required for basic functionality. For production, you may want to add:

```env
# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact Form (if using external service)
CONTACT_FORM_API=your-api-endpoint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template is provided for commercial and personal use. Feel free to customize and deploy for your clients or projects.

## Support

For questions or customization assistance, please open an issue in the repository.

---

Built with Next.js 15, React 19, and Tailwind CSS
