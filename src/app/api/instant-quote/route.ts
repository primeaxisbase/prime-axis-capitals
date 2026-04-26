import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL || "https://dpsmuokcneepfmyqnhlf.supabase.co";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwc211b2tjbmVlcGZteXFuaGxmIiwicm9sZSI6ImF1bm9uIiwiaWF0IjoxNzczOTg3ODEyLCJleHAiOjIwODk1NjM4MTJ9.mkFh5-tgacdIIW7cafRPcsE-wk1w2Eu74KOkqp2N2s0";

interface InstantQuotePayload {
  submissionType: "quote" | "support";
  name: string;
  phone: string;
  serviceType: string;
  loanAmount?: string;
  city?: string;
  monthlyIncome?: string;
  employmentStatus?: string;
  cardType?: string;
  businessType?: string;
  propertyType?: string;
  propertyValue?: string;
  supportIssue?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: InstantQuotePayload = await request.json();

    if (!data.name || !data.phone || !data.serviceType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const table = data.submissionType === "support" ? "support_requests" : "instant_quote_leads";

    const payload = {
      name: data.name,
      phone: data.phone,
      service_type: data.serviceType,
      loan_amount: data.loanAmount || null,
      city: data.city || null,
      monthly_income: data.monthlyIncome || null,
      employment_status: data.employmentStatus || null,
      card_type: data.cardType || null,
      business_type: data.businessType || null,
      property_type: data.propertyType || null,
      property_value: data.propertyValue || null,
      issue_description: data.supportIssue || null,
      source: "chatbot",
      status: "pending",
      created_at: new Date().toISOString(),
    };

    const supabaseResponse = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(payload),
    });

    if (!supabaseResponse.ok) {
      const errorText = await supabaseResponse.text();
      console.error("Supabase error:", errorText);
      return NextResponse.json(
        { error: "Unable to save request. Please check Supabase configuration." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your request has been submitted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Instant quote submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
