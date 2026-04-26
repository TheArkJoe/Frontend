import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const NEWSLETTER_TABLE = 'newsletter';

const supabase = SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY
  ? createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
  : null;

export async function createLeadSubmission({ email }) {
  const payload = {
    email: String(email || '').trim().toLowerCase(),
  };

  if (!payload.email) {
    throw new Error('INVALID_EMAIL');
  }

  if (!supabase) {
    const error = new Error('SUPABASE_NOT_CONFIGURED');
    error.code = 'SUPABASE_NOT_CONFIGURED';
    throw error;
  }

  const { error } = await supabase.from(NEWSLETTER_TABLE).insert([payload]);

  if (error) {
    const submissionError = new Error('SUPABASE_INSERT_FAILED');
    submissionError.code = 'SUPABASE_INSERT_FAILED';
    submissionError.details = {
      table: NEWSLETTER_TABLE,
      message: error.message,
      code: error.code,
      hint: error.hint,
      details: error.details,
    };
    throw submissionError;
  }

  return {
    saved: true,
    payload,
    data: null,
  };
}
