"use client";

import InstantQuoteChat from "@/components/chatbot/instant-quote-chat";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigation } from "@/hooks/use-navigation";

export default function InstantQuotePage() {
  const { goBack } = useNavigation();

  const handleBack = () => {
    goBack();
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Button
            onClick={handleBack}
            variant="ghost"
            className="mb-4 text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Instant Quote</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Get your loan, credit card, or GST support through chat
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
              This chat assistant helps you choose the right service, collects your details, and submits them directly to Prime Axis Capital for a quick callback.
            </p>
          </div>
        </div>
        <InstantQuoteChat />
      </div>
    </div>
  );
}
