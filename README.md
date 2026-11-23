# AO Enterprises

Next.js website for AO Enterprises (Pty) Ltd, a commercial supply and procurement business based in Pretoria, South Africa.

## Development

Use Node.js 20 or newer and npm.

```sh
npm ci
npm run dev
```

The development server uses port 3000 by default. Run `npm run lint` and `npm run build` to validate the project.

The home, services, service details, about and quote pages use shared content from `lib/config.ts`. The fonts and media are served locally. The homepage plays the supplied black-ice video on a loop, using an upscaled UHD version on desktop. Reduced-motion settings display a still from the clip.

The quotation form validates details in the browser as a demo. Executive portraits and final mission and vision statements are still pending. The paper, printing and fulfilment visuals are generated placeholders for approved company photography.
