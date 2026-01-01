# Plan: Linear to Antigravity Exporter

## Phase 1: Design and Scaffolding [checkpoint: 1146022]
- [x] Task: Define Antigravity import schema and required fields (1363886)
- [x] Task: Scaffold new package `packages/export-antigravity`
- [x] Task: Configure package.json, tsconfig, and build scripts
- [x] Task: Conductor - User Manual Verification 'Design and Scaffolding' (Protocol in workflow.md)

## Phase 2: Data Extraction [checkpoint: bf8673c]
- [x] Task: Implement Linear Client setup and authentication
- [x] Task: Write failing tests for fetching issues and projects
- [x] Task: Implement data fetching logic with pagination support (2e8badb)
- [x] Task: Conductor - User Manual Verification 'Data Extraction' (Protocol in workflow.md)

## Phase 3: Transformation and Output
- [ ] Task: Write failing tests for data transformation (Linear -> Antigravity)
- [ ] Task: Implement transformation logic for Issues
- [ ] Task: Implement transformation logic for Projects/Users
- [ ] Task: Implement file writer (JSON/CSV output)
- [ ] Task: Conductor - User Manual Verification 'Transformation and Output' (Protocol in workflow.md)

## Phase 4: CLI and Final Polish
- [ ] Task: Create CLI entry point for the exporter
- [ ] Task: Add progress indicators and error handling
- [ ] Task: Update README with usage instructions
- [ ] Task: Verify >80% code coverage
- [ ] Task: Conductor - User Manual Verification 'CLI and Final Polish' (Protocol in workflow.md)
