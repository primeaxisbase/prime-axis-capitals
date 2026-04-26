-- Table for instant quote / lead submissions captured through the chatbot
create table if not exists instant_quote_leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  source text default 'chatbot',
  status text default 'pending',
  name text not null,
  phone text not null,
  service_type text not null,
  loan_amount text,
  city text,
  monthly_income text,
  employment_status text,
  existing_credit_card_status text,
  card_type text,
  business_type text,
  property_type text,
  property_value text,
  issue_description text
);

-- Table for customer support requests captured by the chatbot
create table if not exists support_requests (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  source text default 'chatbot',
  status text default 'pending',
  name text not null,
  phone text not null,
  service_type text not null,
  issue_description text not null,
  notes text
);

-- Enable Row Level Security for instant_quote_leads
ALTER TABLE instant_quote_leads ENABLE ROW LEVEL SECURITY;

-- Enable Row Level Security for support_requests
ALTER TABLE support_requests ENABLE ROW LEVEL SECURITY;

-- Policies for instant_quote_leads
DROP POLICY IF EXISTS "Allow anonymous inserts on instant_quote_leads" ON instant_quote_leads;
CREATE POLICY "Allow anonymous inserts on instant_quote_leads" ON instant_quote_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated users to read instant_quote_leads" ON instant_quote_leads;
CREATE POLICY "Allow authenticated users to read instant_quote_leads" ON instant_quote_leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Policies for support_requests
DROP POLICY IF EXISTS "Allow anonymous inserts on support_requests" ON support_requests;
CREATE POLICY "Allow anonymous inserts on support_requests" ON support_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated users to read support_requests" ON support_requests;
CREATE POLICY "Allow authenticated users to read support_requests" ON support_requests
  FOR SELECT
  TO authenticated
  USING (true);
