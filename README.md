# Get Abyss

**Abyss is a voice-first, iPhone-native AI assistant with secure local execution and coding as a flagship workflow.**

## Related repositories

- Core architecture + product development: https://github.com/beeler-devs/Abyss
- This site + public entrypoint: https://github.com/beeler-devs/GetAbyss

The landing page is product-facing and judge-oriented. It highlights:

- Voice-first interaction on iPhone
- A TypeScript WebSocket conductor
- A permissioned macOS bridge for privileged local actions
- Coding workflows with Cursor Cloud Agents, terminal execution, file operations, and git actions
- Gmail, Google Calendar, Canvas, and web search integrations
- Inline transcript cards, multi-chat continuity, summaries, and optional memory infrastructure
- Embedded architecture, data-flow, and infrastructure diagrams

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Optimized for [Vercel](https://vercel.com). Connect this repo for automatic deployments.

## Tech

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Animated dark-mode landing page with glass UI surfaces
