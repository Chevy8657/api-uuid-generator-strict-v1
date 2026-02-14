# UUID Generator — STRICT v1

Stateless utility API that generates RFC 4122 compliant Version 4 UUIDs.

---
## Endpoint
POST `/v1/generate`

### Request
`{}` (Empty JSON body)

### Response
```json
{
  "output": "123e4567-e89b-12d3-a456-426614174000"
}

Contract Guarantees
Stateless & No storage

High-entropy RFC 4122 v4 compliance

Strict input/output contract
