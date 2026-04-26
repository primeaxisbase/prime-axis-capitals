"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, ArrowRight, Tag, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 9,
    title: "How to Get Instant Loans in India Without Hassle",
    excerpt: "Sometimes you just need money fast—no long paperwork, no waiting for days. Learn how to get instant loans in India quickly and efficiently.",
    content: "Sometimes you just need money fast—no long paperwork, no waiting for days. The good news is, getting an instant loan in India is much easier now.\n\nMost banks and NBFCs offer quick personal loans that can be approved within a few hours if your profile is decent.\n\nHere's how to make the process smooth:\n\nStart by choosing a reliable lender. Don't just go with the first option—compare interest rates and reviews.\nMake sure your basic profile is strong: steady income, active bank account, and a credit score above 650 helps a lot.\nKeep your documents ready—PAN, Aadhaar, and recent bank statements are usually enough.\n\nApply online, fill in correct details, and upload documents. If everything checks out, approval can come the same day, and money may be credited within 24 hours.\n\nSimple tip: Avoid applying at multiple places at once—it can hurt your chances.\n\nBottom line: Instant loans are genuinely quick today—but only if your financial profile is clean and clear.",
    author: "Loan Expert",
    date: "April 23, 2026",
    category: "Loans",
    readTime: "4 min read",
  },
  {
    id: 10,
    title: "How to Get Loan Without Salary Slip",
    excerpt: "Not everyone has a salary slip—and that's completely normal. Learn alternative ways to prove income and get approved for loans.",
    content: "Not everyone has a salary slip—and that's completely normal. If you're self-employed, a freelancer, or running a small business, you can still get a loan.\n\nLenders just want proof that you earn consistently. Instead of a salary slip, you can show:\n\nBank statements (last 6–12 months)\nIncome Tax Returns (ITR)\nGST filings (if applicable)\nIf your bank account shows regular income, many lenders are comfortable approving your loan.\n\nAnother easy option is secured loans. For example, loan against property or gold loan—these are easier to get because there's collateral.\n\nNBFCs and fintech lenders are usually more flexible than traditional banks, so they're worth trying.\n\nReal tip: If you file ITR regularly and maintain a good bank balance, getting a loan becomes much easier—even without a salary slip.\n\nBottom line: No salary slip doesn't mean no loan—you just need to prove income in other ways.",
    author: "Financial Advisor",
    date: "April 22, 2026",
    category: "Loans",
    readTime: "3 min read",
  },
  {
    id: 11,
    title: "Best Loan Options for Small Business",
    excerpt: "Running a business always needs extra cash. Discover the best loan options designed specifically for small businesses.",
    content: "Running a business always needs extra cash—whether it's for stock, expansion, or managing daily expenses. Choosing the right loan matters.\n\nHere are the most practical options:\n\nUnsecured Business Loan\nQuick and simple. No collateral needed. Best for short-term needs.\n\nMSME / Government Loans\nSchemes like Mudra loans are designed for small businesses. Lower rates and easier approval.\n\nLoan Against Property (LAP)\nIf you own property, this gives you a bigger loan at a lower interest rate.\n\nOverdraft Facility\nUseful for daily cash flow. You only pay interest on what you use.\n\nIf your requirement is small and urgent, go for unsecured loans.\nIf you need a bigger amount at lower cost, secured options like LAP make more sense.\n\nReal tip: Don't just look at interest rate—check EMI, tenure, and flexibility.\n\nBottom line: The best loan isn't the cheapest—it's the one that fits your business needs.",
    author: "Business Consultant",
    date: "April 21, 2026",
    category: "Business",
    readTime: "5 min read",
  },
  {
    id: 12,
    title: "Personal Loan vs Credit Card Loan – Which is Better?",
    excerpt: "Both options give quick money—but they work very differently. Learn which loan type suits your needs better.",
    content: "Both options give quick money—but they work very differently.\n\nA personal loan gives you a fixed amount with structured EMIs over a longer period.\nA credit card loan is usually instant but comes with higher interest and shorter repayment time.\n\nIf you need a bigger amount—for medical, travel, or business—a personal loan is usually better. It's cheaper and easier to manage.\n\nIf the need is small and urgent, a credit card loan works fine since it's already pre-approved.\n\nSimple way to decide:\n\nBig amount + lower EMI → Personal Loan\nSmall, urgent need → Credit Card Loan\nReal tip: Credit card loans feel easy, but they can become expensive if not repaid quickly.\n\nBottom line: Choose based on urgency and amount—not just convenience.",
    author: "Credit Specialist",
    date: "April 20, 2026",
    category: "Loans",
    readTime: "3 min read",
  },
  {
    id: 1,
    title: "Guide to Understanding Interest Rates on Personal Loans",
    excerpt: "Learn how interest rates are calculated and how to find the best rates for your personal loan needs.",
    content: "Interest rates are one of the most important factors when choosing a personal loan. In this comprehensive guide, we break down how interest rates work, what factors influence them, and how you can negotiate better rates with lenders. Understanding these concepts will help you save thousands of rupees over the life of your loan.\n\nWhen evaluating personal loans, it's crucial to understand that interest rates vary based on several factors including your credit score, income, employment history, and the loan tenure. Banks and financial institutions consider you a higher or lower risk based on these factors, which directly impacts the interest rate offered to you.\n\nKey points to remember:\n• Fixed vs Floating rates: Fixed rates remain constant throughout the loan period, while floating rates can change based on market conditions\n• Effective Interest Rate (EIR): This includes all charges and gives you the true cost of borrowing\n• Negotiation: Always try to negotiate better rates, especially if you have a good credit score or maintain a relationship with the bank\n• Processing fees: Don't overlook hidden charges and processing fees that add to your total loan cost",
    author: "Financial Expert",
    date: "March 18, 2026",
    category: "Loans",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Home Loan vs Personal Loan: Which One Should You Choose?",
    excerpt: "Comparing the key differences between home loans and personal loans to help you make an informed decision.",
    content: "Are you unsure whether a home loan or personal loan is right for your financial situation? This article compares the two options across interest rates, eligibility criteria, loan amount, tenure, and use cases. We'll help you understand which loan type aligns best with your financial goals and circumstances.\n\nHome Loans:\n• Secured by property, hence lower interest rates (typically 8-9% p.a.)\n• Larger loan amounts (up to ₹5 Crores)\n• Longer tenure (up to 30 years)\n• Tax benefits on interest paid\n• Slower approval process\n\nPersonal Loans:\n• Unsecured loans, higher interest rates (typically 10-12% p.a.)\n• Smaller loan amounts (up to ₹50 Lakhs)\n• Shorter tenure (up to 7 years)\n• No specific purpose needed\n• Faster approval process\n\nChoose a home loan if you're purchasing a property. Choose a personal loan for flexible funding needs without collateral requirements.",
    author: "Loan Specialist",
    date: "March 16, 2026",
    category: "Loans",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Essential Tips for GST Compliance and Filing",
    excerpt: "Stay compliant with GST regulations. Here are essential tips to keep your GST filing stress-free.",
    content: "GST compliance can be complex, but it's crucial for any business. This guide covers common GST filing requirements, deadlines, penalties for non-compliance, and practical tips to streamline your GST process. Learn how to maintain proper records and take advantage of input tax credits to optimize your tax liability.\n\nImportant GST Filing Deadlines:\n• GSTR-1 (Outward supplies): 11th of next month\n• GSTR-3B (Monthly return): 20th of next month\n• GSTR-9 (Annual return): 31st December\n\nCommon Mistakes to Avoid:\n• Not maintaining proper invoice records\n• Missing tax payment deadlines\n• Incorrect HSN/SAC codes on invoices\n• Not claiming all eligible Input Tax Credits\n• Ignoring notification and updates from GST portal\n\nProactive Compliance Tips:\n• Use GST-compliant billing software\n• Regular reconciliation of accounts\n• Keep all supporting documents for at least 6 years\n• Join professional associations for compliance updates",
    author: "Tax Advisor",
    date: "March 14, 2026",
    category: "Taxes",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Smart Credit Card Strategies to Maximize Rewards",
    excerpt: "Understand how to use credit cards effectively and maximize rewards while avoiding common pitfalls.",
    content: "Credit cards can be a powerful financial tool when used wisely. Learn about different rewards categories, how to compare credit card offers, strategies for maximizing rewards points, and how to maintain a healthy credit score. Discover the best practices for responsible credit card usage.\n\nRewards Maximization Strategies:\n• Use different cards for different spending categories (grocery, fuel, online shopping)\n• Pay full balance on time to avoid interest charges\n• Use bonus multipliers during promotional periods\n• Stack rewards with partner merchants\n• Track expiring points and redeem before they lapse\n\nCommon Pitfalls to Avoid:\n• Spending more just to earn rewards\n• Missing payment deadlines\n• Not paying the full balance\n• Applying for multiple cards simultaneously\n• Ignoring annual percentage rates and hidden charges\n\nBest Practices:\n• Set up auto-payments for minimum amount\n• Review statements regularly\n• Understand the rewards redemption options\n• Keep credit utilization below 30%",
    author: "Finance Consultant",
    date: "March 12, 2026",
    category: "Credit",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "Income Tax Filing Made Easy: A Step-by-Step Guide",
    excerpt: "Complete guide to filing income taxes in India with all important deadlines and documents.",
    content: "Filing income taxes doesn't have to be complicated. This step-by-step guide walks you through the entire process, from gathering necessary documents to filing your return online. We cover common deductions, recently updated tax slabs, frequently asked questions, and tips to maximize your tax benefits.\n\nStep-by-Step Process:\n1. Gather all income documents (Form 16, interest certificates, etc.)\n2. Calculate total income from all sources\n3. Claim eligible deductions under Chapter VI-A\n4. Calculate tax liability based on applicable slab\n5. File return on e-filing portal\n6. Verify return by submitting verification form\n\nImportant Deductions:\n• Section 80C: Life insurance, PPF, ELSS (up to ₹1.5 Lakhs)\n• Section 80D: Health insurance premiums\n• Section 80E: Interest on education loan\n• Section 80G: Charitable contributions\n• Section 80CCD: National Pension Scheme\n\nKeep these documents for tax audit purposes:\n• Bank statements\n• Investment receipts\n• Medical bills and insurance policies\n• Donation receipts",
    author: "Tax Professional",
    date: "March 10, 2026",
    category: "Taxes",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "Business Loan Guide: Requirements and Application Process",
    excerpt: "Everything you need to know about securing a business loan for your startup or expansion.",
    content: "Whether you're starting a new business or expanding an existing one, understanding business loans is crucial. This comprehensive guide covers eligibility criteria, required documents, different types of business loans, how to calculate EMI, and common mistakes to avoid. Get approved faster with our practical tips.\n\nTypes of Business Loans:\n• Term Loans: For specific business purposes\n• Working Capital Loans: For day-to-day operations\n• Equipment Loans: For purchasing machinery/equipment\n• Invoice Discounting: For cash flow management\n• Trade Credit: For raw material purchases\n\nEligibility Criteria:\n• Business registration and operating for 1-3 years\n• Minimum annual turnover (usually ₹20 Lakhs)\n• Good credit score (700+)\n• Positive cash flow\n• Valid business plan\n\nRequired Documents:\n• Business registration certificate\n• Last 2-3 years financial statements\n• Income tax returns\n• Bank statements\n• Business plan and project report\n• Collateral/security documents (if required)\n\nTips for Quick Approval:\n• Maintain clean financial records\n• Build good banking relationship\n• Have clear business plan\n• Keep DTR (Debt-to-Income Ratio) low",
    author: "Business Advisor",
    date: "March 8, 2026",
    category: "Business",
    readTime: "9 min read",
  },
  {
    id: 7,
    title: "EMI Calculator: How to Plan Your Loan Repayment",
    excerpt: "Learn how to use EMI calculators effectively and plan your loan repayment strategy.",
    content: "Understanding your Equated Monthly Installment (EMI) is essential for financial planning. This article explains what EMI is, how it's calculated, and how using an EMI calculator can help you compare different loan options. We also provide tips on managing your EMI effectively and choosing a loan tenure that suits your budget.\n\nEMI Formula:\nEMI = [P * R * (1 + R)^N] / [(1 + R)^N - 1]\nWhere:\nP = Principal Loan Amount\nR = Monthly Interest Rate\nN = Number of Months\n\nFactors Affecting EMI:\n• Loan Amount: Higher amount = Higher EMI\n• Interest Rate: Higher rate = Higher EMI\n• Loan Tenure: Longer tenure = Lower EMI (but higher total interest)\n• Type of Interest: Fixed vs Floating\n\nPlanning Tips:\n• Calculate EMI before applying for a loan\n• Ensure EMI is 40-50% of monthly income\n• Consider paying extra during bonus months\n• Try foreclosure options for early repayment\n• Use online EMI calculators for accuracy\n\nExample:\nLoan: ₹20 Lakhs, Rate: 10%, Tenure: 10 years\nMonthly EMI: ≈ ₹21,218",
    author: "Financial Planner",
    date: "March 6, 2026",
    category: "Financial Planning",
    readTime: "5 min read",
  },
  {
    id: 8,
    title: "The Complete Guide to Accounting for Small Businesses",
    excerpt: "Learn the basics of business accounting and why it's essential for business success.",
    content: "Proper accounting is the backbone of any successful business. This guide covers basic accounting principles, bookkeeping best practices, financial statements interpretation, tax planning, and how to leverage accounting data for business decisions. Whether you're a startup or established business, these fundamentals apply.\n\nCore Accounting Principles:\n• Business Entity: Keep personal and business finances separate\n• Going Concern: Assume business will continue indefinitely\n• Consistency: Use same accounting methods consistently\n• Prudence: Be conservative in revenue recognition\n• Matching: Match expenses with related revenue\n\nEssential Financial Statements:\n1. Income Statement: Shows profitability\n2. Balance Sheet: Shows financial position\n3. Cash Flow Statement: Shows cash movement\n4. Trial Balance: Checks accuracy of entries\n\nBookkeeping Best Practices:\n• Maintain chronological record of all transactions\n• Use standardized chart of accounts\n• Reconcile accounts regularly\n• Keep supporting documents\n• Use accounting software for accuracy\n• Backup data regularly\n\nReporting Requirements:\n• Monthly: Internal statements for management\n• Quarterly: Tax compliance\n• Annually: Statutory financial statements\n• Audit: If required by law",
    author: "Accountant",
    date: "March 4, 2026",
    category: "Accounting",
    readTime: "7 min read",
  },
];

