# Specification: Webhooks Documentation and Testing

## Overview
This track focuses on improving the maintainability and developer experience of the Linear SDK's Webhook module (`packages/sdk/src/webhooks`). We will add comprehensive inline documentation and a robust suite of unit tests.

## Goals
- Achieve >80% code coverage for the Webhooks module.
- Provide clear, actionable TSDoc/JSDoc for all public exports in the Webhooks module.
- Ensure the Webhook verification logic is thoroughly validated.

## Scope
- `packages/sdk/src/webhooks/index.ts`
- `packages/sdk/src/webhooks/types.ts`
- `packages/sdk/src/webhooks/client.ts`

## Requirements
- All public functions and types must have descriptive TSDoc comments.
- Unit tests must cover:
    - Webhook signature verification (success and failure cases).
    - Parsing of different webhook event types.
    - Error handling for invalid payloads.
- Documentation should be reflected in the generated docs (if applicable).
