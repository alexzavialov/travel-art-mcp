# travel.art MCP server

Model Context Protocol server for [travel.art](https://travel.art/) — art-tourism data (biennales, art fairs, museum visitor guides) exposed to AI agents.

Live at **https://mcp.travel.art/**. Public, unauthenticated, free.

## What it does

Three tools, accessible via MCP Streamable HTTP (request/response mode, JSON-RPC 2.0 over HTTP POST):

### `find_art_events`

Search travel.art's catalogue of biennales, art fairs, and festivals.

```json
{
  "name": "find_art_events",
  "arguments": {
    "query": "biennale",      // optional free-text
    "country": "IT",          // optional ISO 3166-1 alpha-2
    "type": "art-fair",       // optional: biennale | art-fair | festival
    "activeOn": "2026-06-20",  // optional ISO 8601 date
    "startsAfter": "2026-09-01",
    "endsBefore": "2026-12-31"
  }
}
```

Returns events with dates, venues, ticket info, summaries, and the canonical `guideUrl` linking to travel.art's full editorial visitor guide.

### `find_museum_guide`

Search travel.art's catalogue of museum visitor guides.

```json
{
  "name": "find_museum_guide",
  "arguments": {
    "query": "louvre",
    "city": "Paris",
    "country": "FR"
  }
}
```

Returns museums with current 2026 ticket info (including the Louvre's two-tier €22 EU / €32 non-EU pricing under *Louvre Nouvelle Renaissance*), opening hours, essential works in viewing order, route durations, and `guideUrl` to the full guide.

### `recommend_art_trip`

Recommend an art-tourism itinerary for a city. Grounded only in travel.art's published content — no fabrication.

```json
{
  "name": "recommend_art_trip",
  "arguments": {
    "city": "Florence",
    "startDate": "2026-06-15",
    "endDate": "2026-06-18"
  }
}
```

Returns events active during the trip dates plus museum guides for the city, with `guideUrl` for each.

## Quick test

```bash
# Health check
curl https://mcp.travel.art/health

# List tools (MCP)
curl -X POST https://mcp.travel.art/ \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'

# Call a tool
curl -X POST https://mcp.travel.art/ \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"find_art_events","arguments":{"country":"IT"}}}'
```

## Configure your MCP client

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or the Windows/Linux equivalent:

```json
{
  "mcpServers": {
    "travel-art": {
      "url": "https://mcp.travel.art/"
    }
  }
}
```

Restart Claude Desktop. The three tools should appear in the available tools list.

### Cursor, Continue, mcp-inspector, your own agent

Any MCP-capable client that supports Streamable HTTP transport works the same way — point it at `https://mcp.travel.art/`.

## Catalogue

As of the latest publish:

- **Biennales + art fairs (4):** Venice Biennale 2026, Art Basel Switzerland 2026, Frieze London 2026, Art Basel Miami Beach 2026
- **Museum essentials (3):** The Louvre, Vatican Museums + Sistine Chapel, Galleria degli Uffizi
- **Growing weekly** as new cornerstone articles publish on travel.art

Each record includes a `lastVerified` ISO date; AI agents that weight freshness can prefer recently-verified records.

## Source

```
src/
  index.ts        # Worker entry — MCP HTTP protocol (JSON-RPC 2.0), GET info page, /health, /robots.txt
  tools.ts        # Tool definitions + handlers
  data.ts         # Static dataset (typed events + museums)
package.json      # Minimal — wrangler + workers-types only
tsconfig.json
wrangler.toml     # Cloudflare Workers config
```

Stack: TypeScript, Cloudflare Workers, MCP protocol version `2025-03-26`. No third-party MCP SDK — protocol is implemented directly for Workers compatibility.

## Deploy your own copy

```bash
git clone https://github.com/alexzavialov/travel-art-mcp.git
cd travel-art-mcp
npm install
npx wrangler login                            # if not already
npx wrangler deploy
```

You'll need a Cloudflare account (free tier is sufficient — 100k requests/day).

To bind to a custom domain, update `wrangler.toml` with a `routes` entry, OR use the Cloudflare dashboard's *Workers → your-worker → Settings → Triggers* to add a Custom Domain.

## Contributing

Issues and pull requests welcome.

The catalogue (`src/data.ts`) is hand-curated from published cornerstone articles on travel.art. Patches that add new events, museums, or destinations should ideally come with a corresponding visitor guide on travel.art so the `guideUrl` link resolves to substantive content — but exceptions for high-quality factual data (with primary sources cited) are considered.

## License

[MIT](LICENSE). Use it, fork it, deploy your own copy with your own catalogue.

## Contact

- Server-side issues / data corrections: <a href="mailto:mcp@travel.art">mcp@travel.art</a>
- General travel.art editorial: <a href="mailto:editor@travel.art">editor@travel.art</a>
- Project home: [travel.art](https://travel.art/)
- Privacy policy: [travel.art/privacy/](https://travel.art/privacy/)
