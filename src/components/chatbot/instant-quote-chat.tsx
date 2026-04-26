"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { ArrowRight, Phone, ChevronLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type ChatMessage = {
  id: string;
  sender: "bot" | "user";
  text: string;
};

type SubmissionType = "quote" | "support";

type ChatData = {
  submissionType: SubmissionType;
  serviceType: string;
  loanAmount: string;
  city: string;
  monthlyIncome: string;
  employmentStatus: string;
  existingCreditCard: string;
  cardType: string;
  businessType: string;
  propertyType: string;
  propertyValue: string;
  supportIssue: string;
  name: string;
  phone: string;
};

type ChatStep =
  | "menu"
  | "personal-loan-amount"
  | "personal-loan-city"
  | "personal-loan-income"
  | "personal-loan-employment"
  | "business-loan-amount"
  | "business-loan-turnover"
  | "business-loan-type"
  | "home-loan-property"
  | "home-loan-amount"
  | "home-loan-income"
  | "lap-property-type"
  | "lap-property-value"
  | "lap-loan-amount"
  | "credit-card-have"
  | "credit-card-type"
  | "credit-card-city"
  | "credit-card-income"
  | "gst-service"
  | "support-name"
  | "support-phone"
  | "support-description"
  | "confirm"
  | "done";

const majorCities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Chandigarh",
];

const allCities = [
  ...majorCities,
  "Lucknow",
  "Indore",
  "Surat",
  "Bhopal",
  "Vadodara",
  "Goa",
  "Coimbatore",
  "Kochi",
  "Visakhapatnam",
  "Nagpur",
  "Agra",
  "Kota",
  "Varanasi",
  "Dehradun",
  "Gandhidham",
];

