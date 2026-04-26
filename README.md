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

## License

This project is proprietary and confidential. All rights reserved.

## Support

For questions or support, contact:
- Email: info@primeaxiscapital.in
- Phone: +91 742861 14189

---

Built with ❤️ by Arronstone
or questions or support, contact:
- Email: usethisforchanges@gmail.com