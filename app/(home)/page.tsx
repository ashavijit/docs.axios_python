import Link from 'next/link';
import { ArrowRight, Terminal, RefreshCw, Layers, ShieldCheck, Activity, Copy, ChevronRight } from 'lucide-react';
import Beams from '@/components/Beams';

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-x-hidden bg-zinc-50 text-zinc-950 dark:bg-[#09090b] dark:text-zinc-50 selection:bg-blue-500/30 transition-colors duration-500">

      {/* Pure CSS Animations */}
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 h-[600px] w-full pointer-events-none opacity-50 dark:opacity-100 mix-blend-screen dark:mix-blend-normal overflow-hidden mask-image-b">
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
        {/* Subtle bottom fade for the beams */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-50 to-transparent dark:from-[#09090b]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex w-full max-w-5xl flex-col items-center px-6 pt-32 text-center md:pt-48">

        <div className="animate-in mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-sm text-zinc-600 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400">
          <span className="flex h-2 w-2 items-center justify-center">
            <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
          </span>
          <span className="font-medium">v1.0 is now available</span>
          <div className="mx-2 h-3 w-px bg-zinc-300 dark:bg-zinc-700" />
          <Link href="/changelog" className="flex items-center hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
            Changelog <ChevronRight className="ml-0.5 h-3 w-3" />
          </Link>
        </div>

        <h1 className="animate-in delay-100 mb-6 max-w-4xl text-balance text-5xl font-extrabold tracking-tighter sm:text-7xl">
          The elegant HTTP client <br className="hidden md:block" />
          for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">Python.</span>
        </h1>

        <p className="animate-in delay-200 mb-10 max-w-2xl text-balance text-lg tracking-tight text-zinc-500 dark:text-zinc-400 sm:text-xl">
          Unify your sync and async network requests. Stop wrestling with boilerplate. Start shipping with robust interceptors, powerful middleware, and builtin retries.
        </p>

        <div className="animate-in delay-300 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:w-auto">
          <Link
            href="/docs"
            className="group flex h-11 w-full items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 font-medium text-white ring-1 ring-transparent transition-all hover:bg-zinc-800 hover:ring-zinc-900/20 active:scale-95 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:hover:ring-white/20 sm:w-auto"
          >
            Start building
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <button className="group flex h-11 w-full items-center justify-between gap-4 rounded-full border border-zinc-200 bg-white px-5 text-sm font-mono text-zinc-600 shadow-sm transition-all hover:border-zinc-300 hover:bg-zinc-50 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/80 sm:w-auto">
            <span className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-zinc-400" />
              pip install axios_python
            </span>
            <Copy className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
          </button>
        </div>
      </section>

      {/* Massive Centered Code Showcase */}
      <section className="animate-in delay-400 relative z-20 w-full max-w-5xl px-6 pt-16 pb-20 md:pt-24">
        <div className="floating relative rounded-3xl border border-zinc-200 bg-white/50 p-2 shadow-2xl shadow-zinc-200/50 backdrop-blur-3xl dark:border-white/10 dark:bg-zinc-950/50 dark:shadow-black/80">

          {/* Inner Window */}
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-[#0d1117] dark:border-white/5">
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-xs font-mono text-zinc-400">api_client.py</div>
              <div className="w-12" /> {/* Centering spacer */}
            </div>

            {/* Code Content */}
            <div className="overflow-x-auto p-6 sm:p-8 text-[13px] sm:text-[15px] font-mono leading-relaxed text-zinc-300">
              <pre>
                <span className="text-[#ff7b72]">import</span> <span className="text-[#79c0ff]">axios_python</span>
                <br /><br />
                <span className="text-[#8b949e]"># 1. Create a unified instance</span>
                <br />
                api <span className="text-[#ff7b72]">=</span> axios_python.create({'{'}
                <br />
                {"    "}<span className="text-[#a5d6ff]">"base_url"</span>: <span className="text-[#a5d6ff]">"https://api.github.com"</span>,
                <br />
                {"    "}<span className="text-[#a5d6ff]">"timeout"</span>: <span className="text-[#79c0ff]">5.0</span>,
                <br />
                {"    "}<span className="text-[#a5d6ff]">"max_retries"</span>: <span className="text-[#79c0ff]">3</span>
                <br />
                {'}'})
                <br /><br />
                <span className="text-[#8b949e]"># 2. Use the exact same API for both Sync & Async</span>
                <br />
                <span className="text-[#ff7b72]">async def</span> <span className="text-[#d2a8ff]">get_user_repos</span>(username: <span className="text-[#ff7b72]">str</span>):
                <br />
                {"    "}response <span className="text-[#ff7b72]">= await</span> api.async_get(<span className="text-[#a5d6ff]">f"/users/</span>{'{username}'}<span className="text-[#a5d6ff]">/repos"</span>)
                <br />
                {"    "}response.raise_for_status()
                <br />
                {"    "}<span className="text-[#ff7b72]">return</span> response.json()
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Column Modern Feature Grid */}
      <section className="relative z-10 w-full max-w-6xl px-6 pb-32">
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={<Layers className="h-5 w-5" />}
            title="Middleware Pipeline"
            description="Tap into the lifecycle. Wrap requests with Express-style middleware to log, mutate, or cache."
          />
          <FeatureCard
            icon={<RefreshCw className="h-5 w-5" />}
            title="Smart Retries"
            description="Built-in exponential backoff means transient network errors are handled without extra code."
          />
          <FeatureCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Strictly Typed"
            description="Written with 100% strict Python type hints for flawless IDE auto-completion and analysis."
          />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/80">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-900 transition-transform group-hover:scale-105 dark:bg-zinc-800 dark:text-zinc-100">
        {icon}
      </div>
      <div>
        <h3 className="mb-2 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{title}</h3>
        <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
}