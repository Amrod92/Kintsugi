"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { EVENTS_DATA, formatItalianDate, type EventType } from "@/lib/events";

export default function EventiPage() {
  type FilterType = "tutti" | EventType;
  const [activeFilter, setActiveFilter] = useState<FilterType>("tutti");
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

  const onFilterClick = (filter: FilterType) => {
    if (filter === activeFilter) return;
    setIsFading(true);
    window.setTimeout(() => {
      setActiveFilter(filter);
    }, 150);
  };

  return (
    <div className="page-bg text-[#3b2f22]">
      <section className="bg-transparent">
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-10 lg:pt-16 lg:pb-12">
          <div className="section-panel rounded-[32px] px-6 py-10 lg:px-10 lg:py-12">
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
                aria-pressed={activeFilter === "tutti"}
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
                aria-pressed={activeFilter === "presenza"}
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
                aria-pressed={activeFilter === "online"}
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
        </div>
      </section>
    </div>
  );
}
