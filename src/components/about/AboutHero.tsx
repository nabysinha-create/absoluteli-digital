"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function AboutHero() {
  return (
    <section className="bg-ivory px-6 pb-16 pt-36 md:px-10 md:pb-20 md:pt-44 xl:px-16">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="eyebrow text-copper"
          >
            About Absoluteli
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
            className="font-display text-display-xl leading-[0.98] text-espresso"
          >
            Creativity,
            <br />
            amplified by
            <br />
            technology.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.18 }}
            className="max-w-lg text-base leading-relaxed text-brown md:text-lg"
          >
            Absoluteli Digital is a creative and digital growth studio combining strategic
            thinking, visual storytelling and emerging creative technology to help brands show
            up differently.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.26 }}
            className="font-display max-w-lg text-xl italic text-brown md:text-2xl"
          >
            We believe technology should expand what is creatively possible — not replace the
            thinking behind it.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          className="relative aspect-[4/5] w-full"
        >
          <div className="glow-border-hover absolute left-0 top-0 h-[78%] w-[78%] overflow-hidden border border-line-dark bg-sand">
            <Image
              src="/images/about/hero-large.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 32vw, 70vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="corner-marks glow-border-hover absolute bottom-0 right-0 h-[52%] w-[52%] overflow-hidden border-4 border-ivory bg-sand">
            <Image
              src="/images/about/hero-corner.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 22vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
