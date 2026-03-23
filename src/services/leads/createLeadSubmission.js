import { appendLeadToGoogleSheet } from './providers/googleSheetsProvider';

const PROVIDERS = [appendLeadToGoogleSheet];

export async function createLeadSubmission({ email, source }) {
  const payload = {
    email: String(email || '').trim().toLowerCase(),
    source,
    createdAt: new Date().toISOString(),
  };

  if (!payload.email) {
    throw new Error('INVALID_EMAIL');
  }

  if (payload.source !== 'program' && payload.source !== 'newsletter') {
    throw new Error('INVALID_SOURCE');
  }

  for (const provider of PROVIDERS) {
    await provider(payload);
  }

  return payload;
}
