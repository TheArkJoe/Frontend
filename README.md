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

### Supabase connection

Lead capture now writes directly to Supabase.

Required tables:

- `apply` (program application submissions)
- `newsletter` (newsletter signups)

Add `.env` in project root:

```bash
VITE_SUPABASE_URL="https://YOUR_PROJECT.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="YOUR_SUPABASE_PUBLISHABLE_KEY"
```

Then restart the dev server.

### Future-ready architecture

Submission is routed through:

- [src/services/leads/createLeadSubmission.js](src/services/leads/createLeadSubmission.js)
- [src/services/leads/createProgramApplicationSubmission.js](src/services/leads/createProgramApplicationSubmission.js)

The UI stays unchanged while storage is handled by Supabase.
