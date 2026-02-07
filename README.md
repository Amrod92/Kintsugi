Kintsugi — Sito web per l'associazione nonprofit Kintsugi.

## Panoramica
Sito web moderno e elegante per presentare l'associazione Kintsugi, i suoi
progetti, le storie, gli eventi, un canale di contatto e una chat anonima. Il design
utilizza una palette calda e la font “The Seasons” per un look editoriale.

## Pagine principali
- Home (Landing)
- Chi siamo
- Storie
- Eventi + dettaglio evento
- Contatti
- Chat anonima
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
- `lib/stories.ts` — dati storie condivisi
- `public/` — asset (logo, font, immagini)

## Note
- La sede dell'associazione è Messina.
- Le pagine utilizzano uno sfondo unificato tramite classi globali.
- Transizioni pagina con fade-to-white tramite `components/page-transition.tsx`.
- La chat in `app/chat/page.tsx` include typing indicator, editing, delete, reazioni e download transcript (mock client-side).

## Deployment
Il progetto è compatibile con Vercel o qualsiasi hosting Node.js.

---
Per richieste o manutenzione, aggiorna i contenuti direttamente nelle pagine
in `app/` o nei dati in `lib/events.ts` e `lib/stories.ts`.
