"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, IndianRupee, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const loanTypes = [
  { name: "Personal Loan", rate: 10.5, maxAmount: 2500000, maxTenure: 60 },
  { name: "Home Loan", rate: 8.35, maxAmount: 50000000, maxTenure: 360 },
  { name: "Business Loan", rate: 12, maxAmount: 20000000, maxTenure: 84 },
  { name: "Loan Against Property", rate: 10, maxAmount: 100000000, maxTenure: 180 },
];

export function EMICalculatorSection() {
  const [selectedLoan, setSelectedLoan] = useState(loanTypes[0]);
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenure, setTenure] = useState(36);

  const handleLoanTypeChange = (value: string) => {
    const loan = loanTypes.find((l) => l.name === value);
    if (loan) {
      setSelectedLoan(loan);
      setInterestRate(loan.rate);
      setLoanAmount(Math.min(loanAmount, loan.maxAmount));
      setTenure(Math.min(tenure, loan.maxTenure));
    }
  };

  const emiResult = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure;

    if (monthlyRate === 0) {
      return {
        emi: principal / months,
        totalAmount: principal,
        totalInterest: 0,
      };
    }

    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalAmount = emi * months;
    const totalInterest = totalAmount - principal;

    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
    };
  }, [loanAmount, interestRate, tenure]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatAmount = (amount: number) => {
    if (amount >= 10000000) return `${(amount / 10000000).toFixed(1)} Cr`;
    if (amount >= 100000) return `${(amount / 100000).toFixed(1)} L`;
    return amount.toString();
  };

  return (
    <section id="emi-calculator" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 text-white" style={{ background: '#196b92' }}>
            EMI Calculator
          </Badge>
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Calculate Your EMI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plan your finances better with our easy-to-use EMI calculator
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator inputs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white border-border/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-black">
                    <Calculator className="h-5 w-5" style={{ color: '#196b92' }} />
                    Loan Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Loan Type */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-black">Loan Type</label>
                    <Select value={selectedLoan.name} onValueChange={handleLoanTypeChange}>
                      <SelectTrigger className="border-border focus:border-[#196b92]">
                        <SelectValue placeholder="Select loan type" />
                      </SelectTrigger>
                      <SelectContent>
                        {loanTypes.map((loan) => (
                          <SelectItem key={loan.name} value={loan.name}>
                            {loan.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Loan Amount */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium text-black">Loan Amount</label>
                      <span className="text-sm font-semibold text-blue-700">
                        {formatCurrency(loanAmount)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={50000}
                      max={selectedLoan.maxAmount}
                      step={50000}
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full"
                      aria-label="Loan Amount"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>₹50K</span>
                      <span>{formatAmount(selectedLoan.maxAmount)}</span>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium text-black">Interest Rate (p.a.)</label>
                      <span className="text-sm font-semibold text-blue-700">
                        {interestRate}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={20}
                      step={0.25}
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full"
                      aria-label="Interest Rate"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>5%</span>
                      <span>20%</span>
                    </div>
                  </div>

                  {/* Tenure */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium text-black">Tenure (months)</label>
                      <span className="text-sm font-semibold text-blue-700">
                        {tenure} months ({Math.floor(tenure / 12)}y {tenure % 12}m)
                      </span>
                    </div>
                    <input
                      type="range"
                      min={6}
                      max={selectedLoan.maxTenure}
                      step={6}
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className="w-full"
                      aria-label="Loan Tenure"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>6 months</span>
                      <span>{selectedLoan.maxTenure} months</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-gradient-primary text-white shadow-xl h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <TrendingUp className="h-5 w-5" />
                    EMI Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* EMI Amount */}
                  <div className="text-center py-6 bg-white/10 rounded-xl">
                    <div className="text-sm text-white/80 mb-2">Monthly EMI</div>
                    <div className="text-4xl md:text-5xl font-bold">
                      {formatCurrency(emiResult.emi)}
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <div className="flex items-center gap-2">
                        <IndianRupee className="h-4 w-4" />
                        <span className="text-white/90">Principal Amount</span>
                      </div>
                      <span className="font-semibold">{formatCurrency(loanAmount)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        <span className="text-white/90">Total Interest</span>
                      </div>
                      <span className="font-semibold">{formatCurrency(emiResult.totalInterest)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-white/90">Total Amount Payable</span>
                      </div>
                      <span className="font-semibold text-lg">{formatCurrency(emiResult.totalAmount)}</span>
                    </div>
                  </div>

                  {/* Visual breakdown */}
                  <div className="mt-6">
                    <div className="text-sm text-white/80 mb-2">Payment Breakdown</div>
                    <div className="h-4 rounded-full overflow-hidden bg-white/20 flex">
                      <div 
                        className="h-full bg-white transition-all duration-500"
                        style={{ width: `${(loanAmount / emiResult.totalAmount) * 100}%` }}
                      />
                      <div 
                        className="h-full bg-white/60 transition-all duration-500"
                        style={{ width: `${(emiResult.totalInterest / emiResult.totalAmount) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-white/70">
                      <span>Principal ({Math.round((loanAmount / emiResult.totalAmount) * 100)}%)</span>
                      <span>Interest ({Math.round((emiResult.totalInterest / emiResult.totalAmount) * 100)}%)</span>
                    </div>
                  </div>

                  <a href="/#quick-enquiry-form">
                    <Button className="w-full bg-white text-[#196b92] hover:bg-white/90 mt-4">
                      Apply for {selectedLoan.name}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
