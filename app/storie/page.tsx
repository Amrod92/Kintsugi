export default function StoriePage() {
  return (
    <div className="text-[#3b2f22]">
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                Storie
              </p>
              <h1 className="font-seasons mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                Storie di trasformazione e resilienza.
              </h1>
              <p className="mt-5 max-w-xl text-base text-[#5b4b3a] sm:text-lg">
                Ogni storia nasce da una crepa: un momento di fragilità, un
                passaggio da attraversare, un cambiamento da accogliere.
                Raccogliamo voci e percorsi reali che mostrano come la
                riparazione possa diventare bellezza condivisa.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b5a44]">
                  Comunità
                </span>
                <span className="rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b5a44]">
                  Impatto
                </span>
                <span className="rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b5a44]">
                  Cura
                </span>
              </div>
            </div>
            <div className="rounded-[32px] border border-white/80 bg-white/70 p-6 shadow-2xl shadow-[#cbb896]/40">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                In evidenza
              </p>
              <h2 className="font-seasons mt-4 text-2xl text-[#3b2f22]">
                Un laboratorio che ha cambiato prospettiva
              </h2>
              <p className="mt-4 text-sm text-[#5b4b3a]">
                Durante un percorso con una scuola superiore, studenti e docenti
                hanno trasformato un conflitto in occasione di dialogo. La
                riparazione delle ceramiche ha aperto uno spazio nuovo di
                ascolto e collaborazione.
              </p>
              <div className="mt-4 flex items-center gap-3 text-xs text-[#9b7b4f]">
                <span>Scuola</span>
                <span>·</span>
                <span>Messina</span>
                <span>·</span>
                <span>2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                Racconti
              </p>
              <h2 className="font-seasons mt-4 text-3xl text-[#3b2f22] sm:text-4xl">
                Percorsi raccontati da chi li ha vissuti
              </h2>
            </div>
            <div className="flex gap-3">
              <button className="rounded-full border border-[#cbb896] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5b4b3a] transition hover:bg-[#f7f4ee]">
                Tutti
              </button>
              <button className="rounded-full border border-[#f0e3cf] bg-[#fbf7f0] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5b4b3a] transition hover:bg-white">
                Comunità
              </button>
              <button className="rounded-full border border-[#f0e3cf] bg-[#fbf7f0] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5b4b3a] transition hover:bg-white">
                Aziende
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Ricomporre un team dopo la crisi",
                context: "Impresa sociale · Messina",
                text: "Un team in difficoltà ha ritrovato fiducia attraverso un laboratorio di riparazione condivisa.",
              },
              {
                title: "La ceramica come rito di ascolto",
                context: "Centro culturale · Messina",
                text: "Una comunità multiculturale ha trovato nuovi linguaggi per raccontare le proprie storie.",
              },
              {
                title: "Un ponte tra generazioni",
                context: "Scuola · Messina",
                text: "Studenti e genitori hanno partecipato insieme a un percorso di cura e memoria.",
              },
              {
                title: "Riparare per ricominciare",
                context: "Cooperativa · Messina",
                text: "Dopo una ristrutturazione complessa, il gruppo ha riscritto il proprio manifesto.",
              },
              {
                title: "La leadership che ascolta",
                context: "Azienda · Messina",
                text: "Un team dirigenziale ha imparato a valorizzare l'imperfezione come risorsa.",
              },
              {
                title: "Intimità e creatività",
                context: "Atelier · Messina",
                text: "Un laboratorio di storytelling ha trasformato la fragilità in nuove visioni.",
              },
            ].map((story) => (
              <article
                key={story.title}
                className="rounded-3xl border border-[#f0e3cf] bg-[#fbf7f0] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                  {story.context}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-[#3b2f22]">
                  {story.title}
                </h3>
                <p className="mt-3 text-sm text-[#5b4b3a]">{story.text}</p>
                <button className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                  Leggi storia
                  <span aria-hidden="true">→</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-transparent">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                Testimonianze
              </p>
              <h2 className="font-seasons mt-4 text-3xl text-[#3b2f22] sm:text-4xl">
                “Abbiamo trovato un nuovo modo di ascoltarci.”
              </h2>
              <p className="mt-4 text-sm text-[#5b4b3a]">
                Ogni percorso diventa un racconto collettivo. Condividiamo
                frammenti di chi ha vissuto il Kintsugi come pratica di cura.
              </p>
            </div>
            <div className="rounded-[32px] border border-white/70 bg-white/70 p-6 shadow-lg">
              <p className="text-sm text-[#5b4b3a]">
                “Il laboratorio ci ha permesso di guardare alle fratture del
                gruppo con occhi nuovi. Abbiamo imparato a valorizzare ciò che
                sembrava una debolezza.”
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                Coordinatrice · Progetto Scuole
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
