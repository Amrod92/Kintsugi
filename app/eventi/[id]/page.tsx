import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

  console.log("Processing ID:", id);

  const eventId = parseInt(id);

  const event = EVENTS_DATA.find((e) => e.id === eventId);

  if (!event) {
    console.log("Event not found for ID:", eventId);
    notFound();
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <section className="py-12 px-6 container mx-auto max-w-4xl">
        <Link href="/eventi" className="inline-block mb-6">
          <Button variant="ghost">← Torna agli eventi</Button>
        </Link>

        <Card className="overflow-hidden dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-xl">
          <div className="relative h-64 md:h-80 w-full">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">
                {event.title}
              </CardTitle>
              <Button className="w-full md:w-auto bg-yellow-600 hover:bg-yellow-700">
                Iscriviti ora
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-gray-600 dark:text-gray-300 mt-4">
              <div className="flex items-center gap-2">
                <span className="font-medium">
                  {formatItalianDate(event.date)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{event.attendeesCount} Partecipanti</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Descrizione
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {event.description}
              </p>
            </div>

            {event.speakers.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Relatori
                </h3>
                <div className="flex gap-4">
                  {event.speakers.map((speaker, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"
                    >
                      <img
                        src={speaker.avatar}
                        alt={speaker.name}
                        className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-600"
                      />
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {speaker.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
