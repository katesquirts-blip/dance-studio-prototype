import {
  Activity,
  Calendar,
  CalendarRange,
  Crown,
  Drama,
  Flame,
  GraduationCap,
  Heart,
  Mic,
  Mic2,
  Music,
  Radio,
  Sparkles,
  Star,
  Tag,
  Ticket,
  Users,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react"

export type NavLink = {
  href: string
  label: string
}

export type Course = {
  title: string
  age: string
  description: string
  image: string
  Icon: LucideIcon
}

export type CourseCategory = {
  label: string
  courses: Course[]
}

export type ScheduleDay = {
  day: string
  classes: {
    time: string
    name: string
  }[]
}

export type TeamMember = {
  photo: string
  name: string
  role: string
  bio: string
}

export const brand = {
  name: "L'Ateneo Danza Musical e Fitness",
  shortName: "L'Ateneo Danza",
  tagline: "Da oltre 30 anni, la casa della danza ad Agropoli.",
  logo: "/logo2.png",
  phone: "+39 339 356 5655",
  phoneHref: "tel:+393393565655",
  whatsappHref: "https://wa.me/393393565655",
  email: "ritapolidoro4@gmail.com",
  emailHref: "mailto:ritapolidoro4@gmail.com",
  instagramHref: "https://www.instagram.com/ateneodanza/",
  facebookHref: "https://www.facebook.com/ateneo6",
  mapsHref: "https://maps.google.com/?q=Via+Moio+8+Agropoli+SA",
  primaryLocation: "Via Moio, 8",
  secondaryLocation: "Via Moio, 16",
  cityLine: "84043 Agropoli (SA)",
  hours: "Lun-Ven 10:00-12:00  14:30-21:00, Sabato 9:00-12:00.",
  copyright: "© 2026 L'Ateneo Danza Musical e Fitness · Agropoli, Cilento",
}

export const navLinks: NavLink[] = [
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#corsi", label: "Corsi" },
  { href: "#mamma-e-figlia", label: "Mamma & Figlia" },
  { href: "#formazione", label: "Formazione" },
  { href: "#orari", label: "Orari" },
  { href: "#prezzi", label: "Prezzi" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contatti", label: "Contatti" },
]

export const stats = [
  { number: "30+", label: "ANNI DI ESPERIENZA" },
  { number: "200+", label: "ALLIEVI OGNI ANNO" },
  { number: "3", label: "ETÀ MINIMA (ANNI)" },
  { number: "2", label: "SPETTACOLI ANNUALI" },
]

export const courseCategories: CourseCategory[] = [
  {
    label: "DANZA",
    courses: [
      {
        title: "Danza Classica",
        age: "3-6 anni",
        description: "Le basi della tecnica classica per i più piccoli, in un ambiente giocoso e stimolante.",
        image: "/488642768_2081867468995252_8593027666977621862_n.jpg",
        Icon: Music,
      },
      {
        title: "Danza Moderna",
        age: "7-14 anni",
        description: "Energia, ritmo e creatività per giovani ballerini che vogliono esprimersi liberamente.",
        image: "/female_pair_modern_dance.jpg",
        Icon: Zap,
      },
      {
        title: "Danza Contemporanea",
        age: "15-30 anni",
        description: "Esplorazione del movimento, improvvisazione e tecnica avanzata per ballerini esperti.",
        image: "/danza_comp.jpg",
        Icon: Wind,
      },
      {
        title: "Hip Hop",
        age: "Tutti i livelli",
        description: "Stile urbano, groove e freestyle per chi ama il ritmo e l'energia della street dance.",
        image: "/student_male.jpg",
        Icon: Radio,
      },
      {
        title: "Jazz",
        age: "Tutti i livelli",
        description: "Tecnica, musicalità e interpretazione per un approccio versatile alla danza.",
        image: "/student_blue_dress.jpg",
        Icon: Mic,
      },
      {
        title: "Discipline Aeree",
        age: "Dagli 8 anni",
        description: "Cerchio, tessuto, amaca e attrezzi misti - sperimenta la libertà del movimento in volo.",
        image: "/air_dance.jpg",
        Icon: Star,
      },
    ],
  },
  {
    label: "MUSICAL & RECITAZIONE",
    courses: [
      {
        title: "Corsi di Canto",
        age: "Tutti i livelli",
        description: "Tecnica vocale e interpretazione per aspiranti cantanti e performer.",
        image: "/theatre_dance_pair.jpg",
        Icon: Mic2,
      },
      {
        title: "Corsi di Recitazione",
        age: "Tutti i livelli",
        description: "Espressività, dizione e presenza scenica per il palcoscenico e oltre.",
        image: "/kids_dance_stage.jpg",
        Icon: Drama,
      },
      {
        title: "Danza per Musical",
        age: "Tutti i livelli",
        description: "Canto, recitazione e danza combinati per creare performer completi.",
        image: "/dance_theatre.jpg",
        Icon: Sparkles,
      },
    ],
  },
  {
    label: "FITNESS",
    courses: [
      {
        title: "Aerobica & Step",
        age: "Adulti",
        description: "Allenamento cardiovascolare dinamico a ritmo di musica.",
        image: "/49515778_549482118900469_8702854088280244224_n.jpg",
        Icon: Activity,
      },
      {
        title: "Zumba",
        age: "Adulti",
        description: "Fitness e divertimento con coreografie ispirate ai ritmi latini.",
        image: "/Zmba_training.jpg",
        Icon: Flame,
      },
      {
        title: "Pilates",
        age: "Adulti",
        description: "Benessere fisico e mentale attraverso esercizi mirati e controllati.",
        image: "/fitness.jpg",
        Icon: Heart,
      },
    ],
  },
]

export const featuredGalleryPhotos = [
  { src: "/additional/coppia-balletto-ateneo-agropoli-3.webp", alt: "Coppia balletto Ateneo Agropoli" },
  { src: "/additional/females-group-perform.webp", alt: "Gruppo femminile in scena" },
  { src: "/additional/coppia-performance-palcoscenico-2.webp", alt: "Coppia performance palcoscenico" },
  { src: "/female_pair_modern_dance.jpg", alt: "Coppia femminile danza moderna" },
]

export const allGalleryPhotos = [
  "/group_outside_.jpg", "/inside_school_children_lesson.jpg", "/male_female_duo.jpg",
  "/outside_event_students.jpg", "/solo_female_air_dance.jpg", "/student_green_dress.jpg",
  "/air_dance_student.jpg", "/collage_children_group.jpg", "/group_male_female_stuends_stage.jpg",
  "/IMG_8356.JPG.webp", "/IMG_8357.JPG.webp", "/IMG_8359.JPG.webp", "/IMG_8360.JPG.webp",
  "/IMG_8363.JPG.webp", "/IMG_8364.JPG.webp", "/IMG_8367.JPG.webp", "/IMG_8368.JPG.webp",
  "/IMG_8369.JPG.webp", "/IMG_8370.JPG.webp", "/IMG_8371.JPG.webp", "/IMG_8373.JPG.webp",
  "/IMG_8377.JPG.webp", "/IMG_8378.JPG.webp", "/IMG_8379.JPG.webp", "/IMG_8380.JPG.webp",
  "/IMG_8382.JPG.webp", "/IMG_8383.JPG.webp", "/IMG_8385.JPG.webp", "/IMG_8387.JPG.webp",
  "/IMG_8390.JPG.webp", "/IMG_8396.JPG.webp", "/IMG_8402.JPG.webp", "/IMG_8413.webp",
  "/additional/saggio-ateneo-agropoli-1.webp", "/additional/saggio-ateneo-agropoli-2.webp",
  "/additional/performance-ateneo-agropoli.webp", "/additional/spettacolo-fine-anno-ateneo-1.webp",
  "/additional/spettacolo-fine-anno-ateneo-3.webp", "/additional/spettacolo-fine-anno-ateneo.webp",
  "/additional/danza-femminile-sedia-agropoli.webp", "/additional/female-perform-sitting-chair.webp",
  "/additional/female-solo.webp", "/additional/females-group-perform.webp",
  "/additional/females-perform-stage.webp", "/additional/females-performs3.webp",
  "/additional/group-performance-4.webp", "/additional/group-performance-all-black.webp",
  "/additional/groupd-perform-1.webp", "/additional/kid-perform-solo.webp",
  "/additional/kid-solo-performance.webp", "/additional/kids-group-performance.webp",
  "/additional/kids-performance.webp", "/additional/kids-performance1.webp",
  "/additional/m-f-performa1.webp", "/additional/male-dancer.webp",
  "/additional/male-fdemale-performance4.webp", "/additional/male-female-ballet-1.webp",
  "/additional/coppia-balletto-ateneo-agropoli.webp",
  "/additional/coppia-balletto-ateneo-agropoli-3.webp",
  "/additional/duo-danza-ateneo-agropoli.webp", "/additional/gruppo-misto-performance-ateneo.webp",
  "/additional/coppia-performance-ateneo-cilento.webp",
  "/additional/coppia-danza-moderna-agropoli.webp",
  "/additional/coppia-danza-moderna-agropoli-1.webp",
  "/additional/coppia-danza-moderna-agropoli-2.webp",
  "/additional/coppia-danza-moderna-agropoli-4.webp",
  "/additional/coppia-performance-palcoscenico-1.webp",
  "/additional/coppia-performance-palcoscenico-2.webp",
  "/additional/coppia-performance-palcoscenico-3.webp",
  "/additional/coppia-danza-ateneo.webp", "/additional/gruppo-misto-danza-ateneo-3.webp",
  "/additional/danzatore-performance-agropoli-2.webp",
  "/additional/danzatore-solo-ateneo-agropoli.webp",
  "/additional/danzatore-solo-palcoscenico-agropoli.webp",
  "/additional/danzatore-solo-palcoscenico-agropoli-1.webp",
  "/additional/duo-misto-performance-ateneo.webp",
  "/additional/uomo-danza-performance-agropoli.webp",
  "/additional/performance-danza-ateneo-agropoli.webp",
  "/additional/due-ragazze-palcoscenico-ateneo.webp",
  "/additional/donna-danza-performance-agropoli-3.webp",
  "/additional/donna-danza-rosso-ateneo-agropoli.webp",
  "/additional/donne-performance-ateneo-agropoli-2.webp",
]

export const reels = ["/reel1.mp4", "/reel2.mp4", "/reel3.mp4"]

export const testimonialImages = ["/testimonial1.jpeg", "/testimonial2.jpeg", "/testimonial3.15.jpeg"]

export const salaArmoniaSchedule: ScheduleDay[] = [
  { day: "LUNEDÌ", classes: [{ time: "10:00", name: "Benessere Mamme | Pilates | Aerobica" }, { time: "17:00", name: "Predanza" }, { time: "18:15", name: "Aerobica" }, { time: "19:15", name: "Moderno Avanzato" }] },
  { day: "MARTEDÌ", classes: [{ time: "10:00", name: "Danza Per Adulti" }, { time: "16:00", name: "Moderno Principianti II" }, { time: "17:00", name: "Classico Principianti II" }, { time: "18:00", name: "Moderno Intermedio" }, { time: "19:00", name: "Danza Aerea" }] },
  { day: "MERCOLEDÌ", classes: [{ time: "10:00", name: "Benessere Mamme | Pilates | Aerobica" }, { time: "16:00", name: "Danza Aerea Kids" }, { time: "17:00", name: "Predanza" }, { time: "18:15", name: "Aerobica" }, { time: "19:15", name: "Danza Aerea Avanzato" }] },
  { day: "GIOVEDÌ", classes: [{ time: "10:00", name: "Danza Per Adulti" }, { time: "16:00", name: "Moderno Principianti II" }, { time: "17:00", name: "Classico Principianti II" }, { time: "18:00", name: "Moderno Intermedio" }, { time: "19:00", name: "Bungee Dance | Danza Aerea | Discipline a Richiesta" }] },
  { day: "VENERDÌ", classes: [{ time: "16:00", name: "Danza Aerea Principianti" }, { time: "17:00-18:30", name: "Recitazione" }, { time: "19:00", name: "Workshop con Professionisti" }] },
]

export const salaRitmoSchedule: ScheduleDay[] = [
  { day: "LUNEDÌ", classes: [{ time: "17:00", name: "Predanza" }, { time: "18:15", name: "Aerobica | GAG" }, { time: "19:15", name: "Modern Avanzato" }] },
  { day: "MARTEDÌ", classes: [{ time: "16:00", name: "Danza Classica Principianti" }, { time: "17:00", name: "Danza Moderna Principianti" }, { time: "18:00", name: "Modern Intermedio" }, { time: "19:15", name: "Danza Classica Intermedio" }] },
  { day: "MERCOLEDÌ", classes: [{ time: "15:00", name: "Aerobica | Step | GAG" }, { time: "17:00", name: "Predanza" }, { time: "18:15", name: "Aerobica | Step | GAG" }, { time: "19:15", name: "Musical" }] },
  { day: "GIOVEDÌ", classes: [{ time: "16:00", name: "Danza Classica Principianti" }, { time: "17:00", name: "Danza Moderna Principianti" }, { time: "18:00", name: "Modern Intermedio" }, { time: "19:15", name: "Danza Classica Intermedio" }, { time: "20:15", name: "Danza Contemporanea" }] },
  { day: "VENERDÌ", classes: [{ time: "15:00", name: "Aerobica e GAG" }, { time: "16:30", name: "Fiabe in Movimento" }, { time: "18:15", name: "Aerobica | Step | GAG" }, { time: "19:15", name: "Modern Avanzato" }] },
]

export const teamMembers: TeamMember[] = [
  {
    photo: "/amedeomonzo.jpeg",
    name: "Amedeo Monzo",
    role: "Insegnante di Danza",
    bio: "Amedeo Monzo è un danzatore professionista con un curriculum di altissimo livello. Ha calcato i palcoscenici più prestigiosi d'Italia ed Europa, collaborando con artisti come Gigi D'Alessio e Claudio Baglioni, e partecipando all'XFactor Italy Final. Ha danzato per brand iconici come Dolce & Gabbana, Fendi e Moncler, e nel 2025 ha recitato nel film \"The Saints\", prodotto da Martin Scorsese. Porta all'Ateneo un'energia unica e un'esperienza internazionale rara.",
  },
  {
    photo: "/carolinaMonzo.jpg",
    name: "Carolina Monzo",
    role: "Insegnante di Danza e Recitazione",
    bio: "Carolina Monzo è originaria di Agropoli - ha mosso i suoi primi passi di danza proprio qui all'Ateneo all'età di tre anni. La sua formazione l'ha portata alle più prestigiose istituzioni italiane: la Scuola di Danza del Teatro dell'Opera di Roma e l'Accademia Nazionale di Danza. Ha calcato palcoscenici internazionali con lo spettacolo \"Marenostrum\" tra Barcellona, Tunisi e Salerno, e ha partecipato a produzioni RAI e videoclip di artisti come Tropico e Rossella Brescia. Insegna anche Heels - una delle discipline più richieste del momento.",
  },
  {
    photo: "/federicabarretta.jpeg",
    name: "Federica Barretta",
    role: "Insegnante di Danza Classica e Contemporanea",
    bio: "Federica Barretta è diplomata al Liceo Coreutico di Salerno con indirizzo Contemporaneo e diplomata Accademia Abracadanza con Stefania Ciancio. Tecnico certificato in Danza Moderna, ha affinato la sua formazione con maestri di rilievo come Francesco Ventriglia, Luca Calzolaro e Fabrizio Esposito. Dal 2021 insegna danza classica e contemporanea all'Ateneo di Rita Polidoro, portando in sala un approccio empatico e attento alle esigenze di ogni allievo.",
  },
  {
    photo: "/GiorgioSannino.jpg",
    name: "Giorgio Sannino",
    role: "Insegnante di Danza Classica e Contemporanea",
    bio: "Giorgio Sannino è un danzatore classico e contemporaneo formatosi presso istituzioni di primo piano a Napoli, tra cui il Teatro San Carlo e la Crown Ballet School diretta da Luigi Ferrone. Specializzato in danza classica, contemporanea e modern, ha approfondito la sua tecnica con maestri internazionali come Vladimir Derevianko e Mauro Astolfi. Ha fatto parte della compagnia Kataklo' di danza contemporanea e ha partecipato alla produzione di Giselle con il Nuovo Balletto Italiano. Porta all'Ateneo una solida preparazione accademica e una profonda conoscenza delle tecniche classiche e contemporanee.",
  },
]

export const pricingCards = [
  { Icon: Ticket, title: "Lezione Singola", description: "Ideale per provare un corso prima di iscriverti. Nessun impegno, massima flessibilità." },
  { Icon: Calendar, title: "Abbonamento Mensile", description: "La soluzione più flessibile per chi vuole ballare con regolarità ogni mese." },
  { Icon: CalendarRange, title: "Abbonamento Semestrale", description: "Sei mesi di lezioni con un risparmio rispetto all'abbonamento mensile." },
  { Icon: Crown, title: "Abbonamento Annuale", description: "La scelta di chi vuole dare continuità al proprio percorso artistico. Massimo risparmio." },
]

export const pricingHighlights = [
  { Icon: Tag, title: "Tariffe Differenziate", description: "I costi variano in base al corso scelto e all'età dell'allievo. Contattaci per ricevere il preventivo personalizzato." },
  { Icon: Users, title: "Sconti Famiglia", description: "Sono previste riduzioni speciali per fratelli e/o sorelle e per mamme e figlie che si iscrivono insieme." },
]

export const professionalTracks = [
  {
    Icon: GraduationCap,
    title: "Per Futuri Danzatori",
    items: ["Corso di Danza Professionale", "Corso di Coreografia", "Corso di Tecnica di Danza"],
  },
  {
    Icon: GraduationCap,
    title: "Per Futuri Docenti",
    items: [
      "Corso di Metodologia dell'Insegnamento della Danza",
      "Corso di Didattica della Danza",
      "Corso di Preparazione all'Esame di Stato per l'Insegnamento della Danza",
    ],
  },
]
