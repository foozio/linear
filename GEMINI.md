# Linear API Monorepo

## Project Overview

This is the monorepo for the Linear API ecosystem. It houses the official Linear Client SDK, import tooling, and the custom GraphQL code generation plugins used to build the SDK.

**Primary Packages:**
- **`@linear/sdk`** (`packages/sdk`): The typed Linear Client SDK for interacting with the Linear GraphQL API.
- **`@linear/import`** (`packages/import`): CLI and library for importing issues from other systems (Jira, Asana, GitHub, etc.) into Linear.
- **`@linear/codegen-*`** (`packages/codegen-*`): Custom plugins for [GraphQL Code Generator](https://graphql-code-generator.com/) that produce the SDK, documents, and tests.

**Tech Stack:**
- **Language:** TypeScript
- **Package Manager:** pnpm (Workspaces)
- **Testing:** Jest
- **Linting/Formatting:** ESLint, Prettier
- **Versioning:** Changesets

## Building and Running

This project uses `pnpm` and `corepack`. Ensure you have Node.js 18+ installed.

### Key Commands

- **Install Dependencies:**
  ```bash
  pnpm install
  ```

- **Build All Packages:**
  ```bash
  pnpm build
  ```
  This command orchestrates the full build pipeline: code generation -> SDK build -> import build -> type generation -> docs generation.

- **Run Tests:**
  ```bash
  pnpm test
  ```
  Runs tests across all workspaces.

- **Linting:**
  ```bash
  pnpm lint
  ```

### Code Generation Workflow

The SDK is heavily reliant on generated code. The flow is:
1.  **`pnpm schema`**: Updates the local schema from the production Linear API.
2.  **`pnpm generate`**: Runs the codegen plugins to produce:
    -   GraphQL fragments and documents (`packages/codegen-doc`).
    -   The TypeScript SDK (`packages/codegen-sdk`).
    -   Jest tests (`packages/codegen-test`).

## Development Conventions

- **Monorepo Structure:** All packages are located in `packages/`.
- **Generated Code:** Files prefixed with `_generated` (e.g., `_generated_sdk.ts`) are machine-generated and **must not** be manually edited. Changes should be made to the generators or the schema.
- **Commits:** Follow [Conventional Commits](https://www.conventionalcommits.org/). This is enforced by `commitlint` and `husky`.
- **Formatting:** Prettier is configured and runs via `lint-staged` on pre-commit.
- **Versioning:** Use `pnpm changeset` to generate a changeset file when making changes that require a package release.

## Directory Structure

- `packages/`: Source code for all workspace packages.
- `e2e/`: Smoke tests for CommonJS and ESM usage.
- `examples/`: Example projects (e.g., Next.js integration).
- `docs/`: Project documentation and assets.
