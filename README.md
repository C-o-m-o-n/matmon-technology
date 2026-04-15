# Matmon Technology Website

A professional, modern website for Kenya's sovereign data center operator built with Next.js 16 and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The site will be available at `http://localhost:3000`

## 📁 Project Structure

```
app/
├── page.tsx              # Home/Landing page
├── about/page.tsx        # About Us
├── infrastructure/page.tsx # Infrastructure roadmap
├── services/page.tsx     # Services overview
├── compliance/page.tsx   # Compliance & Security
├── contact/page.tsx      # Contact form
├── layout.tsx            # Root layout
└── globals.css           # Global styles + design system

components/
├── navigation.tsx        # Header with navigation
├── footer.tsx           # Footer with links
├── layout-wrapper.tsx   # Nav + Footer wrapper
├── section-container.tsx # Reusable section layout
├── service-card.tsx     # Service card component
├── timeline-card.tsx    # Timeline/phase card
└── cta-button-pair.tsx  # CTA button pair
└── ui/                  # shadcn/ui components

public/
├── hero-bg.jpg          # Hero section image
├── infrastructure.jpg   # Infrastructure image
└── robots.txt          # SEO robots file
```

## 🎨 Design System

### Colors (Dark Mode First)
- **Background**: `#0A0A0A` (Deep dark)
- **Primary**: `#00A651` (Deep green)
- **Accent**: `#00BFFF` (Electric blue)
- **Card**: `#1A1A1A` (Dark gray)
- **Border**: `#333333` (Subtle)
- **Text**: `#FFFFFF` (White)

### Typography
- **Font Family**: Geist (Next.js default)
- **Heading Scale**: 4xl→6xl (mobile→desktop)
- **Line Height**: 1.4-1.6 for readability

### Spacing
- **Section Padding**: `py-16 sm:py-20 lg:py-24`
- **Gap Scale**: Tailwind standard (gap-4, gap-6, gap-8, etc.)
- **Max Width**: `max-w-7xl` (80rem)

## 📱 Features

✅ **Dark Mode by Default** - Modern, professional aesthetic
✅ **Fully Responsive** - Mobile-first design with tablet & desktop breakpoints
✅ **Accessible** - WCAG 2.1 AA compliant with semantic HTML
✅ **SEO Optimized** - Metadata on all pages, proper heading hierarchy
✅ **Interactive Form** - Contact form with validation and success states
✅ **Professional Components** - Service cards, timeline, CTA buttons
✅ **High Performance** - Static generation, optimized images, minimal JS
✅ **Tailwind CSS v4** - Latest version with improved performance

## 🔧 Customization

### Change Colors
Edit `/app/globals.css` CSS variables:
```css
--background: #0A0A0A;
--primary: #00A651;
--accent: #00BFFF;
```

### Update Content
- All page content is in `/app/[page]/page.tsx` files
- Company info in components (navigation, footer)
- Contact details in `contact/page.tsx` and `footer.tsx`

### Add/Remove Pages
1. Create new directory: `/app/new-page/`
2. Add `page.tsx` with page content
3. Update navigation in `components/navigation.tsx`

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Push to GitHub, then:
# 1. Import repository in Vercel dashboard
# 2. Select Next.js preset
# 3. Deploy!
```

### Other Platforms
Works with any Node.js hosting:
- Heroku
- Railway
- AWS Amplify
- DigitalOcean App Platform

## 📊 Pages Overview

| Page | Purpose | Key Content |
|------|---------|------------|
| `/` | Landing page | Hero, trust bar, services, vision |
| `/about` | Company info | Story, mission, values, team |
| `/infrastructure` | Technical details | Roadmap, specs, certifications |
| `/services` | Service details | 6 service offerings with specs |
| `/compliance` | Compliance info | DPA 2019, ODPC, security details |
| `/contact` | Contact form | Form, contact info, location, FAQ |

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: lucide-react
- **Forms**: React Hook Form
- **Font**: Geist (Google Fonts)
- **Hosting**: Vercel (recommended)

## 📝 SEO

All pages include:
- ✅ Unique meta titles and descriptions
- ✅ Proper heading hierarchy (h1→h6)
- ✅ Alt text on all images
- ✅ Semantic HTML structure
- ✅ robots.txt configuration
- ✅ Mobile-responsive viewport

## 🔐 Security

- HTTPS by default (on Vercel)
- No sensitive data in client-side code
- Environment variables supported
- Contact form validation
- OWASP best practices followed

## 📧 Contact Form Integration

Currently uses client-side state. To enable email:

1. Choose service: SendGrid, Mailgun, Resend, etc.
2. Update `app/contact/page.tsx`:
```tsx
const handleSubmit = async (e) => {
  // Send to your email service
  // await sendEmail(formData);
}
```
3. Add environment variables to `.env.local`

## 🚀 Performance

- **Lighthouse Score**: 90+ (target)
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Image Optimization**: Next.js Image component ready

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

## 📄 License

This project is the property of Matmon Technology.

## 🤝 Support

For questions or customization needs, contact the development team.

---

**Built with v0** - A Next.js development environment by Vercel
