import Link from "next/link";
export default function ChiSiamoPage() {
  return (
    <div className="bg-[#f7f4ee] text-[#3b2f22]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(219,177,108,0.25),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(240,220,185,0.6),transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                Chi siamo
              </p>
              <h1 className="font-seasons mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                Un collettivo che trasforma le crepe in bellezza condivisa.
              </h1>
              <p className="mt-5 max-w-xl text-base text-[#5b4b3a] sm:text-lg">
                Kintsugi è un’associazione nonprofit che unisce arte, cura e
                crescita personale. Creiamo spazi di ascolto e percorsi
                esperienziali per aziende, scuole e comunità, per aiutare le
                persone a trovare forza nelle proprie fragilità.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-sm">
                  <p className="text-2xl font-semibold text-[#9b7b4f]">2019</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#6b5a44]">
                    Fondazione
                  </p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-sm">
                  <p className="text-2xl font-semibold text-[#9b7b4f]">40+</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#6b5a44]">
                    Eventi attivi
                  </p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-sm">
                  <p className="text-2xl font-semibold text-[#9b7b4f]">250+</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#6b5a44]">
                    Partecipanti
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[32px] border border-white/80 bg-white/70 p-6 shadow-2xl shadow-[#cbb896]/40">
              <div className="rounded-3xl bg-[#f7f0e3] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                  Manifesto
                </p>
                <p className="mt-4 text-sm text-[#5b4b3a]">
                  Ogni frattura è una storia, ogni riparazione un atto di cura.
                  Lavoriamo per creare connessioni autentiche e trasformare le
                  cicatrici in un linguaggio condiviso.
                </p>
              </div>
              <div className="mt-6 grid gap-4 text-sm text-[#5b4b3a]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#9b7b4f]">
                    ✦
                  </span>
                  <span>Progetti culturali ad alto impatto sociale</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#9b7b4f]">
                    ✦
                  </span>
                  <span>Laboratori esperienziali e percorsi formativi</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#9b7b4f]">
                    ✦
                  </span>
                  <span>Comunità di pratiche, ascolto e resilienza</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="rounded-[32px] border border-[#f0e3cf] bg-[#fbf7f0] p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                La nostra storia
              </p>
              <h2 className="font-seasons mt-4 text-3xl text-[#3b2f22] sm:text-4xl">
                Da un laboratorio intimo a una comunità viva.
              </h2>
            </div>
            <div className="space-y-5 text-sm text-[#5b4b3a]">
              <p>
                Kintsugi nasce nel 2019 a Milano da un piccolo gruppo di
                facilitatori, artigiani e professionisti della cura. Tutto è
                iniziato con un laboratorio serale in cui, riparando ceramiche
                rotte con l'oro, abbiamo scoperto quanto fosse potente
                condividere fragilità e resilienza.
              </p>
              <p>
                Da quel primo incontro, l’associazione è cresciuta grazie a
                scuole, aziende e realtà territoriali che hanno scelto di
                trasformare i propri momenti di crisi in percorsi di
                consapevolezza. Oggi Kintsugi propone laboratori, eventi e
                progetti culturali che uniscono arte, ascolto e impatto sociale.
              </p>
              <p>
                Continuiamo a coltivare la stessa intenzione: creare spazi in
                cui le persone possano sentirsi viste, sostenute e ispirate a
                raccontare la propria storia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              {
                title: "Visione",
                text: "Un mondo in cui le fragilità diventano fonte di forza e bellezza condivisa.",
              },
              {
                title: "Missione",
                text: "Creare esperienze che valorizzano l’imperfezione, favorendo inclusione e crescita.",
              },
              {
                title: "Metodo",
                text: "Laboratori, storytelling e percorsi di cura che uniscono arte e consapevolezza.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#f0e3cf] bg-[#fbf7f0] p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                  {item.title}
                </p>
                <p className="mt-4 text-sm text-[#5b4b3a]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ee]">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                Il team
              </p>
              <h2 className="font-seasons mt-4 text-3xl text-[#3b2f22] sm:text-4xl">
                Persone che trasformano l’imperfezione in valore
              </h2>
            </div>
            <Link
              href="/contatti"
              className="inline-flex w-fit items-center justify-center rounded-full border border-[#cbb896] bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5b4b3a] transition hover:bg-white"
            >
              Unisciti a noi
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                name: "Giulia R.",
                role: "Direzione artistica",
                bio: "Curatrice di percorsi culturali e laboratori esperienziali.",
              },
              {
                name: "Marco L.",
                role: "Community & formazione",
                bio: "Facilitatore di gruppi e percorsi di crescita personale.",
              },
              {
                name: "Sara V.",
                role: "Impatto sociale",
                bio: "Coordina progetti di inclusione e partnership territoriali.",
              },
            ].map((person) => (
              <div
                key={person.name}
                className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3e6cf] text-sm font-semibold text-[#9b7b4f]">
                    {person.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-[#3b2f22]">
                      {person.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#9b7b4f]">
                      {person.role}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-[#5b4b3a]">{person.bio}</p>
                <div className="mt-4 flex gap-3 text-xs text-[#9b7b4f]">
                  <span>LinkedIn</span>
                  <span>Instagram</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <div className="rounded-[32px] border border-[#f0e3cf] bg-[#fbf7f0] p-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
              Collaborazioni
            </p>
            <h2 className="font-seasons mt-4 text-3xl text-[#3b2f22] sm:text-4xl">
              Creiamo insieme nuovi percorsi di resilienza
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-[#5b4b3a]">
              Se vuoi portare il Kintsugi nella tua organizzazione o costruire
              un progetto con noi, siamo pronti ad ascoltarti.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Link
                href="/contatti"
                className="rounded-full bg-[#9b7b4f] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#886b44]"
              >
                Contattaci
              </Link>
              <Link
                href="/eventi"
                className="rounded-full border border-[#cbb896] bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#5b4b3a] transition hover:bg-[#f7f4ee]"
              >
                Vedi eventi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
