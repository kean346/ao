# AO Enterprises

Next.js website for AO Enterprises (Pty) Ltd, a commercial supply and procurement business based in Pretoria, South Africa.

## Development

Use Node.js 20 or newer and npm.

```sh
npm ci
npm run dev
```

The development server uses port 3000 by default. Run `npm run lint` and `npm run build` to validate the project.

The home, services, service details, about and quote pages use shared content from `lib/config.ts`. The homepage opens with the Smoked Brass design, a folded-cardstock star and animated rings. The service cards are shared with the Services page. The hero and service reveals respect reduced-motion preferences.

The header and footer use the stacked gold artwork in `public/media/ao-logo.webp`, recreated from the supplied AO logo references.

The quote page uses `AO_CONTACT_EMAIL`, `AO_CONTACT_PHONE` and `AO_CONTACT_ADDRESS` for confirmed contact details. Set the server-side `AO_RFQ_ENDPOINT` to the company's receiving HTTPS endpoint to enable delivery. It receives a multipart POST with the form fields and optional PDF, DOCX or XLSX attachment. A 2xx response confirms acceptance. `AO_RFQ_TOKEN` supplies an optional bearer token. Without an endpoint, the preview checks the fields locally.

Executive portraits and final mission and vision statements are still pending. The paper, printing and fulfilment visuals are generated placeholders for approved company photography.