function createMessage(sender: "bot" | "user", text: string): ChatMessage {
  return {
    id: `${sender}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    sender,
    text,
  };
}

function normalizeText(value: string) {
  return value.trim().toLowerCase();
}

export default function InstantQuoteChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    createMessage(
      "bot",
      `Hi there! 👋 Welcome to Prime Axis Capital\n\nI'm here to help you find the right financial solution. What do you need today?`
    ),
  ]);
  const [inputValue, setInputValue] = useState("");
  const [step, setStep] = useState<ChatStep>("menu");
  const [stepHistory, setStepHistory] = useState<ChatStep[]>([]);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showCityModal, setShowCityModal] = useState(false);
  const [tempCitySearch, setTempCitySearch] = useState("");
  const [chatData, setChatData] = useState<ChatData>({
    submissionType: "quote",
    serviceType: "",
    loanAmount: "",
    city: "",
    monthlyIncome: "",
    employmentStatus: "",
    existingCreditCard: "",
    cardType: "",
    businessType: "",
    propertyType: "",
    propertyValue: "",
    supportIssue: "",
    name: "",
    phone: "",
  });

  const amountStepConfig: Partial<Record<ChatStep, {
    label: string;
    min: number;
    max: number;
    step: number;
    suggestions: number[];
    valueKey: keyof ChatData;
  }>> = {
    "personal-loan-amount": {
      label: "Personal loan amount",
      min: 50000,
      max: 5000000,
      step: 50000,
      suggestions: [250000, 500000, 1000000, 2000000],
      valueKey: "loanAmount",
    },
    "business-loan-amount": {
      label: "Business loan amount",
      min: 100000,
      max: 20000000,
      step: 50000,
      suggestions: [500000, 1000000, 2000000, 5000000],
      valueKey: "loanAmount",
    },
    "home-loan-property": {
      label: "Property value",
      min: 1000000,
      max: 50000000,
      step: 100000,
      suggestions: [3000000, 5000000, 10000000],
      valueKey: "propertyValue",
    },
    "home-loan-amount": {
      label: "Home loan amount",
      min: 1000000,
      max: 25000000,
      step: 100000,
      suggestions: [1000000, 2500000, 5000000, 10000000],
      valueKey: "loanAmount",
    },
    "home-loan-income": {
      label: "Monthly income",
      min: 20000,
      max: 500000,
      step: 5000,
      suggestions: [30000, 50000, 75000, 100000],
      valueKey: "monthlyIncome",
    },
    "lap-property-value": {
      label: "Property value",
      min: 2000000,
      max: 80000000,
      step: 100000,
      suggestions: [5000000, 10000000, 20000000],
      valueKey: "propertyValue",
    },
    "lap-loan-amount": {
      label: "LAP loan amount",
      min: 500000,
      max: 30000000,
      step: 50000,
      suggestions: [2000000, 5000000, 10000000],
      valueKey: "loanAmount",
    },
    "business-loan-turnover": {
      label: "Monthly turnover",
      min: 50000,
      max: 5000000,
      step: 50000,
      suggestions: [200000, 500000, 1000000],
      valueKey: "monthlyIncome",
    },
    "credit-card-income": {
      label: "Monthly income",
      min: 10000,
      max: 500000,
      step: 5000,
      suggestions: [20000, 50000, 100000],
      valueKey: "monthlyIncome",
    },
  };

  const currentAmountConfig = amountStepConfig[step];

  const formatRuPs = (value: string | number) => {
    const numberValue = Number(String(value).replace(/[^0-9]/g, ""));
    return numberValue > 0
      ? `₹${numberValue.toLocaleString("en-IN")}`
      : "";
  };

  useEffect(() => {
    if (currentAmountConfig) {
      const currentValue = chatData[currentAmountConfig.valueKey];
      setInputValue(currentValue || String(currentAmountConfig.min));
    }
  }, [step]);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const filteredCities = useMemo(() => {
    if (!tempCitySearch.trim()) {
      return allCities;
    }
    return allCities.filter(city =>
      city.toLowerCase().includes(tempCitySearch.toLowerCase())
    );
  }, [tempCitySearch]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function addBotMessage(text: string) {
    setMessages((prev) => [...prev, createMessage("bot", text)]);
  }

  function addUserMessage(text: string) {
    setMessages((prev) => [...prev, createMessage("user", text)]);
  }

  function goBack() {
    if (stepHistory.length > 0) {
      const previousStep = stepHistory[stepHistory.length - 1];
      setStepHistory(stepHistory.slice(0, -1));
      setStep(previousStep);
      addBotMessage("Going back... What would you like to do?");
    } else {
      resetToMenu();
    }
  }

  function resetToMenu() {
    setStep("menu");
    setStepHistory([]);
    setMessages([
      createMessage(
        "bot",
        `Hi there! 👋 Welcome to Prime Axis Capital\n\nI'm here to help you find the right financial solution. What do you need today?`
      ),
    ]);
  }

  function handleServiceChoice(option: string) {
    setStepHistory([...stepHistory, step]);

    switch (option) {
      case "Personal Loan":
        setChatData((prev) => ({ ...prev, serviceType: option }));
        setStep("personal-loan-amount");
        addBotMessage(
          "How much Personal Loan do you need? (Enter amount in INR - example: 500000, 1000000)"
        );
        break;
      case "Business Loan":
        setChatData((prev) => ({ ...prev, serviceType: option }));
        setStep("business-loan-amount");
        addBotMessage(
          "How much Business Loan do you need? (Enter amount in INR)"
        );
        break;
      case "Home Loan":
        setChatData((prev) => ({ ...prev, serviceType: option }));
        setStep("home-loan-property");
        addBotMessage(
          "What is your property value? (Enter in INR)"
        );
        break;
      case "Loan Against Property":
        setChatData((prev) => ({ ...prev, serviceType: option }));
        setStep("lap-property-type");
        addBotMessage("Is your property Residential or Commercial?\n\n1. Residential\n2. Commercial");
        break;
      case "Credit Card":
        setChatData((prev) => ({ ...prev, serviceType: option }));
        setStep("credit-card-have");
        addBotMessage("Do you currently have a credit card?\n\n1. Yes\n2. No");
        break;
      case "Accounting & GST/ITR":
        setChatData((prev) => ({ ...prev, serviceType: option }));
        setStep("gst-service");
        addBotMessage(
          "Which service do you need?\n\n1. GST Registration\n2. GST Filing\n3. ITR Filing\n4. Accounting"
        );
        break;
      case "Need Help?":
        setChatData((prev) => ({ ...prev, submissionType: "support" }));
        setStep("support-name");
        addBotMessage("I'm here to help! What's your name?");
        break;
      default:
        addBotMessage("Please choose a valid option.");
    }
  }

  function handleSelectCity(city: string) {
    setChatData((prev) => ({ ...prev, city }));
    addUserMessage(city);
    setShowCityModal(false);
    setTempCitySearch("");

    if (step === "personal-loan-city") {
      setStepHistory([...stepHistory, step]);
      setStep("personal-loan-income");
      addBotMessage("What is your monthly income? (Approximately, in INR)");
      return;
    }
    if (step === "credit-card-city") {
      setStepHistory([...stepHistory, step]);
      setStep("credit-card-income");
      addBotMessage("What is your monthly income? (In INR)");
      return;
    }
  }

  function handleSubmitInput(value: string) {
    const normalized = normalizeText(value);

    // Menu selection
    if (step === "menu") {
      const options: { [key: string]: string } = {
        "1": "Personal Loan",
        "2": "Business Loan",
        "3": "Home Loan",
        "4": "Loan Against Property",
        "5": "Credit Card",
        "6": "Accounting & GST/ITR",
        "7": "Need Help?",
      };

      if (options[normalized]) {
        addUserMessage(options[normalized]);
        handleServiceChoice(options[normalized]);
        return;
      } else {
        addBotMessage("Please select a valid option (1-7).");
        return;
      }
    }

    // Personal Loan Amount
    if (step === "personal-loan-amount") {
      const amount = value.replace(/[^0-9]/g, "");
      if (!amount || amount.length === 0) {
        addBotMessage("Please enter a valid amount in INR.");
        return;
      }
      setChatData((prev) => ({ ...prev, loanAmount: amount }));
      addUserMessage(`₹${Number(amount).toLocaleString("en-IN")}`);
      setStepHistory([...stepHistory, step]);
      setStep("personal-loan-city");
      addBotMessage("Which city are you from?");
      setShowCityModal(true);
      return;
    }

    // Personal Loan Income
    if (step === "personal-loan-income") {
      const income = value.replace(/[^0-9]/g, "");
      if (!income) {
        addBotMessage("Please enter your monthly income.");
        return;
      }
      setChatData((prev) => ({ ...prev, monthlyIncome: income }));
      addUserMessage(`₹${Number(income).toLocaleString("en-IN")} per month`);
      setStepHistory([...stepHistory, step]);
      setStep("personal-loan-employment");
      addBotMessage("Are you Salaried or Self-employed?\n\n1. Salaried\n2. Self-employed");
      return;
    }

    // Personal Loan Employment
    if (step === "personal-loan-employment") {
      const status =
        normalized.startsWith("1") || normalized.includes("salaried")
          ? "Salaried"
          : normalized.startsWith("2") || normalized.includes("self")
          ? "Self-employed"
          : value;
      setChatData((prev) => ({ ...prev, employmentStatus: status }));
      addUserMessage(status);
      setStepHistory([...stepHistory, step]);
      setStep("confirm");
      setIsConfirmOpen(true);
      addBotMessage(
        "Great! You appear to be eligible for a Personal Loan. Let me collect your details to connect you with our loan specialist."
      );
      return;
    }

    // Business Loan Amount
    if (step === "business-loan-amount") {
      const amount = value.replace(/[^0-9]/g, "");
      if (!amount) {
        addBotMessage("Please enter a valid amount in INR.");
        return;
      }
      setChatData((prev) => ({ ...prev, loanAmount: amount }));
      addUserMessage(`₹${Number(amount).toLocaleString("en-IN")}`);
      setStepHistory([...stepHistory, step]);
      setStep("business-loan-turnover");
      addBotMessage("What is your monthly business turnover? (Approximately, in INR)");
      return;
    }

    // Business Loan Turnover
    if (step === "business-loan-turnover") {
      const turnover = value.replace(/[^0-9]/g, "");
      if (!turnover) {
        addBotMessage("Please enter your business turnover.");
        return;
      }
      setChatData((prev) => ({ ...prev, monthlyIncome: turnover }));
      addUserMessage(`₹${Number(turnover).toLocaleString("en-IN")}`);
      setStepHistory([...stepHistory, step]);
      setStep("business-loan-type");
      addBotMessage("What type of business do you operate? (E.g., Retail, Services, Trading)");
      return;
    }

    // Business Loan Type
    if (step === "business-loan-type") {
      setChatData((prev) => ({ ...prev, businessType: value }));
      addUserMessage(value);
      setStepHistory([...stepHistory, step]);
      setStep("confirm");
      setIsConfirmOpen(true);
      addBotMessage(
        "Perfect! Our business loan specialist will evaluate and contact you."
      );
      return;
    }

    // Home Loan Property Value
    if (step === "home-loan-property") {
      const amount = value.replace(/[^0-9]/g, "");
      if (!amount) {
        addBotMessage("Please enter a valid property value in INR.");
        return;
      }
      setChatData((prev) => ({ ...prev, propertyValue: amount }));
      addUserMessage(`₹${Number(amount).toLocaleString("en-IN")}`);
      setStepHistory([...stepHistory, step]);
      setStep("home-loan-amount");
      addBotMessage("How much loan do you need? (In INR)");
      return;
    }

    // Home Loan Amount
    if (step === "home-loan-amount") {
      const amount = value.replace(/[^0-9]/g, "");
      if (!amount) {
        addBotMessage("Please enter a valid loan amount in INR.");
        return;
      }
      setChatData((prev) => ({ ...prev, loanAmount: amount }));
      addUserMessage(`₹${Number(amount).toLocaleString("en-IN")}`);
      setStepHistory([...stepHistory, step]);
      setStep("home-loan-income");
      addBotMessage("What is your monthly income? (Approximately, in INR)");
      return;
    }

    // Home Loan Income
    if (step === "home-loan-income") {
      const income = value.replace(/[^0-9]/g, "");
      if (!income) {
        addBotMessage("Please enter your monthly income.");
        return;
      }
      setChatData((prev) => ({ ...prev, monthlyIncome: income }));
      addUserMessage(`₹${Number(income).toLocaleString("en-IN")} per month`);
      setStepHistory([...stepHistory, step]);
      setStep("confirm");
      setIsConfirmOpen(true);
      addBotMessage(
        "Great! Our home loan expert will review your profile and get in touch."
      );
      return;
    }

    // LAP Property Type
    if (step === "lap-property-type") {
      const propType =
        normalized.startsWith("1") || normalized.includes("residential")
          ? "Residential"
          : normalized.startsWith("2") || normalized.includes("commercial")
          ? "Commercial"
          : value;
      setChatData((prev) => ({ ...prev, propertyType: propType }));
      addUserMessage(propType);
      setStepHistory([...stepHistory, step]);
      setStep("lap-property-value");
      addBotMessage("What is your property value? (In INR)");
      return;
    }

    // LAP Property Value
    if (step === "lap-property-value") {
      const amount = value.replace(/[^0-9]/g, "");
      if (!amount) {
        addBotMessage("Please enter a valid property value in INR.");
        return;
      }
      setChatData((prev) => ({ ...prev, propertyValue: amount }));
      addUserMessage(`₹${Number(amount).toLocaleString("en-IN")}`);
      setStepHistory([...stepHistory, step]);
      setStep("lap-loan-amount");
      addBotMessage("How much loan do you need? (In INR)");
      return;
    }

    // LAP Loan Amount
    if (step === "lap-loan-amount") {
      const amount = value.replace(/[^0-9]/g, "");
      if (!amount) {
        addBotMessage("Please enter a valid loan amount in INR.");
        return;
      }
      setChatData((prev) => ({ ...prev, loanAmount: amount }));
      addUserMessage(`₹${Number(amount).toLocaleString("en-IN")}`);
      setStepHistory([...stepHistory, step]);
      setStep("confirm");
      setIsConfirmOpen(true);
      addBotMessage(
        "Perfect! Our LAP specialist will contact you to discuss your application."
      );
      return;
    }

    // Credit Card Have
    if (step === "credit-card-have") {
      const status =
        normalized.startsWith("1") || normalized.includes("yes")
          ? "Yes"
          : normalized.startsWith("2") || normalized.includes("no")
          ? "No"
          : value;
      setChatData((prev) => ({ ...prev, existingCreditCard: status }));
      addUserMessage(status);
      setStepHistory([...stepHistory, step]);
      setStep("credit-card-type");
      addBotMessage(
        "Which type of card interests you?\n\n1. Cashback Card\n2. Travel Card\n3. Fuel Card\n4. Shopping Card\n5. Lifetime Free Card\n6. Suggest Best Option"
      );
      return;
    }

    // Credit Card Type
    if (step === "credit-card-type") {
      const cardTypes = [
        "Cashback Card",
        "Travel Card",
        "Fuel Card",
        "Shopping Card",
        "Lifetime Free Card",
        "Suggest Best Option",
      ];
      const cardChoice =
        cardTypes.find((card) => normalizeText(card).includes(normalized)) ||
        cardTypes[parseInt(value) - 1] ||
        value;
      setChatData((prev) => ({ ...prev, cardType: String(cardChoice) }));
      addUserMessage(String(cardChoice));
      setStepHistory([...stepHistory, step]);
      setStep("credit-card-city");
      addBotMessage("Which city are you from?");
      setShowCityModal(true);
      return;
    }

    // Credit Card Income
    if (step === "credit-card-income") {
      const income = value.replace(/[^0-9]/g, "");
      if (!income) {
        addBotMessage("Please enter your monthly income.");
        return;
      }
      setChatData((prev) => ({ ...prev, monthlyIncome: income }));
      addUserMessage(`₹${Number(income).toLocaleString("en-IN")} per month`);
      setStepHistory([...stepHistory, step]);
      setStep("confirm");
      setIsConfirmOpen(true);
      addBotMessage(
        `Excellent! We'll match you with the best ${chatData.cardType} offers from our partner banks.`
      );
      return;
    }

    // GST Service Selection
    if (step === "gst-service") {
      const gstServices = [
        "GST Registration",
        "GST Filing",
        "ITR Filing",
        "Accounting",
      ];
      const serviceChoice =
        gstServices.find((service) =>
          normalizeText(service).includes(normalized)
        ) ||
        gstServices[parseInt(value) - 1] ||
        value;
      setChatData((prev) => ({ ...prev, serviceType: String(serviceChoice) }));
      addUserMessage(String(serviceChoice));
      setStepHistory([...stepHistory, step]);
      setStep("confirm");
      setIsConfirmOpen(true);
      addBotMessage(
        "Perfect! Our accounting expert will reach out to discuss your needs."
      );
      return;
    }

    // Support: Name
    if (step === "support-name") {
      setChatData((prev) => ({ ...prev, name: value }));
      addUserMessage(value);
      setStepHistory([...stepHistory, step]);
      setStep("support-phone");
      addBotMessage("Thanks! What's your phone number?");
      return;
    }

    // Support: Phone
    if (step === "support-phone") {
      const phone = value.replace(/[^0-9]/g, "");
      if (phone.length < 10) {
        addBotMessage("Please enter a valid 10-digit phone number.");
        return;
      }
      setChatData((prev) => ({ ...prev, phone }));
      addUserMessage(phone);
      setStepHistory([...stepHistory, step]);
      setStep("support-description");
      addBotMessage(
        "Now, what issue or question do you have? (Please describe)"
      );
      return;
    }

    // Support: Description
    if (step === "support-description") {
      setChatData((prev) => ({ ...prev, supportIssue: value }));
      addUserMessage(value);
      setStepHistory([...stepHistory, step]);
      setStep("confirm");
      setIsConfirmOpen(true);
      addBotMessage(
        "Thank you for providing those details. We'll review your issue and get back to you shortly."
      );
      return;
    }

    addBotMessage("Please provide the information requested or use the back button.");
  }

  async function submitChatData() {
    if (!chatData.name || !chatData.phone) {
      setSubmitError("Name and phone number are required.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/instant-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(chatData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const message = errorData?.error || "submission_failed";
        throw new Error(message);
      }

      setIsConfirmOpen(false);
      setStep("done");
      addBotMessage(
        "✓ Thank you! We've received your information. Our team will contact you within 24 hours. Thanks for choosing Prime Axis Capital!"
      );
      addBotMessage(
        "🎉 Your request has been successfully submitted! You can now close this chat or start a new conversation."
      );
      setChatData({
        submissionType: "quote",
        serviceType: "",
        loanAmount: "",
        city: "",
        monthlyIncome: "",
        employmentStatus: "",
        existingCreditCard: "",
        cardType: "",
        businessType: "",
        propertyType: "",
        propertyValue: "",
        supportIssue: "",
        name: "",
        phone: "",
      });
    } catch (error) {
      // User-friendly error - no technical details
      setSubmitError(
        "We're having trouble processing your request. Please try again or call us at +91 7428614189."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleSend() {
    if (!inputValue.trim()) {
      return;
    }

    const message = inputValue.trim();
    setInputValue("");
    handleSubmitInput(message);
  }

  function renderMenuButtons() {
    if (step !== "menu") return null;

    const menuOptions = [
      { id: "1", label: "Personal Loan" },
      { id: "2", label: "Business Loan" },
      { id: "3", label: "Home Loan" },
      { id: "4", label: "Loan Against Property" },
      { id: "5", label: "Credit Card" },
      { id: "6", label: "Accounting & GST/ITR" },
      { id: "7", label: "Need Help?" },
    ];

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {menuOptions.map((option) => (
          <Button
            key={option.id}
            type="button"
            variant="outline"
            className="justify-start text-sm"
            onClick={() => {
              handleServiceChoice(option.label);
            }}
          >
            {option.id}. {option.label}
          </Button>
        ))}
      </div>
    );
  }

  function renderQuickButtons() {
    if (currentAmountConfig) {
      const currentValue = inputValue || chatData[currentAmountConfig.valueKey] || String(currentAmountConfig.min);
      const sliderValue = Number(currentValue.replace(/[^0-9]/g, "")) || currentAmountConfig.min;

      return (
        <div className="space-y-4">
          <div className="rounded-3xl border border-border/60 p-4 bg-slate-50">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>{currentAmountConfig.label}</span>
                <span className="font-semibold text-slate-900">{formatRuPs(sliderValue)}</span>
              </div>
              <input
                type="range"
                min={currentAmountConfig.min}
                max={currentAmountConfig.max}
                step={currentAmountConfig.step}
                value={sliderValue}
                onChange={(event) => setInputValue(event.target.value)}
                className="w-full"
                aria-label={currentAmountConfig.label}
              />
              <Input
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value.replace(/[^0-9]/g, ""))}
                placeholder={`Enter amount in INR`}
                className="text-sm"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {currentAmountConfig.suggestions.map((amount) => (
              <Button
                key={amount}
                type="button"
                variant="outline"
                className="rounded-full px-4 py-2 text-sm"
                onClick={() => {
                  const value = String(amount);
                  setInputValue(value);
                  addUserMessage(formatRuPs(value));
                  handleSubmitInput(value);
                }}
              >
                {formatRuPs(amount)}
              </Button>
            ))}
          </div>
        </div>
      );
    }

    if (
      step === "personal-loan-employment" ||
      step === "lap-property-type" ||
      step === "credit-card-have"
    ) {
      const options =
        step === "personal-loan-employment"
          ? [
              { id: "1", label: "Salaried" },
              { id: "2", label: "Self-employed" },
            ]
          : step === "lap-property-type"
          ? [
              { id: "1", label: "Residential" },
              { id: "2", label: "Commercial" },
            ]
          : [
              { id: "1", label: "Yes" },
              { id: "2", label: "No" },
            ];

      return (
        <div className="grid grid-cols-2 gap-2">
          {options.map((opt) => (
            <Button
              key={opt.id}
              type="button"
              variant="outline"
              onClick={() => {
                addUserMessage(opt.label);
                handleSubmitInput(opt.id);
              }}
            >
              {opt.label}
            </Button>
          ))}
        </div>
      );
    }

    if (step === "credit-card-type") {
      return (
        <Select onValueChange={(value) => {
          addUserMessage(value);
          handleSubmitInput(value);
        }}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select credit card type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Cashback Card">Cashback Card</SelectItem>
            <SelectItem value="Travel Card">Travel Card</SelectItem>
            <SelectItem value="Fuel Card">Fuel Card</SelectItem>
            <SelectItem value="Shopping Card">Shopping Card</SelectItem>
            <SelectItem value="Lifetime Free Card">Lifetime Free Card</SelectItem>
            <SelectItem value="Suggest Best Option">Suggest Best Option</SelectItem>
          </SelectContent>
        </Select>
      );
    }

    if (step === "gst-service") {
      return (
        <Select onValueChange={(value) => {
          addUserMessage(value);
          handleSubmitInput(value);
        }}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select service type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="GST Registration">GST Registration</SelectItem>
            <SelectItem value="GST Filing">GST Filing</SelectItem>
            <SelectItem value="ITR Filing">ITR Filing</SelectItem>
            <SelectItem value="Accounting">Accounting</SelectItem>
          </SelectContent>
        </Select>
      );
    }

    if (step === "business-loan-type") {
      return (
        <Select onValueChange={(value) => {
          addUserMessage(value);
          handleSubmitInput(value);
        }}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select your business type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Retail">Retail</SelectItem>
            <SelectItem value="Services">Services</SelectItem>
            <SelectItem value="Trading">Trading</SelectItem>
            <SelectItem value="Manufacturing">Manufacturing</SelectItem>
            <SelectItem value="IT/Technology">IT/Technology</SelectItem>
            <SelectItem value="Healthcare">Healthcare</SelectItem>
            <SelectItem value="Education">Education</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      );
    }

    if (step === "personal-loan-city" || step === "credit-card-city") {
      return (
        <Select onValueChange={(value) => {
          handleSelectCity(value);
        }}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select your city" />
          </SelectTrigger>
          <SelectContent>
            {allCities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    }

    return null;
  }

  return (
    <div className="mx-auto max-w-4xl rounded-3xl border border-border/80 bg-white shadow-xl overflow-hidden flex flex-col h-[600px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-600 via-cyan-600 to-teal-500 px-6 py-5 text-white flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-100">
            Prime Axis Capital
          </p>
          <h2 className="text-xl font-semibold">Financial Assistant</h2>
        </div>
        {stepHistory.length > 0 && step !== "menu" && step !== "done" && (
          <button
            type="button"
            onClick={goBack}
            className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition text-sm font-medium"
            title="Go back"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>
        )}
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto space-y-4 px-6 py-6">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`rounded-3xl p-4 shadow-sm ${
                message.sender === "bot"
                  ? "bg-slate-50 text-slate-900"
                  : "bg-slate-900 text-white ml-auto max-w-xs"
              }`}
            >
              <p className="whitespace-pre-line text-sm leading-6">
                {message.text}
              </p>
            </div>
          ))}
          <div ref={scrollRef} />
        </div>

        {renderMenuButtons()}
        {renderQuickButtons()}

        {submitError ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            {submitError}
          </div>
        ) : null}
      </div>

      {/* Input Area */}
      <div className="border-t border-border/40 bg-white px-6 py-4 space-y-3">
        {currentAmountConfig ? (
          <div className="space-y-3">
            <p className="text-sm text-slate-600">
              Use the slider above or type the amount in the box.
            </p>
            <div className="flex gap-3">
              <Button type="button" onClick={handleSend} size="sm" className="px-6">
                Submit
              </Button>
              <div className="flex-1 text-right text-sm text-slate-500">
                {formatRuPs(inputValue) || "Enter a value to submit"}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-3">
            <Input
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Type your message..."
              className="text-sm"
            />
            <Button type="button" onClick={handleSend} size="sm" className="px-6">
              Submit
            </Button>
          </div>
        )}
      </div>

      {/* City Modal */}
      {showCityModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4">
          <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between gap-4 mb-4">
              <h3 className="text-xl font-semibold">Select Your City</h3>
              <button
                type="button"
                onClick={() => setShowCityModal(false)}
                className="rounded-full bg-slate-200 p-2 text-slate-700 hover:bg-slate-300"
                aria-label="Close city selection"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <Input
              value={tempCitySearch}
              onChange={(e) => setTempCitySearch(e.target.value)}
              placeholder="Search city..."
              className="mb-4"
            />

            <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
              {filteredCities.length > 0 ? (
                filteredCities.map((city) => (
                  <Button
                    key={city}
                    type="button"
                    variant="outline"
                    className="justify-start text-sm"
                    onClick={() => handleSelectCity(city)}
                  >
                    {city}
                  </Button>
                ))
              ) : (
                <p className="col-span-2 text-sm text-slate-500 py-4">
                  No cities found. Try a different search.
                </p>
              )}
            </div>
          </div>
        </div>
      ) : null}

      {/* Confirm Modal */}
      {isConfirmOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4 py-8">
          <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-2">Confirm Your Details</h3>
            <p className="text-sm text-slate-600 mb-6">
              Please provide your name and phone number so we can contact you.
            </p>

            <div className="grid gap-4 mb-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name *
                </label>
                <Input
                  value={chatData.name}
                  onChange={(event) =>
                    setChatData((prev) => ({ ...prev, name: event.target.value }))
                  }
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Phone Number *
                </label>
                <Input
                  value={chatData.phone}
                  onChange={(event) => {
                    const phone = event.target.value.replace(/[^0-9]/g, "");
                    setChatData((prev) => ({ ...prev, phone }));
                  }}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                />
              </div>

              {chatData.submissionType === "support" ? null : (
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Additional Details (Optional)
                  </label>
                  <Textarea
                    value={chatData.supportIssue}
                    onChange={(event) =>
                      setChatData((prev) => ({
                        ...prev,
                        supportIssue: event.target.value,
                      }))
                    }
                    placeholder="Any specific requirements?"
                    className="min-h-[80px]"
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Button
                variant="outline"
                type="button"
                onClick={() => setIsConfirmOpen(false)}
              >
                Cancel
              </Button>
              <Button type="button" onClick={submitChatData} disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Submit"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
