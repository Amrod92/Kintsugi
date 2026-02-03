"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      <div className="m-5 flex items-center justify-between rounded-full border border-white/70 bg-white/80 px-5 py-3 shadow-[0_20px_50px_-30px_rgba(59,47,34,0.6)] backdrop-blur md:px-7 md:py-4">
        {/* Logo */}
        <Link
          href="/"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a572] rounded-full"
        >
          <span className="inline-flex items-center gap-3">
            <Image
              src="/kintsugi-logo.png"
              alt="Kintsugi"
              className="h-9 w-9 rounded-full border border-[#ead9ba] bg-white/80 p-1"
              width={36}
              height={36}
            />
            <span className="font-seasons text-2xl font-bold italic tracking-[0.1em] text-[#3b2f22]">
              Kintsugi
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#5b4b3a]">
          <Link
            className="rounded-full px-4 py-2 transition hover:bg-[#f3e6cf]"
            href="/chi-siamo"
          >
            Chi siamo
          </Link>
          <Link
            className="rounded-full px-4 py-2 transition hover:bg-[#f3e6cf]"
            href="/storie"
          >
            Storie
          </Link>
          <Link
            className="rounded-full px-4 py-2 transition hover:bg-[#f3e6cf]"
            href="/eventi"
          >
            Eventi
          </Link>
          <Link
            className="rounded-full px-4 py-2 transition hover:bg-[#f3e6cf]"
            href="/contatti"
          >
            Contatti
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <Link
            href="/contatti"
            className="
              hidden md:inline-flex
              relative overflow-hidden
              px-6 py-2.5
              rounded-full
              text-xs font-semibold uppercase tracking-[0.2em]
              text-white
              shadow-md
              transition-all duration-300
              hover:scale-[1.02]
              hover:shadow-lg
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a572]
              bg-[#9b7b4f]
            "
          >
            {/* Gold highlight sheen */}
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Parliamone</span>
          </Link>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Apri меню"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-[#5b4b3a] hover:text-[#3b2f22] hover:bg-[#f3e6cf] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a572]"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Chiudi меню"
            className="absolute inset-0 bg-[#3b2f22]/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className="absolute right-4 top-4 w-[min(92vw,380px)] rounded-3xl border border-white/70 bg-white/90 p-5 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5b4b3a]">
                Menu
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Chiudi menu"
                className="rounded-full p-2 text-[#5b4b3a] hover:text-[#3b2f22] hover:bg-[#f3e6cf] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a572]"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-4 flex flex-col gap-2 text-[#3b2f22]">
              <Link
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-2 text-sm font-semibold uppercase tracking-[0.12em] hover:bg-[#f3e6cf] transition"
                href="/chi-siamo"
              >
                Chi siamo
              </Link>
              <Link
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-2 text-sm font-semibold uppercase tracking-[0.12em] hover:bg-[#f3e6cf] transition"
                href="/storie"
              >
                Storie
              </Link>
              <Link
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-2 text-sm font-semibold uppercase tracking-[0.12em] hover:bg-[#f3e6cf] transition"
                href="/eventi"
              >
                Eventi
              </Link>
              <Link
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-2 text-sm font-semibold uppercase tracking-[0.12em] hover:bg-[#f3e6cf] transition"
                href="/contatti"
              >
                Contatti
              </Link>

              {/* Mobile CTA */}
              <Link
                onClick={() => setOpen(false)}
                href="/contatti"
                className="
                  mt-2 inline-flex justify-center
                  relative overflow-hidden
                  rounded-full px-6 py-2.5
                  text-xs font-semibold uppercase tracking-[0.2em] text-white
                  shadow-md transition
                  bg-[#9b7b4f]
                "
              >
                <span className="relative z-10">Parliamone</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
