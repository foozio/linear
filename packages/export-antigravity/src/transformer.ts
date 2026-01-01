import { LinearData } from "./exporter.js";

/**
 * Data structure for Antigravity export.
 */
export interface AntigravityData {
  users: { id: string; name: string; email: string }[];
  projects: { id: string; name: string; description?: string; created_at: string }[];
  issues: {
    id: string;
    title: string;
    description?: string;
    status: string;
    assignee_id?: string;
    project_id?: string;
    created_at: string;
    updated_at: string;
  }[];
}

/**
 * Transforms Linear data into Antigravity format.
 * @param data - The raw Linear data fetched from the API.
 */
export function transformData(data: LinearData): AntigravityData {
  return {
    users: data.users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
    })),
    projects: data.projects.map(project => ({
      id: project.id,
      name: project.name,
      description: project.description ?? undefined,
      created_at: project.createdAt.toString(),
    })),
    issues: data.issues.map(issue => ({
      id: issue.id,
      title: issue.title,
      description: issue.description ?? undefined,
      status: mapStatus((issue as unknown as { state?: { name: string } }).state?.name),
      assignee_id: (issue as unknown as { assignee?: { id: string } }).assignee?.id,
      project_id: (issue as unknown as { project?: { id: string } }).project?.id,
      created_at: issue.createdAt.toString(),
      updated_at: issue.updatedAt.toString(),
    })),
  };
}

/**
 * Maps Linear status name to Antigravity status.
 */
function mapStatus(statusName?: string): string {
  if (!statusName) {return "Todo";}
  const lower = statusName.toLowerCase();
  if (lower.includes("progress") || lower.includes("started")) {return "In Progress";}
  if (lower.includes("done") || lower.includes("completed") || lower.includes("closed")) {return "Done";}
  return "Todo";
}
