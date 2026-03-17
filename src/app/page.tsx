import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#architecture", label: "Architecture" },
  { href: "#tech", label: "Tech" },
];

const proofPills = [
  "SwiftUI iPhone client",
  "TypeScript WebSocket conductor",
  "Permissioned macOS bridge",
  "Cursor, Gmail, Calendar, Canvas",
];

const featureCards = [
  {
    eyebrow: "Flagship Workflow",
    title: "Coding from your phone, with your Mac on call",
    description:
      "Abyss starts on the iPhone, then escalates into real development work through Cursor Cloud Agents, terminal execution, file operations, git workflows, and browser automation on a paired Mac.",
    bullets: [
      "Voice-first coding flows with typed fallback",
      "Cursor agent orchestration and repo-connected work",
      "Terminal, file, and git actions through the bridge",
      "Optional Nova Act browser automation for deeper tasks",
    ],
  },
  {
    eyebrow: "Personal Assistant",
    title: "Real integrations, not a toy demo",
    description:
      "The same assistant that can kick off coding work can also triage Gmail, manage Google Calendar, check Canvas, search the web, and keep the conversation readable with inline result cards.",
    bullets: [
      "Editable Gmail draft confirmations before send",
      "Calendar create, update, and delete flows",
      "Canvas courses, assignments, grades, and announcements",
      "Inline cards for email, calendar, canvas, bridge output, and agents",
    ],
  },
  {
    eyebrow: "Security",
    title: "Permissioned local execution by design",
    description:
      "Abyss does not pretend trust is free. Risky local actions live behind a separately paired macOS bridge with workspace boundaries, capability toggles, and explicit confirmation patterns for sensitive mutations.",
    bullets: [
      "Workspace-root restrictions for local file access",
      "Independent permissions for shell, write, git push, and browser automation",
      "Confirmation cards before email and other risky actions finalize",
      "Safer than giving an agent unrestricted machine access",
    ],
  },
  {
    eyebrow: "Continuity",
    title: "Built to remember context and stay usable",
    description:
      "Abyss supports multi-chat sessions, inline transcript cards, conversation summaries, user preferences, and optional long-term memory infrastructure so the assistant can pick up real threads over time.",
    bullets: [
      "Multi-chat support with voice, push-to-talk, and text",
      "Auto-generated chat titles and transcript-friendly cards",
      "Context summarization for longer sessions",
      "Optional Neptune plus Titan context graph retrieval",
    ],
  },
];

const architectureCards = [
  {
    title: "System architecture",
    image: "/abyss-architecture.png",
    alt: "Abyss system architecture diagram",
    description:
      "The product is split across an iPhone-native client, a TypeScript conductor, and a paired macOS bridge so voice stays natural while privileged local execution stays gated.",
  },
  {
    title: "Core data flow",
    image: "/abyss-data-flow.png",
    alt: "Abyss core data flow diagram",
    description:
      "Speech or text becomes structured events over WebSocket, tools run in the right place, and every result flows back into the transcript as readable inline cards and assistant messages.",
  },
  {
    title: "Infrastructure and deployment",
    image: "/abyss-infrastructure.png",
    alt: "Abyss infrastructure diagram",
    description:
      "The stack is production-minded end to end: AWS Bedrock for models, ECS Fargate for the server, optional memory infrastructure, and Apple-native clients on the front line.",
  },
];

const techColumns = [
  {
    title: "Apple-native front end",
    items: [
      "SwiftUI iPhone app",
      "AVFoundation audio handling",
      "WhisperKit transcription paths",
      "ElevenLabs with fallback voice behavior",
      "URLSession WebSockets and secure local storage",
    ],
  },
  {
    title: "Conductor and model layer",
    items: [
      "Node.js 20+ and TypeScript",
      "WebSocket orchestration with strict event envelopes",
      "Amazon Bedrock routing across Nova Lite and Nova Pro",
      "Nova Sonic voice support",
      "Server-side integrations and tool dispatch",
    ],
  },
  {
    title: "Bridge and memory stack",
    items: [
      "Paired macOS bridge in Swift and SwiftUI",
      "Granular capability permissions and workspace constraints",
      "Optional Nova Act browser automation",
      "Optional summarization, S3 memory, Neptune Analytics, and Titan embeddings",
      "Shared Swift and TypeScript protocol libraries",
    ],
  },
];

const integrations = [
  "Cursor Cloud Agents",
  "GitHub-connected developer flows",
  "Gmail",
  "Google Calendar",
  "Canvas",
  "Brave Search",
  "Amazon Bedrock",
  "Nova Sonic",
  "Neptune Analytics",
  "Titan Embeddings",
];

