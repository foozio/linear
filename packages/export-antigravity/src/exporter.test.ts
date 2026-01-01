import { LinearClient } from "@linear/sdk";
import { describe, it, expect, vi } from "vitest";
import { fetchData } from "./exporter.js";

describe("exporter", () => {
  it("should fetch issues, projects and users", async () => {
    const mockClient = {
      issues: vi.fn().mockResolvedValue({ nodes: [{ id: "1", title: "Issue 1" }] }),
      projects: vi.fn().mockResolvedValue({ nodes: [{ id: "p1", name: "Project 1" }] }),
      users: vi.fn().mockResolvedValue({ nodes: [{ id: "u1", name: "User 1" }] }),
    };

    const data = await fetchData(mockClient as unknown as LinearClient);

    expect(data.issues).toHaveLength(1);
    expect(data.projects).toHaveLength(1);
    expect(data.users).toHaveLength(1);
  });
});
