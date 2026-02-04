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
                  <Link
                    href="/chi-siamo"
                    className="transition hover:text-white"
                  >
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
                  <Link
                    href="/contatti"
                    className="transition hover:text-white"
                  >
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
                <li>
                  <a
                    href="mailto:info@kintsugi.it"
                    className="hover:text-white"
                  >
                    info@kintsugi.it
                  </a>
                </li>
                <li>
                  <a href="tel:+390900000000" className="hover:text-white">
                    +39 090 0000 0000
                  </a>
                </li>
                <li>
                  <Link href="/contatti" className="hover:text-white">
                    Dove siamo
                  </Link>
                </li>
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
                  name="newsletter"
                  aria-label="Email per newsletter"
                  placeholder="La tua email"
                  className="w-full rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs text-white placeholder:text-white/60 focus:border-white/60 focus:outline-none"
                />
                <button className="rounded-full bg-[#f3e6cf] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b2f22] transition hover:bg-white">
                  Iscriviti
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                aria-label="X"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition hover:border-white hover:text-white"
              >
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M15.466 2.5H17.88l-5.27 6.026 6.19 8.974H13.2l-4.386-6.26-5.47 6.26H1l5.62-6.43L.67 2.5h5.75l3.97 5.64L15.466 2.5Zm-.82 13.6h1.34L6.97 3.82H5.55l9.096 12.28Z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/kintsugi.messina/"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition hover:border-white hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.8a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Zm6.1-7.9a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Zm-6.1-4A9.2 9.2 0 0 0 8.8 3c-1.6.1-2.7.3-3.7.7a4.8 4.8 0 0 0-1.7 1.1 4.8 4.8 0 0 0-1.1 1.7c-.4 1-.6 2.1-.7 3.7a35 35 0 0 0 0 6.2c.1 1.6.3 2.7.7 3.7a4.8 4.8 0 0 0 1.1 1.7 4.8 4.8 0 0 0 1.7 1.1c1 .4 2.1.6 3.7.7a35 35 0 0 0 6.2 0c1.6-.1 2.7-.3 3.7-.7a4.8 4.8 0 0 0 1.7-1.1 4.8 4.8 0 0 0 1.1-1.7c.4-1 .6-2.1.7-3.7a35 35 0 0 0 0-6.2c-.1-1.6-.3-2.7-.7-3.7a4.8 4.8 0 0 0-1.1-1.7 4.8 4.8 0 0 0-1.7-1.1c-1-.4-2.1-.6-3.7-.7A9.2 9.2 0 0 0 12 3.2Zm0-1.6c1.8 0 3.1 0 4.5.1 1.4.1 2.4.3 3.2.6.9.3 1.6.8 2.3 1.4.6.7 1.1 1.4 1.4 2.3.3.8.5 1.8.6 3.2.1 1.4.1 2.7.1 4.5s0 3.1-.1 4.5c-.1 1.4-.3 2.4-.6 3.2-.3.9-.8 1.6-1.4 2.3-.7.6-1.4 1.1-2.3 1.4-.8.3-1.8.5-3.2.6-1.4.1-2.7.1-4.5.1s-3.1 0-4.5-.1c-1.4-.1-2.4-.3-3.2-.6-.9-.3-1.6-.8-2.3-1.4a6.4 6.4 0 0 1-1.4-2.3c-.3-.8-.5-1.8-.6-3.2-.1-1.4-.1-2.7-.1-4.5s0-3.1.1-4.5c.1-1.4.3-2.4.6-3.2.3-.9.8-1.6 1.4-2.3.7-.6 1.4-1.1 2.3-1.4.8-.3 1.8-.5 3.2-.6 1.4-.1 2.7-.1 4.5-.1Z" />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition hover:border-white hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M13.6 8.9V7.2c0-.8.5-1 1.1-1h1.7V3.1h-2.4c-2.7 0-3.6 1.6-3.6 3.6v2.2H8.7v3.2h1.7v8.9h3.2v-8.9h2.4l.5-3.2h-2.9Z" />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition hover:border-white hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M19.7 7.3a2.7 2.7 0 0 0-1.9-2c-1.7-.4-5.8-.4-5.8-.4s-4.1 0-5.8.4a2.7 2.7 0 0 0-1.9 2A28.6 28.6 0 0 0 4 12a28.6 28.6 0 0 0 .3 4.7 2.7 2.7 0 0 0 1.9 2c1.7.4 5.8.4 5.8.4s4.1 0 5.8-.4a2.7 2.7 0 0 0 1.9-2A28.6 28.6 0 0 0 20 12a28.6 28.6 0 0 0-.3-4.7Zm-9.1 7.3V9.4L15.7 12l-5.1 2.6Z" />
                </svg>
              </Link>
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
