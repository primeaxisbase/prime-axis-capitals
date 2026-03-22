"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Shield, FileText, RefreshCw, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageType } from "@/app/page";

interface LegalPageProps {
  page: PageType;
  onNavigate: (page: PageType) => void;
}

const legalContent = {
  privacy: {
    title: "Privacy Policy",
    icon: Shield,
    lastUpdated: "January 1, 2024",
    sections: [
      {
        heading: "1. Information We Collect",
        content: `We collect information you provide directly to us, such as when you fill out a loan application form, contact us, or subscribe to our newsletter. This includes:
        
• Personal Information: Name, email address, phone number, date of birth, PAN number, Aadhaar number
• Financial Information: Income details, employment information, bank statements, credit history
• Property Information: For secured loans, property details and documents
• Communication Data: Any information you provide when you contact us for support`,
      },
      {
        heading: "2. How We Use Your Information",
        content: `We use the information we collect to:
        
• Process your loan applications and provide loan services
• Verify your identity and assess creditworthiness
• Communicate with you about your application and account
• Send you promotional communications (with your consent)
• Improve our services and develop new products
• Comply with legal and regulatory requirements
• Detect and prevent fraud`,
      },
      {
        heading: "3. Information Sharing",
        content: `We may share your information with:
        
• Partner banks and financial institutions for loan processing
• Credit bureaus for credit assessment
• Service providers who assist in our operations
• Legal authorities when required by law
• Third parties with your explicit consent

We do not sell your personal information to third parties.`,
      },
      {
        heading: "4. Data Security",
        content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
        
• Encryption of data in transit and at rest
• Secure servers and databases
• Regular security audits
• Access controls and authentication mechanisms`,
      },
      {
        heading: "5. Your Rights",
        content: `You have the right to:
        
• Access your personal information
• Correct inaccurate data
• Request deletion of your data
• Opt-out of marketing communications
• Lodge a complaint with the data protection authority

To exercise these rights, please contact us at privacy@primeaxis.in`,
      },
      {
        heading: "6. Cookies",
        content: `We use cookies and similar technologies to improve your browsing experience, analyze website traffic, and personalize content. You can manage your cookie preferences through your browser settings.`,
      },
      {
        heading: "7. Contact Us",
        content: `If you have any questions about this Privacy Policy, please contact us at:

Prime Axis Capitals
Email: privacy@primeaxis.in
Phone: +91 74286 14189 (Mon-Sat, 9 AM - 8 PM)
Address: [Company Address]`,
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    icon: FileText,
    lastUpdated: "January 1, 2024",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        content: `By accessing or using the Prime Axis Capitals website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.

These terms apply to all visitors, users, and customers of our services.`,
      },
      {
        heading: "2. Services Description",
        content: `Prime Axis Capitals provides loan facilitation services, connecting borrowers with lending institutions. We act as an intermediary and do not directly lend money.

Our services include:
• Loan application processing
• Document verification assistance
• Connection with partner banks and NBFCs
• EMI calculation tools
• Customer support`,
      },
      {
        heading: "3. User Eligibility",
        content: `To use our services, you must:
• Be at least 18 years of age
• Be a resident of India
• Have legal capacity to enter into contracts
• Provide accurate and complete information
• Not be prohibited from accessing financial services under applicable laws`,
      },
      {
        heading: "4. Loan Applications",
        content: `When you submit a loan application:
• You represent that all information provided is accurate and complete
• You authorize us to verify your information with relevant authorities
• You understand that loan approval is subject to the lending institution's policies
• You agree to provide additional documents if requested
• You acknowledge that interest rates and terms may vary based on your credit profile`,
      },
      {
        heading: "5. User Responsibilities",
        content: `You agree to:
• Provide truthful and accurate information
• Keep your login credentials secure
• Notify us of any unauthorized access
• Use our services only for lawful purposes
• Not attempt to circumvent security measures
• Not submit fraudulent applications`,
      },
      {
        heading: "6. Disclaimer",
        content: `Prime Axis Capitals acts as a facilitator between borrowers and lending institutions. We do not:
• Guarantee loan approval
• Guarantee specific interest rates
• Take responsibility for lending decisions made by partner institutions

Loan terms, interest rates, and approval are at the sole discretion of the lending institution.`,
      },
      {
        heading: "7. Limitation of Liability",
        content: `To the maximum extent permitted by law, Prime Axis Capitals shall not be liable for:
• Loan rejection by partner institutions
• Changes in interest rates or terms by lending institutions
• Delays caused by document verification processes
• Any indirect, incidental, or consequential damages

Our total liability shall not exceed the fees paid by you for our services.`,
      },
      {
        heading: "8. Modifications",
        content: `We reserve the right to modify these terms at any time. Changes will be effective upon posting on our website. Continued use of our services constitutes acceptance of modified terms.`,
      },
    ],
  },
  refund: {
    title: "Refund Policy",
    icon: RefreshCw,
    lastUpdated: "January 1, 2024",
    sections: [
      {
        heading: "1. Processing Fees",
        content: `Processing fees charged by Prime Axis Capitals are non-refundable under the following circumstances:
        
• If the loan application is rejected due to incomplete or incorrect information provided by the applicant
• If the applicant withdraws the application after document verification has been initiated
• If the application is rejected due to the applicant's credit history or eligibility criteria`,
      },
      {
        heading: "2. Refundable Scenarios",
        content: `Processing fees may be refunded in the following cases:
        
• If the application is cancelled before document verification begins (within 24 hours of submission)
• If Prime Axis Capitals is unable to process the application due to technical issues on our end
• If the loan product requested is no longer available through our platform`,
      },
      {
        heading: "3. Refund Process",
        content: `To request a refund:
        
1. Contact our customer support at refunds@primeaxis.in
2. Provide your application reference number
3. State the reason for the refund request
4. Our team will review your request within 5-7 business days

Approved refunds will be processed within 10-15 business days to the original payment method.`,
      },
      {
        heading: "4. Partial Refunds",
        content: `In certain cases, partial refunds may be granted:
        
• If only a portion of the services were utilized
• If the application was partially processed before withdrawal
• The refund amount will be calculated based on the stage of application processing`,
      },
      {
        heading: "5. Non-Refundable Charges",
        content: `The following charges are non-refundable:
        
• Government fees and statutory charges
• Third-party verification fees (credit bureau checks, property verification, etc.)
• Legal and documentation charges once services are rendered
• Convenience fees for payment processing`,
      },
      {
        heading: "6. Loan Cancellation",
        content: `If a loan is sanctioned but you wish to cancel:
        
• Cancellation must be requested before loan disbursement
• Processing fees will not be refunded
• Any charges paid to partner institutions may be deducted
• Contact your relationship manager immediately for cancellation requests`,
      },
      {
        heading: "7. Contact for Refunds",
        content: `For refund-related queries:

Email: refunds@primeaxis.in
Phone: +91 74286 14189 (Mon-Sat, 9 AM - 8 PM)
Reference: Your application ID must be included in all communications`,
      },
    ],
  },
  grievance: {
    title: "Grievance Redressal",
    icon: MessageSquare,
    lastUpdated: "January 1, 2024",
    sections: [
      {
        heading: "1. Our Commitment",
        content: `Prime Axis Capitals is committed to providing excellent customer service. We take all complaints seriously and aim to resolve them promptly and fairly.

We have established a comprehensive grievance redressal mechanism to address customer concerns effectively.`,
      },
      {
        heading: "2. How to Lodge a Complaint",
        content: `You can register your complaint through the following channels:

**Level 1 - Customer Support**
• Email: support@primeaxis.in
• Phone: +91 74286 14189 (Mon-Sat, 9 AM - 8 PM)
• Response Time: Within 24 hours
• Resolution Time: Within 7 working days

**Level 2 - Grievance Officer**
If your complaint is not resolved at Level 1, escalate to:
• Email: grievance@primeaxis.in
• Response Time: Within 48 hours
• Resolution Time: Within 15 working days`,
      },
      {
        heading: "3. Information Required",
        content: `When lodging a complaint, please provide:

• Your full name and contact details
• Loan application number or account number
• Date of the incident or issue
• Detailed description of the complaint
• Any supporting documents or screenshots
• Previous communication reference (if any)`,
      },
      {
        heading: "4. Grievance Redressal Officer",
        content: `**Nodal Officer - Grievance Redressal**

Name: [Officer Name]
Designation: Grievance Redressal Officer
Email: grievance@primeaxis.in
Phone: +91 74286 14189 (Mon-Sat, 9 AM - 8 PM)
Address: [Company Address], [City], [State] - [PIN]

Office Hours: Monday to Saturday, 9:00 AM to 6:00 PM`,
      },
      {
        heading: "5. Escalation Matrix",
        content: `If your grievance remains unresolved:

**Level 3 - Principal Nodal Officer**
• Email: principal.nodal@primeaxis.in
• Resolution Time: Within 30 working days

**Level 4 - Ombudsman**
If not satisfied with our resolution, you may approach:
• Banking Ombudsman (for banking-related complaints)
• RBI Ombudsman (for NBFC-related complaints)
• Consumer Disputes Redressal Forum`,
      },
      {
        heading: "6. Tracking Your Complaint",
        content: `You will receive:
• Unique complaint reference number
• Regular updates on complaint status
• Final resolution communication

Track your complaint status at: www.primeaxis.in/track-complaint or call our helpline.`,
      },
      {
        heading: "7. Response Timeline",
        content: `As per regulatory guidelines, we adhere to the following timelines:

• Acknowledgment: Within 24 hours
• First response: Within 7 working days
• Final resolution: Within 30 working days
• Closure intimation: Within 3 working days of resolution`,
      },
      {
        heading: "8. Fair Treatment Promise",
        content: `We promise to:
• Treat all complaints with fairness and transparency
• Not discriminate against customers who raise complaints
• Protect complainants from retaliation
• Provide written responses to all formal complaints
• Keep you informed throughout the resolution process`,
      },
    ],
  },
};

export function LegalPage({ page, onNavigate }: LegalPageProps) {
  const content = legalContent[page as keyof typeof legalContent];
  const Icon = content.icon;

  return (
    <section className="py-12 md:py-20 min-h-screen" style={{ background: '#f0f7fb' }}>
      <div className="container mx-auto px-4">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Button
            onClick={() => onNavigate("home")}
            variant="ghost"
            className="text-[#196b92] hover:bg-[#196b92]/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: 'linear-gradient(135deg, #196b92 0%, #1b94cb 100%)' }}
            >
              <Icon className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              {content.title}
            </h1>
            <p className="text-muted-foreground">
              Last Updated: {content.lastUpdated}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white border-border/50 shadow-lg">
              <CardContent className="p-6 md:p-10">
                <div className="space-y-8">
                  {content.sections.map((section, index) => (
                    <div key={index} className="scroll-mt-24">
                      <h2 className="font-[var(--font-playfair)] text-xl md:text-2xl font-semibold text-black mb-4 pb-2 border-b border-border">
                        {section.heading}
                      </h2>
                      <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                        {section.content}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Have questions? Contact our support team.
            </p>
            <Button
              onClick={() => onNavigate("home")}
              className="bg-gradient-primary hover:opacity-90 text-white"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
