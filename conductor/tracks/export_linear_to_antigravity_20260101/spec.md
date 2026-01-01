# Specification: Linear to Antigravity Exporter

## Overview
This track involves building a new tool or package to export data from Linear into a format suitable for import into the "Antigravity" system.

## Goals
- Create a reusable mechanism to extract data from Linear.
- Transform Linear data (Issues, Projects, Users) into the specific schema required by Antigravity.
- Provide a CLI interface to execute the export.

## Scope
- New package: `packages/export-antigravity` (or similar).
- Core functionality:
    - Connect to Linear API using `@linear/sdk`.
    - Fetch relevant entities.
    - Transform data.
    - Output to file (JSON/CSV).

## Requirements
- Must handle API pagination and rate limits.
- Output format must match Antigravity's import specification (to be defined).
- Must include unit tests for transformation logic.
