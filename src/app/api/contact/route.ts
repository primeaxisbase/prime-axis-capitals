import { NextRequest, NextResponse } from "next/server";

// Supabase configuration - Replace these with your actual Supabase credentials
const SUPABASE_URL = process.env.SUPABASE_URL || "https://dpsmuokcneepfmyqnhlf.supabase.co";
const SUPABASE_API_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || "";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  loanType: string;
  amount: string;
  panNumber?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.loanType || !data.amount) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      loan_type: data.loanType,
      amount: data.amount,
      pan_number: data.panNumber || null,
      message: data.message || null,
      source: "website",
      status: "pending",
      created_at: new Date().toISOString(),
    };

    // Log the data for now since Supabase keys seem invalid
    console.log("Contact form submission received:", {
      data: payload,
      timestamp: new Date().toISOString()
    });

    // Insert data into Supabase
    const supabaseResponse = await fetch(
      `${SUPABASE_URL}/rest/v1/contact_submissions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_API_KEY,
          "Authorization": `Bearer ${SUPABASE_API_KEY}`,
          "Prefer": "return=minimal",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!supabaseResponse.ok) {
      const errorText = await supabaseResponse.text();
      console.error("Supabase error:", errorText);
      return NextResponse.json(
        { error: `Unable to save contact request: ${errorText}` },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting us! We'll get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
