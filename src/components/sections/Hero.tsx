"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (shouldReduceMotion) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, [shouldReduceMotion]);

  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-espresso">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        poster="/images/hero/hero-poster.jpg"
        autoPlay={!shouldReduceMotion}
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-espresso-deep via-espresso/40 to-espresso/10"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-espresso-deep/70 via-transparent to-transparent"
      />

      <div className="relative z-10 w-full px-6 pb-16 pt-40 md:px-10 md:pb-24 xl:px-16">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex flex-col gap-2"
          >
            <span className="eyebrow text-copper-light">Absoluteli Digital</span>
            <span className="text-sm text-cream-dim">AI Creative &amp; Digital Growth Studio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="font-display text-display-lg leading-[1.02] text-cream max-w-xl"
          >
            We turn products &amp; spaces into content people want to watch.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
            className="max-w-lg text-base leading-relaxed text-cream-dim md:text-lg"
          >
            Creative production, social content and digital growth for visually driven brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Button href="/our-work" variant="on-dark">
              View Our Work
            </Button>
            <Button href="/contact" variant="on-dark-outline">
              Book a Call
            </Button>
          </motion.div>
        </div>
      </div>

      <div
        aria-hidden
        className="corner-marks pointer-events-none absolute inset-6 top-24 hidden md:block md:inset-10 md:top-28"
      />

      <span className="eyebrow absolute right-6 top-24 z-10 hidden text-cream/50 md:right-10 md:top-28 md:block">
        01 — Cinematic Reel
      </span>

      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 opacity-70 md:flex"
      >
        <span className="h-10 w-px bg-cream/40" />
      </div>
    </section>
  );
}
