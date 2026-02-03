export type EventType = "presenza" | "online";

export type EventSpeaker = {
  name: string;
  avatar: string;
};

export type EventItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  type: EventType;
  speakers: EventSpeaker[];
  attendeesCount: number;
};

export const EVENTS_DATA: EventItem[] = [
  {
    id: 1,
    title: "Workshop: L'Arte del Kintsugi",
    description:
      "Un'esperienza immersiva per imparare l'antica arte giapponese di riparare la ceramica con oro. Scopri come trasformare le crepe in punti di forza.",
    date: "2026-03-12T18:00:00",
    location: "Laboratorio Kintsugi, Messina",
    image:
      "https://images.unsplash.com/photo-1628151016388-a6a7a5e3db66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    type: "presenza",
    speakers: [],
    attendeesCount: 45,
  },
];

export const formatItalianDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};
