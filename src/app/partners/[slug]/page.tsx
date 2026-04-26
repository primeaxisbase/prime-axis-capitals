"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const partners = [
  { name: "State Bank of India", shortName: "SBI", slug: "sbi", logo: "/images/bank-logo/SBI.jpeg" },
  { name: "HDFC Bank", shortName: "HDFC", slug: "hdfc", logo: "/images/bank-logo/HDFC.png" },
  { name: "ICICI Bank", shortName: "ICICI", slug: "icici", logo: "/images/bank-logo/ICICI.png" },
  { name: "Axis Bank", shortName: "Axis", slug: "axis", logo: "/images/bank-logo/Axis.png" },
  { name: "Kotak Mahindra Bank", shortName: "Kotak", slug: "kotak", logo: "/images/bank-logo/Kotak.png" },
  { name: "Bank of Baroda", shortName: "BOB", slug: "bob", logo: "/images/bank-logo/BOB.jpeg" },
  { name: "Punjab National Bank", shortName: "PNB", slug: "pnb", logo: "/images/bank-logo/PNB.png" },
  { name: "IndusInd Bank", shortName: "IndusInd", slug: "induslnd", logo: "/images/bank-logo/Indus.jpeg" },
  { name: "Yes Bank", shortName: "Yes", slug: "yes", logo: "/images/bank-logo/Yes.jpeg" },
  { name: "Federal Bank", shortName: "Federal", slug: "federal", logo: "/images/bank-logo/Federal.jpeg" },
  { name: "IDFC First Bank", shortName: "IDFC", slug: "idfc", logo: "/images/bank-logo/IDFC.png" },
  { name: "RBL Bank", shortName: "RBL", slug: "rbl", logo: "/images/bank-logo/RBL.png" },
];

