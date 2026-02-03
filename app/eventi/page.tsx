export default function EventiPage() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            Eventi
          </h1>

          {/* TODO: Cercare best practices su come organizzare gli eventi e mostrarli su questa pagina.
          Ogni evento deve avere il:
                - Titolo
                - Descrizione
                - Data
                - Luogo (Mappa opzionale)
                - Immagine (opzionale)
                - Link per maggiori informazioni o registrazione (opzionale)
                - Elenco degli ospiti o relatori (opzionale)
                - Persone che si sono registrate (opzionale)
          Si potrebbe considerare l&apos;uso di una libreria per la gestione delle date per formattare le date in modo leggibile.
          Si potrebbe anche considerare l&apos;uso di un database o di un file JSON per memorizzare gli eventi e poi recuperarli dinamicamente o Sanity CMS.
          */}

          <div className="mt-8 space-y-8">
            <article className="p-6 border border-gray-200 rounded-lg dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                Evento 1
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Descrizione dell&apos;evento 1. Dettagli sull&apos;evento, data,
                luogo, ecc.
              </p>
            </article>

            <article className="p-6 border border-gray-200 rounded-lg dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                Evento 2
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Descrizione dell&apos;evento 2. Dettagli sull&apos;evento, data,
                luogo, ecc.
              </p>
            </article>

            <article className="p-6 border border-gray-200 rounded-lg dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                Evento 3
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Descrizione dellv&apos;evento 3. Dettagli sull&apos;evento,
                data, luogo, ecc.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
