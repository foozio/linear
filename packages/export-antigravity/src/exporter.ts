import { LinearClient, Issue, Project, User } from "@linear/sdk";

/**
 * Combined data structure for Linear export.
 */
export interface LinearData {
  issues: Issue[];
  projects: Project[];
  users: User[];
}

/**
 * Fetches all necessary data from Linear.
 * @param client - The Linear client instance.
 */
export async function fetchData(client: LinearClient): Promise<LinearData> {
  const issues = await fetchAll<Issue>(client.issues.bind(client));
  const projects = await fetchAll<Project>(client.projects.bind(client));
  const users = await fetchAll<User>(client.users.bind(client));

  return { issues, projects, users };
}

/**
 * Generic helper to fetch all items from a paginated Linear API connection.
 */
async function fetchAll<T>(
  fetcher: (args?: {
    after?: string;
  }) => Promise<{ nodes: T[]; pageInfo?: { hasNextPage: boolean; endCursor?: string } }>
): Promise<T[]> {
  let allNodes: T[] = [];
  let hasNextPage = true;
  let after: string | undefined;

  while (hasNextPage) {
    const response = await fetcher({ after });
    allNodes = allNodes.concat(response.nodes);
    hasNextPage = response.pageInfo?.hasNextPage ?? false;
    after = response.pageInfo?.endCursor;
  }

  return allNodes;
}
