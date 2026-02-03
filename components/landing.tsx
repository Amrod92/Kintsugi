import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-7xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Benvenuti a Kintsugi
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Abbraccia la bellezza dell'imperfezione con Kintsugi, l'arte di
              riparare la ceramica rotta con l'oro.
            </p>
            <Link
              href="/get-start  ed"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Inizia
            </Link>
            <Link
              href="/learn-more"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Scopri di piu
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="/kintsugi-hero.png"
              alt="Kintsugi Illustration"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
          <div className="max-w-3xl mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">
              Scopri la filosofia del Kintsugi
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Il Kintsugi e piu di una tecnica di riparazione; e una filosofia
              che ci insegna ad abbracciare i nostri difetti e a vedere la
              bellezza nell'imperfezione. Scopri come questa antica arte puo
              ispirarti a trovare forza e resilienza nella tua vita.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                Storia del Kintsugi
              </h3>
              <p className="text-gray-500 dark:text-gray-300">
                Esplora la ricca storia del Kintsugi, dalle sue origini in
                Giappone alla sua influenza sull'arte e sul design moderni.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                Tecniche e materiali
              </h3>
              <p className="text-gray-500 dark:text-gray-300">
                Scopri le tecniche tradizionali e i materiali usati nel
                Kintsugi, tra cui lacca, polvere d'oro e altro.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                Applicazioni moderne
              </h3>
              <p className="text-gray-500 dark:text-gray-300">
                Scopri come il Kintsugi viene applicato nell'arte contemporanea,
                nel design e persino nelle pratiche di crescita personale.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
          <div className="max-w-3xl mx-auto text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">
              Cosa dicono i nostri utenti
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Ascolta chi ha abbracciato la filosofia del Kintsugi nella propria
              vita.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow p-6">
              <p className="text-gray-500 dark:text-gray-300 mb-4">
                &quot;Il Kintsugi mi ha insegnato ad abbracciare le mie
                imperfezioni e a vedere la bellezza nel mio percorso. E un
                potente promemoria che siamo tutti lavori in corso.&quot;
              </p>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                - Alex M.
              </h3>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow p-6">
              <p className="text-gray-500 dark:text-gray-300 mb-4">
                &quot;L'arte del Kintsugi mi ha ispirato ad affrontare le sfide
                con una nuova prospettiva. Si tratta di trovare forza nelle
                difficolta.&quot;
              </p>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                - Jamie L.
              </h3>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow p-6">
              <p className="text-gray-500 dark:text-gray-300 mb-4">
                &quot;Il Kintsugi e piu di una forma d'arte; e uno stile di
                vita. Mi ha aiutato ad apprezzare la bellezza
                dell'imperfezione in me e negli altri.&quot;
              </p>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                - Taylor S.
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl px-4 py-8 mx-auto lg:py-16 lg:px-6 text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">
            Resta sintonizzato per altro
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400 mb-6">
            Stiamo lavorando costantemente per offrirti nuovi approfondimenti e
            storie sul Kintsugi. Resta connesso e sii il primo a sapere di nuovi
            contenuti e aggiornamenti.
          </p>
          <Link
            href="/subscribe"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Iscriviti ora
          </Link>
        </div>
      </section>
    </div>
  );
}
