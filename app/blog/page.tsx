import { blogSource } from '@/lib/source';
import Link from 'next/link';

export default function BlogList() {
    const posts = blogSource.getPages();

    return (
        <main className="min-h-screen bg-background">
            {/* Header */}
            <div className="border-b border-border">
                <div className="container max-w-5xl mx-auto px-6 py-16">
                    <p className="text-xs font-mono tracking-[0.25em] uppercase text-muted-foreground mb-4">
                        axios_python
                    </p>
                    <h1
                        className="text-7xl font-black tracking-tighter text-foreground leading-none"
                        style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                        Blog
                    </h1>
                </div>
            </div>

            {/* Post list */}
            <div className="container max-w-5xl mx-auto px-6">
                {posts.length === 0 ? (
                    <div className="py-32 text-center">
                        <p className="text-muted-foreground font-mono text-sm tracking-widest uppercase">
                            No posts yet
                        </p>
                    </div>
                ) : (
                    <ul className="divide-y divide-border">
                        {posts.map((post, index) => (
                            <li key={post.url}>
                                <Link
                                    href={post.url}
                                    className="group flex items-start gap-8 py-10 transition-colors hover:bg-muted/30 -mx-6 px-6"
                                >
                                    {/* Index number */}
                                    <span className="hidden sm:block font-mono text-xs text-muted-foreground/40 mt-1.5 w-6 shrink-0 select-none">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                                            {post.data.title}
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed text-sm max-w-2xl">
                                            {post.data.description}
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    <span className="shrink-0 mt-1 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 text-lg">
                                        &rarr;
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Footer rule */}
            <div className="container max-w-5xl mx-auto px-6 mt-8 pb-16">
                <div className="border-t border-border pt-6 flex items-center justify-between">
                    <p className="font-mono text-xs text-muted-foreground/50 uppercase tracking-widest">
                        {posts.length} {posts.length === 1 ? 'post' : 'posts'}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground/50 uppercase tracking-widest">
                        axios_python team
                    </p>
                </div>
            </div>
        </main>
    );
}