# MovieBox OS

MovieBox OS is a modern media platform for discovering, organizing, and streaming movies, series, and live TV content through a flexible local-first architecture.

## Vision

Build a scalable, vendable media platform that combines:

- a terminal-first experience for advanced users
- a web dashboard for management and access
- a modular backend for metadata, streaming, downloads, and user management
- self-hosted and managed deployment options

## Product positioning

MovieBox OS is not just a terminal tool. It is a full media platform designed for:

- personal users
- family media libraries
- power users and sysadmins
- small managed hosting setups
- future SaaS and white-label expansion

## Core goals

- Discover and organize media efficiently
- Support local and remote media sources
- Offer a clean web admin experience
- Keep the TUI as a technical and power-user interface
- Provide modular architecture ready for growth

## MVP scope

- User auth and profiles
- Media library organization
- Search and filters by title, genre, and type
- Favorites and watch history
- Streaming via local external player
- Download queue and management
- Admin dashboard for system status
- Config and environment management
- Observability and basic monitoring

## Project structure

```text
moviebox-os/
├── apps/
│   ├── api/
│   ├── web/
│   └── tui/
├── packages/
│   ├── core/
│   ├── shared/
│   ├── ui/
│   └── schemas/
├── services/
│   ├── downloader/
│   ├── metadata/
│   ├── streamer/
│   ├── scheduler/
│   └── notifications/
├── infra/
│   ├── docker/
│   ├── k8s/
│   └── scripts/
├── docs/
│   ├── architecture/
│   ├── roadmap/
│   ├── api/
│   └── onboarding/
├── .github/
│   └── workflows/
├── README.md
├── CONTRIBUTING.md
├── LICENSE
├── docker-compose.yml
├── Makefile
├── .gitignore
├── .env.example
├── package.json
├── Cargo.toml
└── .nvmrc
```

## Tech stack

- Backend: Rust
- API: REST + WebSockets
- Web app: Next.js / React
- TUI: Rust + Ratatui
- Database: PostgreSQL
- Cache: Redis
- Auth: JWT
- Deployment: Docker / Docker Compose
- Monitoring: Prometheus + Grafana
- CI/CD: GitHub Actions

## Roadmap

### Phase 1 - Foundation
- repository and standards
- architecture baseline
- env configuration
- CI/CD setup
- base auth and app shell

### Phase 2 - MVP
- library management
- search and categories
- favorites/history
- player integration
- web dashboard basics
- admin shell

### Phase 3 - Pro features
- premium workflows
- event-driven jobs
- richer metadata and integrations
- hosting and deployment controls

### Phase 4 - Scale
- SaaS productization
- multi-user organizations
- plugin marketplace
- white-label deployment

## Status

This repository is the foundational product structure for MovieBox OS and is intentionally designed to evolve from a local-first media tool into a scalable platform.

## License

Apache License 2.0
