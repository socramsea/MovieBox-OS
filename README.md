# MovieBox OS

MovieBox OS is a modern media platform for discovering, organizing, and streaming movies, series, and live TV content through a flexible local-first architecture.

## Demo MVP

This repository includes a working MVP that serves a dashboard and exposes a JSON API.

### Run locally

```bash
node server.js
```

Then open:

```text
http://localhost:3000
```

### API

```text
GET /api/media
```

Returns mock media stats, activity, and library entries for dashboard validation.

## Product vision

- media discovery and organization
- local-first architecture
- admin dashboard and library management
- future expansion into self-hosted and SaaS products

## MVP scope

- dashboard layout
- library search/filter
- media stats and activity feed
- JSON data layer for frontend integration

## Roadmap

### Phase 1
- dashboard and library prototype
- API-driven data flow
- product positioning validation

### Phase 2
- real auth and user management
- richer metadata and filtering
- media playback integration

### Phase 3
- downloads and orchestration
- deployment and monitoring
- premium features

## License

Apache License 2.0
