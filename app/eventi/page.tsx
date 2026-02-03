"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Simulazione di dati provenienti da un database o CMS (es. Sanity, JSON file)
// Nota: In un'app reale, questo verrebbe recuperato tramite una fetch API o useEffect.
const EVENTS_DATA = [
  {
    id: 1,
    title: "Workshop: L'Arte del Kintsugi",
    description:
      "Un'esperienza immersiva per imparare l'antica arte giapponese di riparare la ceramica con oro. Scopri come trasformare le crepe in punti di forza.",
    date: "2026-03-12T18:00:00",
    location: "Laboratorio Kintsugi, Messina",
    image:
      "https://images.unsplash.com/photo-1628151016388-a6a7a5e3db66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
    type: "presenza",
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
    date: "2026-03-26T10:00:00",
    location: "Online (Zoom)",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
    type: "online",
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
    date: "2026-04-08T19:30:00",
    location: "Centro Culturale, Messina",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
    type: "presenza",
    speakers: [], // Nessun relatore specifico
    attendeesCount: 45,
  },
];

// Funzione helper per formattare le date in italiano
// Nota: Per progetti più complessi si consiglia una libreria come 'date-fns' o 'moment'
const formatItalianDate = (dateString: string) => {
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
  const [activeFilter, setActiveFilter] = useState<"tutti" | "presenza" | "online">(
    "tutti"
  );
  const [isFading, setIsFading] = useState(false);

  const filteredEvents =
    activeFilter === "tutti"
      ? EVENTS_DATA
      : EVENTS_DATA.filter((event) => event.type === activeFilter);

  useEffect(() => {
    if (!isFading) return;
    const timeout = window.setTimeout(() => {
      setIsFading(false);
    }, 200);
    return () => window.clearTimeout(timeout);
  }, [isFading]);

  const onFilterClick = (filter: "tutti" | "presenza" | "online") => {
    if (filter === activeFilter) return;
    setIsFading(true);
    window.setTimeout(() => {
      setActiveFilter(filter);
    }, 150);
  };

  return (
    <div className="bg-[#f7f4ee] text-[#3b2f22]">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-10 lg:pt-16 lg:pb-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                Calendario
              </p>
              <h2 className="font-seasons mt-4 text-3xl text-[#3b2f22] sm:text-4xl">
                Prossimi appuntamenti
              </h2>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => onFilterClick("tutti")}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  activeFilter === "tutti"
                    ? "border-[#9b7b4f] bg-[#9b7b4f] text-white"
                    : "border-[#cbb896] bg-white text-[#5b4b3a] hover:bg-[#f7f4ee]"
                }`}
              >
                Tutti
              </button>
              <button
                type="button"
                onClick={() => onFilterClick("presenza")}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  activeFilter === "presenza"
                    ? "border-[#9b7b4f] bg-[#9b7b4f] text-white"
                    : "border-[#f0e3cf] bg-[#fbf7f0] text-[#5b4b3a] hover:bg-white"
                }`}
              >
                Presenza
              </button>
              <button
                type="button"
                onClick={() => onFilterClick("online")}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  activeFilter === "online"
                    ? "border-[#9b7b4f] bg-[#9b7b4f] text-white"
                    : "border-[#f0e3cf] bg-[#fbf7f0] text-[#5b4b3a] hover:bg-white"
                }`}
              >
                Online
              </button>
            </div>
          </div>

          <div
            className={`mt-10 grid gap-6 lg:grid-cols-3 transition-opacity duration-300 ${
              isFading ? "opacity-40" : "opacity-100"
            }`}
          >
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#f0e3cf] bg-[#fbf7f0] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-[#9b7b4f] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    In arrivo
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs text-[#9b7b4f]">
                    <span>{formatItalianDate(event.date)}</span>
                    <span>·</span>
                    <span>{event.location}</span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-[#3b2f22]">
                    {event.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#5b4b3a] line-clamp-3">
                    {event.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#ead9ba] pt-4">
                    <div className="flex -space-x-2">
                      {event.speakers.length > 0 ? (
                        event.speakers.map((speaker, index) => (
                          <img
                            key={index}
                            className="h-8 w-8 rounded-full border-2 border-[#fbf7f0]"
                            src={speaker.avatar}
                            alt={speaker.name}
                            title={`Relatore: ${speaker.name}`}
                          />
                        ))
                      ) : (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#fbf7f0] bg-[#f3e6cf] text-[10px] font-semibold text-[#9b7b4f]">
                          Org
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-3 text-xs text-[#6b5a44]">
                      <span>{event.attendeesCount} partecipanti</span>
                      <Link
                        href={`/eventi/${event.id}`}
                        className="font-semibold uppercase tracking-[0.2em] text-[#9b7b4f] transition hover:text-[#886b44]"
                      >
                        Dettagli
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#6b5a44] text-lg">
                Al momento non ci sono eventi in programma. Torna presto!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
