import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import LightRays from '../components/LightRays';

export default function NotFound() {
    return (
        <main className="flex-1 w-full flex flex-col items-center justify-center relative bg-background min-h-[calc(100vh-140px)] overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-100 mix-blend-screen dark:mix-blend-normal">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={1}
                    lightSpread={0.5}
                    rayLength={3}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0}
                    distortion={0}
                    className="custom-rays"
                    pulsating={false}
                    fadeDistance={1}
                    saturation={1}
                />
            </div>
            {/* Subtle Grid Background */}

            <div className="relative z-10 flex flex-col items-center text-center px-6">
                <h1 className="text-8xl md:text-[9rem] font-bold tracking-tighter text-white/50 mb-4 select-none">
                    404
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
                    Page not found
                </h2>
                <p className="text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
                </p>

                <Link
                    href="/"
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-8 font-medium text-background transition-colors hover:bg-foreground/90 gap-2"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                </Link>
            </div>
        </main>
    );
}