const bankData: Record<string, {
  name: string;
  description: string;
  personalLoan: {
    interestRate: string;
    maxAmount: string;
    tenure: string;
    processingFee: string;
    features: string[];
  };
  homeLoan: {
    interestRate: string;
    maxAmount: string;
    tenure: string;
    processingFee: string;
    features: string[];
  };
  businessLoan: {
    interestRate: string;
    maxAmount: string;
    tenure: string;
    processingFee: string;
    features: string[];
  };
  lap: {
    interestRate: string;
    maxAmount: string;
    tenure: string;
    processingFee: string;
    features: string[];
  };
  creditCard: {
    types: string[];
    features: string[];
  };
}> = {
  sbi: {
    name: "State Bank of India",
    description: "India's largest public sector bank, offering comprehensive financial solutions through our partnership.",
    personalLoan: {
      interestRate: "9.15% - 12.15% p.a.",
      maxAmount: "₹50 Lakhs",
      tenure: "Up to 7 years",
      processingFee: "Up to 2% of loan amount",
      features: ["Quick approval", "Flexible repayment", "No collateral required", "Competitive rates"]
    },
    homeLoan: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 30 years",
      processingFee: "Up to 0.5% of loan amount",
      features: ["Low interest rates", "Long tenure", "Tax benefits", "Balance transfer options"]
    },
    businessLoan: {
      interestRate: "10.15% - 14.15% p.a.",
      maxAmount: "₹10 Crores",
      tenure: "Up to 10 years",
      processingFee: "1-2% of loan amount",
      features: ["Working capital loans", "Term loans", "Equipment financing", "MSME focused"]
    },
    lap: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 20 years",
      processingFee: "0.5-1% of loan amount",
      features: ["Higher loan-to-value ratio", "Tax benefits", "Flexible repayment", "Quick processing"]
    },
    creditCard: {
      types: ["IRCTC Credit Card", "YONO Credit Card", "Unnati Credit Card", "SimplyCLICK Credit Card"],
      features: ["Reward points", "Cashback offers", "Low annual fees", "Easy EMI options"]
    }
  },
  hdfc: {
    name: "HDFC Bank",
    description: "Leading private sector bank providing innovative financial products and exceptional service quality.",
    personalLoan: {
      interestRate: "10.25% - 21.00% p.a.",
      maxAmount: "₹40 Lakhs",
      tenure: "Up to 5 years",
      processingFee: "Up to 2.5% of loan amount",
      features: ["Instant approval", "Minimal documentation", "Pre-approved offers", "Doorstep service"]
    },
    homeLoan: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹10 Crores",
      tenure: "Up to 30 years",
      processingFee: "Up to 0.5% of loan amount",
      features: ["Competitive rates", "Balance transfer", "Top-up loans", "Construction loans"]
    },
    businessLoan: {
      interestRate: "11.00% - 16.00% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 7 years",
      processingFee: "1-2% of loan amount",
      features: ["Business loans", "Working capital", "Equipment loans", "MSME loans"]
    },
    lap: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹10 Crores",
      tenure: "Up to 25 years",
      processingFee: "0.5-1% of loan amount",
      features: ["High loan amounts", "Long tenure", "Tax benefits", "Flexible terms"]
    },
    creditCard: {
      types: ["Regalia Credit Card", "Millennia Credit Card", "Diners Club Credit Card", "MoneyBack Credit Card"],
      features: ["Reward points", "Movie tickets", "Dining offers", "International usage"]
    }
  },
  icici: {
    name: "ICICI Bank",
    description: "Technology-driven bank offering comprehensive banking and financial solutions.",
    personalLoan: {
      interestRate: "10.25% - 18.00% p.a.",
      maxAmount: "₹50 Lakhs",
      tenure: "Up to 7 years",
      processingFee: "Up to 2% of loan amount",
      features: ["Quick processing", "Flexible tenure", "No hidden charges", "Online application"]
    },
    homeLoan: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 30 years",
      processingFee: "Up to 0.5% of loan amount",
      features: ["Low rates", "Long tenure", "Tax benefits", "Balance transfer"]
    },
    businessLoan: {
      interestRate: "10.50% - 15.00% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 8 years",
      processingFee: "1-2% of loan amount",
      features: ["Business expansion", "Working capital", "Equipment financing", "MSME support"]
    },
    lap: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 20 years",
      processingFee: "0.5-1% of loan amount",
      features: ["High LTV", "Tax benefits", "Flexible repayment", "Quick approval"]
    },
    creditCard: {
      types: ["Sapphiro Credit Card", "Coral Credit Card", "Unforgettable Credit Card", "Pocket Credit Card"],
      features: ["Reward points", "Cashback", "Movie offers", "Fuel surcharge waiver"]
    }
  },
  axis: {
    name: "Axis Bank",
    description: "Modern banking solutions with innovative products and customer-centric approach.",
    personalLoan: {
      interestRate: "10.25% - 24.00% p.a.",
      maxAmount: "₹40 Lakhs",
      tenure: "Up to 5 years",
      processingFee: "Up to 2% of loan amount",
      features: ["Quick approval", "Minimal docs", "Online process", "Competitive rates"]
    },
    homeLoan: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 30 years",
      processingFee: "Up to 0.5% of loan amount",
      features: ["Low interest", "Long tenure", "Tax benefits", "Balance transfer"]
    },
    businessLoan: {
      interestRate: "11.00% - 16.00% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 7 years",
      processingFee: "1-2% of loan amount",
      features: ["Business loans", "Working capital", "Equipment loans", "MSME loans"]
    },
    lap: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 20 years",
      processingFee: "0.5-1% of loan amount",
      features: ["High LTV", "Tax benefits", "Flexible terms", "Quick processing"]
    },
    creditCard: {
      types: ["Neo Credit Card", "Magnus Credit Card", "Vistara Credit Card", "Flipkart Credit Card"],
      features: ["Reward points", "Cashback", "Travel benefits", "Shopping offers"]
    }
  },
  kotak: {
    name: "Kotak Mahindra Bank",
    description: "Progressive bank offering innovative financial solutions and superior customer experience.",
    personalLoan: {
      interestRate: "10.25% - 24.00% p.a.",
      maxAmount: "₹50 Lakhs",
      tenure: "Up to 6 years",
      processingFee: "Up to 2% of loan amount",
      features: ["Fast approval", "Flexible terms", "Online application", "No collateral"]
    },
    homeLoan: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 30 years",
      processingFee: "Up to 0.5% of loan amount",
      features: ["Competitive rates", "Long tenure", "Tax benefits", "Balance transfer"]
    },
    businessLoan: {
      interestRate: "11.00% - 16.00% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 7 years",
      processingFee: "1-2% of loan amount",
      features: ["Business expansion", "Working capital", "Equipment financing", "MSME support"]
    },
    lap: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 20 years",
      processingFee: "0.5-1% of loan amount",
      features: ["High LTV", "Tax benefits", "Flexible repayment", "Quick approval"]
    },
    creditCard: {
      types: ["Kotak Unsecured Credit Card", "Kotak Secured Credit Card", "Kotak Credit Card Unlimit"],
      features: ["Reward points", "Cashback", "No annual fee", "Easy EMI"]
    }
  },
  bob: {
    name: "Bank of Baroda",
    description: "Public sector bank committed to serving customers with reliable financial solutions.",
    personalLoan: {
      interestRate: "9.15% - 12.15% p.a.",
      maxAmount: "₹50 Lakhs",
      tenure: "Up to 7 years",
      processingFee: "Up to 2% of loan amount",
      features: ["Quick approval", "Flexible repayment", "No collateral", "Competitive rates"]
    },
    homeLoan: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 30 years",
      processingFee: "Up to 0.5% of loan amount",
      features: ["Low rates", "Long tenure", "Tax benefits", "Balance transfer"]
    },
    businessLoan: {
      interestRate: "10.15% - 14.15% p.a.",
      maxAmount: "₹10 Crores",
      tenure: "Up to 10 years",
      processingFee: "1-2% of loan amount",
      features: ["Working capital", "Term loans", "Equipment financing", "MSME focused"]
    },
    lap: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 20 years",
      processingFee: "0.5-1% of loan amount",
      features: ["High LTV", "Tax benefits", "Flexible terms", "Quick processing"]
    },
    creditCard: {
      types: ["Baroda Credit Card", "Baroda Unnati Credit Card", "Baroda YONO Credit Card"],
      features: ["Reward points", "Cashback", "Low fees", "Easy EMI"]
    }
  },
  pnb: {
    name: "Punjab National Bank",
    description: "Leading public sector bank providing comprehensive banking services.",
    personalLoan: {
      interestRate: "9.15% - 12.15% p.a.",
      maxAmount: "₹50 Lakhs",
      tenure: "Up to 7 years",
      processingFee: "Up to 2% of loan amount",
      features: ["Quick approval", "Flexible terms", "No collateral", "Competitive rates"]
    },
    homeLoan: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 30 years",
      processingFee: "Up to 0.5% of loan amount",
      features: ["Low rates", "Long tenure", "Tax benefits", "Balance transfer"]
    },
    businessLoan: {
      interestRate: "10.15% - 14.15% p.a.",
      maxAmount: "₹10 Crores",
      tenure: "Up to 10 years",
      processingFee: "1-2% of loan amount",
      features: ["Working capital", "Term loans", "Equipment financing", "MSME focused"]
    },
    lap: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 20 years",
      processingFee: "0.5-1% of loan amount",
      features: ["High LTV", "Tax benefits", "Flexible terms", "Quick processing"]
    },
    creditCard: {
      types: ["PNB Credit Card", "PNB Unnati Credit Card", "PNB YONO Credit Card"],
      features: ["Reward points", "Cashback", "Low fees", "Easy EMI"]
    }
  },
  induslnd: {
    name: "IndusInd Bank",
    description: "Technology-driven bank offering innovative banking solutions.",
    personalLoan: {
      interestRate: "10.25% - 24.00% p.a.",
      maxAmount: "₹40 Lakhs",
      tenure: "Up to 5 years",
      processingFee: "Up to 2% of loan amount",
      features: ["Quick approval", "Minimal docs", "Online process", "Competitive rates"]
    },
    homeLoan: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 30 years",
      processingFee: "Up to 0.5% of loan amount",
      features: ["Low interest", "Long tenure", "Tax benefits", "Balance transfer"]
    },
    businessLoan: {
      interestRate: "11.00% - 16.00% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 7 years",
      processingFee: "1-2% of loan amount",
      features: ["Business loans", "Working capital", "Equipment loans", "MSME loans"]
    },
    lap: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 20 years",
      processingFee: "0.5-1% of loan amount",
      features: ["High LTV", "Tax benefits", "Flexible terms", "Quick processing"]
    },
    creditCard: {
      types: ["IndusInd Credit Card", "IndusInd Unnati Credit Card", "IndusInd YONO Credit Card"],
      features: ["Reward points", "Cashback", "Low fees", "Easy EMI"]
    }
  },
  yes: {
    name: "Yes Bank",
    description: "Modern digital bank offering innovative financial products.",
    personalLoan: {
      interestRate: "10.25% - 24.00% p.a.",
      maxAmount: "₹40 Lakhs",
      tenure: "Up to 5 years",
      processingFee: "Up to 2% of loan amount",
      features: ["Quick approval", "Minimal docs", "Online process", "Competitive rates"]
    },
    homeLoan: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 30 years",
      processingFee: "Up to 0.5% of loan amount",
      features: ["Low interest", "Long tenure", "Tax benefits", "Balance transfer"]
    },
    businessLoan: {
      interestRate: "11.00% - 16.00% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 7 years",
      processingFee: "1-2% of loan amount",
      features: ["Business loans", "Working capital", "Equipment loans", "MSME loans"]
    },
    lap: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 20 years",
      processingFee: "0.5-1% of loan amount",
      features: ["High LTV", "Tax benefits", "Flexible terms", "Quick processing"]
    },
    creditCard: {
      types: ["Yes Credit Card", "Yes Unnati Credit Card", "Yes YONO Credit Card"],
      features: ["Reward points", "Cashback", "Low fees", "Easy EMI"]
    }
  },
  federal: {
    name: "Federal Bank",
    description: "Customer-focused bank providing reliable financial services.",
    personalLoan: {
      interestRate: "10.25% - 18.00% p.a.",
      maxAmount: "₹40 Lakhs",
      tenure: "Up to 5 years",
      processingFee: "Up to 2% of loan amount",
      features: ["Quick approval", "Flexible terms", "No collateral", "Competitive rates"]
    },
    homeLoan: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 30 years",
      processingFee: "Up to 0.5% of loan amount",
      features: ["Low rates", "Long tenure", "Tax benefits", "Balance transfer"]
    },
    businessLoan: {
      interestRate: "11.00% - 16.00% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 7 years",
      processingFee: "1-2% of loan amount",
      features: ["Business expansion", "Working capital", "Equipment financing", "MSME support"]
    },
    lap: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 20 years",
      processingFee: "0.5-1% of loan amount",
      features: ["High LTV", "Tax benefits", "Flexible repayment", "Quick approval"]
    },
    creditCard: {
      types: ["Federal Credit Card", "Federal Unnati Credit Card", "Federal YONO Credit Card"],
      features: ["Reward points", "Cashback", "Low fees", "Easy EMI"]
    }
  },
  idfc: {
    name: "IDFC First Bank",
    description: "Digital-first bank offering modern banking solutions.",
    personalLoan: {
      interestRate: "10.25% - 24.00% p.a.",
      maxAmount: "₹40 Lakhs",
      tenure: "Up to 5 years",
      processingFee: "Up to 2% of loan amount",
      features: ["Quick approval", "Minimal docs", "Online process", "Competitive rates"]
    },
    homeLoan: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 30 years",
      processingFee: "Up to 0.5% of loan amount",
      features: ["Low interest", "Long tenure", "Tax benefits", "Balance transfer"]
    },
    businessLoan: {
      interestRate: "11.00% - 16.00% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 7 years",
      processingFee: "1-2% of loan amount",
      features: ["Business loans", "Working capital", "Equipment loans", "MSME loans"]
    },
    lap: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 20 years",
      processingFee: "0.5-1% of loan amount",
      features: ["High LTV", "Tax benefits", "Flexible terms", "Quick processing"]
    },
    creditCard: {
      types: ["IDFC Credit Card", "IDFC Unnati Credit Card", "IDFC YONO Credit Card"],
      features: ["Reward points", "Cashback", "Low fees", "Easy EMI"]
    }
  },
  rbl: {
    name: "RBL Bank",
    description: "Progressive bank offering comprehensive financial solutions.",
    personalLoan: {
      interestRate: "10.25% - 24.00% p.a.",
      maxAmount: "₹40 Lakhs",
      tenure: "Up to 5 years",
      processingFee: "Up to 2% of loan amount",
      features: ["Quick approval", "Minimal docs", "Online process", "Competitive rates"]
    },
    homeLoan: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 30 years",
      processingFee: "Up to 0.5% of loan amount",
      features: ["Low interest", "Long tenure", "Tax benefits", "Balance transfer"]
    },
    businessLoan: {
      interestRate: "11.00% - 16.00% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 7 years",
      processingFee: "1-2% of loan amount",
      features: ["Business loans", "Working capital", "Equipment loans", "MSME loans"]
    },
    lap: {
      interestRate: "8.35% - 9.35% p.a.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 20 years",
      processingFee: "0.5-1% of loan amount",
      features: ["High LTV", "Tax benefits", "Flexible terms", "Quick processing"]
    },
    creditCard: {
      types: ["RBL Credit Card", "RBL Unnati Credit Card", "RBL YONO Credit Card"],
      features: ["Reward points", "Cashback", "Low fees", "Easy EMI"]
    }
  }
};

