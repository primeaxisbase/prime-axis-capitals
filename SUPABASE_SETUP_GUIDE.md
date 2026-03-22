-- Supabase SQL Setup Guide for Prime Axis Capitals
-- Run this in your Supabase SQL Editor

-- Step 1: Create the main contact_submissions table (Run this if you haven't created it yet)
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  loan_type VARCHAR(100) NOT NULL,
  amount VARCHAR(100) NOT NULL,
  pan_number VARCHAR(10),
  message TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Step 2: Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_pan_number ON contact_submissions(pan_number) 
WHERE pan_number IS NOT NULL;

-- Step 3: Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Step 4: Create policies for the table

-- Policy 1: Allow anonymous inserts (for the contact form)
DROP POLICY IF EXISTS "Allow anonymous inserts" ON contact_submissions;
CREATE POLICY "Allow anonymous inserts" ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy 2: Allow authenticated users to read all submissions
DROP POLICY IF EXISTS "Allow authenticated users to read submissions" ON contact_submissions;
CREATE POLICY "Allow authenticated users to read submissions" ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Step 5: Create a function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Step 6: Create trigger to update updated_at on row update
DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON contact_submissions;
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Step 7: Verify the table structure
-- Run this query to verify everything is set up correctly:
-- SELECT column_name, data_type FROM information_schema.columns 
-- WHERE table_name = 'contact_submissions' ORDER BY ordinal_position;

-- Expected columns: id, name, email, phone, loan_type, amount, pan_number, message, status, created_at, updated_at
