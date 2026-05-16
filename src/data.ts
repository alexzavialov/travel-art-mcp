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
  {
    id: "british-museum",
    name: "The British Museum",
    city: "London",
    country: "GB",
    address: "Great Russell St, Bloomsbury, London WC1B 3DG, UK",
    geo: { lat: 51.5194, lng: -0.1270 },
    ticketStandard: 0,
    currency: "GBP",
    openingHours:
      "Daily 10:00–17:00; Fridays late opening to 20:30 (last entry 20:15). Free permanent-collection admission (donation suggested £5). 2026 special exhibitions paid separately (typical range £17–22).",
    closedDays: ["January 1", "December 24-26"],
    url: "https://travel.art/british-museum-essentials/",
    summary:
      "World-encyclopaedic free museum in Bloomsbury — 8M+ objects tracing human civilisation from Mesopotamia to the present, free permanent admission (£5 donation suggested). 2-hour deliberate route through 14 essentials anchored on Rosetta Stone (Room 4), Parthenon Sculptures (Room 18 Duveen Gallery), Lion Hunt of Ashurbanipal (Room 10), Egyptian mummies, Sutton Hoo ship-burial helmet, Lewis Chessmen, Standard of Ur, and the Easter Island moai. 2026 special exhibitions: Hawaiʻi (15 Jan–25 May), Samurai (3 Feb–4 May), Bayeux Tapestry (1 Oct 2026–31 Jan 2027). Western Range Masterplan under Lina Ghotmeh in design phase; museum stays open throughout future works.",
    essentialWorks: [
      "Rosetta Stone (Room 4)",
      "Lion Hunt of Ashurbanipal — Assyrian reliefs from Nineveh (Room 10)",
      "Parthenon Sculptures (Room 18, Duveen Gallery)",
      "Caryatid from the Erechtheion (Room 19)",
      "Crouching Venus (Room 23)",
      "Hoa Hakananai'a — Easter Island moai (Room 24, Living and Dying)",
      "Double-Headed Serpent + Aztec turquoise mosaics (Room 27, Mexico)",
      "Lewis Chessmen (Room 40, Medieval Europe)",
      "Sutton Hoo helmet + ship-burial treasure (Room 41)",
      "Oxus Treasure (Room 52, Ancient Iran)",
      "Standard of Ur (Room 56, Mesopotamia)",
      "Egyptian mummies + Mummy of Katebet (Rooms 62-63)",
      "Hokusai's Great Wave print on rotation (Room 92, Japan)",
    ],
    routeDuration: "2 hours essential; 4+ hours including Enlightenment, Money, Ancient Rome, and Africa galleries",
    lastVerified: "2026-05-12",
  },
  {
    id: "met",
    name: "The Metropolitan Museum of Art (Fifth Avenue)",
    city: "New York",
    country: "US",
    address: "1000 5th Ave, New York, NY 10028, USA",
    geo: { lat: 40.7794, lng: -73.9632 },
    ticketStandard: 30,
    ticketReduced: 17,
    currency: "USD",
    openingHours:
      "Sun-Tue + Thu 10:00–17:00; Fri-Sat 10:00–21:00; closed Wednesday. NY State residents + full-time NY/NJ/CT students pay-what-you-wish at the ticket desk with valid ID (penny minimum, confirmed unchanged 2026). Ticket covers Met Fifth Ave + Cloisters for 3 consecutive days.",
    closedDays: ["Wednesday", "January 1", "First Monday of May (Met Gala)", "Thanksgiving Day", "December 25"],
    url: "https://travel.art/met-essentials/",
    summary:
      "Encyclopaedic museum on the Upper East Side rivalling the Louvre in scale (~2M sq ft, 5,000 years of culture). 3-hour route routes around the 2025-2030 Tang Wing closure — Modern and Contemporary galleries (Pollock, Picasso Gertrude Stein, Cézanne) and Cantor Roof Garden are dark through 2030, older guides misleading on this. Live anchors: Temple of Dendur (Egyptian Wing, Gallery 131), Cubiculum from Boscoreale (Greek/Roman Gallery 165), Washington Crossing the Delaware + Sargent's Madame X (American Wing), 2nd-floor European Paintings (Vermeer Young Woman with a Water Pitcher, Caravaggio The Musicians, Bruegel The Harvesters, El Greco View of Toledo, Rembrandt Self-Portrait, David Death of Socrates), Arms and Armor parade. Met Gala 4 May 2026; Costume Institute Costume Art opens 10 May 2026 in new Condé M. Nast Galleries. NYC CityPASS does NOT include the Met.",
    essentialWorks: [
      "Temple of Dendur (Gallery 131, Egyptian Wing)",
      "Cubiculum from Boscoreale — Roman bedroom frescoes (Gallery 165)",
      "Marble statue of a kouros (Gallery 154)",
      "Vermeer: Young Woman with a Water Pitcher (Gallery 632)",
      "Caravaggio: The Musicians (Gallery 621)",
      "Bruegel the Elder: The Harvesters (Gallery 612)",
      "El Greco: View of Toledo (Gallery 629)",
      "Rembrandt: Self-Portrait (Gallery 628)",
      "Emanuel Leutze: Washington Crossing the Delaware (Gallery 760, monumental 12×21 ft)",
      "Sargent: Madame X (Gallery 771, American Wing)",
      "Astor Court Ming Dynasty scholar's garden (Gallery 217, Asian Art)",
      "Damascus Room (Gallery 461, Islamic Art)",
      "Arms and Armor equestrian parade (Galleries 370-379)",
    ],
    routeDuration: "3 hours minimum (Egyptian → Greek/Roman → American → European 2nd floor → Arms); 5+ hours including Asian + Islamic wings",
    lastVerified: "2026-05-12",
  },
  {
    id: "moma",
    name: "Museum of Modern Art (MoMA)",
    city: "New York",
    country: "US",
    address: "11 W 53rd St, New York, NY 10019, USA",
    geo: { lat: 40.7614, lng: -73.9776 },
    ticketStandard: 30,
    ticketReduced: 17,
    currency: "USD",
    openingHours:
      "Daily 10:30–17:30; Friday extended to 20:30; closed Thanksgiving + 25 Dec. Online ticket $28 (vs $30 walk-up). 16-and-under free. **UNIQLO Free Friday Nights changed 10 January 2025 — now every Friday but for NY State residents only with ID** (legacy guides still say it's free for all). Sculpture Garden Mornings free Tue-Sun 09:00-10:30.",
    closedDays: ["Thanksgiving Day", "December 25"],
    url: "https://travel.art/moma-essentials/",
    summary:
      "The single building that defined how we narrate 20th-century art (Alfred H. Barr Jr.'s 1929 founding thesis still shapes the chronological walk). Chronological top-down 2.5-hour route: Floor 5 first (Van Gogh's Starry Night in Gallery 502 before crowds, then Les Demoiselles d'Avignon, Water Lilies, Matisse Dance, Mondrian, Kahlo, Magritte) → Floor 4 (Pollock One: Number 31, Rothko, Warhol Campbell's Soup Cans + Gold Marilyn, Lichtenstein Drowning Girl, Newman Vir Heroicus Sublimis) → Floor 3 design (Eames Lounge Chair) → Sculpture Garden close (Picasso She-Goat, Calder). MoMA PS1 (Queens) included in ticket within 14 days. Floor 6 special: Marcel Duchamp retrospective 12 April–22 August 2026.",
    essentialWorks: [
      "Van Gogh: Starry Night (1889, Gallery 502, Floor 5)",
      "Picasso: Les Demoiselles d'Avignon (1907, Floor 5)",
      "Monet: Water Lilies triptych (1914-26, Floor 5)",
      "Matisse: The Dance (I) (1909) + The Red Studio (1911, Floor 5)",
      "Mondrian: Composition with Red Blue and Yellow (1930, Floor 5)",
      "Henri Rousseau: The Dream (1910, Floor 5)",
      "Frida Kahlo: Self-Portrait with Cropped Hair (1940, Floor 5)",
      "Magritte: The Lovers (1928, Floor 5)",
      "Pollock: One: Number 31 (1950, Floor 4)",
      "Warhol: Gold Marilyn Monroe (1962) + 32 Campbell's Soup Cans (1962, Floor 4)",
      "Lichtenstein: Drowning Girl (1963, Floor 4)",
      "Newman: Vir Heroicus Sublimis (1950-51, Floor 4 — room-scale red painting)",
      "Eames Lounge Chair (1956, Floor 3 design)",
      "Picasso She-Goat + Calder + Maillol (Sculpture Garden, Floor 1)",
    ],
    routeDuration: "2.5 hours essential (Floor 5 → 4 → 3 → Sculpture Garden); 4+ hours including Floor 2 contemporary + Floor 6 special exhibition",
    lastVerified: "2026-05-12",
  },
  {
    id: "reina-sofia",
    name: "Museo Nacional Centro de Arte Reina Sofía",
    city: "Madrid",
    country: "ES",
    address: "C. de Santa Isabel 52, 28012 Madrid, Spain",
    geo: { lat: 40.4080, lng: -3.6948 },
    ticketStandard: 12,
    ticketReduced: 8,
    currency: "EUR",
    openingHours:
      "Mon, Wed-Sat 10:00–21:00; Sun 10:00–14:30 (early afternoon close); closed Tuesday. Free admission Mon + Wed-Sat 19:00–21:00 and Sun 12:30–14:30 (confirmed alive 2026, online slot still required). Paseo del Arte combo card €32.80 with Prado + Thyssen-Bornemisza.",
    closedDays: ["Tuesday", "January 1", "January 6", "May 1", "December 24", "December 25", "December 31"],
    url: "https://travel.art/reina-sofia-essentials/",
    summary:
      "Spain's national museum of 20th-century-and-after art, paired with the Prado as the Madrid duo (Prado pre-1881, Reina Sofía 1881-present). Picasso's *Guernica* (1937) is the gravitational centre — now in **Sala 206.06, Floor 2 Sabatini Building** (moved Nov 1995, has not moved during the 2023-28 rolling rehang). **Photo ban on Guernica LIFTED 1 September 2023 by Director Manuel Segade** (older guides still say it's prohibited). Surrounding rooms hold the deepest Spanish Surrealist + Cubist + Informalismo holdings anywhere — Miró Constellations, Dalí's The Great Masturbator + The Enigma of Hitler, Tàpies, Chillida, Oteiza. Building duality: 18th-century Sabatini hospital (1986 conversion) + Jean Nouvel 2005 glass-and-red extension. Estación del Arte metro (line 1) directly outside.",
    essentialWorks: [
      "Picasso: Guernica (1937, Sala 206.06, Floor 2 Sabatini)",
      "Picasso: preparatory studies for Guernica (surrounding rooms)",
      "Joan Miró: Constellations series + Painting on White Background (Sala 205-area)",
      "Salvador Dalí: The Great Masturbator (1929)",
      "Salvador Dalí: The Enigma of Hitler",
      "Antoni Tàpies: Forma negra sobre cuadrado gris (Floor 4)",
      "Eduardo Chillida: sculpture (Floor 4)",
      "Jorge Oteiza: Empty Box sculptures (Floor 4)",
      "Pablo Gargallo: El Profeta bronze",
      "Maria Blanchard: Spanish School of Paris paintings",
    ],
    routeDuration: "2 hours essential (Floor 2 Guernica + Picasso/Miró/Dalí → Floor 4 post-war Spanish); 3+ hours including Nouvel temporary exhibitions",
    lastVerified: "2026-05-12",
  },
  {
    id: "rijksmuseum",
    name: "Rijksmuseum",
    city: "Amsterdam",
    country: "NL",
    address: "Museumstraat 1, 1071 XX Amsterdam, Netherlands",
    geo: { lat: 52.3600, lng: 4.8852 },
    ticketStandard: 25,
    currency: "EUR",
    openingHours:
      "Daily 09:00–17:00 (last admission 16:30). Online-only timed-entry tickets — no walk-up sales. Museumkaart €75 + €7.50 starter (covers ~450 Dutch museums); I amsterdam City Card includes Rijksmuseum (NOT Van Gogh Museum).",
    closedDays: [],
    url: "https://travel.art/rijksmuseum-essentials/",
    summary:
      "Pierre Cuypers's 1885 Northern-Gothic-Revival building, restored 2003-2013 by Cruz y Ortiz (€375M, reopened 13 April 2013 by Queen Beatrix). Holds the world's deepest Dutch 17th-century 'Golden Age' painting collection plus medieval-to-19th-century holdings. 2.5-hour route Floor 2 Gallery of Honour first — Vermeer's *The Milkmaid* + *Woman Reading a Letter* + *The Little Street*, Rembrandt's *Jewish Bride* + *Syndics of the Drapers' Guild*, Frans Hals militia portraits, Jan Steen, Pieter de Hooch — climaxing at Rembrandt's *The Night Watch* (1642, 4.4×3.6m). **Operation Night Watch Phase 2 (varnish removal) ongoing through ~2027 inside the glass conservation chamber** — painting fully visible during work. Iconic cyclist-passable Atrium tunnel under the building. Asian Pavilion (separate Cruz y Ortiz building) included in main ticket.",
    essentialWorks: [
      "Rembrandt: The Night Watch (1642, Gallery of Honour Floor 2)",
      "Rembrandt: The Jewish Bride (~1665) + The Syndics of the Drapers' Guild (1662)",
      "Vermeer: The Milkmaid (~1660)",
      "Vermeer: Woman Reading a Letter (1663)",
      "Vermeer: The Little Street (1657-58)",
      "Frans Hals: militia portraits (Banquet of the Officers)",
      "Jan Steen: The Merry Family",
      "Jacob van Ruisdael: View of Haarlem with bleaching fields",
      "Pieter de Hooch: The Courtyard of a House in Delft (1658)",
      "Petronella Oortman's Doll House (1686-1710, Floor 1 Special Collections)",
      "Tilman Riemenschneider altarpieces (Floor 0)",
      "Lucas van Leyden: Tribute Money (Floor 0)",
      "Van Gogh: Self-Portrait (Floor 3 — the museum's only Van Gogh)",
    ],
    routeDuration: "2.5 hours essential (Gallery of Honour Floor 2 → Floor 1 Doll Houses → Floor 0 Middle Ages); 4+ hours including Asian Pavilion + Cuypers Library + 18-19th-century galleries",
    lastVerified: "2026-05-12",
  },
  {
    id: "van-gogh-museum",
    name: "Van Gogh Museum",
    city: "Amsterdam",
    country: "NL",
    address: "Museumplein 6, 1071 DJ Amsterdam, Netherlands",
    geo: { lat: 52.3584, lng: 4.8811 },
    ticketStandard: 25,
    ticketReduced: 6,
    currency: "EUR",
    openingHours:
      "Daily 09:00–18:00; Friday extended to 21:00. **Mandatory advance-booking timed-entry in force 2026 — no walk-up sales, no exceptions.** Museumkaart-holders still need a free €0 timed slot online. **I amsterdam City Card does NOT cover Van Gogh Museum since 1 June 2022** (tourist gotcha). **Photography permitted in permanent collection** without flash/tripod/selfie stick (legacy guides + AI answers say 'prohibited' — outdated).",
    closedDays: [],
    url: "https://travel.art/van-gogh-museum-essentials/",
    summary:
      "World's largest Van Gogh collection: 200+ paintings, 500+ drawings, 800+ letters, originally owned by the Van Gogh family and donated by Vincent's nephew + sister to form the museum 1973. Gerrit Rietveld 1973 main building + Hans van Heeswijk 2015 entrance pavilion (built from Kurokawa's posthumous drawings). The collection is organised chronologically by Van Gogh's life — walking floor 0→1→2 traces the entire arc from Brabant darkness to Auvers final canvases. 2-hour chronological route Floor 0 (*The Potato Eaters* 1885 Brabant) → Floor 1 Paris+Arles (Sunflowers F458 fourth-version repetition, *Bedroom in Arles* second version 1888, Self-Portrait with Grey Felt Hat, *The Yellow House*) → Floor 2 Saint-Rémy+Auvers (*Wheatfield with Crows* July 1890, *Almond Blossom*). Sunflowers F458 on display in *Yellow: Beyond Van Gogh's Colour* 13 Feb–17 May 2026. Audio-guide ~€3.50.",
    essentialWorks: [
      "The Potato Eaters (1885, Floor 0 Brabant)",
      "Self-Portrait with Grey Felt Hat (1887, Floor 1 Paris)",
      "The Bedroom (1888, second version, Floor 1 Arles)",
      "Sunflowers F458 (1889, fourth-version repetition, Floor 1)",
      "The Yellow House (1888, Floor 1)",
      "The Harvest at La Crau (1888, Floor 1)",
      "Wheatfield with Crows (July 1890, Floor 2 Auvers)",
      "Almond Blossom (1890, Floor 2 Saint-Rémy → Auvers)",
      "Wheatfield with Reaper (1889, Floor 2 Saint-Rémy)",
      "Roses (1890, Floor 2)",
      "Letters to Theo (Floor 3 Letters & Influences)",
      "Gauguin + Bernard + Anquetin works that influenced Van Gogh (Floor 3)",
    ],
    routeDuration: "2 hours essential (chronological bottom-up Floor 0 → 1 → 2); 3+ hours including Floor 3 Letters & Influences + Kurokawa Wing special exhibitions",
    lastVerified: "2026-05-12",
  },
  {
    id: "tate-modern",
    name: "Tate Modern",
    city: "London",
    country: "GB",
    address: "Bankside, London SE1 9TG, UK",
    geo: { lat: 51.5076, lng: -0.0994 },
    ticketStandard: 0,
    currency: "GBP",
    openingHours:
      "Sun–Thu 10:00–18:00; Fri–Sat 10:00–21:00. **Free permanent collection admission** (£5 donation suggested). Special exhibitions paid separately (typical range £18–22 in 2026).",
    closedDays: ["December 24-26", "January 1"],
    url: "https://travel.art/tate-modern-essentials/",
    summary:
      "World's most-visited modern art museum (5.9M visitors/year pre-pandemic). Sir Giles Gilbert Scott's Bankside Power Station (1947-1963) converted to museum by Herzog & de Meuron 1995-2000; Blavatnik Building extension (Herzog & de Meuron 2016) added 60% more space. Free permanent collection is the policy differentiator from MoMA/Pompidou. Thematic (not chronological) display sets it apart from MoMA's chronological narrative. 2.5-hour route Natalie Bell Building Level 4 first for **Rothko's Seagram Murals** (1958-59 commission gifted to Tate 1969 with installation conditions — dim light, low height, intimate scale) → Picasso *Weeping Woman* + *Three Dancers* → Surrealism (Dalí *Lobster Telephone*, *Metamorphosis of Narcissus*) → Pop Art (Lichtenstein *Whaam!*) → Turbine Hall current Hyundai Commission → Blavatnik Level 10 viewing terrace (London skyline + St Paul's, reopened post-Feb 2023 Supreme Court ruling with frosted south-side screening panels). **2026 Hyundai Commission: Tarek Atoui sound installation 13 October 2026 – 11 April 2027** (opens with Frieze London week). 2026 exhibitions: Tracey Emin (26 Feb – 31 Aug), Julio Le Parc (11 Jun – 3 May 2027), Frida Kahlo (25 Jun – 4 Jan 2027), Ana Mendieta (9 Jul – 10 Jan 2027), Light and Magic (14 Oct – 21 Feb 2027). Tate Boat £9.50 contactless one-way to Tate Britain.",
    essentialWorks: [
      "Rothko: Seagram Murals (1958-59, 9-panel room, Natalie Bell Building Level 4 'In the Studio')",
      "Picasso: Weeping Woman (1937)",
      "Picasso: The Three Dancers (1925)",
      "Salvador Dalí: Lobster Telephone (1936) + Metamorphosis of Narcissus (1937)",
      "Matisse: The Snail (1953) cut-out",
      "Roy Lichtenstein: Whaam! (1963)",
      "Jackson Pollock: Yellow Islands (1952)",
      "Anish Kapoor: Ishi's Light",
      "Hyundai Commission 2026: Tarek Atoui sound installation (Turbine Hall, 13 Oct 2026 – 11 Apr 2027)",
      "Level 10 viewing terrace — 360° London panorama (Blavatnik Building)",
    ],
    routeDuration: "2.5 hours essential (Level 4 Rothko + Picasso + Surrealism + Pop → Turbine Hall → Level 10); 4+ hours including Blavatnik Building contemporary + Tanks performance spaces",
    lastVerified: "2026-05-12",
  },
];

export const META = {
  name: "travel.art",
  version: "1.3.0",
  description:
    "Model Context Protocol server for travel.art — exposes structured art-tourism data (events, museums, itineraries) to AI agents.",
  homepage: "https://travel.art/",
  contact: "mcp@travel.art",
  lastBuilt: "2026-05-12",
  catalogue: {
    events: 6,
    museums: 12,
  },
};
