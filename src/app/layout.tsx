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
  title: "Prime Axis Capitals - Fast Loans, Tax & Accounting, and Financial Freedom",
  description: "Prime Axis Capitals delivers fast, transparent loan solutions, GST & income tax filing, accounting, and financial advisory for individuals and businesses across India.",
  keywords: [
    "Prime Axis Capitals",
    "Loan Provider",
    "Personal Loan",
    "Home Loan",
    "Business Loan",
    "Loan Against Property",
    "GST Filing",
    "Income Tax Filing",
    "Accounting Services",
    "EMI Calculator",
    "Quick Loan Approval",
    "Financial Advisory",
  ],
  authors: [{ name: "Prime Axis Capitals" }],
  metadataBase: new URL("https://primeaxiscapital.in"),
  alternates: {
    canonical: "https://primeaxiscapital.in",
  },
  icons: {
    icon: "/logo.svg",
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
        alt: "Prime Axis Capitals logo",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${poppins.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
