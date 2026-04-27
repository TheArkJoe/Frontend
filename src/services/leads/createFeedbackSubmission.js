import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const FEEDBACK_TABLE = 'feedback';

const supabase = SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY
  ? createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
  : null;

export async function createFeedbackSubmission(form) {
  if (!supabase) {
    const error = new Error('SUPABASE_NOT_CONFIGURED');
    error.code = 'SUPABASE_NOT_CONFIGURED';
    throw error;
  }

  const payload = {
    name: String(form.name || '').trim(),
    email: String(form.email || '').trim().toLowerCase(),
    rating: Number(form.rating) || null,
    category: String(form.category || '').trim() || null,
    goal: String(form.goal || '').trim() || null,
    bestpart: String(form.bestPart || '').trim() || null,
    improve: String(form.improve || '').trim() || null,
    recommend: String(form.recommend || '').trim() || null,
    contactback: Boolean(form.contactBack) || false,
  };

  const { error } = await supabase.from(FEEDBACK_TABLE).insert([payload]);

  if (error) {
    const submissionError = new Error('SUPABASE_INSERT_FAILED: ' + error.message);
    submissionError.code = 'SUPABASE_INSERT_FAILED';
    throw submissionError;
  }

  return { success: true };
}
