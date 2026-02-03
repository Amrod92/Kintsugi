import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";

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
    speakers: [],
    attendeesCount: 45,
  },
];

interface EventPageProps {
  params: Promise<{
    id: string;
  }>;
}

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

export default async function EventDetailPage({ params }: EventPageProps) {
  const { id } = await params;

  const eventId = parseInt(id);

  const event = EVENTS_DATA.find((e) => e.id === eventId);

  if (!event) {
    notFound();
  }

  return (
    <div className="bg-[#f7f4ee] text-[#3b2f22] min-h-screen">
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-14 lg:pt-16 lg:pb-20">
        <Link
          href="/eventi"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f] transition hover:text-[#886b44]"
        >
          ← Torna agli eventi
        </Link>

        <div className="mt-6 overflow-hidden rounded-[32px] border border-white/80 bg-white/80 shadow-2xl shadow-[#cbb896]/40">
          <div className="relative h-64 w-full md:h-80">
            <img
              src={event.image}
              alt={event.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute left-6 top-6 rounded-full bg-[#9b7b4f] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              In arrivo
            </div>
          </div>

          <div className="grid gap-8 p-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="font-seasons text-3xl font-bold text-[#3b2f22] sm:text-4xl">
                {event.title}
              </h1>
              <p className="mt-4 text-base text-[#5b4b3a] sm:text-lg">
                {event.description}
              </p>

              <div className="mt-6 grid gap-3 text-sm text-[#5b4b3a] sm:grid-cols-2">
                <div className="rounded-2xl border border-[#f0e3cf] bg-[#fbf7f0] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                    Data e ora
                  </p>
                  <p className="mt-2 font-medium">
                    {formatItalianDate(event.date)}
                  </p>
                </div>
                <div className="rounded-2xl border border-[#f0e3cf] bg-[#fbf7f0] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                    Luogo
                  </p>
                  <p className="mt-2 font-medium">{event.location}</p>
                </div>
                <div className="rounded-2xl border border-[#f0e3cf] bg-[#fbf7f0] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                    Partecipanti
                  </p>
                  <p className="mt-2 font-medium">
                    {event.attendeesCount} persone
                  </p>
                </div>
                <div className="rounded-2xl border border-[#f0e3cf] bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                    Modalità
                  </p>
                  <p className="mt-2 font-medium">
                    {event.location.includes("Online") ? "Online" : "Presenza"}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-[#f0e3cf] bg-[#fbf7f0] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                  Iscrizione
                </p>
                <p className="mt-3 text-sm text-[#5b4b3a]">
                  Prenota il tuo posto e ricevi tutti i dettagli via email.
                </p>
                <Button className="mt-5 w-full rounded-full bg-[#9b7b4f] text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-[#886b44]">
                  Iscriviti ora
                </Button>
              </div>

              <div className="rounded-3xl border border-[#f0e3cf] bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                  Agenda
                </p>
                <ul className="mt-4 space-y-3 text-sm text-[#5b4b3a]">
                  <li className="flex items-center justify-between">
                    <span>Accoglienza e introduzione</span>
                    <span className="text-[#9b7b4f]">18:00</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Laboratorio esperienziale</span>
                    <span className="text-[#9b7b4f]">18:30</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Condivisione e chiusura</span>
                    <span className="text-[#9b7b4f]">20:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {event.speakers.length > 0 && (
            <div className="border-t border-[#ead9ba] bg-white/70 p-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                Relatori
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {event.speakers.map((speaker, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 rounded-2xl border border-[#f0e3cf] bg-[#fbf7f0] p-4"
                  >
                    <img
                      src={speaker.avatar}
                      alt={speaker.name}
                      className="h-12 w-12 rounded-full border border-white"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#3b2f22]">
                        {speaker.name}
                      </p>
                      <p className="text-xs text-[#6b5a44]">Relatore</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
