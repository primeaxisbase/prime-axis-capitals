import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Prime Axis Capitals - Financial Partner for Loans, Tax & Accounting Services",
  description: "Prime Axis Capitals is your trusted financial partner connecting you with leading banks and financial institutions for personal loans, home loans, business loans, and financial services.",
  keywords: [
    "Prime Axis Capitals",
    "Financial Partner",
    "Personal Loan",
    "Home Loan",
    "Business Loan",
    "Loan Against Property",
    "Credit Card",
    "GST Filing",
    "Income Tax Filing",
    "Accounting Services",
    "EMI Calculator",
    "Quick Approval",
    "Financial Advisory",
    "Loan Aggregator",
    "Financial Services India",
    "Banking Partner",
    "Tax Consultant",
    "GST Consultant",
    "Business Finance",
    "Personal Finance",
  ],
  authors: [{ name: "Prime Axis Capitals" }],
  creator: "Prime Axis Capitals",
  publisher: "Prime Axis Capitals",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://primeaxiscapital.in"),
  alternates: {
    canonical: "https://primeaxiscapital.in",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Prime Axis Capitals - Fast Loans & Trusted Financial Services",
    description: "Get quick approvals, transparent terms, and expert financial consulting with Prime Axis Capitals. Serve all loan categories and finance needs.",
    url: "https://primeaxiscapital.in",
    siteName: "Prime Axis Capitals",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://primeaxiscapital.in/logo.svg",
        width: 1200,
        height: 630,
        alt: "Prime Axis Capitals - Your Financial Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Axis Capitals - Trusted Loan & Tax Experts",
    description: "Secure loans, GST & income tax filing, and accounting support. Easy online process, fast approval, and personalized finance advice.",
    creator: "@PrimeAxisCap",
    images: ["https://primeaxiscapital.in/logo.svg"],
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Prime Axis Capitals",
    "description": "Your trusted financial partner connecting you with leading banks and financial institutions for personal loans, home loans, business loans, and financial services.",
    "url": "https://primeaxiscapital.in",
    "logo": "https://primeaxiscapital.in/logo.svg",
    "sameAs": [
      "https://www.facebook.com/primeaxiscapitals",
      "https://www.linkedin.com/company/primeaxiscapitals",
      "https://twitter.com/PrimeAxisCap"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7428614189",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "serviceType": [
      "Personal Loans",
      "Home Loans",
      "Business Loans",
      "Loan Against Property",
      "Credit Cards",
      "GST Filing",
      "Income Tax Filing",
      "Accounting Services"
    ],
    "areaServed": "IN",
    "priceRange": "$$"
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <meta name="msapplication-TileColor" content="#1b94cb" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${poppins.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
