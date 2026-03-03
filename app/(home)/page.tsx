import Link from 'next/link';
import { ArrowRight, Terminal, RefreshCw, Layers, ShieldCheck, Activity } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex-1 w-full flex flex-col relative overflow-hidden bg-background">
      {/* Dynamic Background Patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -ml-[400px] w-[800px] h-[600px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none transition-all duration-1000 animate-pulse mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute top-20 left-1/2 -ml-[100px] w-[600px] h-[400px] rounded-full bg-yellow-500/10 blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

      {/* Hero Section */}
      <section className="relative w-full max-w-6xl mx-auto px-6 py-28 md:py-40 flex flex-col items-center text-center mt-10">
        <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 mb-10 backdrop-blur-md transition-all hover:bg-blue-500/10 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] cursor-default">
          <span className="relative flex h-2 w-2 mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          axios_python v1.0 is now available
        </div>

        <h1 className="text-6xl md:text-[5.5rem] font-extrabold tracking-tight mb-8 max-w-5xl font-headers leading-[1.05] drop-shadow-sm text-foreground">
          The elegant HTTP client
          <br className="hidden sm:block" />
          for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-yellow-500 dark:from-blue-400 dark:via-blue-500 dark:to-yellow-400 drop-shadow-sm">Python.</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-14 max-w-3xl leading-relaxed font-light">
          Unify your sync and async network requests with robust interceptors, powerful middleware, and out-of-the-box retries.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center items-center">
          <Link
            href="/docs"
            className="group relative inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-xl bg-blue-600 dark:bg-blue-600 px-10 font-bold text-white transition-all hover:bg-blue-700 dark:hover:bg-blue-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] active:scale-95 text-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-blue-400/0 -translate-x-full animate-[shimmer_2s_infinite]" />
            Read the Documentation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="group flex items-center justify-center rounded-xl border border-border bg-muted/30 backdrop-blur-sm px-8 h-14 gap-4 shadow-sm hover:border-yellow-500/50 hover:bg-yellow-500/5 transition-all cursor-text">
            <Terminal className="h-5 w-5 text-muted-foreground group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors" />
            <code className="text-base font-mono font-semibold text-foreground transition-colors">pip install axios_python</code>
          </div>
        </div>
      </section>

      {/* Code Demo & Features Section */}
      <section className="relative w-full border-t border-border bg-muted/20 pt-32 pb-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-6 grid xl:grid-cols-12 gap-16 xl:gap-8 items-center relative z-10">

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-8 xl:col-span-7 xl:pr-10">
            <FeatureCard
              icon={<Layers className="h-7 w-7 text-blue-500 dark:text-blue-400" />}
              title="Middleware Pipeline"
              description="Tap into the request lifecycle. Wrap requests with Express-style middleware or mutate config via interceptors."
            />
            <FeatureCard
              icon={<RefreshCw className="h-7 w-7 text-yellow-500 dark:text-yellow-400" />}
              title="Builtin Retries"
              description="Never fail on temporary network hiccups again. Configure exponential backoff with a single property."
            />
            <FeatureCard
              icon={<Activity className="h-7 w-7 text-emerald-500 dark:text-emerald-400" />}
              title="Unified API"
              description="A single API interface across your whole stack. Use api.get() or await api.async_get() seamlessly."
            />
            <FeatureCard
              icon={<ShieldCheck className="h-7 w-7 text-violet-500 dark:text-violet-400" />}
              title="Strict Typing"
              description="100% strict Python type hints for excellent IDE auto-completion and static analysis support."
            />
          </div>

          {/* Code Window */}
          <div className="xl:col-span-5 rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-2xl overflow-hidden shadow-blue-900/5 dark:shadow-blue-900/20 transition-all hover:-translate-y-2 hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 hover:border-blue-500/30 duration-500 group">
            <div className="flex items-center px-4 py-3.5 border-b border-border bg-muted/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-500/20" />
              </div>
              <div className="mx-auto text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">example.py</div>
            </div>
            <div className="p-8 overflow-x-auto text-[15px] font-mono leading-relaxed bg-[#f8f9fa] dark:bg-[#0d1117] text-[#24292f] dark:text-[#c9d1d9] scrollbar-thin scrollbar-thumb-blue-500/20 hover:scrollbar-thumb-blue-500/40 scrollbar-track-transparent">
              <pre>
                <span className="text-[#cf222e] dark:text-[#ff7b72]">import</span> <span className="text-[#0550ae] dark:text-[#e6edf3]">axios_python</span>
                <br /><br />
                <span className="text-[#6e7781] dark:text-[#8b949e]"># Create an isolated instance</span>
                <br />
                api <span className="text-[#cf222e] dark:text-[#ff7b72]">=</span> axios_python.create({'{'}
                <br />
                {"    "}<span className="text-[#0a3069] dark:text-[#a5d6ff]">"base_url"</span>: <span className="text-[#0a3069] dark:text-[#a5d6ff]">"https://api.github.com"</span>,
                <br />
                {"    "}<span className="text-[#0a3069] dark:text-[#a5d6ff]">"timeout"</span>: <span className="text-[#0550ae] dark:text-[#79c0ff]">5.0</span>,
                <br />
                {"    "}<span className="text-[#0a3069] dark:text-[#a5d6ff]">"max_retries"</span>: <span className="text-[#0550ae] dark:text-[#79c0ff]">3</span>
                <br />
                {'}'})
                <br /><br />
                <span className="text-[#6e7781] dark:text-[#8b949e]"># Use identical API for Sync & Async</span>
                <br />
                <span className="text-[#cf222e] dark:text-[#ff7b72]">async def</span> <span className="text-[#8250df] dark:text-[#d2a8ff]">fetch_user</span>(username: <span className="text-[#cf222e] dark:text-[#ff7b72]">str</span>):
                <br />
                {"    "}response <span className="text-[#cf222e] dark:text-[#ff7b72]">= await</span> api.async_get(<span className="text-[#0a3069] dark:text-[#a5d6ff]">f"/users/</span>{'{username}'}<span className="text-[#0a3069] dark:text-[#a5d6ff]">"</span>)
                <br />
                {"    "}response.raise_for_status()
                <br />
                {"    "}<span className="text-[#cf222e] dark:text-[#ff7b72]">return</span> response.json()
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Global Styles for Animations and Scrollbars */}
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }

        /* Custom scrollbar for webkit browsers */
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
          width: 6px;
        }
        .scrollbar-track-transparent::-webkit-scrollbar-track {
          background-color: transparent;
        }
        .scrollbar-thumb-blue-500\\/20::-webkit-scrollbar-thumb {
          background-color: rgba(59, 130, 246, 0.2);
          border-radius: 9999px;
        }
        .hover\\:scrollbar-thumb-blue-500\\/40:hover::-webkit-scrollbar-thumb {
          background-color: rgba(59, 130, 246, 0.4);
        }
      `}</style>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col gap-5 group p-6 rounded-3xl border border-transparent hover:border-border hover:bg-card/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 cursor-default">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted border border-border group-hover:scale-110 group-hover:bg-background group-hover:border-blue-500/30 transition-all duration-500 shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-foreground font-headers mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
