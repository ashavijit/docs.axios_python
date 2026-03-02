import Link from 'next/link';
import { ArrowRight, Terminal, RefreshCw, Layers, ShieldCheck, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex-1 w-full flex flex-col relative overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-orange-500/10 via-background to-transparent pointer-events-none" />

      {/* Hero Section */}
      <section className="relative w-full max-w-6xl mx-auto px-6 py-24 md:py-40 flex flex-col items-center text-center mt-8">
        <div className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-600 dark:text-orange-400 mb-10 backdrop-blur-md transition-colors hover:bg-orange-500/20">
          <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
          axios_python v1.0 is now available
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-10 max-w-5xl text-foreground font-headers leading-[1.1] md:leading-[1.1]">
          The elegant HTTP client
          <br className="hidden sm:block" />
          for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Python.</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-14 max-w-3xl leading-relaxed">
          Unify your sync and async network requests with robust interceptors, powerful middleware, and out-of-the-box retries.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center items-center">
          <Link
            href="/docs"
            className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-xl bg-foreground px-10 font-medium text-background transition-transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 active:scale-95 text-lg"
          >
            Read the Documentation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

          <div className="flex items-center justify-center rounded-xl border border-border bg-card px-8 h-14 gap-4 shadow-sm hover:border-orange-500/50 transition-colors">
            <Terminal className="h-5 w-5 text-muted-foreground" />
            <code className="text-base font-mono text-foreground font-semibold">pip install axios_python</code>
          </div>
        </div>
      </section>

      {/* Code Demo & Features Section */}
      <section className="relative w-full border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-20 items-center">

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-12 lg:pr-10">
            <FeatureCard
              icon={<Layers className="h-7 w-7 text-orange-500" />}
              title="Middleware Pipeline"
              description="Tap into the request lifecycle. Wrap requests with Express-style middleware or mutate config via interceptors."
            />
            <FeatureCard
              icon={<RefreshCw className="h-7 w-7 text-orange-500" />}
              title="Builtin Retries"
              description="Never fail on temporary network hiccups again. Configure exponential backoff with a single property."
            />
            <FeatureCard
              icon={<Zap className="h-7 w-7 text-orange-500" />}
              title="Unified API"
              description="A single API interface across your whole stack. Use api.get() or await api.async_get() seamlessly."
            />
            <FeatureCard
              icon={<ShieldCheck className="h-7 w-7 text-orange-500" />}
              title="Strict Typing"
              description="100% strict Python type hints for excellent IDE auto-completion and static analysis support."
            />
          </div>

          {/* Code Window */}
          <div className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden shadow-orange-500/10 transition-transform hover:-translate-y-1 hover:shadow-orange-500/20 duration-500">
            <div className="flex items-center px-4 py-4 border-b border-border bg-muted/50">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-400/80" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-400/80" />
                <div className="w-3.5 h-3.5 rounded-full bg-green-400/80" />
              </div>
              <div className="mx-auto text-sm font-mono text-muted-foreground">example.py</div>
            </div>
            <div className="p-8 overflow-x-auto text-base font-mono text-foreground leading-relaxed bg-[#0d1117] dark:bg-transparent">
              <pre>
                <span className="text-purple-400">import</span> axios_python
                <br /><br />
                <span className="text-zinc-500"># Create an isolated instance</span>
                <br />
                api <span className="text-purple-400">=</span> axios_python.create({'{'}
                <br />
                {"    "}<span className="text-green-300">"base_url"</span>: <span className="text-green-300">"https://api.github.com"</span>,
                <br />
                {"    "}<span className="text-green-300">"timeout"</span>: <span className="text-orange-300">5.0</span>,
                <br />
                {"    "}<span className="text-green-300">"max_retries"</span>: <span className="text-orange-300">3</span>
                <br />
                {'}'})
                <br /><br />
                <span className="text-zinc-500"># Use identical API for Sync & Async</span>
                <br />
                <span className="text-purple-400">async def</span> <span className="text-blue-400">fetch_user</span>(username: <span className="text-amber-300">str</span>):
                <br />
                {"    "}response <span className="text-purple-400">= await</span> api.async_get(<span className="text-green-300">f"/users/</span>{'{username}'}<span className="text-green-300">"</span>)
                <br />
                {"    "}response.raise_for_status()
                <br />
                {"    "}<span className="text-purple-400">return</span> response.json()
              </pre>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col gap-4 group">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors duration-300">
        <div className="group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-foreground font-headers">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-lg">
        {description}
      </p>
    </div>
  );
}
