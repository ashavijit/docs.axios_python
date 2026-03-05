import Link from 'next/link';
import { ArrowRight, Terminal, RefreshCw, Layers, ShieldCheck, Copy, ChevronRight, Zap, GitBranch, Lock } from 'lucide-react';
import Beams from '@/components/Beams';

/* ─────────────────────────────────────────────
   Tiny reusable primitives
───────────────────────────────────────────── */

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-500 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400">
      {children}
    </div>
  );
}

function PingDot({ color = 'bg-zinc-500' }: { color?: string }) {
  return (
    <span className="flex h-2 w-2 items-center justify-center">
      <span className={`absolute inline-flex h-2 w-2 animate-ping rounded-full ${color} opacity-75`} />
      <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${color}`} />
    </span>
  );
}

/* ─────────────────────────────────────────────
   Stat chip (hero row)
───────────────────────────────────────────── */

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="text-2xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50">{value}</span>
      <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Code token helpers
───────────────────────────────────────────── */

const K = ({ c }: { c: string }) => <span style={{ color: c }} />;

/* ─────────────────────────────────────────────
   Feature card
───────────────────────────────────────────── */

function FeatureCard({ icon, title, description, accent = '#52525b' }: { icon: React.ReactNode; title: string; description: string; accent?: string }) {
  return (
    <div
      className="group relative flex flex-col gap-5 overflow-hidden rounded-lg border border-zinc-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-zinc-800/80 dark:bg-zinc-900/40"
      style={{ '--accent': accent } as React.CSSProperties}
    >
      {/* top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />

      <div
        className="flex h-10 w-10 items-center justify-center rounded-md text-white transition-transform duration-300 group-hover:scale-110"
        style={{ background: `linear-gradient(135deg, ${accent}22, ${accent}44)`, color: accent }}
      >
        {icon}
      </div>

      <div>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{title}</h3>
        <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{description}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Comparison row  (sync vs async)
───────────────────────────────────────────── */

function CompareCard({ label, code, good }: { label: string; code: string; good: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-lg border p-5 ${good ? 'border-blue-200 bg-blue-50/50 dark:border-blue-900/50 dark:bg-blue-950/20' : 'border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/30'}`}>
      <div className={`mb-3 inline-flex items-center gap-1.5 rounded-md px-2.5 py-0.5 text-xs font-semibold ${good ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' : 'bg-zinc-200/80 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400'}`}>
        {good ? '✦ axios_python' : 'Before'}
      </div>
      <pre className="overflow-x-auto font-mono text-[12px] leading-relaxed text-zinc-700 dark:text-zinc-300">{code}</pre>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=haskoy@400,500,600,700,800,900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');

        .font-display { font-family: 'Haskoy', sans-serif; }
        .font-code    { font-family: 'JetBrains Mono', monospace; }

        @keyframes float {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(-8px); }
        }
        .floating { animation: float 6s ease-in-out infinite; }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .animate-in {
          opacity: 0;
          animation: fade-up .55s cubic-bezier(.22,1,.36,1) forwards;
        }
        .delay-100 { animation-delay: .1s; }
        .delay-200 { animation-delay: .2s; }
        .delay-300 { animation-delay: .3s; }
        .delay-400 { animation-delay: .45s; }
        .delay-500 { animation-delay: .6s; }
        .delay-600 { animation-delay: .75s; }

        /* Subtle noise grain overlay */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 9999;
          opacity: .025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 128px 128px;
        }
      `}</style>

      <main className="relative flex min-h-screen flex-col items-center overflow-x-hidden bg-zinc-50 text-zinc-950 dark:bg-[#09090b] dark:text-zinc-50 selection:bg-blue-500/30">

        {/* ── Beams background ── */}
        <div className="absolute inset-0 z-0 h-[700px] w-full pointer-events-none opacity-40 dark:opacity-100 mix-blend-screen dark:mix-blend-normal overflow-hidden">
          <Beams
            beamWidth={4}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ffffff"
            speed={1.5}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-zinc-50 to-transparent dark:from-[#09090b]" />
        </div>

        {/* ══════════════════════════════════════
            HERO
        ══════════════════════════════════════ */}
        <section className="relative z-10 flex w-full max-w-5xl flex-col items-center px-6 pt-32 text-center md:pt-52">

          {/* Announcement badge */}
          <div className="animate-in mb-8">
            <Badge>
              <PingDot />
              <span>v1.0 is live</span>
              <div className="mx-1.5 h-3 w-px bg-zinc-300 dark:bg-zinc-700" />
              <Link href="/changelog" className="flex items-center gap-0.5 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
                Changelog <ChevronRight className="h-3 w-3" />
              </Link>
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="font-display animate-in delay-100 mb-5 max-w-4xl text-balance text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            The HTTP client<br className="hidden md:block" />
            Python{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-zinc-900 dark:text-white">
                deserves.
              </span>
            </span>
          </h1>

          {/* Sub */}
          <p className="animate-in delay-200 mb-10 max-w-xl text-balance text-base leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-lg">
            Unified sync&thinsp;/&thinsp;async requests, chainable interceptors, exponential-backoff retries, and 100&nbsp;% strict type hints — in one elegant package.
          </p>

          {/* CTAs */}
          <div className="animate-in delay-300 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:w-auto">
            <Link
              href="/docs"
              className="group flex h-11 w-full items-center justify-center gap-2 rounded-full bg-zinc-900 px-7 text-sm font-semibold text-white ring-1 ring-transparent transition-all hover:bg-zinc-700 hover:ring-zinc-900/10 active:scale-95 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 sm:w-auto"
            >
              Start building
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <button className="font-code group flex h-11 w-full items-center justify-between gap-4 rounded-full border border-zinc-200 bg-white px-5 text-xs text-zinc-500 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md active:scale-95 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-700 sm:w-auto">
              <span className="flex items-center gap-2">
                <Terminal className="h-3.5 w-3.5 text-zinc-400" />
                pip install axios_python
              </span>
              <Copy className="h-3.5 w-3.5 text-zinc-400 transition-colors group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
            </button>
          </div>

          {/* Stats row */}
          {/* <div className="animate-in delay-400 mt-16 flex items-center gap-10 rounded-2xl border border-zinc-200/80 bg-white/60 px-10 py-5 shadow-sm backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/50">
            <Stat value="12k+" label="Weekly downloads" />
            <div className="h-8 w-px bg-zinc-200 dark:bg-zinc-800" />
            <Stat value="4.9★" label="GitHub stars" />
            <div className="h-8 w-px bg-zinc-200 dark:bg-zinc-800" />
            <Stat value="100%" label="Type coverage" />
          </div> */}
        </section>

        {/* ══════════════════════════════════════
            CODE SHOWCASE
        ══════════════════════════════════════ */}
        <section className="animate-in delay-500 relative z-20 w-full max-w-4xl px-6 pt-20 pb-12 md:pt-28">
          <div className="floating relative rounded-xl border border-zinc-200/60 bg-white/40 p-2 shadow-2xl shadow-zinc-300/30 backdrop-blur-2xl dark:border-white/8 dark:bg-zinc-950/40 dark:shadow-black/60">

            {/* Window chrome */}
            <div className="relative overflow-hidden rounded-lg border border-zinc-200/50 bg-[#0d1117] dark:border-white/5">
              <div className="flex items-center justify-between border-b border-white/8 bg-white/4 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="font-code text-[11px] text-zinc-500">api_client.py</div>
                <div className="w-12" />
              </div>

              {/* Code */}
              <div className="font-code overflow-x-auto p-6 text-[13px] leading-7 text-zinc-300 sm:p-8 sm:text-[14px]">
                <pre><code>{[
                  <span key="l1"><span className="text-[#ff7b72]">import</span> <span className="text-[#79c0ff]">axios_python</span></span>,
                  '\n',
                  <span key="l3">{'api = axios_python.create({'}</span>,
                  '\n',
                  <span key="l4">{'    '}<span className="text-[#a5d6ff]">"base_url"</span>:    <span className="text-[#a5d6ff]">"https://api.github.com"</span>,</span>,
                  '\n',
                  <span key="l5">{'    '}<span className="text-[#a5d6ff]">"timeout"</span>:     <span className="text-[#79c0ff]">5.0</span>,</span>,
                  '\n',
                  <span key="l6">{'    '}<span className="text-[#a5d6ff]">"max_retries"</span>: <span className="text-[#79c0ff]">3</span>,</span>,
                  '\n',
                  <span key="l7">{'})'}</span>,
                  '\n',
                  <span key="l9"><span className="text-[#ff7b72]">async</span> <span className="text-[#ff7b72]">def</span> <span className="text-[#d2a8ff]">get_repos</span>{'(username: '}<span className="text-[#ff7b72]">str</span>{') -> '}<span className="text-[#ff7b72]">list</span>:</span>,
                  '\n',
                  <span key="l10">{'    resp = '}<span className="text-[#ff7b72]">await</span>{' api.async_get('}<span className="text-[#a5d6ff]">f"/users/{'{username}'}/repos"</span>{')'}</span>,
                  '\n',
                  <span key="l11">{'    resp.raise_for_status()'}</span>,
                  '\n',
                  <span key="l12">{'    '}<span className="text-[#ff7b72]">return</span>{' resp.json()'}</span>,
                  '\n',
                  <span key="l14">{'api.use('}<span className="text-[#ff7b72]">lambda</span>{' req: req.set_header('}</span>,
                  '\n',
                  <span key="l15">{'    '}<span className="text-[#a5d6ff]">"Authorization"</span>{', '}<span className="text-[#a5d6ff]">f"Bearer {'{TOKEN}'}"</span></span>,
                  '\n',
                  <span key="l16">{'))'}</span>,
                ]}</code></pre>
              </div>

              {/* Bottom bar with subtle pill badges */}
              <div className="flex items-center gap-3 border-t border-white/6 bg-white/2 px-6 py-3">
                {['Python 3.10+', 'httpx', 'fully typed'].map((t) => (
                  <span key={t} className="font-code rounded border border-white/10 px-2.5 py-0.5 text-[11px] text-zinc-500">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            BEFORE / AFTER
        ══════════════════════════════════════ */}
        <section className="relative z-10 w-full max-w-4xl px-6 pb-20">
          <div className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Before & after</p>
            <h2 className="font-display mt-1 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
              Less boilerplate. More flow.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <CompareCard
              label="Before"
              good={false}
              code={`import httpx, asyncio, time

