import { LinearClient } from "@linear/sdk";

/**
 * Creates a new Linear client instance.
 * @param apiKey - The Linear API key for authentication.
 */
export function createLinearClient(apiKey: string): LinearClient {
  return new LinearClient({ apiKey });
}
