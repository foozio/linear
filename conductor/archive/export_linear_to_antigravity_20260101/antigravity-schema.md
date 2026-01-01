# Antigravity Import Schema

This document defines the required JSON schema for importing data into Antigravity.

## Users (`users.json`)
Array of user objects:
```json
[
  {
    "id": "string (required, unique)",
    "name": "string (required)",
    "email": "string (required, unique)"
  }
]
```

## Projects (`projects.json`)
Array of project objects:
```json
[
  {
    "id": "string (required, unique)",
    "name": "string (required)",
    "description": "string (optional)",
    "created_at": "ISO8601 string (required)"
  }
]
```

## Issues (`issues.json`)
Array of issue objects:
```json
[
  {
    "id": "string (required, unique)",
    "title": "string (required)",
    "description": "string (optional)",
    "status": "string (required) [Todo, In Progress, Done]",
    "assignee_id": "string (optional, reference to users.id)",
    "project_id": "string (optional, reference to projects.id)",
    "created_at": "ISO8601 string (required)",
    "updated_at": "ISO8601 string (required)"
  }
]
```