const categories = ["All", "Loans", "Taxes", "Credit", "Business", "Financial Planning", "Accounting"];

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedArticles, setExpandedArticles] = useState<Set<number>>(new Set());

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const toggleArticle = (postId: number) => {
    const newExpanded = new Set(expandedArticles);
    if (newExpanded.has(postId)) {
      newExpanded.delete(postId);
    } else {
      newExpanded.add(postId);
    }
    setExpandedArticles(newExpanded);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-20 pb-12 px-4 bg-[#f0f7fb]">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge className="mb-4 text-white bg-primary-light">
              Financial Insights
            </Badge>
            <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-black mb-4">
              Our Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert insights and practical tips on loans, taxes, accounting, and financial planning
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "text-white bg-gradient-primary"
                    : "text-[#196b92] border border-[#196b92] hover:bg-[#e0f2fe]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="space-y-6">
            {filteredPosts.map((post, index) => {
              const isExpanded = expandedArticles.has(post.id);
              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="hover:shadow-lg transition-all border-border/50">
                    <CardHeader>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Tag className="h-4 w-4 text-primary-dark" />
                          <span className="text-sm font-medium text-[#196b92]">{post.category}</span>
                        </div>
                        <CardTitle className="text-2xl text-black hover:text-[#196b92] transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {post.excerpt}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <AnimatePresence mode="wait">
                        {isExpanded && (
                          <motion.div
                            key="full-content"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="text-muted-foreground text-justify leading-relaxed whitespace-pre-line mb-4">
                              {post.content}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4 text-primary-dark" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-primary-dark" />
                          {post.date}
                        </div>
                        <Badge variant="outline" className="text-[#196b92]">
                          {post.readTime}
                        </Badge>
                      </div>

                      <div className="flex gap-2 pt-2">
                        {!isExpanded ? (
                          <Button 
                            onClick={() => toggleArticle(post.id)}
                            variant="ghost"
                            className="w-fit text-[#196b92] hover:bg-[#e0f2fe] px-0 group/btn"
                          >
                            Read Full Article
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        ) : (
                          <Button 
                            onClick={() => toggleArticle(post.id)}
                            variant="ghost"
                            className="w-fit text-[#196b92] hover:bg-[#e0f2fe] px-0 group/btn"
                          >
                            Collapse
                            <ChevronUp className="ml-2 h-4 w-4 group-hover/btn:-translate-y-1 transition-transform" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
