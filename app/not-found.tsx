import Link from "next/link";

export default function Custom404() {
  return (
    <div className="page-bg text-[#3b2f22]">
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="section-panel w-full max-w-2xl rounded-[32px] px-8 py-12 text-center shadow-2xl shadow-[#cbb896]/40">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#ead9ba] bg-white/70 text-[#9b7b4f]">
            <span className="font-seasons text-2xl">404</span>
          </div>
          <h1 className="font-seasons mt-6 text-3xl font-bold sm:text-4xl">
            Pagina non trovata
          </h1>
          <p className="mt-4 text-sm text-[#5b4b3a] sm:text-base">
            La pagina che stai cercando non esiste o è stata spostata. Torna
            alla home oppure scopri i prossimi eventi.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-[#9b7b4f] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#886b44]"
            >
              Torna alla home
            </Link>
            <Link
              href="/eventi"
              className="inline-flex items-center justify-center rounded-full border border-[#cbb896] bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#5b4b3a] transition hover:bg-[#f7f4ee]"
            >
              Vedi eventi
            </Link>
          </div>
          <div className="mt-8 text-xs uppercase tracking-[0.2em] text-[#9b7b4f]">
            Kintsugi · ogni crepa racconta una storia
          </div>
        </div>
      </div>
    </div>
  );
}
