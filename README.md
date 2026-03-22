# Prime Axis Capitals - Loan Services Website

A modern, responsive website for Prime Axis Capitals, a premier loan providing company. Built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- 🎨 **Modern Design**: Clean, professional design with #196b92 and #1b94cb color palette
- 📱 **Fully Responsive**: Mobile-first approach, works on all devices
- ⚡ **Fast Performance**: Optimized for speed and SEO
- 🎯 **Interactive Elements**: Smooth animations and transitions
- 📊 **EMI Calculator**: Fully functional loan EMI calculator with visual breakdown
- 📝 **Contact Form**: Supabase integration for form submissions
- 📜 **Legal Pages**: Privacy Policy, Terms of Service, Refund Policy, Grievance Redressal
- 🏦 **Partner Banks**: Display of major Indian banks as partners
- ♿ **Accessible**: Follows WCAG guidelines

## Sections

1. **Header** - Sticky navigation with top bar, mobile-responsive menu
2. **Hero Section** - Eye-catching headline with trust indicators
3. **Services Section** - 6 loan products (clickable to form)
4. **Why Choose Us** - 6 key differentiators
5. **How It Works** - 4-step process
6. **EMI Calculator** - Interactive calculator with sliders
7. **Stats Section** - Key metrics and achievements
8. **Testimonials** - Customer reviews and ratings
9. **FAQ Section** - Common questions with accordion
10. **CTA Section** - Contact form with Supabase integration
11. **Partners Section** - Major Indian bank logos
12. **Footer** - Navigation, social links, legal pages

## Color Scheme

- **Primary Dark**: #196b92
- **Primary Light**: #1b94cb (Logo color)
- **White**: #FFFFFF
- **Black**: #000000

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display (headings), Inter (body), Poppins
- **Backend**: Supabase (PostgreSQL)

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Supabase account (for form submissions)

### Installation

1. Clone or download the project:
```bash
git clone <repository-url>
cd prime-axis-capitals
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Set up Supabase:
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to SQL Editor and run the contents of `supabase-schema.sql`
   - Copy your project URL and anon key from Settings > API
   - Create a `.env.local` file with:
```
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwc211b2tjbmVlcGZteXFuaGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5ODc4MTIsImV4cCI6MjA4OTU2MzgxMn0.mkFh5-tgacdIIW7cafRPcsE-wk1w2Eu74KOkqp2N2s0-here
```

4. Start the development server:
```bash
bun run dev
# or
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Key Features

### EMI Calculator

The EMI calculator allows users to:
- Select loan type (Personal, Home, Business, Education, Vehicle, Loan Against Property)
- Adjust loan amount with slider (₹50K to ₹10 Cr based on loan type)
- Adjust interest rate (5% to 20% p.a.)
- Adjust tenure (6 months to 30 years based on loan type)
- View EMI breakdown with visual pie chart
- See principal vs interest split
- Apply for the selected loan directly

### Loan Product Connection

Each loan product card in the Services section is clickable and:
- Pre-selects the loan type in the contact form
- Smoothly scrolls to the enquiry form
- Shows the selected loan type automatically

### Legal Pages

Four comprehensive legal pages:
1. **Privacy Policy** - Data collection, usage, and protection
2. **Terms of Service** - Service usage terms and conditions
3. **Refund Policy** - Fee refund scenarios and process
4. **Grievance Redressal** - Complaint procedure and escalation matrix

### Partner Banks

Displays logos of 12 major Indian banks:
- SBI, HDFC, ICICI, Axis, Kotak, Bank of Baroda
- PNB, IndusInd, Yes Bank, Federal Bank, IDFC First, RBL Bank

## Project Structure

```
prime-axis-capitals/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts      # Supabase API endpoint
│   │   ├── globals.css           # Global styles & theme
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Main page
│   ├── components/
│   │   ├── sections/             # Page sections
│   │   │   ├── hero.tsx
│   │   │   ├── services.tsx
│   │   │   ├── why-choose-us.tsx
│   │   │   ├── how-it-works.tsx
│   │   │   ├── emi-calculator.tsx
│   │   │   ├── testimonials.tsx
│   │   │   ├── stats.tsx
│   │   │   ├── faq.tsx
│   │   │   ├── cta.tsx
│   │   │   └── partners.tsx
│   │   ├── legal/
│   │   │   └── legal-page.tsx    # Legal pages component
│   │   ├── header.tsx            # Navigation header
│   │   ├── footer.tsx            # Site footer
│   │   └── ui/                   # shadcn/ui components
│   └── hooks/                    # Custom hooks
├── public/                       # Static assets
├── supabase-schema.sql           # Database schema
├── .env.example                  # Environment variables template
└── package.json
```

## Customization

### Colors

The color scheme is defined in `src/app/globals.css`:
- Primary Dark: #196b92
- Primary Light: #1b94cb
- Background: #FFFFFF
- Foreground: #000000

### Typography

- **Headings**: Playfair Display (elegant, classic)
- **Body**: Inter (clean, readable)
- **Accent**: Poppins

### Content

All content is defined in the component files. Update the text content in each section file under `src/components/sections/`.

## Supabase Setup

1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to SQL Editor and paste the contents of `supabase-schema.sql`
4. Execute the SQL to create the `contact_submissions` table
5. Get your credentials from Settings > API:
   - Project URL
   - Anon/Public Key
6. Add these to your `.env.local` file

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
4. Deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint

## License

This project is proprietary and confidential. All rights reserved.

## Support

For questions or support, contact:
- Email: info@primeaxiscapital.in
- Phone: +91 742861 14189

---

Built with ❤️ by Prime Axis Capitals
