// Static dataset for travel.art MCP server v1.
// Hand-curated from published cornerstone articles.
// Future: replace with build-time extraction from content/<slug>/index.md frontmatter.

export interface ArtEvent {
  id: string;
  type: "biennale" | "art-fair" | "festival";
  name: string;
  subtitle?: string;
  city: string;
  country: string; // ISO 3166-1 alpha-2
  venues: string[];
  startDate: string; // ISO 8601 date
  endDate: string;
  publicDates?: { start: string; end: string };
  vipDates?: { start: string; end: string };
  ticketRange?: string;
  currency?: string;
  url: string; // Canonical guide URL on travel.art
  summary: string;
  highlights?: string[];
  parallelEvents?: string[];
  lastVerified: string; // ISO 8601 date
}

export interface Museum {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  geo?: { lat: number; lng: number };
  ticketStandard?: number;
  ticketReduced?: number;
  ticketEU?: number;
  ticketNonEU?: number;
  bookingSurcharge?: number;
  currency: string;
  openingHours: string;
  closedDays?: string[];
  url: string;
  summary: string;
  essentialWorks?: string[];
  routeDuration?: string;
  lastVerified: string;
}

export const events: ArtEvent[] = [
  {
    id: "whitney-biennial-2026",
    type: "biennale",
    name: "Whitney Biennial 2026",
    subtitle: "81st edition, curated by Marcela Guerrero and Drew Sawyer",
    city: "New York",
    country: "US",
    venues: ["Whitney Museum of American Art, 99 Gansevoort St, Meatpacking District"],
    startDate: "2026-03-08",
    endDate: "2026-08-23",
    publicDates: { start: "2026-03-08", end: "2026-08-23" },
    vipDates: { start: "2026-03-04", end: "2026-03-07" },
    ticketRange: "$30 standard / $24 senior+student / free for everyone 25-and-under (daily)",
    currency: "USD",
    url: "https://travel.art/whitney-biennial-2026/",
    summary:
      "The 81st Whitney Biennial — America's flagship survey of contemporary U.S. art — curated by Marcela Guerrero (DeMartini Family Curator) and Drew Sawyer (Sondra Gilman Curator of Photography). 56 artists/duos/collectives, with roughly 60% born after 1980 and 30% queer-identifying. Renzo Piano building in Meatpacking District. Free Friday Nights (17:00–22:00) replaced Pay-What-You-Wish in 2024; Free Second Sundays all day.",
    highlights: [
      "Free Friday Nights 17:00–22:00 (sponsored)",
      "Free Second Sundays all day",
      "Free daily admission for everyone 25-and-under",
      "Chelsea gallery walk (Gagosian, David Zwirner, Hauser & Wirth, Pace) within 0.5mi",
      "High Line entrance steps from the museum",
    ],
    parallelEvents: ["Chelsea gallery walk", "High Line", "MoMA / Met combo day"],
    lastVerified: "2026-05-11",
  },
  {
    id: "venice-biennale-2026",
    type: "biennale",
    name: "Venice Biennale 2026",
    subtitle: "61st International Art Exhibition: In Minor Keys",
    city: "Venice",
    country: "IT",
    venues: ["Giardini della Biennale", "Arsenale"],
    startDate: "2026-05-09",
    endDate: "2026-11-22",
    publicDates: { start: "2026-05-09", end: "2026-11-22" },
    vipDates: { start: "2026-05-06", end: "2026-05-08" },
    ticketRange: "€30 single / €40 three-day / €50 weekly / €16 students",
    currency: "EUR",
    url: "https://travel.art/venice-biennale-2026/",
    summary:
      "The 61st International Art Exhibition, themed 'In Minor Keys', conceived by Koyo Kouoh (1967–2025) and realized posthumously by her advisory team. 99 national pavilions across Giardini and Arsenale. Seven first-time-participating nations: Guinea, Equatorial Guinea, Nauru, Qatar, Sierra Leone, Somalia, Vietnam.",
    highlights: [
      "Giardini for the historical national pavilions",
      "Arsenale for the central thematic exhibition",
      "Collateral events scattered across Venice palazzi",
    ],
    lastVerified: "2026-05-08",
  },
  {
    id: "art-basel-switzerland-2026",
    type: "art-fair",
    name: "Art Basel 2026 (Basel)",
    subtitle: "The flagship Swiss fair",
    city: "Basel",
    country: "CH",
    venues: ["Messe Basel"],
    startDate: "2026-06-16",
    endDate: "2026-06-21",
    publicDates: { start: "2026-06-18", end: "2026-06-21" },
    vipDates: { start: "2026-06-16", end: "2026-06-17" },
    ticketRange: "CHF 69 standard / CHF 200 VIP Preview / CHF 45 concession",
    currency: "CHF",
    url: "https://travel.art/art-basel-switzerland-2026/",
    summary:
      "Art Basel's flagship Swiss fair: 290 galleries from 43 countries, 21 first-time exhibitors. Sectors include Galleries, Unlimited (large-scale installations), Statements, Parcours, Edition, Conversations.",
    highlights: [
      "Unlimited (large-scale installations)",
      "Liste Art Fair Basel (parallel emerging-galleries fair)",
      "VOLTA Basel",
      "Basel Social Club",
      "Fondation Beyeler in Riehen",
    ],
    parallelEvents: ["Liste Art Fair Basel", "VOLTA Basel", "Basel Social Club", "Photo Basel"],
    lastVerified: "2026-05-08",
  },
  {
    id: "frieze-london-2026",
    type: "art-fair",
    name: "Frieze London 2026",
    subtitle: "Frieze London + Frieze Masters",
    city: "London",
    country: "GB",
    venues: ["The Regent's Park"],
    startDate: "2026-10-14",
    endDate: "2026-10-18",
    ticketRange: "Verify on frieze.com (2026 pricing)",
    currency: "GBP",
    url: "https://travel.art/frieze-london-2026/",
    summary:
      "Frieze London + Frieze Masters in The Regent's Park. Concurrent with Frieze Sculpture (16 September – 1 November 2026, free outdoor, curated by Fatoş Üstek). Followed the next week by Art Basel Paris (23–25 October 2026, Grand Palais).",
    highlights: [
      "Frieze London (contemporary)",
      "Frieze Masters (historical to 2000)",
      "Frieze Sculpture (free, outdoor, English Gardens)",
      "Mayfair gallery activations",
    ],
    parallelEvents: ["Frieze Masters", "Frieze Sculpture", "Art Basel Paris (the following week)"],
    lastVerified: "2026-05-08",
  },
  {
    id: "art-basel-paris-2026",
    type: "art-fair",
    name: "Art Basel Paris 2026",
    subtitle: "Third Art Basel-branded Paris edition at the Grand Palais",
    city: "Paris",
    country: "FR",
    venues: ["Grand Palais, 3 Avenue du Général Eisenhower, 75008 Paris"],
    startDate: "2026-10-23",
    endDate: "2026-10-25",
    publicDates: { start: "2026-10-23", end: "2026-10-25" },
    ticketRange: "Verify on artbasel.com/paris (2026 pricing; 2025 reference: €30 day / €38 evening / €45 permanent / €120 VIP)",
    currency: "EUR",
    url: "https://travel.art/art-basel-paris-2026/",
    summary:
      "Founded as Paris+ par Art Basel in 2022, rebranded Art Basel Paris in 2024. Held in the restored Grand Palais nave. Sectors: Galeries, Emergence, Premise. The Marais gallery week is the off-fair anchor (Perrotin 76 rue de Turenne, Almine Rech 64 rue de Turenne, Thaddaeus Ropac 7 rue Debelleyme, kamel mennour, Karsten Greve 5 rue Debelleyme). Note: Centre Pompidou closed September 2025 through approximately 2030 for renovation; Bourse de Commerce (Pinault Collection) and Musée d'Orsay are the main contemporary substitutes for that institutional viewing week.",
    highlights: [
      "Grand Palais nave (restored)",
      "Galeries / Emergence / Premise sectors",
      "Marais gallery week (Perrotin, Almine Rech, Ropac, kamel mennour)",
      "Saint-Germain galleries (Lelong, Karsten Greve)",
      "Bourse de Commerce (Pinault Collection)",
    ],
    parallelEvents: [
      "Paris Internationale (21–25 Oct 2026, verify venue)",
      "Asia NOW (22–26 Oct 2026, La Monnaie)",
      "Design Miami Paris (20–25 Oct 2026)",
      "Paris Photo (12–15 Nov 2026, separate week)",
    ],
    lastVerified: "2026-05-11",
  },
  {
    id: "art-basel-miami-2026",
    type: "art-fair",
    name: "Art Basel Miami Beach 2026",
    city: "Miami Beach",
    country: "US",
    venues: ["Miami Beach Convention Center"],
    startDate: "2026-12-02",
    endDate: "2026-12-06",
    publicDates: { start: "2026-12-04", end: "2026-12-06" },
    vipDates: { start: "2026-12-02", end: "2026-12-03" },
    ticketRange: "$88 standard / $105 First Access (2025 reference; verify on artbasel.com)",
    currency: "USD",
    url: "https://travel.art/art-basel-miami-2026/",
    summary:
      "Art Basel's Miami flagship at the Miami Beach Convention Center. The Latin-American gallery axis is Miami's distinctive position vs Basel/Frieze. Concurrent Miami Art Week includes Design Miami (1–6 December 2026, Pride Park beside the Convention Center), NADA, Untitled, Scope, Aqua, Pinta, plus Wynwood and Design District gallery activations.",
    highlights: [
      "Latin-American gallery presence (strongest globally)",
      "Design Miami in Pride Park",
      "Rubell Museum annual new-acquisitions opening",
      "Pérez Art Museum (PAMM)",
      "ICA Miami (free admission)",
    ],
    parallelEvents: [
      "Design Miami (Pride Park)",
      "NADA Miami",
      "Untitled Art Miami Beach",
      "Scope Miami Beach",
      "Aqua Art Miami",
      "Pinta Miami",
    ],
    lastVerified: "2026-05-08",
  },
];

