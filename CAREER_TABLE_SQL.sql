-- SQL Code for Career Applications Table
-- Copy and paste this in your Supabase SQL Editor to create the career_applications table

CREATE TABLE public.career_applications (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  position TEXT NOT NULL,
  experience TEXT,
  cover_letter TEXT,
  applied_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Add indexes for better query performance
CREATE INDEX idx_career_applications_email ON public.career_applications (email);
CREATE INDEX idx_career_applications_position ON public.career_applications (position);
CREATE INDEX idx_career_applications_applied_at ON public.career_applications (applied_at);

-- Enable Row Level Security (RLS)
ALTER TABLE public.career_applications ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anyone to insert
CREATE POLICY "Allow public inserts" ON public.career_applications
  FOR INSERT
  WITH CHECK (TRUE);

-- Create a policy to allow select (if needed for admin)
CREATE POLICY "Allow public select" ON public.career_applications
  FOR SELECT
  USING (TRUE);

-- NOTES:
-- 1. The table stores all career application submissions
-- 2. The applied_at field automatically records when the application was submitted
-- 3. created_at field stores the database record creation time
-- 4. RLS policies allow anyone to insert applications (public form)
-- 5. Make sure your Supabase API key has permission to insert into this table

-- After creating the table, your career application form will automatically save submissions here
