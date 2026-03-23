const GOOGLE_SHEETS_ENDPOINT = import.meta.env.VITE_LEADS_ENDPOINT;
const GOOGLE_SHEETS_API_KEY = import.meta.env.VITE_LEADS_API_KEY;

function throwLeadError(code, details = {}) {
  const error = new Error(code);
  error.name = 'LeadSubmissionError';
  error.code = code;
  error.details = details;
  throw error;
}

export async function appendLeadToGoogleSheet(lead) {
  if (!GOOGLE_SHEETS_ENDPOINT) {
    throwLeadError('GOOGLE_SHEETS_NOT_CONFIGURED');
  }

  if (GOOGLE_SHEETS_ENDPOINT.includes('docs.google.com/spreadsheets')) {
    throwLeadError('GOOGLE_SHEETS_WRONG_ENDPOINT', {
      endpoint: GOOGLE_SHEETS_ENDPOINT,
    });
  }

  const payload = new URLSearchParams({
    email: lead.email,
    source: lead.source,
    ...(GOOGLE_SHEETS_API_KEY ? { apiKey: GOOGLE_SHEETS_API_KEY } : {}),
  });

  let response;
  try {
    response = await fetch(GOOGLE_SHEETS_ENDPOINT, {
      method: 'POST',
      body: payload,
    });
  } catch (error) {
    throwLeadError('GOOGLE_SHEETS_NETWORK_ERROR', {
      endpoint: GOOGLE_SHEETS_ENDPOINT,
      cause: error?.message || 'network_failure',
    });
  }

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      throwLeadError('GOOGLE_SHEETS_AUTH_ERROR', {
        status: response.status,
        endpoint: GOOGLE_SHEETS_ENDPOINT,
      });
    }

    throwLeadError('GOOGLE_SHEETS_REQUEST_FAILED', {
      status: response.status,
      endpoint: GOOGLE_SHEETS_ENDPOINT,
    });
  }

  const contentType = response.headers.get('content-type') || '';
  try {
    const data = contentType.includes('application/json')
      ? await response.json()
      : { ok: true };

    if (data && data.ok === false) {
      throwLeadError('GOOGLE_SHEETS_REQUEST_FAILED', {
        endpoint: GOOGLE_SHEETS_ENDPOINT,
        response: data,
      });
    }
  } catch (error) {
    if (error?.code === 'GOOGLE_SHEETS_REQUEST_FAILED') {
      throw error;
    }

    throwLeadError('GOOGLE_SHEETS_INVALID_RESPONSE', {
      endpoint: GOOGLE_SHEETS_ENDPOINT,
      contentType,
      cause: error?.message || 'invalid_response',
    });
  }
}
