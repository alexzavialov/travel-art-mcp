# mcp/

Model Context Protocol server for travel.art. Live at **https://mcp.travel.art/**.

## What it does

Exposes travel.art's art-tourism data to AI agents over the Model Context Protocol (Streamable HTTP transport, request/response mode).

Three tools as of v1:

- **`find_art_events`** — biennales, art fairs, festivals with dates, venues, ticket info, summaries, links to full guides
- **`find_museum_guide`** — major museums (Louvre, Vatican, Uffizi) with 2026 ticket info, opening hours, essential works
- **`recommend_art_trip`** — city-based itinerary using only published travel.art content

Catalogue v1.6.0: 23 events + 12 museums + 6 layover itineraries (synced from the published calendar and cornerstone articles; event facts re-verified 2026-09-14).

## Stack

```
mcp/
  src/
    index.ts        # Worker entry, MCP HTTP protocol (JSON-RPC 2.0)
    tools.ts        # Tool definitions + handlers
    data.ts         # Static dataset (typed)
  scripts/          # (Future) sync from content/<slug>/index.md frontmatter
  data/             # (Future) sync output
  package.json
  wrangler.toml
  tsconfig.json
```

- **Runtime:** Cloudflare Workers, free tier (100k requests/day)
- **Language:** TypeScript
- **Transport:** MCP Streamable HTTP (request/response, no SSE — single-shot tool calls)
- **Protocol version:** `2025-03-26`
- **Auth:** None (public read-only)

## Use it

### Health check

```bash
curl https://mcp.travel.art/health
```

### Initialize handshake

```bash
curl -X POST https://mcp.travel.art/ \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-03-26","capabilities":{},"clientInfo":{"name":"my-client","version":"0.1"}}}'
```

### List tools

```bash
curl -X POST https://mcp.travel.art/ \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/list"}'
```

### Call a tool

```bash
curl -X POST https://mcp.travel.art/ \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"find_art_events","arguments":{"country":"IT"}}}'
```

### Claude Desktop config

Add to `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS):

```json
{
  "mcpServers": {
    "travel-art": {
      "url": "https://mcp.travel.art/"
    }
  }
}
```

## Deploy

```bash
cd mcp
npm install
npx wrangler deploy
```

(Requires `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` in env or wrangler login.)

The Worker is bound to the `mcp.travel.art` custom domain via Cloudflare API (one-time setup; see DECISIONS.md 2026-05-08).

## Future (v2 backlog)

- **Build-time data extraction** — replace hand-curated `data.ts` with a sync script that reads `content/<slug>/index.md` frontmatter (events from `Event`-typed schema, museums from `Place`-typed schema). New cornerstones flow into MCP automatically.
- **More tools** — `find_artist_residencies`, `find_collateral_events`, `today_in_art_tourism` (calendar of what's open today across our catalogue).
- **Authentication tier** — currently public read-only. If commercial clients want high-volume programmatic access, add API-key tier under `Account API Tokens`.
- **Streaming responses** — for long itinerary recommendations, switch to SSE.
- **Rate limiting** — per-IP throttle (currently relies on Cloudflare's own DDoS protection).
- **Schema versioning** — `mcp.travel.art/v1`, `/v2` URL versioning when we break compatibility.

See [.claude/agents/mcp-architect.md](../.claude/agents/mcp-architect.md) for the full agent operating spec.
