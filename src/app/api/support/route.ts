import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL || "https://dpsmuokcneepfmyqnhlf.supabase.co";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwc211b2tjbmVlcGZteXFuaGxmIiwicm9sZSI6ImF1bm9uIiwiaWF0IjoxNzczOTg3ODEyLCJleHAiOjIwODk1NjM4MTJ9.mkFh5-tgacdIIW7cafRPcsE-wk1w2Eu74KOkqp2N2s0";

interface SupportPayload {
  name: string;
  phone: string;
  message?: string;
  serviceType: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: SupportPayload = await request.json();

    if (!data.name || !data.phone) {
      return NextResponse.json({ error: "Name and phone number are required" }, { status: 400 });
    }

    const payload = {
      name: data.name,
      phone: data.phone,
      service_type: data.serviceType,
      issue_description: data.message || "",
      source: "website",
      status: "pending",
      created_at: new Date().toISOString(),
    };

    const supabaseResponse = await fetch(`${SUPABASE_URL}/rest/v1/support_requests`, {
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
        message: "Your support request has been submitted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Support submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