export default function PartnerPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const partner = partners.find(p => p.slug === slug);
  const data = bankData[slug];

  if (!partner || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Partner Not Found</h1>
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10"
              onClick={() => router.push('/#partners')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={80}
              height={80}
              className="rounded-lg bg-white p-2"
            />
            <div className="flex flex-col justify-center">
              <h1 className="font-[var(--font-playfair)] text-4xl font-bold mb-2">
                {data.name}
              </h1>
              <p className="text-white/90 text-lg max-w-2xl">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8">
          {/* Personal Loan */}
          <Card>
            <CardContent className="p-6">
              <h2 className="font-[var(--font-playfair)] text-2xl font-bold mb-4 text-[#1b94cb]">
                Personal Loan
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-3 mb-4">
                    <div><strong>Interest Rate:</strong> {data.personalLoan.interestRate}</div>
                    <div><strong>Maximum Amount:</strong> {data.personalLoan.maxAmount}</div>
                    <div><strong>Tenure:</strong> {data.personalLoan.tenure}</div>
                    <div><strong>Processing Fee:</strong> {data.personalLoan.processingFee}</div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Key Features:</h3>
                    <ul className="space-y-1">
                      {data.personalLoan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Link href="/#quick-enquiry-form">
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
                      Apply for Personal Loan
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Home Loan */}
          <Card>
            <CardContent className="p-6">
              <h2 className="font-[var(--font-playfair)] text-2xl font-bold mb-4 text-[#1b94cb]">
                Home Loan
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-3 mb-4">
                    <div><strong>Interest Rate:</strong> {data.homeLoan.interestRate}</div>
                    <div><strong>Maximum Amount:</strong> {data.homeLoan.maxAmount}</div>
                    <div><strong>Tenure:</strong> {data.homeLoan.tenure}</div>
                    <div><strong>Processing Fee:</strong> {data.homeLoan.processingFee}</div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Key Features:</h3>
                    <ul className="space-y-1">
                      {data.homeLoan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Link href="/#quick-enquiry-form">
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
                      Apply for Home Loan
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business Loan */}
          <Card>
            <CardContent className="p-6">
              <h2 className="font-[var(--font-playfair)] text-2xl font-bold mb-4 text-[#1b94cb]">
                Business Loan
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-3 mb-4">
                    <div><strong>Interest Rate:</strong> {data.businessLoan.interestRate}</div>
                    <div><strong>Maximum Amount:</strong> {data.businessLoan.maxAmount}</div>
                    <div><strong>Tenure:</strong> {data.businessLoan.tenure}</div>
                    <div><strong>Processing Fee:</strong> {data.businessLoan.processingFee}</div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Key Features:</h3>
                    <ul className="space-y-1">
                      {data.businessLoan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Link href="/#quick-enquiry-form">
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
                      Apply for Business Loan
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Loan Against Property */}
          <Card>
            <CardContent className="p-6">
              <h2 className="font-[var(--font-playfair)] text-2xl font-bold mb-4 text-[#1b94cb]">
                Loan Against Property
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-3 mb-4">
                    <div><strong>Interest Rate:</strong> {data.lap.interestRate}</div>
                    <div><strong>Maximum Amount:</strong> {data.lap.maxAmount}</div>
                    <div><strong>Tenure:</strong> {data.lap.tenure}</div>
                    <div><strong>Processing Fee:</strong> {data.lap.processingFee}</div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Key Features:</h3>
                    <ul className="space-y-1">
                      {data.lap.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Link href="/#quick-enquiry-form">
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
                      Apply for Loan Against Property
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Credit Cards */}
          <Card>
            <CardContent className="p-6">
              <h2 className="font-[var(--font-playfair)] text-2xl font-bold mb-4 text-[#1b94cb]">
                Credit Cards
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-3 mb-4">
                    <h3 className="font-semibold">Available Types:</h3>
                    <ul className="space-y-1">
                      {data.creditCard.types.map((type, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          {type}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Key Features:</h3>
                    <ul className="space-y-1">
                      {data.creditCard.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Link href="/#quick-enquiry-form">
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
                      Apply for Credit Card
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

