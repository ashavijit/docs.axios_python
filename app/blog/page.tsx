import { blogSource } from '@/lib/source';
import Link from 'next/link';

export default function BlogList() {
    const posts = blogSource.getPages();

    return (
        <main className="container max-w-4xl py-12 mx-auto px-4 mt-10">
            <h1 className="text-5xl font-bold mb-10 text-foreground tracking-tight">Blog</h1>
            <div className="flex flex-col gap-8">
                {posts.map((post) => (
                    <Link
                        key={post.url}
                        href={post.url}
                        className="block p-8 border border-border rounded-2xl bg-card hover:bg-muted/50 transition-all hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-white/5"
                    >
                        <h2 className="text-3xl font-semibold mb-3 text-foreground">{post.data.title}</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">{post.data.description}</p>
                    </Link>
                ))}
                {posts.length === 0 && (
                    <p className="text-muted-foreground text-lg italic">No blog posts found.</p>
                )}
            </div>
        </main>
    );
}
