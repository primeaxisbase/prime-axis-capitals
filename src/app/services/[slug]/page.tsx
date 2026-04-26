"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { useNavigation } from "@/hooks/use-navigation";

interface ServiceData {
  [key: string]: {
    name: string;
    description: string;
    overview: string;
    overviewDetail?: string;
    keyBenefits: string[];
    process: {
      title: string;
      description: string;
    }[];
    features: string[];
    whyChoose: string[];
    eligibility: string[];
  };
}

// Function to get the correct image filename for each service
const getServiceImage = (slug: string): string => {
  const imageMap: Record<string, string> = {
    "personal-loan": "personal-loan.jpg",
    "home-loan": "home-loan.jpg",
    "business-loan": "business-loan.jpg",
    "loan-against-property": "loan-against-property.jpg",
    "credit-card-assistance": "credit-card.jpg",
    "accounting-service": "accounting.jpg",
    "gst-filing": "gst.jpg",
    "income-tax-filing": "income-tax.jpg",
  };
  return imageMap[slug] || "";
};

const servicesData: ServiceData = {
  "personal-loan": {
    name: "Personal Loans",
    description: "Flexible personal loans for all your financial needs",
    overview:
      "Get instant personal loans up to ₹50 Lakhs with minimal documentation and low interest rates and quick approval. Ideal for medical emergencies, travel, weddings, debt consolidation or any urgent need.",
    overviewDetail:
      "Getting a personal loan should be simple, transparent, and stress-free. Our loan solutions are designed to provide maximum convenience to both salaried and self-employed individuals.",
    keyBenefits: [
      "Quick approval within 24-48 hours",
      "No collateral required",
      "Loan amounts up to ₹50 Lakhs",
      "Flexible tenure from 1-7 years",
      "Competitive interest rates from 9.15% p.a.",
      "Minimal documentation required",
      "Support for low CIBIL profiles",
      "No prepayment penalties",
    ],
    process: [
      {
        title: "Application",
        description: "Submit your application online with basic details",
      },
      {
        title: "Verification",
        description: "Our team verifies your documents and creditworthiness",
      },
      {
        title: "Approval",
        description: "Get approval within 24-48 hours",
      },
      {
        title: "Disbursement",
        description: "Funds credited directly to your bank account",
      },
    ],
    features: [
      "Quick disbursement of funds",
      "Flexible repayment schedule",
      "No hidden charges",
      "Instant approval for eligible applicants",
      "Balance transfer options available",
      "Top-up loan facility",
      "Optional insurance coverage",
      "24/7 customer support",
    ],
    whyChoose: [
      "Fastest approval process in the industry",
      "Competitive interest rates across partner banks",
      "Minimal paperwork and documentation",
      "Transparent and fair terms",
      "Expert guidance throughout the process",
      "Secure and confidential application process",
      "Multiple disbursement options",
      "Dedicated customer support",
    ],
    eligibility: [
      "Age: 21-60 years",
      "Employment: Salaried/Self-employed with 2+ years experience",
      "Income: Minimum ₹1.8 Lakhs p.a.",
      "Credit Score: 650 or above preferred",
      "Minimal documentation: Aadhaar, PAN, Income proof{Salary slips/ITR}",
      "Qualified co-applicant can improve approval chances",
      "No major defaults in the past 2 years",
      "Additional income sources considered",
    ],
  },
  "home-loan": {
    name: "Home Loans",
    description: "Affordable home loans to turn your dream home into reality",
    overview:
      "Home loans enable you to purchase or construct your dream property with flexible repayment terms. Our partner banks offer competitive rates, quick approvals, and various schemes to make homeownership accessible. Whether you're a first-time buyer or upgrading your property, we have tailored solutions for you.",
    keyBenefits: [
      "Loan amounts up to ₹5 Crores",
      "Tenure up to 30 years",
      "Competitive interest rates from 8.35% p.a.",
      "Fast approval and disbursement",
      "Tax benefits on interest and principal",
      "Special schemes for women borrowers",
      "Balance transfer facility",
      "Property insurance options",
    ],
    process: [
      {
        title: "Pre-approval",
        description: "Get pre-approved amount based on your income",
      },
      {
        title: "Property Verification",
        description: "Our team conducts property valuation and verification",
      },
      {
        title: "Documentation",
        description: "Submit required documents for final approval",
      },
      {
        title: "Disbursement",
        description: "Funds disbursed in stages or lump sum as per agreement",
      },
    ],
    features: [
      "Competitive interest rates",
      "Long tenure up to 30 years",
      "Flexible disbursement options",
      "No processing fee on balance transfers",
      "Top-up facility on existing loans",
      "Optional life and property insurance",
      "EMI holiday options",
      "Digital documentation process",
    ],
    whyChoose: [
      "Lowest interest rates in the market",
      "Fast approval process",
      "Transparent fee structure",
      "Expert legal and financial advice",
      "Hassle-free documentation",
      "Multiple disbursement options",
      "Tax benefits optimization",
      "Strong partner bank network",
    ],
    eligibility: [
      "Age: 21-65 years",
      "Employment: Salaried/Self-employed with 3+ years experience",
      "Income: Minimum ₹3 Lakhs p.a.",
      "Credit Score: 700 or above",
      "Property: Legal, clear title property",
      "Qualified co-applicant can enhance approval chances",
      "Employment Stability: Minimum 3 years in current job",
      "No serious defaults in last 5 years",
    ],
  },
  "business-loan": {
    name: "Business Loans",
    description: "Unsecured business loans for growth and expansion",
    overview:
      "Business loans are designed to help entrepreneurs and business owners fund expansion, working capital, equipment purchase, or operational needs. Offered as unsecured loans by our partner banks, they provide quick access to capital without pledging collateral, enabling your business to grow faster.",
    keyBenefits: [
      "Loan amounts up to ₹2 Crores",
      "Unsecured loans (no collateral required)",
      "Interest rates from 10.5% p.a.",
      "Quick approval and disbursement",
      "Flexible tenure up to 7 years",
      "No restrictions on fund usage",
      "Tax deductible interest payments",
      "Multiple disbursement options",
    ],
    process: [
      {
        title: "Business Profile Submission",
        description: "Submit business details and financial statements",
      },
      {
        title: "Financial Assessment",
        description: "Banks assess business performance and cash flow",
      },
      {
        title: "Approval & Sanction",
        description: "Loan amount approved based on business profile",
      },
      {
        title: "Disbursement",
        description: "Funds disbursed directly for business use",
      },
    ],
    features: [
      "No collateral or security required",
      "Flexible loan amounts",
      "Quick approval process",
      "Competitive interest rates",
      "Tax-deductible interest",
      "Multiple disbursement options",
      "Working capital facility",
      "Equipment finance options",
    ],
    whyChoose: [
      "Quick capital for business growth",
      "No collateral requirement",
      "Flexible terms based on cash flow",
      "Competitive rates for businesses",
      "Expert business advisory",
      "Simple application process",
      "Multiple usage options",
      "Growth-focused solutions",
    ],
    eligibility: [
      "Business age: Minimum 2 years in operation",
      "Annual turnover: Minimum ₹20 Lakhs",
      "Proprietor/Partner age: 21-60 years",
      "Industry: Non-agricultural sectors preferred",
      "Financial records: Audited accounts,ITRs and Bank statements",
      "Credit Score: 650 or above preferred",
      "GST Registration: Required for most applicants",
      "No defaults in last 2 years",
    ],
  },
  "loan-against-property": {
    name: "Loan Against Property",
    description: "Leverage your property value without selling it",
    overview:
      "Loan Against Property (LAP) allows you to borrow against the value of your residential or commercial property without selling it. It's an excellent option for large financial requirements like business expansion, wedding expenses, education, or other needs. Maintain ownership while accessing substantial funds.",
    keyBenefits: [
      "High loan amounts (up to 0% of property value)",
      "Loan up to ₹5 Crores",
      "Competitive interest rates from 9.5% p.a.",
      "Long tenure up to 20 years",
      "Retain property ownership",
      "Quick approval process",
      "Flexible repayment options",
      "Tax benefits on interest",
    ],
    process: [
      {
        title: "Property Assessment",
        description: "Professional valuation of your property",
      },
      {
        title: "Loan Approval",
        description: "Loan amount sanctioned based on property value",
      },
      {
        title: "Documentation",
        description: "Legal documentation and property registration",
      },
      {
        title: "Disbursement",
        description: "Funds disbursed once all formalities are complete",
      },
    ],
    features: [
      "High loan-to-value ratio",
      "Large loan amounts available",
      "Long repayment tenure",
      "Flexible EMI options",
      "No restrictions on fund usage",
      "Balance transfer facility",
      "Top-up loan option",
      "Tax benefits available",
    ],
    whyChoose: [
      "Access large amounts of capital",
      "Retain full property ownership",
      "Long tenure reduces monthly burden",
      "Competitive interest rates",
      "Flexible repayment terms",
      "No prepayment penalties",
      "Quick processing",
      "Expert guidance on documentation",
    ],
    eligibility: [
      "Age: 21-65 years",
      "Property: Residential or commercial property",
      "Ownership: Clear and unencumbered title",
      "Property Age: Preferably less than 25 years",
      "Income: Depends on loan amount required",
      "Credit Score: 650 or above preferred",
      "Employment Stability: Minimum 2-3 years",
      "Property Location: Recognized localities preferred",
    ],
  },
  "credit-card-assistance": {
    name: "Credit Card Assistance",
    description: "Find the best credit card options tailored to your needs",
    overview:
      "Our credit card assistance helps you select the most suitable credit card from our partner banks. Whether you're looking for cashback rewards, travel benefits, lifestyle perks, or simply a credit building tool, we help you compare and choose the perfect card for your spending patterns and lifestyle.",
    keyBenefits: [
      "Zero annual fee options available",
      "High credit limits based on eligibility",
      "Multiple rewards and cashback programs",
      "Exclusive travel and lifestyle benefits",
      "Easy EMI conversion options",
      "Purchase protection and insurance",
      "Contactless and digital payment options",
      "Assitance for low CIBIL score customers",
    ],
    process: [
      {
        title: "Eligibility Check",
        description: "Verify your eligibility for credit cards",
      },
      {
        title: "Selection",
        description: "Choose from multiple card options",
      },
      {
        title: "Application",
        description: "Easy online application process",
      },
      {
        title: "Approval & Delivery",
        description: "Instant approval with card delivery at home",
      },
    ],
    features: [
      "Multiple card options to choose from",
      "Rewards and cashback programs",
      "Travel and dining benefits",
      "Insurance coverage benefits",
      "Purchase protection",
      "Interest-free EMI options",
      "Digital wallet integration",
      "24/7 customer support",
    ],
    whyChoose: [
      "Expert guidance to choose right card",
      "Multiple options from top banks",
      "Best rewards and benefits",
      "Flexible payment options",
      "Build credit history",
      "Exclusive offers and discounts",
      "100% secure and hassle-free application process",
      "Comprehensive card benefits",
    ],
    eligibility: [
      "Age: 21-60 years",
      "Employment: Salaried/Self-employed",
      "Income: Minimum ₹1.5 Lakhs p.a.",
      "Credit Score: 650 or above preferred",
      "Employment Stability: At least 1 year",
      "No major defaults",
      "Valid address proof required",
      "Indian citizen or resident",
    ],
  },
  "accounting-service": {
    name: "Accounting Service",
    description: "Professional accounting and bookkeeping services",
    overview:
      "Our accounting services provide comprehensive bookkeeping, financial reporting, and accounting solutions for individuals and businesses. We help organize your financial records, ensure compliance, and provide insights into your financial health. Let us handle your accounts so you can focus on your core business.",
    keyBenefits: [
      "Monthly bookkeeping and reconciliation",
      "Financial statement preparation",
      "Tax-ready financial records",
      "Expense categorization and management",
      "Budget planning and analysis",
      "Financial ratio analysis",
      "Quarterly financial reviews",
      "Expert financial consultation",
    ],
    process: [
      {
        title: "Understanding Needs",
        description: "Understand your business and accounting requirements",
      },
      {
        title: "Data Collection",
        description: "Gather financial documents and records",
      },
      {
        title: "Processing",
        description: "Organize, categorize, and process all transactions",
      },
      {
        title: "Reporting",
        description: "Provide comprehensive financial reports and analysis",
      },
    ],
    features: [
      "Complete bookkeeping services",
      "Monthly bank reconciliation",
      "Financial statement generation",
      "Expense tracking and categorization",
      "Budget variance analysis",
      "Cash flow management",
      "Invoice and payment tracking",
      "Digital documentation storage",
    ],
    whyChoose: [
      "Accurate and reliable accounting",
      "Reduced financial errors",
      "Better financial insights",
      "Tax optimization support",
      "Time saving for business owners",
      "Professional financial reports",
      "Regulatory compliance assurance",
      "Expert financial guidance",
    ],
    eligibility: [
      "Any individual or business can avail",
      "Suitable for all business sizes",
      "Sole proprietors, partnerships, companies",
      "Professional practices",
      "Freelancers and consultants",
      "Retail and wholesale businesses",
      "Service providers",
      "Manufacturing units",
    ],
  },
  "gst-filing": {
    name: "GST Filing",
    description: "Hassle-free GST compliance and filing services",
    overview:
      "Our GST filing services ensure your business stays compliant with all GST regulations. We handle monthly GST returns, input tax credit optimization, reconciliation, and ensure timely filing to help you avoid penalties. Our experts stay updated with all GST law changes to keep your business compliant.",
    keyBenefits: [
      "GST registration and timely GST return filing",
      "Input Tax Credit (ITC) optimization",
      "Monthly/Quarterly reconciliation",
      "GST audit assistance",
      "Penalty and interest minimization",
      "Amendment and correction filing",
      "Invoice reconciliation",
      "Compliance assurance",
    ],
    process: [
      {
        title: "Record Organization",
        description: "Organize all invoices and purchase documents",
      },
      {
        title: "ITC Reconciliation",
        description: "Identify and verify eligible input tax credits",
      },
      {
        title: "Return Preparation",
        description: "Prepare accurate GST returns (GSTR-1, 2, 3B, etc.)",
      },
      {
        title: "Filing & Compliance",
        description: "File returns on time and maintain compliance records",
      },
    ],
    features: [
      "Monthly GST return filing",
      "Quarterly filing for small businesses",
      "Input Tax Credit (ITC) optimization",
      "Invoice matching and reconciliation",
      "E-way bill management",
      "GST audit assistance",
      "Amendment filing services",
      "Compliance calendar management",
    ],
    whyChoose: [
      "Expert GST knowledge and compliance",
      "Timely filing prevents penalties",
      "Maximized tax credits",
      "Audit-ready documentation",
      "Government portal familiarity",
      "Regular compliance updates",
      "Penalty avoidance",
      "Stress-free GST management",
    ],
    eligibility: [
      "Any GST-registered business",
      "Applicable to all turnover slabs",
      "Manufacturers and traders",
      "Service providers",
      "E-commerce businesses",
      "Professionals and consultants",
      "Non-profit organizations",
      "Partnership and corporate entities",
    ],
  },
  "income-tax-filing": {
    name: "Income Tax Filing",
    description: "Expert income tax filing and tax planning services",
    overview:
      "Our income tax filing services help you file accurate ITRs and optimize your tax liability legally. We guide you through the filing process, ensure compliance with tax laws, and provide strategic advice to minimize your tax burden. From salaried individuals to business owners, we serve all categories of taxpayers.",
    keyBenefits: [
      "Accurate ITR filing (ITR-1, 2, 3, etc.)",
      "Maximum deductions optimization",
      "Tax-saving strategies",
      "Compliance with tax laws",
      "Penalty avoidance",
      "Quick processing and refunds",
      "Amendment filing services",
      "Year-round tax planning",
    ],
    process: [
      {
        title: "Information Collection",
        description: "Gather income, expense, and investment documents",
      },
      {
        title: "Deduction Identification",
        description: "Identify all eligible deductions and exemptions",
      },
      {
        title: "Return Preparation",
        description: "Prepare accurate ITR based on your profile",
      },
      {
        title: "Filing & Follow-up",
        description: "File return and handle any follow-ups with IT dept",
      },
    ],
    features: [
      "ITR filing for all categories",
      "Deduction optimization",
      "Investment advice for tax savings",
      "Loss carryforward management",
      "TDS reconciliation",
      "Form 26AS verification",
      "Refund tracking and follow-up",
      "Amendment and rectification",
    ],
    whyChoose: [
      "Expert tax advisors with years of experience",
      "Optimized tax liability",
      "Compliant with all tax laws",
      "Faster refund processing",
      "Penalty avoidance",
      "Comprehensive tax planning",
      "Year-round support",
      "Easy documentation process",
    ],
    eligibility: [
      "Salaried individuals",
      "Self-employed professionals",
      "Business owners",
      "Investors and fund earners",
      "Freelancers and consultants",
      "Directors of companies",
      "Any income-earning individual",
      "Corporate entities",
    ],
  },
};

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug];
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const [isCtaInView, setIsCtaInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCtaInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (ctaSectionRef.current) {
      observer.observe(ctaSectionRef.current);
    }

    return () => {
      if (ctaSectionRef.current) {
        observer.unobserve(ctaSectionRef.current);
      }
    };
  }, []);

  const { goBack } = useNavigation();
  const router = useRouter();

  const handleBackButton = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    router.push('/#services');
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service page you're looking for doesn't exist.</p>
          <Button asChild className="bg-gradient-primary hover:opacity-90 text-white">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-white border-b border-border/40">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={handleBackButton}
            className="inline-flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
          >
            {/* Left content - Title, Description, and Overview */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-black mb-6">
                {service.name}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-6">
                {service.description}
              </p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-muted-foreground mb-4 leading-relaxed"
              >
                {service.overview}
              </motion.p>

              {service.overviewDetail && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {service.overviewDetail}
                </motion.p>
              )}
            </div>

            {/* Right content - Service Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block order-2"
            >
              <div className="relative w-full h-full min-h-[400px] max-w-md mx-auto flex items-center justify-center">
                <Image
                  src={`/images/services-frame/${getServiceImage(slug)}`}
                  alt={service.name}
                  fill
                  className="rounded-lg shadow-lg object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = document.getElementById(`service-fallback-${slug}`);
                    if (fallback) {
                      fallback.style.display = "flex";
                    }
                  }}
                />
                <div
                  id={`service-fallback-${slug}`}
                  className="absolute inset-0 rounded-lg shadow-lg bg-gradient-to-br from-[#1b94cb]/10 to-[#0d6a9e]/10 flex flex-col items-center justify-center text-center p-6"
                  style={{ display: 'none' }}
                >
                  <div className="w-16 h-16 bg-[#1b94cb]/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#1b94cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1b94cb] mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground">Professional financial services tailored for you</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-black text-center mb-12"
          >
            Key Benefits
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.keyBenefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4"
              >
                <CheckCircle2 className="h-6 w-6 text-[#196b92] flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-black text-center mb-12"
          >
            How It Works
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 text-white font-bold bg-[#196b92]"
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-black mb-2">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-black text-center mb-12"
          >
            Features
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-border/50"
              >
                <CheckCircle2 className="h-6 w-6 text-[#196b92] flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-black text-center mb-12"
          >
            Why Choose Us?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {service.whyChoose.map((reason, index) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-border/50"
              >
                <CheckCircle2 className="h-6 w-6 text-[#196b92] flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-black text-center mb-12"
          >
            Eligibility Criteria
          </motion.h2>

          <div className="max-w-2xl mx-auto bg-white rounded-xl border border-border/50 p-8">
            <div className="space-y-4">
              {service.eligibility.map((criterion, index) => (
                <motion.div
                  key={criterion}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#196b92] flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{criterion}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaSectionRef} id="cta-section" className="py-16 md:py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Explore our {service.name.toLowerCase()} and take the next step towards your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+917428614189">
                <Button size="lg" variant="outline" className="text-[#196b92] border-white hover:bg-white/20">
                  Call Now
                </Button>
              </a>
              <a href="/#quick-enquiry-form">
                <Button size="lg" className="bg-white text-[#196b92] hover:bg-white/90">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Floating CTA Buttons - Hidden when CTA section is visible */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: isCtaInView ? 0 : 1,
          y: isCtaInView ? 100 : 0,
          pointerEvents: isCtaInView ? "none" : "auto",
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-border/40 p-4 z-30 md:p-6"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 text-[#196b92] border-[#196b92] hover:bg-[#196b92]/10"
              onClick={() => window.location.href = 'tel:+917428614189'}
            >
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
            <Button 
              size="lg" 
              className="flex-1 sm:flex-none bg-gradient-primary hover:opacity-90 text-white flex items-center justify-center gap-2"
              onClick={() => window.location.href = '/#quick-enquiry-form'}
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
