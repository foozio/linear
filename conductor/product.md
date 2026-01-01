# Product Guide

## Vision
The Linear API ecosystem aims to empower developers to build powerful, type-safe integrations and automations on top of the Linear platform. By providing a comprehensive SDK, robust import tooling, and efficient code generation utilities, we streamline the development of custom workflows and data migration strategies, ensuring that extending Linear is as intuitive and efficient as using the product itself.

## Target Audience
- **Integration Developers:** Third-party developers creating public apps and integrations for the Linear Marketplace.
- **Internal Tools Teams:** Engineering teams within organizations building custom automations, reporting dashboards, and internal workflows to enhance their Linear experience.
- **System Administrators:** Individuals responsible for migrating data from legacy issue tracking systems (Jira, Asana, etc.) to Linear.

## Core Capabilities
- **Typed SDK:** A fully typed TypeScript SDK (`@linear/sdk`) that provides programmatic access to the Linear GraphQL API, ensuring type safety and autocomplete support.
- **Import Tooling:** A CLI and library (`@linear/import`) designed to facilitate the smooth import of issues, projects, and users from various external systems into Linear.
- **Export Tooling:** A tool (`@linear/export-antigravity`) to export data from Linear into the Antigravity system format.
- **Code Generation:** A suite of custom GraphQL Code Generator plugins (`@linear/codegen-*`) to automate the creation of documents, SDK components, and tests, keeping the client in sync with the API schema.

## Success Metrics
- **Developer Experience:** High adoption rate of the SDK with positive feedback regarding ease of use and type safety.
- **Reliability:** minimal bugs and issues reported in the SDK and import tools.
- **Completeness:** Full coverage of the Linear GraphQL API surface area within the SDK.
- **Migration Success:** high success rate of data imports with minimal data loss or corruption.
