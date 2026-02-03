import React from "react";

// Simulazione di dati provenienti da un database o CMS (es. Sanity, JSON file)
// Nota: In un'app reale, questo verrebbe recuperato tramite una fetch API o useEffect.
const EVENTS_DATA = [
  {
    id: 1,
    title: "Workshop: L'Arte del Kintsugi",
    description:
      "Un'esperienza immersiva per imparare l'antica arte giapponese di riparare la ceramica con oro. Scopri come trasformare le crepe in punti di forza.",
    date: "2023-11-15T18:00:00",
    location: "Laboratorio Kintsugi, Milano",
    image:
      "https://images.unsplash.com/photo-1628151016388-a6a7a5e3db66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
    speakers: [
      { name: "Mario Rossi", avatar: "https://i.pravatar.cc/150?u=1" },
      { name: "Giulia Bianchi", avatar: "https://i.pravatar.cc/150?u=2" },
    ],
    attendeesCount: 124,
  },
  {
    id: 2,
    title: "Resilienza Aziendale: Webinar",
    description:
      "Parleremo di come le aziende possono emergere più forti dalle crisi, adottando la filosofia del Kintsugi nel management e nella cultura aziendale.",
    date: "2023-11-22T10:00:00",
    location: "Online (Zoom)",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
    speakers: [
      { name: "Elena Verdi", avatar: "https://i.pravatar.cc/150?u=3" },
    ],
    attendeesCount: 350,
  },
  {
    id: 3,
    title: "Serata di Networking e Cerimonia del Tè",
    description:
      "Un evento informale per conoscere la nostra community. Includeremo una tradizionale cerimonia del tè seguita da un momento di networking.",
    date: "2023-12-05T19:30:00",
    location: "Centro Culturale, Roma",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
    speakers: [], // Nessun relatore specifico
    attendeesCount: 45,
  },
];

// Funzione helper per formattare le date in italiano
// Nota: Per progetti più complessi si consiglia una libreria come 'date-fns' o 'moment'
const formatItalianDate = (dateString: Date) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

export default function EventiPage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header Pagina */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white capitalize tracking-tight mb-4">
              I Nostri Eventi
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Partecipa ai nostri workshop, conferenze e incontri per scoprire
              il potere della resilienza.
            </p>
          </div>

          {/* Griglia Eventi */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENTS_DATA.map((event) => (
              <article
                key={event.id}
                className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
              >
                {/* Immagine Evento */}
                <div className="relative h-48 overflow-hidden group">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    In arrivo
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  {/* Data e Luogo */}
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <time className="font-medium">
                      {formatItalianDate(event.date as unknown as Date)}
                    </time>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {event.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
                    {event.description}
                  </p>

                  {/* Luogo con icona */}
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1.5 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {event.location}
                  </div>

                  {/* Footer Card: Speaker, Partecipanti e Azione */}
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between mt-auto">
                    <div className="flex -space-x-2">
                      {event.speakers.length > 0 ? (
                        // Mostra avatar speaker se esistono
                        event.speakers.map((speaker, index) => (
                          <img
                            key={index}
                            className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                            src={speaker.avatar}
                            alt={speaker.name}
                            title={`Relatore: ${speaker.name}`}
                          />
                        ))
                      ) : (
                        // Se non ci sono speaker, mostra icona generica
                        <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-xs text-gray-500">
                          Org
                        </div>
                      )}
                    </div>

                    <div className="flex items-center space-x-4">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        {event.attendeesCount}
                      </span>

                      <a
                        href={event.link}
                        className="text-sm font-semibold text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-300 transition"
                      >
                        Dettagli &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Messaggio se non ci fossero eventi (Opzionale) */}
          {EVENTS_DATA.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Al momento non ci sono eventi in programma. Torna presto!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
