Kintsugi — Sito web per l'associazione nonprofit Kintsugi.

## Panoramica
Sito web moderno e elegante per presentare l'associazione Kintsugi, i suoi
progetti, le storie, gli eventi e un canale di contatto dedicato. Il design
utilizza una palette calda e la font “The Seasons” per un look editoriale.

## Pagine principali
- Home (Landing)
- Chi siamo
- Storie
- Eventi + dettaglio evento
- Contatti
- 404 personalizzata

## Stack
- Next.js (App Router)
- React
- Tailwind CSS
- Shadcn UI components (parzialmente)
- Font “The Seasons” (locale)

## Sviluppo locale
```bash
pnpm dev
```
Poi apri `http://localhost:3000`.

## Script utili
```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Struttura rilevante
- `app/` — pagine e layout (App Router)
- `components/` — componenti UI (navbar, footer, landing, ecc.)
- `lib/events.ts` — dati eventi condivisi
- `public/` — asset (logo, font, immagini)

## Note
- La sede dell'associazione è Messina.
- Le pagine utilizzano uno sfondo unificato tramite classi globali.

## Deployment
Il progetto è compatibile con Vercel o qualsiasi hosting Node.js.

---
Per richieste o manutenzione, aggiorna i contenuti direttamente nelle pagine
in `app/` o nei dati in `lib/events.ts`.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
