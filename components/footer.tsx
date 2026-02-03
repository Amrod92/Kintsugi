"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#3b2f22] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_0.6fr]">
          <div className="space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f3e6cf]"
            >
              <img
                src="/kintsugi-logo.png"
                alt="Kintsugi"
                className="h-10 w-10 rounded-full border border-white/30 bg-white/90 p-1"
              />
              <span className="font-seasons text-2xl font-bold tracking-[0.1em] text-white">
                Kintsugi
              </span>
            </Link>
            <p className="max-w-sm text-sm text-[#f0e6d4]">
              Kintsugi è un'associazione nonprofit. La nostra missione è
              promuovere l'inclusione sociale attraverso arte, cultura e
              formazione.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 transition hover:bg-white/10"
              >
                Dona
              </Link>
              <Link
                href="/"
                className="rounded-full border border-[#f3e6cf] bg-[#f3e6cf] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b2f22] transition hover:bg-white"
              >
                Unisciti
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f3e6cf]">
                Esplora
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li>
                  <Link href="/chi-siamo" className="transition hover:text-white">
                    Chi siamo
                  </Link>
                </li>
                <li>
                  <Link href="/storie" className="transition hover:text-white">
                    Storie
                  </Link>
                </li>
                <li>
                  <Link href="/eventi" className="transition hover:text-white">
                    Eventi
                  </Link>
                </li>
                <li>
                  <Link href="/contatti" className="transition hover:text-white">
                    Contatti
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f3e6cf]">
                Contatti
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li>Messina, Italia</li>
                <li>info@kintsugi.it</li>
                <li>+39 02 0000 0000</li>
                <li>Dove siamo</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f3e6cf]">
                Newsletter
              </p>
              <p className="mt-3 text-sm text-white/80">
                Ricevi aggiornamenti su eventi e storie di resilienza.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="La tua email"
                  className="w-full rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs text-white placeholder:text-white/60 focus:border-white/60 focus:outline-none"
                />
                <button className="rounded-full bg-[#f3e6cf] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b2f22] transition hover:bg-white">
                  Iscriviti
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {[
                { label: "X", color: "#f3e6cf" },
                { label: "IG", color: "#f3e6cf" },
                { label: "IN", color: "#f3e6cf" },
                { label: "YT", color: "#f3e6cf" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-xs font-semibold text-white/80 transition hover:border-white hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <span>
            ©
            <Link href="/" className="font-seasons text-white/90">
              {" "}
              Kintsugi
            </Link>{" "}
            {new Date().getFullYear()} · Tutti i diritti riservati.
          </span>
          <div className="flex items-center gap-4">
            <Link href="#" className="transition hover:text-white/90">
              Privacy
            </Link>
            <Link href="#" className="transition hover:text-white/90">
              Termini
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
