import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="bg-[#f7f4ee] text-gray-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(219,177,108,0.25),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(240,220,185,0.6),transparent_40%)]" />
        <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-[#ead9ba]/60 blur-3xl" />
        <div className="absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-[#f3e6cf]/70 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#e4d6bc] bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f] shadow-sm">
              Filosofia • Arte • Comunità
            </div>
            <h1 className="font-seasons mt-6 text-4xl font-bold italic leading-tight text-[#3b2f22] sm:text-5xl lg:text-6xl">
              Benvenuti a Kintsugi
            </h1>
            <p className="mt-5 max-w-xl text-base text-[#5b4b3a] sm:text-lg">
              Abbraccia la bellezza dell'imperfezione con Kintsugi, l'arte di
              riparare la ceramica rotta con l'oro. Un invito a trasformare le
              crepe in storia, e la fragilità in forza.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center rounded-full bg-[#9b7b4f] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#9b7b4f]/30 transition hover:-translate-y-0.5 hover:bg-[#886b44]"
              >
                Inizia il percorso
              </Link>
              <Link
                href="/storie"
                className="inline-flex items-center justify-center rounded-full border border-[#cbb896] bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#5b4b3a] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Leggi le storie
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 text-left sm:max-w-md">
              <div className="rounded-2xl border border-white/60 bg-white/70 px-4 py-3 shadow-sm">
                <p className="text-2xl font-semibold text-[#9b7b4f]">12+</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#6b5a44]">
                  Laboratori
                </p>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/70 px-4 py-3 shadow-sm">
                <p className="text-2xl font-semibold text-[#9b7b4f]">40+</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#6b5a44]">
                  Storie
                </p>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/70 px-4 py-3 shadow-sm">
                <p className="text-2xl font-semibold text-[#9b7b4f]">250+</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#6b5a44]">
                  Partecipanti
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[32px] border border-white/80 bg-white/70 p-6 shadow-2xl shadow-[#cbb896]/40">
              <div className="flex items-center gap-4">
                <img
                  src="/kintsugi-logo.png"
                  alt="Kintsugi"
                  className="h-12 w-12"
                />
                <div>
                  <p className="font-seasons text-2xl italic text-[#3b2f22]">
                    Kintsugi
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8d7450]">
                    Arte della riparazione
                  </p>
                </div>
              </div>
              <div className="mt-6 rounded-2xl bg-[#f7f0e3] p-5">
                <p className="text-sm text-[#5b4b3a]">
                  “Ogni crepa racconta un viaggio. Kintsugi insegna a renderlo
                  visibile, prezioso, nostro.”
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                  Manifesto
                </p>
              </div>
              <div className="mt-6 grid gap-3 text-sm text-[#5b4b3a]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#9b7b4f]">
                    ✦
                  </span>
                  <span>Eventi e incontri dal vivo</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#9b7b4f]">
                    ✦
                  </span>
                  <span>Laboratori per aziende e scuole</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#9b7b4f]">
                    ✦
                  </span>
                  <span>Spazi di ascolto e crescita</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-3xl border border-white/70 bg-white/70 shadow-lg" />
            <div className="absolute -top-8 -right-6 h-16 w-16 rounded-full border border-white/70 bg-white/70 shadow-lg" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                Filosofia
              </p>
              <h2 className="font-seasons mt-4 text-3xl italic text-[#3b2f22] sm:text-4xl">
                Scopri la filosofia del Kintsugi
              </h2>
              <p className="mt-4 text-base text-[#5b4b3a] sm:text-lg">
                Il Kintsugi è più di una tecnica di riparazione; è una filosofia
                che ci insegna ad abbracciare i nostri difetti e a vedere la
                bellezza nell'imperfezione. Un linguaggio visivo che unisce
                storia, cura e resilienza.
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-[#6b5a44]">
                <span className="h-2 w-2 rounded-full bg-[#c4a371]" />
                <span>Tradizione giapponese, visione contemporanea</span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#f0e3cf] bg-[#fbf7f0] p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#3b2f22]">
                  Storia del Kintsugi
                </h3>
                <p className="mt-3 text-sm text-[#5b4b3a]">
                  Esplora le origini giapponesi e il suo influsso su arte e
                  design moderni.
                </p>
              </div>
              <div className="rounded-3xl border border-[#f0e3cf] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#3b2f22]">
                  Tecniche e materiali
                </h3>
                <p className="mt-3 text-sm text-[#5b4b3a]">
                  Lacca, polvere d'oro e pazienza: il rituale della riparazione.
                </p>
              </div>
              <div className="rounded-3xl border border-[#f0e3cf] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#3b2f22]">
                  Applicazioni moderne
                </h3>
                <p className="mt-3 text-sm text-[#5b4b3a]">
                  Dal benessere personale ai team creativi: un metodo per
                  crescere insieme.
                </p>
              </div>
              <div className="rounded-3xl border border-[#f0e3cf] bg-[#fbf7f0] p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#3b2f22]">
                  Comunità attiva
                </h3>
                <p className="mt-3 text-sm text-[#5b4b3a]">
                  Incontri, eventi e dialoghi per scoprire nuove prospettive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ee]">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                Percorso
              </p>
              <h2 className="font-seasons mt-4 text-3xl italic text-[#3b2f22] sm:text-4xl">
                Un metodo in tre passaggi
              </h2>
            </div>
            <Link
              href="/eventi"
              className="inline-flex w-fit items-center justify-center rounded-full border border-[#cbb896] bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5b4b3a] transition hover:bg-white"
            >
              Vedi i prossimi eventi
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[28px] border border-white/70 bg-white/70 p-6 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                01
              </p>
              <h3 className="mt-3 text-lg font-semibold text-[#3b2f22]">
                Osserva la frattura
              </h3>
              <p className="mt-3 text-sm text-[#5b4b3a]">
                Riconoscere ciò che si è rotto è il primo gesto di cura.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/70 bg-white/70 p-6 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                02
              </p>
              <h3 className="mt-3 text-lg font-semibold text-[#3b2f22]">
                Ricomponi con oro
              </h3>
              <p className="mt-3 text-sm text-[#5b4b3a]">
                Trasforma le cicatrici in linee preziose che raccontano il
                cambiamento.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/70 bg-white/70 p-6 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                03
              </p>
              <h3 className="mt-3 text-lg font-semibold text-[#3b2f22]">
                Condividi il risultato
              </h3>
              <p className="mt-3 text-sm text-[#5b4b3a]">
                La bellezza cresce quando la raccontiamo insieme.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
              Voci
            </p>
            <h2 className="font-seasons mt-4 text-3xl italic text-[#3b2f22] sm:text-4xl">
              Cosa dicono i nostri utenti
            </h2>
            <p className="mt-4 text-base text-[#5b4b3a] sm:text-lg">
              Esperienze reali di chi ha abbracciato la filosofia del Kintsugi.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-[#f0e3cf] bg-[#fbf7f0] p-6 shadow-sm">
              <p className="text-sm text-[#5b4b3a]">
                “Il Kintsugi mi ha insegnato ad abbracciare le mie imperfezioni
                e a vedere la bellezza nel mio percorso.”
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                Alex M.
              </p>
            </div>
            <div className="rounded-3xl border border-[#f0e3cf] bg-white p-6 shadow-sm">
              <p className="text-sm text-[#5b4b3a]">
                “L'arte del Kintsugi mi ha ispirato ad affrontare le sfide con
                una nuova prospettiva. Forza nella difficoltà.”
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                Jamie L.
              </p>
            </div>
            <div className="rounded-3xl border border-[#f0e3cf] bg-[#fbf7f0] p-6 shadow-sm">
              <p className="text-sm text-[#5b4b3a]">
                “Il Kintsugi è più di una forma d'arte; è uno stile di vita che
                aiuta a riconoscere il valore dell'imperfezione.”
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                Taylor S.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#3b2f22] text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f3e6cf]">
              Resta connesso
            </p>
            <h2 className="font-seasons mt-4 text-3xl italic text-white sm:text-4xl">
              Resta sintonizzato per altro
            </h2>
            <p className="mt-4 text-base text-[#f0e6d4] sm:text-lg">
              Approfondimenti, storie e laboratori: lasciaci il tuo contatto e
              sarai tra i primi a ricevere aggiornamenti.
            </p>
          </div>
          <div className="rounded-3xl bg-white/10 p-6 shadow-xl">
            <div className="grid gap-3">
              <input
                type="email"
                placeholder="La tua email"
                className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-white/40 focus:outline-none"
              />
              <button className="w-full rounded-full bg-[#f3e6cf] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b2f22] transition hover:bg-white">
                Iscriviti ora
              </button>
              <p className="text-xs text-white/70">
                Nessuno spam. Solo ispirazioni preziose.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