async def fetch(url, retries=3):
    for i in range(retries):
        try:
            async with httpx.AsyncClient() as c:
                r = await c.get(url, timeout=5)
                r.raise_for_status()
                return r.json()
        except Exception:
            time.sleep(2 ** i)
    raise RuntimeError("Failed")`}
            />
            <CompareCard
              label="axios_python"
              good={true}
              code={`import axios_python

api = axios_python.create({
    "base_url":    "https://api.github.com",
    "timeout":     5.0,
    "max_retries": 3,
})

async def fetch(path):
    r = await api.async_get(path)
    r.raise_for_status()
    return r.json()`}
            />
          </div>
        </section>

        {/* ══════════════════════════════════════
            FEATURES  (3-col)
        ══════════════════════════════════════ */}
        <section className="relative z-10 w-full max-w-5xl px-6 pb-20">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Features</p>
            <h2 className="font-display mt-1 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
              Everything you need, nothing you don't.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Layers className="h-4 w-4" />}
              title="Middleware Pipeline"
              description="Express-style middleware lets you log, mutate, or short-circuit any request or response in a clean chainable API."
              accent="#52525b"
            />
            <FeatureCard
              icon={<RefreshCw className="h-4 w-4" />}
              title="Smart Retries"
              description="Exponential backoff with jitter out of the box. Configure per-client or per-request — no extra libraries needed."
              accent="#71717a"
            />
            <FeatureCard
              icon={<ShieldCheck className="h-4 w-4" />}
              title="Strictly Typed"
              description="100 % strict mypy coverage. Flawless auto-completion in VS Code, PyCharm, and beyond. Ship with confidence."
              accent="#a1a1aa"
            />
            <FeatureCard
              icon={<Zap className="h-4 w-4" />}
              title="Unified Interface"
              description="One API for sync and async. Switch from requests to asyncio without rewriting a single line of business logic."
              accent="#d4d4d8"
            />
            <FeatureCard
              icon={<GitBranch className="h-4 w-4" />}
              title="Instance Inheritance"
              description="Fork a base client to create scoped instances that inherit config, headers, and middleware from the parent."
              accent="#52525b"
            />
            <FeatureCard
              icon={<Lock className="h-4 w-4" />}
              title="Secure by Default"
              description="Certificate verification on, redirects followed safely, sensitive header stripping on cross-origin redirects."
              accent="#71717a"
            />
          </div>
        </section>

        {/* ══════════════════════════════════════
            CTA FOOTER BANNER
        ══════════════════════════════════════ */}
        <section className="relative z-10 w-full max-w-5xl px-6 pb-32">
          <div className="relative overflow-hidden rounded-xl border border-zinc-200/80 bg-white p-12 text-center shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/50">
            {/* Glow blob */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full blur-3xl opacity-10 dark:opacity-20"
              style={{ background: 'radial-gradient(circle, #52525b, #71717a)' }}
            />

            <p className="font-code mb-2 text-xs font-medium uppercase tracking-widest text-zinc-500">Get started</p>
            <h2 className="font-display mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Ship your first request<br />in under 60 seconds.
            </h2>
            <p className="mb-8 text-sm text-zinc-500 dark:text-zinc-400">
              Zero config required. pip install and you're off.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/docs"
                className="group flex h-11 items-center gap-2 rounded-full bg-zinc-900 px-7 text-sm font-semibold text-white transition-all hover:bg-zinc-700 active:scale-95 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                Read the docs
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="https://github.com"
                className="font-code flex h-11 items-center gap-2 rounded-full border border-zinc-200 bg-transparent px-6 text-sm text-zinc-600 transition-all hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}