import { Command } from "commander";
import ora from "ora";
import chalk from "chalk";
import path from "path";
import { createLinearClient } from "./linear-client.js";
import { fetchData } from "./exporter.js";
import { transformData } from "./transformer.js";
import { writeOutput } from "./writer.js";

const program = new Command();

program
  .name("linear-export-antigravity")
  .description("CLI to export data from Linear to Antigravity format")
  .version("0.1.0")
  .requiredOption("-k, --api-key <key>", "Linear API Key")
  .option("-o, --output <dir>", "Output directory", "./export")
  .action(async options => {
    const spinner = ora("Connecting to Linear...").start();

    try {
      const client = createLinearClient(options.apiKey);

      spinner.text = "Fetching data from Linear...";
      const linearData = await fetchData(client);

      spinner.text = "Transforming data...";
      const transformed = transformData(linearData);

      spinner.text = "Writing output files...";
      const outputDir = path.resolve(process.cwd(), options.output);
      await writeOutput(transformed, outputDir);

      spinner.succeed(chalk.green(`Export complete! Files saved to ${outputDir}`));
    } catch (error) {
      spinner.fail(chalk.red("Export failed"));
      // eslint-disable-next-line no-console
      console.error(error);
      process.exit(1);
    }
  });

program.parse(process.argv);
