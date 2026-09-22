# Fonitas Website

Premium marketing website for Fonitas, an **Application Publishing Operating System**.

The website communicates the product lifecycle from collaboration and application registration through evaluation, contract, QA, publishing, revenue, reconciliation and settlement, while separating the MVP publishing/finance core from the longer-term platform roadmap.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- App Router

## Website structure

- Hero / product positioning
- What is Fonitas?
- Application lifecycle
- Publishing workflow
- Architecture principles
- Operating models
- Future platform roadmap
- FAQ
- Collaboration request
- Footer / navigation

## Product source of truth

The website messaging is based on the final Fonitas backend implementation blueprint. The core product is the application publishing lifecycle; Commercial, Marketing, Infrastructure, Legal and Investment are presented as longer-term platform capabilities.

## Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm start
```

The collaboration form is currently a frontend interaction only and should be connected to the backend Collaboration Request flow when the API is available.
