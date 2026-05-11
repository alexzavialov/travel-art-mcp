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
  lastBuilt: "2026-05-08",
};
