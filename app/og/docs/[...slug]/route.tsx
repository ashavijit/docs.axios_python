// app/og/docs/[...slug]/route.tsx
import { getPageImage, source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { ImageResponse } from '@takumi-rs/image-response';

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<'/og/docs/[...slug]'>) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return new ImageResponse(
    <OGImage title={page.data.title} description={page.data.description} />,
    { width: 1200, height: 630, format: 'webp' },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }));
}

// ─── Custom OG Image ──────────────────────────────────────────────────────────

function OGImage({ title, description }: { title: string; description?: string }) {
  return (
    <div
      style={{
        display: 'flex',
        width: 1200,
        height: 630,
        background: '#0a0a0f',
        fontFamily: 'monospace',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid lines */}
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          display: 'flex',
        }}
      />

      {/* Top-right radial glow */}
      <div
        style={{
          position: 'absolute', top: -160, right: -160,
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.28) 0%, transparent 70%)',
          display: 'flex',
        }}
      />

      {/* Bottom-left secondary glow */}
      <div
        style={{
          position: 'absolute', bottom: -120, left: -80,
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)',
          display: 'flex',
        }}
      />

      {/* Diagonal accent bar */}
      <div
        style={{
          position: 'absolute', top: 0, right: 220,
          width: 2, height: '100%',
          background: 'linear-gradient(to bottom, transparent, rgba(99,102,241,0.5), transparent)',
          display: 'flex',
        }}
      />

      {/* Content */}
      <div
        style={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          position: 'relative', zIndex: 10,
          width: '100%',
        }}
      >
        {/* Top: logo / brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 40, height: 40, borderRadius: 8,
              background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
            }}
          >
            <span style={{ color: '#fff', fontSize: 20, fontWeight: 700 }}>~</span>
          </div>
          <span style={{ color: '#94a3b8', fontSize: 20, letterSpacing: '0.08em' }}>
            axios_python
          </span>
          <span style={{ color: '#334155', fontSize: 20 }}>/</span>
          <span style={{ color: '#475569', fontSize: 20 }}>docs</span>
        </div>

        {/* Center: title + description */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 840 }}>
          {/* Tag line */}
          <div
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '4px 14px', borderRadius: 999, width: 'fit-content',
              border: '1px solid rgba(99,102,241,0.4)',
              background: 'rgba(99,102,241,0.1)',
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#818cf8', display: 'flex' }} />
            <span style={{ color: '#818cf8', fontSize: 14, letterSpacing: '0.1em' }}>DOCUMENTATION</span>
          </div>

          <div
            style={{
              color: '#f1f5f9',
              fontSize: title.length > 40 ? 52 : 64,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontFamily: 'sans-serif',
            }}
          >
            {title}
          </div>

          {description && (
            <div
              style={{
                color: '#64748b',
                fontSize: 22,
                lineHeight: 1.5,
                fontFamily: 'sans-serif',
                maxWidth: 700,
              }}
            >
              {description.length > 120 ? description.slice(0, 120) + '…' : description}
            </div>
          )}
        </div>

        {/* Bottom: URL hint */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 28, height: 2,
              background: 'linear-gradient(to right, #6366f1, #22d3ee)',
              display: 'flex',
            }}
          />
          <span style={{ color: '#334155', fontSize: 16, letterSpacing: '0.06em' }}>
            axios-python.dev/docs
          </span>
        </div>
      </div>
    </div>
  );
}