const glassPanelClass =
  "rounded-2xl border border-white/[0.06] bg-white/[0.015] shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_4px_24px_-4px_rgba(0,0,0,0.25)] backdrop-blur-xl";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-zinc-100">
      <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/[0.06] bg-white/[0.015] px-5 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_4px_24px_-4px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <div className="flex items-center gap-5 sm:gap-8">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-lg font-semibold tracking-tight"
          >
            <Image
              src="/logo.png"
              alt="Abyss"
              width={28}
              height={28}
              className="rounded-lg"
            />
            Abyss
          </Link>
          <div className="hidden items-center gap-5 sm:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="https://github.com/beeler-devs/GetAbyss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            GitHub
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 pt-32 pb-24">
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-zinc-400">
            Voice-First AI Assistant
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl lg:text-7xl">
            Abyss
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400 sm:text-xl">
            The assistant that lives on your iPhone and reaches your Mac when the
            work gets real.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/beeler-devs/GetAbyss"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-sm font-medium text-zinc-100 transition-colors hover:bg-white/[0.1]"
            >
              View on GitHub
            </a>
            <a
              href="#architecture"
              className="rounded-full border border-white/[0.06] bg-white/[0.015] px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:text-zinc-100"
            >
              See the architecture
            </a>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {proofPills.map((pill) => (
              <div
                key={pill}
                className="rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-zinc-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]"
              >
                {pill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="border-y border-zinc-800/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.26em] text-zinc-500">
              Why It Stands Out
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
              Product polish up front, serious capability underneath
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Abyss is designed to feel lightweight on the phone while still
              being able to escalate into real work across coding, productivity,
              and secure local execution.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {featureCards.map((card) => (
              <div key={card.title} className={`${glassPanelClass} p-8`}>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                  {card.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-100">
                  {card.title}
                </h3>
                <p className="mt-4 leading-7 text-zinc-400">{card.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="text-zinc-500">+</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className={`${glassPanelClass} grid gap-8 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10`}>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.26em] text-zinc-500">
                Judge Demo Story
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100">
                Start with voice. Escalate into real tools. Keep the trust boundary visible.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-400">
                The strongest Abyss demo path is simple: speak to the iPhone,
                trigger a useful assistant task, then step up into a permissioned
                coding workflow on the paired Mac. The product story is not just
                “voice chat,” it is voice as the front door to secure execution.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                "Voice, push-to-talk, and typed interaction patterns",
                "Inline transcript cards that keep tool output readable",
                "Non-blocking confirmation flows for sensitive actions",
                "Multi-chat sessions with summaries and generated titles",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/[0.06] bg-black/20 px-4 py-4 text-sm text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="architecture"
        className="border-y border-zinc-800/50 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.26em] text-zinc-500">
              Architecture
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
              Built like a product, explained like a system
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              The architecture matters because the product promise depends on it:
              natural voice on the phone, strong tool orchestration on the
              server, and privileged local actions behind an explicit bridge.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {architectureCards.map((card) => (
              <article key={card.title} className={`${glassPanelClass} overflow-hidden`}>
                <div className="border-b border-white/[0.06] bg-black/20 p-4">
                  <h3 className="text-lg font-semibold text-zinc-100">{card.title}</h3>
                </div>
                <div className="p-4">
                  <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-black/30">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      width={1600}
                      height={900}
                      className="h-auto w-full"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.26em] text-zinc-500">
                Tech and Connections
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100">
                Enough technical depth to be credible, without losing the product story
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-400">
                Abyss combines Apple-native UX, a TypeScript orchestration layer,
                Amazon Bedrock model routing, a permissioned Mac bridge, and a
                growing set of integrations that make the assistant feel useful
                across both development and day-to-day work.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {integrations.map((integration) => (
                  <span
                    key={integration}
                    className="rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-sm text-zinc-300"
                  >
                    {integration}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {techColumns.map((column) => (
                <div key={column.title} className={`${glassPanelClass} p-6`}>
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {column.title}
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-400">
                    {column.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-zinc-500">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800/50 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <blockquote className={`${glassPanelClass} px-8 py-10 text-center sm:px-12`}>
            <p className="text-sm font-medium uppercase tracking-[0.26em] text-zinc-500">
              The Pitch
            </p>
            <span className="mt-4 block text-2xl font-medium leading-relaxed text-zinc-200 sm:text-4xl">
              &ldquo;Abyss makes the phone the primary interface, keeps local
              execution permissioned, and turns voice into a serious surface for
              coding and everyday work.&rdquo;
            </span>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400">
              This is the north star: the most capable, trusted, and personally
              useful assistant in your pocket, with the architecture to back up
              the claim.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://github.com/beeler-devs/GetAbyss"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-sm font-medium text-zinc-100 transition-colors hover:bg-white/[0.1]"
              >
                Explore the repo
              </a>
              <a
                href="#features"
                className="rounded-full border border-white/[0.06] bg-white/[0.015] px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:text-zinc-100"
              >
                Review the features
              </a>
            </div>
          </blockquote>
        </div>
      </section>

      <footer className="border-t border-zinc-800/50 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} BeelerDevs. Abyss.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/beeler-devs/GetAbyss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
