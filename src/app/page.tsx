import Link from "next/link";

const capabilityCards = [
  {
    title: "Voice + Nova backend",
    description:
      "iOS streams voice to a WebSocket conductor using Amazon Nova models for reasoning and live turn orchestration.",
  },
  {
    title: "Cursor agents and web automation",
    description:
      "Server-routed Cursor agent tools and browser/computer-use flows allow voice-triggered coding and web tasks.",
  },
  {
    title: "Paired macOS bridge",
    description:
      "Pair a Mac for local shell and filesystem execution, with auto-reconnect support across iOS reconnects.",
  },
  {
    title: "Gmail, Calendar, Canvas tools",
    description:
      "Server-side productivity tools support read/search/create flows with confirmation cards for sensitive actions.",
  },
  {
    title: "Inline card rendering",
    description:
      "Results are injected into assistant responses as card references and rendered inline in the transcript UI.",
  },
  {
    title: "Long-session memory",
    description:
      "Conversation summarization compresses older turns into durable context while keeping active turns detailed.",
  },
];

const architectureSteps = [
  "You speak to Abyss on iOS.",
  "The conductor plans a tool sequence over WebSocket.",
  "Tools execute across iOS, server, macOS bridge, and Cursor agents.",
  "Abyss streams voice/text back and renders interactive cards inline.",
];

const latestShipped = [
  "Bridge auto-reconnect and improved pairing stability.",
  "Inline card anchoring and transcript dedup improvements.",
  "Nova Act guidance and browser automation routing work.",
  "Conversation finalization and interruption race-condition fixes.",
  "Tool-call circuit breaker tightened by tool name + arguments.",
  "Improved text input ergonomics and iOS conversation polish.",
];

const surfaces = [
  {
    area: "Developer workflows",
    tools:
      "bridge.exec.run, bridge.fs.*, cursor.agent.*, git/file/browser operations",
  },
  {
    area: "Personal productivity",
    tools: "gmail.*, calendar.*, reminders/tasks-oriented assistant flows",
  },
  {
    area: "Knowledge and context",
    tools: "web.search, memory summarization, user preferences",
  },
  {
    area: "UI and multimodal output",
    tools: "assistant.speech streaming, inline cards, transcript timeline events",
  },
];

const repos = [
  {
    name: "Abyss (core architecture)",
    href: "https://github.com/beeler-devs/Abyss",
    description:
      "Server, iOS client, macOS bridge, protocol docs, and current architecture work.",
  },
  {
    name: "GetAbyss (website/app entrypoint)",
    href: "https://github.com/beeler-devs/GetAbyss",
    description:
      "Public-facing experience for the project and launch surface for users.",
  },
  {
    name: "Abyss docs",
    href: "https://github.com/beeler-devs/Abyss/tree/main/docs",
    description:
      "Architecture, deployment, tool interfaces, memory system, and integration references.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-zinc-100">
      <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/[0.06] bg-white/[0.015] px-6 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_4px_24px_-4px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-lg font-semibold tracking-tight"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
            Abyss
          </Link>
          <a
            href="https://github.com/beeler-devs/Abyss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Core GitHub
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 pt-32 pb-20">
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
            Updated from beeler-devs/Abyss • March 2026
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Abyss is now a voice-first operating layer for{" "}
            <span className="text-zinc-300">coding and personal workflows.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            Speak once. Abyss can reason over tools, route execution to the
            right surface (iOS, server, bridge, or cloud agent), and stream back
            voice + structured results.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/beeler-devs/GetAbyss"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-500/40 bg-zinc-100 px-6 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
            >
              View GetAbyss
            </a>
            <a
              href="https://github.com/beeler-devs/Abyss"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/[0.02] px-6 py-2.5 text-sm font-semibold text-zinc-200 transition hover:bg-white/[0.06]"
            >
              Explore core architecture
            </a>
            <a
              href="https://github.com/beeler-devs/Abyss/tree/main/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-6 py-2.5 text-sm text-zinc-300 transition hover:border-white/30 hover:text-zinc-100"
            >
              Read docs
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
            What&apos;s active in Abyss right now
          </h2>
          <p className="mx-auto mb-14 max-w-3xl text-center text-zinc-400">
            Synced from the current Abyss repository architecture, docs, and
            recent shipping work.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilityCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_4px_24px_-4px_rgba(0,0,0,0.25)] backdrop-blur-xl"
              >
                <h3 className="mb-3 text-lg font-semibold text-zinc-100">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_4px_24px_-4px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-zinc-100">
              System flow
            </h2>
            <ol className="space-y-4 text-zinc-300">
              {architectureSteps.map((step, idx) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-xs text-zinc-200">
                    {idx + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-zinc-400">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_4px_24px_-4px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-zinc-100">
              Tool surfaces
            </h2>
            <ul className="space-y-5">
              {surfaces.map((surface) => (
                <li key={surface.area}>
                  <p className="text-sm font-semibold text-zinc-200">
                    {surface.area}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                    {surface.tools}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-y border-zinc-800/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
            Recently shipped
          </h2>
          <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {latestShipped.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-white/[0.06] bg-white/[0.015] px-4 py-3 text-sm text-zinc-300"
              >
                <span className="mr-2 text-zinc-500">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
            Repositories and docs
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 transition hover:border-white/20 hover:bg-white/[0.03]"
              >
                <h3 className="text-lg font-semibold text-zinc-100 transition group-hover:text-white">
                  {repo.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {repo.description}
                </p>
                <p className="mt-4 text-xs uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300">
                  Open link
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800/50 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} BeelerDevs. Abyss.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/beeler-devs/Abyss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
              Core Repo
            </a>
            <a
              href="https://github.com/beeler-devs/GetAbyss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
              GetAbyss
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
