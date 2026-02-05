export type StoryAuthor = {
  name: string;
  role: string;
  company: string;
  avatar: string;
};

export type StoryItem = {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  location: string;
  category: "Comunità" | "Aziende" | "Scuole";
  cover: string;
  author: StoryAuthor;
};

export const STORIES_DATA: StoryItem[] = [
  {
    id: "team-ripartenza",
    title: "Ricomporre un team dopo la crisi",
    excerpt:
      "Un laboratorio in azienda ha riaperto il dialogo e trasformato le fratture in nuove alleanze.",
    content: [
      "Quando il team ha attraversato una fase complessa, la comunicazione si era fatta fragile. Il laboratorio di Kintsugi ha creato uno spazio sicuro per riconoscere le crepe senza giudizio.",
      "Attraverso la riparazione delle ceramiche, le persone hanno imparato a dare valore alle cicatrici del percorso comune. Il gesto manuale ha reso visibile il cambiamento.",
      "Oggi il gruppo ha un nuovo patto di collaborazione e una routine di ascolto condiviso, con momenti periodici di check-in e restituzione.",
    ],
    date: "2025-10-12",
    location: "Messina",
    category: "Aziende",
    cover:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Elena L.",
      role: "HR Manager",
      company: "Impresa Sociale Aurora",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    },
  },
  {
    id: "ceramica-ascolto",
    title: "La ceramica come rito di ascolto",
    excerpt:
      "Un centro culturale ha trasformato le storie dei partecipanti in un archivio di resilienza.",
    content: [
      "Il centro culturale cercava un linguaggio comune per unire persone di provenienze diverse. Il Kintsugi ha offerto un rito semplice e potente.",
      "Le ceramiche riparate sono diventate un archivio visivo delle storie raccolte: ogni linea dorata raccontava un vissuto.",
      "Il progetto è culminato in una mostra aperta alla comunità, con letture e testimonianze condivise.",
    ],
    date: "2025-11-02",
    location: "Messina",
    category: "Comunità",
    cover:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Giulia C.",
      role: "Curatrice",
      company: "Spazio Cultura Faro",
      avatar:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
    },
  },
  {
    id: "ponte-generazioni",
    title: "Un ponte tra generazioni",
    excerpt:
      "Studenti e famiglie hanno riscoperto il valore della cura condivisa.",
    content: [
      "In una scuola superiore, un percorso intergenerazionale ha invitato studenti e genitori a lavorare insieme.",
      "Il gesto del riparare ha favorito un dialogo nuovo: le crepe sono diventate il punto di partenza per racconti familiari.",
      "Il progetto ha lasciato una collezione di oggetti riparati e un diario collettivo di storie.",
    ],
    date: "2025-12-05",
    location: "Messina",
    category: "Scuole",
    cover:
      "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Marco D.",
      role: "Docente",
      company: "Liceo Vittorini",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
  },
  {
    id: "ripartire-insieme",
    title: "Riparare per ricominciare",
    excerpt:
      "Una cooperativa ha riscritto il proprio manifesto dopo una ristrutturazione interna.",
    content: [
      "Dopo una riorganizzazione, la cooperativa cercava un nuovo senso di unità.",
      "Il laboratorio ha permesso di trasformare i passaggi difficili in un racconto collettivo e condiviso.",
      "Il risultato è stato un manifesto aggiornato, presentato durante un evento aperto alla città.",
    ],
    date: "2026-01-18",
    location: "Messina",
    category: "Comunità",
    cover:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Sara F.",
      role: "Coordinatrice",
      company: "Cooperativa Orizzonte",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    },
  },
  {
    id: "leadership-ascolto",
    title: "La leadership che ascolta",
    excerpt:
      "Un team dirigenziale ha imparato a valorizzare l'imperfezione come risorsa.",
    content: [
      "In un percorso dedicato ai leader, la fragilità è diventata una leva di innovazione.",
      "I partecipanti hanno lavorato su casi reali e si sono confrontati con i propri limiti.",
      "Il Kintsugi ha offerto un metodo concreto per integrare cura e responsabilità.",
    ],
    date: "2026-02-10",
    location: "Messina",
    category: "Aziende",
    cover:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Luca P.",
      role: "CEO",
      company: "Studio Meridiano",
      avatar:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
    },
  },
  {
    id: "intimita-creativita",
    title: "Intimità e creatività",
    excerpt:
      "Un atelier ha trasformato la fragilità in nuove visioni artistiche.",
    content: [
      "Un gruppo di creativi ha lavorato sulle proprie storie personali.",
      "Il laboratorio ha permesso di condividere emozioni profonde attraverso la materia.",
      "Le opere finali sono state esposte in un evento dedicato alla resilienza.",
    ],
    date: "2026-03-03",
    location: "Messina",
    category: "Comunità",
    cover:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Chiara N.",
      role: "Artista",
      company: "Atelier Kumo",
      avatar:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
    },
  },
];

export const formatItalianStoryDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};
