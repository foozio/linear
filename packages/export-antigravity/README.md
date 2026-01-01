# @linear/export-antigravity

Tool to export data from Linear to Antigravity format.

## Installation

```bash
pnpm install
```

## Usage

After building the package, run the CLI using the provided binary:

```bash
./bin/linear-export-antigravity.cjs --api-key <YOUR_LINEAR_API_KEY> --output ./my-export
```

### Options

- `-k, --api-key <key>`: (Required) Your Linear API Key.
- `-o, --output <dir>`: (Optional) Directory to save the exported JSON files. Defaults to `./export`.
- `--version`: Show version number.
- `--help`: Show help.

## Output Format

The tool generates three JSON files in the specified output directory:
- `users.json`
- `projects.json`
- `issues.json`

Format matches the Antigravity import schema.