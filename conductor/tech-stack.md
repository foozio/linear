# Technology Stack

## Core Technologies
- **Programming Language:** [TypeScript](https://www.typescriptlang.org/) (Project-wide)
- **Runtime Environment:** [Node.js](https://nodejs.org/) (>=18.x)
- **Package Management:** [pnpm](https://pnpm.io/) with [Workspaces](https://pnpm.io/workspaces)

## API and Data
- **Primary API Architecture:** [GraphQL](https://graphql.org/)
- **Code Generation:** [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) (Used for SDK, documents, and tests)
- **Schema:** Managed via `packages/sdk/src/schema.graphql` and `schema.json`

## Development and Build Tools
- **Build Tooling:** [tsdown](https://github.com/egoist/tsdown) (Used for bundling packages)
- **Testing Frameworks:**
    - [Vitest](https://vitest.dev/) (Primary for SDK)
    - [Jest](https://jestjs.io/) (Used in some packages and for generated tests)
- **Linting:** [ESLint](https://eslint.org/)
- **Code Formatting:** [Prettier](https://prettier.io/)
- **Commit Hooks:** [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged)

## Infrastructure and CI/CD
- **Version Control:** Git
- **CI/CD:** GitHub Actions (Workflows for build, release, schema updates, and dependency management)
- **Release Management:** [Changesets](https://github.com/changesets/changesets)
