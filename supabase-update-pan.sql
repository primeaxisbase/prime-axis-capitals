-- Supabase SQL Update to add PAN Number field
-- Run this SQL in your Supabase SQL Editor to update the contact_submissions table

-- Add PAN number column to contact_submissions table
ALTER TABLE contact_submissions
ADD COLUMN IF NOT EXISTS pan_number VARCHAR(10);

-- Add comment to describe the column
COMMENT ON COLUMN contact_submissions.pan_number IS 'Optional PAN number (10 digits, all uppercase)';

-- Create index for PAN number lookups (optional, for performance)
CREATE INDEX IF NOT EXISTS idx_contact_submissions_pan_number ON contact_submissions(pan_number) 
WHERE pan_number IS NOT NULL;

-- Optional: Add constraint to validate PAN format (10 characters, alphanumeric)
-- ALTER TABLE contact_submissions
-- ADD CONSTRAINT pan_format CHECK (pan_number IS NULL OR (pan_number ~ '^[A-Z0-9]{10}$'));

-- Note: If you have existing records and want to keep everything as is, no migration needed.
-- New submissions will include the PAN number field automatically.

-- Verify the new column was added
-- SELECT column_name, data_type FROM information_schema.columns 
-- WHERE table_name = 'contact_submissions' ORDER BY ordinal_position;
