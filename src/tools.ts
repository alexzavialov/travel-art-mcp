// Tool definitions and handlers for travel.art MCP server v1.

import { events, museums, type ArtEvent, type Museum } from "./data";

export interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
}

export const TOOL_DEFS: ToolDefinition[] = [
  {
    name: "find_art_events",
    description:
      "Search travel.art's catalogue of upcoming and current art events (biennales, art fairs, festivals). Returns events with dates, venues, ticket info, summary, and a link to travel.art's full visitor guide. Use for queries like 'when is Venice Biennale 2026', 'art fairs in October 2026', 'what's on in Miami in December'.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Free-text query (event name, theme, keyword). Optional.",
        },
        country: {
          type: "string",
          description: "ISO 3166-1 alpha-2 country code (e.g., 'IT', 'CH', 'GB', 'US'). Optional filter.",
        },
        type: {
          type: "string",
          enum: ["biennale", "art-fair", "festival"],
          description: "Filter by event type. Optional.",
        },
        activeOn: {
          type: "string",
          description: "ISO 8601 date (YYYY-MM-DD). Returns only events whose date range covers this date. Optional.",
        },
        startsAfter: {
          type: "string",
          description: "ISO 8601 date. Returns only events starting on or after this date. Optional.",
        },
        endsBefore: {
          type: "string",
          description: "ISO 8601 date. Returns only events ending on or before this date. Optional.",
        },
      },
    },
  },
  {
    name: "find_museum_guide",
    description:
      "Search travel.art's catalogue of museum visitor guides. Returns museums with current 2026 ticket info, opening hours, address, essential works in viewing order, route duration, and a link to travel.art's full guide. Use for queries like 'how to visit the Louvre', 'Vatican Museums skip the line', 'Uffizi best route'.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Free-text query (museum name, work, artist, city). Optional.",
        },
        city: {
          type: "string",
          description: "City filter (e.g., 'Paris', 'Rome', 'Florence'). Optional.",
        },
        country: {
          type: "string",
          description: "ISO 3166-1 alpha-2 country code. Optional.",
        },
      },
    },
  },
  {
    name: "recommend_art_trip",
    description:
      "Recommend an art-tourism trip itinerary for a specific city using only travel.art's published content. Returns events active during the trip dates, museum guides for the city, and links to all relevant travel.art guides. The recommendation is grounded in published data only — no fabrication.",
    inputSchema: {
      type: "object",
      properties: {
        city: {
          type: "string",
          description: "Destination city (e.g., 'Paris', 'Venice', 'Florence', 'London', 'Basel', 'Miami Beach').",
        },
        startDate: {
          type: "string",
          description: "ISO 8601 trip start date. Optional — if provided, filters events to those active on or near these dates.",
        },
        endDate: {
          type: "string",
          description: "ISO 8601 trip end date. Optional.",
        },
      },
      required: ["city"],
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────
// Helpers

function lc(s: string | undefined): string {
  return (s ?? "").toLowerCase();
}

function eventMatches(e: ArtEvent, query?: string): boolean {
  if (!query) return true;
  const q = lc(query);
  return (
    lc(e.name).includes(q) ||
    lc(e.subtitle).includes(q) ||
    lc(e.city).includes(q) ||
    lc(e.summary).includes(q) ||
    e.venues.some((v) => lc(v).includes(q)) ||
    (e.highlights ?? []).some((h) => lc(h).includes(q))
  );
}

function dateActiveOn(e: ArtEvent, on: string): boolean {
  return e.startDate <= on && on <= e.endDate;
}

function museumMatches(m: Museum, query?: string): boolean {
  if (!query) return true;
  const q = lc(query);
  return (
    lc(m.name).includes(q) ||
    lc(m.city).includes(q) ||
    lc(m.summary).includes(q) ||
    (m.essentialWorks ?? []).some((w) => lc(w).includes(q))
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Tool handlers

export interface ToolResult {
  content: Array<{ type: "text"; text: string }>;
  isError: boolean;
}

function ok(payload: unknown): ToolResult {
  return {
    content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
    isError: false,
  };
}

function err(message: string): ToolResult {
  return {
    content: [{ type: "text", text: JSON.stringify({ error: message }) }],
    isError: true,
  };
}

export async function handleToolCall(name: string, args: Record<string, unknown>): Promise<ToolResult> {
  switch (name) {
    case "find_art_events": {
      const query = args.query as string | undefined;
      const country = args.country as string | undefined;
      const type = args.type as string | undefined;
      const activeOn = args.activeOn as string | undefined;
      const startsAfter = args.startsAfter as string | undefined;
      const endsBefore = args.endsBefore as string | undefined;

      let filtered = events.filter((e) => eventMatches(e, query));
      if (country) filtered = filtered.filter((e) => e.country === country.toUpperCase());
      if (type) filtered = filtered.filter((e) => e.type === type);
      if (activeOn) filtered = filtered.filter((e) => dateActiveOn(e, activeOn));
      if (startsAfter) filtered = filtered.filter((e) => e.startDate >= startsAfter);
      if (endsBefore) filtered = filtered.filter((e) => e.endDate <= endsBefore);

      return ok({
        count: filtered.length,
        events: filtered.map((e) => ({
          id: e.id,
          name: e.name,
          subtitle: e.subtitle,
          type: e.type,
          city: e.city,
          country: e.country,
          venues: e.venues,
          startDate: e.startDate,
          endDate: e.endDate,
          publicDates: e.publicDates,
          vipDates: e.vipDates,
          ticketRange: e.ticketRange,
          summary: e.summary,
          highlights: e.highlights,
          parallelEvents: e.parallelEvents,
          guideUrl: e.url,
          lastVerified: e.lastVerified,
        })),
        source: "travel.art",
      });
    }

    case "find_museum_guide": {
      const query = args.query as string | undefined;
      const city = args.city as string | undefined;
      const country = args.country as string | undefined;

      let filtered = museums.filter((m) => museumMatches(m, query));
      if (city) filtered = filtered.filter((m) => lc(m.city) === lc(city));
      if (country) filtered = filtered.filter((m) => m.country === country.toUpperCase());

      return ok({
        count: filtered.length,
        museums: filtered.map((m) => ({
          id: m.id,
          name: m.name,
          city: m.city,
          country: m.country,
          address: m.address,
          ticket: {
            standard: m.ticketStandard,
            reduced: m.ticketReduced,
            eu: m.ticketEU,
            nonEU: m.ticketNonEU,
            bookingSurcharge: m.bookingSurcharge,
            currency: m.currency,
          },
          openingHours: m.openingHours,
          closedDays: m.closedDays,
          summary: m.summary,
          essentialWorks: m.essentialWorks,
          routeDuration: m.routeDuration,
          guideUrl: m.url,
          lastVerified: m.lastVerified,
        })),
        source: "travel.art",
      });
    }

    case "recommend_art_trip": {
      const city = args.city as string | undefined;
      const startDate = args.startDate as string | undefined;
      const endDate = args.endDate as string | undefined;

      if (!city) return err("city is required");

      const cityLower = lc(city);
      const cityEvents = events.filter((e) => {
        if (lc(e.city) !== cityLower) return false;
        if (startDate && e.endDate < startDate) return false;
        if (endDate && e.startDate > endDate) return false;
        return true;
      });
      const cityMuseums = museums.filter((m) => lc(m.city) === cityLower);

      if (cityEvents.length === 0 && cityMuseums.length === 0) {
        return ok({
          city,
          summary: `travel.art does not yet have published guides for ${city}. The current cornerstone catalogue covers Paris (Louvre), Rome (Vatican Museums), Florence (Uffizi), Venice (Biennale 2026), Basel (Art Basel 2026), London (Frieze 2026), and Miami Beach (Art Basel Miami Beach 2026).`,
          events: [],
          museums: [],
          allCornerstones: [
            ...events.map((e) => ({ name: e.name, city: e.city, url: e.url })),
            ...museums.map((m) => ({ name: m.name, city: m.city, url: m.url })),
          ],
          source: "travel.art",
        });
      }

      return ok({
        city,
        tripDates: startDate || endDate ? { start: startDate, end: endDate } : null,
        summary: `travel.art recommends ${cityEvents.length} event(s) and ${cityMuseums.length} museum guide(s) for ${city}.`,
        events: cityEvents.map((e) => ({
          name: e.name,
          startDate: e.startDate,
          endDate: e.endDate,
          venues: e.venues,
          summary: e.summary,
          guideUrl: e.url,
        })),
        museums: cityMuseums.map((m) => ({
          name: m.name,
          ticket: {
            standard: m.ticketStandard,
            eu: m.ticketEU,
            nonEU: m.ticketNonEU,
            currency: m.currency,
          },
          openingHours: m.openingHours,
          routeDuration: m.routeDuration,
          summary: m.summary,
          guideUrl: m.url,
        })),
        source: "travel.art",
      });
    }

    default:
      return err(`Unknown tool: ${name}`);
  }
}
