import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-zinc-100">
      {/* Nav — liquid glass floating bar */}
      <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/10 bg-white/5 px-6 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset,0_8px_32px_-8px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 text-lg font-semibold tracking-tight">
            <Image src="/logo.png" alt="Abyss" width={28} height={28} className="rounded-lg" />
            Abyss
          </Link>
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

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-32 pb-24">
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-400">
            VoiceIDE
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            One voice. Code, email, calendar{" "}
            <span className="text-zinc-300">— and more.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Your voice-first assistant — for coding, email, calendar, and more.
            Hands-free development meets personal productivity.
          </p>
        </div>
      </section>

      {/* Use Cases — Two Columns */}
      <section className="border-y border-zinc-800/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-2xl font-semibold tracking-tight text-zinc-200">
            Built for how you work
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Developer Column */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset,0_8px_32px_-8px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-zinc-100">
                Developer
              </h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="text-zinc-500">→</span>
                  Code editing & file operations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-zinc-500">→</span>
                  Git commands & version control
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-zinc-500">→</span>
                  Browser automation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-zinc-500">→</span>
                  Project search & Cursor agents
                </li>
              </ul>
            </div>

            {/* Personal Column */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset,0_8px_32px_-8px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                  />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-zinc-100">
                Personal
              </h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="text-zinc-500">→</span>
                  Email — scan, send, summarize
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-zinc-500">→</span>
                  Google Calendar — list, create, update
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-zinc-500">→</span>
                  Notes, reminders, tasks (coming soon)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-2xl font-semibold tracking-tight text-zinc-200">
            Roadmap
          </h2>
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset,0_8px_32px_-8px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
              <span className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-zinc-300">
                Phase 1
              </span>
              <h3 className="mb-2 text-lg font-semibold text-zinc-100">
                Voice Dev
              </h3>
              <p className="text-zinc-400">
                Core voice interface for development workflows. Hands-free coding
                and agent control.
              </p>
            </div>
            <div className="hidden shrink-0 self-center md:block">
              <div className="h-px w-12 bg-gradient-to-r from-white/20 to-transparent" />
              <div className="mx-auto h-2 w-2 rounded-full bg-white/20" />
            </div>
            <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset,0_8px_32px_-8px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
              <span className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-zinc-300">
                Phase 2
              </span>
              <h3 className="mb-2 text-lg font-semibold text-zinc-100">
                Cloud Backend & Code Tools
              </h3>
              <p className="text-zinc-400">
                file.read/write, git.*, browser.*, project.search, Cursor
                agents integration.
              </p>
            </div>
            <div className="hidden shrink-0 self-center md:block">
              <div className="h-px w-12 bg-gradient-to-r from-white/20 to-transparent" />
              <div className="mx-auto h-2 w-2 rounded-full bg-white/20" />
            </div>
            <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset,0_8px_32px_-8px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
              <span className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-zinc-300">
                Phase 3
              </span>
              <h3 className="mb-2 text-lg font-semibold text-zinc-100">
                Email, Calendar & Personal Assistance
              </h3>
              <p className="text-zinc-400">
                email.scan/send/summarize, gcal.list/create/update/delete, and
                expanded productivity tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="border-t border-zinc-800/50 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <blockquote className="rounded-2xl border border-white/10 bg-white/5 px-8 py-10 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset,0_8px_32px_-8px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
            <span className="text-2xl font-medium leading-relaxed text-zinc-200 sm:text-3xl">
              &ldquo;From coding assistant to full personal productivity — all by
              voice.&rdquo;
            </span>
            <p className="mt-6 text-zinc-500">
              VoiceIDE — Abyss
            </p>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} BeelerDevs. VoiceIDE / Abyss.
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
