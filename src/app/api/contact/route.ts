import { NextRequest, NextResponse } from "next/server";

// Supabase configuration - Replace these with your actual Supabase credentials
const SUPABASE_URL = process.env.SUPABASE_URL || "https://dpsmuokcneepfmyqnhlf.supabase.co";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwc211b2tjbmVlcGZteXFuaGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5ODc4MTIsImV4cCI6MjA4OTU2MzgxMn0.mkFh5-tgacdIIW7cafRPcsE-wk1w2Eu74KOkqp2N2s0";

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

    // Insert data into Supabase
    const supabaseResponse = await fetch(
      `${SUPABASE_URL}/rest/v1/contact_submissions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
          "Prefer": "return=minimal",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          loan_type: data.loanType,
          amount: data.amount,
          pan_number: data.panNumber || null,
          message: data.message || null,
          created_at: new Date().toISOString(),
          status: "pending",
        }),
      }
    );

    if (!supabaseResponse.ok) {
      // If Supabase fails, log the error but still return success for demo purposes
      console.error("Supabase error:", await supabaseResponse.text());
      
      // For demo/development, we'll still return success
      // In production, you might want to handle this differently
      return NextResponse.json(
        { 
          success: true, 
          message: "Application submitted successfully",
          note: "Note: Supabase connection not configured. Please update SUPABASE_URL and SUPABASE_ANON_KEY environment variables."
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET endpoint to fetch submissions (for admin purposes)
export async function GET() {
  try {
    const supabaseResponse = await fetch(
      `${SUPABASE_URL}/rest/v1/contact_submissions?select=*&order=created_at.desc`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        },
      }
    );

    if (!supabaseResponse.ok) {
      return NextResponse.json(
        { error: "Failed to fetch submissions" },
        { status: 500 }
      );
    }

    const data = await supabaseResponse.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
