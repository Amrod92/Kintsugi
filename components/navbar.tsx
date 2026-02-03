"use client";

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
    <div className="mx-auto w-full max-w-5xl px-4">
      <div className="m-5 flex items-center justify-between rounded-full bg-white/90 px-6 py-3 shadow-sm ring-1 ring-black/5 backdrop-blur md:py-4">
        {/* Logo */}
        <Link
          href="/"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/70 rounded-full"
        >
          <span className="inline-block text-xl font-extrabold tracking-[0.18em] uppercase bg-linear-to-r from-yellow-600 via-yellow-200 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">
            Kintsugi
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 font-normal text-gray-900">
          <Link className="hover:text-yellow-700 transition" href="/chi-siamo">
            Chi siamo
          </Link>
          <Link className="hover:text-yellow-700 transition" href="/storie">
            Storie
          </Link>
          <Link className="hover:text-yellow-700 transition" href="/eventi">
            Eventi
          </Link>
          <Link className="hover:text-yellow-700 transition" href="/contatti">
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
              text-sm font-semibold
              text-yellow-100
              shadow-md
              transition-all duration-300
              hover:scale-[1.02]
              hover:shadow-lg
              focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/70
              bg-[url('/kintsugi-marble.jpg')]
              bg-cover bg-center
            "
          >
            {/* Dark polish overlay */}
            <span className="absolute inset-0 bg-black/35" />
            {/* Gold highlight sheen */}
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-yellow-300/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 tracking-wide">Parliamone</span>
          </Link>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Apri меню"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-gray-700 hover:text-yellow-700 hover:bg-black/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/70"
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
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className="absolute right-4 top-4 w-[min(92vw,380px)] rounded-2xl bg-white p-5 shadow-xl ring-1 ring-black/10"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Chiudi menu"
                className="rounded-full p-2 text-gray-700 hover:text-yellow-700 hover:bg-black/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/70"
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

            <div className="mt-4 flex flex-col gap-3 text-gray-900">
              <Link
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 hover:bg-black/5 transition"
                href="/chi-siamo"
              >
                Chi siamo
              </Link>
              <Link
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 hover:bg-black/5 transition"
                href="/storie"
              >
                Storie
              </Link>
              <Link
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 hover:bg-black/5 transition"
                href="/eventi"
              >
                Eventi
              </Link>
              <Link
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 hover:bg-black/5 transition"
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
                  text-sm font-semibold text-yellow-100
                  shadow-md transition
                  bg-[url('/kintsugi-marble.jpg')] bg-cover bg-center
                "
              >
                <span className="absolute inset-0 bg-black/35" />
                <span className="relative z-10">Parliamone</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
