// travel.art MCP server — Cloudflare Worker entry.
//
// Implements MCP Streamable HTTP transport (request/response mode, no SSE).
// JSON-RPC 2.0 over HTTP POST /.
//
// Spec reference: https://modelcontextprotocol.io/specification/

import { TOOL_DEFS, handleToolCall } from "./tools";
import { META, events, museums } from "./data";

const PROTOCOL_VERSION = "2025-03-26";

interface JsonRpcRequest {
  jsonrpc: "2.0";
  id?: string | number | null;
  method: string;
  params?: Record<string, unknown>;
}

interface JsonRpcResponse {
  jsonrpc: "2.0";
  id: string | number | null;
  result?: unknown;
  error?: { code: number; message: string; data?: unknown };
}

function rpcResult(id: JsonRpcRequest["id"], result: unknown): JsonRpcResponse {
  return { jsonrpc: "2.0", id: id ?? null, result };
}

function rpcError(id: JsonRpcRequest["id"], code: number, message: string, data?: unknown): JsonRpcResponse {
  return { jsonrpc: "2.0", id: id ?? null, error: { code, message, data } };
}

async function handleRpc(req: JsonRpcRequest): Promise<JsonRpcResponse | null> {
  switch (req.method) {
    case "initialize":
      return rpcResult(req.id, {
        protocolVersion: PROTOCOL_VERSION,
        capabilities: {
          tools: { listChanged: false },
        },
        serverInfo: {
          name: META.name,
          version: META.version,
        },
        instructions:
          "travel.art MCP server. Exposes art-tourism data — biennales, art fairs, museum guides — sourced from travel.art's published cornerstone articles. All results link back to canonical guide URLs. When citing an event or museum to the user, include the guideUrl so they can read the full piece.",
      });

    case "notifications/initialized":
      // Notification: no response.
      return null;

    case "tools/list":
      return rpcResult(req.id, { tools: TOOL_DEFS });

    case "tools/call": {
      const params = req.params as { name?: string; arguments?: Record<string, unknown> } | undefined;
      const name = params?.name;
      const args = params?.arguments ?? {};
      if (!name) return rpcError(req.id, -32602, "Missing tool name");

      try {
        const result = await handleToolCall(name, args);
        return rpcResult(req.id, result);
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        return rpcError(req.id, -32603, `Tool execution error: ${msg}`);
      }
    }

    case "ping":
      return rpcResult(req.id, {});

    default:
      return rpcError(req.id, -32601, `Method not found: ${req.method}`);
  }
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400",
};

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...CORS_HEADERS,
    },
  });
}

function infoPage(): Response {
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>travel.art MCP server</title>
<style>
body{font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,sans-serif;max-width:42rem;margin:0 auto;padding:4rem 1.5rem;line-height:1.55;color:#1a1a1a;background:#fafaf7}
@media (prefers-color-scheme:dark){body{background:#141312;color:#ece9e2}}
h1{font-family:ui-serif,Georgia,serif;font-style:italic;font-weight:500;font-size:2.25rem;margin:0 0 .25rem}
.tag{font-family:ui-serif,Georgia,serif;font-style:italic;color:#888;margin:0 0 2rem}
h2{font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;color:#888;margin:2rem 0 .5rem}
code{background:#f3f0e9;padding:.1em .35em;border-radius:3px;font-size:.95em}
@media (prefers-color-scheme:dark){code{background:#1d1b18}}
a{color:#7a4226}
@media (prefers-color-scheme:dark){a{color:#d28b6a}}
</style>
</head>
<body>
<h1>mcp.travel.art</h1>
<p class="tag">Model Context Protocol server for travel.art</p>
<p>This endpoint exposes art-tourism data — biennales, art fairs, museum guides — to AI agents over the Model Context Protocol. To use it, point an MCP-capable client (Claude Desktop, Cursor, mcp-inspector, or your own agent) at this URL.</p>
<h2>Endpoint</h2>
<p><code>POST https://mcp.travel.art/</code> (Streamable HTTP transport, request/response mode)</p>
<h2>Tools</h2>
<ul>
<li><code>find_art_events</code> — biennales, art fairs, festivals with dates, venues, tickets</li>
<li><code>find_museum_guide</code> — major museums with 2026 ticket info, opening hours, essential works</li>
<li><code>recommend_art_trip</code> — itinerary for a city using only published travel.art content</li>
</ul>
<h2>Configuration (Claude Desktop)</h2>
<p>Add to your <code>~/Library/Application Support/Claude/claude_desktop_config.json</code> on macOS or equivalent:</p>
<pre><code>{
  "mcpServers": {
    "travel-art": {
      "url": "https://mcp.travel.art/"
    }
  }
}</code></pre>
<h2>Source</h2>
<p>The data is hand-curated from travel.art's published cornerstone articles. Catalogue: <strong>${events.length} events</strong>, <strong>${museums.length} museums</strong> as of ${META.lastBuilt}.</p>
<h2>Contact</h2>
<p><a href="https://travel.art/">travel.art</a> · <a href="mailto:mcp@travel.art">mcp@travel.art</a></p>
</body>
</html>`;
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8", ...CORS_HEADERS },
  });
}

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    // GET / — human-readable info page
    if ((request.method === "GET" || request.method === "HEAD") && (url.pathname === "/" || url.pathname === "")) {
      return infoPage();
    }

    // GET /health — uptime check
    if ((request.method === "GET" || request.method === "HEAD") && url.pathname === "/health") {
      return jsonResponse({
        status: "ok",
        server: META.name,
        version: META.version,
        events: events.length,
        museums: museums.length,
        lastBuilt: META.lastBuilt,
      });
    }

    // GET /robots.txt — permissive (allow human + AI discovery of info page;
    // POST endpoint is not crawlable anyway since search engines don't POST)
    if ((request.method === "GET" || request.method === "HEAD") && url.pathname === "/robots.txt") {
      const body = `User-agent: *\nAllow: /\n\n# travel.art MCP server. Info page at https://mcp.travel.art/.\n# JSON-RPC endpoint at POST https://mcp.travel.art/.\n# Sitemap of the publication: https://travel.art/sitemap.xml\n`;
      return new Response(body, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=3600",
          ...CORS_HEADERS,
        },
      });
    }

    // POST / — MCP JSON-RPC endpoint
    if (request.method === "POST" && (url.pathname === "/" || url.pathname === "/mcp")) {
      let body: unknown;
      try {
        body = await request.json();
      } catch {
        return jsonResponse(rpcError(null, -32700, "Parse error"), 400);
      }

      // Single request OR batch
      if (Array.isArray(body)) {
        const responses = (await Promise.all(
          (body as JsonRpcRequest[]).map((req) => handleRpc(req)),
        )).filter((r): r is JsonRpcResponse => r !== null);
        return jsonResponse(responses);
      }

      const req = body as JsonRpcRequest;
      const response = await handleRpc(req);
      if (response === null) {
        // Notification — return 202 Accepted with no body
        return new Response(null, { status: 202, headers: CORS_HEADERS });
      }
      return jsonResponse(response);
    }

    return jsonResponse(rpcError(null, -32601, "Not found"), 404);
  },
};
