import fs from "fs/promises";
import path from "path";
import { AntigravityData } from "./transformer.js";

/**
 * Writes the transformed data to the output directory as JSON files.
 * @param data - The transformed data.
 * @param outputDir - The directory where the files should be saved.
 */
export async function writeOutput(data: AntigravityData, outputDir: string): Promise<void> {
  await fs.mkdir(outputDir, { recursive: true });

  await fs.writeFile(path.join(outputDir, "users.json"), JSON.stringify(data.users, null, 2));
  await fs.writeFile(path.join(outputDir, "projects.json"), JSON.stringify(data.projects, null, 2));
  await fs.writeFile(path.join(outputDir, "issues.json"), JSON.stringify(data.issues, null, 2));
}
