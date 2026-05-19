import {
  Activity,
  Calendar,
  CalendarRange,
  Crown,
  Flame,
  Heart,
  Music,
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
  name: "Lovely Dance Beauty & Fitness",
  shortName: "Lovely Dance",
  tagline: "Danza, fitness e benessere nel cuore del Vomero.",
  logo: "",
  phone: "+39 000 000 0000",
  phoneHref: "tel:+390000000000",
  whatsappHref: "https://wa.me/393498737169",
  email: "info@lovelydance.it",
  emailHref: "mailto:info@lovelydance.it",
  instagramHref: "#",
  facebookHref: "#",
  mapsHref: "https://maps.google.com/?q=Vomero+Napoli",
  primaryLocation: "Vomero",
  secondaryLocation: "Napoli",
  cityLine: "Napoli (NA)",
  hours: "Orari in aggiornamento.",
  copyright: "© 2026 Lovely Dance Beauty & Fitness",
}

export const navLinks: NavLink[] = [
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#corsi", label: "Corsi" },
  { href: "#orari", label: "Orari" },
  { href: "#prezzi", label: "Prezzi" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contatti", label: "Contatti" },
]

export const stats = [
  { number: "10+", label: "DISCIPLINE" },
  { number: "Kids", label: "BAMBINI E ADULTI" },
  { number: "3", label: "DANZA, FITNESS E BENESSERE" },
  { number: "Vomero", label: "NAPOLI" },
]

export const courseCategories: CourseCategory[] = [
  {
    label: "Dance",
    courses: [
      {
        title: "Danza Classica",
        age: "Tutti i livelli",
        description: "Tecnica, postura e musicalita per un percorso elegante e progressivo.",
        image: "/488642768_2081867468995252_8593027666977621862_n.jpg",
        Icon: Music,
      },
      {
        title: "Social Dance",
        age: "Adulti",
        description: "Balli sociali per divertirti, muoverti con sicurezza e vivere la musica in compagnia.",
        image: "/male_female_duo.jpg",
        Icon: Star,
      },
      {
        title: "Hip Hop Kids",
        age: "Kids",
        description: "Energia, ritmo e coordinazione per bambini che vogliono muoversi con stile.",
        image: "/student_male.jpg",
        Icon: Zap,
      },
      {
        title: "Salsa Nightclub Style",
        age: "Adulti",
        description: "Salsa dinamica e scenica con un taglio moderno, sociale e da pista.",
        image: "/female_pair_modern_dance.jpg",
        Icon: Zap,
      },
      {
        title: "Burlesque",
        age: "Adulti",
        description: "Espressivita, femminilita e presenza scenica in una lezione elegante e ironica.",
        image: "/student_green_dress.jpg",
        Icon: Sparkles,
      },
      {
        title: "Caraibico",
        age: "Tutti i livelli",
        description: "Ritmi caraibici per lavorare su energia, musicalita e movimento del corpo.",
        image: "/male_female_duo.jpg",
        Icon: Flame,
      },
      {
        title: "Danze Popolari",
        age: "Tutti i livelli",
        description: "Tradizione, ritmo e socialita attraverso danze coinvolgenti e accessibili.",
        image: "/group_outside_.jpg",
        Icon: Users,
      },
      {
        title: "Kizomba",
        age: "Adulti",
        description: "Connessione, fluidita e movimento morbido per scoprire uno stile sensuale e musicale.",
        image: "/theatre_dance_pair.jpg",
        Icon: Heart,
      },
      {
        title: "Bachata Fusion",
        age: "Adulti",
        description: "Bachata con contaminazioni moderne per migliorare musicalita, tecnica e interpretazione.",
        image: "/male_female_duo.jpg",
        Icon: Music,
      },
      {
        title: "Salsa Cubana",
        age: "Tutti i livelli",
        description: "Ritmo, energia e socialita nello stile cubano, dalle basi alle combinazioni piu dinamiche.",
        image: "/danza_comp.jpg",
        Icon: Wind,
      },
    ],
  },
  {
    label: "Fitness & Wellness",
    courses: [
      {
        title: "Yoga",
        age: "Tutti i livelli",
        description: "Pratica morbida per respirare meglio, sciogliere tensioni e recuperare calma mentale.",
        image: "/inside_school_children_lesson.jpg",
        Icon: Wind,
      },
      {
        title: "Postural Pilates",
        age: "Tutti i livelli",
        description: "Controllo, postura e consapevolezza per rinforzare il corpo in modo equilibrato.",
        image: "/fitness.jpg",
        Icon: Heart,
      },
      {
        title: "Ginnastica Posturale",
        age: "Adulti",
        description: "Esercizi mirati per migliorare postura, mobilita e benessere quotidiano.",
        image: "/fitness.jpg",
        Icon: Activity,
      },
      {
        title: "Ginnastica Dolce",
        age: "Adulti",
        description: "Movimento leggero e progressivo per mantenersi attivi con cura e continuita.",
        image: "/fitness.jpg",
        Icon: Heart,
      },
      {
        title: "Aerobica",
        age: "Adulti",
        description: "Allenamento cardio a ritmo di musica per energia, resistenza e tono.",
        image: "/Zmba_training.jpg",
        Icon: Flame,
      },
      {
        title: "Biodanza",
        age: "Adulti",
        description: "Movimento, emozione e musica per un'esperienza di benessere e connessione.",
        image: "/air_dance_student.jpg",
        Icon: Sparkles,
      },
      {
        title: "Meditazione Zen",
        age: "Tutti i livelli",
        description: "Pratiche di presenza e respirazione per ritrovare calma, equilibrio e centratura.",
        image: "/inside_school_children_lesson.jpg",
        Icon: Star,
      },
    ],
  },
  {
    label: "Beauty / Lifestyle",
    courses: [
      {
        title: "Make-Up Fashion",
        age: "Su prenotazione",
        description: "Sessioni dedicate al make-up e allo stile per valorizzare immagine e personalita.",
        image: "/student_blue_dress.jpg",
        Icon: Sparkles,
      },
      {
        title: "Nutritional Consultation",
        age: "Nutrizionista in sede",
        description: "Consulenze nutrizionali in sede per accompagnare benessere, energia e obiettivi personali.",
        image: "/fitness.jpg",
        Icon: Heart,
      },
      {
        title: "Personal Trainer Sessions",
        age: "Su prenotazione",
        description: "Percorsi individuali con personal trainer per allenarti in modo mirato e personalizzato.",
        image: "/Zmba_training.jpg",
        Icon: Activity,
      },
      {
        title: "Private Dance & Fitness Lessons",
        age: "Su prenotazione",
        description: "Lezioni private di danza e fitness per lavorare sui tuoi obiettivi con attenzione dedicata.",
        image: "/female_pair_modern_dance.jpg",
        Icon: Star,
      },
    ],
  },
]

export const featuredGalleryPhotos = [
  { src: "/additional/coppia-balletto-ateneo-agropoli-3.webp", alt: "Coppia in scena" },
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
