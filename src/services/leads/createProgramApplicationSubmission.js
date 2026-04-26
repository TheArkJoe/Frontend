import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const SUPABASE_APPLICATION_TABLE = 'apply';

const supabase = SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY
  ? createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
  : null;

console.log('[createProgramApplicationSubmission] Module loaded', {
  hasSupabaseUrl: Boolean(SUPABASE_URL),
  hasSupabasePublishableKey: Boolean(SUPABASE_PUBLISHABLE_KEY),
  table: SUPABASE_APPLICATION_TABLE,
});

const normalizeString = (value) => String(value || '').trim();
const normalizeNumberOrNull = (value) => {
  const normalized = normalizeString(value);
  if (!normalized) return null;
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
};

const toPrimaryGoalsText = (primaryGoals, primaryGoalOther) => {
  const selected = Array.isArray(primaryGoals) ? primaryGoals.filter(Boolean).map((goal) => String(goal).trim()).filter(Boolean) : [];
  const other = normalizeString(primaryGoalOther);
  if (other) {
    selected.push(`Other: ${other}`);
  }
  return selected.join(', ');
};

const toHearAboutUsText = (hearAboutUs, hearAboutUsOther) => {
  const source = normalizeString(hearAboutUs);
  const other = normalizeString(hearAboutUsOther);

  if (source && other) {
    return `${source} (Other: ${other})`;
  }

  return source || other;
};

const normalizePayload = (formData) => ({
  fullName: normalizeString(formData.fullName),
  age: normalizeNumberOrNull(formData.age),
  gender: normalizeString(formData.gender),
  whatsappnumber: normalizeString(formData.whatsappNumber),
  email: normalizeString(formData.email).toLowerCase(),
  heightcm: normalizeNumberOrNull(formData.heightCm),
  weightkg: normalizeNumberOrNull(formData.weightKg),
  foodAllergies: normalizeString(formData.foodAllergies),
  supplements: normalizeString(formData.supplements),
  medicalConcerns: normalizeString(formData.medicalConcerns),
  trainingHistory: normalizeString(formData.trainingHistory),
  currentExcerciseFrequency: normalizeString(formData.currentExerciseFrequency),
  previousInjuries: normalizeString(formData.previousInjuries),
  primaryGoals: toPrimaryGoalsText(formData.primaryGoals, formData.primaryGoalOther),
  specificGoals: normalizeString(formData.specificGoals),
  preferredProgram: normalizeString(formData.preferredProgram),
  preferredProgramOther: normalizeString(formData.preferredProgramOther),
  hearAboutUs: toHearAboutUsText(formData.hearAboutUs, formData.hearAboutUsOther),
  acceptedTerms: Boolean(formData.acceptedTerms),
  additionalNotes: normalizeString(formData.additionalNotes),
});

export async function createProgramApplicationSubmission(formData) {
  const payload = normalizePayload(formData);

  console.log('[createProgramApplicationSubmission] Normalized payload ready', {
    email: payload.email,
    fullName: payload.fullName,
    preferredProgram: payload.preferredProgram,
    acceptedTerms: payload.acceptedTerms,
  });

  if (!payload.fullName || !payload.email || !payload.whatsappnumber || !payload.acceptedTerms) {
    console.log('[createProgramApplicationSubmission] Validation failed', {
      hasFullName: Boolean(payload.fullName),
      hasEmail: Boolean(payload.email),
      hasWhatsapp: Boolean(payload.whatsappnumber),
      acceptedTerms: Boolean(payload.acceptedTerms),
    });
    throw new Error('INVALID_APPLICATION');
  }

  if (!supabase) {
    console.log('[createProgramApplicationSubmission] Supabase client missing', {
      hasUrl: Boolean(SUPABASE_URL),
      hasPublishableKey: Boolean(SUPABASE_PUBLISHABLE_KEY),
    });
    const error = new Error('SUPABASE_NOT_CONFIGURED');
    error.code = 'SUPABASE_NOT_CONFIGURED';
    throw error;
  }

  console.log('[createProgramApplicationSubmission] Inserting into table', {
    table: SUPABASE_APPLICATION_TABLE,
  });

  let data;
  let error;

  try {
    const response = await supabase
      .from(SUPABASE_APPLICATION_TABLE)
      .insert([payload]);
    data = response.data;
    error = response.error;
  } catch (requestError) {
    console.log('[createProgramApplicationSubmission] Request threw before Supabase response', {
      message: requestError?.message,
      name: requestError?.name,
      stack: requestError?.stack,
    });
    throw requestError;
  }

  if (error) {
    console.log('[createProgramApplicationSubmission] Supabase insert failed', {
      table: SUPABASE_APPLICATION_TABLE,
      message: error.message,
      code: error.code,
      hint: error.hint,
      details: error.details,
    });
    const submissionError = new Error('SUPABASE_INSERT_FAILED');
    submissionError.code = 'SUPABASE_INSERT_FAILED';
    submissionError.details = {
      table: SUPABASE_APPLICATION_TABLE,
      message: error.message,
      code: error.code,
      hint: error.hint,
      details: error.details,
    };
    throw submissionError;
  }

  console.log('[createProgramApplicationSubmission] Supabase insert success', {
    table: SUPABASE_APPLICATION_TABLE,
    rowsReturned: Array.isArray(data) ? data.length : 0,
  });

  return {
    saved: true,
    payload,
    data,
  };
}
