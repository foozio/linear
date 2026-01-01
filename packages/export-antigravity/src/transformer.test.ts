import { LinearData } from "./exporter.js";
import { describe, it, expect } from "vitest";
import { transformData } from "./transformer.js";

describe("transformer", () => {
  it("should transform Linear data to Antigravity format", () => {
    const linearData = {
      issues: [
        {
          id: "i1",
          title: "Issue 1",
          description: "Desc 1",
          state: { name: "Todo" },
          assignee: { id: "u1" },
          project: { id: "p1" },
          createdAt: "2023-01-01",
          updatedAt: "2023-01-02",
        },
      ],
      projects: [
        {
          id: "p1",
          name: "Project 1",
          description: "Project Desc 1",
          createdAt: "2023-01-01",
        },
      ],
      users: [
        {
          id: "u1",
          name: "User 1",
          email: "user1@test.com",
        },
      ],
    };

    const transformed = transformData(linearData as unknown as LinearData);

    expect(transformed.issues[0].id).toBe("i1");
    expect(transformed.issues[0].status).toBe("Todo");
    expect(transformed.projects[0].name).toBe("Project 1");
    expect(transformed.users[0].email).toBe("user1@test.com");
  });
});
