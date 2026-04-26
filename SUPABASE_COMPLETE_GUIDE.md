# Supabase Setup & Troubleshooting Guide

## ✅ What I Fixed

1. **PAN Number Field**: Removed restrictive pattern validation that was blocking input
2. **API Handler**: Updated to properly accept and send `pan_number` to Supabase
3. **Database Integration**: API now sends PAN number as `pan_number` field to Supabase
4. **Chatbot Tables**: Added Row Level Security policies for `instant_quote_leads` and `support_requests` tables

## 🔧 Complete Supabase Setup Steps

### Step 1: Get Your Supabase Credentials
1. Go to [https://supabase.com](https://supabase.com)
2. Login to your dashboard
3. Select your project
4. Go to **Settings → API**
5. Copy:
   - `Project URL` (SUPABASE_URL)
   - `anon public` key (SUPABASE_ANON_KEY)

### Step 2: Update Environment Variables
1. Open `/Users/tusharrajput/Downloads/prime-axis-capitals (1)/.env.local`
2. Add/Update these variables:

```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

### Step 3: Set Up Database Table
1. Go to your Supabase Dashboard
2. Click **SQL Editor** (left sidebar)
3. Click **New Query**
4. Copy the entire script below and paste it:

```sql
-- Create contact_submissions table
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

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_pan_number ON contact_submissions(pan_number) WHERE pan_number IS NOT NULL;

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies
DROP POLICY IF EXISTS "Allow anonymous inserts" ON contact_submissions;
CREATE POLICY "Allow anonymous inserts" ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated users to read submissions" ON contact_submissions;
CREATE POLICY "Allow authenticated users to read submissions" ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create function for timestamp updates
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON contact_submissions;
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

5. Click **Run** (or press Ctrl+Enter)
6. You should see: `Success. No rows returned` - This is normal!

### Step 4: Set Up Chatbot Tables
1. Go to your Supabase Dashboard
2. Click **SQL Editor** (left sidebar)
3. Click **New Query**
4. Copy the entire script from `SUPABASE_CHATBOT_TABLES.sql` and paste it
5. Click **Run**
6. You should see: `Success. No rows returned` - This is normal!

## ✅ Verify Setup

### Check 1: Table Created
In your Supabase Dashboard:
1. Go to **Table Editor** (left sidebar)
2. You should see `contact_submissions` table in the list
3. Click on it to see columns: name, email, phone, loan_type, amount, **pan_number**, message, status, created_at, updated_at

### Check 2: Test the Form
1. Start your dev server: `npm run dev`
2. Go to `http://localhost:3000`
3. Fill out the CTA form including the PAN Number (e.g., "ABCD1234EF")
4. Click "Submit Application"
5. You should see a success message

### Check 3: Verify Data in Supabase
1. Go to your Supabase Dashboard
2. Click **Table Editor**
3. Click on `contact_submissions`
4. Your submitted form should appear as a new row!

## 🆘 Troubleshooting

### Problem: Form still not accepting PAN input
**Solution:**
- Clear browser cache (Cmd+Shift+Delete)
- Restart dev server (`npm run dev`)
- Check browser console for errors (F12 → Console)

### Problem: Data not appearing in Supabase
**Checklist:**
1. ✅ Did you set `SUPABASE_URL` and `SUPABASE_ANON_KEY` in `.env.local`?
2. ✅ Did you run the SQL script in Supabase?
3. ✅ Did you see the success message on the form?
4. ✅ Are Row Level Security policies enabled?

**Fix:**
- Restart dev server after updating `.env.local`
- Run the full SQL script again (some parts might have failed silently)
- Check Supabase logs: Dashboard → Logs → API

### Problem: Chatbot not saving data to Supabase
**Error:** "We're having trouble processing your request."

**Solution:**
1. ✅ Run the chatbot tables SQL script from `SUPABASE_CHATBOT_TABLES.sql`
2. ✅ Ensure RLS policies are created for `instant_quote_leads` and `support_requests`
3. ✅ Check Supabase logs: Dashboard → Logs → API for detailed errors
4. ✅ Verify the chatbot is sending required fields (name, phone, serviceType)

## 📊 View Your Data

### In Supabase Dashboard:
1. Click **Table Editor**
2. Select `contact_submissions`
3. Browse all submitted applications
4. Click on any row to see full details

### Using SQL Query:
1. Click **SQL Editor**
2. Create new query and run:

```sql
SELECT * FROM contact_submissions ORDER BY created_at DESC;
```

## 🔒 Security Notes

- ✅ Row Level Security (RLS) is enabled
- ✅ Only anonymous users can INSERT (submit forms)
- ✅ Only authenticated users can SELECT (view submissions)
- ✅ Column types are validated at database level

## 📱 Form Fields Explanation

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Full Name | Text | Yes | Min 1 character |
| Email | Email | Yes | Valid email format |
| Phone | Tel | Yes | Any format accepted |
| Loan Type | Select | Yes | 6 options available |
| Amount | Text | Yes | Format: ₹1,00,000 |
| PAN Number | Text | No | 10 digits, uppercase |
| Message | Textarea | No | Optional notes |

---

**Everything is now ready to go!** Just ensure your `.env.local` has the correct Supabase credentials.
