# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Lead Capture (Program / Newsletter)

The newsletter section now sends lead submissions as:

- `email`
- `source` (`program` or `newsletter`)

The UI uses a selector, but the form layout stays the same.

### Google Sheets connection

The direct Google Sheet URL is not enough for client-side writes. You need a writable endpoint.

Recommended quick setup: **Google Apps Script Web App**.

1. Open the sheet and go to **Extensions → Apps Script**.
2. Use this script:

```javascript
const SHEET_NAME = 'Sheet1';
const EXPECTED_API_KEY = ''; // optional

function doPost(e) {
	try {
		const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
		const email = String((e.parameter && e.parameter.email) || '').trim();
		const source = String((e.parameter && e.parameter.source) || '').trim().toLowerCase();
		const apiKey = String((e.parameter && e.parameter.apiKey) || '').trim();

		if (EXPECTED_API_KEY && apiKey !== EXPECTED_API_KEY) {
			return ContentService.createTextOutput(
				JSON.stringify({ ok: false, error: 'unauthorized' })
			).setMimeType(ContentService.MimeType.JSON);
		}

		if (!email || !['program', 'newsletter'].includes(source)) {
			return ContentService.createTextOutput(
				JSON.stringify({ ok: false, error: 'invalid_payload' })
			).setMimeType(ContentService.MimeType.JSON);
		}

		sheet.appendRow([email, source]);

		return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
			ContentService.MimeType.JSON
		);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: 'server_error' })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Deploy as **Web App**:
	 - Execute as: **Me**
	 - Access: **Anyone** (or your desired restricted option)
4. Copy the Web App URL.
5. Add `.env` in project root:

```bash
VITE_LEADS_ENDPOINT="https://script.google.com/macros/s/XXXXXXXXXXXX/exec"
```

6. Restart dev server.

### Future-ready architecture

Submission is routed through:

- [src/services/leads/createLeadSubmission.js](src/services/leads/createLeadSubmission.js)
- [src/services/leads/providers/googleSheetsProvider.js](src/services/leads/providers/googleSheetsProvider.js)

To migrate to a real DB + dashboard later, keep the UI unchanged and replace/add providers (for example API/backend provider, PostgreSQL, Supabase, etc.).
