#!/usr/bin/env node
// Local stdio MCP server for travel.art.
//
// Exposes the same three tools and the same curated art-tourism dataset as the
// Cloudflare Worker entry (src/index.ts), but over the MCP stdio transport so
// the server can run as a local MCP server (Claude Desktop, Cursor, etc.) and
// so directory evaluators can introspect it without hitting the hosted endpoint.
//
// Hosted Streamable-HTTP endpoint: https://mcp.travel.art/
// This stdio variant is functionally identical.

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { TOOL_DEFS, handleToolCall } from "./tools";
import { META } from "./data";

const server = new Server(
  { name: META.name, version: META.version },
  {
    capabilities: { tools: { listChanged: false } },
    instructions:
      "travel.art MCP server. Exposes art-tourism data — biennales, art fairs, museum guides — sourced from travel.art's published cornerstone articles. All results link back to canonical guide URLs.",
  },
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: TOOL_DEFS,
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const result = await handleToolCall(
    request.params.name,
    (request.params.arguments ?? {}) as Record<string, unknown>,
  );
  return { content: result.content, isError: result.isError };
});

const transport = new StdioServerTransport();
await server.connect(transport);
console.error("travel.art MCP stdio server running");
