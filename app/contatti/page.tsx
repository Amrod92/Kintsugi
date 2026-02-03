export default function ContattiPage() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            {" "}
            Contatti
          </h1>

          {/* TODO: Aggiungere una mappa interattiva qui e contatto principale di Kintsugi. */}

          <div className="mt-8 space-y-8">
            <article className="p-6 border border-gray-200 rounded-lg dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                Indirizzo
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Via Esempio 123, 00100 Roma, Italia
              </p>
            </article>

            <article className="p-6 border border-gray-200 rounded-lg dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                Telefono
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                +39 06 12345678
              </p>
            </article>
            <article className="p-6 border border-gray-200 rounded-lg dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                Email
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                info@kintsugi.it
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
