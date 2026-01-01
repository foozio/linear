import type { IncomingMessage, ServerResponse } from "http";
import { describe, it, expect, vi } from "vitest";
import { LinearWebhookClient } from "../webhooks/index.js";
import crypto from "crypto";

describe("LinearWebhookHandler", () => {
  it("should handle Node.js request correctly", async () => {
    const secret = "SECRET";
    const client = new LinearWebhookClient(secret);
    const handler = client.createHandler();

    const payload = { type: "Issue", action: "create", webhookTimestamp: Date.now() };
    const rawBody = Buffer.from(JSON.stringify(payload));
    const signature = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");

    const req = {
      method: "POST",
      headers: {
        "linear-signature": signature,
      },
      [Symbol.asyncIterator]: async function* () {
        yield rawBody;
      },
    };

    const res = {
      statusCode: 0,
      end: vi.fn(),
    };

    const eventHandler = vi.fn();
    handler.on("Issue", eventHandler);

    await handler(req as unknown as IncomingMessage, res as unknown as ServerResponse);

    expect(res.statusCode).toBe(200);
    expect(eventHandler).toHaveBeenCalledWith(expect.objectContaining(payload));
  });

  it("should handle Fetch API request correctly", async () => {
    const secret = "SECRET";
    const client = new LinearWebhookClient(secret);
    const handler = client.createHandler();

    const payload = { type: "Issue", action: "create", webhookTimestamp: Date.now() };
    const rawBody = Buffer.from(JSON.stringify(payload));
    const signature = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");

    const req = new Request("http://localhost", {
      method: "POST",
      headers: {
        "linear-signature": signature,
      },
      body: rawBody,
    });

    const eventHandler = vi.fn();
    handler.on("Issue", eventHandler);

    const res = await handler(req);

    expect((res as Response).status).toBe(200);
    expect(eventHandler).toHaveBeenCalledWith(expect.objectContaining(payload));
  });

  it("should reject non-POST requests", async () => {
    const client = new LinearWebhookClient("SECRET");
    const handler = client.createHandler();
    const req = new Request("http://localhost", { method: "GET" });
    const res = await handler(req);
    expect((res as Response).status).toBe(405);
  });

  it("should reject requests without signature", async () => {
    const client = new LinearWebhookClient("SECRET");
    const handler = client.createHandler();
    const req = new Request("http://localhost", { method: "POST" });
    const res = await handler(req);
    expect((res as Response).status).toBe(400);
  });

  it("should reject requests with invalid signature", async () => {
    const client = new LinearWebhookClient("SECRET");
    const handler = client.createHandler();
    const req = new Request("http://localhost", {
      method: "POST",
      headers: { "linear-signature": "invalid" },
      body: "{}",
    });
    const res = await handler(req);
    expect((res as Response).status).toBe(400);
  });

  it("should support removing listeners", async () => {
    const secret = "SECRET";
    const client = new LinearWebhookClient(secret);
    const handler = client.createHandler();

    const payload = { type: "Issue", action: "create", webhookTimestamp: Date.now() };
    const rawBody = Buffer.from(JSON.stringify(payload));
    const signature = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");

    const req = new Request("http://localhost", {
      method: "POST",
      headers: { "linear-signature": signature },
      body: rawBody,
    });

    const eventHandler = vi.fn();
    handler.on("Issue", eventHandler);
    handler.off("Issue", eventHandler);

    await handler(req);

    expect(eventHandler).not.toHaveBeenCalled();
  });

  it("should support removing all listeners", async () => {
    const secret = "SECRET";
    const client = new LinearWebhookClient(secret);
    const handler = client.createHandler();

    const payload = { type: "Issue", action: "create", webhookTimestamp: Date.now() };
    const rawBody = Buffer.from(JSON.stringify(payload));
    const signature = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");

    const req = new Request("http://localhost", {
      method: "POST",
      headers: { "linear-signature": signature },
      body: rawBody,
    });

    const eventHandler = vi.fn();
    handler.on("Issue", eventHandler);
    handler.removeAllListeners();

    await handler(req);

    expect(eventHandler).not.toHaveBeenCalled();
  });
});