export const museums: Museum[] = [
  {
    id: "musee-d-orsay",
    name: "Musée d'Orsay",
    city: "Paris",
    country: "FR",
    address: "1 rue de la Légion d'Honneur, 75007 Paris, France",
    geo: { lat: 48.8600, lng: 2.3266 },
    ticketStandard: 16,
    ticketReduced: 13,
    currency: "EUR",
    openingHours:
      "Tue–Sun 09:30–18:00; Thu late opening to 21:45 ('L'Heure Orsay' — confirmed alive in 2026, reduced €12 rate after 18:00, last admission 21:00); closed Mondays + 1 May + 25 Dec. First Sunday of every month free for all (confirmed alive 2026). Mandatory timed-entry rule in force 10 March 2026 to summer 2028 (covers Pass holders and free categories).",
    closedDays: ["Monday", "May 1", "December 25"],
    url: "https://travel.art/musee-d-orsay-essentials/",
    summary:
      "The most comprehensive Impressionist + Post-Impressionist collection in the world, housed in the converted 1900 Beaux-Arts railway station designed by Victor Laloux. Chronological mandate 1848–1914 (Louvre ends where Orsay begins). Top-down 2-hour route: Level 5 (Impressionists — Manet, Monet, Renoir, Degas, Caillebotte, Van Gogh's Bedroom at Arles third version, Cézanne) → Level 2 (Post-Impressionists, Toulouse-Lautrec, Nabis) → Level 0 (Realists + sculpture: Courbet's Origin of the World, Millet's Gleaners) → loop to the famous central nave clock window for the closing photo. Paris Museum Pass covered.",
    essentialWorks: [
      "Manet: Olympia + Le Déjeuner sur l'herbe (Level 5)",
      "Courbet: L'Origine du Monde + Burial at Ornans (Level 0)",
      "Millet: The Gleaners + The Angelus (Level 0)",
      "Renoir: Bal du Moulin de la Galette (Level 5)",
      "Monet: La Gare Saint-Lazare + Rouen Cathedral series (Level 5)",
      "Degas: The Ballet Class + Little Dancer Aged Fourteen sculpture (Level 5)",
      "Cézanne: Apples and Oranges + Mont Sainte-Victoire (Level 5)",
      "Van Gogh: Self-Portrait + Bedroom at Arles (third version, Sept 1889) + Starry Night Over the Rhône + Church at Auvers (Level 5)",
      "Gauguin: Vairumati + Arearea (Level 2)",
      "Toulouse-Lautrec: La Toilette + posters (Level 2)",
      "Seurat: Le Cirque (Level 2)",
      "Caillebotte: Les Raboteurs de Parquet (Level 5)",
      "The central nave clock window over Paris",
    ],
    routeDuration: "2 hours essential; 3–4 hours including Decorative Arts and Nabis rooms",
    lastVerified: "2026-05-11",
  },
  {
    id: "louvre",
    name: "The Louvre",
    city: "Paris",
    country: "FR",
    address: "99 Rue de Rivoli, 75001 Paris, France",
    geo: { lat: 48.8606, lng: 2.3376 },
    ticketEU: 22,
    ticketNonEU: 32,
    currency: "EUR",
    openingHours:
      "Mon, Thu, Sat, Sun 09:00–18:00 (last entry 17:00); Wed, Fri 09:00–21:45 (last entry 20:45); closed Tuesdays",
    closedDays: ["Tuesday", "January 1", "May 1", "December 25"],
    url: "https://travel.art/louvre-in-3-hours/",
    summary:
      "Sequenced 3-hour route through the Denon wing. Two-tier ticket structure took effect 14 January 2026 under the *Louvre Nouvelle Renaissance* funding plan: €22 EU/EEA passport holders, €32 non-EU. Free for under-18s, EU residents under 26. First Friday of each month after 18:00 free for all (excl. July/August).",
    essentialWorks: [
      "Mona Lisa (Salle 711)",
      "Wedding at Cana (opposite the Mona Lisa)",
      "Winged Victory of Samothrace",
      "Venus de Milo",
      "Liberty Leading the People",
      "Coronation of Napoleon",
      "Death of Sardanapalus",
      "Virgin of the Rocks",
      "La Belle Ferronnière",
      "Great Sphinx of Tanis",
      "Code of Hammurabi",
      "The Lacemaker (Vermeer)",
    ],
    routeDuration: "3 hours minimum (Denon wing focus); 5+ hours for Sully and Richelieu additions",
    lastVerified: "2026-05-08",
  },
  {
    id: "vatican-museums",
    name: "Vatican Museums & Sistine Chapel",
    city: "Vatican City",
    country: "VA",
    address: "Viale Vaticano, 00120 Vatican City",
    geo: { lat: 41.9065, lng: 12.4536 },
    ticketStandard: 20,
    ticketReduced: 8,
    bookingSurcharge: 5,
    currency: "EUR",
    openingHours:
      "Mon–Sat 09:00–18:00 (last entry 16:00); closed Sundays except last Sunday of month (free entry); Friday Night Opening confirmed running mid-April through late October 2026, 19:00–23:00 (last entry 21:30)",
    closedDays: ["Sunday (except last Sunday of month)"],
    url: "https://travel.art/vatican-museums-skip-the-line/",
    summary:
      "Honest skip-the-line comparison guide: official timed entry vs Tiqets/GetYourGuide vs private 'Pristine Sistine' tours. 2-hour route through the Pinacoteca → Pio-Clementino → Galleria delle Carte Geografiche → Raphael Rooms → Sistine Chapel, organized by chronological-by-pope logic. Pilgrim's Way is exit-only (does NOT give free Sistine entry). Roma Pass does NOT cover Vatican (it's a sovereign state).",
    essentialWorks: [
      "Sistine Chapel ceiling and Last Judgment (Michelangelo)",
      "Raphael's Stanze (School of Athens, Disputation)",
      "Galleria delle Carte Geografiche (16th-century maps)",
      "Laocoön and His Sons (Pio-Clementino)",
      "Apollo Belvedere",
      "Caravaggio's Deposition (Pinacoteca Room XII)",
      "Leonardo's St Jerome (Pinacoteca Room IX)",
    ],
    routeDuration: "2 hours minimum",
    lastVerified: "2026-05-08",
  },
  {
    id: "prado",
    name: "Museo Nacional del Prado",
    city: "Madrid",
    country: "ES",
    address: "C. de Ruiz de Alarcón 23, 28014 Madrid, Spain",
    geo: { lat: 40.4138, lng: -3.6921 },
    ticketStandard: 15,
    ticketReduced: 7.5,
    currency: "EUR",
    openingHours:
      "Mon–Sat 10:00–20:00; Sun and holidays 10:00–19:00. Free admission Mon–Sat 18:00–20:00 and Sun/holidays 17:00–19:00 (confirmed live 2026).",
    closedDays: ["January 1", "May 1", "December 25"],
    url: "https://travel.art/prado-essentials/",
    summary:
      "Spain's national art museum and the most important collection of Spanish painting in the world — Velázquez, Goya, El Greco, Murillo, Ribera — plus deep Flemish (Bosch, Brueghel, Rubens, Van Dyck) and Italian (Titian, Raphael) holdings. 2-hour deliberate route through ~14 essential works, climaxing at Velázquez's Las Meninas (Room 12). Free for under-18s and EU/EEA students under 26. Paseo del Arte combination card €32.80 (Prado + Reina Sofía + Thyssen-Bornemisza, valid 12 months). Photography prohibited in the permanent collection.",
    essentialWorks: [
      "Velázquez: Las Meninas (Room 12)",
      "Velázquez: Las Hilanderas",
      "Velázquez: equestrian portraits and Christ Crucified",
      "Goya: Saturn Devouring His Son + the Black Paintings (Room 67, lower floor)",
      "Goya: The Third of May 1808",
      "Goya: The Family of Charles IV",
      "Goya: La Maja Desnuda + La Maja Vestida",
      "El Greco: The Nobleman with His Hand on His Chest",
      "Bosch: The Garden of Earthly Delights (Room 56A)",
      "Brueghel the Elder: The Triumph of Death",
      "Titian: Equestrian Portrait of Charles V, Danaë",
      "Rubens: The Three Graces, Garden of Love",
      "Dürer: Self-Portrait",
    ],
    routeDuration: "2 hours essential; 3–4 hours with the Italian and German rooms",
    lastVerified: "2026-05-11",
  },
  {
    id: "uffizi",
    name: "Galleria degli Uffizi",
    city: "Florence",
    country: "IT",
    address: "Piazzale degli Uffizi 6, 50122 Firenze, Italy",
    geo: { lat: 43.7686, lng: 11.2553 },
    ticketStandard: 25,
    currency: "EUR",
    openingHours: "Tuesday–Sunday 08:15–18:30; closed Mondays",
    closedDays: ["Monday"],
    url: "https://travel.art/uffizi-essentials/",
    summary:
      "Sequenced 2-hour route through the U-shaped corridor. Post-November-2024 third-floor reorganization integrated: Birth of Venus and Primavera now face each other across the principal Botticelli room (Sala 10–14). Vasari Corridor reopened December 2024 with step-free access, separate timed-entry ticket. The 2026-03-15 Accademia + Bargello combo ticket (€38, 72 hours) is the budget play for a multi-museum Florence trip.",
    essentialWorks: [
      "Botticelli's Birth of Venus and Primavera (Sala 10–14)",
      "Caravaggio's Bacchus and Medusa (Sala 90)",
      "Raphael's Madonna of the Goldfinch (Sala 41)",
      "Michelangelo's Doni Tondo (Sala 35)",
      "Titian's Venus of Urbino (Sala 83)",
      "Leonardo's Annunciation",
      "The Tribuna (Sala 18)",
    ],
    routeDuration: "2 hours essential; 4+ hours including the corridor extensions and Vasari Corridor",
    lastVerified: "2026-05-08",
  },
];

export const META = {
  name: "travel.art",
  version: "1.0.0",
  description:
    "Model Context Protocol server for travel.art — exposes structured art-tourism data (events, museums, itineraries) to AI agents.",
  homepage: "https://travel.art/",
  contact: "mcp@travel.art",
  lastBuilt: "2026-05-11",
  catalogue: {
    events: 6,
    museums: 5,
  },
};
